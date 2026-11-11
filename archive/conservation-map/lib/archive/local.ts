import { createReadStream, existsSync, statSync } from "fs";
import { createInterface } from "readline";
import path from "path";
import type { ArchiveSearchHit, ArchiveSpecies } from "@/lib/archive/types";

const DATA_DIR = path.join(process.cwd(), "data", "species-archive");
const ANIMALS_PATH = path.join(DATA_DIR, "animals.jsonl");

export type LocalAnimalRecord = {
  name: string;
  auth?: string;
  col?: string;
  gbif?: string;
  worms?: string;
  phylum?: string;
  class?: string;
  order?: string;
  family?: string;
  genus?: string;
  marine?: boolean;
};

function toSpecies(rec: LocalAnimalRecord): ArchiveSpecies {
  const source = rec.col ? "col" : rec.worms ? "worms" : "gbif";
  const id = rec.col || rec.worms || rec.gbif || rec.name;
  const url =
    source === "col"
      ? `https://www.catalogueoflife.org/data/taxon/${id}`
      : source === "worms"
        ? `https://www.marinespecies.org/aphia.php?p=taxdetails&id=${id}`
        : `https://www.gbif.org/species/${id}`;
  return {
    id: String(id),
    source,
    scientificName: rec.name,
    authorship: rec.auth,
    rank: "species",
    status: "accepted",
    kingdom: "Animalia",
    phylum: rec.phylum,
    className: rec.class,
    order: rec.order,
    family: rec.family,
    genus: rec.genus,
    marine: rec.marine,
    url,
  };
}

export function getAnimalsFilePath() {
  return ANIMALS_PATH;
}

export function localArchiveExists() {
  return existsSync(ANIMALS_PATH) && statSync(ANIMALS_PATH).size > 0;
}

export async function countLocalAnimals(): Promise<number> {
  if (!localArchiveExists()) return 0;
  let n = 0;
  const rl = createInterface({
    input: createReadStream(ANIMALS_PATH, { encoding: "utf8" }),
    crlfDelay: Infinity,
  });
  for await (const line of rl) {
    if (line.trim()) n += 1;
  }
  return n;
}

export async function browseLocalAnimals(options: {
  offset?: number;
  limit?: number;
  q?: string;
}): Promise<{ totalMatched: number; results: ArchiveSpecies[] }> {
  const offset = Math.max(0, options.offset ?? 0);
  const limit = Math.min(100, Math.max(1, options.limit ?? 40));
  const q = options.q?.trim().toLowerCase() ?? "";

  if (!localArchiveExists()) {
    return { totalMatched: 0, results: [] };
  }

  const matched: ArchiveSpecies[] = [];
  let totalMatched = 0;
  const rl = createInterface({
    input: createReadStream(ANIMALS_PATH, { encoding: "utf8" }),
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    if (!line.trim()) continue;
    let rec: LocalAnimalRecord;
    try {
      rec = JSON.parse(line) as LocalAnimalRecord;
    } catch {
      continue;
    }
    if (!rec.name) continue;
    if (q && !rec.name.toLowerCase().includes(q)) continue;
    if (totalMatched >= offset && matched.length < limit) {
      matched.push(toSpecies(rec));
    }
    totalMatched += 1;
    // Fast path for unfiltered browse: stop once page filled and we can
    // still keep counting? For huge files counting all is expensive.
    // When no query, approximate by stopping after page and estimate later.
    if (!q && matched.length >= limit && totalMatched >= offset + limit) {
      // Continue counting would be slow; break and mark unknown remainder.
      break;
    }
  }

  return { totalMatched, results: matched };
}

export async function searchLocalAnimals(
  q: string,
  limit = 40,
): Promise<ArchiveSearchHit[]> {
  const query = q.trim().toLowerCase();
  if (query.length < 2 || !localArchiveExists()) return [];

  const exact: ArchiveSearchHit[] = [];
  const starts: ArchiveSearchHit[] = [];
  const contains: ArchiveSearchHit[] = [];

  const rl = createInterface({
    input: createReadStream(ANIMALS_PATH, { encoding: "utf8" }),
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    if (!line.trim()) continue;
    let rec: LocalAnimalRecord;
    try {
      rec = JSON.parse(line) as LocalAnimalRecord;
    } catch {
      continue;
    }
    const name = rec.name?.toLowerCase();
    if (!name) continue;
    if (name === query) exact.push(toSpecies(rec));
    else if (name.startsWith(query)) starts.push(toSpecies(rec));
    else if (name.includes(query)) contains.push(toSpecies(rec));
    if (exact.length + starts.length >= limit) break;
  }

  return [...exact, ...starts, ...contains].slice(0, limit);
}
