import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "three-product-decisions-cost-companies-millions",
  title: "3 quiet product decisions that burn millions",
  excerpt:
    "Broad ICPs, feature theatre, and scaling before activation rarely look dramatic. Over years they destroy conversion, retention, and clarity.",
  date: "June 25, 2026",
  category: "Research & Positioning",
  image: "/images/blog/blog-29-cost-millions.png",
  metaDescription:
    "Three product decisions that quietly cost companies millions: serving everyone, shipping features instead of strategy, and scaling before activation.",
  content: [
    {
      type: "p",
      text: "The most expensive product decisions rarely arrive with alarms. They arrive as reasonable slides. Serve a wider market. Ship one more feature. Scale acquisition now. The universe politely applauds, then invoices you for years.",
    },
    {
      type: "p",
      text: "Three choices quietly burn millions: an ICP so broad that messaging cannot land, feature theatre that looks like progress while time-to-value collapses, and paid growth before activation is solved. None feel dramatic in the meeting. All compound.",
    },
    {
      type: "h2",
      text: "Quiet waste vs disciplined focus",
    },
    {
      type: "table",
      headers: ["Decision", "Bad version", "Good version"],
      rows: [
        [
          "ICP",
          "“Everyone who might need this”",
          "One sharp segment you can win this quarter",
        ],
        [
          "Roadmap",
          "Features to match competitors",
          "Features that shorten time-to-value",
        ],
        [
          "Growth",
          "Scale traffic into a confusing funnel",
          "Prove activation, then scale the message that works",
        ],
        [
          "Success",
          "Ship volume and vanity metrics",
          "Retention, comprehension, and willingness to pay",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad:** expanding the ICP because the first segment “isn’t enough,” without winning the first. **Good:** narrowing until strangers can explain the offer, then growing from a segment that already activates and stays.",
    },
    {
      type: "image",
      src: "/images/blog/blog-29-cost-millions.png",
      alt: "Three product decisions that quietly cost companies millions",
    },
    {
      type: "h2",
      text: "Reverse the three decisions",
    },
    {
      type: "ol",
      items: [
        "Rewrite your ICP as one job, one circumstance, one buyer type.",
        "Cut or freeze any feature that does not serve that job for 30 days.",
        "Measure activation before you increase acquisition spend.",
        "Put proof next to the claim on the homepage and in the product.",
        "Run five customer interviews focused on what they used before you and what they would miss.",
        "Only then open the next channel or segment.",
      ],
    },
    {
      type: "p",
      text: "Related: [the hidden cost of features nobody asked for](/essays/hidden-cost-building-features-nobody-asked-for) and [the most expensive early-stage mistake](/essays/most-expensive-mistake-early-stage-founders).",
    },
    {
      type: "takeaway",
      text: "Quiet decisions scale too. Narrow the job, protect time-to-value, and activate before you amplify.",
    },
    {
      type: "cta",
      lead: "nau studio helps teams reverse the expensive defaults: focus, proof, and sequencing before spend.",
      button: "Visit nau studio",
      href: "/",
    },
  ],
};

export default post;
