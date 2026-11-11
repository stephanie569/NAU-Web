/**
 * Biogeographic + marine regions used to place archive species on the globe.
 * Positions are deterministic from the scientific name (stable jitter inside
 * the region the taxon most likely belongs to). Exact dens/nests are never used.
 */

export type BioRegion = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  /** Half-span for jitter (degrees). */
  latSpan: number;
  lngSpan: number;
  marine?: boolean;
};

export const BIO_REGIONS: BioRegion[] = [
  { id: "nearctic", name: "Nearctic", lat: 45, lng: -100, latSpan: 18, lngSpan: 35 },
  { id: "neotropical", name: "Neotropical", lat: -10, lng: -60, latSpan: 25, lngSpan: 30 },
  { id: "palearctic", name: "Palearctic", lat: 50, lng: 40, latSpan: 18, lngSpan: 50 },
  { id: "afrotropical", name: "Afrotropical", lat: 5, lng: 20, latSpan: 22, lngSpan: 28 },
  { id: "indomalayan", name: "Indo-Malayan", lat: 15, lng: 95, latSpan: 16, lngSpan: 25 },
  { id: "australasian", name: "Australasian", lat: -25, lng: 140, latSpan: 18, lngSpan: 25 },
  { id: "oceania", name: "Oceania", lat: -5, lng: 170, latSpan: 12, lngSpan: 30 },
  { id: "antarctic", name: "Antarctic", lat: -75, lng: 0, latSpan: 8, lngSpan: 60 },
  { id: "arctic_ocean", name: "Arctic Ocean", lat: 78, lng: 0, latSpan: 6, lngSpan: 80, marine: true },
  { id: "n_atlantic", name: "North Atlantic", lat: 35, lng: -40, latSpan: 18, lngSpan: 30, marine: true },
  { id: "s_atlantic", name: "South Atlantic", lat: -25, lng: -15, latSpan: 18, lngSpan: 25, marine: true },
  { id: "n_pacific", name: "North Pacific", lat: 30, lng: -160, latSpan: 18, lngSpan: 40, marine: true },
  { id: "s_pacific", name: "South Pacific", lat: -20, lng: -150, latSpan: 18, lngSpan: 40, marine: true },
  { id: "indian_ocean", name: "Indian Ocean", lat: -15, lng: 70, latSpan: 18, lngSpan: 30, marine: true },
  { id: "southern_ocean", name: "Southern Ocean", lat: -55, lng: 30, latSpan: 8, lngSpan: 60, marine: true },
];

const LAND = BIO_REGIONS.filter((r) => !r.marine);
const SEA = BIO_REGIONS.filter((r) => r.marine);

const MARINE_PHYLA = new Set([
  "cnidaria",
  "ctenophora",
  "echinodermata",
  "porifera",
  "hemichordata",
  "brachiopoda",
  "bryozoa",
  "chaetognatha",
  "xenacoelomorpha",
  "mollusca",
]);

const MARINE_CLASSES = new Set([
  "actinopterygii",
  "chondrichthyes",
  "cephalaspidomorphi",
  "myxini",
  "sarcopterygii",
  "teleostei",
  "elasmobranchii",
  "holocephali",
  "appendicularia",
  "thaliacea",
  "ascidiacea",
  "cephalopoda",
  "bivalvia",
  "gastropoda",
  "anthozoa",
  "hydrozoa",
  "scyphozoa",
  "demospongiae",
  "echinoidea",
  "asteroidea",
  "ophiuroidea",
  "holothuroidea",
  "malacostraca",
  "copepoda",
  "polychaeta",
]);

export type AnimalGroup =
  | "mammals"
  | "birds"
  | "reptiles"
  | "amphibians"
  | "fish"
  | "insects"
  | "other";

export function animalGroupFromTaxonomy(
  className?: string,
  phylum?: string,
): AnimalGroup {
  const c = (className || "").toLowerCase();
  const p = (phylum || "").toLowerCase();
  if (c === "mammalia") return "mammals";
  if (c === "aves") return "birds";
  if (c === "reptilia") return "reptiles";
  if (c === "amphibia") return "amphibians";
  if (
    [
      "actinopterygii",
      "chondrichthyes",
      "teleostei",
      "elasmobranchii",
      "holocephali",
      "myxini",
      "sarcopterygii",
      "cephalaspidomorphi",
      "petromyzonti",
    ].includes(c) ||
    (p === "chordata" && /ichth|teleost|chondrich|elasmobranch/.test(c))
  ) {
    return "fish";
  }
  // Crabs / shrimp are ocean life — not land insects
  if (
    ["malacostraca", "maxillopoda", "copepoda", "branchiopoda", "ostracoda"].includes(
      c,
    )
  ) {
    return "other";
  }
  if (c === "insecta" || c === "arachnida") return "insects";
  if (p === "arthropoda") return "insects";
  return "other";
}

export function groupColor(group: AnimalGroup): string {
  switch (group) {
    case "mammals":
      return "#9fd0ff";
    case "birds":
      return "#f0b429";
    case "reptiles":
      return "#3dcf8e";
    case "amphibians":
      return "#7dd3c7";
    case "fish":
      return "#6bb3ff";
    case "insects":
      return "#c4a575";
    default:
      return "#b8c0cc";
  }
}

function hash01(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return ((h >>> 0) % 10_000) / 10_000;
}

function pick<T>(list: T[], seed: string): T {
  const i = Math.floor(hash01(seed) * list.length) % list.length;
  return list[i];
}

export function isMarineTaxon(input: {
  marine?: boolean;
  phylum?: string;
  className?: string;
  class?: string;
}): boolean {
  if (input.marine) return true;
  const p = (input.phylum || "").toLowerCase();
  const c = (input.className || input.class || "").toLowerCase();
  if (MARINE_PHYLA.has(p)) return true;
  if (MARINE_CLASSES.has(c)) return true;
  if (c.includes("cean") || c.includes("marine")) return true;
  return false;
}

export function placeSpecies(input: {
  name: string;
  phylum?: string;
  className?: string;
  class?: string;
  marine?: boolean;
}): {
  region: BioRegion;
  lat: number;
  lng: number;
  group: AnimalGroup;
  color: string;
} {
  const className = input.className || input.class;
  const group = animalGroupFromTaxonomy(className, input.phylum);
  const marine = isMarineTaxon(input) || group === "fish";
  const pool = marine ? SEA : LAND;
  const region = pick(pool, `${input.name}:region`);
  const u = hash01(`${input.name}:u`);
  const v = hash01(`${input.name}:v`);
  const lat = clamp(region.lat + (u - 0.5) * 2 * region.latSpan, -85, 85);
  let lng = region.lng + (v - 0.5) * 2 * region.lngSpan;
  while (lng > 180) lng -= 360;
  while (lng < -180) lng += 360;
  return { region, lat, lng, group, color: groupColor(group) };
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}
