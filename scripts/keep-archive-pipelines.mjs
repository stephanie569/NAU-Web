#!/usr/bin/env node
/**
 * Keep catalogue ingest + GBIF geo-enrichment running.
 * Restarts each job if it exits. Safe to leave overnight.
 *
 *   node scripts/keep-archive-pipelines.mjs
 *   PIPELINES=geo node scripts/keep-archive-pipelines.mjs
 *   PIPELINES=ingest,geo,countries node scripts/keep-archive-pipelines.mjs
 */

import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const wanted = (process.env.PIPELINES || "ingest,geo")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const jobs = {
  ingest: {
    label: "COL ingest",
    cmd: "node",
    args: ["scripts/ingest-all-animals.mjs"],
    env: {
      ARCHIVE_INGEST_SLEEP_MS: process.env.ARCHIVE_INGEST_SLEEP_MS || "30",
      // Continue COL tree; WoRMS after COL when not COL-only
      ARCHIVE_COL_ONLY: process.env.ARCHIVE_COL_ONLY || "0",
    },
  },
  geo: {
    label: "GBIF geo-enrich",
    cmd: "node",
    args: ["scripts/geo-enrich-species.mjs"],
    env: {
      ARCHIVE_GEO_CONCURRENCY: process.env.ARCHIVE_GEO_CONCURRENCY || "12",
      ARCHIVE_GEO_SLEEP_MS: process.env.ARCHIVE_GEO_SLEEP_MS || "12",
      ARCHIVE_GEO_WIKIDATA: process.env.ARCHIVE_GEO_WIKIDATA || "0",
      ARCHIVE_GEO_RETRY_MISSING: process.env.ARCHIVE_GEO_RETRY_MISSING || "0",
    },
  },
  countries: {
    label: "Country land-wildlife",
    cmd: "node",
    args: ["scripts/geo-enrich-countries.mjs"],
    env: {
      ARCHIVE_COUNTRY_CODES:
        process.env.ARCHIVE_COUNTRY_CODES ||
        "AQ,GS,HM,TF,BV,GL,SJ,IS,BG,RO,RU,UA,MD,RS,MK,AL,HU,GR,TR",
      ARCHIVE_COUNTRY_MAX_PER_CLASS:
        process.env.ARCHIVE_COUNTRY_MAX_PER_CLASS || "300",
      ARCHIVE_COUNTRY_OVERRIDE: process.env.ARCHIVE_COUNTRY_OVERRIDE || "1",
      ARCHIVE_COUNTRY_SLEEP_MS: process.env.ARCHIVE_COUNTRY_SLEEP_MS || "40",
    },
  },
};

function runLoop(name) {
  const job = jobs[name];
  if (!job) {
    console.error(`Unknown pipeline: ${name}`);
    return;
  }

  const start = () => {
    console.log(`[${new Date().toISOString()}] starting ${job.label}`);
    const child = spawn(job.cmd, job.args, {
      cwd: root,
      env: { ...process.env, ...job.env },
      stdio: "inherit",
    });
    child.on("exit", (code, signal) => {
      console.log(
        `[${new Date().toISOString()}] ${job.label} exited code=${code} signal=${signal} — restarting in 8s`,
      );
      setTimeout(start, 8000);
    });
  };

  start();
}

console.log(`Archive pipelines: ${wanted.join(", ")}`);
for (const name of wanted) runLoop(name);
