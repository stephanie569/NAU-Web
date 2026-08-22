import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "before-build-another-feature-ask-five-questions",
  title: "About to ship another feature? Ask these 5 first.",
  excerpt: "A checklist for stopping roadmap theatre before it ships.",
  date: "August 29, 2026",
  category: "Research & Positioning",
  image: "/images/blog/blog-59-five-questions-feature.png",
  metaDescription:
    "Five questions to ask before building another feature: pain evidence, who benefits, opportunity cost, first-win path, and kill criteria, to stop roadmap theatre.",
  content: [
    {
      type: "p",
      text: "Roadmaps fill themselves the way unused drawers fill themselves: quietly, with things that once seemed important. Another feature feels like progress. Often it is only motion with a ticket number.",
    },
    {
      type: "p",
      text: "Features answer questions. The expensive mistake is answering questions nobody asked while the real job stays unnamed. Before you build, five questions separate roadmap theatre from useful work.",
    },
    {
      type: "h2",
      text: "Build vs wait",
    },
    {
      type: "table",
      headers: ["Question", "Bad answer", "Good answer"],
      rows: [
        [
          "Whose pain?",
          "“Users will love it”",
          "Named segment + quote or behaviour",
        ],
        [
          "Evidence?",
          "Competitor shipped it",
          "Repeated request, churn reason, or failed workaround",
        ],
        [
          "First win?",
          "“It unlocks the platform”",
          "A moment a user can succeed in under a week",
        ],
        [
          "Opportunity cost?",
          "Ignored",
          "What you will not ship because of this",
        ],
        [
          "Kill criteria?",
          "None",
          "Metric and date to stop or rewrite",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad SaaS habit:** shipping parity features because a competitor demoed them, then wondering why activation stayed flat. **Good SaaS habit:** freezing the roadmap until five customers describe the same stuck moment in their own words.",
    },
    {
      type: "p",
      text: "**Bad consumer product:** adding app features to a hardware story that was never clear. **Good consumer product:** fixing the unboxing or first-use failure before adding a second screen of settings. Outdoor and travel brands make the same mistake when they expand SKUs instead of clarifying the job.",
    },
    {
      type: "image",
      src: "/images/blog/blog-59-five-questions-feature.png",
      alt: "Five questions to ask before building another feature",
    },
    {
      type: "h2",
      text: "What to do before the next ticket",
    },
    {
      type: "ol",
      items: [
        "Write the feature in one sentence as a customer outcome, not a UI description.",
        "Attach evidence: interview notes, support tickets, or usage drop-offs.",
        "Name who does not get this feature. Vague “everyone” usually means no one.",
        "Define the first-win path in under seven days of use.",
        "State what you will delay or cut to fund it.",
        "Set a kill or rewrite date with one metric. No metric, no ship.",
      ],
    },
    {
      type: "p",
      text: "Jobs-to-be-done thinking still helps; start at [Harvard Business Review](https://hbr.org/). For opportunity cost and focus, [Y Combinator’s Library](https://www.ycombinator.com/library) is blunt in a useful way. Also: [hidden cost of building features nobody asked for](/essays/hidden-cost-building-features-nobody-asked-for).",
    },
    {
      type: "takeaway",
      text: "If you cannot answer the five questions, you are not building a feature. You are staging roadmap theatre.",
    },
    {
      type: "cta",
      lead: "Welcome to the journal. nau studio helps product teams prioritise from research and positioning so roadmaps serve the job, not the calendar.",
      button: "Visit nau studio",
      href: "/",
    },
  ],
};

export default post;
