import { NextResponse } from "next/server";
import { getArchiveSpecies } from "@/lib/archive/search";
import type { ArchiveSource } from "@/lib/archive/types";

export const dynamic = "force-dynamic";

const SOURCES = new Set<ArchiveSource>(["col", "gbif", "worms"]);

export async function GET(
  _request: Request,
  context: { params: Promise<{ source: string; id: string }> },
) {
  const { source, id } = await context.params;
  if (!SOURCES.has(source as ArchiveSource)) {
    return NextResponse.json({ error: "Unknown source" }, { status: 400 });
  }
  const species = await getArchiveSpecies(source as ArchiveSource, id);
  if (!species) {
    return NextResponse.json({ error: "Species not found" }, { status: 404 });
  }
  return NextResponse.json({ species });
}
