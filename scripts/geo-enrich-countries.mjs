#!/usr/bin/env node
/**
 * Fill under-covered countries with real GBIF land-wildlife localities.
 * Global geo-enrich picks the first world occurrence — often tropical — so
 * Bulgaria / Romania / Russia stay empty of mammals, birds, etc.
 *
 * This pass queries GBIF occurrences filtered by country + class, then
 * writes those coordinates into geo-cache and rebuilds map-species.jsonl.
 *
 *   node scripts/geo-enrich-countries.mjs
 *   ARCHIVE_COUNTRY_CODES=BG,RO,RU ARCHIVE_COUNTRY_MAX_PER_CLASS=250 node scripts/geo-enrich-countries.mjs
 */

import {
  createReadStream,
  createWriteStream,
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
  appendFileSync,
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

const UA = "NAU-Web-SpeciesArchive/1.0 (education; country land-wildlife enrich)";
const SLEEP_MS = Number(process.env.ARCHIVE_COUNTRY_SLEEP_MS || 40);
const MAX_PER_CLASS = Math.max(
  20,
  Number(process.env.ARCHIVE_COUNTRY_MAX_PER_CLASS || 300),
);
const PAGE_SIZE = 100;
/** Prefer overwriting an existing pin when the species already had a non-target locality. */
const OVERRIDE = process.env.ARCHIVE_COUNTRY_OVERRIDE !== "0";

/** Polar ISO codes — penguins, seals, polar bears, arctic foxes, etc. */
const POLAR_CODES = new Set(["AQ", "GS", "HM", "TF", "BV", "GL", "SJ", "IS"]);

const COUNTRY_CODES = (
  process.env.ARCHIVE_COUNTRY_CODES ||
  "AQ,GS,HM,TF,BV,GL,SJ,IS,BG,RO,RU,UA,MD,RS,MK,AL,GR,TR,HU"
)
  .split(",")
  .map((c) => c.trim().toUpperCase())
  .filter(Boolean);

/**
 * GBIF class taxon keys — land/marine vertebrates.
 * Note: backbone "Reptilia" (358) does not index occurrences; use Squamata + Testudines.
 * Poles: mammals + birds only (penguins, seals, whales, foxes, muskox…).
 */
const LAND_CLASSES = [
  { name: "Mammalia", key: 359, group: "mammals" },
  { name: "Aves", key: 212, group: "birds" },
  { name: "Squamata", key: 11592253, group: "reptiles", className: "Reptilia" },
  { name: "Testudines", key: 11418114, group: "reptiles", className: "Reptilia" },
  { name: "Amphibia", key: 131, group: "amphibians" },
];

const POLAR_CLASSES = [
  { name: "Mammalia", key: 359, group: "mammals" },
  { name: "Aves", key: 212, group: "birds" },
];

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
]);

const COUNTRY_NAMES = {
  AQ: "Antarctica",
  GS: "South Georgia and the South Sandwich Islands",
  HM: "Heard Island and McDonald Islands",
  TF: "French Southern Territories",
  BV: "Bouvet Island",
  GL: "Greenland",
  SJ: "Svalbard and Jan Mayen",
  IS: "Iceland",
  BG: "Bulgaria",
  RO: "Romania",
  RU: "Russian Federation",
  UA: "Ukraine",
  MD: "Moldova",
  RS: "Serbia",
  MK: "North Macedonia",
  AL: "Albania",
  GR: "Greece",
  TR: "Türkiye",
  HU: "Hungary",
};

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function validCoord(lat, lng) {
  if (typeof lat !== "number" || typeof lng !== "number") return false;
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return false;
  if (Math.abs(lat) > 90 || Math.abs(lng) > 180) return false;
  if (lat === 0 && lng === 0) return false;
  return true;
}

function groupFrom(className, phylum) {
  const c = (className || "").toLowerCase();
  const p = (phylum || "").toLowerCase();
  if (c === "mammalia") return "mammals";
  if (c === "aves") return "birds";
  if (c === "reptilia") return "reptiles";
  if (c === "amphibia") return "amphibians";
  if (FISH_CLASSES.has(c)) return "fish";
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
  if (lat > 60) return "High northern latitudes";
  if (Math.abs(lat) < 23.5) return "Tropics";
  if (lat >= 23.5) return "Northern temperate";
  return "Southern temperate";
}

function isTargetCountry(country) {
  if (!country) return false;
  const n = String(country).toLowerCase();
  return Object.values(COUNTRY_NAMES).some((v) => v.toLowerCase() === n) ||
    COUNTRY_CODES.some((c) => n === c.toLowerCase());
}

/** Lower = more important to keep filled (poles + BG/RO/RU first). */
function countryPriority(country) {
  if (!country) return 99;
  const n = String(country).toLowerCase();
  const order = [
    "antarctica",
    "south georgia",
    "heard island",
    "french southern",
    "bouvet",
    "greenland",
    "svalbard",
    "iceland",
    "bulgaria",
    "romania",
    "russian federation",
    "russia",
    "ukraine",
    "moldova",
    "serbia",
    "north macedonia",
    "albania",
    "hungary",
    "greece",
    "türkiye",
    "turkey",
  ];
  const idx = order.findIndex((x) => n === x || n.includes(x));
  return idx === -1 ? 90 : idx;
}

function classesForCountry(code) {
  if (POLAR_CODES.has(code)) return POLAR_CLASSES;
  return LAND_CLASSES;
}

async function getJson(url) {
  for (let attempt = 0; attempt < 8; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { Accept: "application/json", "User-Agent": UA },
      });
      if (res.status === 429 || res.status >= 500) {
        await sleep(600 * (attempt + 1));
        continue;
      }
      if (!res.ok) return null;
      return res.json();
    } catch {
      await sleep(400 * (attempt + 1));
    }
  }
  return null;
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
  writeFileSync(cachePath, JSON.stringify(cache));
}

function loadCountryPins() {
  if (!existsSync(countryPinsPath)) return {};
  try {
    return JSON.parse(readFileSync(countryPinsPath, "utf8"));
  } catch {
    return {};
  }
}

function saveCountryPins(pins) {
  writeFileSync(countryPinsPath, JSON.stringify(pins));
}

async function readAnimalsIndex() {
  const byName = new Map();
  if (!existsSync(animalsPath)) return byName;
  const rl = createInterface({
    input: createReadStream(animalsPath, { encoding: "utf8" }),
    crlfDelay: Infinity,
  });
  for await (const line of rl) {
    if (!line.trim()) continue;
    try {
      const rec = JSON.parse(line);
      if (rec?.name) byName.set(rec.name.toLowerCase(), rec);
    } catch {
      /* skip */
    }
  }
  return byName;
}

/**
 * Page GBIF occurrences for one country + class until we have enough unique species.
 */
async function collectCountryClass(countryCode, landClass) {
  const found = new Map(); // speciesName lower -> hit
  let offset = 0;
  let pages = 0;
  const hardPageCap = 40;

  while (found.size < MAX_PER_CLASS && pages < hardPageCap) {
    const url =
      `https://api.gbif.org/v1/occurrence/search?` +
      new URLSearchParams({
        country: countryCode,
        taxonKey: String(landClass.key),
        hasCoordinate: "true",
        hasGeospatialIssue: "false",
        limit: String(PAGE_SIZE),
        offset: String(offset),
      });
    const data = await getJson(url);
    const results = data?.results || [];
    if (!results.length) break;

    for (const hit of results) {
      const name =
        hit.species ||
        hit.scientificName?.split(/\s+/).slice(0, 2).join(" ") ||
        null;
      if (!name || !/^[A-Z][a-z]+ [a-z]+/.test(name)) continue;
      const lat = hit.decimalLatitude;
      const lng = hit.decimalLongitude;
      if (!validCoord(lat, lng)) continue;
      // Keep occurrence inside the requested country when possible
      const code = (hit.countryCode || "").toUpperCase();
      if (code && code !== countryCode) continue;

      const key = name.toLowerCase();
      if (found.has(key)) continue;

      found.set(key, {
        name,
        lat,
        lng,
        country: hit.country || COUNTRY_NAMES[countryCode] || countryCode,
        countryCode,
        gbifTaxonKey: hit.speciesKey
          ? String(hit.speciesKey)
          : hit.taxonKey
            ? String(hit.taxonKey)
            : null,
        class: landClass.className || landClass.name,
        phylum: "Chordata",
        order: hit.order || null,
        family: hit.family || null,
        vernacular: hit.vernacularName || null,
        source: "gbif-country-occurrence",
        group: landClass.group,
      });
      if (found.size >= MAX_PER_CLASS) break;
    }

    offset += results.length;
    pages += 1;
    if (results.length < PAGE_SIZE) break;
    if (SLEEP_MS) await sleep(SLEEP_MS);
  }

  return [...found.values()];
}

async function writeMapFromCache(animalsByName, cache) {
  const out = createWriteStream(mapPath, { encoding: "utf8" });
  let mapped = 0;
  const byRegion = Object.create(null);
  const bySource = Object.create(null);
  const byGroup = Object.create(null);

  for (const animal of animalsByName.values()) {
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
    byGroup[group] = (byGroup[group] || 0) + 1;
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
        method: "gbif-occurrence+wikidata-p625+country-land",
        note: "Pins use real published localities. Country pass fills under-covered land wildlife.",
        byRegion,
        bySource,
        byGroup,
        cacheSize: Object.keys(cache).length,
      },
      null,
      2,
    ),
  );
  return { mapped, byRegion, byGroup };
}

async function main() {
  if (!existsSync(dataDir)) mkdirSync(dataDir, { recursive: true });
  if (!existsSync(animalsPath)) {
    console.error("Missing animals.jsonl — run npm run archive:ingest first");
    process.exit(1);
  }

  const animalsByName = await readAnimalsIndex();
  const cache = loadCache();
  const countryPins = loadCountryPins();
  // Poles + under-covered countries first so their pins are locked in
  const PRIORITY = [
    "AQ",
    "GS",
    "HM",
    "TF",
    "BV",
    "GL",
    "SJ",
    "IS",
    "BG",
    "RO",
    "RU",
    "UA",
    "MD",
  ];
  const uniqueCountries = [
    ...PRIORITY.filter((c) => COUNTRY_CODES.includes(c)),
    ...[...new Set(COUNTRY_CODES)].filter((c) => !PRIORITY.includes(c)),
  ];

  console.log(
    `Country land-wildlife enrich · countries ${uniqueCountries.join(",")} · max ${MAX_PER_CLASS}/class · override=${OVERRIDE ? "yes" : "no"}`,
  );

  let addedAnimals = 0;
  let updatedGeo = 0;
  let skipped = 0;
  const regionHits = Object.create(null);

  for (const code of uniqueCountries) {
    const classList = classesForCountry(code);
    for (const landClass of classList) {
      process.stdout.write(
        `  ${code} ${landClass.name}… `,
      );
      const hits = await collectCountryClass(code, landClass);
      console.log(`${hits.length} species`);

      for (const hit of hits) {
        const key = hit.name.toLowerCase();
        regionHits[hit.country] = (regionHits[hit.country] || 0) + 1;

        if (!animalsByName.has(key)) {
          const animal = {
            name: hit.name,
            phylum: hit.phylum,
            class: hit.class,
            order: hit.order || undefined,
            family: hit.family || undefined,
            gbif: hit.gbifTaxonKey || undefined,
            source: "gbif-country",
          };
          appendFileSync(animalsPath, `${JSON.stringify(animal)}\n`);
          animalsByName.set(key, animal);
          addedAnimals += 1;
        } else {
          // Backfill missing class/order when archive row is thin
          const existing = animalsByName.get(key);
          let dirty = false;
          if (!existing.class && hit.class) {
            existing.class = hit.class;
            dirty = true;
          }
          if (!existing.gbif && hit.gbifTaxonKey) {
            existing.gbif = hit.gbifTaxonKey;
            dirty = true;
          }
          if (dirty) animalsByName.set(key, existing);
        }

        const prev = cache[key];
        if (prev?.lat != null) {
          const prevRank = countryPriority(prev.country);
          const nextRank = countryPriority(hit.country);
          // Only replace when the new country is higher priority (BG > RO > … > HU).
          // Without OVERRIDE, never move a pin that already has coordinates.
          if (!OVERRIDE || nextRank >= prevRank) {
            skipped += 1;
            continue;
          }
        }

        const pin = {
          lat: hit.lat,
          lng: hit.lng,
          country: hit.country,
          gbifTaxonKey: hit.gbifTaxonKey,
          source: hit.source,
          commonName: hit.vernacular || prev?.commonName || undefined,
        };
        cache[key] = pin;
        countryPins[key] = pin;
        updatedGeo += 1;
      }

      if (SLEEP_MS) await sleep(SLEEP_MS);
    }
    // Checkpoint per country so a crash still helps the map
    saveCache(cache);
    saveCountryPins(countryPins);
  }

  // Ensure durable overlay wins in the main cache before rebuilding the map
  for (const [k, v] of Object.entries(countryPins)) {
    if (v?.lat != null) cache[k] = v;
  }
  saveCache(cache);
  saveCountryPins(countryPins);
  const { mapped, byRegion, byGroup } = await writeMapFromCache(
    animalsByName,
    cache,
  );

  console.log(`\nAnimals appended: ${addedAnimals}`);
  console.log(`Geo pins set/updated: ${updatedGeo} (skipped ${skipped})`);
  console.log(`Map total: ${mapped.toLocaleString()} localities`);
  console.log("Target region counts now:");
  for (const name of Object.values(COUNTRY_NAMES)) {
    const n = byRegion[name] || 0;
    if (n || regionHits[name]) console.log(`  ${name}: ${n} on map`);
  }
  console.log("Groups:", byGroup);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
