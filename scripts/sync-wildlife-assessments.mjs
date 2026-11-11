#!/usr/bin/env node
/**
 * Weekly / on-demand wildlife assessment sync.
 *
 * Prefer hitting the deployed app so the host's data/wildlife/store.json updates:
 *   WILDLIFE_APP_URL=https://… WILDLIFE_SYNC_SECRET=… node scripts/sync-wildlife-assessments.mjs
 *
 * Local Next server (dev):
 *   WILDLIFE_APP_URL=http://127.0.0.1:3006 WILDLIFE_SYNC_SECRET=… node scripts/sync-wildlife-assessments.mjs
 */

const base = (process.env.WILDLIFE_APP_URL || process.env.APP_URL || "").replace(
  /\/$/,
  "",
);
const secret =
  process.env.WILDLIFE_SYNC_SECRET ||
  process.env.ARCHIVE_SYNC_SECRET ||
  process.env.EDITOR_SECRET ||
  "";

if (!base) {
  if (process.env.SKIP_IF_NO_URL === "1") {
    console.log(
      "WILDLIFE_APP_URL not set — skipping remote sync (validation-only run).",
    );
    process.exit(0);
  }
  console.error(
    "Set WILDLIFE_APP_URL (or APP_URL) to the running Next.js origin.",
  );
  process.exit(1);
}

const url = `${base}/api/wildlife/sync`;
const headers = { Accept: "application/json" };
if (secret) {
  headers["x-wildlife-sync-secret"] = secret;
  headers.Authorization = `Bearer ${secret}`;
}

const res = await fetch(url, { method: "POST", headers });
const body = await res.text();
let json;
try {
  json = JSON.parse(body);
} catch {
  json = { raw: body };
}

console.log(JSON.stringify({ status: res.status, ...json }, null, 2));

if (!res.ok) process.exit(1);
if (json.ok === false && (json.failed || 0) > 0 && (json.updated || 0) + (json.unchanged || 0) === 0) {
  process.exit(1);
}
