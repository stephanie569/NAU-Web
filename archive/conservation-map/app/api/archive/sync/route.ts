import { NextResponse } from "next/server";
import { runSpeciesArchiveSync } from "@/lib/archive/sync";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

function authorized(request: Request) {
  const secret = process.env.ARCHIVE_SYNC_SECRET;
  if (!secret) {
    // Local/dev: allow without secret
    return process.env.NODE_ENV !== "production";
  }
  const header = request.headers.get("x-archive-sync-secret");
  const url = new URL(request.url);
  const query = url.searchParams.get("secret");
  return header === secret || query === secret;
}

export async function POST(request: Request) {
  if (!authorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const result = await runSpeciesArchiveSync({ lookbackDays: 14 });
  return NextResponse.json(result, { status: result.ok ? 200 : 502 });
}

export async function GET(request: Request) {
  return POST(request);
}
