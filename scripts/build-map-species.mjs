#!/usr/bin/env node
/**
 * @deprecated Prefer real coordinates via:
 *   npm run archive:geo
 *
 * This legacy builder used hash jitter inside bioregions and produced
 * unnatural arcs. Kept only as a thin wrapper.
 */

import { createReadStream, createWriteStream, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { createInterface } from "node:readline";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { finished } from "node:stream/promises";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = path.join(root, "data", "species-archive");
const animalsPath = path.join(dataDir, "animals.jsonl");
const outPath = path.join(dataDir, "map-species.jsonl");
const metaPath = path.join(dataDir, "map-species-meta.json");

const BIO_REGIONS = [
  { id: "nearctic", name: "Nearctic", lat: 45, lng: -100, latSpan: 18, lngSpan: 35 },
  { id: "neotropical", name: "Neotropical", lat: -10, lng: -60, latSpan: 25, lngSpan: 30 },
  { id: "palearctic", name: "Palearctic", lat: 50, lng: 40, latSpan: 18, lngSpan: 50 },
  { id: "afrotropical", name: "Afrotropical", lat: 5, lng: 20, latSpan: 22, lngSpan: 28 },
  { id: "indomalayan", name: "Indo-Malayan", lat: 15, lng: 95, latSpan: 16, lngSpan: 25 },
  { id: "australasian", name: "Australasian", lat: -25, lng: 140, latSpan: 18, lngSpan: 25 },
  { id: "oceania", name: "Oceania", lat: -5, lng: 170, latSpan: 12, lngSpan: 30 },
  { id: "antarctic", name: "Antarctic", lat: -75, lng: 0, latSpan: 8, lngSpan: 60 },
  { id: "arctic_ocean", name: "Arctic Ocean", lat: 78, lng: 0, latSpan: 6, lngSpan: 80, marine: true },
  { id: "n_atlantic", name: "North Atlantic", lat: 35, lng: -40, latSpan: 18, lngSpan: 30, marine: true },
  { id: "s_atlantic", name: "South Atlantic", lat: -25, lng: -15, latSpan: 18, lngSpan: 25, marine: true },
  { id: "n_pacific", name: "North Pacific", lat: 30, lng: -160, latSpan: 18, lngSpan: 40, marine: true },
  { id: "s_pacific", name: "South Pacific", lat: -20, lng: -150, latSpan: 18, lngSpan: 40, marine: true },
  { id: "indian_ocean", name: "Indian Ocean", lat: -15, lng: 70, latSpan: 18, lngSpan: 30, marine: true },
  { id: "southern_ocean", name: "Southern Ocean", lat: -55, lng: 30, latSpan: 8, lngSpan: 60, marine: true },
];

const LAND = BIO_REGIONS.filter((r) => !r.marine);
const SEA = BIO_REGIONS.filter((r) => r.marine);
const MARINE_PHYLA = new Set([
  "cnidaria", "ctenophora", "echinodermata", "porifera", "hemichordata",
  "brachiopoda", "bryozoa", "chaetognatha", "xenacoelomorpha",
]);
const MARINE_CLASSES = new Set([
  "actinopterygii", "chondrichthyes", "cephalaspidomorphi", "myxini",
  "sarcopterygii", "appendicularia", "thaliacea", "ascidiacea",
]);

function hash01(seed) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return ((h >>> 0) % 10000) / 10000;
}

function groupFrom(className, phylum) {
  const c = (className || "").toLowerCase();
  const p = (phylum || "").toLowerCase();
  if (c === "mammalia") return "mammals";
  if (c === "aves") return "birds";
  if (c === "reptilia") return "reptiles";
  if (c === "amphibia") return "amphibians";
  if (MARINE_CLASSES.has(c)) return "fish";
  if (c === "insecta" || p === "arthropoda") return "insects";
  return "other";
}

function groupColor(group) {
  return ({
    mammals: "#9fd0ff",
    birds: "#f0b429",
    reptiles: "#3dcf8e",
    amphibians: "#7dd3c7",
    fish: "#6bb3ff",
    insects: "#c4a575",
    other: "#b8c0cc",
  })[group] || "#b8c0cc";
}

function place(rec) {
  const group = groupFrom(rec.class, rec.phylum);
  const marine =
    Boolean(rec.marine) ||
    MARINE_PHYLA.has((rec.phylum || "").toLowerCase()) ||
    MARINE_CLASSES.has((rec.class || "").toLowerCase()) ||
    group === "fish";
  const pool = marine ? SEA : LAND;
  const region = pool[Math.floor(hash01(`${rec.name}:region`) * pool.length) % pool.length];
  const u = hash01(`${rec.name}:u`);
  const v = hash01(`${rec.name}:v`);
  let lat = region.lat + (u - 0.5) * 2 * region.latSpan;
  lat = Math.max(-85, Math.min(85, lat));
  let lng = region.lng + (v - 0.5) * 2 * region.lngSpan;
  while (lng > 180) lng -= 360;
  while (lng < -180) lng += 360;
  return {
    id: rec.col || rec.gbif || rec.worms || rec.name,
    name: rec.name,
    auth: rec.auth,
    lat: Number(lat.toFixed(4)),
    lng: Number(lng.toFixed(4)),
    region: region.id,
    regionName: region.name,
    phylum: rec.phylum,
    class: rec.class,
    group,
    color: groupColor(group),
    col: rec.col,
    gbif: rec.gbif,
    worms: rec.worms,
  };
}

async function main() {
  if (!existsSync(animalsPath)) {
    console.error("Missing animals.jsonl — run npm run archive:ingest first");
    process.exit(1);
  }
  if (!existsSync(dataDir)) mkdirSync(dataDir, { recursive: true });

  const out = createWriteStream(outPath, { encoding: "utf8" });
  const rl = createInterface({
    input: createReadStream(animalsPath, { encoding: "utf8" }),
    crlfDelay: Infinity,
  });

  let n = 0;
  const byRegion = Object.create(null);
  for await (const line of rl) {
    if (!line.trim()) continue;
    let rec;
    try {
      rec = JSON.parse(line);
    } catch {
      continue;
    }
    if (!rec.name) continue;
    const placed = place(rec);
    out.write(`${JSON.stringify(placed)}\n`);
    byRegion[placed.region] = (byRegion[placed.region] || 0) + 1;
    n += 1;
    if (n % 50000 === 0) console.log(`placed ${n.toLocaleString()}`);
  }
  out.end();
  await finished(out);

  writeFileSync(
    metaPath,
    JSON.stringify(
      {
        builtAt: new Date().toISOString(),
        count: n,
        byRegion,
      },
      null,
      2,
    ),
  );
  console.log(`Wrote ${n.toLocaleString()} map species → ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
