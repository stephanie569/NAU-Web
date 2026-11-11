import { NextResponse } from "next/server";
import { buildAnimalCardForStoryId } from "@/lib/map/buildAnimalCard";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const card = await buildAnimalCardForStoryId(`wildlife:${id}`);
  if (!card) {
    return NextResponse.json({ error: "Species not found" }, { status: 404 });
  }
  return NextResponse.json({ card });
}
