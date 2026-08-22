import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "hidden-cost-building-features-nobody-asked-for",
  title: "That feature nobody asked for? It's quietly costing you.",
  excerpt:
    "Unused features waste more than sprint time. They slow onboarding, confuse positioning, and make every future decision more expensive.",
  date: "July 20, 2026",
  category: "Research & Positioning",
  image: "/images/blog/blog-08-features.png",
  metaDescription:
    "The hidden costs of unused features: complexity, slower onboarding, weaker positioning, with a bad vs good build filter and action steps.",
  content: [
    {
      type: "p",
      text: "Unused features do not sit politely in the backlog like spare socks. They live in the product, the docs, the pricing page, and the onboarding tour that now takes seventeen minutes. Shipping something nobody asked for feels like progress. It is often a tax you will keep paying with interest, which is a very modern kind of generosity toward your future self.",
    },
    {
      type: "p",
      text: "The cost is not only engineering hours. Complexity slows decisions, dilutes the story, and trains customers to expect a Swiss Army knife that still cannot open the bottle they hired you for. Build less, learn more, and protect the wedge.",
    },
    {
      type: "h2",
      text: "Feature appetite vs feature discipline",
    },
    {
      type: "table",
      headers: ["Pressure", "Bad response", "Good response"],
      rows: [
        [
          "Competitor ships X",
          "Ship X this sprint",
          "Ask if X serves your job-to-be-done",
        ],
        [
          "One loud customer",
          "Custom feature as roadmap",
          "Check for a second and third independent ask",
        ],
        [
          "Roadmap filling",
          "Add to look productive",
          "Require evidence of urgency and use",
        ],
        [
          "Onboarding length",
          "Add another tip screen",
          "Cut paths that do not lead to first value",
        ],
        [
          "Positioning",
          "“We also do…” lists",
          "One wedge, explicit non-goals",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad SaaS:** a settings panel that looks like an aircraft cockpit because every stakeholder got a toggle. New users bounce before first value. **Good SaaS:** Basecamp-style restraint (or any team that ships opinionated defaults) where the product refuses to be everything and therefore becomes something.",
    },
    {
      type: "p",
      text: "**Bad consumer app:** feature announcements that outpace usage. **Good consumer product:** remove or hide what does not serve the core job, then market the clarity.",
    },
    {
      type: "image",
      src: "/images/blog/blog-08-features.png",
      alt: "Illustration of the hidden cost of unused features",
    },
    {
      type: "h2",
      text: "Stop paying the unused-feature tax",
    },
    {
      type: "ol",
      items: [
        "List features with usage under a clear threshold. Mark candidates to hide, cut, or freeze.",
        "For each new request, require the job, who asked, and what they do today without it.",
        "Add a non-goals list to the roadmap and read it in planning.",
        "Measure time-to-first-value before and after any feature that touches onboarding.",
        "Rewrite the homepage without orphan features. If you cannot mention them cleanly, they are diluting you.",
        "Run a thirty-day build freeze on anything not tied to the wedge after a bloat quarter.",
      ],
    },
    {
      type: "p",
      text: "[Harvard Business Review](https://hbr.org/) still covers jobs-to-be-done as a better filter than competitor bingo. Related: [before you build another feature, ask five questions](/essays/before-build-another-feature-ask-five-questions).",
    },
    {
      type: "callout",
      title: "Shipping is not the same as helping",
      text: "If a feature does not change a customer job or your wedge, it is inventory. Inventory has carrying costs.",
    },
    {
      type: "takeaway",
      text: "Features nobody asked for quietly tax onboarding, positioning, and every future decision. Protect the wedge.",
    },
    {
      type: "cta",
      lead: "nau studio helps product brands clarify the job and cut the roadmap tax that marketing cannot fix.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
