import { NextResponse } from "next/server";
import { buildAnimalCardForStoryId } from "@/lib/map/buildAnimalCard";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const storyId = searchParams.get("storyId")?.trim();
  if (!storyId) {
    return NextResponse.json({ error: "Missing storyId" }, { status: 400 });
  }

  try {
    const card = await buildAnimalCardForStoryId(storyId);
    if (!card) {
      return NextResponse.json({ error: "Species not found" }, { status: 404 });
    }
    return NextResponse.json(
      { card },
      {
        headers: {
          "Cache-Control": "public, max-age=120, stale-while-revalidate=600",
        },
      },
    );
  } catch (err) {
    return NextResponse.json(
      {
        error: err instanceof Error ? err.message : "Card lookup failed",
      },
      { status: 500 },
    );
  }
}
