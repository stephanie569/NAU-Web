import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { isEditorAuthorized, isPartnerAuthorized } from "@/lib/wildlife/auth";
import { readWildlifeStore, writeWildlifeStore } from "@/lib/wildlife/store";
import type {
  ConservationEventRecord,
  ConservationEventType,
  EventVerificationStatus,
} from "@/lib/wildlife/types";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const store = readWildlifeStore();
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status") as EventVerificationStatus | null;
  const editor = isEditorAuthorized(request);

  let events = store.events;
  if (!editor) {
    events = events.filter((e) => e.verificationStatus === "approved");
  } else if (status) {
    events = events.filter((e) => e.verificationStatus === status);
  }

  return NextResponse.json({ events, editor });
}

export async function POST(request: Request) {
  if (!isPartnerAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as Partial<ConservationEventRecord> & {
    historicalImport?: boolean;
  };

  const required = [
    "speciesId",
    "regionName",
    "eventType",
    "headline",
    "summary",
    "eventDate",
    "sourceUrl",
    "organisation",
  ] as const;

  for (const key of required) {
    if (!body[key] || String(body[key]).trim() === "") {
      return NextResponse.json(
        { error: `Missing field: ${key}` },
        { status: 400 },
      );
    }
  }

  const store = readWildlifeStore();
  const mapping = store.mappings.find((m) => m.speciesId === body.speciesId);
  if (!mapping) {
    return NextResponse.json(
      { error: "Unknown speciesId — use a curated map species id" },
      { status: 400 },
    );
  }

  const event: ConservationEventRecord = {
    id: randomUUID(),
    speciesId: body.speciesId!,
    regionId: body.regionId || mapping.regionId,
    regionName: body.regionName!,
    displayLat:
      typeof body.displayLat === "number" ? body.displayLat : mapping.displayLat,
    displayLng:
      typeof body.displayLng === "number" ? body.displayLng : mapping.displayLng,
    eventType: body.eventType as ConservationEventType,
    headline: body.headline!,
    summary: body.summary!,
    eventDate: body.eventDate!,
    publicationDate: body.publicationDate || new Date().toISOString().slice(0, 10),
    sourceUrl: body.sourceUrl!,
    organisation: body.organisation!,
    verificationStatus: "pending_review",
    actionUrl: body.actionUrl,
    isHistoricalImport: Boolean(body.historicalImport || body.isHistoricalImport),
    isDemo: false,
    submittedBy: body.submittedBy || "partner-form",
  };

  // Never allow events to mutate assessments
  store.events.unshift(event);
  writeWildlifeStore(store);

  return NextResponse.json({
    ok: true,
    event,
    message: "Submitted to review queue. Not public until approved.",
  });
}
