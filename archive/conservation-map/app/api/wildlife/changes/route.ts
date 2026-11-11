import { NextResponse } from "next/server";
import { isEditorAuthorized } from "@/lib/wildlife/auth";
import { readWildlifeStore } from "@/lib/wildlife/store";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (!isEditorAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const store = readWildlifeStore();
  const { searchParams } = new URL(request.url);
  const unack = searchParams.get("unacknowledged") === "1";
  let changes = store.assessmentChanges;
  if (unack) {
    changes = changes.filter((c) => c.reviewStatus === "pending_review");
  }
  return NextResponse.json({
    changes: changes.map((c) => ({
      id: c.id,
      speciesId: c.speciesId,
      kind: "assessment_change",
      summary: `Category ${c.previousCategory ?? "—"} → ${c.nextCategory}; trend ${c.previousTrend ?? "—"} → ${c.nextTrend ?? "—"}. ${c.note || ""}`.trim(),
      createdAt: c.detectedAt,
      acknowledged: c.reviewStatus !== "pending_review",
    })),
  });
}
