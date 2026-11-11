import { NextResponse } from "next/server";
import { ARCHIVE_SOURCES } from "@/lib/archive/sources";
import { readArchiveStore } from "@/lib/archive/store";

export const dynamic = "force-dynamic";

export async function GET() {
  const store = readArchiveStore();
  return NextResponse.json({
    sources: ARCHIVE_SOURCES,
    meta: store.meta,
    phylaCount: store.phyla.length,
    discoveries: store.discoveries.slice(0, 40),
    phyla: store.phyla,
  });
}
