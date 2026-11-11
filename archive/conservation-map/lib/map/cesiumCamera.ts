/** Convert between legacy globe-radius altitudes and Cesium camera heights. */

const EARTH_RADIUS_M = 6_371_000;

/** react-globe-style altitude (Earth radii above surface) → Cesium height (m). */
export function globeAltitudeToMeters(altitude: number): number {
  return Math.max(250_000, altitude * EARTH_RADIUS_M);
}

/** Cesium camera height (m) → globe-radius altitude for zoom thresholds. */
export function metersToGlobeAltitude(heightMeters: number): number {
  return heightMeters / EARTH_RADIUS_M;
}
