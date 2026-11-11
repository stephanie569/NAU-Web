import { randomUUID } from "crypto";
import { getActiveAssessmentProvider } from "@/lib/wildlife/providers";
import { readWildlifeStore, writeWildlifeStore } from "@/lib/wildlife/store";
import type { AssessmentRecord } from "@/lib/wildlife/types";

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

/**
 * Weekly (or on-demand) assessment sync for curated map species only.
 * Idempotent on assessmentId. Preserves last valid data on failure.
 * Category changes create reviewable change records — never auto “population dropped” alerts.
 */
export async function runWildlifeAssessmentSync(options?: {
  respectRateLimitMs?: number;
}): Promise<{
  ok: boolean;
  checked: number;
  updated: number;
  unchanged: number;
  failed: number;
  message: string;
}> {
  const store = readWildlifeStore();
  const provider = getActiveAssessmentProvider();
  const rateMs = options?.respectRateLimitMs ?? 2000;
  const now = new Date().toISOString();

  store.sync.lastAttemptAt = now;
  store.sync.iucnEnabled = provider.id === "iucn_red_list_v4" && provider.isEnabled();
  store.sync.provider = provider.id;

  const targets = store.mappings.filter((m) => m.enabledForSync);
  let updated = 0;
  let unchanged = 0;
  let failed = 0;

  if (provider.id === "manual" || !provider.isEnabled()) {
    store.sync.lastError =
      "Remote assessment sync skipped — provider disabled. Manual sourced assessments remain valid.";
    store.sync.lastSpeciesChecked = 0;
    writeWildlifeStore(store);
    return {
      ok: true,
      checked: 0,
      updated: 0,
      unchanged: 0,
      failed: 0,
      message: store.sync.lastError,
    };
  }

  for (const mapping of targets) {
    const result = await provider.fetchLatest({
      speciesId: mapping.speciesId,
      scientificName: mapping.scientificName,
      sourceSpeciesId: mapping.sourceSpeciesId,
    });

    if (!result.ok) {
      failed += 1;
      // Retain last valid assessment; only record sync error.
      store.sync.lastError = result.reason;
      if (result.retryable) await sleep(rateMs);
      continue;
    }

    const incoming = result.assessment;
    const existing = store.assessments.find(
      (a) => a.speciesId === mapping.speciesId && !a.isDemo,
    );

    // Idempotent: same assessment id → refresh check timestamp only
    if (existing && existing.assessmentId === incoming.assessmentId) {
      existing.lastSuccessfulCheck = now;
      if (mapping.sourceSpeciesId !== incoming.sourceSpeciesId) {
        mapping.sourceSpeciesId = incoming.sourceSpeciesId;
        mapping.provider = incoming.provider;
      }
      unchanged += 1;
      await sleep(rateMs);
      continue;
    }

    if (existing) {
      store.assessmentHistory.push({ ...existing });
      store.assessmentChanges.push({
        id: randomUUID(),
        speciesId: mapping.speciesId,
        previousAssessmentId: existing.assessmentId,
        nextAssessmentId: incoming.assessmentId,
        previousCategory: existing.conservationCategory,
        nextCategory: incoming.conservationCategory,
        previousTrend: existing.populationTrend,
        nextTrend: incoming.populationTrend,
        detectedAt: now,
        reviewStatus: "pending_review",
        note: "Assessment change detected — review required. Do not treat as automatic population-drop alert.",
      });
      Object.assign(existing, {
        ...incoming,
        id: existing.id,
        lastSuccessfulCheck: now,
      } satisfies AssessmentRecord);
    } else {
      store.assessments.push({
        ...incoming,
        id: randomUUID(),
        lastSuccessfulCheck: now,
      });
    }

    mapping.sourceSpeciesId = incoming.sourceSpeciesId;
    mapping.provider = incoming.provider;
    updated += 1;
    await sleep(rateMs);
  }

  store.sync.lastSpeciesChecked = targets.length;
  store.sync.lastSuccessAt = now;
  if (failed === 0) store.sync.lastError = null;
  writeWildlifeStore(store);

  return {
    ok: failed === 0 || updated + unchanged > 0,
    checked: targets.length,
    updated,
    unchanged,
    failed,
    message: `Checked ${targets.length}: ${updated} updated, ${unchanged} unchanged, ${failed} failed (${provider.id})`,
  };
}
