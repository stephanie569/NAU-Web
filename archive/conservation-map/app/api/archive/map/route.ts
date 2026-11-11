import { NextResponse } from "next/server";
import { queryMapSpecies } from "@/lib/archive/mapSpecies";

export const dynamic = "force-dynamic";
export const maxDuration = 20;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const west = Number(searchParams.get("west") ?? -180);
  const south = Number(searchParams.get("south") ?? -85);
  const east = Number(searchParams.get("east") ?? 180);
  const north = Number(searchParams.get("north") ?? 85);
  const altitude = Number(searchParams.get("altitude") ?? 2.2);
  const lat = Number(searchParams.get("lat"));
  const lng = Number(searchParams.get("lng"));
  const limit = Number(searchParams.get("limit") || 0) || undefined;

  try {
    const result = await queryMapSpecies({
      west,
      south,
      east,
      north,
      altitude,
      lat: Number.isFinite(lat) ? lat : undefined,
      lng: Number.isFinite(lng) ? lng : undefined,
      limit,
    });
    return NextResponse.json(result, {
      headers: {
        // Short browser cache — camera settles often hit the same bbox
        "Cache-Control": "public, max-age=20, stale-while-revalidate=60",
      },
    });
  } catch (err) {
    return NextResponse.json(
      {
        markers: [],
        error: err instanceof Error ? err.message : "Map query failed",
      },
      { status: 500 },
    );
  }
}
