import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "best-products-solve-problem-before-sell-solution",
  title: "Sell the problem first. The solution can wait.",
  excerpt: "Features are answers. Problems are the reason anyone listens.",
  date: "September 1, 2026",
  category: "Research & Positioning",
  image: "/images/blog/blog-56-solve-problem.png",
  metaDescription:
    "The best products earn attention by naming the problem clearly before selling features. A product strategy guide to problem-first positioning, proof, and roadmaps.",
  content: [
    {
      type: "p",
      text: "Teams love leading with solutions. Features are concrete, screenshots are ready, and the roadmap looks busy. Buyers, inconveniently, are still stuck on whether you understand the problem. Leading with the answer before the question is how you get polite nods and empty pipelines.",
    },
    {
      type: "p",
      text: "The best products sell the problem first. Features are answers. Problems are the reason anyone listens. Name the stuck moment in customer language, prove you recognise it, then show the solution. Reverse that order and marketing becomes a translation job for a language nobody asked to learn.",
    },
    {
      type: "h2",
      text: "Solution-first vs problem-first",
    },
    {
      type: "table",
      headers: ["Moment", "Bad (solution first)", "Good (problem first)"],
      rows: [
        [
          "Headline",
          "Feature list as poetry",
          "The stuck moment in their words",
        ],
        [
          "Demo",
          "Tour every screen",
          "Start at the pain, then the fix",
        ],
        [
          "Roadmap",
          "Capabilities for the deck",
          "Jobs customers already hire you for",
        ],
        [
          "Proof",
          "“Powerful platform”",
          "Before/after of the specific problem",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad SaaS:** homepage opens on integrations and AI badges. **Good SaaS:** homepage opens on the weekly chaos you remove, then shows how. Slack’s early wedge was not “another chat app.” It was stopping decisions from dying in email.",
    },
    {
      type: "p",
      text: "**Bad outdoor / consumer:** fabric specs before the weather problem. **Good outdoor / consumer:** “stay comfortable when the weather flips,” then the fabric. Hospitality and travel win when they name anxiety (unknown city, bad timing) before amenity lists.",
    },
    {
      type: "image",
      src: "/images/blog/blog-56-solve-problem.png",
      alt: "Sell the problem first, then the solution",
    },
    {
      type: "h2",
      text: "How to lead with the problem",
    },
    {
      type: "ol",
      items: [
        "Interview five customers: what they tried before you, what they stopped after switching.",
        "Rewrite the homepage headline from their sentence, not your feature map.",
        "Reorder demos: pain moment, then product as the response.",
        "Cut features from the story that do not serve the named job.",
        "Add one before/after proof tied to that job.",
        "Freeze marketing claims that invent problems customers never mentioned.",
      ],
    },
    {
      type: "p",
      text: "Jobs-to-be-done framing is still useful via [Harvard Business Review](https://hbr.org/). For sharper problem discovery, [Y Combinator’s Library](https://www.ycombinator.com/library) rewards talking to users over polishing decks. Related: [how I decide whether a product is worth building](/essays/how-i-decide-whether-product-worth-building).",
    },
    {
      type: "callout",
      title: "Feature fog",
      text: "If prospects ask “so what do you do?” after a feature tour, you sold the solution before the problem. Start again from their stuck moment.",
    },
    {
      type: "takeaway",
      text: "Features are answers. Problems are why anyone listens. Sell the problem first.",
    },
    {
      type: "cta",
      lead: "Welcome to the journal. nau studio helps product brands position from the real job buyers hire you for, before the feature list.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
