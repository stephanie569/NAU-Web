import { existsSync, readFileSync, statSync } from "fs";
import path from "path";
import { animalEmoji } from "@/lib/map/animalIcons";
import { BIO_REGIONS } from "@/lib/map/bioregions";
import { mapConfig } from "@/lib/map/config";
import type { AnimalGroup, MapMarker } from "@/lib/map/types";

const DATA_DIR = path.join(process.cwd(), "data", "species-archive");
const MAP_PATH = path.join(DATA_DIR, "map-species.jsonl");
const META_PATH = path.join(DATA_DIR, "map-species-meta.json");

export type MapSpeciesRecord = {
  id: string;
  name: string;
  auth?: string;
  lat: number;
  lng: number;
  region: string;
  regionName: string;
  phylum?: string;
  class?: string;
  order?: string;
  family?: string;
  group: AnimalGroup;
  color: string;
  col?: string;
  gbif?: string;
  worms?: string;
  commonName?: string;
  geoSource?: string;
};

export type MapCameraQuery = {
  west: number;
  south: number;
  east: number;
  north: number;
  /** Globe-radius altitude (same units as mapConfig). */
  altitude: number;
  /** Camera look-at centre — used to prefer animals in the region you zoom to. */
  lat?: number;
  lng?: number;
  limit?: number;
};

function isTrustedGeoSource(source: string | undefined): boolean {
  return (
    source === "gbif-occurrence" ||
    source === "gbif" ||
    source === "wikidata-p625"
  );
}

type CacheState = {
  mtimeMs: number;
  path: string;
  records: MapSpeciesRecord[];
  byId: Map<string, MapSpeciesRecord>;
};

let cache: CacheState | null = null;
let metaCache: { mtimeMs: number; data: { count: number; byRegion?: Record<string, number> } } | null =
  null;

function inBBox(lat: number, lng: number, q: MapCameraQuery): boolean {
  if (lat < q.south || lat > q.north) return false;
  if (q.west <= q.east) return lng >= q.west && lng <= q.east;
  return lng >= q.west || lng <= q.east;
}

function priority(id: string): number {
  let h = 2166136261;
  for (let i = 0; i < id.length; i++) {
    h ^= id.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) / 0xffffffff;
}

/**
 * How many pins to draw for the current viewport.
 * Regional zoom → denser; full Earth → a small sample for smooth Cesium.
 */
export function markerBudgetForAltitude(
  altitude: number,
  matchedInView: number,
): number {
  if (matchedInView <= 0) return 0;
  const far = mapConfig.zoomLodFarAltitude;
  const near = mapConfig.zoomLodNearAltitude;
  const hardCap = mapConfig.maxMarkersClient;
  if (altitude <= near) return Math.min(matchedInView, hardCap);
  const farBudget = Math.min(
    matchedInView,
    hardCap,
    Math.max(
      mapConfig.farMarkerBudget,
      Math.ceil(matchedInView * mapConfig.zoomLodMinFraction),
    ),
  );
  if (altitude >= far) return farBudget;
  const t = Math.max(0, Math.min(1, (far - altitude) / (far - near)));
  return Math.min(
    hardCap,
    matchedInView,
    Math.ceil(farBudget + (matchedInView - farBudget) * Math.pow(t, 1.05)),
  );
}

function angularDistanceSq(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number,
): number {
  const dLat = lat1 - lat2;
  let dLng = lng1 - lng2;
  if (dLng > 180) dLng -= 360;
  if (dLng < -180) dLng += 360;
  return dLat * dLat + dLng * dLng;
}

function toMarker(rec: MapSpeciesRecord): MapMarker {
  const common = rec.commonName?.trim() || null;
  return {
    id: `sp-${rec.id}`,
    storyId: `archive-${rec.id}`,
    speciesId: String(rec.id),
    regionId: rec.region,
    kind: "animal",
    lat: rec.lat,
    lng: rec.lng,
    label: common || rec.name,
    scientificName: rec.name,
    regionName: rec.regionName,
    animalGroup: rec.group,
    publishedAt: "2026-10-12",
    isRecent: false,
    isDemo: false,
    color: rec.color,
    emoji: animalEmoji({
      scientificName: rec.name,
      commonName: common,
      group: rec.group,
      className: rec.class,
      phylum: rec.phylum,
      order: rec.order,
    }),
  };
}

export function mapSpeciesFileExists() {
  return existsSync(MAP_PATH) && statSync(MAP_PATH).size > 0;
}

export function readMapSpeciesMeta(): {
  count: number;
  byRegion?: Record<string, number>;
} {
  if (!existsSync(META_PATH)) return { count: 0 };
  try {
    const mtimeMs = statSync(META_PATH).mtimeMs;
    if (metaCache && metaCache.mtimeMs === mtimeMs) return metaCache.data;
    const data = JSON.parse(readFileSync(META_PATH, "utf8")) as {
      count: number;
      byRegion?: Record<string, number>;
    };
    metaCache = { mtimeMs, data };
    return data;
  } catch {
    return { count: 0 };
  }
}

function loadRecordsSync(): {
  records: MapSpeciesRecord[];
  source: "map-species";
} {
  if (!mapSpeciesFileExists()) return { records: [], source: "map-species" };

  const mtimeMs = statSync(MAP_PATH).mtimeMs;
  if (cache && cache.path === MAP_PATH && cache.mtimeMs === mtimeMs) {
    return { records: cache.records, source: "map-species" };
  }

  // Sync read is faster than streaming for current ~1–5MB files
  const text = readFileSync(MAP_PATH, "utf8");
  const records: MapSpeciesRecord[] = [];
  const byId = new Map<string, MapSpeciesRecord>();
  let start = 0;
  while (start < text.length) {
    let end = text.indexOf("\n", start);
    if (end === -1) end = text.length;
    const line = text.slice(start, end).trim();
    start = end + 1;
    if (!line) continue;
    try {
      const rec = JSON.parse(line) as MapSpeciesRecord;
      if (rec.lat == null || rec.lng == null) continue;
      if (!isTrustedGeoSource(rec.geoSource)) continue;
      records.push(rec);
      byId.set(String(rec.id), rec);
    } catch {
      /* skip */
    }
  }

  cache = { mtimeMs, path: MAP_PATH, records, byId };
  return { records, source: "map-species" };
}

export async function loadRecords(): Promise<{
  records: MapSpeciesRecord[];
  source: "map-species";
}> {
  return loadRecordsSync();
}

export async function getMapSpeciesRecord(
  id: string,
): Promise<MapSpeciesRecord | null> {
  loadRecordsSync();
  return cache?.byId.get(String(id)) || null;
}

export async function queryMapSpecies(q: MapCameraQuery): Promise<{
  markers: MapMarker[];
  totalInArchive: number;
  matchedInView: number;
  source: "map-species";
  ready: boolean;
  message?: string;
}> {
  const { records, source } = loadRecordsSync();
  const meta = readMapSpeciesMeta();

  if (!records.length) {
    return {
      markers: [],
      totalInArchive: meta.count || 0,
      matchedInView: 0,
      source,
      ready: false,
      message:
        "Building real GBIF localities… run npm run archive:geo (pins appear as coordinates are found).",
    };
  }

  const centerLat =
    typeof q.lat === "number" ? q.lat : (q.south + q.north) / 2;
  const centerLng =
    typeof q.lng === "number" ? q.lng : (q.west + q.east) / 2;

  // Collect indices only — build MapMarker objects after budgeting
  const matched: { i: number; score: number; dist: number }[] = [];
  for (let i = 0; i < records.length; i++) {
    const rec = records[i];
    if (!inBBox(rec.lat, rec.lng, q)) continue;
    matched.push({
      i,
      score: priority(String(rec.id)),
      dist: angularDistanceSq(rec.lat, rec.lng, centerLat, centerLng),
    });
  }

  matched.sort((a, b) => a.dist - b.dist || a.score - b.score);
  const budget = Math.min(
    q.limit ?? Number.POSITIVE_INFINITY,
    markerBudgetForAltitude(q.altitude, matched.length || 1),
  );
  const markers = matched.slice(0, budget).map((m) => toMarker(records[m.i]));

  return {
    markers,
    totalInArchive: meta.count || records.length,
    matchedInView: matched.length,
    source,
    ready: true,
  };
}

export type MapSearchHit = {
  kind: "region" | "animal";
  id: string;
  label: string;
  subtitle?: string;
  lat: number;
  lng: number;
  altitude: number;
  emoji?: string;
  storyId?: string;
  regionName?: string;
  count?: number;
};

type RegionIndexEntry = {
  id: string;
  name: string;
  aliases: string[];
  lat: number;
  lng: number;
  altitude: number;
  count: number;
};

/** Extra places people type that may not yet appear in GBIF pin regions. */
const STATIC_PLACES: {
  name: string;
  aliases?: string[];
  lat: number;
  lng: number;
  altitude?: number;
}[] = [
  { name: "Bulgaria", lat: 42.7339, lng: 25.4858, altitude: 1.35 },
  { name: "Romania", aliases: ["bucharest"], lat: 45.94, lng: 24.97, altitude: 1.35 },
  { name: "Ukraine", aliases: ["kyiv", "kiev"], lat: 48.4, lng: 31.2, altitude: 1.4 },
  { name: "Serbia", aliases: ["belgrade"], lat: 44.2, lng: 20.9, altitude: 1.3 },
  { name: "Moldova", aliases: ["chisinau"], lat: 47.0, lng: 28.5, altitude: 1.25 },
  { name: "Egypt", aliases: ["cairo"], lat: 26.8, lng: 30.8, altitude: 1.4 },
  { name: "Kenya", aliases: ["nairobi"], lat: 0.5, lng: 37.9, altitude: 1.4 },
  { name: "Brazil", aliases: ["amazonia", "amazon"], lat: -10, lng: -55, altitude: 1.5 },
  { name: "Australia", aliases: ["aussie"], lat: -25, lng: 134, altitude: 1.5 },
  { name: "India", aliases: ["bharat"], lat: 22, lng: 79, altitude: 1.45 },
  { name: "China", lat: 35, lng: 105, altitude: 1.5 },
  { name: "Japan", lat: 36.5, lng: 138, altitude: 1.35 },
  { name: "Mexico", lat: 23.5, lng: -102.5, altitude: 1.45 },
  { name: "Canada", lat: 56, lng: -96, altitude: 1.55 },
  {
    name: "United States",
    aliases: ["usa", "us", "america", "united states of america"],
    lat: 39.8,
    lng: -98.5,
    altitude: 1.55,
  },
  {
    name: "United Kingdom",
    aliases: ["uk", "britain", "england", "scotland", "wales"],
    lat: 54.5,
    lng: -3.5,
    altitude: 1.3,
  },
  { name: "South Africa", lat: -29, lng: 25, altitude: 1.4 },
  { name: "Madagascar", lat: -19.5, lng: 46.5, altitude: 1.35 },
  { name: "Indonesia", lat: -2, lng: 118, altitude: 1.5 },
  { name: "Philippines", lat: 12.5, lng: 122.5, altitude: 1.4 },
  { name: "New Zealand", lat: -41, lng: 174, altitude: 1.35 },
  { name: "Peru", lat: -10, lng: -75, altitude: 1.4 },
  { name: "Colombia", lat: 4, lng: -73, altitude: 1.4 },
  { name: "Ecuador", lat: -1.5, lng: -78.5, altitude: 1.35 },
  { name: "Chile", lat: -35, lng: -71, altitude: 1.5 },
  { name: "Argentina", lat: -34, lng: -64, altitude: 1.5 },
  { name: "France", lat: 46.5, lng: 2.5, altitude: 1.35 },
  { name: "Spain", lat: 40.2, lng: -3.7, altitude: 1.35 },
  { name: "Italy", lat: 42.5, lng: 12.5, altitude: 1.35 },
  { name: "Germany", lat: 51.2, lng: 10.5, altitude: 1.35 },
  { name: "Greece", lat: 39.1, lng: 22.9, altitude: 1.3 },
  { name: "Turkey", aliases: ["türkiye", "turkiye"], lat: 39, lng: 35, altitude: 1.4 },
  { name: "Russia", aliases: ["russian federation"], lat: 61, lng: 90, altitude: 1.65 },
  { name: "Antarctica", aliases: ["antarctic", "south pole"], lat: -75, lng: 0, altitude: 1.55 },
  {
    name: "Arctic",
    aliases: ["north pole", "arctic ocean"],
    lat: 78,
    lng: 0,
    altitude: 1.55,
  },
  { name: "Greenland", aliases: ["kalaallit"], lat: 72, lng: -40, altitude: 1.5 },
  {
    name: "Svalbard",
    aliases: ["spitsbergen", "jan mayen"],
    lat: 78.2,
    lng: 15.6,
    altitude: 1.35,
  },
  {
    name: "South Georgia",
    aliases: ["south sandwich"],
    lat: -54.3,
    lng: -36.5,
    altitude: 1.35,
  },
  { name: "Iceland", lat: 65, lng: -18, altitude: 1.35 },
  { name: "Caribbean", lat: 15, lng: -70, altitude: 1.45 },
  { name: "Mediterranean", lat: 35, lng: 18, altitude: 1.4 },
  { name: "Pacific Ocean", aliases: ["pacific"], lat: 0, lng: -160, altitude: 1.9 },
  { name: "Atlantic Ocean", aliases: ["atlantic"], lat: 20, lng: -30, altitude: 1.9 },
  { name: "Indian Ocean", lat: -15, lng: 70, altitude: 1.9 },
];

function normalizeSearch(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildRegionIndex(records: MapSpeciesRecord[]): RegionIndexEntry[] {
  const byName = new Map<
    string,
    { name: string; lat: number; lng: number; count: number }
  >();
  for (const rec of records) {
    const name = (rec.regionName || "").trim();
    if (!name) continue;
    const key = normalizeSearch(name);
    const cur = byName.get(key);
    if (!cur) {
      byName.set(key, { name, lat: rec.lat, lng: rec.lng, count: 1 });
    } else {
      cur.lat += rec.lat;
      cur.lng += rec.lng;
      cur.count += 1;
    }
  }

  const out: RegionIndexEntry[] = [];
  for (const [key, cur] of byName) {
    out.push({
      id: `region:${key}`,
      name: cur.name,
      aliases: [],
      lat: cur.lat / cur.count,
      lng: cur.lng / cur.count,
      altitude: cur.count > 40 ? 1.45 : 1.35,
      count: cur.count,
    });
  }

  for (const r of BIO_REGIONS) {
    const key = normalizeSearch(r.name);
    if (byName.has(key)) continue;
    out.push({
      id: `bio:${r.id}`,
      name: r.name,
      aliases: [r.id.replace(/_/g, " ")],
      lat: r.lat,
      lng: r.lng,
      altitude: r.marine ? 1.85 : 1.55,
      count: 0,
    });
  }

  for (const p of STATIC_PLACES) {
    const key = normalizeSearch(p.name);
    if (byName.has(key)) continue;
    out.push({
      id: `place:${key}`,
      name: p.name,
      aliases: p.aliases || [],
      lat: p.lat,
      lng: p.lng,
      altitude: p.altitude ?? 1.4,
      count: 0,
    });
  }

  return out;
}

function hasWord(hay: string, word: string): boolean {
  if (!word) return false;
  if (word.length <= 3) {
    // Short aliases ("us", "uk") must be whole tokens — not substrings of "australia"
    return hay.split(" ").includes(word);
  }
  return hay === word || hay.includes(word);
}

function regionMatches(entry: RegionIndexEntry, needle: string): boolean {
  if (!needle) return false;
  const name = normalizeSearch(entry.name);
  if (name === needle || hasWord(name, needle) || hasWord(needle, name)) {
    return true;
  }
  return entry.aliases.some((a) => {
    const n = normalizeSearch(a);
    return n === needle || hasWord(needle, n) || hasWord(n, needle);
  });
}

function scoreName(hay: string, needle: string): number {
  const h = normalizeSearch(hay);
  if (!needle || !h) return 99;
  if (h === needle) return 0;
  if (needle.length <= 3) {
    // Avoid "us" matching "australia" / "russia"
    return h.split(" ").includes(needle) ? 1 : 99;
  }
  if (h.startsWith(needle)) return 1;
  if (h.includes(needle)) return 2;
  const parts = needle.split(" ").filter(Boolean);
  if (parts.length > 1 && parts.every((p) => h.includes(p))) return 3;
  return 99;
}

/** Everyday animal words → taxon hints beyond exact binomial substring. */
const ANIMAL_WORD_HINTS: { re: RegExp; test: (rec: MapSpeciesRecord) => boolean }[] = [
  {
    re: /\b(octopus|squid|cuttlefish|cephalopod)\b/,
    test: (r) =>
      /cephalopoda/i.test(r.class || "") ||
      /\b(octopus|abdopus|enteroctopus|sepia|loligo|architeuthis)\b/i.test(r.name),
  },
  {
    re: /\b(shark|ray|manta)\b/,
    test: (r) =>
      /elasmobranchii|chondrichthyes/i.test(r.class || "") ||
      /\b(carchar|galeo|squalus|raja |manta|mobula|shark)\b/i.test(r.name),
  },
  {
    re: /\b(whale|dolphin|porpoise)\b/,
    test: (r) =>
      /\b(balaen|megaptera|tursiop|delphin|phocoena|orca|physeter)\b/i.test(r.name) ||
      /cetacea/i.test(r.order || ""),
  },
  {
    re: /\b(coral|reef)\b/,
    test: (r) =>
      /anthozoa|octocorallia/i.test(r.class || "") ||
      /cnidaria/i.test(r.phylum || ""),
  },
  {
    re: /\b(crab|lobster|shrimp)\b/,
    test: (r) => /malacostraca/i.test(r.class || ""),
  },
  {
    re: /\b(jellyfish|jelly)\b/,
    test: (r) => /scyphozoa|hydrozoa|cubozoa/i.test(r.class || ""),
  },
  {
    re: /\b(turtle|tortoise)\b/,
    test: (r) =>
      /\b(chelonia|caretta|testudo|eretmochelys|turtle)\b/i.test(r.name) ||
      (/reptilia/i.test(r.class || "") && /testud/i.test(r.order || "")),
  },
  {
    re: /\b(frog|toad)\b/,
    test: (r) => /amphibia/i.test(r.class || ""),
  },
  {
    re: /\b(bird|eagle|owl|penguin)\b/,
    test: (r) => /aves/i.test(r.class || ""),
  },
  {
    re: /\b(fish)\b/,
    test: (r) => r.group === "fish",
  },
  {
    re: /\b(snake|lizard|reptile)\b/,
    test: (r) => /reptilia/i.test(r.class || ""),
  },
  {
    re: /\b(mammal|lion|tiger|bear|wolf|fox)\b/,
    test: (r) => /mammalia/i.test(r.class || ""),
  },
];

function animalMatchesQuery(rec: MapSpeciesRecord, animalQuery: string): number {
  const direct = Math.min(
    scoreName(rec.name, animalQuery),
    scoreName(rec.commonName || "", animalQuery),
  );
  if (direct < 99) return direct;
  const n = normalizeSearch(animalQuery);
  for (const hint of ANIMAL_WORD_HINTS) {
    if (hint.re.test(n) && hint.test(rec)) return 4;
  }
  return 99;
}

/**
 * Search mapped animals + regions so the globe can fly to a match.
 * Supports combined queries like "octopus australia" or "egypt".
 */
export function searchMap(q: string, limit = 12): MapSearchHit[] {
  const raw = q.trim();
  if (raw.length < 2) return [];
  const needle = normalizeSearch(raw);
  const { records } = loadRecordsSync();
  const regions = buildRegionIndex(records);

  // Detect a region token inside a multi-word query
  let regionFilter: RegionIndexEntry | null = null;
  let animalNeedle = needle;
  const tokens = needle.split(" ").filter(Boolean);
  if (tokens.length >= 2) {
    // Prefer longest region match against full string / trailing words
    const candidates = [...regions].sort(
      (a, b) => normalizeSearch(b.name).length - normalizeSearch(a.name).length,
    );
    for (const entry of candidates) {
      const rName = normalizeSearch(entry.name);
      if (rName.length < 3) continue;
      if (regionMatches(entry, needle) || hasWord(needle, rName)) {
        regionFilter = entry;
        let rest = needle.replace(rName, " ");
        for (const a of entry.aliases) {
          const an = normalizeSearch(a);
          if (an.length > 3) rest = rest.replace(an, " ");
          else {
            rest = rest
              .split(" ")
              .filter((t) => t !== an)
              .join(" ");
          }
        }
        animalNeedle = rest.replace(/\s+/g, " ").trim();
        break;
      }
    }
    // Also try last token as country
    if (!regionFilter) {
      const last = tokens[tokens.length - 1];
      const hit = regions.find((r) => regionMatches(r, last));
      if (hit) {
        regionFilter = hit;
        animalNeedle = tokens.slice(0, -1).join(" ");
      }
    }
  }

  const hits: MapSearchHit[] = [];

  const exactRegion =
    regions.find((r) => {
      const name = normalizeSearch(r.name);
      return (
        name === needle ||
        r.aliases.some((a) => normalizeSearch(a) === needle)
      );
    }) || null;

  // Pure region query (e.g. "Egypt") — fly there; list a few animals IN that region
  if (exactRegion && !regionFilter) {
    regionFilter = exactRegion;
    animalNeedle = "";
  }

  // Region results
  const regionHits = regions
    .map((r) => ({
      r,
      score: Math.min(
        scoreName(r.name, needle),
        ...r.aliases.map((a) => scoreName(a, needle)),
        regionFilter && r.id === regionFilter.id ? 0 : 99,
      ),
    }))
    .filter((x) => x.score < 99)
    .sort((a, b) => a.score - b.score || b.r.count - a.r.count)
    .slice(0, animalNeedle && regionFilter ? 2 : 6);

  for (const { r } of regionHits) {
    hits.push({
      kind: "region",
      id: r.id,
      label: r.name,
      subtitle: r.count
        ? `${r.count.toLocaleString()} mapped species`
        : "Region",
      lat: r.lat,
      lng: r.lng,
      altitude: r.altitude,
      count: r.count,
      regionName: r.name,
    });
  }

  const isPureRegionQuery = Boolean(exactRegion) && !animalNeedle;
  const animalQuery = isPureRegionQuery
    ? ""
    : animalNeedle || (!regionFilter ? needle : "");

  // For a pure region search, surface animals recorded there (not name-substring false hits)
  if (isPureRegionQuery && regionFilter) {
    const inRegion: MapSpeciesRecord[] = [];
    const filterName = normalizeSearch(regionFilter.name);
    for (const rec of records) {
      const rn = normalizeSearch(rec.regionName || "");
      if (
        rn === filterName ||
        rn.includes(filterName) ||
        filterName.includes(rn)
      ) {
        inRegion.push(rec);
      }
    }
    inRegion.sort((a, b) => a.name.localeCompare(b.name));
    for (const rec of inRegion.slice(0, Math.min(6, limit - 1))) {
      const common = rec.commonName?.trim();
      hits.push({
        kind: "animal",
        id: `animal:${rec.id}`,
        label: common || rec.name,
        subtitle: [common ? rec.name : null, rec.regionName, rec.group]
          .filter(Boolean)
          .join(" · "),
        lat: rec.lat,
        lng: rec.lng,
        altitude: 1.22,
        emoji: animalEmoji({
          scientificName: rec.name,
          commonName: common,
          group: rec.group,
          className: rec.class,
          phylum: rec.phylum,
          order: rec.order,
        }),
        storyId: `archive-${rec.id}`,
        regionName: rec.regionName,
      });
    }
    return hits.slice(0, limit);
  }

  // Animal results (optionally constrained to a region)
  if (animalQuery.length >= 2) {
    const animalHits: {
      rec: MapSpeciesRecord;
      score: number;
      inRegion: boolean;
    }[] = [];
    for (const rec of records) {
      let inRegion = !regionFilter;
      if (regionFilter) {
        const rn = normalizeSearch(rec.regionName || "");
        const filterName = normalizeSearch(regionFilter.name);
        inRegion =
          rn === filterName ||
          rn.includes(filterName) ||
          filterName.includes(rn) ||
          regionFilter.aliases.some((a) => rn.includes(normalizeSearch(a)));
        if (!inRegion) {
          // Combined queries ("fish australia") require the named region
          if (animalNeedle) continue;
          const dLat = Math.abs(rec.lat - regionFilter.lat);
          const dLng = Math.min(
            Math.abs(rec.lng - regionFilter.lng),
            360 - Math.abs(rec.lng - regionFilter.lng),
          );
          if (dLat > 14 || dLng > 22) continue;
          inRegion = false;
        }
      }
      const score = animalMatchesQuery(rec, animalQuery);
      if (score >= 99) continue;
      animalHits.push({ rec, score, inRegion });
    }
    animalHits.sort(
      (a, b) =>
        Number(b.inRegion) - Number(a.inRegion) ||
        a.score - b.score ||
        a.rec.name.localeCompare(b.rec.name),
    );
    for (const { rec } of animalHits.slice(0, Math.max(4, limit - hits.length))) {
      const common = rec.commonName?.trim();
      hits.push({
        kind: "animal",
        id: `animal:${rec.id}`,
        label: common || rec.name,
        subtitle: [common ? rec.name : null, rec.regionName, rec.group]
          .filter(Boolean)
          .join(" · "),
        lat: rec.lat,
        lng: rec.lng,
        altitude: 1.22,
        emoji: animalEmoji({
          scientificName: rec.name,
          commonName: common,
          group: rec.group,
          className: rec.class,
          phylum: rec.phylum,
          order: rec.order,
        }),
        storyId: `archive-${rec.id}`,
        regionName: rec.regionName,
      });
    }
  }

  if (regionFilter && animalNeedle) {
    const animals = hits.filter((h) => h.kind === "animal");
    const regs = hits.filter((h) => h.kind === "region").slice(0, 1);
    return [...animals, ...regs].slice(0, limit);
  }

  return hits.slice(0, limit);
}
