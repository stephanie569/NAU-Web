/** Official conservation assessment (global or regional). Independent of local events. */
export type AssessmentRecord = {
  id: string;
  speciesId: string;
  /** Stable ID from the assessment provider (e.g. IUCN SIS taxon id). */
  sourceSpeciesId: string;
  /** Provider assessment id — used for idempotent sync. */
  assessmentId: string;
  provider: "iucn_red_list_v4" | "manual" | "licensed_placeholder";
  geographicScope: string;
  /** IUCN category code or equivalent (CR, EN, VU, NT, LC, DD, NE, NA…). */
  conservationCategory: string;
  /** Explicit source wording only — never invent. */
  populationTrend: string | null;
  assessmentDate: string;
  publicationDate: string;
  sourceUrl: string;
  lastSuccessfulCheck: string;
  /** When the source explicitly reports not assessed. */
  explicitlyNotAssessed?: boolean;
  isDemo?: boolean;
};

export type AssessmentChangeRecord = {
  id: string;
  speciesId: string;
  previousAssessmentId: string | null;
  nextAssessmentId: string;
  previousCategory: string | null;
  nextCategory: string;
  previousTrend: string | null;
  nextTrend: string | null;
  detectedAt: string;
  /** Human review required — never auto-alerts as “population dropped”. */
  reviewStatus: "pending_review" | "acknowledged" | "dismissed";
  note?: string;
};

export type ConservationEventType =
  | "mortality_incident"
  | "poisoning_incident"
  | "population_monitoring"
  | "habitat_threat"
  | "rescue_release"
  | "recovery_milestone"
  | "general_story";

export type EventVerificationStatus =
  | "draft"
  | "pending_review"
  | "approved"
  | "rejected";

/** Verified conservation event. Must never rewrite a species’ global assessment category. */
export type ConservationEventRecord = {
  id: string;
  speciesId: string;
  /** Broad public region only — never nest dens. */
  regionId: string;
  regionName: string;
  displayLat: number;
  displayLng: number;
  eventType: ConservationEventType;
  headline: string;
  summary: string;
  eventDate: string;
  publicationDate: string;
  sourceUrl: string;
  organisation: string;
  verificationStatus: EventVerificationStatus;
  actionUrl?: string;
  /** Historical imports must not pulse as breaking news. */
  isHistoricalImport?: boolean;
  isDemo?: boolean;
  submittedBy?: string;
  reviewedAt?: string;
  reviewedBy?: string;
  rejectionReason?: string;
};

export type MapSpeciesMapping = {
  speciesId: string;
  scientificName: string;
  commonName: string;
  /** Reviewed IUCN / provider taxon id — not common-name matching alone. */
  sourceSpeciesId: string | null;
  provider: "iucn_red_list_v4" | "manual" | "licensed_placeholder" | "none";
  regionId: string;
  regionName: string;
  displayLat: number;
  displayLng: number;
  enabledForSync: boolean;
  isDemo?: boolean;
};

export type WildlifeSyncState = {
  lastAttemptAt: string | null;
  lastSuccessAt: string | null;
  lastError: string | null;
  lastSpeciesChecked: number;
  iucnEnabled: boolean;
  provider: string;
};

export type WildlifeStoreFile = {
  version: 1;
  updatedAt: string;
  mappings: MapSpeciesMapping[];
  assessments: AssessmentRecord[];
  assessmentHistory: AssessmentRecord[];
  assessmentChanges: AssessmentChangeRecord[];
  events: ConservationEventRecord[];
  sync: WildlifeSyncState;
};

export type AnimalCardPhoto = {
  url: string;
  credit: string;
  sourceUrl: string | null;
  alt: string;
};

export type AnimalCardPayload = {
  speciesId: string;
  scientificName: string;
  commonName: string;
  /** Same emoji used on the map pin for this species. */
  emoji?: string | null;
  isDemo: boolean;
  regionName?: string | null;
  animalGroup?: string | null;
  taxonomy?: {
    phylum?: string | null;
    className?: string | null;
  };
  sourceLinks?: { label: string; url: string }[];
  photo: AnimalCardPhoto | null;
  assessment: {
    statusLabel: string;
    category: string | null;
    scope: string | null;
    assessmentDate: string | null;
    publicationDate: string | null;
    populationTrend: string | null;
    sourceUrl: string | null;
    lastSuccessfulCheck: string | null;
    stale: boolean;
    unavailable: boolean;
    explicitlyNotAssessed: boolean;
    provider: string | null;
  };
  latestEvent: ConservationEventRecord | null;
  eventHistory: ConservationEventRecord[];
};
