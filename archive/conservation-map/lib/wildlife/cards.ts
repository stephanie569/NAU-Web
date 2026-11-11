import { readWildlifeStore } from "@/lib/wildlife/store";
import type { AnimalCardPayload, ConservationEventRecord } from "@/lib/wildlife/types";

const STALE_DAYS = 120;

function daysSince(iso: string | null | undefined): number {
  if (!iso) return Number.POSITIVE_INFINITY;
  const t = new Date(iso).getTime();
  if (Number.isNaN(t)) return Number.POSITIVE_INFINITY;
  return (Date.now() - t) / (1000 * 60 * 60 * 24);
}

function categoryLabel(code: string, explicitlyNotAssessed?: boolean): string {
  if (explicitlyNotAssessed) return "Not assessed";
  const map: Record<string, string> = {
    EX: "Extinct",
    EW: "Extinct in the Wild",
    CR: "Critically Endangered",
    EN: "Endangered",
    VU: "Vulnerable",
    NT: "Near Threatened",
    LC: "Least Concern",
    DD: "Data Deficient",
    NE: "Not Evaluated",
    NA: "Not assessed",
  };
  return map[code.toUpperCase()] || code;
}

export function getAnimalCard(speciesId: string): AnimalCardPayload | null {
  const store = readWildlifeStore();
  const mapping = store.mappings.find((m) => m.speciesId === speciesId);
  if (!mapping) return null;

  const assessment =
    store.assessments.find((a) => a.speciesId === speciesId) || null;

  const approvedEvents = store.events
    .filter(
      (e) =>
        e.speciesId === speciesId && e.verificationStatus === "approved",
    )
    .sort((a, b) => b.publicationDate.localeCompare(a.publicationDate));

  const latestEvent: ConservationEventRecord | null = approvedEvents[0] || null;

  const stale = assessment
    ? daysSince(assessment.lastSuccessfulCheck) > STALE_DAYS
    : true;

  let statusLabel: string;
  if (!assessment) {
    statusLabel = "Assessment unavailable";
  } else if (assessment.explicitlyNotAssessed) {
    statusLabel = "Not assessed";
  } else {
    statusLabel = categoryLabel(
      assessment.conservationCategory,
      assessment.explicitlyNotAssessed,
    );
  }

  return {
    speciesId: mapping.speciesId,
    scientificName: mapping.scientificName,
    commonName: mapping.commonName,
    isDemo: Boolean(mapping.isDemo || assessment?.isDemo),
    regionName: mapping.regionName,
    photo: null,
    assessment: {
      statusLabel,
      category: assessment?.conservationCategory ?? null,
      scope: assessment?.geographicScope ?? null,
      assessmentDate: assessment?.assessmentDate ?? null,
      publicationDate: assessment?.publicationDate ?? null,
      populationTrend: assessment?.populationTrend ?? null,
      sourceUrl: assessment?.sourceUrl ?? null,
      lastSuccessfulCheck: assessment?.lastSuccessfulCheck ?? null,
      stale: Boolean(assessment) && stale,
      unavailable: !assessment,
      explicitlyNotAssessed: Boolean(assessment?.explicitlyNotAssessed),
      provider: assessment?.provider ?? null,
    },
    latestEvent,
    eventHistory: approvedEvents,
  };
}
