import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "website-audit-three-changes-double-conversion",
  title: "3 website changes that could double your conversions",
  excerpt:
    "Most conversion lifts do not need a redesign. Sharper first-screen messaging, proof next to claims, and a shorter path to action unlock the next jump.",
  date: "July 3, 2026",
  category: "Go-to-Market",
  image: "/images/blog/blog-22-double-conversion.png",
  metaDescription:
    "A practical website audit: three high-leverage changes (message, proof, and path) that can lift conversion without a full redesign.",
  content: [
    {
      type: "p",
      text: "Most conversion problems are not aesthetic emergencies. They are comprehension emergencies wearing a brand kit. The universe does not owe you a redesign budget. It does owe strangers a sentence they can finish.",
    },
    {
      type: "p",
      text: "Three changes repeatedly unlock the next jump without touching the logo: a sharper first screen, proof next to the claim, and a shorter path to the primary action. Teams redesign when they should rewrite.",
    },
    {
      type: "h2",
      text: "Low-leverage polish vs high-leverage clarity",
    },
    {
      type: "table",
      headers: ["Area", "Bad change", "Good change"],
      rows: [
        [
          "First screen",
          "New gradients, same foggy headline",
          "Outcome in customer language",
        ],
        [
          "Proof",
          "Testimonials buried in a carousel",
          "One result or customer next to the claim",
        ],
        [
          "Path",
          "Four equal CTAs and a scavenger hunt",
          "One primary action above the fold",
        ],
        [
          "Scope",
          "Full redesign before a sentence test",
          "Message, proof, path first",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad:** spending months on a visual refresh while the hero still says “AI-native platform for modern teams.” **Good:** five outsiders summarise the page in one sentence, then you rewrite until those sentences converge.",
    },
    {
      type: "image",
      src: "/images/blog/blog-22-double-conversion.png",
      alt: "Three website changes that lift conversion without a redesign",
    },
    {
      type: "h2",
      text: "Audit and ship in one week",
    },
    {
      type: "ol",
      items: [
        "Run a five-second test with five people outside the company.",
        "Rewrite the headline and subhead from their words.",
        "Move one proof point into the first viewport.",
        "Remove competing CTAs until one primary action remains.",
        "Shorten the form or checkout path by one step if friction is obvious.",
        "Measure click-through to the primary action before you reopen Figma for a redesign.",
      ],
    },
    {
      type: "p",
      text: "Companion reads: [most product brand sites die in the first 10 seconds](/essays/why-startup-websites-fail-first-10-seconds) and [pretty website, dead conversions](/essays/why-beautiful-websites-dont-always-convert). [Nielsen Norman Group](https://www.nngroup.com/) documents the triage behaviour you are designing against.",
    },
    {
      type: "takeaway",
      text: "Conversion often needs a clearer sentence, closer proof, and a shorter path, not a new colour system.",
    },
    {
      type: "cta",
      lead: "nau studio audits message, proof and path before recommending a redesign.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
