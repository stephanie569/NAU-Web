import { NextResponse } from "next/server";
import { storeSectionCopy } from "@/lib/sections";
import { getStripe, parseGuidePriceToCents } from "@/lib/stripe";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { guideId?: string };
    const guideId = body.guideId?.trim();

    if (!guideId) {
      return NextResponse.json({ error: "Missing guideId" }, { status: 400 });
    }

    const guide = storeSectionCopy.items.find((item) => item.id === guideId);
    if (!guide) {
      return NextResponse.json({ error: "Guide not found" }, { status: 404 });
    }

    const origin = new URL(request.url).origin;
    const unitAmount = parseGuidePriceToCents(guide.price);
    const stripe = getStripe();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: unitAmount,
            product_data: {
              name: guide.title,
              description: guide.blurb,
            },
          },
        },
      ],
      success_url: `${origin}/packages?checkout=success&guide=${encodeURIComponent(guide.id)}`,
      cancel_url: `${origin}/packages?checkout=cancel&guide=${encodeURIComponent(guide.id)}`,
      metadata: {
        guideId: guide.id,
        guideTitle: guide.title,
      },
      integration_identifier: `nau-store-${Math.random().toString(36).slice(2, 10)}`,
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Checkout session missing URL" },
        { status: 500 },
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Unable to start checkout" },
      { status: 500 },
    );
  }
}
