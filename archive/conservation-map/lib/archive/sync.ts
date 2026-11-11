import {
  fetchColAnimaliaPhyla,
  fetchColAnimaliaSpeciesCount,
  fetchColRelease,
} from "@/lib/archive/col";
import { fetchGbifAnimaliaCount, gbifSourceMeta } from "@/lib/archive/gbif";
import { ARCHIVE_SOURCES } from "@/lib/archive/sources";
import { readArchiveStore, writeArchiveStore } from "@/lib/archive/store";
import { fetchWormsRecordsByDate, wormsSourceMeta } from "@/lib/archive/worms";
import type { DiscoveryRecord } from "@/lib/archive/types";

function isoDate(d: Date) {
  return d.toISOString().slice(0, 10);
}

/**
 * Regular discovery loop:
 * - Refresh COL release + Animalia phyla (full catalogue index via live API)
 * - Snapshot GBIF accepted Animalia species count
 * - Pull WoRMS accepted species touched in the lookback window
 * - Persist newcomers into local discoveries archive
 */
export async function runSpeciesArchiveSync(options?: {
  lookbackDays?: number;
}): Promise<{
  ok: boolean;
  message: string;
  added: number;
  storePath: string;
}> {
  const lookbackDays = options?.lookbackDays ?? 14;
  const store = readArchiveStore();
  const seen = new Set(store.seenIds);
  const added: DiscoveryRecord[] = [];
  const now = new Date();

  try {
    const [release, phyla, gbifCount, colSpeciesCount] = await Promise.all([
      fetchColRelease(),
      fetchColAnimaliaPhyla(),
      fetchGbifAnimaliaCount(),
      fetchColAnimaliaSpeciesCount(),
    ]);

    const animaliaNameUsages = phyla.reduce((sum, p) => sum + p.count, 0);
    const prevColKey = store.meta.sources.col.datasetKey;
    const prevGbif = store.meta.sources.gbif.animaliaAcceptedSpecies;

    store.phyla = phyla;
    store.meta.sources.col = {
      ...release,
      animaliaPhyla: phyla.length,
      animaliaNameUsages,
      animaliaAcceptedSpecies: colSpeciesCount,
      url: ARCHIVE_SOURCES.col.url,
    };
    store.meta.sources.gbif = gbifSourceMeta(gbifCount);
    store.meta.sources.worms = {
      ...store.meta.sources.worms,
      ...wormsSourceMeta(),
    };

    if (prevColKey && prevColKey !== "pending" && prevColKey !== release.datasetKey) {
      added.push({
        id: `col-release-${release.datasetKey}`,
        source: "col",
        scientificName: `Catalogue of Life release ${release.alias ?? release.datasetKey}`,
        kingdom: "Animalia",
        url: ARCHIVE_SOURCES.col.url,
        discoveredAt: now.toISOString(),
        detection: "col_release",
        note: `COL dataset changed ${prevColKey} → ${release.datasetKey} (${release.issued ?? "n/a"})`,
      });
    }

    if (prevGbif > 0 && gbifCount > prevGbif) {
      added.push({
        id: `gbif-count-${gbifCount}`,
        source: "gbif",
        scientificName: `GBIF Animalia accepted species +${gbifCount - prevGbif}`,
        kingdom: "Animalia",
        url: ARCHIVE_SOURCES.gbif.url,
        discoveredAt: now.toISOString(),
        detection: "gbif_count_delta",
        note: `Accepted Animalia species count ${prevGbif} → ${gbifCount}`,
      });
    }

    const end = isoDate(now);
    const startDate = new Date(now);
    startDate.setUTCDate(startDate.getUTCDate() - lookbackDays);
    const start = isoDate(startDate);

    const wormsRecent = await fetchWormsRecordsByDate(start, end);
    for (const sp of wormsRecent) {
      const key = `worms:${sp.id}`;
      if (seen.has(key)) continue;
      seen.add(key);
      added.push({
        ...sp,
        discoveredAt: now.toISOString(),
        detection: "worms_date",
        note: `Accepted in WoRMS window ${start} → ${end}`,
      });
    }

    // Seed seen set with current discoveries so reruns stay idempotent
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
    writeArchiveStore(store);

    return {
      ok: true,
      message: store.meta.lastSyncMessage,
      added: added.length,
      storePath: "data/species-archive/store.json",
    };
  } catch (err) {
    store.meta.lastSyncAt = now.toISOString();
    store.meta.lastSyncOk = false;
    store.meta.lastSyncMessage =
      err instanceof Error ? err.message : "Species archive sync failed";
    store.meta.updatedAt = now.toISOString();
    writeArchiveStore(store);
    return {
      ok: false,
      message: store.meta.lastSyncMessage,
      added: 0,
      storePath: "data/species-archive/store.json",
    };
  }
}
