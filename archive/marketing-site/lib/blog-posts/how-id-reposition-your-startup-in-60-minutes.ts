import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "how-id-reposition-your-startup-in-60-minutes",
  title: "Give me 60 minutes. I'll reposition your product brand.",
  excerpt:
    "A 60-minute repositioning workout: audience, category, promise, proof. Bad vs good frames and the steps to ship a sharper story.",
  date: "July 23, 2026",
  category: "Research & Positioning",
  image: "/images/blog/blog-06-reposition.png",
  metaDescription:
    "A 60-minute repositioning method for product brands. Clarify audience, category and message before the next launch, with bad vs good frames and a practical sequence.",
  content: [
    {
      type: "p",
      text: "Sixty minutes will not invent a new company. It will, however, stop you from describing your product as if it were written by a committee that met once on a rainy Tuesday and never spoke again. The galaxy is large. Your homepage sentence does not need to be.",
    },
    {
      type: "p",
      text: "Repositioning fails when teams debate adjectives. Premium. Innovative. Seamless. Those words are how brands hide from choosing who they are for. Clarity is a constraint. Constraint is what makes a message stick.",
    },
    {
      type: "h2",
      text: "Bad position vs good position",
    },
    {
      type: "table",
      headers: ["Lens", "Bad (vague)", "Good (usable)"],
      rows: [
        [
          "Audience",
          "Everyone / teams / modern companies",
          "Named person + situation",
        ],
        [
          "Category",
          "Platform / solution / ecosystem",
          "The job you replace or the shelf you sit on",
        ],
        [
          "Promise",
          "Better, smarter, AI-powered",
          "One outcome they can repeat",
        ],
        [
          "Proof",
          "Adjective stack",
          "Result, constraint, or customer voice",
        ],
        [
          "Trade-off",
          "We do everything",
          "What you refuse so the promise stays true",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad:** “An AI-native operating system for modern outdoor workflows.” It sounds funded and means nothing. **Good:** “Field jackets that stay comfortable when the weather changes mid-hike.” Same ambition. One of them a stranger can say aloud.",
    },
    {
      type: "p",
      text: "**Bad travel brand:** “Curated experiences for conscious travellers.” **Good pattern:** name the anxiety you remove (booking an unknown city stay, packing for mixed climates) and the progress you sell. Positioning is progress language, not vibes with a logo.",
    },
    {
      type: "image",
      src: "/images/blog/blog-06-reposition.png",
      alt: "Repositioning workout diagram",
    },
    {
      type: "h2",
      text: "The 60-minute sequence",
    },
    {
      type: "ol",
      items: [
        "Write your current one-liner. Do not edit yet. Capture the fog.",
        "Name one primary customer and the situation they are in when they need you.",
        "Write the job in their words: what they are trying to get done.",
        "Draft a promise that names the outcome, not the feature list.",
        "Add one proof point that would survive a sceptical friend asking “says who?”",
        "State one trade-off. If you refuse nothing, you stand for nothing.",
      ],
    },
    {
      type: "p",
      text: "Then put the new line on the homepage hero and run a five-person comprehension test. Related: [the most expensive early-stage brand mistake](/essays/most-expensive-mistake-early-stage-founders) and [how I decide whether a product is worth building](/essays/how-i-decide-whether-product-worth-building). For jobs-to-be-done framing, [Harvard Business Review](https://hbr.org/) remains a useful starting point.",
    },
    {
      type: "takeaway",
      text: "Repositioning is choosing who you are for and what you refuse. Adjectives are optional. Clarity is not.",
    },
    {
      type: "cta",
      lead: "nau studio runs research and positioning so your next campaign starts from a sentence strangers can repeat.",
      button: "Visit nau studio",
      href: "/",
    },
  ],
};

export default post;
