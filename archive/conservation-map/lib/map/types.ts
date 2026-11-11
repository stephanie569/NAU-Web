export type AnimalGroup =
  | "mammals"
  | "birds"
  | "reptiles"
  | "amphibians"
  | "fish"
  | "insects"
  | "other";

/** Distinct story / alert types for the wildlife globe. */
export type StoryType =
  | "animal"
  | "incident"
  | "population_trend"
  | "recovery"
  | "story";

export type PublicationStatus = "draft" | "published";

export type SourceLink = {
  label: string;
  url: string;
};

export type SpeciesMedia = {
  type: "image" | "video";
  src: string;
  credit: string;
  alt: string;
};

export type ConservationStatus = {
  label: string;
  /** Geographic or taxonomic scope of the cited assessment. */
  assessmentScope: string;
  assessmentDate: string;
  /** IUCN Red List category code when known (CR, EN, VU, NT, LC, …). */
  iucnCategory?: string;
  /** Only include when supplied by a cited assessment. */
  populationChangePercent?: number;
  sourceUrl?: string;
};

export type Species = {
  id: string;
  commonName: string;
  scientificName: string;
  animalGroup: AnimalGroup;
  description: string;
  ecologicalRole: string;
  threats: string[];
  conservationStatus?: ConservationStatus;
  media?: SpeciesMedia;
};

/**
 * Broad display regions only.
 * Never put nest sites or precise vulnerable-animal coordinates here.
 */
export type Region = {
  id: string;
  name: string;
  displayLat: number;
  displayLng: number;
  /** Globe camera altitude when focusing this region (lower = closer). */
  focusAltitude?: number;
};

export type Organisation = {
  name: string;
  url?: string;
};

export type StoryAction = {
  label: string;
  url: string;
};

export type Story = {
  id: string;
  speciesId: string;
  regionId: string;
  type: StoryType;
  headline: string;
  /** What happened, or the animal’s story. */
  summary: string;
  whyItMatters: string;
  /** Event date (ISO) when known. */
  eventDate?: string;
  /** Monitoring period text when an event date is not appropriate. */
  monitoringPeriod?: string;
  publishedAt: string;
  reviewedAt: string;
  sources: SourceLink[];
  organisation?: Organisation;
  action?: StoryAction;
  status: PublicationStatus;
  /** Marks demonstration / illustrative records. */
  isDemo?: boolean;
};

export type MapMarkerKind =
  | "animal"
  | "incident"
  | "population_trend"
  | "recovery"
  | "story";

export type MapMarker = {
  id: string;
  storyId: string;
  speciesId: string;
  regionId: string;
  kind: MapMarkerKind;
  lat: number;
  lng: number;
  label: string;
  scientificName: string;
  regionName: string;
  animalGroup: AnimalGroup;
  publishedAt: string;
  isRecent: boolean;
  isDemo: boolean;
  color: string;
  /** Emoji character for the animal (e.g. 🦁). */
  emoji?: string | null;
  /** Rendered emoji badge (data URL) for Cesium billboard — set client-side. */
  iconUrl?: string | null;
};
