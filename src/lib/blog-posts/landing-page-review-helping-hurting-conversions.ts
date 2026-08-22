import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "landing-page-review-helping-hurting-conversions",
  title: "Your landing page: what's helping vs quietly killing conversions",
  excerpt:
    "A balanced landing review: keep what builds belief, remove what kills conversion. Bad vs good patterns and a fix order.",
  date: "June 27, 2026",
  category: "Go-to-Market",
  image: "/images/blog/blog-27-landing-review.png",
  metaDescription:
    "Landing page review for startups: what helps conversions, what hurts them, bad vs good patterns, and a practical prioritised fix sequence.",
  content: [
    {
      type: "p",
      text: "Landing page reviews often go wrong in one of two ways. Teams either burn the page down because it is not “converting enough,” or they defend every section like a family heirloom. Both miss the point. Some parts are helping. Some are quietly taxing belief. Your job is to tell them apart before you redesign the solar system.",
    },
    {
      type: "p",
      text: "Conversion is not a vibe. It is a sequence of small decisions: understand, believe, act. Anything that helps those decisions stays. Anything that competes with them goes, even if it looks expensive.",
    },
    {
      type: "h2",
      text: "What helps vs what hurts",
    },
    {
      type: "table",
      headers: ["Element", "Hurting (bad)", "Helping (good)"],
      rows: [
        [
          "Headline",
          "Generic category poetry",
          "Audience + outcome in plain language",
        ],
        [
          "CTA",
          "Four equal buttons / “Learn more”",
          "One primary next step with clear cost",
        ],
        [
          "Proof",
          "Logos far below the fold",
          "Evidence beside the claim and ask",
        ],
        [
          "Sections",
          "Feature museum with no hierarchy",
          "Short path: problem, change, proof, act",
        ],
        [
          "Friction",
          "Forms that ask for a biography",
          "Minimum fields for the real next step",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad review habit:** rewrite everything because bounce rate is high. You may delete the only clear sentence on the page. **Good:** label each block Help or Hurt. Keep Help. Fix Hurt in priority order. Protect strengths while you remove tax.",
    },
    {
      type: "p",
      text: "**Bad outdoor PDP:** lifestyle gallery, vague materials claim, three CTAs, size guide buried. **Good:** weather job named first, proof of use, one buy path, sizing reachable before the ask. Same product. Different conversion physics.",
    },
    {
      type: "image",
      src: "/images/blog/blog-27-landing-review.png",
      alt: "Landing page helping versus hurting review",
    },
    {
      type: "h2",
      text: "Fix order for this week",
    },
    {
      type: "ol",
      items: [
        "Five-second test with five outsiders. Capture their one-sentence summary.",
        "Rewrite the headline and subhead from their words if summaries diverge.",
        "Collapse CTAs to one primary action. Demote or delete the rest.",
        "Move one proof point into the first viewport.",
        "Cut or merge sections that do not advance understand, believe, or act.",
        "Shorten the form or checkout step that sits immediately after the CTA.",
      ],
    },
    {
      type: "p",
      text: "Deeper context: [why beautiful websites do not always convert](/essays/why-beautiful-websites-dont-always-convert), [first 10 seconds](/essays/why-startup-websites-fail-first-10-seconds), and [three changes that can double conversion](/essays/website-audit-three-changes-double-conversion). For research on scanning and trust, see [Nielsen Norman Group](https://www.nngroup.com/) and [Baymard Institute](https://baymard.com/blog).",
    },
    {
      type: "takeaway",
      text: "Do not redesign the whole page. Separate what builds belief from what taxes it, then fix in order.",
    },
    {
      type: "cta",
      lead: "nau studio reviews landing pages for belief and friction, then ships the fixes that move conversion without burning what already works.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
