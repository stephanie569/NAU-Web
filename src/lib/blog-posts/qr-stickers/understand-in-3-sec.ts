import type { BlogPost } from "@/lib/blog-types";
import { QR_STICKER_CATEGORY } from "@/lib/qr-stickers";

const post: BlogPost = {
  slug: "understand-in-3-sec",
  title: "Can people understand my product in 3 sec?",
  excerpt:
    "Three seconds is how long strangers give you before classifying you as irrelevant. Pass the test, or fix the sentence.",
  date: "August 22, 2026",
  category: QR_STICKER_CATEGORY,
  image: "/images/qr-stickers/understand-in-3-sec.jpg",
  metaDescription:
    "Can people understand your product in three seconds? Good vs bad homepage clarity, tests, and fixes.",
  content: [
    {
      type: "p",
      text: "You found this through a NAU sticker. If strangers cannot parse your offer in three seconds, they will not stay for the roadmap, the manifesto, or the carefully kerned feature grid. The universe is large. Their attention is not.",
    },
    {
      type: "p",
      text: "Three seconds is roughly one headline and a glance at the hero. [Nielsen Norman Group](https://www.nngroup.com/) has documented this triage behaviour for decades. It is not unfair. It is how busy humans avoid drowning.",
    },
    {
      type: "h2",
      text: "What passes vs what fails",
    },
    {
      type: "table",
      headers: ["Question", "Bad (fails in 3 sec)", "Good (passes)"],
      rows: [
        [
          "Who is it for?",
          "“Teams” / “everyone” / jargon",
          "Audience named in plain language",
        ],
        [
          "What changes?",
          "Feature soup",
          "A clear outcome",
        ],
        [
          "Why trust you?",
          "Proof buried below the fold",
          "Proof next to the claim",
        ],
        [
          "What next?",
          "Four equal buttons",
          "One primary action",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad homepage:** “AI-native operating system for modern workflows.” It sounds expensive and means nothing, which is an impressive combination. **Good pattern:** Stripe reading as payments infrastructure for builders, fast. Linear selling calm speed in issue tracking. Depth exists later. The first line earns the scroll.",
    },
    {
      type: "image",
      src: "/images/blog/blog-03-ten-seconds.png",
      alt: "Homepage hero clarity illustration",
    },
    {
      type: "h2",
      text: "Fix it in an afternoon",
    },
    {
      type: "ol",
      items: [
        "Run the five-second test with five people outside your company.",
        "Collect their one-sentence summaries. If they diverge, the page is unclear.",
        "Rewrite the headline using their words, not yours.",
        "Remove competing CTAs until one remains obvious.",
        "Move one proof point into the first viewport: result, customer, or constraint.",
      ],
    },
    {
      type: "callout",
      title: "Five-second test",
      text: "Show the homepage for five seconds. Hide it. Ask them to repeat what you sell. One clear sentence passes. Five different guesses fail, spectacularly and quietly.",
    },
    {
      type: "p",
      text: "Deep dive: [most product brand sites die in the first 10 seconds](/essays/why-startup-websites-fail-first-10-seconds).",
    },
    {
      type: "takeaway",
      text: "If comprehension needs a meeting, the site is not working.",
    },
    {
      type: "cta",
      lead: "You found this through a NAU sticker. nau studio fixes the sentence, the proof and the story before you spend on traffic.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
