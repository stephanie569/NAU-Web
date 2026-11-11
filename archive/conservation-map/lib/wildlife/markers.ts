import { animalEmoji } from "@/lib/map/animalIcons";
import { readWildlifeStore } from "@/lib/wildlife/store";
import type { ConservationEventType } from "@/lib/wildlife/types";
import type { AnimalGroup, MapMarker } from "@/lib/map/types";

function groupForSpecies(scientificName: string): AnimalGroup {
  const n = scientificName.toLowerCase();
  if (/chelonia|turtle|lizard|snake|crocodile|alligator/.test(n)) {
    return "reptiles";
  }
  if (/aves|bird|eagle|owl|penguin/.test(n)) return "birds";
  if (/fish|salmo|shark|ray/.test(n)) return "fish";
  if (/rana|frog|toad|salamander/.test(n)) return "amphibians";
  if (/insect|bee|ant|butterfly/.test(n)) return "insects";
  if (/panthera|ailuropoda|canis|ursus|felis|mammal/.test(n)) {
    return "mammals";
  }
  return "mammals";
}

const EVENT_COLORS: Record<
  ConservationEventType,
  { color: string; kind: MapMarker["kind"] }
> = {
  mortality_incident: { color: "#ff5c5c", kind: "incident" },
  poisoning_incident: { color: "#ff5c5c", kind: "incident" },
  population_monitoring: { color: "#ff5c5c", kind: "population_trend" },
  habitat_threat: { color: "#f0b429", kind: "population_trend" },
  rescue_release: { color: "#3dcf8e", kind: "recovery" },
  recovery_milestone: { color: "#3dcf8e", kind: "recovery" },
  general_story: { color: "#c8c8c8", kind: "story" },
};

const RECENT_PULSE_DAYS = 14;

function isRecentPublication(publishedAt: string, historical?: boolean) {
  if (historical) return false;
  const days =
    (Date.now() - new Date(publishedAt).getTime()) / (1000 * 60 * 60 * 24);
  return days >= 0 && days <= RECENT_PULSE_DAYS;
}

/** Approved conservation events → map markers (broad regions only). */
export function buildWildlifeEventMarkers(): MapMarker[] {
  const store = readWildlifeStore();
  return store.events
    .filter((e) => e.verificationStatus === "approved")
    .map((e) => {
      const style = EVENT_COLORS[e.eventType] || EVENT_COLORS.general_story;
      const mapping = store.mappings.find((m) => m.speciesId === e.speciesId);
      const scientificName = mapping?.scientificName || e.headline;
      const animalGroup = groupForSpecies(scientificName);
      return {
        id: `wildlife-evt-${e.id}`,
        storyId: `wildlife:${e.speciesId}`,
        speciesId: e.speciesId,
        regionId: e.regionId,
        kind: style.kind,
        lat: e.displayLat,
        lng: e.displayLng,
        label: mapping?.commonName || e.headline,
        scientificName,
        regionName: e.regionName,
        animalGroup,
        publishedAt: e.publicationDate,
        isRecent: isRecentPublication(e.publicationDate, e.isHistoricalImport),
        isDemo: Boolean(e.isDemo),
        color: style.color,
        emoji: animalEmoji({
          scientificName,
          commonName: mapping?.commonName,
          group: animalGroup,
        }),
      } satisfies MapMarker;
    });
}

/** Neutral species pins for curated catalog (assessment scope, not events). */
export function buildWildlifeSpeciesMarkers(): MapMarker[] {
  const store = readWildlifeStore();
  return store.mappings.map((m) => {
    const animalGroup = groupForSpecies(m.scientificName);
    return {
      id: `wildlife-sp-${m.speciesId}`,
      storyId: `wildlife:${m.speciesId}`,
      speciesId: m.speciesId,
      regionId: m.regionId,
      kind: "animal" as const,
      lat: m.displayLat,
      lng: m.displayLng,
      label: m.commonName,
      scientificName: m.scientificName,
      regionName: m.regionName,
      animalGroup,
      publishedAt: store.sync.lastSuccessAt || "2026-01-01",
      isRecent: false,
      isDemo: Boolean(m.isDemo),
      color: "#9fd0ff",
      emoji: animalEmoji({
        scientificName: m.scientificName,
        commonName: m.commonName,
        group: animalGroup,
      }),
    };
  });
}
