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
    reviewStatus: "acknowledged" | "dismissed";
  };
  const store = readWildlifeStore();
  const change = store.assessmentChanges.find((c) => c.id === id);
  if (!change) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  change.reviewStatus = body.reviewStatus;
  writeWildlifeStore(store);
  return NextResponse.json({ ok: true, change });
}
