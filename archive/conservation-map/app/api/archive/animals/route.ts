import { NextResponse } from "next/server";
import {
  browseLocalAnimals,
  countLocalAnimals,
  localArchiveExists,
} from "@/lib/archive/local";
import { readArchiveStore } from "@/lib/archive/store";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.trim() ?? "";
  const offset = Number(searchParams.get("offset") || 0);
  const limit = Number(searchParams.get("limit") || 40);
  const store = readArchiveStore();

  if (!localArchiveExists()) {
    return NextResponse.json({
      ready: false,
      results: [],
      totalMatched: 0,
      localCount: store.meta.localCount ?? 0,
      ingest: store.meta.ingest ?? null,
      message:
        "Full local archive not built yet. Run npm run archive:ingest (or wait for the ingest job).",
    });
  }

  const page = await browseLocalAnimals({ offset, limit, q: q || undefined });
  const localCount =
    store.meta.localCount && store.meta.localCount > 0
      ? store.meta.localCount
      : await countLocalAnimals();

  return NextResponse.json({
    ready: true,
    results: page.results,
    totalMatched: q ? page.totalMatched : localCount,
    offset,
    limit,
    localCount,
    ingest: store.meta.ingest ?? null,
  });
}
