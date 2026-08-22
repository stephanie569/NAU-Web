import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "ai-should-handle-repetition-you-keep-judgement",
  title: "Let AI do the boring bits. You keep the taste.",
  excerpt:
    "Scale the busywork. Protect the decisions that define the work.",
  date: "August 13, 2026",
  category: "Go-to-Market",
  image: "/images/blog/blog-55-repetition-judgement.png",
  metaDescription:
    "A practical division of labour with AI: automate repetition and protect judgement, what to delegate to tools and what founders must still own.",
  content: [
    {
      type: "p",
      text: "The most expensive AI mistake is not skipping the tools. It is using them on the wrong layer of the work. Teams automate the decision and hand-craft the busywork, then wonder why everything is faster and somehow worse, like a kitchen that preps nothing and seasons everything by committee.",
    },
    {
      type: "p",
      text: "AI should handle repetition. You should keep judgement. Repetition is stable patterns with low cost of error. Judgement is identity-defining or expensive when wrong: positioning, pricing logic, what to promise, what to refuse. Reverse those and you get brittle brands with busy calendars.",
    },
    {
      type: "h2",
      text: "Repetition vs judgement",
    },
    {
      type: "table",
      headers: ["Layer", "Bad (wrong owner)", "Good (right owner)"],
      rows: [
        [
          "Positioning",
          "Model invents the category story",
          "Founder decides the wedge; model drafts variants",
        ],
        [
          "Copy",
          "Ship first AI draft live",
          "Human sets claims; AI expands formats",
        ],
        [
          "Research",
          "Summarise without source check",
          "AI clusters notes; human validates with customers",
        ],
        [
          "Ops",
          "Manual formatting of every asset",
          "AI reformats from a finished master brief",
        ],
        [
          "Taste",
          "“Make it sound premium” as the brief",
          "Human pass line before anything publishes",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad hospitality example:** auto-generated room descriptions that invent amenities and soft claims no one checked. Guests arrive, reality disagrees, trust evaporates. **Good hospitality example:** a human-written stay promise, with AI only helping cut variants for email, SMS, and listing length limits.",
    },
    {
      type: "p",
      text: "**Bad consumer brand:** AI choosing the campaign concept because the calendar is empty. **Good consumer brand:** humans lock the idea and the proof, AI produces channel cuts, alt captions, and size variants without inventing new promises.",
    },
    {
      type: "image",
      src: "/images/blog/blog-55-repetition-judgement.png",
      alt: "Divide AI work: automate repetition, protect judgement",
    },
    {
      type: "h2",
      text: "What to do this week",
    },
    {
      type: "ol",
      items: [
        "List last week’s AI uses. Mark each as repetition or judgement.",
        "Move any judgement task back to a named human owner.",
        "Write a one-page “pass line”: claims you will never let a model invent.",
        "Build one master brief and let AI only produce formats from it.",
        "Add a review step for anything public: positioning, pricing, product promises.",
        "Kill tools that speed up output while removing the pass line.",
      ],
    },
    {
      type: "p",
      text: "Related: [AI can write the post; it cannot be you](/essays/ai-can-write-content-cant-replace-perspective). For durable decision frameworks under uncertainty, [Y Combinator’s Library](https://www.ycombinator.com/library) and [Harvard Business Review](https://hbr.org/) are still better than another prompt pack.",
    },
    {
      type: "takeaway",
      text: "Automate patterns. Own consequences. Taste is a management decision, not a model setting.",
    },
    {
      type: "cta",
      lead: "Welcome to the journal. nau studio helps teams build go-to-market systems where tools scale craft without replacing judgement.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
