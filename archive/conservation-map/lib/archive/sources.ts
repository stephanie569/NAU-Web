import type { ArchiveSource } from "@/lib/archive/types";

/** Authoritative catalogues we federate for the animal archive. */
export const ARCHIVE_SOURCES: Record<
  ArchiveSource,
  { label: string; url: string; blurb: string }
> = {
  col: {
    label: "Catalogue of Life",
    url: "https://www.catalogueoflife.org/tools/api",
    blurb:
      "ChecklistBank API — COL Extended Release Animalia (~1.65M accepted species).",
  },
  gbif: {
    label: "GBIF",
    url: "https://www.gbif.org/",
    blurb:
      "Global Biodiversity Information Facility — species backbone and occurrences.",
  },
  worms: {
    label: "WoRMS",
    url: "https://www.marinespecies.org/",
    blurb:
      "World Register of Marine Species — authoritative marine name catalogue.",
  },
};

/**
 * COL ChecklistBank dataset key / alias.
 * - `3LXR` — latest Extended Release (broadest Animalia coverage)
 * - `3LR` — latest monthly release (smaller, curated)
 * Override with env COL_DATASET_KEY.
 * @see https://www.catalogueoflife.org/tools/api
 * @see https://api.checklistbank.org/
 */
export const COL_DATASET =
  process.env.COL_DATASET_KEY?.trim() || "3LXR";
/** Animalia kingdom usage id in COL. */
export const COL_ANIMALIA_ID = "N";
/** ChecklistBank API root. */
export const COL_API_BASE = "https://api.checklistbank.org";
/** GBIF kingdom key for Animalia. */
export const GBIF_ANIMALIA_KEY = 1;

export const USER_AGENT = "NAU-Web-SpeciesArchive/1.0 (conservation; +https://naustudio.org)";
