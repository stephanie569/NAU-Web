import { archiveJson } from "@/lib/archive/http";
import { ARCHIVE_SOURCES } from "@/lib/archive/sources";
import type { ArchiveSpecies } from "@/lib/archive/types";

type WormsRecord = {
  AphiaID: number;
  scientificname?: string;
  authority?: string;
  rank?: string;
  status?: string;
  kingdom?: string;
  phylum?: string;
  class?: string;
  order?: string;
  family?: string;
  genus?: string;
  isMarine?: number | boolean;
  modified?: string;
  url?: string;
};

function mapWorms(row: WormsRecord): ArchiveSpecies {
  return {
    id: String(row.AphiaID),
    source: "worms",
    scientificName: row.scientificname || String(row.AphiaID),
    authorship: row.authority,
    rank: row.rank,
    status: row.status,
    kingdom: row.kingdom,
    phylum: row.phylum,
    className: row.class,
    order: row.order,
    family: row.family,
    genus: row.genus,
    marine: Boolean(row.isMarine),
    url: row.url || `https://www.marinespecies.org/aphia.php?p=taxdetails&id=${row.AphiaID}`,
    updatedAt: row.modified,
  };
}

export async function searchWormsAnimals(
  q: string,
  limit = 20,
): Promise<ArchiveSpecies[]> {
  if (!q.trim()) return [];
  const params = new URLSearchParams({
    like: "true",
    marine_only: "true",
    offset: "1",
  });
  const encoded = encodeURIComponent(q.trim());
  const rows = await archiveJson<WormsRecord[] | null>(
    `https://www.marinespecies.org/rest/AphiaRecordsByName/${encoded}?${params}`,
  );
  return (rows ?? [])
    .filter(
      (r) =>
        (r.rank || "").toLowerCase() === "species" ||
        (r.scientificname || "").includes(" "),
    )
    .slice(0, limit)
    .map(mapWorms);
}

export async function getWormsSpecies(
  id: string,
): Promise<ArchiveSpecies | null> {
  try {
    const row = await archiveJson<WormsRecord>(
      `https://www.marinespecies.org/rest/AphiaRecordByAphiaID/${id}`,
    );
    return mapWorms(row);
  } catch {
    return null;
  }
}

/** Records created/modified in a date window (WoRMS discovery pulse). */
export async function fetchWormsRecordsByDate(
  startIsoDate: string,
  endIsoDate: string,
): Promise<ArchiveSpecies[]> {
  const params = new URLSearchParams({
    startdate: startIsoDate,
    enddate: endIsoDate,
    marine_only: "true",
  });
  const rows = await archiveJson<WormsRecord[] | null>(
    `https://www.marinespecies.org/rest/AphiaRecordsByDate?${params}`,
  );
  return (rows ?? [])
    .filter((r) => (r.status || "").toLowerCase() === "accepted")
    .filter((r) => (r.rank || "").toLowerCase() === "species")
    .map(mapWorms);
}

export function wormsSourceMeta() {
  return { url: ARCHIVE_SOURCES.worms.url };
}
