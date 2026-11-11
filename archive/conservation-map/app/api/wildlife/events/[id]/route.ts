import { NextResponse } from "next/server";
import { isEditorAuthorized } from "@/lib/wildlife/auth";
import { readWildlifeStore, writeWildlifeStore } from "@/lib/wildlife/store";

export const dynamic = "force-dynamic";

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  if (!isEditorAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;
  const body = (await request.json()) as {
    action: "approve" | "reject" | "acknowledge_change";
    rejectionReason?: string;
    reviewedBy?: string;
  };

  const store = readWildlifeStore();
  const event = store.events.find((e) => e.id === id);
  if (!event) {
    return NextResponse.json({ error: "Event not found" }, { status: 404 });
  }

  const now = new Date().toISOString();
  if (body.action === "approve") {
    event.verificationStatus = "approved";
    event.reviewedAt = now;
    event.reviewedBy = body.reviewedBy || "editor";
  } else if (body.action === "reject") {
    event.verificationStatus = "rejected";
    event.reviewedAt = now;
    event.reviewedBy = body.reviewedBy || "editor";
    event.rejectionReason = body.rejectionReason || "Rejected";
  } else {
    return NextResponse.json({ error: "Unknown action" }, { status: 400 });
  }

  writeWildlifeStore(store);
  return NextResponse.json({ ok: true, event });
}
