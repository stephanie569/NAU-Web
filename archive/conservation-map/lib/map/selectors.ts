import {
  animalGroupLabels,
  mapConfig,
  markerColors,
  storyTypeLabels,
} from "@/lib/map/config";
import {
  getPublishedStories,
  getRegionsCatalog,
  getSpeciesCatalog,
} from "@/lib/map/content";
import type {
  AnimalGroup,
  MapMarker,
  Region,
  Species,
  Story,
  StoryType,
} from "@/lib/map/types";

export type ResolvedStory = {
  story: Story;
  species: Species;
  region: Region;
  marker: MapMarker;
};

function daysBetween(isoA: string, isoB = new Date().toISOString()): number {
  const a = new Date(isoA).getTime();
  const b = new Date(isoB).getTime();
  return Math.abs(b - a) / (1000 * 60 * 60 * 24);
}

export function isRecentPublication(publishedAt: string): boolean {
  return daysBetween(publishedAt) <= mapConfig.recentAlertWindowDays;
}

function hash01(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return ((h >>> 0) % 10_000) / 10_000;
}

/** Deterministic offset so animals in one region don't stack — stays fixed forever. */
function stableOffset(
  seed: string,
  spread = 0.85,
): { dLat: number; dLng: number } {
  const u = hash01(seed);
  const v = hash01(`${seed}:b`);
  const a = u * Math.PI * 2;
  const r = Math.sqrt(v) * spread;
  return { dLat: Math.sin(a) * r, dLng: Math.cos(a) * r };
}

function clampLat(lat: number) {
  return Math.max(-85, Math.min(85, lat));
}

function wrapLng(lng: number) {
  let x = lng;
  while (x > 180) x -= 360;
  while (x < -180) x += 360;
  return x;
}

/** Stable 0–1 priority — lower shows earlier when zoomed out. */
export function markerZoomPriority(markerId: string): number {
  return hash01(`lod:${markerId}`);
}

/**
 * How many pins to show at this camera altitude (globe-radius units).
 * Far out → few accurate animal pins; zoom in → more; fully close → all.
 */
export function pinFractionForAltitude(altitude: number): number {
  const far = mapConfig.zoomLodFarAltitude;
  const near = mapConfig.zoomLodNearAltitude;
  const min = mapConfig.zoomLodMinFraction;
  const t = Math.max(0, Math.min(1, (far - altitude) / (far - near)));
  // Ease-in so mid-zoom adds pins quickly as the user scrolls closer
  return min + (1 - min) * Math.pow(t, 1.25);
}

export function buildMarkers(stories: Story[] = getPublishedStories()): MapMarker[] {
  const speciesById = new Map(getSpeciesCatalog().map((s) => [s.id, s]));
  const regionsById = new Map(getRegionsCatalog().map((r) => [r.id, r]));

  return stories.flatMap((story) => {
    const species = speciesById.get(story.speciesId);
    const region = regionsById.get(story.regionId);
    if (!species || !region) return [];

    const kind = story.type;
    const { dLat, dLng } = stableOffset(`${story.id}:${species.id}`);
    return [
      {
        id: `marker-${story.id}`,
        storyId: story.id,
        speciesId: species.id,
        regionId: region.id,
        kind,
        lat: clampLat(region.displayLat + dLat),
        lng: wrapLng(region.displayLng + dLng),
        label: species.commonName,
        scientificName: species.scientificName,
        regionName: region.name,
        animalGroup: species.animalGroup,
        publishedAt: story.publishedAt,
        isRecent: isRecentPublication(story.publishedAt),
        isDemo: Boolean(story.isDemo),
        color: markerColors[kind],
      } satisfies MapMarker,
    ];
  });
}

/**
 * Progressive wildlife pins by zoom.
 * Always returns real animal coordinates (never region centroids).
 */
export function markersVisibleAtAltitude(
  markers: MapMarker[],
  altitude: number,
): {
  animals: MapMarker[];
  clusters: ReturnType<typeof regionalSignals>;
  showAnimalLabels: boolean;
  showAnimals: boolean;
  visibleCount: number;
  totalCount: number;
  fraction: number;
} {
  const fraction = pinFractionForAltitude(altitude);
  const targetCount = Math.max(
    1,
    Math.min(markers.length, Math.ceil(markers.length * fraction)),
  );

  // Geographic spread first: one best pin per region, then fill by priority
  const byRegion = new Map<string, MapMarker[]>();
  for (const marker of markers) {
    const list = byRegion.get(marker.regionId) ?? [];
    list.push(marker);
    byRegion.set(marker.regionId, list);
  }

  const selected: MapMarker[] = [];
  const selectedIds = new Set<string>();

  const regionBest = [...byRegion.values()].map((list) =>
    [...list].sort(
      (a, b) => markerZoomPriority(a.id) - markerZoomPriority(b.id),
    )[0],
  );
  regionBest.sort(
    (a, b) => markerZoomPriority(a.id) - markerZoomPriority(b.id),
  );

  for (const marker of regionBest) {
    if (selected.length >= targetCount) break;
    selected.push(marker);
    selectedIds.add(marker.id);
  }

  const remaining = markers
    .filter((m) => !selectedIds.has(m.id))
    .sort((a, b) => markerZoomPriority(a.id) - markerZoomPriority(b.id));

  for (const marker of remaining) {
    if (selected.length >= targetCount) break;
    selected.push(marker);
    selectedIds.add(marker.id);
  }

  return {
    animals: selected,
    clusters: [],
    showAnimalLabels: false,
    showAnimals: true,
    visibleCount: selected.length,
    totalCount: markers.length,
    fraction,
  };
}

export function resolveStory(storyId: string): ResolvedStory | null {
  const story = getPublishedStories().find((s) => s.id === storyId);
  if (!story) return null;
  const species = getSpeciesCatalog().find((s) => s.id === story.speciesId);
  const region = getRegionsCatalog().find((r) => r.id === story.regionId);
  if (!species || !region) return null;
  const marker = buildMarkers([story])[0];
  if (!marker) return null;
  return { story, species, region, marker };
}

export function filterMarkers(
  markers: MapMarker[],
  opts: {
    query?: string;
    groups?: AnimalGroup[];
    types?: StoryType[];
  },
): MapMarker[] {
  const q = opts.query?.trim().toLowerCase() ?? "";
  const groups = opts.groups ?? [];
  const types = opts.types ?? [];

  return markers.filter((marker) => {
    if (groups.length && !groups.includes(marker.animalGroup)) return false;
    if (types.length && !types.includes(marker.kind)) return false;
    if (!q) return true;
    return (
      marker.label.toLowerCase().includes(q) ||
      marker.scientificName.toLowerCase().includes(q) ||
      marker.regionName.toLowerCase().includes(q) ||
      storyTypeLabels[marker.kind]?.toLowerCase().includes(q)
    );
  });
}

export function formatDisplayDate(iso?: string): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function groupLabel(group: AnimalGroup): string {
  return animalGroupLabels[group] ?? group;
}

export function typeLabel(type: StoryType): string {
  return storyTypeLabels[type] ?? type;
}

/** Broad regional signals when zoomed out. */
export function regionalSignals(markers: MapMarker[]): {
  id: string;
  lat: number;
  lng: number;
  label: string;
  count: number;
}[] {
  const byRegion = new Map<
    string,
    { lat: number; lng: number; label: string; count: number }
  >();

  for (const marker of markers) {
    const existing = byRegion.get(marker.regionId);
    if (existing) {
      existing.count += 1;
    } else {
      byRegion.set(marker.regionId, {
        lat: marker.lat,
        lng: marker.lng,
        label: marker.regionName,
        count: 1,
      });
    }
  }

  return [...byRegion.entries()].map(([id, value]) => ({ id, ...value }));
}
