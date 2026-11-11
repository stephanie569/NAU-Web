import { getColSpecies, searchColAnimals } from "@/lib/archive/col";
import { getGbifSpecies, searchGbifAnimals } from "@/lib/archive/gbif";
import { searchLocalAnimals } from "@/lib/archive/local";
import { getWormsSpecies, searchWormsAnimals } from "@/lib/archive/worms";
import type { ArchiveSearchHit, ArchiveSource, ArchiveSpecies } from "@/lib/archive/types";

function dedupe(hits: ArchiveSpecies[]): ArchiveSearchHit[] {
  const seen = new Set<string>();
  const out: ArchiveSearchHit[] = [];
  for (const hit of hits) {
    const key = `${hit.source}:${hit.id}`;
    const nameKey = hit.scientificName.toLowerCase();
    if (seen.has(key) || seen.has(`name:${nameKey}`)) continue;
    seen.add(key);
    seen.add(`name:${nameKey}`);
    out.push(hit);
  }
  return out;
}

export async function searchArchiveAnimals(
  q: string,
  limitPerSource = 12,
): Promise<ArchiveSearchHit[]> {
  const query = q.trim();
  if (query.length < 2) return [];

  const settled = await Promise.allSettled([
    searchLocalAnimals(query, 40),
    searchColAnimals(query, limitPerSource),
    searchGbifAnimals(query, limitPerSource),
    searchWormsAnimals(query, limitPerSource),
  ]);

  const merged: ArchiveSpecies[] = [];
  for (const result of settled) {
    if (result.status === "fulfilled") merged.push(...result.value);
  }
  const needle = query.toLowerCase();
  return dedupe(merged).sort((a, b) => {
    const ae = a.scientificName.toLowerCase() === needle ? 0 : 1;
    const be = b.scientificName.toLowerCase() === needle ? 0 : 1;
    if (ae !== be) return ae - be;
    return a.scientificName.localeCompare(b.scientificName);
  });
}

export async function getArchiveSpecies(
  source: ArchiveSource,
  id: string,
): Promise<ArchiveSpecies | null> {
  if (source === "col") return getColSpecies(id);
  if (source === "gbif") return getGbifSpecies(id);
  if (source === "worms") return getWormsSpecies(id);
  return null;
}
