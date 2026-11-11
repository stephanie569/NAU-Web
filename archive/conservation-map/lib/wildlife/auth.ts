/**
 * Editorial auth for this project: shared secret header.
 * There is no user-account system yet — EDITOR_SECRET gates /editorial APIs.
 */
export function isEditorAuthorized(request: Request): boolean {
  const secret = process.env.EDITOR_SECRET?.trim();
  if (!secret) {
    // Dev convenience only
    return process.env.NODE_ENV !== "production";
  }
  const header = request.headers.get("x-editor-secret");
  const bearer = request.headers.get("authorization");
  const token = bearer?.toLowerCase().startsWith("bearer ")
    ? bearer.slice(7).trim()
    : null;
  const url = new URL(request.url);
  const query = url.searchParams.get("editorSecret");
  return header === secret || token === secret || query === secret;
}

export function isPartnerAuthorized(request: Request): boolean {
  const secret = process.env.PARTNER_SUBMIT_SECRET?.trim();
  if (!secret) return true; // open submission form → still lands in review queue
  const header = request.headers.get("x-partner-secret");
  const bearer = request.headers.get("authorization");
  const token = bearer?.toLowerCase().startsWith("bearer ")
    ? bearer.slice(7).trim()
    : null;
  return header === secret || token === secret;
}

export function isSyncAuthorized(request: Request): boolean {
  if (isEditorAuthorized(request)) return true;
  const secret =
    process.env.WILDLIFE_SYNC_SECRET?.trim() ||
    process.env.ARCHIVE_SYNC_SECRET?.trim();
  if (!secret) return process.env.NODE_ENV !== "production";
  const header = request.headers.get("x-wildlife-sync-secret");
  const bearer = request.headers.get("authorization");
  const token = bearer?.toLowerCase().startsWith("bearer ")
    ? bearer.slice(7).trim()
    : null;
  const url = new URL(request.url);
  return (
    header === secret ||
    token === secret ||
    url.searchParams.get("secret") === secret
  );
}
