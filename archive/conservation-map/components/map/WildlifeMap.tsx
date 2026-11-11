"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react";
import dynamic from "next/dynamic";
import type { CameraViewState } from "@/components/map/CesiumGlobe";
import { AnimalCard } from "@/components/map/AnimalCard";
import { MapSearchBar } from "@/components/map/MapSearchBar";
import type { MapSearchHit } from "@/lib/archive/mapSpecies";
import { mapConfig } from "@/lib/map/config";
import type { MapMarker } from "@/lib/map/types";
import type { AnimalCardPayload } from "@/lib/wildlife/types";

const CesiumGlobe = dynamic(
  () =>
    import("@/components/map/CesiumGlobe").then((m) => m.CesiumGlobe),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-black text-[12px] text-white/45">
        Starting Cesium…
      </div>
    ),
  },
);

export function WildlifeMap() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [globeReady, setGlobeReady] = useState(false);
  const [globeError, setGlobeError] = useState<string | null>(null);
  const [focusToken, setFocusToken] = useState(0);
  const [focusView, setFocusView] = useState<{
    lat: number;
    lng: number;
    altitude: number;
  } | null>(mapConfig.defaultView);
  const [menuOpen, setMenuOpen] = useState(false);
  const [archiveMarkers, setArchiveMarkers] = useState<MapMarker[]>([]);
  const [wildlifeMarkers, setWildlifeMarkers] = useState<MapMarker[]>([]);
  const [archiveTotal, setArchiveTotal] = useState(0);
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
  const [animalCard, setAnimalCard] = useState<AnimalCardPayload | null>(null);
  const [cardLoading, setCardLoading] = useState(false);
  const [pending, startTransition] = useTransition();
  const fetchSeq = useRef(0);
  const cardSeq = useRef(0);
  const lastQuery = useRef("");
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const markersRef = useRef<MapMarker[]>([]);

  const markers = useMemo(
    () => [...wildlifeMarkers, ...archiveMarkers],
    [wildlifeMarkers, archiveMarkers],
  );
  markersRef.current = markers;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReducedMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/wildlife/map");
        const data = await res.json();
        if (cancelled) return;
        setWildlifeMarkers(data.markers || []);
      } catch {
        /* keep empty wildlife layer */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setSelectedStoryId(null);
        setSelectedLabel(null);
        setAnimalCard(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const focusOn = useCallback(
    (view: { lat: number; lng: number; altitude: number }) => {
      setFocusView(view);
      setFocusToken((n) => n + 1);
    },
    [],
  );

  const loadMarkersForView = useCallback((view: CameraViewState) => {
    const params = new URLSearchParams({
      west: String(view.west),
      south: String(view.south),
      east: String(view.east),
      north: String(view.north),
      altitude: String(view.altitude),
      lat: String(view.lat),
      lng: String(view.lng),
    });
    // Coarse key so tiny jitter doesn't refetch, but pan/zoom still reloads region
    const key = [
      view.west.toFixed(2),
      view.south.toFixed(2),
      view.east.toFixed(2),
      view.north.toFixed(2),
      view.altitude.toFixed(2),
      view.lat.toFixed(1),
      view.lng.toFixed(1),
    ].join("|");
    if (key === lastQuery.current) return;
    lastQuery.current = key;
    const seq = ++fetchSeq.current;

    startTransition(async () => {
      try {
        const res = await fetch(`/api/archive/map?${params}`);
        const data = await res.json();
        if (seq !== fetchSeq.current) return;
        setArchiveMarkers((data.markers || []) as MapMarker[]);
        if (typeof data.totalInArchive === "number") {
          setArchiveTotal(data.totalInArchive);
        }
      } catch {
        /* keep previous markers */
      }
    });
  }, []);

  const onCameraViewChange = useCallback(
    (view: CameraViewState) => {
      // Globe only emits on settle now; short debounce coalesces resize + settle
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => loadMarkersForView(view), 80);
    },
    [loadMarkersForView],
  );

  const selectStory = useCallback((storyId: string) => {
    setSelectedStoryId(storyId);
    const marker = markersRef.current.find((m) => m.storyId === storyId);
    setSelectedLabel(marker?.scientificName ?? marker?.label ?? null);
    // Keep the current camera — do not fly/zoom when opening a card
    if (marker) {
      setAnimalCard({
        speciesId: marker.speciesId,
        scientificName: marker.scientificName || marker.label,
        commonName: marker.label,
        emoji: marker.emoji,
        isDemo: marker.isDemo,
        regionName: marker.regionName,
        animalGroup: marker.animalGroup,
        photo: null,
        assessment: {
          statusLabel: "Assessment unavailable",
          category: null,
          scope: null,
          assessmentDate: null,
          publicationDate: null,
          populationTrend: null,
          sourceUrl: null,
          lastSuccessfulCheck: null,
          stale: false,
          unavailable: true,
          explicitlyNotAssessed: false,
          provider: null,
        },
        latestEvent: null,
        eventHistory: [],
      });
    }

    const seq = ++cardSeq.current;
    setCardLoading(true);
    startTransition(async () => {
      try {
        const res = await fetch(
          `/api/map/animal-card?storyId=${encodeURIComponent(storyId)}`,
        );
        if (seq !== cardSeq.current) return;
        if (!res.ok) {
          setCardLoading(false);
          return;
        }
        const data = await res.json();
        if (seq !== cardSeq.current) return;
        setAnimalCard(data.card ?? null);
      } catch {
        /* keep optimistic card */
      } finally {
        if (seq === cardSeq.current) setCardLoading(false);
      }
    });
  }, []);

  const onSearchSelect = useCallback(
    (hit: MapSearchHit) => {
      focusOn({
        lat: hit.lat,
        lng: hit.lng,
        altitude: hit.altitude,
      });
      if (hit.kind === "animal" && hit.storyId) {
        // Open card after a beat so the camera fly can start first
        window.setTimeout(() => selectStory(hit.storyId!), 280);
      } else {
        setSelectedStoryId(null);
        setSelectedLabel(null);
        setAnimalCard(null);
      }
    },
    [focusOn, selectStory],
  );

  return (
    <div
      data-header-theme="dark"
      className="fixed inset-0 overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0">
        <CesiumGlobe
          markers={markers}
          selectedStoryId={selectedStoryId}
          animationEnabled={false}
          reducedMotion={reducedMotion}
          focusToken={focusToken}
          focusView={focusView}
          onSelectStory={selectStory}
          onFocusRegion={focusOn}
          onReadyChange={setGlobeReady}
          onError={setGlobeError}
          onCameraViewChange={onCameraViewChange}
        />
      </div>

      <div className="absolute top-4 left-4 z-30 flex flex-col gap-2 md:top-5 md:left-5">
        <MapSearchBar onSelect={onSearchSelect} />
        {archiveTotal > 0 ? (
          <p className="max-w-[360px] rounded-[4px] border border-white/10 bg-black/55 px-3 py-1.5 text-[11px] leading-snug text-white/55 backdrop-blur-sm">
            {archiveTotal.toLocaleString()} species with real localities on the
            map
            {pending ? " · updating view…" : ""}
            {" · "}
            <span className="text-white/40">
              more appear as GBIF enrichment runs
            </span>
          </p>
        ) : null}
      </div>

      {animalCard ? (
        <div className="absolute top-4 right-4 z-30 md:top-5 md:right-5">
          <AnimalCard
            key={animalCard.speciesId}
            card={animalCard}
            loading={cardLoading}
            onClose={() => {
              setAnimalCard(null);
              setCardLoading(false);
              setSelectedStoryId(null);
              setSelectedLabel(null);
            }}
          />
        </div>
      ) : null}

      <div className="absolute bottom-4 left-4 z-20 md:bottom-5 md:left-5">
        <div className="flex items-end gap-2">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="map-controls-panel"
            className="flex h-9 items-center gap-2 rounded-sm px-1 text-[15px] font-medium tracking-[-0.03em] text-[#9fd0ff] transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/40"
          >
            <span className="flex h-3.5 w-4 flex-col justify-between" aria-hidden>
              <span className="block h-px w-full bg-[#9fd0ff]" />
              <span className="block h-px w-full bg-[#9fd0ff]" />
              <span className="block h-px w-full bg-[#9fd0ff]" />
            </span>
            conservation
          </button>
        </div>

        {menuOpen ? (
          <div
            id="map-controls-panel"
            className="mt-2 w-[min(92vw,320px)] rounded-[4px] border border-white/10 bg-black/85 p-3 shadow-[0_16px_50px_rgba(0,0,0,0.55)] backdrop-blur-md"
          >
            <p className="mb-3 text-[12px] leading-snug text-white/70">
              Zoom into a region to see animals recorded there (GBIF localities).
              Icons vary by species / group — not dens or live tracking.
              {archiveTotal
                ? ` ${archiveTotal.toLocaleString()} species mapped so far.`
                : ""}
              {pending ? " Updating…" : ""}
            </p>
            <div className="mb-3 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-white/45">
              <span>🦁 mammals</span>
              <span>🐦 birds</span>
              <span>🦎 reptiles</span>
              <span>🐸 amphibians</span>
              <span>🐟 fish</span>
              <span>🦋 insects</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => focusOn(mapConfig.earthView)}
                className="rounded-sm border border-white/15 px-2 py-1 text-[11px] text-white/80 hover:border-white/35"
              >
                Full Earth
              </button>
              <button
                type="button"
                onClick={() => focusOn(mapConfig.bulgariaView)}
                className="rounded-sm border border-white/15 px-2 py-1 text-[11px] text-white/80 hover:border-white/35"
              >
                Bulgaria
              </button>
              <button
                type="button"
                onClick={() => focusOn(mapConfig.earthView)}
                className="rounded-sm border border-white/15 px-2 py-1 text-[11px] text-white/80 hover:border-white/35"
              >
                Reset
              </button>
              <a
                href="/archive"
                className="rounded-sm border border-[#9fd0ff]/35 px-2 py-1 text-[11px] text-[#9fd0ff] hover:border-[#9fd0ff]/60"
              >
                Species archive
              </a>
              <a
                href="/editorial"
                className="rounded-sm border border-white/15 px-2 py-1 text-[11px] text-white/80 hover:border-white/35"
              >
                Editorial
              </a>
              <a
                href="/contribute"
                className="rounded-sm border border-white/15 px-2 py-1 text-[11px] text-white/80 hover:border-white/35"
              >
                Contribute
              </a>
            </div>
            {selectedLabel ? (
              <p className="mt-3 border-t border-white/10 pt-2 text-[12px] text-white/70">
                Selected:{" "}
                <span className="italic text-white">{selectedLabel}</span>
              </p>
            ) : null}
          </div>
        ) : null}
      </div>

      {!globeReady && !globeError ? (
        <p className="pointer-events-none absolute top-[4.75rem] left-4 z-10 max-w-xs text-[11px] text-white/45 md:top-[5.25rem] md:left-5">
          Loading Earth… If this stays blank, open this URL in Chrome or Safari
          (editor preview often blocks WebGL).
        </p>
      ) : null}
      {globeError ? (
        <p
          className="absolute top-[4.75rem] left-4 z-10 max-w-sm text-[11px] text-amber-200/85 md:top-[5.25rem] md:left-5"
          role="status"
        >
          {globeError}
        </p>
      ) : null}

      <p className="pointer-events-none absolute right-4 bottom-4 z-10 hidden text-[10px] text-white/35 md:block">
        Drag to rotate · scroll/pinch zoom · right-drag tilt · click an animal
      </p>
    </div>
  );
}
