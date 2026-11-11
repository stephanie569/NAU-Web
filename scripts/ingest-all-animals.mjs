#!/usr/bin/env node
/**
 * Build a complete local Animalia archive (union of COL + GBIF + WoRMS).
 *
 * Catalogue of Life via ChecklistBank API (no auth for nameusage search):
 *   https://www.catalogueoflife.org/tools/api
 *   https://api.checklistbank.org/
 *
 * Default COL dataset: 3LXR (Extended Release — fullest Animalia species list).
 * Override: COL_DATASET_KEY=3LR npm run archive:ingest
 *
 * Writes:
 *   data/species-archive/animals.jsonl   — one animal per line
 *   data/species-archive/ingest-progress.json
 *   updates data/species-archive/store.json meta.localCount
 *
 * Resume-safe. Run:
 *   npm run archive:ingest
 *   npm run archive:col                  # COL Animalia only
 *   ARCHIVE_INGEST_MAX=5000 npm run archive:ingest   # sample / smoke test
 */

import {
  createReadStream,
  createWriteStream,
  existsSync,
  mkdirSync,
  readFileSync,
  renameSync,
  writeFileSync,
} from "node:fs";
import { createInterface } from "node:readline";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { finished } from "node:stream/promises";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = path.join(root, "data", "species-archive");
const animalsPath = path.join(dataDir, "animals.jsonl");
const tmpPath = path.join(dataDir, "animals.tmp.jsonl");
const progressPath = path.join(dataDir, "ingest-progress.json");
const storePath = path.join(dataDir, "store.json");
const UA = "NAU-Web-SpeciesArchive/1.0 (full Animalia ingest)";

const COL_DATASET = process.env.COL_DATASET_KEY?.trim() || "3LXR";
const COL_ANIMALIA = "N";
/** ChecklistBank rejects nameusage search offsets above this. */
const COL_OFFSET_CAP = 100_000;
const COL_PAGE = 1000;
const GBIF_ANIMALIA = 1;
const WORMS_ANIMALIA = 2;
/** Max *new* records written in this process run (0 = unlimited). */
const MAX = Number(process.env.ARCHIVE_INGEST_MAX || 0);
const SLEEP_MS = Number(process.env.ARCHIVE_INGEST_SLEEP_MS || 40);
const COL_ONLY = process.env.ARCHIVE_COL_ONLY === "1";
const WORMS_ONLY = process.env.ARCHIVE_WORMS_ONLY === "1";
const SKIP_COL = WORMS_ONLY || process.env.ARCHIVE_SKIP_COL === "1";
const SKIP_GBIF =
  COL_ONLY || WORMS_ONLY || process.env.ARCHIVE_SKIP_GBIF === "1";
const SKIP_WORMS = COL_ONLY || process.env.ARCHIVE_SKIP_WORMS === "1";
/** Session counter for ARCHIVE_INGEST_MAX (new rows only). */
let sessionWritten = 0;

function hitSessionCap() {
  return Boolean(MAX && sessionWritten >= MAX);
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function getJson(url) {
  for (let attempt = 0; attempt < 6; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { Accept: "application/json", "User-Agent": UA },
      });
      if (res.status === 429 || res.status >= 500) {
        await sleep(500 * (attempt + 1));
        continue;
      }
      if (!res.ok) throw new Error(`${url} → ${res.status}`);
      return res.json();
    } catch (err) {
      if (attempt === 5) throw err;
      await sleep(400 * (attempt + 1));
    }
  }
  throw new Error(`Failed ${url}`);
}

function ensureDir() {
  if (!existsSync(dataDir)) mkdirSync(dataDir, { recursive: true });
}

function loadProgress() {
  if (!existsSync(progressPath)) {
    return {
      colDataset: COL_DATASET,
      colOffset: 0,
      colTotal: null,
      colDone: false,
      gbifOffset: 0,
      gbifTotal: null,
      gbifDone: false,
      wormsDone: false,
      wormsQueue: [WORMS_ANIMALIA],
      wormsSeenNodes: [],
      written: 0,
      startedAt: new Date().toISOString(),
    };
  }
  const progress = JSON.parse(readFileSync(progressPath, "utf8"));
  // New COL release / alias → restart COL pages (names still de-dupe in animals.jsonl)
  if (progress.colDataset && progress.colDataset !== COL_DATASET) {
    console.log(
      `COL dataset changed ${progress.colDataset} → ${COL_DATASET}; restarting COL walk.`,
    );
    progress.colDataset = COL_DATASET;
    progress.colDone = false;
    progress.colMode = "tree";
    progress.colQueue = [COL_ANIMALIA];
    progress.colSeenTaxa = [];
    progress.colPage = null;
    progress.colOffset = 0;
    progress.colTotal = null;
  } else if (!progress.colDataset) {
    progress.colDataset = COL_DATASET;
  }
  // Migrate legacy flat Animalia paging (hits API offset cap at 100k)
  if (progress.colMode !== "tree") {
    console.log(
      "Switching COL ingest to taxonomic tree walk (ChecklistBank offset cap is 100,000).",
    );
    progress.colMode = "tree";
    progress.colQueue = [COL_ANIMALIA];
    progress.colSeenTaxa = [];
    progress.colPage = null;
    progress.colDone = false;
  }
  return progress;
}

function saveProgress(p) {
  writeFileSync(progressPath, JSON.stringify(p, null, 2));
}

function classFrom(classification = []) {
  const out = {};
  for (const row of classification) out[row.rank] = row.name;
  return out;
}

function compactRecord({
  name,
  auth,
  col,
  gbif,
  worms,
  phylum,
  className,
  order,
  family,
  genus,
  marine,
}) {
  const rec = { name };
  if (auth) rec.auth = auth;
  if (col) rec.col = col;
  if (gbif) rec.gbif = gbif;
  if (worms) rec.worms = worms;
  if (phylum) rec.phylum = phylum;
  if (className) rec.class = className;
  if (order) rec.order = order;
  if (family) rec.family = family;
  if (genus) rec.genus = genus;
  if (marine) rec.marine = true;
  return rec;
}

async function loadExistingNames(filePath) {
  const names = new Set();
  if (!existsSync(filePath)) return names;
  const rl = createInterface({
    input: createReadStream(filePath, { encoding: "utf8" }),
    crlfDelay: Infinity,
  });
  for await (const line of rl) {
    if (!line.trim()) continue;
    try {
      const rec = JSON.parse(line);
      if (rec.name) names.add(String(rec.name).toLowerCase());
    } catch {
      /* skip bad line */
    }
  }
  return names;
}

function updateStoreMeta(localCount, ingest, colMeta = null) {
  let store = {
    meta: {
      updatedAt: new Date().toISOString(),
      sources: {
        col: {
          datasetKey: COL_DATASET,
          animaliaPhyla: 0,
          url: "https://www.catalogueoflife.org/tools/api",
        },
        gbif: { animaliaAcceptedSpecies: 0, url: "https://www.gbif.org/" },
        worms: {
          acceptedMarineSpecies: 251193,
          url: "https://www.marinespecies.org/",
        },
      },
      lastSyncAt: null,
      lastSyncOk: null,
      discoveryCount: 0,
    },
    phyla: [],
    discoveries: [],
    seenIds: [],
  };
  if (existsSync(storePath)) {
    try {
      store = JSON.parse(readFileSync(storePath, "utf8"));
    } catch {
      /* keep default */
    }
  }
  store.meta.localCount = localCount;
  store.meta.ingest = ingest;
  store.meta.updatedAt = new Date().toISOString();
  if (colMeta) {
    store.meta.sources.col = {
      ...store.meta.sources.col,
      ...colMeta,
      url: "https://www.catalogueoflife.org/tools/api",
    };
  }
  writeFileSync(storePath, JSON.stringify(store, null, 2));
}

async function resolveColDataset() {
  const data = await getJson(
    `https://api.checklistbank.org/dataset/${COL_DATASET}`,
  );
  return {
    datasetKey: String(data.key),
    alias: data.alias || COL_DATASET,
    issued: data.issued || null,
    doi: data.doi || null,
    version: data.version || null,
  };
}

async function colSpeciesCount(taxonId) {
  const data = await getJson(
    `https://api.checklistbank.org/dataset/${COL_DATASET}/nameusage/search` +
      `?TAXON_ID=${encodeURIComponent(taxonId)}&rank=species&status=accepted&limit=0`,
  );
  return data.total || 0;
}

async function colTreeChildren(taxonId) {
  const all = [];
  let offset = 0;
  while (true) {
    const data = await getJson(
      `https://api.checklistbank.org/dataset/${COL_DATASET}/tree/${encodeURIComponent(taxonId)}/children?limit=1000&offset=${offset}`,
    );
    const rows = data.result || [];
    all.push(...rows);
    if (data.last || rows.length < 1000) break;
    offset += rows.length;
    // Tree endpoint also caps offset; if we hit the wall, return what we have
    if (offset >= COL_OFFSET_CAP) {
      console.warn(
        `  tree children for ${taxonId} truncated at offset ${offset}`,
      );
      break;
    }
    await sleep(SLEEP_MS);
  }
  return all;
}

function writeColRow(row, out, known, progress) {
  const name = row.usage?.name?.scientificName;
  if (!name) return false;
  const key = name.toLowerCase();
  if (known.has(key)) return false;
  known.add(key);
  const c = classFrom(row.classification);
  const rec = compactRecord({
    name,
    auth: row.usage?.name?.authorship,
    col: row.id,
    phylum: c.phylum,
    className: c.class,
    order: c.order,
    family: c.family,
    genus: c.genus || row.usage?.name?.genus,
  });
  out.write(`${JSON.stringify(rec)}\n`);
  progress.written += 1;
  sessionWritten += 1;
  return true;
}

/** Page one clade that is within the ChecklistBank offset cap. Returns false if paused on session cap. */
async function pageColTaxon(taxonId, progress, out, known) {
  let offset =
    progress.colPage?.taxonId === taxonId ? progress.colPage.offset || 0 : 0;
  let added = 0;

  while (true) {
    if (hitSessionCap()) {
      progress.colPage = { taxonId, offset };
      return { finished: false, added };
    }
    if (offset >= COL_OFFSET_CAP) {
      console.warn(
        `  ${taxonId}: stopped at offset cap ${COL_OFFSET_CAP} (clade still too large — needs deeper split)`,
      );
      progress.colPage = null;
      return { finished: true, added };
    }
    const data = await getJson(
      `https://api.checklistbank.org/dataset/${COL_DATASET}/nameusage/search` +
        `?TAXON_ID=${encodeURIComponent(taxonId)}&rank=species&status=accepted` +
        `&limit=${COL_PAGE}&offset=${offset}`,
    );
    const rows = data.result || [];
    if (!rows.length) {
      progress.colPage = null;
      return { finished: true, added };
    }
    for (const row of rows) {
      if (hitSessionCap()) {
        progress.colPage = { taxonId, offset };
        return { finished: false, added };
      }
      if (writeColRow(row, out, known, progress)) added += 1;
    }
    offset += rows.length;
    progress.colPage = { taxonId, offset };
    if (offset % 10000 < COL_PAGE) {
      saveProgress(progress);
      console.log(
        `COL ${taxonId} @ ${offset.toLocaleString()} / ~${(data.total || 0).toLocaleString()} · local ${progress.written.toLocaleString()}`,
      );
    }
    if (data.last || rows.length < COL_PAGE) {
      progress.colPage = null;
      return { finished: true, added };
    }
    await sleep(SLEEP_MS);
  }
}

/**
 * Walk the COL tree so each nameusage search stays within the 100k offset cap.
 * @see https://www.catalogueoflife.org/tools/api
 */
async function ingestCol(progress, out, known) {
  if (progress.colDone) return;
  const release = await resolveColDataset();
  progress.colDataset = COL_DATASET;
  progress.colMode = "tree";
  if (!progress.colQueue?.length && !progress.colPage) {
    progress.colQueue = [COL_ANIMALIA];
  }
  if (!progress.colSeenTaxa) progress.colSeenTaxa = [];

  console.log(
    "— Catalogue of Life Animalia (accepted species) via ChecklistBank —",
  );
  console.log(
    `  dataset ${release.alias} (key ${release.datasetKey}) · ${release.version || release.issued || ""}`,
  );
  console.log(
    "  strategy: split large clades via /tree/{id}/children (search offset cap 100,000)",
  );

  // Animalia-wide total for store meta
  if (!progress.colTotal) {
    progress.colTotal = await colSpeciesCount(COL_ANIMALIA);
  }

  const queue = progress.colQueue || [];
  const seen = new Set(progress.colSeenTaxa || []);
  let writtenThisPass = 0;

  while (!hitSessionCap() && (queue.length || progress.colPage)) {
    // Resume mid-page
    if (progress.colPage?.taxonId) {
      const { finished, added } = await pageColTaxon(
        progress.colPage.taxonId,
        progress,
        out,
        known,
      );
      writtenThisPass += added;
      progress.colQueue = queue;
      progress.colSeenTaxa = [...seen];
      saveProgress(progress);
      if (!finished) break;
      continue;
    }

    const taxonId = queue.shift();
    if (!taxonId || seen.has(taxonId)) {
      progress.colQueue = queue;
      continue;
    }
    seen.add(taxonId);

    const total = await colSpeciesCount(taxonId);
    await sleep(SLEEP_MS);

    if (total === 0) {
      progress.colQueue = queue;
      progress.colSeenTaxa = [...seen];
      if (seen.size % 50 === 0) saveProgress(progress);
      continue;
    }

    if (total <= COL_OFFSET_CAP) {
      progress.colPage = { taxonId, offset: 0 };
      const { finished, added } = await pageColTaxon(
        taxonId,
        progress,
        out,
        known,
      );
      writtenThisPass += added;
      progress.colQueue = queue;
      progress.colSeenTaxa = [...seen];
      saveProgress(progress);
      updateStoreMeta(
        progress.written,
        {
          phase: "col",
          dataset: COL_DATASET,
          mode: "tree",
          queue: queue.length,
          seen: seen.size,
          total: progress.colTotal,
          done: false,
        },
        {
          datasetKey: release.datasetKey,
          alias: release.alias,
          issued: release.issued,
          doi: release.doi,
          animaliaAcceptedSpecies: progress.colTotal || 0,
        },
      );
      if (!finished) break;
      continue;
    }

    console.log(
      `  split ${taxonId} (${total.toLocaleString()} spp) into child taxa…`,
    );
    const children = await colTreeChildren(taxonId);
    const childIds = children.map((c) => c.id).filter(Boolean);
    if (!childIds.length) {
      console.warn(
        `  ${taxonId}: ${total.toLocaleString()} spp but no children — paging first ${COL_OFFSET_CAP.toLocaleString()} only`,
      );
      progress.colPage = { taxonId, offset: 0 };
      const { finished, added } = await pageColTaxon(
        taxonId,
        progress,
        out,
        known,
      );
      writtenThisPass += added;
      if (!finished) {
        progress.colQueue = queue;
        progress.colSeenTaxa = [...seen];
        saveProgress(progress);
        break;
      }
    } else {
      // Depth-first: process children before siblings
      queue.unshift(...childIds.filter((id) => !seen.has(id)));
    }
    progress.colQueue = queue;
    progress.colSeenTaxa = [...seen];
    saveProgress(progress);
  }

  progress.colQueue = queue;
  progress.colSeenTaxa = [...seen];
  progress.colDone =
    queue.length === 0 && !progress.colPage && !hitSessionCap();
  saveProgress(progress);
  updateStoreMeta(
    progress.written,
    {
      phase: progress.colDone ? "col_complete" : "col",
      dataset: COL_DATASET,
      mode: "tree",
      queue: queue.length,
      seen: seen.size,
      total: progress.colTotal,
      done: progress.colDone,
    },
    {
      datasetKey: release.datasetKey,
      alias: release.alias,
      issued: release.issued,
      doi: release.doi,
      animaliaAcceptedSpecies: progress.colTotal || 0,
    },
  );
  console.log(
    `COL pass finished. +${writtenThisPass.toLocaleString()} new · local ${progress.written.toLocaleString()} · queue ${queue.length} · done=${progress.colDone}`,
  );
}

async function ingestGbif(progress, out, known) {
  if (progress.gbifDone) return;
  console.log("— GBIF Animalia (accepted species, fill gaps) —");
  let offset = progress.gbifOffset || 0;
  let writtenThisPass = 0;

  while (true) {
    if (hitSessionCap()) break;
    const url =
      `https://api.gbif.org/v1/species/search?rank=SPECIES&highertaxonKey=${GBIF_ANIMALIA}` +
      `&status=ACCEPTED&limit=300&offset=${offset}`;
    const data = await getJson(url);
    progress.gbifTotal = data.count ?? progress.gbifTotal;
    const rows = data.results || [];
    if (!rows.length) {
      progress.gbifDone = true;
      break;
    }
    for (const row of rows) {
      if (hitSessionCap()) break;
      const name = row.canonicalName || row.scientificName;
      if (!name) continue;
      const key = name.toLowerCase();
      if (known.has(key)) continue;
      known.add(key);
      const rec = compactRecord({
        name,
        auth: row.authorship,
        gbif: String(row.key),
        phylum: row.phylum,
        className: row.class,
        order: row.order,
        family: row.family,
        genus: row.genus,
      });
      out.write(`${JSON.stringify(rec)}\n`);
      progress.written += 1;
      writtenThisPass += 1;
      sessionWritten += 1;
    }
    offset += rows.length;
    progress.gbifOffset = offset;
    if (offset % 15000 < 300) {
      saveProgress(progress);
      updateStoreMeta(progress.written, {
        phase: "gbif",
        offset,
        total: progress.gbifTotal,
        done: false,
      });
      console.log(
        `GBIF ${offset.toLocaleString()} / ${(progress.gbifTotal || 0).toLocaleString()} · local ${progress.written.toLocaleString()}`,
      );
    }
    // GBIF soft-caps deep offsets; stop when exhausted
    if (rows.length < 300 || offset >= (progress.gbifTotal || 0)) {
      progress.gbifDone = true;
      break;
    }
    await sleep(SLEEP_MS);
  }
  progress.gbifOffset = offset;
  saveProgress(progress);
  console.log(`GBIF done. +${writtenThisPass.toLocaleString()} new · total ${progress.written.toLocaleString()}`);
}

async function ingestWorms(progress, out, known) {
  if (progress.wormsDone) return;
  console.log("— WoRMS (accepted marine species via taxon tree) —");
  const queue = progress.wormsQueue?.length
    ? progress.wormsQueue
    : [WORMS_ANIMALIA];
  const seenNodes = new Set(progress.wormsSeenNodes || []);
  let writtenThisPass = 0;

  while (queue.length) {
    if (hitSessionCap()) break;
    const aphiaId = queue.shift();
    if (seenNodes.has(aphiaId)) {
      progress.wormsQueue = queue;
      continue;
    }
    seenNodes.add(aphiaId);

    let offset = 1;
    while (true) {
      const url = `https://www.marinespecies.org/rest/AphiaChildrenByAphiaID/${aphiaId}?marine_only=true&offset=${offset}`;
      let rows;
      try {
        rows = await getJson(url);
      } catch {
        rows = [];
      }
      if (!Array.isArray(rows) || rows.length === 0) break;

      for (const row of rows) {
        const rank = (row.rank || "").toLowerCase();
        const status = (row.status || "").toLowerCase();
        const id = row.AphiaID;
        if (rank === "species" && status === "accepted") {
          const name = row.scientificname;
          if (!name) continue;
          const key = name.toLowerCase();
          if (known.has(key)) continue;
          if (hitSessionCap()) break;
          known.add(key);
          const rec = compactRecord({
            name,
            auth: row.authority,
            worms: String(id),
            phylum: row.phylum,
            className: row.class,
            order: row.order,
            family: row.family,
            genus: row.genus,
            marine: true,
          });
          out.write(`${JSON.stringify(rec)}\n`);
          progress.written += 1;
          writtenThisPass += 1;
          sessionWritten += 1;
        } else if (id && !seenNodes.has(id) && rank !== "species") {
          queue.push(id);
        }
      }

      if (rows.length < 50) break; // WoRMS pages ~50
      offset += 1;
      await sleep(SLEEP_MS);
    }

    progress.wormsQueue = queue.slice(0, 50000);
    progress.wormsSeenNodes = [...seenNodes].slice(-200000);
    if (seenNodes.size % 200 === 0) {
      saveProgress(progress);
      updateStoreMeta(progress.written, {
        phase: "worms",
        queue: queue.length,
        nodes: seenNodes.size,
        done: false,
      });
      console.log(
        `WoRMS nodes ${seenNodes.size.toLocaleString()} · queue ${queue.length} · local ${progress.written.toLocaleString()}`,
      );
    }
    await sleep(SLEEP_MS);
  }

  progress.wormsDone = queue.length === 0 && !hitSessionCap();
  progress.wormsQueue = queue;
  progress.wormsSeenNodes = [...seenNodes];
  saveProgress(progress);
  console.log(`WoRMS pass finished. +${writtenThisPass.toLocaleString()} new · total ${progress.written.toLocaleString()}`);
}

async function countLines(filePath) {
  if (!existsSync(filePath)) return 0;
  let n = 0;
  const rl = createInterface({
    input: createReadStream(filePath, { encoding: "utf8" }),
    crlfDelay: Infinity,
  });
  for await (const line of rl) {
    if (line.trim()) n += 1;
  }
  return n;
}

async function main() {
  ensureDir();
  const progress = loadProgress();

  // Continue appending to existing animals.jsonl (resume)
  const known = await loadExistingNames(animalsPath);
  progress.written = known.size;

  const out = createWriteStream(animalsPath, { flags: "a", encoding: "utf8" });

  try {
    if (!SKIP_COL) await ingestCol(progress, out, known);
    else console.log("— Skipping COL (ARCHIVE_WORMS_ONLY / ARCHIVE_SKIP_COL) —");
    if (!SKIP_GBIF) await ingestGbif(progress, out, known);
    else console.log("— Skipping GBIF (COL-only / ARCHIVE_SKIP_GBIF) —");
    if (!SKIP_WORMS) await ingestWorms(progress, out, known);
    else console.log("— Skipping WoRMS (COL-only / ARCHIVE_SKIP_WORMS) —");
  } finally {
    out.end();
    await finished(out);
  }

  const localCount = await countLines(animalsPath);
  progress.written = localCount;
  const complete =
    progress.colDone &&
    (SKIP_GBIF || progress.gbifDone) &&
    (SKIP_WORMS || progress.wormsDone) &&
    !MAX;
  saveProgress(progress);
  updateStoreMeta(localCount, {
    phase: complete ? "complete" : "partial",
    colDone: progress.colDone,
    gbifDone: progress.gbifDone,
    wormsDone: progress.wormsDone,
    colTotal: progress.colTotal,
    gbifTotal: progress.gbifTotal,
    colDataset: COL_DATASET,
    done: complete,
    finishedAt: new Date().toISOString(),
  });

  // Touch tmp rename no-op kept for future atomic rewrite hooks
  void tmpPath;
  void renameSync;

  console.log("\nArchive ingest summary");
  console.log(`  animals.jsonl → ${localCount.toLocaleString()} animals`);
  console.log(`  COL dataset: ${COL_DATASET}`);
  console.log(
    `  COL done: ${progress.colDone} | GBIF done: ${progress.gbifDone} | WoRMS done: ${progress.wormsDone}`,
  );
  if (MAX) console.log(`  (stopped early — ARCHIVE_INGEST_MAX=${MAX})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
