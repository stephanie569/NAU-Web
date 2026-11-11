"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { MapMarker } from "@/lib/map/types";
import { mapConfig } from "@/lib/map/config";
import {
  animalEmoji,
  renderEmojiMarkerIcon,
} from "@/lib/map/animalIcons";
import {
  globeAltitudeToMeters,
  metersToGlobeAltitude,
} from "@/lib/map/cesiumCamera";

export type CameraViewState = {
  west: number;
  south: number;
  east: number;
  north: number;
  altitude: number;
  lat: number;
  lng: number;
};

type ViewTarget = {
  lat: number;
  lng: number;
  altitude: number;
};

type Props = {
  markers: MapMarker[];
  selectedStoryId: string | null;
  animationEnabled: boolean;
  reducedMotion: boolean;
  focusToken: number;
  focusView: ViewTarget | null;
  onSelectStory: (storyId: string) => void;
  onFocusRegion: (view: ViewTarget) => void;
  onReadyChange: (ready: boolean) => void;
  onError: (message: string | null) => void;
  onCameraViewChange?: (view: CameraViewState) => void;
};

type EntityMeta = {
  storyId: string;
  lat: number;
  lng: number;
  label: string;
  emoji: string;
  color: string;
  isRecent: boolean;
  pulseStartedAt: number;
};

function pixelRangeForHeight(heightMeters: number): number {
  const far = globeAltitudeToMeters(mapConfig.zoomLodFarAltitude);
  // Drop clustering a little earlier than full LOD so regional animals stay distinct
  const near = globeAltitudeToMeters(mapConfig.animalRevealAltitude);
  const t = Math.max(0, Math.min(1, (far - heightMeters) / (far - near)));
  return Math.round(72 * (1 - t));
}

function applyClusterLod(
  clustering: import("cesium").EntityCluster,
  heightMeters: number,
) {
  const next = pixelRangeForHeight(heightMeters);
  if (next <= 0) {
    if (clustering.enabled) clustering.enabled = false;
    return;
  }
  if (!clustering.enabled) clustering.enabled = true;
  if (clustering.pixelRange !== next) clustering.pixelRange = next;
}

function readCameraView(
  viewer: import("cesium").Viewer,
  Cesium: typeof import("cesium"),
): CameraViewState | null {
  const carto = viewer.camera.positionCartographic;
  if (!carto) return null;
  const rect = viewer.camera.computeViewRectangle(viewer.scene.globe.ellipsoid);
  const altitude = metersToGlobeAltitude(carto.height);
  if (!rect) {
    return {
      west: -180,
      south: -85,
      east: 180,
      north: 85,
      altitude,
      lat: Cesium.Math.toDegrees(carto.latitude),
      lng: Cesium.Math.toDegrees(carto.longitude),
    };
  }
  return {
    west: Cesium.Math.toDegrees(rect.west),
    south: Cesium.Math.toDegrees(rect.south),
    east: Cesium.Math.toDegrees(rect.east),
    north: Cesium.Math.toDegrees(rect.north),
    altitude,
    lat: Cesium.Math.toDegrees(carto.latitude),
    lng: Cesium.Math.toDegrees(carto.longitude),
  };
}

/**
 * Conservation globe powered by CesiumJS
 * @see https://cesium.com/platform/cesiumjs/
 */
export function CesiumGlobe({
  markers,
  selectedStoryId,
  reducedMotion,
  focusToken,
  focusView,
  onSelectStory,
  onFocusRegion,
  onReadyChange,
  onError,
  onCameraViewChange,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const creditRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<import("cesium").Viewer | null>(null);
  const dataSourceRef = useRef<import("cesium").CustomDataSource | null>(null);
  const cesiumRef = useRef<typeof import("cesium") | null>(null);
  const metaRef = useRef(new Map<string, EntityMeta>());
  const selectRef = useRef(onSelectStory);
  const focusRef = useRef(onFocusRegion);
  const cameraRef = useRef(onCameraViewChange);
  const markersRef = useRef(markers);
  const [ready, setReady] = useState(false);

  selectRef.current = onSelectStory;
  focusRef.current = onFocusRegion;
  cameraRef.current = onCameraViewChange;
  markersRef.current = markers;

  const markerKey = useMemo(() => {
    if (!markers.length) return "0";
    const mid = markers[Math.floor(markers.length / 2)];
    // Include a few ids so swaps of the same length still rebuild
    return `${markers.length}:${markers[0].id}:${mid?.id}:${markers[markers.length - 1].id}`;
  }, [markers]);

  // Boot viewer once
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let cancelled = false;
    let removeListeners: (() => void) | undefined;
    const failsafe = window.setTimeout(() => {
      if (cancelled || viewerRef.current) return;
      onReadyChange(false);
      onError(
        "Earth is taking too long. Open http://127.0.0.1:3006/conservation in Chrome or Safari — the editor preview often blocks WebGL.",
      );
    }, 12000);

    (async () => {
      try {
        const canvasTest = document.createElement("canvas");
        const gl =
          canvasTest.getContext("webgl2") ||
          canvasTest.getContext("webgl") ||
          canvasTest.getContext("experimental-webgl");
        if (!gl) {
          throw new Error(
            "WebGL unavailable in this browser. Open /conservation in Chrome or Safari.",
          );
        }

        (window as unknown as { CESIUM_BASE_URL: string }).CESIUM_BASE_URL =
          "/cesium";

        const Cesium = await import("cesium");
        if (cancelled || !containerRef.current) return;
        cesiumRef.current = Cesium;

        const cssId = "cesium-widgets-css";
        if (!document.getElementById(cssId)) {
          const link = document.createElement("link");
          link.id = cssId;
          link.rel = "stylesheet";
          link.href = "/cesium/Widgets/widgets.css";
          document.head.appendChild(link);
        }

        const ionToken = process.env.NEXT_PUBLIC_CESIUM_ION_TOKEN;
        if (ionToken) Cesium.Ion.defaultAccessToken = ionToken;

        const viewer = new Cesium.Viewer(containerRef.current, {
          animation: false,
          timeline: false,
          baseLayerPicker: false,
          geocoder: false,
          homeButton: false,
          sceneModePicker: false,
          navigationHelpButton: false,
          fullscreenButton: false,
          infoBox: false,
          selectionIndicator: false,
          creditContainer: creditRef.current ?? undefined,
          baseLayer: false,
          terrainProvider: new Cesium.EllipsoidTerrainProvider(),
          contextOptions: {
            webgl: {
              alpha: false,
              antialias: false,
              preserveDrawingBuffer: false,
              powerPreference: "high-performance",
            },
          },
          requestRenderMode: true,
          maximumRenderTimeChange: Infinity,
        });

        try {
          viewer.imageryLayers.addImageryProvider(
            new Cesium.UrlTemplateImageryProvider({
              url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
              // Cap tile depth — deep levels cost more than they help on a globe overview
              maximumLevel: 12,
              credit: "Imagery © Esri, Maxar, Earthstar Geographics",
            }),
          );
        } catch (imageryErr) {
          console.warn("Satellite imagery failed, using ellipsoid only", imageryErr);
        }

        // Full motion: rotate, pan, zoom, tilt, pinch, inertia
        const ctrl = viewer.scene.screenSpaceCameraController;
        ctrl.enableRotate = true;
        ctrl.enableTranslate = true;
        ctrl.enableZoom = true;
        ctrl.enableTilt = true;
        ctrl.enableLook = true;
        ctrl.enableCollisionDetection = true;
        ctrl.inertiaSpin = reducedMotion ? 0 : 0.9;
        ctrl.inertiaTranslate = reducedMotion ? 0 : 0.9;
        ctrl.inertiaZoom = reducedMotion ? 0 : 0.8;
        ctrl.minimumZoomDistance = 500;
        ctrl.maximumZoomDistance = globeAltitudeToMeters(4.5);
        ctrl.zoomEventTypes = [
          Cesium.CameraEventType.WHEEL,
          Cesium.CameraEventType.PINCH,
        ];
        ctrl.tiltEventTypes = [
          Cesium.CameraEventType.RIGHT_DRAG,
          Cesium.CameraEventType.PINCH,
          {
            eventType: Cesium.CameraEventType.LEFT_DRAG,
            modifier: Cesium.KeyboardEventModifier.CTRL,
          },
        ];

        viewer.scene.globe.enableLighting = !reducedMotion;
        if (viewer.scene.skyAtmosphere) {
          viewer.scene.skyAtmosphere.show = !reducedMotion;
        }
        viewer.scene.fog.enabled = false;
        viewer.scene.backgroundColor = Cesium.Color.BLACK;
        viewer.scene.globe.baseColor = Cesium.Color.fromCssColorString("#0a2744");
        viewer.scene.globe.showGroundAtmosphere = !reducedMotion;
        viewer.scene.requestRenderMode = true;
        viewer.scene.maximumRenderTimeChange = Infinity;
        viewer.scene.globe.depthTestAgainstTerrain = false;
        // Keep rendering while the user is moving the camera
        viewer.scene.camera.percentageChanged = 0.02;

        const wildlife = new Cesium.CustomDataSource("wildlife");
        wildlife.clustering.enabled = true;
        wildlife.clustering.pixelRange = 56;
        wildlife.clustering.minimumClusterSize = 2;
        wildlife.clustering.clusterPoints = true;
        wildlife.clustering.clusterBillboards = true;
        wildlife.clustering.clusterLabels = false;

        wildlife.clustering.clusterEvent.addEventListener(
          (clusteredEntities, cluster) => {
            cluster.label.show = true;
            cluster.label.text = String(clusteredEntities.length);
            cluster.label.font = "600 12px Inter, system-ui, sans-serif";
            cluster.label.fillColor = Cesium.Color.WHITE;
            cluster.label.outlineColor = Cesium.Color.BLACK;
            cluster.label.outlineWidth = 3;
            cluster.label.style = Cesium.LabelStyle.FILL_AND_OUTLINE;
            cluster.label.showBackground = true;
            cluster.label.backgroundColor = Cesium.Color.fromCssColorString(
              "#0a1a28",
            ).withAlpha(0.75);
            cluster.label.pixelOffset = new Cesium.Cartesian2(0, -18);
            cluster.label.disableDepthTestDistance = Number.POSITIVE_INFINITY;

            // Use a real species emoji from the cluster (not a generic paw)
            let emoji = "🐾";
            let borderColor = "#9fd0ff";
            for (const ent of clusteredEntities) {
              const meta = metaRef.current.get(String(ent.id));
              if (meta?.emoji) {
                emoji = meta.emoji;
                borderColor = meta.color || borderColor;
                break;
              }
            }

            cluster.point.show = false;
            if (cluster.billboard) {
              cluster.billboard.show = true;
              cluster.billboard.image = renderEmojiMarkerIcon({
                emoji,
                size: 64,
                borderColor,
              });
              cluster.billboard.width = Math.min(
                42,
                28 + clusteredEntities.length * 0.35,
              );
              cluster.billboard.height = cluster.billboard.width;
              cluster.billboard.disableDepthTestDistance =
                Number.POSITIVE_INFINITY;
            }
          },
        );

        await viewer.dataSources.add(wildlife);
        if (cancelled) {
          viewer.destroy();
          return;
        }
        dataSourceRef.current = wildlife;

        viewer.camera.setView({
          destination: Cesium.Cartesian3.fromDegrees(
            mapConfig.defaultView.lng,
            mapConfig.defaultView.lat,
            globeAltitudeToMeters(mapConfig.defaultView.altitude),
          ),
        });

        const emitCamera = () => {
          const view = readCameraView(viewer, Cesium);
          if (view) cameraRef.current?.(view);
        };

        // Marker refetch only when the camera settles — not on every drag frame
        const onCameraSettled = () => {
          const carto = viewer.camera.positionCartographic;
          if (!carto || !dataSourceRef.current) return;
          applyClusterLod(dataSourceRef.current.clustering, carto.height);
          emitCamera();
          viewer.scene.requestRender();
        };

        let moveRaf = 0;
        const onCameraMoved = () => {
          viewer.scene.requestRender();
          if (moveRaf) return;
          moveRaf = requestAnimationFrame(() => {
            moveRaf = 0;
            const carto = viewer.camera.positionCartographic;
            if (carto && dataSourceRef.current) {
              const next = Math.max(8, pixelRangeForHeight(carto.height));
              const clustering = dataSourceRef.current.clustering;
              if (!clustering.enabled) clustering.enabled = true;
              if (Math.abs(clustering.pixelRange - next) >= 4) {
                clustering.pixelRange = next;
              }
            }
          });
        };

        viewer.camera.changed.addEventListener(onCameraMoved);
        viewer.camera.moveEnd.addEventListener(onCameraSettled);

        const onResize = () => {
          viewer.resize();
          viewer.scene.requestRender();
          emitCamera();
        };
        window.addEventListener("resize", onResize);

        const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
        handler.setInputAction(
          (movement: { position: import("cesium").Cartesian2 }) => {
            const picked = viewer.scene.pick(movement.position);
            if (!Cesium.defined(picked)) return;

            if (picked.id instanceof Cesium.Entity) {
              const meta = metaRef.current.get(String(picked.id.id));
              if (meta?.storyId) {
                selectRef.current(meta.storyId);
                return;
              }
            }

            if (Array.isArray(picked.id)) {
              const ents = picked.id as import("cesium").Entity[];
              if (ents.length === 1) {
                const meta = metaRef.current.get(String(ents[0].id));
                if (meta?.storyId) selectRef.current(meta.storyId);
                return;
              }
              if (ents.length > 1) {
                void viewer.flyTo(ents, {
                  duration: 1.1,
                  offset: new Cesium.HeadingPitchRange(
                    0,
                    Cesium.Math.toRadians(-45),
                    0,
                  ),
                });
              }
            }
          },
          Cesium.ScreenSpaceEventType.LEFT_CLICK,
        );

        removeListeners = () => {
          viewer.camera.changed.removeEventListener(onCameraMoved);
          viewer.camera.moveEnd.removeEventListener(onCameraSettled);
          window.removeEventListener("resize", onResize);
          if (moveRaf) cancelAnimationFrame(moveRaf);
          handler.destroy();
        };

        if (cancelled) {
          removeListeners();
          viewer.destroy();
          return;
        }

        viewerRef.current = viewer;
        window.clearTimeout(failsafe);
        setReady(true);
        onReadyChange(true);
        onError(null);
        onCameraSettled();
        viewer.resize();
        viewer.scene.requestRender();
      } catch (err) {
        console.error(err);
        window.clearTimeout(failsafe);
        if (cancelled) return;
        onReadyChange(false);
        onError(
          err instanceof Error
            ? err.message
            : "Cesium globe failed to load. Open /conservation in Chrome or Safari.",
        );
      }
    })();

    return () => {
      cancelled = true;
      window.clearTimeout(failsafe);
      removeListeners?.();
      dataSourceRef.current = null;
      if (viewerRef.current && !viewerRef.current.isDestroyed()) {
        viewerRef.current.destroy();
      }
      viewerRef.current = null;
      cesiumRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- mount once
  }, []);

  // Rebuild entities only when the wildlife set changes — never on every frame
  useEffect(() => {
    if (!ready) return;
    const Cesium = cesiumRef.current;
    const dataSource = dataSourceRef.current;
    if (!Cesium || !dataSource) return;

    dataSource.entities.removeAll();
    metaRef.current.clear();

    const pulseMs = 4200;
    const now = Date.now();

    for (const marker of markers) {
      const position = Cesium.Cartesian3.fromDegrees(
        marker.lng,
        marker.lat,
        1500,
      );

      const shouldPulse = Boolean(marker.isRecent) && !reducedMotion;
      const emoji =
        marker.emoji ||
        animalEmoji({
          scientificName: marker.scientificName,
          commonName: marker.label,
          group: marker.animalGroup,
        });

      metaRef.current.set(marker.id, {
        storyId: marker.storyId,
        lat: marker.lat,
        lng: marker.lng,
        label: marker.label,
        emoji,
        color: marker.color || "#9fd0ff",
        isRecent: Boolean(marker.isRecent) && !reducedMotion,
        pulseStartedAt: now,
      });

      const image =
        marker.iconUrl ||
        renderEmojiMarkerIcon({
          emoji,
          borderColor: marker.color,
          size: 72,
        });
      const baseWidth = 36;
      const baseHeight = 36;

      dataSource.entities.add({
        id: marker.id,
        position,
        billboard: {
          image,
          width: baseWidth,
          height: baseHeight,
          verticalOrigin: Cesium.VerticalOrigin.CENTER,
          horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
          heightReference: Cesium.HeightReference.NONE,
          disableDepthTestDistance: Number.POSITIVE_INFINITY,
          scaleByDistance: new Cesium.NearFarScalar(1.2e5, 1.25, 1.8e7, 0.45),
          scale: shouldPulse
            ? new Cesium.CallbackProperty(() => {
                const meta = metaRef.current.get(marker.id);
                if (!meta?.isRecent) return 1;
                const t = Date.now() - meta.pulseStartedAt;
                if (t >= pulseMs) return 1;
                const wave = 0.5 + 0.5 * Math.sin((t / 280) * Math.PI);
                return 1 + wave * 0.35;
              }, false)
            : 1,
        },
      });
    }

    const viewer = viewerRef.current;
    if (viewer && !viewer.isDestroyed()) {
      const carto = viewer.camera.positionCartographic;
      if (carto) applyClusterLod(dataSource.clustering, carto.height);
      viewer.scene.requestRender();
    }

  }, [ready, markerKey, markers, reducedMotion]);

  useEffect(() => {
    if (!ready) return;
    const Cesium = cesiumRef.current;
    const dataSource = dataSourceRef.current;
    if (!Cesium || !dataSource) return;

    dataSource.entities.values.forEach((entity) => {
      const meta = metaRef.current.get(String(entity.id));
      if (!meta || !entity.billboard) return;
      const selected = meta.storyId === selectedStoryId;
      if (selected) {
        entity.billboard.scale = new Cesium.ConstantProperty(1.45);
        entity.billboard.width = new Cesium.ConstantProperty(44);
        entity.billboard.height = new Cesium.ConstantProperty(44);
        return;
      }
      if (!meta.isRecent) {
        entity.billboard.scale = new Cesium.ConstantProperty(1);
        entity.billboard.width = new Cesium.ConstantProperty(34);
        entity.billboard.height = new Cesium.ConstantProperty(34);
      }
    });
  }, [selectedStoryId, ready]);

  useEffect(() => {
    const viewer = viewerRef.current;
    const Cesium = cesiumRef.current;
    if (!viewer || viewer.isDestroyed() || !focusView || !ready || !Cesium) {
      return;
    }

    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(
        focusView.lng,
        focusView.lat,
        globeAltitudeToMeters(focusView.altitude),
      ),
      duration: reducedMotion ? 0 : 1.35,
      complete: () => viewer.scene.requestRender(),
    });
    viewer.scene.requestRender();
  }, [focusToken, focusView, ready, reducedMotion]);

  const selectedMeta = selectedStoryId
    ? [...metaRef.current.values()].find((m) => m.storyId === selectedStoryId)
    : null;

  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      <div ref={containerRef} className="cesium-conservation h-full w-full touch-none" />
      <div ref={creditRef} className="cesium-credit-host" />

      {selectedMeta ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-16 flex justify-center px-4 md:bottom-20">
          <p className="rounded-sm border border-white/15 bg-black/70 px-3 py-2 text-[12px] text-white/85 backdrop-blur-md">
            <span className="italic">{selectedMeta.label}</span>
          </p>
        </div>
      ) : null}

      <p className="pointer-events-none absolute right-3 bottom-3 z-10 max-w-[14rem] text-right text-[10px] leading-snug text-white/35">
        3D globe by{" "}
        <a
          href="https://cesium.com/platform/cesiumjs/"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto underline decoration-white/25 underline-offset-2 hover:text-white/60"
        >
          CesiumJS
        </a>
      </p>

      <span className="sr-only">
        CesiumJS conservation globe with archive species placed by bioregion.
      </span>
    </div>
  );
}
