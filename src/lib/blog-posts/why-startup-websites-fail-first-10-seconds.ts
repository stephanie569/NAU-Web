import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "why-startup-websites-fail-first-10-seconds",
  title: "Most product brand sites die in the first 10 seconds",
  excerpt:
    "Why outdoor, travel and tech brand websites lose shoppers before the scroll, and how to fix it.",
  date: "July 26, 2026",
  category: "Go-to-Market",
  image: "/images/blog/blog-03-ten-seconds.png",
  metaDescription:
    "Why product brand websites lose visitors in the first 10 seconds, and how to fix hero clarity, proof and CTAs.",
  content: [
    {
      type: "p",
      text: "Ten seconds is a generous cosmic allotment. Most product brand sites spend it on atmosphere, category jargon, and four buttons of equal importance. Shoppers leave before the scroll, which is efficient for them and expensive for you.",
    },
    {
      type: "p",
      text: "Outdoor, travel, and tech brands often lose people for the same reasons: unclear who it is for, unclear what changes, proof buried, and no single next step. The rest of the site never gets a hearing.",
    },
    {
      type: "h2",
      text: "What dies in ten seconds vs what survives",
    },
    {
      type: "table",
      headers: ["Question", "Bad first screen", "Good first screen"],
      rows: [
        [
          "Who is it for?",
          "“Teams” / everyone / vibe",
          "Audience named in plain language",
        ],
        [
          "What changes?",
          "Feature soup or mood copy",
          "A clear outcome",
        ],
        [
          "Why trust you?",
          "Proof below the fold",
          "Proof next to the claim",
        ],
        [
          "What next?",
          "Four equal CTAs",
          "One primary action",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad:** “Reimagining the future of modern adventure.” It sounds expensive and means nothing. **Good:** a headline a tired shopper can finish, a proof point nearby, and one path to buy, book, or start.",
    },
    {
      type: "image",
      src: "/images/blog/blog-03-ten-seconds.png",
      alt: "Homepage clarity in the first ten seconds",
    },
    {
      type: "h2",
      text: "Fix the first ten seconds",
    },
    {
      type: "ol",
      items: [
        "Run a five-second test with five people outside your company.",
        "Rewrite the headline from their one-sentence summaries.",
        "Name the audience and the outcome above the fold.",
        "Move one proof point into the first viewport.",
        "Remove competing CTAs until one remains obvious.",
        "Retest until strangers converge on the same explanation.",
      ],
    },
    {
      type: "p",
      text: "[Nielsen Norman Group](https://www.nngroup.com/) has documented triage behaviour for decades. Practical follow-ups: [three changes that can lift conversion](/essays/website-audit-three-changes-double-conversion) and [pretty sites that still do not convert](/essays/why-beautiful-websites-dont-always-convert).",
    },
    {
      type: "takeaway",
      text: "If comprehension needs a meeting, the site is not working. Win the first ten seconds or lose the visit.",
    },
    {
      type: "cta",
      lead: "nau studio fixes the sentence, the proof and the story before you spend on traffic.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
