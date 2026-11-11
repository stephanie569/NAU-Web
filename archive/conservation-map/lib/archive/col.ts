import { archiveJson } from "@/lib/archive/http";
import {
  ARCHIVE_SOURCES,
  COL_ANIMALIA_ID,
  COL_API_BASE,
  COL_DATASET,
} from "@/lib/archive/sources";
import type { ArchivePhylum, ArchiveSpecies } from "@/lib/archive/types";

type ColTreeChild = {
  id: string;
  name: string;
  authorship?: string;
  count?: number;
  childCount?: number;
  rank?: string;
  status?: string;
};

type ColSearchResult = {
  id: string;
  classification?: {
    id: string;
    name: string;
    rank: string;
    authorship?: string;
  }[];
  usage: {
    id: string;
    status?: string;
    label?: string;
    name: {
      scientificName: string;
      authorship?: string;
      rank?: string;
    };
  };
};

function classificationMap(
  rows: ColSearchResult["classification"] = [],
): Record<string, string> {
  const out: Record<string, string> = {};
  for (const row of rows) out[row.rank] = row.name;
  return out;
}

export function mapColHit(row: ColSearchResult): ArchiveSpecies {
  const c = classificationMap(row.classification);
  const name = row.usage.name;
  return {
    id: row.id,
    source: "col",
    scientificName: name.scientificName,
    authorship: name.authorship,
    rank: name.rank,
    status: row.usage.status,
    kingdom: c.kingdom,
    phylum: c.phylum,
    className: c.class,
    order: c.order,
    family: c.family,
    genus: c.genus,
    url: `https://www.catalogueoflife.org/data/taxon/${row.id}`,
  };
}

export async function fetchColRelease() {
  const data = await archiveJson<{
    key: number;
    alias?: string;
    issued?: string;
    doi?: string;
    title?: string;
  }>(`${COL_API_BASE}/dataset/${COL_DATASET}`);
  return {
    datasetKey: String(data.key),
    alias: data.alias,
    issued: data.issued,
    doi: data.doi,
    url: ARCHIVE_SOURCES.col.url,
  };
}

/** Accepted Animalia species count in the configured COL dataset. */
export async function fetchColAnimaliaSpeciesCount(): Promise<number> {
  const data = await archiveJson<{ total?: number }>(
    `${COL_API_BASE}/dataset/${COL_DATASET}/nameusage/search` +
      `?TAXON_ID=${COL_ANIMALIA_ID}&rank=species&status=accepted&limit=0`,
  );
  return data.total ?? 0;
}

export async function fetchColAnimaliaPhyla(): Promise<ArchivePhylum[]> {
  const data = await archiveJson<{
    result: ColTreeChild[];
    total: number;
  }>(
    `${COL_API_BASE}/dataset/${COL_DATASET}/tree/${COL_ANIMALIA_ID}/children?limit=100`,
  );
  return (data.result ?? [])
    .filter((r) => r.rank === "phylum" || !r.rank)
    .map((r) => ({
      id: r.id,
      name: r.name,
      authorship: r.authorship,
      count: r.count ?? 0,
      childCount: r.childCount ?? 0,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export async function searchColAnimals(
  q: string,
  limit = 20,
): Promise<ArchiveSpecies[]> {
  if (!q.trim()) return [];
  const params = new URLSearchParams({
    q: q.trim(),
    rank: "species",
    status: "accepted",
    limit: String(limit),
  });
  // Scope to Animalia so results match the archive kingdom
  params.set("TAXON_ID", COL_ANIMALIA_ID);
  const data = await archiveJson<{ result: ColSearchResult[] }>(
    `${COL_API_BASE}/dataset/${COL_DATASET}/nameusage/search?${params}`,
  );
  return (data.result ?? [])
    .filter((row) =>
      row.classification?.some(
        (c) => c.rank === "kingdom" && c.name === "Animalia",
      ),
    )
    .map(mapColHit);
}

export async function getColSpecies(id: string): Promise<ArchiveSpecies | null> {
  const params = new URLSearchParams({
    q: id,
    limit: "5",
    type: "EXACT",
  });
  // Prefer direct nameusage, fall back to search by id
  try {
    const usage = await archiveJson<{
      id: string;
      status?: string;
      name: { scientificName: string; authorship?: string; rank?: string };
      parentId?: string;
    }>(`${COL_API_BASE}/dataset/${COL_DATASET}/nameusage/${id}`);
    const search = await searchColAnimals(usage.name.scientificName, 5);
    return search.find((s) => s.id === id) ?? {
      id: usage.id,
      source: "col",
      scientificName: usage.name.scientificName,
      authorship: usage.name.authorship,
      rank: usage.name.rank,
      status: usage.status,
      kingdom: "Animalia",
      url: `https://www.catalogueoflife.org/data/taxon/${usage.id}`,
    };
  } catch {
    void params;
    return null;
  }
}
