#!/usr/bin/env node
/**
 * Daily species-archive sync.
 * Sources: Catalogue of Life (ChecklistBank), GBIF, WoRMS.
 * Writes data/species-archive/store.json
 *
 *   node scripts/sync-species-archive.mjs
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = path.join(root, "data", "species-archive");
const storePath = path.join(dataDir, "store.json");
const UA = "NAU-Web-SpeciesArchive/1.0 (conservation sync)";

const COL_DATASET = process.env.COL_DATASET_KEY?.trim() || "3LXR";
const COL_ANIMALIA = "N";
const GBIF_ANIMALIA = 1;
const LOOKBACK_DAYS = Number(process.env.ARCHIVE_LOOKBACK_DAYS || 14);

async function getJson(url) {
  const res = await fetch(url, {
    headers: { Accept: "application/json", "User-Agent": UA },
  });
  if (!res.ok) throw new Error(`${url} → ${res.status}`);
  return res.json();
}

function emptyStore() {
  return {
    meta: {
      updatedAt: new Date(0).toISOString(),
      sources: {
        col: {
          datasetKey: "pending",
          animaliaPhyla: 0,
          url: "https://www.catalogueoflife.org/",
        },
        gbif: {
          animaliaAcceptedSpecies: 0,
          url: "https://www.gbif.org/",
        },
        worms: { url: "https://www.marinespecies.org/" },
      },
      lastSyncAt: null,
      lastSyncOk: null,
      discoveryCount: 0,
    },
    phyla: [],
    discoveries: [],
    seenIds: [],
  };
}

function readStore() {
  if (!existsSync(storePath)) return emptyStore();
  try {
    return JSON.parse(readFileSync(storePath, "utf8"));
  } catch {
    return emptyStore();
  }
}

function writeStore(store) {
  if (!existsSync(dataDir)) mkdirSync(dataDir, { recursive: true });
  writeFileSync(storePath, JSON.stringify(store, null, 2));
}

function isoDate(d) {
  return d.toISOString().slice(0, 10);
}

async function main() {
  const store = readStore();
  const seen = new Set(store.seenIds || []);
  const added = [];
  const now = new Date();

  try {
    const [release, tree, gbif] = await Promise.all([
      getJson(`https://api.checklistbank.org/dataset/${COL_DATASET}`),
      getJson(
        `https://api.checklistbank.org/dataset/${COL_DATASET}/tree/${COL_ANIMALIA}/children?limit=100`,
      ),
      getJson(
        `https://api.gbif.org/v1/species/search?rank=SPECIES&highertaxonKey=${GBIF_ANIMALIA}&status=ACCEPTED&limit=0`,
      ),
    ]);

    const phyla = (tree.result || []).map((r) => ({
      id: r.id,
      name: r.name,
      authorship: r.authorship,
      count: r.count || 0,
      childCount: r.childCount || 0,
    }));
    const animaliaNameUsages = phyla.reduce((s, p) => s + p.count, 0);
    const prevCol = store.meta.sources.col.datasetKey;
    const prevGbif = store.meta.sources.gbif.animaliaAcceptedSpecies || 0;
    const gbifCount = gbif.count || 0;

    store.phyla = phyla;
    store.meta.sources.col = {
      datasetKey: String(release.key),
      alias: release.alias,
      issued: release.issued,
      doi: release.doi,
      animaliaPhyla: phyla.length,
      animaliaNameUsages,
      url: "https://www.catalogueoflife.org/",
    };
    store.meta.sources.gbif = {
      animaliaAcceptedSpecies: gbifCount,
      url: "https://www.gbif.org/",
    };
    // WoRMS publishes ~251k accepted marine species on the portal; REST has no
    // single count endpoint, so we keep the public figure as a reference snapshot.
    store.meta.sources.worms = {
      ...(store.meta.sources.worms || {}),
      acceptedMarineSpecies:
        store.meta.sources.worms?.acceptedMarineSpecies || 251193,
      url: "https://www.marinespecies.org/",
    };

    if (prevCol && prevCol !== "pending" && prevCol !== String(release.key)) {
      added.push({
        id: `col-release-${release.key}`,
        source: "col",
        scientificName: `Catalogue of Life release ${release.alias || release.key}`,
        kingdom: "Animalia",
        url: "https://www.catalogueoflife.org/",
        discoveredAt: now.toISOString(),
        detection: "col_release",
        note: `COL dataset ${prevCol} → ${release.key}`,
      });
    }

    if (prevGbif > 0 && gbifCount > prevGbif) {
      added.push({
        id: `gbif-count-${gbifCount}`,
        source: "gbif",
        scientificName: `GBIF Animalia accepted species +${gbifCount - prevGbif}`,
        kingdom: "Animalia",
        url: "https://www.gbif.org/",
        discoveredAt: now.toISOString(),
        detection: "gbif_count_delta",
        note: `${prevGbif} → ${gbifCount}`,
      });
    }

    const end = isoDate(now);
    const startDate = new Date(now);
    startDate.setUTCDate(startDate.getUTCDate() - LOOKBACK_DAYS);
    const start = isoDate(startDate);
    const worms = await getJson(
      `https://www.marinespecies.org/rest/AphiaRecordsByDate?startdate=${start}&enddate=${end}&marine_only=true`,
    );

    for (const row of worms || []) {
      if ((row.status || "").toLowerCase() !== "accepted") continue;
      if ((row.rank || "").toLowerCase() !== "species") continue;
      const id = String(row.AphiaID);
      const key = `worms:${id}`;
      if (seen.has(key)) continue;
      seen.add(key);
      added.push({
        id,
        source: "worms",
        scientificName: row.scientificname,
        authorship: row.authority,
        rank: row.rank,
        status: row.status,
        kingdom: row.kingdom,
        phylum: row.phylum,
        className: row.class,
        order: row.order,
        family: row.family,
        genus: row.genus,
        marine: true,
        url:
          row.url ||
          `https://www.marinespecies.org/aphia.php?p=taxdetails&id=${id}`,
        updatedAt: row.modified,
        discoveredAt: now.toISOString(),
        detection: "worms_date",
        note: `WoRMS window ${start} → ${end}`,
      });
    }

    for (const d of [...store.discoveries, ...added]) {
      seen.add(`${d.source}:${d.id}`);
    }

    if (added.length) {
      store.discoveries = [...added, ...store.discoveries].slice(0, 5000);
    }
    store.seenIds = [...seen].slice(-20000);
    store.meta.discoveryCount = store.discoveries.length;
    store.meta.lastSyncAt = now.toISOString();
    store.meta.lastSyncOk = true;
    store.meta.lastSyncMessage = `Synced COL + GBIF + WoRMS; +${added.length} discovery record(s)`;
    store.meta.updatedAt = now.toISOString();
    writeStore(store);

    console.log(store.meta.lastSyncMessage);
    console.log(`Store: ${storePath}`);
    console.log(
      `COL Animalia phyla: ${phyla.length}, name usages ~${animaliaNameUsages}`,
    );
    console.log(`GBIF accepted Animalia species: ${gbifCount}`);
    process.exit(0);
  } catch (err) {
    store.meta.lastSyncAt = now.toISOString();
    store.meta.lastSyncOk = false;
    store.meta.lastSyncMessage = err instanceof Error ? err.message : String(err);
    store.meta.updatedAt = now.toISOString();
    writeStore(store);
    console.error(store.meta.lastSyncMessage);
    process.exit(1);
  }
}

main();
