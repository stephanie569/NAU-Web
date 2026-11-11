import { NextResponse } from "next/server";
import { searchArchiveAnimals } from "@/lib/archive/search";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.trim() ?? "";
  if (q.length < 2) {
    return NextResponse.json({ q, results: [], message: "Enter at least 2 characters" });
  }
  try {
    const results = await searchArchiveAnimals(q, 15);
    return NextResponse.json({ q, results, total: results.length });
  } catch (err) {
    return NextResponse.json(
      {
        q,
        results: [],
        error: err instanceof Error ? err.message : "Search failed",
      },
      { status: 502 },
    );
  }
}
