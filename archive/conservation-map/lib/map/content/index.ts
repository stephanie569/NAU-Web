import type { Region, Species, Story } from "@/lib/map/types";

/** Species / wildlife catalogs are empty — globe shows Earth only. */
export function getSpeciesCatalog(): Species[] {
  return [];
}

export function getRegionsCatalog(): Region[] {
  return [];
}

export function getPublishedStories(): Story[] {
  return [];
}

export function isDemoContentEnabled(): boolean {
  return false;
}
