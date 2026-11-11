/**
 * Wildlife Map configuration.
 * Toggle demo content and recency without touching component code.
 */
export const mapConfig = {
  /** When true, illustrative demo fixtures are merged into the published set. */
  enableDemoContent: false,
  demoBanner: "",
  /** Alerts published within this many days pulse as “recent”. */
  recentAlertWindowDays: 14,
  intro:
    "Animal icons mark real GBIF occurrence localities (where the species has been recorded). Zoom in to see every mapped species in view.",
  defaultView: {
    lat: 15,
    lng: 20,
    altitude: 2.05,
  },
  earthView: {
    lat: 15,
    lng: 20,
    altitude: 2.25,
  },
  bulgariaView: {
    lat: 42.7339,
    lng: 25.4858,
    altitude: 1.35,
  },
  /** Camera altitude (globe radii) where the fewest pins show. */
  zoomLodFarAltitude: 2.45,
  /** At or below this altitude, every georeferenced species in the viewport is drawn. */
  zoomLodNearAltitude: 1.25,
  /** Minimum share of pins when fully zoomed out. */
  zoomLodMinFraction: 0.08,
  /** Hard cap on billboards sent to the client (Cesium + clustering stay smooth). */
  maxMarkersClient: 320,
  /** Zoomed-out sample size before densifying. */
  farMarkerBudget: 180,
  /** Kept for focus helpers that dive into a region. */
  animalRevealAltitude: 1.65,
  labelAltitudeThreshold: 1.55,
  regionalSignalAltitude: 1.95,
} as const;

export const animalGroupLabels: Record<string, string> = {
  mammals: "Mammals",
  birds: "Birds",
  reptiles: "Reptiles",
  amphibians: "Amphibians",
  fish: "Fish",
  insects: "Insects",
  other: "Other",
};

export const storyTypeLabels: Record<string, string> = {
  animal: "Wildlife story",
  incident: "Incident",
  population_trend: "Population trend",
  recovery: "Recovery",
  story: "General story",
};

/** Marker colours — always paired with a legend label in the UI. */
export const markerColors = {
  animal: "#9fd0ff",
  incident: "#ff5c5c",
  population_trend: "#f0b429",
  recovery: "#3dcf8e",
  story: "#c8c8c8",
} as const;
