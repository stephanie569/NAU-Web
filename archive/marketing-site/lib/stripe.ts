import Stripe from "stripe";

let stripe: Stripe | null = null;

export function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("Missing STRIPE_SECRET_KEY");
  }
  if (!stripe) {
    stripe = new Stripe(key, {
      apiVersion: "2026-07-29.dahlia",
      typescript: true,
    });
  }
  return stripe;
}

export function parseGuidePriceToCents(price: string) {
  const match = price.replace(/,/g, "").match(/(\d+(?:\.\d+)?)/);
  if (!match) {
    throw new Error(`Invalid price: ${price}`);
  }
  return Math.round(Number(match[1]) * 100);
}
