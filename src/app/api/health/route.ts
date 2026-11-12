import { NextResponse } from "next/server";

// GIT_SHA is set in the runtime image, not at build time, so this must be
// evaluated per request rather than prerendered.
export const dynamic = "force-dynamic";

// `commit` lets the deploy workflow confirm that the Pi is actually serving
// the image it just published.
export function GET() {
  return NextResponse.json(
    { ok: true, commit: process.env.GIT_SHA ?? "unknown" },
    { headers: { "Cache-Control": "no-store" } },
  );
}
