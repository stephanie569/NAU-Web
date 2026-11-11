import { NextResponse } from "next/server";
import { isEditorAuthorized } from "@/lib/wildlife/auth";
import { readWildlifeStore, writeWildlifeStore } from "@/lib/wildlife/store";
import type { MapSpeciesMapping } from "@/lib/wildlife/types";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const store = readWildlifeStore();
  const editor = isEditorAuthorized(request);
  const species = editor
    ? store.mappings
    : store.mappings.map((m) => ({
        id: m.speciesId,
        commonName: m.commonName,
        scientificName: m.scientificName,
        regionName: m.regionName,
        isDemo: m.isDemo,
      }));

  if (editor) {
    return NextResponse.json({
      species: store.mappings.map((m) => ({
        id: m.speciesId,
        ...m,
      })),
    });
  }

  return NextResponse.json({ species });
}

/** Editor: update curated mapping (source IDs, sync flag, region). */
export async function PATCH(request: Request) {
  if (!isEditorAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = (await request.json()) as Partial<MapSpeciesMapping> & {
    speciesId: string;
  };
  if (!body.speciesId) {
    return NextResponse.json({ error: "Missing speciesId" }, { status: 400 });
  }
  const store = readWildlifeStore();
  const mapping = store.mappings.find((m) => m.speciesId === body.speciesId);
  if (!mapping) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  if (body.sourceSpeciesId !== undefined) {
    mapping.sourceSpeciesId = body.sourceSpeciesId;
  }
  if (body.provider) mapping.provider = body.provider;
  if (body.enabledForSync !== undefined) {
    mapping.enabledForSync = body.enabledForSync;
  }
  if (body.commonName) mapping.commonName = body.commonName;
  if (body.regionName) mapping.regionName = body.regionName;
  if (body.regionId) mapping.regionId = body.regionId;
  if (typeof body.displayLat === "number") mapping.displayLat = body.displayLat;
  if (typeof body.displayLng === "number") mapping.displayLng = body.displayLng;
  writeWildlifeStore(store);
  return NextResponse.json({ ok: true, mapping });
}
