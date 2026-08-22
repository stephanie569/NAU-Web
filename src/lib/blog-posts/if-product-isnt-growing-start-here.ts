import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "if-product-isnt-growing-start-here",
  title: "Product stuck? Don't touch ads yet. Start here.",
  excerpt:
    "When growth stalls, diagnose clarity, activation, proof and retention before you buy more distribution.",
  date: "June 24, 2026",
  category: "Research & Positioning",
  image: "/images/blog/blog-30-start-here.png",
  metaDescription:
    "If your product is not growing, start with clarity, activation, proof and retention, not more channels. A practical diagnostic with bad vs good responses.",
  content: [
    {
      type: "p",
      text: "When a product stalls, founders reach for channels the way people reach for the thermostat in a house with a broken window. More ads. New platform. Fresh creative. The room is still cold. The universe does not owe you growth because your calendar is full.",
    },
    {
      type: "p",
      text: "Stuck growth is usually a sequence problem. Distribution amplifies whatever is already true. If the offer is unclear, activation is weak, or proof is missing, paid attention becomes an expensive way to confirm the diagnosis.",
    },
    {
      type: "h2",
      text: "Bad response vs good response",
    },
    {
      type: "table",
      headers: ["Signal", "Bad (channel first)", "Good (diagnose first)"],
      rows: [
        [
          "Unclear homepage",
          "Buy traffic to “test creative”",
          "Fix the one-sentence offer",
        ],
        [
          "High signups, low activation",
          "More top-of-funnel spend",
          "Repair first-value path",
        ],
        [
          "Weak trust",
          "Louder claims",
          "Put proof beside the ask",
        ],
        [
          "Churn after week one",
          "Referral programme",
          "Fix the retained value job",
        ],
        [
          "No word of mouth",
          "Ask people to share",
          "Make the product worth mentioning",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad:** “Growth is down, so we need a TikTok strategy.” Maybe. Or maybe strangers still cannot explain what you sell after three seconds on the site. **Good:** run the diagnostic in order: clarity, activation, proof, retention, then distribution. Skip a step and you fund the leak.",
    },
    {
      type: "p",
      text: "**Bad consumer brand:** launch a second product line because the first is “not growing.” **Good:** interview ten recent buyers and ten silent churners. Growth often returns when the first product finally tells a true story.",
    },
    {
      type: "image",
      src: "/images/blog/blog-30-start-here.png",
      alt: "Growth diagnostic sequence diagram",
    },
    {
      type: "h2",
      text: "The start-here sequence",
    },
    {
      type: "ol",
      items: [
        "Clarity: can five outsiders summarise the offer in one sentence after five seconds?",
        "Activation: does a new user reach a meaningful outcome in one session?",
        "Proof: is evidence next to claims and CTAs, not buried?",
        "Retention: why would someone come back without a discount?",
        "Only then: choose one distribution channel that matches who already gets value.",
        "Re-check weekly. Do not scale spend until the first four hold under light traffic.",
      ],
    },
    {
      type: "p",
      text: "Continue with [most marketing problems are product problems](/essays/most-marketing-problems-are-product-problems), [websites that fail in the first 10 seconds](/essays/why-startup-websites-fail-first-10-seconds), and [before you spend £10,000 on marketing](/essays/before-spend-10000-marketing-five-questions).",
    },
    {
      type: "takeaway",
      text: "Channels amplify the truth. Fix the truth before you buy a louder megaphone.",
    },
    {
      type: "cta",
      lead: "nau studio diagnoses stuck growth at the offer and experience layer before you spend on more traffic.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
