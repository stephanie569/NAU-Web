const NAME_MAX = 200;
const EMAIL_MAX = 320;
const MESSAGE_MAX = 5000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map<string, number[]>();

export type ContactFields = {
  name: string;
  email: string;
  message: string;
};

export function parseContactBody(
  body: unknown,
): { ok: true; data: ContactFields; honeypot: boolean } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request" };
  }

  const record = body as Record<string, unknown>;
  const name = typeof record.name === "string" ? record.name.trim() : "";
  const email = typeof record.email === "string" ? record.email.trim() : "";
  const message = typeof record.message === "string" ? record.message.trim() : "";
  const website = typeof record.website === "string" ? record.website.trim() : "";

  if (!name || name.length > NAME_MAX) {
    return { ok: false, error: "Please enter your name." };
  }
  if (!email || email.length > EMAIL_MAX || !EMAIL_PATTERN.test(email)) {
    return { ok: false, error: "Please enter a valid email." };
  }
  if (message.length > MESSAGE_MAX) {
    return { ok: false, error: "Message is too long." };
  }

  return {
    ok: true,
    data: { name, email, message },
    honeypot: website.length > 0,
  };
}

export function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}
