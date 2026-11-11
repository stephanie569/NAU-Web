import { NextResponse } from "next/server";
import { searchMap } from "@/lib/archive/mapSpecies";

export const dynamic = "force-dynamic";
export const maxDuration = 15;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.trim() ?? "";
  const limit = Math.min(20, Math.max(1, Number(searchParams.get("limit") || 12)));

  if (q.length < 2) {
    return NextResponse.json({
      q,
      results: [],
      message: "Type at least 2 characters",
    });
  }

  try {
    const results = searchMap(q, limit);
    return NextResponse.json(
      { q, results, total: results.length },
      {
        headers: {
          "Cache-Control": "public, max-age=30, stale-while-revalidate=120",
        },
      },
    );
  } catch (err) {
    return NextResponse.json(
      {
        q,
        results: [],
        error: err instanceof Error ? err.message : "Search failed",
      },
      { status: 500 },
    );
  }
}
