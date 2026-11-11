import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/**
 * Follow / notify is not enabled: this project has no user accounts or
 * subscription list service. Nodemailer exists only for the contact form.
 */
export async function POST() {
  return NextResponse.json(
    {
      ok: false,
      enabled: false,
      message:
        "Species/region follow notifications require account or email-subscription infrastructure that this project does not have yet. Add authenticated users (or a mailing-list provider), store follow preferences, send mail only after an editor approves an update, dedupe deliveries, and expose unsubscribe — then wire this endpoint.",
      required: [
        "User accounts or email capture + verified list",
        "Follow preferences store (speciesId / regionId)",
        "Notification sender (extend SMTP or a list provider)",
        "Send only on approved events/assessment changes",
        "Idempotent notification log + unsubscribe",
      ],
    },
    { status: 501 },
  );
}
