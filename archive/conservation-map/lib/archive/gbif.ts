import { archiveJson } from "@/lib/archive/http";
import { ARCHIVE_SOURCES, GBIF_ANIMALIA_KEY } from "@/lib/archive/sources";
import type { ArchiveSpecies } from "@/lib/archive/types";

type GbifSpecies = {
  key: number;
  scientificName?: string;
  canonicalName?: string;
  authorship?: string;
  rank?: string;
  taxonomicStatus?: string;
  kingdom?: string;
  phylum?: string;
  class?: string;
  order?: string;
  family?: string;
  genus?: string;
  vernacularName?: string;
};

function mapGbif(row: GbifSpecies): ArchiveSpecies {
  return {
    id: String(row.key),
    source: "gbif",
    scientificName: row.canonicalName || row.scientificName || String(row.key),
    authorship: row.authorship,
    rank: row.rank,
    status: row.taxonomicStatus,
    kingdom: row.kingdom,
    phylum: row.phylum,
    className: row.class,
    order: row.order,
    family: row.family,
    genus: row.genus,
    commonNames: row.vernacularName ? [row.vernacularName] : undefined,
    url: `https://www.gbif.org/species/${row.key}`,
  };
}

export async function fetchGbifAnimaliaCount(): Promise<number> {
  const data = await archiveJson<{ count: number }>(
    `https://api.gbif.org/v1/species/search?rank=SPECIES&highertaxonKey=${GBIF_ANIMALIA_KEY}&status=ACCEPTED&limit=0`,
  );
  return data.count ?? 0;
}

export async function searchGbifAnimals(
  q: string,
  limit = 20,
): Promise<ArchiveSpecies[]> {
  if (!q.trim()) return [];
  const params = new URLSearchParams({
    q: q.trim(),
    rank: "SPECIES",
    highertaxonKey: String(GBIF_ANIMALIA_KEY),
    status: "ACCEPTED",
    limit: String(limit),
  });
  const data = await archiveJson<{ results: GbifSpecies[] }>(
    `https://api.gbif.org/v1/species/search?${params}`,
  );
  return (data.results ?? []).map(mapGbif);
}

export async function getGbifSpecies(
  id: string,
): Promise<ArchiveSpecies | null> {
  try {
    const row = await archiveJson<GbifSpecies>(
      `https://api.gbif.org/v1/species/${id}`,
    );
    if (row.kingdom && row.kingdom !== "Animalia") return null;
    return mapGbif(row);
  } catch {
    return null;
  }
}

export function gbifSourceMeta(count: number) {
  return {
    animaliaAcceptedSpecies: count,
    url: ARCHIVE_SOURCES.gbif.url,
  };
}
