import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "how-i-decide-whether-product-worth-building",
  title: "How I decide if a product is even worth building",
  excerpt:
    "A practical build filter: urgency, willingness to pay, differentiation, time to first outcome, and kill criteria so curiosity does not become a roadmap.",
  date: "July 13, 2026",
  category: "Research & Positioning",
  image: "/images/blog/blog-14-worth-building.png",
  metaDescription:
    "How to decide if a product is worth building using urgency, willingness to pay, differentiation, time to value, and early kill criteria.",
  content: [
    {
      type: "p",
      text: "Curiosity is a wonderful research assistant and a terrible CEO. Left unsupervised, it turns every interesting problem into a roadmap item, then a prototype, then a quiet product that never quite finds a market. Deciding what is worth building is less about inspiration and more about refusing to fund hobbies that have learned to wear a pitch deck.",
    },
    {
      type: "p",
      text: "My filter is simple on purpose: is the pain urgent, will someone pay, are we differentiated, how fast is first value, and what evidence would kill the idea early? If those answers are soft, the build should stay small or stop. Soft answers are not encouragement. They are fog.",
    },
    {
      type: "h2",
      text: "Curiosity builds vs evidence builds",
    },
    {
      type: "table",
      headers: ["Filter", "Bad green light", "Good green light"],
      rows: [
        [
          "Urgency",
          "“People might like this”",
          "They already hack a painful workaround",
        ],
        [
          "Willingness to pay",
          "Compliments and waitlist vanity",
          "Money, LOIs, or clear budget behaviour",
        ],
        [
          "Differentiation",
          "Slightly nicer version of incumbents",
          "A wedge incumbents will not copy soon",
        ],
        [
          "Time to value",
          "Value after weeks of setup",
          "Outcome in the first session or day",
        ],
        [
          "Kill criteria",
          "None; hope indefinitely",
          "Pre-agreed signals that stop the build",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad founder pattern:** build for months because friends said “cool,” then discover the problem was mild and the alternatives were free. **Good founder pattern:** interview for urgency, test a thin offer, and kill politely when the market shrugs. YC-style user obsession is not a vibe. It is a filter.",
    },
    {
      type: "p",
      text: "**Bad consumer idea:** lifestyle brand first, job second. **Good consumer idea:** a sharp job people already fail at weekly, then brand as expression of that job.",
    },
    {
      type: "image",
      src: "/images/blog/blog-14-worth-building.png",
      alt: "Illustration of deciding whether a product is worth building",
    },
    {
      type: "h2",
      text: "Run the filter before the sprint",
    },
    {
      type: "ol",
      items: [
        "Write the job in one sentence and the workaround people use today.",
        "Talk to ten people with that job. Score urgency and frequency honestly.",
        "Test willingness to pay with a real ask: deposit, preorder, or paid pilot.",
        "Name your wedge and why a bigger player will ignore it for a while.",
        "Prototype only the path to first valuable outcome. Time it.",
        "Write kill criteria before you fall in love. Review them on a calendar, not vibes.",
      ],
    },
    {
      type: "p",
      text: "[Y Combinator’s Library](https://www.ycombinator.com/library) remains useful on talking to users before scale. Related: [why great products fail before product-market fit](/essays/why-great-products-fail-before-product-market-fit).",
    },
    {
      type: "callout",
      title: "Kill criteria are kindness",
      text: "Agreeing in advance what would stop the build saves months of sunk-cost theatre. Fog is not a strategy.",
    },
    {
      type: "takeaway",
      text: "Worth building means urgent pain, real pay, a wedge, fast first value, and kill criteria. Curiosity alone is not enough.",
    },
    {
      type: "cta",
      lead: "nau studio helps founders pressure-test ideas with research and positioning before the roadmap gets expensive.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
