#!/usr/bin/env node
/**
 * Attach real-world coordinates to archived animals using public biodiversity APIs.
 * Primary: GBIF georeferenced occurrences (exact recorded localities).
 * Fallback: Wikidata coordinate location (P625) when GBIF has none.
 * Never invents coordinates.
 *
 *   node scripts/geo-enrich-species.mjs
 *   ARCHIVE_GEO_MAX=2000 ARCHIVE_GEO_CONCURRENCY=10 node scripts/geo-enrich-species.mjs
 *   ARCHIVE_GEO_RETRY_MISSING=1 node scripts/geo-enrich-species.mjs
 */

import {
  createReadStream,
  createWriteStream,
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { createInterface } from "node:readline";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { finished } from "node:stream/promises";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = path.join(root, "data", "species-archive");
const animalsPath = path.join(dataDir, "animals.jsonl");
const cachePath = path.join(dataDir, "geo-cache.json");
const countryPinsPath = path.join(dataDir, "geo-country-pins.json");
const mapPath = path.join(dataDir, "map-species.jsonl");
const metaPath = path.join(dataDir, "map-species-meta.json");
const progressPath = path.join(dataDir, "geo-progress.json");

const UA = "NAU-Web-SpeciesArchive/1.0 (education; GBIF+Wikidata geo-enrich)";
const MAX = Number(process.env.ARCHIVE_GEO_MAX || 0);
const CONCURRENCY = Math.max(1, Number(process.env.ARCHIVE_GEO_CONCURRENCY || 10));
const SLEEP_MS = Number(process.env.ARCHIVE_GEO_SLEEP_MS || 15);
const RETRY_MISSING = process.env.ARCHIVE_GEO_RETRY_MISSING === "1";
const USE_WIKIDATA = process.env.ARCHIVE_GEO_WIKIDATA !== "0";

const FISH_CLASSES = new Set([
  "actinopterygii",
  "chondrichthyes",
  "cephalaspidomorphi",
  "myxini",
  "sarcopterygii",
  "teleostei",
  "elasmobranchii",
  "holocephali",
  "petromyzonti",
  "appendicularia",
  "thaliacea",
  "ascidiacea",
]);

/** Ocean / marine invertebrate phyla & classes — place as "other" with marine emojis. */
const MARINE_PHYLA = new Set([
  "cnidaria",
  "ctenophora",
  "echinodermata",
  "porifera",
  "hemichordata",
  "brachiopoda",
  "bryozoa",
  "chaetognatha",
  "xenacoelomorpha",
  "mollusca",
]);

const MARINE_CLASSES = new Set([
  ...FISH_CLASSES,
  "cephalopoda",
  "bivalvia",
  "gastropoda",
  "polyplacophora",
  "scaphopoda",
  "solenogastres",
  "anthozoa",
  "hydrozoa",
  "scyphozoa",
  "cubozoa",
  "octocorallia",
  "hexacorallia",
  "demospongiae",
  "calcarea",
  "hexactinellida",
  "homoscleromorpha",
  "echinoidea",
  "asteroidea",
  "ophiuroidea",
  "holothuroidea",
  "crinoidea",
  "malacostraca",
  "maxillopoda",
  "copepoda",
  "branchiopoda",
  "ostracoda",
  "merostomata",
  "polychaeta",
  "hirudinea",
]);

const CRUSTACEAN_CLASSES = new Set([
  "malacostraca",
  "maxillopoda",
  "copepoda",
  "branchiopoda",
  "ostracoda",
  "merostomata",
]);

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function isMarineAnimal(animal) {
  if (animal?.marine) return true;
  const c = (animal?.class || "").toLowerCase();
  const p = (animal?.phylum || "").toLowerCase();
  if (MARINE_PHYLA.has(p) || MARINE_CLASSES.has(c)) return true;
  if (FISH_CLASSES.has(c)) return true;
  // Cetaceans / sirenians / pinnipeds by order when present
  const o = (animal?.order || "").toLowerCase();
  if (
    /cetacea|sirenia|pinnipedia|carnivora/.test(o) &&
    /\b(balaen|tursiop|delphin|phoca|otari|mirounga|dugong|trichech|orca|physeter|megaptera)\b/i.test(
      animal?.name || "",
    )
  ) {
    return true;
  }
  return false;
}

function groupFrom(className, phylum) {
  const c = (className || "").toLowerCase();
  const p = (phylum || "").toLowerCase();
  if (c === "mammalia") return "mammals";
  if (c === "aves") return "birds";
  if (c === "reptilia") return "reptiles";
  if (c === "amphibia") return "amphibians";
  if (
    FISH_CLASSES.has(c) ||
    (p === "chordata" && /ichth|teleost|chondrich|elasmobranch/.test(c))
  ) {
    return "fish";
  }
  // Crustaceans & other marine arthropods are ocean life, not land insects
  if (CRUSTACEAN_CLASSES.has(c)) return "other";
  if (c === "insecta" || c === "arachnida") return "insects";
  if (p === "arthropoda") return "insects";
  return "other";
}

function groupColor(group) {
  return (
    {
      mammals: "#9fd0ff",
      birds: "#f0b429",
      reptiles: "#3dcf8e",
      amphibians: "#7dd3c7",
      fish: "#6bb3ff",
      insects: "#c4a575",
      other: "#b8c0cc",
    }[group] || "#b8c0cc"
  );
}

function regionLabel(lat, lng, country) {
  if (country) return country;
  if (lat > 60) return lat > 0 ? "High northern latitudes" : "High southern latitudes";
  if (Math.abs(lat) < 23.5) return "Tropics";
  if (lat >= 23.5) return "Northern temperate";
  return "Southern temperate";
}

function validCoord(lat, lng) {
  if (typeof lat !== "number" || typeof lng !== "number") return false;
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return false;
  if (Math.abs(lat) > 90 || Math.abs(lng) > 180) return false;
  if (lat === 0 && lng === 0) return false;
  return true;
}

async function getJson(url, init = {}) {
  for (let attempt = 0; attempt < 6; attempt++) {
    try {
      const res = await fetch(url, {
        ...init,
        headers: {
          Accept: "application/json",
          "User-Agent": UA,
          ...(init.headers || {}),
        },
      });
      if (res.status === 429 || res.status >= 500) {
        await sleep(500 * (attempt + 1));
        continue;
      }
      if (!res.ok) return null;
      return res.json();
    } catch {
      await sleep(350 * (attempt + 1));
    }
  }
  return null;
}

async function matchGbifTaxonKey(name) {
  const data = await getJson(
    `https://api.gbif.org/v1/species/match?name=${encodeURIComponent(name)}&verbose=false`,
  );
  if (!data) return null;
  const key = data.usageKey || data.speciesKey || data.acceptedUsageKey;
  if (!key) return null;
  if (data.confidence != null && data.confidence < 80) return null;
  if (data.matchType === "HIGHERRANK") return null;
  return String(key);
}

async function occurrenceFromGbif(name, gbifKey) {
  const keys = [];
  if (gbifKey) keys.push(String(gbifKey));
  const matched = await matchGbifTaxonKey(name);
  if (matched && !keys.includes(matched)) keys.push(matched);

  for (const key of keys) {
    const data = await getJson(
      `https://api.gbif.org/v1/occurrence/search?taxonKey=${encodeURIComponent(key)}&hasCoordinate=true&hasGeospatialIssue=false&limit=1`,
    );
    const hit = data?.results?.[0];
    if (!hit) continue;
    const lat = hit.decimalLatitude;
    const lng = hit.decimalLongitude;
    if (!validCoord(lat, lng)) continue;
    return {
      lat,
      lng,
      country: hit.country || hit.countryCode || null,
      gbifTaxonKey: String(hit.taxonKey || key),
      source: "gbif-occurrence",
    };
  }

  // Name search last — weaker than taxonKey but recovers some misses
  const byName = await getJson(
    `https://api.gbif.org/v1/occurrence/search?scientificName=${encodeURIComponent(name)}&hasCoordinate=true&hasGeospatialIssue=false&limit=1`,
  );
  const hit = byName?.results?.[0];
  if (hit) {
    const lat = hit.decimalLatitude;
    const lng = hit.decimalLongitude;
    if (validCoord(lat, lng)) {
      return {
        lat,
        lng,
        country: hit.country || hit.countryCode || null,
        gbifTaxonKey: hit.taxonKey ? String(hit.taxonKey) : null,
        source: "gbif-occurrence",
      };
    }
  }
  return null;
}

/** Wikidata P625 — published coordinate for the taxon (often type locality / range point). */
async function coordinateFromWikidata(name) {
  if (!USE_WIKIDATA) return null;
  const safe = name.replace(/\\/g, "").replace(/"/g, '\\"');
  const query = `
SELECT ?lat ?lng ?countryLabel WHERE {
  ?item wdt:P225 "${safe}" ;
        wdt:P105 wd:Q7432 ;
        p:P625/psv:P625 ?node .
  ?node wikibase:geoLatitude ?lat ;
        wikibase:geoLongitude ?lng .
  OPTIONAL { ?item wdt:P17 ?country . }
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}
LIMIT 1`.trim();

  const url =
    "https://query.wikidata.org/sparql?" +
    new URLSearchParams({ format: "json", query });
  const data = await getJson(url, {
    headers: { Accept: "application/sparql-results+json" },
  });
  const b = data?.results?.bindings?.[0];
  if (!b) return null;
  const lat = Number(b.lat?.value);
  const lng = Number(b.lng?.value);
  if (!validCoord(lat, lng)) return null;
  return {
    lat,
    lng,
    country: b.countryLabel?.value || null,
    source: "wikidata-p625",
  };
}

async function lookupOccurrence(name, gbifKey) {
  const gbif = await occurrenceFromGbif(name, gbifKey);
  if (gbif) return gbif;
  const wiki = await coordinateFromWikidata(name);
  if (wiki) return wiki;
  return { missing: true, source: "gbif-occurrence" };
}

/** Prefer English vernacular from GBIF when a taxon key is known. */
async function lookupVernacular(gbifTaxonKey) {
  if (!gbifTaxonKey) return null;
  const data = await getJson(
    `https://api.gbif.org/v1/species/${encodeURIComponent(gbifTaxonKey)}/vernacularNames?limit=20`,
  );
  const rows = data?.results || [];
  const en = rows.filter(
    (r) =>
      r.vernacularName &&
      (!r.language || /^en/i.test(r.language) || r.language === ""),
  );
  const hit = en.find((r) => r.preferred) || en[0];
  const name = hit?.vernacularName?.trim();
  if (!name) return null;
  if (/^[A-Z][a-z]+(\s+[a-z]+)+$/.test(name)) return null;
  return name;
}

function loadCache() {
  if (!existsSync(cachePath)) return {};
  try {
    return JSON.parse(readFileSync(cachePath, "utf8"));
  } catch {
    return {};
  }
}

function saveCache(cache) {
  try {
    if (existsSync(countryPinsPath)) {
      const pins = JSON.parse(readFileSync(countryPinsPath, "utf8"));
      for (const [k, v] of Object.entries(pins || {})) {
        if (v?.lat != null && v?.lng != null) cache[k] = v;
      }
    }
  } catch {
    /* ignore */
  }
  writeFileSync(cachePath, JSON.stringify(cache));
}

async function readAnimals() {
  const rows = [];
  if (!existsSync(animalsPath)) return rows;
  const rl = createInterface({
    input: createReadStream(animalsPath, { encoding: "utf8" }),
    crlfDelay: Infinity,
  });
  for await (const line of rl) {
    if (!line.trim()) continue;
    try {
      const rec = JSON.parse(line);
      if (rec?.name) rows.push(rec);
    } catch {
      /* skip */
    }
  }
  return rows;
}

async function mapPool(items, concurrency, worker) {
  let i = 0;
  const runners = Array.from({ length: concurrency }, async () => {
    while (i < items.length) {
      const idx = i++;
      await worker(items[idx], idx);
    }
  });
  await Promise.all(runners);
}

async function main() {
  if (!existsSync(dataDir)) mkdirSync(dataDir, { recursive: true });
  if (!existsSync(animalsPath)) {
    console.error("Missing animals.jsonl — run npm run archive:ingest first");
    process.exit(1);
  }

  const animals = await readAnimals();
  const cache = loadCache();
  // Apply durable country overlay immediately so flushes never drop BG/RO/RU/polar pins
  try {
    if (existsSync(countryPinsPath)) {
      const pins = JSON.parse(readFileSync(countryPinsPath, "utf8"));
      let n = 0;
      for (const [k, v] of Object.entries(pins || {})) {
        if (v?.lat != null && v?.lng != null) {
          cache[k] = v;
          n += 1;
        }
      }
      if (n) console.log(`Merged ${n.toLocaleString()} country-overlay pins into geo cache`);
    }
  } catch {
    /* ignore */
  }
  const todo = [];
  for (const animal of animals) {
    const key = animal.name.toLowerCase();
    const cached = cache[key];
    if (cached?.lat != null && cached?.lng != null) continue;
    if (cached?.missing && !RETRY_MISSING) continue;
    todo.push(animal);
  }

  // Vertebrates → fish → other ocean life → land invertebrates.
  const rank = (a) => {
    const g = groupFrom(a.class, a.phylum);
    if (g === "mammals") return 0;
    if (g === "birds") return 1;
    if (g === "reptiles") return 2;
    if (g === "amphibians") return 3;
    if (g === "fish") return 4;
    if (isMarineAnimal(a)) return 5; // cephalopods, corals, echinoderms, crustaceans…
    if (g === "insects") return 6;
    return 7;
  };
  todo.sort((a, b) => rank(a) - rank(b) || String(a.name).localeCompare(b.name));

  const limit = MAX > 0 ? Math.min(MAX, todo.length) : todo.length;
  const batch = todo.slice(0, limit);
  console.log(
    `Animals ${animals.length.toLocaleString()} · cached ${Object.keys(cache).length.toLocaleString()} · to fetch ${batch.length.toLocaleString()} (concurrency ${CONCURRENCY}${RETRY_MISSING ? ", retry misses" : ""})`,
  );
  console.log(
    "Coordinates: GBIF occurrences first, then Wikidata P625 — never invented.",
  );

  function mergeCountryPinsFromDisk() {
    try {
      // Durable overlay from country enrich — always wins over global first-hit pins
      if (existsSync(countryPinsPath)) {
        const pins = JSON.parse(readFileSync(countryPinsPath, "utf8"));
        for (const [k, v] of Object.entries(pins || {})) {
          if (v?.lat != null && v?.lng != null) cache[k] = v;
        }
      }
      const disk = loadCache();
      for (const [k, v] of Object.entries(disk)) {
        if (v?.source === "gbif-country-occurrence" && v.lat != null) {
          cache[k] = v;
        }
      }
    } catch {
      /* ignore */
    }
  }

  async function writeMapFromCache() {
    mergeCountryPinsFromDisk();
    const out = createWriteStream(mapPath, { encoding: "utf8" });
    let mapped = 0;
    const byRegion = Object.create(null);
    const bySource = Object.create(null);
    for (const animal of animals) {
      const geo = cache[animal.name.toLowerCase()];
      if (!geo || geo.lat == null || geo.lng == null) continue;
      const group = groupFrom(animal.class, animal.phylum);
      const regionName = regionLabel(geo.lat, geo.lng, geo.country);
      const rec = {
        id: animal.col || animal.gbif || animal.worms || animal.name,
        name: animal.name,
        auth: animal.auth,
        lat: Number(geo.lat.toFixed(5)),
        lng: Number(geo.lng.toFixed(5)),
        region: (geo.country || regionName).toLowerCase().replace(/\s+/g, "_"),
        regionName,
        phylum: animal.phylum,
        class: animal.class,
        order: animal.order,
        family: animal.family,
        group,
        color: groupColor(group),
        col: animal.col,
        gbif: animal.gbif || geo.gbifTaxonKey || undefined,
        worms: animal.worms,
        commonName: geo.commonName || undefined,
        geoSource: geo.source || "gbif-occurrence",
      };
      out.write(`${JSON.stringify(rec)}\n`);
      byRegion[rec.regionName] = (byRegion[rec.regionName] || 0) + 1;
      bySource[rec.geoSource] = (bySource[rec.geoSource] || 0) + 1;
      mapped += 1;
    }
    out.end();
    await finished(out);
    writeFileSync(
      metaPath,
      JSON.stringify(
        {
          builtAt: new Date().toISOString(),
          count: mapped,
          method: "gbif-occurrence+wikidata-p625",
          note: "Pins use a real published locality (GBIF occurrence or Wikidata coordinate) — not dens/nests or invented points.",
          byRegion,
          bySource,
          cacheSize: Object.keys(cache).length,
        },
        null,
        2,
      ),
    );
    return mapped;
  }

  let done = 0;
  let found = 0;
  let flushChain = Promise.resolve();
  const scheduleFlush = () => {
    flushChain = flushChain.then(async () => {
      const mapped = await writeMapFromCache();
      console.log(`  map flush → ${mapped.toLocaleString()} real localities`);
    });
    return flushChain;
  };

  await mapPool(batch, CONCURRENCY, async (animal) => {
    const key = animal.name.toLowerCase();
    // Never clobber country-targeted pins (BG/RO/RU land wildlife pass)
    const existing = cache[key];
    if (
      existing?.lat != null &&
      existing?.source === "gbif-country-occurrence"
    ) {
      done += 1;
      found += 1;
      return;
    }
    const geo = await lookupOccurrence(animal.name, animal.gbif);
    // Optional — vernacular doubles GBIF calls; enable with ARCHIVE_GEO_VERNACULAR=1
    if (
      process.env.ARCHIVE_GEO_VERNACULAR === "1" &&
      geo.lat != null &&
      geo.gbifTaxonKey
    ) {
      const common = await lookupVernacular(geo.gbifTaxonKey);
      if (common) geo.commonName = common;
    }
    cache[key] = geo;
    if (geo.lat != null) found += 1;
    done += 1;
    if (done % 40 === 0) {
      saveCache(cache);
      writeFileSync(
        progressPath,
        JSON.stringify(
          {
            updatedAt: new Date().toISOString(),
            done,
            found,
            remaining: batch.length - done,
            totalAnimals: animals.length,
            method: "gbif-occurrence+wikidata-p625",
          },
          null,
          2,
        ),
      );
      console.log(
        `geo ${done}/${batch.length} · hits ${found} (${((100 * found) / Math.max(done, 1)).toFixed(1)}%)`,
      );
    }
    if (done % 80 === 0) await scheduleFlush();
    if (SLEEP_MS) await sleep(SLEEP_MS);
  });
  saveCache(cache);
  await flushChain;

  // Reload disk cache so a concurrent country-enrich pass is not wiped
  const diskCache = loadCache();
  for (const [k, v] of Object.entries(diskCache)) {
    if (v?.source === "gbif-country-occurrence" && v.lat != null) {
      cache[k] = v;
    } else if (!cache[k] && v) {
      cache[k] = v;
    }
  }
  saveCache(cache);

  const mapped = await writeMapFromCache();
  console.log(
    `\nMapped ${mapped.toLocaleString()} species with real coordinates → ${mapPath}`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
