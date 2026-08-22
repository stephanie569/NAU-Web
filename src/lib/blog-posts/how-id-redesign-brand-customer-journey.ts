import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "how-id-redesign-brand-customer-journey",
  title: "I'd redesign this brand's whole customer journey. Here's how.",
  excerpt:
    "Redesign journeys around belief stages, not more touchpoints. Bad vs good maps, and a fix you can run this week.",
  date: "June 26, 2026",
  category: "Go-to-Market",
  image: "/images/blog/blog-28-customer-journey.png",
  metaDescription:
    "How to redesign a brand customer journey around belief stages: awareness, understanding, trust, activation, expansion. Bad vs good maps and a practical fix sequence.",
  content: [
    {
      type: "p",
      text: "Most customer journey redesigns begin with a whiteboard the size of a small moon and end with fourteen new emails. The universe is already complicated. Your buyer does not need a fifteenth reminder that you exist. They need the next decision to feel obvious.",
    },
    {
      type: "p",
      text: "Journeys go wrong when teams inventory channels instead of belief. Lead score stages are not human questions. More touchpoints are not a strategy. They are often a calendar problem wearing a customer experience badge.",
    },
    {
      type: "h2",
      text: "Bad journey vs good journey",
    },
    {
      type: "table",
      headers: ["Stage", "Bad (channel clutter)", "Good (one belief job)"],
      rows: [
        [
          "Awareness",
          "Ads, posts, and SEO all saying different things",
          "One problem entry with a clear reason to care",
        ],
        [
          "Understanding",
          "Feature grid plus three competing offers",
          "One outcome story: what changes for them",
        ],
        [
          "Trust",
          "Proof buried in a carousel nobody reaches",
          "Proof next to the claim and the ask",
        ],
        [
          "Activation",
          "Onboarding that tours every feature",
          "First value in one session, then expand",
        ],
        [
          "Expansion",
          "Upsell spam before retention is real",
          "Earn the next step after value is felt",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad:** mapping the company’s CRM funnel (MQL to SQL) and calling it a customer journey. Buyers do not wake up hoping to become a marketing qualified lead. **Good:** five belief stages with one primary artifact each: why care, what changes, why trust, how to get value, why stay.",
    },
    {
      type: "p",
      text: "**Bad outdoor brand:** inspiration films that dump people on a generic shop with no path from “I care about the outdoors” to “this jacket solves my weather.” **Good pattern:** Patagonia-style clarity where meaning and path travel together. Belief without a path is inspiration. A path without belief is extraction.",
    },
    {
      type: "image",
      src: "/images/blog/blog-28-customer-journey.png",
      alt: "Customer journey belief stages diagram",
    },
    {
      type: "h2",
      text: "Redesign it in one week",
    },
    {
      type: "ol",
      items: [
        "List every live touchpoint in one place: ads, pages, emails, in-product prompts.",
        "Assign each to a belief stage. Anything that serves none gets cut or frozen.",
        "Pick one primary artifact per stage. Delete or demote the duplicates.",
        "Rewrite the handoff between stages so the next decision is named, not implied.",
        "Instrument one success signal per stage (arrival intent, time on outcome, proof engagement, first value, return).",
        "Ship the thinnest path that still advances belief. Add channels only after that path converts.",
      ],
    },
    {
      type: "p",
      text: "Pair this with [landing page review: helping vs hurting conversions](/essays/landing-page-review-helping-hurting-conversions) and the [Patagonia-style start memo](/essays/if-patagonia-hired-me-tomorrow-where-id-start). For interaction design roots, [Interaction Design Foundation](https://www.interaction-design.org/) keeps journeys tied to goals, not org charts.",
    },
    {
      type: "takeaway",
      text: "A journey is a sequence of decisions. Channels deliver them. If the decision is unclear, a new channel only scales the confusion.",
    },
    {
      type: "cta",
      lead: "nau studio redesigns customer journeys around belief stages so every touchpoint earns the next decision.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
