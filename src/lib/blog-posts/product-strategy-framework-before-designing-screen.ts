import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "product-strategy-framework-before-designing-screen",
  title:
    "My pre, Figma checklist before I design a single screen",
  excerpt:
    "Before Figma, before pixels: a short strategy framework that keeps design attached to real customer decisions.",
  date: "July 25, 2026",
  category: "Research & Positioning",
  image: "/images/blog/blog-04-framework.png",
  metaDescription:
    "A practical product strategy framework before UI design: ICP, jobs-to-be-done, alternatives, outcomes, belief gaps, and conversion paths.",
  content: [
    {
      type: "p",
      text: "Designing screens too early feels productive. It is also how teams ship beautiful interfaces for the wrong problem, which is a bit like furnishing a house before confirming the planet it sits on. The frames can wait. The thinking cannot.",
    },
    {
      type: "p",
      text: "Before I open a design tool, I run a short strategy framework that forces clarity: who, job, alternatives, outcome, belief gaps, and the path to a first win. Without those boxes filled, every pixel is a guess wearing typography.",
    },
    {
      type: "h2",
      text: "Design-first vs strategy-first",
    },
    {
      type: "table",
      headers: ["Box", "Bad (skip it)", "Good (fill it first)"],
      rows: [
        [
          "ICP",
          "“Teams / anyone / users”",
          "Named person + situation",
        ],
        [
          "Job",
          "Feature request pile",
          "Progress they hire you for",
        ],
        [
          "Alternatives",
          "Ignore “do nothing”",
          "Name what they use today, including inertia",
        ],
        [
          "Outcome",
          "Adjective goals",
          "Observable change after first win",
        ],
        [
          "Belief gap",
          "Assume trust",
          "List doubts and where proof must sit",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad outdoor product redesign:** jump into moodboards for a PDP before naming the trip or weather job. **Good pattern:** decide the job (all-day comfort when weather changes), the alternative (overpacked layers), and the proof, then design the page around that decision.",
    },
    {
      type: "p",
      text: "**Bad SaaS:** wireframes for every stakeholder request. **Good SaaS:** map the belief gap that blocks signup (risk, time-to-value, switching cost), then design the smallest path that answers it. Related: [why I start every project without opening Figma](/essays/why-i-start-every-project-without-opening-figma).",
    },
    {
      type: "image",
      src: "/images/blog/blog-04-framework.png",
      alt: "Product strategy framework before designing screens",
    },
    {
      type: "h2",
      text: "The pre-Figma checklist",
    },
    {
      type: "ol",
      items: [
        "Write ICP in one line: person + situation, not persona poetry.",
        "Write the job in their words. Confirm with two interviews if you can.",
        "List real alternatives, including do nothing and spreadsheet glue.",
        "Define the first-win outcome and the time budget to get there.",
        "List belief gaps and the proof or UX that closes each one.",
        "Only then open Figma: design the conversion path for that job, nothing else this sprint.",
      ],
    },
    {
      type: "p",
      text: "Jobs-to-be-done framing via [Harvard Business Review](https://hbr.org/) pairs well with this. Related: [before you build another feature, ask five questions](/essays/before-build-another-feature-ask-five-questions) and [how I decide whether a product is worth building](/essays/how-i-decide-whether-product-worth-building).",
    },
    {
      type: "takeaway",
      text: "Screens without strategy are decoration for the wrong problem. Fill the boxes, then draw the boxes.",
    },
    {
      type: "cta",
      lead: "nau studio runs product strategy and positioning before UI, so design serves a real customer decision.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
