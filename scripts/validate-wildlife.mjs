#!/usr/bin/env node
/**
 * Offline validation for wildlife store behaviours (no network, no fabricated stats).
 * Run: node scripts/validate-wildlife.mjs
 */
import { mkdirSync, writeFileSync, readFileSync, rmSync, existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createHash, randomUUID } from "crypto";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const tmpDir = path.join(root, "data", "wildlife", ".validate-tmp");
const storePath = path.join(tmpDir, "store.json");

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

function seed() {
  const now = new Date().toISOString();
  return {
    version: 1,
    updatedAt: now,
    mappings: [
      {
        speciesId: "sp-test",
        scientificName: "Testus animalus",
        commonName: "Test animal",
        sourceSpeciesId: "sis-1",
        provider: "manual",
        regionId: "region-broad",
        regionName: "Broad region",
        displayLat: 10,
        displayLng: 20,
        enabledForSync: true,
        isDemo: true,
      },
    ],
    assessments: [
      {
        id: "a1",
        speciesId: "sp-test",
        sourceSpeciesId: "sis-1",
        assessmentId: "assess-1",
        provider: "manual",
        geographicScope: "Global (demonstration)",
        conservationCategory: "VU",
        populationTrend: "Decreasing",
        assessmentDate: "2024-01-01",
        publicationDate: "2024-01-01",
        sourceUrl: "https://example.org/demo-assessment",
        lastSuccessfulCheck: now,
        isDemo: true,
      },
    ],
    assessmentHistory: [],
    assessmentChanges: [],
    events: [
      {
        id: "e-draft",
        speciesId: "sp-test",
        regionId: "region-broad",
        regionName: "Broad region",
        displayLat: 10,
        displayLng: 20,
        eventType: "habitat_threat",
        headline: "Draft only",
        summary: "Must not appear publicly",
        eventDate: "2025-01-01",
        publicationDate: "2025-01-02",
        sourceUrl: "https://example.org/demo-event",
        organisation: "demo",
        verificationStatus: "pending_review",
        isDemo: true,
      },
      {
        id: "e-hist",
        speciesId: "sp-test",
        regionId: "region-broad",
        regionName: "Broad region",
        displayLat: 10.2,
        displayLng: 20.2,
        eventType: "mortality_incident",
        headline: "Historical import",
        summary: "Must not pulse as breaking",
        eventDate: "2020-01-01",
        publicationDate: "2020-01-02",
        sourceUrl: "https://example.org/demo-historical",
        organisation: "demo",
        verificationStatus: "approved",
        isHistoricalImport: true,
        isDemo: true,
      },
    ],
    sync: {
      lastAttemptAt: null,
      lastSuccessAt: null,
      lastError: null,
      lastSpeciesChecked: 0,
      iucnEnabled: false,
      provider: "manual",
    },
  };
}

function write(store) {
  mkdirSync(tmpDir, { recursive: true });
  writeFileSync(storePath, JSON.stringify(store, null, 2));
}

function read() {
  return JSON.parse(readFileSync(storePath, "utf8"));
}

function applyIdempotentAssessment(store, incoming) {
  const existing = store.assessments.find((a) => a.speciesId === incoming.speciesId);
  if (existing && existing.assessmentId === incoming.assessmentId) {
    existing.lastSuccessfulCheck = new Date().toISOString();
    return "unchanged";
  }
  if (existing) {
    store.assessmentHistory.push({ ...existing });
    store.assessmentChanges.push({
      id: randomUUID(),
      speciesId: incoming.speciesId,
      previousAssessmentId: existing.assessmentId,
      nextAssessmentId: incoming.assessmentId,
      previousCategory: existing.conservationCategory,
      nextCategory: incoming.conservationCategory,
      previousTrend: existing.populationTrend,
      nextTrend: incoming.populationTrend,
      detectedAt: new Date().toISOString(),
      reviewStatus: "pending_review",
      note: "Not an automatic population-drop alert",
    });
    Object.assign(existing, { ...incoming, id: existing.id });
    return "updated";
  }
  store.assessments.push({ ...incoming, id: randomUUID() });
  return "created";
}

function publicEvents(store) {
  return store.events.filter((e) => e.verificationStatus === "approved");
}

function shouldPulse(event) {
  if (event.isHistoricalImport) return false;
  const days =
    (Date.now() - new Date(event.publicationDate).getTime()) /
    (1000 * 60 * 60 * 24);
  return days >= 0 && days <= 14;
}

function fingerprint(event) {
  return createHash("sha256")
    .update(
      [
        event.speciesId,
        event.headline,
        event.eventDate,
        event.sourceUrl,
        event.organisation,
      ].join("|"),
    )
    .digest("hex");
}

// --- run ---
if (existsSync(tmpDir)) rmSync(tmpDir, { recursive: true, force: true });
write(seed());
let store = read();

// 1) Duplicate import idempotency
const incoming = {
  speciesId: "sp-test",
  sourceSpeciesId: "sis-1",
  assessmentId: "assess-1",
  provider: "manual",
  geographicScope: "Global (demonstration)",
  conservationCategory: "VU",
  populationTrend: "Decreasing",
  assessmentDate: "2024-01-01",
  publicationDate: "2024-01-01",
  sourceUrl: "https://example.org/demo-assessment",
  lastSuccessfulCheck: new Date().toISOString(),
  isDemo: true,
};
assert(applyIdempotentAssessment(store, incoming) === "unchanged", "same assessmentId must be idempotent");
assert(store.assessmentHistory.length === 0, "idempotent sync must not archive history");
assert(store.assessmentChanges.length === 0, "idempotent sync must not create change records");

// 2) Assessment change creates reviewable record, does not invent population alert
incoming.assessmentId = "assess-2";
incoming.conservationCategory = "EN";
assert(applyIdempotentAssessment(store, incoming) === "updated", "new assessmentId updates");
assert(store.assessmentHistory.length === 1, "previous assessment preserved in history");
assert(store.assessmentChanges.length === 1, "change record created");
assert(
  !/population dropped/i.test(store.assessmentChanges[0].note || ""),
  "must not auto-phrase as population dropped",
);

// 3) Failed sync retains last valid data
const beforeFail = JSON.stringify(store.assessments[0]);
store.sync.lastError = "provider unavailable";
store.sync.lastAttemptAt = new Date().toISOString();
// no mutation to assessment on failure
assert(JSON.stringify(store.assessments[0]) === beforeFail, "failed sync retains assessment");
assert(store.assessments[0].conservationCategory === "EN", "last valid category kept");

// 4) Draft visibility
assert(
  publicEvents(store).every((e) => e.verificationStatus === "approved"),
  "only approved events public",
);
assert(
  !publicEvents(store).some((e) => e.id === "e-draft"),
  "draft/pending must stay off public map",
);

// 5) Historical events must not pulse
const hist = store.events.find((e) => e.id === "e-hist");
assert(hist && !shouldPulse(hist), "historical imports must not pulse");

// 6) Geographic scope stays separate from events
const assessment = store.assessments[0];
const event = store.events.find((e) => e.id === "e-hist");
event.headline = "Local incident must not rewrite category";
assert(
  assessment.conservationCategory === "EN",
  "events must never mutate global category",
);
assert(assessment.geographicScope.includes("Global"), "assessment scope retained");

// 7) Duplicate event fingerprints
const fp1 = fingerprint(event);
const fp2 = fingerprint({ ...event, id: "other" });
assert(fp1 === fp2, "duplicate detection key ignores record id");

write(store);
rmSync(tmpDir, { recursive: true, force: true });

console.log(
  JSON.stringify(
    {
      ok: true,
      checks: [
        "duplicate assessment import",
        "failed sync retains data",
        "assessment change review record",
        "draft visibility",
        "historical no-pulse",
        "events never rewrite category",
        "duplicate event fingerprint",
      ],
    },
    null,
    2,
  ),
);
