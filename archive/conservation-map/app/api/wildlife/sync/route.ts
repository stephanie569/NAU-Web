import { NextResponse } from "next/server";
import { isSyncAuthorized } from "@/lib/wildlife/auth";
import { importConfiguredFeeds } from "@/lib/wildlife/feeds";
import { runWildlifeAssessmentSync } from "@/lib/wildlife/sync";

export const dynamic = "force-dynamic";
export const maxDuration = 120;

export async function POST(request: Request) {
  if (!isSyncAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const result = await runWildlifeAssessmentSync();
  const feeds = await importConfiguredFeeds();
  return NextResponse.json(
    { ...result, feeds },
    { status: result.ok ? 200 : 502 },
  );
}

export async function GET(request: Request) {
  return POST(request);
}
