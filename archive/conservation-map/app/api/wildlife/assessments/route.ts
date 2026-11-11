import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { isEditorAuthorized } from "@/lib/wildlife/auth";
import { readWildlifeStore, writeWildlifeStore } from "@/lib/wildlife/store";
import type { AssessmentRecord } from "@/lib/wildlife/types";

export const dynamic = "force-dynamic";

export async function GET() {
  const store = readWildlifeStore();
  return NextResponse.json({
    assessments: store.assessments,
    changes: store.assessmentChanges.filter((c) => c.reviewStatus === "pending_review"),
    sync: store.sync,
  });
}

/** Manual sourced assessment entry (when IUCN API is unavailable / disabled). */
export async function POST(request: Request) {
  if (!isEditorAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as Partial<AssessmentRecord>;
  const required = [
    "speciesId",
    "assessmentId",
    "geographicScope",
    "conservationCategory",
    "assessmentDate",
    "publicationDate",
    "sourceUrl",
  ] as const;

  for (const key of required) {
    if (!body[key]) {
      return NextResponse.json({ error: `Missing ${key}` }, { status: 400 });
    }
  }

  const store = readWildlifeStore();
  const mapping = store.mappings.find((m) => m.speciesId === body.speciesId);
  if (!mapping) {
    return NextResponse.json({ error: "Unknown speciesId" }, { status: 400 });
  }

  const now = new Date().toISOString();
  const existing = store.assessments.find((a) => a.speciesId === body.speciesId);

  const next: AssessmentRecord = {
    id: existing?.id || randomUUID(),
    speciesId: body.speciesId!,
    sourceSpeciesId: body.sourceSpeciesId || `manual:${body.speciesId}`,
    assessmentId: body.assessmentId!,
    provider: "manual",
    geographicScope: body.geographicScope!,
    conservationCategory: body.conservationCategory!.toUpperCase(),
    populationTrend: body.populationTrend ?? null,
    assessmentDate: body.assessmentDate!,
    publicationDate: body.publicationDate!,
    sourceUrl: body.sourceUrl!,
    lastSuccessfulCheck: now,
    explicitlyNotAssessed: Boolean(body.explicitlyNotAssessed),
    isDemo: false,
  };

  if (existing) {
    if (existing.assessmentId !== next.assessmentId) {
      store.assessmentHistory.push({ ...existing });
      store.assessmentChanges.push({
        id: randomUUID(),
        speciesId: next.speciesId,
        previousAssessmentId: existing.assessmentId,
        nextAssessmentId: next.assessmentId,
        previousCategory: existing.conservationCategory,
        nextCategory: next.conservationCategory,
        previousTrend: existing.populationTrend,
        nextTrend: next.populationTrend,
        detectedAt: now,
        reviewStatus: "pending_review",
        note: "Manual assessment update — review category change; not an auto population alert.",
      });
    }
    Object.assign(existing, next);
  } else {
    store.assessments.push(next);
  }

  mapping.provider = "manual";
  mapping.sourceSpeciesId = next.sourceSpeciesId;
  writeWildlifeStore(store);

  return NextResponse.json({ ok: true, assessment: next });
}
