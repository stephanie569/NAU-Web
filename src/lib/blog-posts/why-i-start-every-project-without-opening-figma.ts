import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "why-i-start-every-project-without-opening-figma",
  title: "I don't open Figma first. Here's why.",
  excerpt:
    "I delay design tools on purpose. Strategy, customer language, and decision mapping come first so pixels serve a real argument.",
  date: "July 14, 2026",
  category: "Research & Positioning",
  image: "/images/blog/blog-13-no-figma.png",
  metaDescription:
    "Why starting product and website projects without Figma leads to clearer strategy, better messaging, stronger conversion design, and fewer pretty wrong answers.",
  content: [
    {
      type: "p",
      text: "Opening Figma first is a pleasant way to invent answers under deadline pressure. The frames look decisive. The argument is still missing. The universe does not grade typography. It grades whether a stranger understands the offer.",
    },
    {
      type: "p",
      text: "I delay design tools until strategy, customer language, and the decision path are written. Pixels then serve an argument instead of improvising one. Pretty wrong answers are still wrong, just harder to kill.",
    },
    {
      type: "h2",
      text: "Pixels-first vs argument-first",
    },
    {
      type: "table",
      headers: ["Step", "Bad start", "Good start"],
      rows: [
        [
          "Day one",
          "Moodboard and component library",
          "Job statement and customer quotes",
        ],
        [
          "Messaging",
          "Copied into layouts later",
          "Locked before layout",
        ],
        [
          "Structure",
          "Sections that look full",
          "Decision map: claim, proof, action",
        ],
        [
          "Design",
          "Invents the story under pressure",
          "Expresses a story already true",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad:** a beautiful homepage that still fails the five-second test because Figma was used to hide uncertainty. **Good:** a plain document with the sentence, proof, and CTA, then design that makes that document undeniable.",
    },
    {
      type: "image",
      src: "/images/blog/blog-13-no-figma.png",
      alt: "Starting projects with strategy before opening Figma",
    },
    {
      type: "h2",
      text: "The no-Figma first week",
    },
    {
      type: "ol",
      items: [
        "Write the customer job and the belief gap in plain language.",
        "Collect five quotes that sound like buyers, not like your deck.",
        "Draft hero, proof, and primary CTA as text only.",
        "Map the decision path from stranger to first valuable action.",
        "Cut any section that does not serve that path.",
        "Open Figma only when the argument survives a read-aloud with outsiders.",
      ],
    },
    {
      type: "p",
      text: "See also: [product strategy framework before designing a screen](/essays/product-strategy-framework-before-designing-screen) and [every product deserves a story before a logo](/essays/every-product-deserves-story-before-logo).",
    },
    {
      type: "takeaway",
      text: "Design tools amplify whatever you bring. Bring an argument first, or you will design the fog beautifully.",
    },
    {
      type: "cta",
      lead: "nau studio starts with research and positioning so Figma serves the story instead of inventing it.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
