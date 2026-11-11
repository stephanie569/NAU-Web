import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "from-strategy-to-launch-how-i-approach-new-product",
  title: "My playbook from blank page to launch (no fluff)",
  excerpt:
    "A practical method from strategy to launch: clarify the offer, design the decision path, ship focused first value, then learn with discipline.",
  date: "July 11, 2026",
  category: "Go-to-Market",
  image: "/images/blog/blog-15-strategy-launch.png",
  metaDescription:
    "How to take a product from strategy to launch: ICP, narrative, experience, proof, and learning loops, with bad vs good launch habits.",
  content: [
    {
      type: "p",
      text: "Blank page to launch is where teams collect rituals the way travellers collect luggage tags. Mood boards, Gantt charts, a Slack channel named launch-vibes. Useful artefacts sometimes. Rarely a substitute for a clear offer, a decision path, and a first value people can feel before the confetti emoji arrives.",
    },
    {
      type: "p",
      text: "My approach is deliberately boring: decide who it is for, what job it finishes, how someone chooses you, what proof earns trust, and what you will measure in the first two weeks. Strategy is not a slide. Launch is not a date. Both are sequences of decisions that refuse to hide behind aesthetics.",
    },
    {
      type: "h2",
      text: "Fluffy launch vs disciplined launch",
    },
    {
      type: "table",
      headers: ["Stage", "Bad", "Good"],
      rows: [
        [
          "Strategy",
          "Feature roadmap as vision",
          "ICP, job, wedge, and non-goals",
        ],
        [
          "Narrative",
          "Adjective soup on the homepage",
          "Customer language and one promise",
        ],
        [
          "Experience",
          "Ship everything by day one",
          "Shortest path to first valuable outcome",
        ],
        [
          "Proof",
          "Announce and hope",
          "Demo, waitlist signal, or early case",
        ],
        [
          "Learning",
          "Vanity launch metrics",
          "Activation, retention, and qualitative why",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad SaaS launch:** Product Hunt day, twenty features, a pricing page that hedges, and no owner for week-two activation. Noise without a curriculum. **Good SaaS launch:** one job, one path to value, clear CTA, and a learning loop scheduled before the announcement.",
    },
    {
      type: "p",
      text: "**Bad consumer launch:** brand film before anyone validated the problem. **Good consumer launch:** small proof in the wild, then a story people can retell.",
    },
    {
      type: "image",
      src: "/images/blog/blog-15-strategy-launch.png",
      alt: "Illustration of a strategy-to-launch playbook",
    },
    {
      type: "h2",
      text: "The sequence I reuse",
    },
    {
      type: "ol",
      items: [
        "Write ICP, job-to-be-done, wedge, and three non-goals on one page.",
        "Draft the homepage and first-run flow from that page before expanding scope.",
        "Define first value in user terms and time-box the path to reach it.",
        "Collect one form of proof before broad announcement (demo, pilots, waitlist quality).",
        "Launch with a measurement plan: activation, retention proxy, and five interviews.",
        "Kill or freeze anything that does not serve the wedge for thirty days post-launch.",
      ],
    },
    {
      type: "p",
      text: "[First Round Review](https://review.firstround.com/) is still a strong library for operator sequencing. Related: [how I decide whether a product is worth building](/essays/how-i-decide-whether-product-worth-building).",
    },
    {
      type: "callout",
      title: "Launch is a learning system",
      text: "If you cannot name what you will learn in week two, you are hosting a party, not running a launch.",
    },
    {
      type: "takeaway",
      text: "From blank page to launch: clarity, decision path, first value, proof, then learning. Everything else is luggage.",
    },
    {
      type: "cta",
      lead: "nau studio takes products from positioning through launch systems that teach you something after the announcement.",
      button: "Visit nau studio",
      href: "/",
    },
  ],
};

export default post;
