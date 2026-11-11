import { NextResponse } from "next/server";
import { clientIp, isRateLimited, parseContactBody } from "@/lib/contact";
import { getMailConfig, sendContactEmail } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const ip = clientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many messages. Try again in a few minutes." },
        { status: 429 },
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
    const parsed = parseContactBody(body);
    if (!parsed.ok) {
      return NextResponse.json({ error: parsed.error }, { status: 400 });
    }

    if (parsed.honeypot) {
      return NextResponse.json({ ok: true });
    }

    if (!getMailConfig()) {
      return NextResponse.json(
        { error: "Messaging is not available yet." },
        { status: 503 },
      );
    }

    await sendContactEmail(parsed.data);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(
      "Contact mail error:",
      error instanceof Error ? error.message : "unknown",
    );
    return NextResponse.json(
      { error: "Unable to send message." },
      { status: 500 },
    );
  }
}
