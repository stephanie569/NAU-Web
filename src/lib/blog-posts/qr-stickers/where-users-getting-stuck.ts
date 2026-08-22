import type { BlogPost } from "@/lib/blog-types";
import { QR_STICKER_CATEGORY } from "@/lib/qr-stickers";

const post: BlogPost = {
  slug: "where-users-getting-stuck",
  title: "Where are users getting stuck?",
  excerpt:
    "Most drop-off is not a bug. It is a story that stopped making sense. How to find the stuck step and fix it.",
  date: "August 22, 2026",
  category: QR_STICKER_CATEGORY,
  image: "/images/qr-stickers/where-users-getting-stuck.jpg",
  metaDescription:
    "Where users get stuck in product journeys: good vs bad diagnosis, funnel examples, and practical fixes.",
  content: [
    {
      type: "p",
      text: "You found this through a NAU sticker. Something in your product works, or you would not be asking where it breaks. Users, for their part, rarely send a polite postcard. They pause, tab away, or vanish with the quiet efficiency of people who have somewhere better to be.",
    },
    {
      type: "p",
      text: "Getting stuck is usually not a mystery of fate. It is the step where what you promised and what they experienced stopped being the same story.",
    },
    {
      type: "h2",
      text: "Bad diagnosis vs good diagnosis",
    },
    {
      type: "table",
      headers: ["Approach", "Bad", "Good"],
      rows: [
        [
          "Reading data",
          "“Conversion is low” (everywhere)",
          "“Largest drop is product → cart”",
        ],
        [
          "Blame",
          "“People don’t get it”",
          "“This screen contradicts the ad promise”",
        ],
        [
          "Evidence",
          "Opinions in Slack",
          "Five sessions watched at the cliff",
        ],
        [
          "Fix",
          "Add another CTA",
          "Rewrite the stuck step’s sentence and proof",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad travel checkout:** fees appear after the guest has emotionally booked the trip. Surprise is not a pricing strategy. It is a trust tax. **Good pattern:** Airbnb’s early obsession with clear photos, reviews, and transparent fees. Trust design as product, not as apology email.",
    },
    {
      type: "p",
      text: "**Bad SaaS onboarding:** homepage promised “set up in minutes,” then delivered a configuration labyrinth. **Good pattern:** get one outcome working in the first session, then invite depth. Speed was the promise. Keep it.",
    },
    {
      type: "table",
      headers: ["Stage", "Typical drop (B2C)", "Often means"],
      rows: [
        ["Land on site", "40-60% leave fast", "Unclear who it is for"],
        ["View product", "50-70% of remainers", "Price or proof gap"],
        ["Add to cart", "60-80% abandon", "Surprise cost or weak trust"],
        ["First use", "30-50% never return", "Onboarding broke the promise"],
      ],
    },
    {
      type: "image",
      src: "/images/blog/blog-28-customer-journey.png",
      alt: "Customer journey stages where users drop off",
    },
    {
      type: "h2",
      text: "How to unstick people",
    },
    {
      type: "ol",
      items: [
        "Open analytics. Pick one goal: purchase, booking, or activation.",
        "Find the single largest step drop. That is your cliff.",
        "Watch three session recordings or run five tests on exactly that screen.",
        "Rewrite the promise, proof, or next action on that step only. Do not redesign the whole product yet.",
        "Measure that step for two weeks before declaring victory or opening a new feature debate.",
      ],
    },
    {
      type: "p",
      text: "[Baymard Institute](https://baymard.com/) keeps showing cart abandonment above 70% across e-commerce. The number is less important than locating your cliff. More on first-screen clarity: [most product brand sites die in the first 10 seconds](/essays/why-startup-websites-fail-first-10-seconds).",
    },
    {
      type: "takeaway",
      text: "Users get stuck where promise and experience diverge. Fix the sentence at that step before you add features.",
    },
    {
      type: "cta",
      lead: "You found this through a NAU sticker. nau studio helps product brands map where buyers stall, then align story, site and content to move them through.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
