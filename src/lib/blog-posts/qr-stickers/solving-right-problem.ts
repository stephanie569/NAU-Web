import type { BlogPost } from "@/lib/blog-types";
import { QR_STICKER_CATEGORY } from "@/lib/qr-stickers";

const post: BlogPost = {
  slug: "solving-right-problem",
  title: "Am I solving the right problem?",
  excerpt:
    "Features answer questions nobody asked when the real job stays unnamed. How to tell, and what to do next.",
  date: "August 22, 2026",
  category: QR_STICKER_CATEGORY,
  image: "/images/qr-stickers/solving-right-problem.jpg",
  metaDescription:
    "How to tell if you are solving the right problem, with good and bad frames and a practical jobs-to-be-done check.",
  content: [
    {
      type: "p",
      text: "You found this through a NAU sticker. The product works. The market yawns. This is often not a quality problem. It is a cosmic-scale mismatch between the problem you solved and the problem anyone was hiring you for.",
    },
    {
      type: "p",
      text: "Teams solve the problem they can build. Buyers hire solutions for the progress they are trying to make. When those diverge, marketing becomes translation for a language nobody speaks, which is exhausting for everyone involved and excellent for competitors.",
    },
    {
      type: "h2",
      text: "Wrong frame vs right frame",
    },
    {
      type: "table",
      headers: ["Category", "Bad problem frame", "Good problem frame"],
      rows: [
        [
          "Team chat",
          "Another messaging app",
          "Stop losing decisions inside email (Slack’s early wedge)",
        ],
        [
          "Connected fitness",
          "A nicer exercise bike",
          "Make home workouts stick when motivation fades",
        ],
        [
          "Outdoor gear",
          "Lighter fabric spec sheet",
          "Stay comfortable all day in changing weather",
        ],
        [
          "Hospitality",
          "More room photos",
          "Remove anxiety from booking an unknown city stay",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad:** shipping features because a competitor shipped them. This is how you end up with a Swiss Army knife that also makes toast and still fails at opening a bottle. **Good:** interviewing people about what they tried before you, what they stopped doing after switching, and what they would miss if you disappeared.",
    },
    {
      type: "p",
      text: "Clayton Christensen’s jobs-to-be-done thinking, still useful via [Harvard Business Review](https://hbr.org/), asks what progress the customer wants in a circumstance. Not which button they clicked while confused.",
    },
    {
      type: "image",
      src: "/images/blog/blog-04-framework.png",
      alt: "Product strategy framework diagram",
    },
    {
      type: "h2",
      text: "A fix you can run in one afternoon",
    },
    {
      type: "ol",
      items: [
        "Write your current problem statement in one sentence.",
        "Ask five customers (or lost prospects) to rewrite it in their words.",
        "If their sentences do not match yours, yours is wrong for growth.",
        "Rebuild the homepage headline from their sentence, not your roadmap.",
        "Cut or freeze any feature that does not serve that rewritten job for 30 days.",
      ],
    },
    {
      type: "callout",
      title: "Three questions that refuse nonsense",
      text: "What did they use before you? What did they stop doing when they switched? What would they miss if you vanished? Vague answers mean you are still solving the wrong problem.",
    },
    {
      type: "p",
      text: "More depth: [how I decide whether a product is worth building](/essays/how-i-decide-whether-product-worth-building).",
    },
    {
      type: "takeaway",
      text: "Right problems show up in customer language. Wrong problems show up in your deck.",
    },
    {
      type: "cta",
      lead: "You found this through a NAU sticker. nau studio starts with research and positioning so you solve the job buyers actually hire you for.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
