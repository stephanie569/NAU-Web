import { NextResponse } from "next/server";
import {
  buildWildlifeEventMarkers,
  buildWildlifeSpeciesMarkers,
} from "@/lib/wildlife/markers";
import { readWildlifeStore } from "@/lib/wildlife/store";

export const dynamic = "force-dynamic";

export async function GET() {
  const store = readWildlifeStore();
  const events = buildWildlifeEventMarkers();
  const species = buildWildlifeSpeciesMarkers();
  return NextResponse.json({
    markers: [...events, ...species],
    sync: store.sync,
    note: "Not live animal tracking. Assessments and verified events only.",
  });
}
