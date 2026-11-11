import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "every-startup-looks-like-marketing-problem-until-deeper",
  title: "It looks like a marketing problem. Dig once.",
  excerpt:
    "Surface symptoms point to marketing. Digging usually reveals positioning gaps, weak activation, or a product story that never landed.",
  date: "July 15, 2026",
  category: "Research & Positioning",
  image: "/images/blog/blog-12-dig-deeper.png",
  metaDescription:
    "Why growth issues look like marketing problems, with a bad vs good diagnostic and practical steps before you spend more on channels.",
  content: [
    {
      type: "p",
      text: "From the outside, every stalled startup looks like it needs marketing. Dig one layer deeper and you often find something else: an ICP that is too broad, an activation flow that never delivers value, or a homepage that cannot finish a sentence. Marketing is the costume. Clarity is usually the patient, which is inconvenient for anyone hoping the costume alone would do the walking.",
    },
    {
      type: "p",
      text: "Amplifying a fuzzy offer makes the confusion louder and the CAC sadder. The teams that recover fastest dig past the symptom before they buy another channel plan. Misdiagnosis is expensive. Correct diagnosis is merely uncomfortable.",
    },
    {
      type: "h2",
      text: "Symptom spending vs root-cause work",
    },
    {
      type: "table",
      headers: ["Signal", "Bad diagnosis", "Good diagnosis"],
      rows: [
        [
          "Low pipeline",
          "Buy more ads immediately",
          "Can a cold visitor explain the offer in one sentence?",
        ],
        [
          "High CAC",
          "Blame creative fatigue",
          "Check if ads explain what the homepage will not",
        ],
        [
          "Demo no-shows",
          "More nurture emails",
          "Is the first value clear before the meeting?",
        ],
        [
          "Churn after week two",
          "More onboarding webinars",
          "Does activation deliver the promised outcome?",
        ],
        [
          "Board pressure",
          "Screenshot an ad calendar",
          "Show retention and activation before scale",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad B2B SaaS:** paid campaigns that work only when the creative does the homepage’s job. The media buyer becomes a product copywriter with a worse spreadsheet. **Good B2B pattern:** sharpen the wedge and first-value path, then spend. Slack’s early growth was a problem frame people already felt, not a louder logo.",
    },
    {
      type: "p",
      text: "**Bad consumer brand:** more content volume while the product story still sounds like a feature list. **Good consumer brand:** one clear job, proof in use, then distribution.",
    },
    {
      type: "image",
      src: "/images/blog/blog-12-dig-deeper.png",
      alt: "Diagram suggesting digging past marketing symptoms",
    },
    {
      type: "h2",
      text: "A diagnostic you can run in a day",
    },
    {
      type: "ol",
      items: [
        "Ask five cold people what your homepage sells. If answers diverge, stop buying traffic.",
        "Map the path from click to first value. Circle the first broken promise.",
        "Compare ad claims to product reality. Rewrite the weaker side to match.",
        "Check activation: what share of new users reach the outcome you sell?",
        "Only then choose a channel. Volume after coherence, not instead of it.",
      ],
    },
    {
      type: "p",
      text: "[Y Combinator’s Library](https://www.ycombinator.com/library) keeps returning to users before scale. [First Round Review](https://review.firstround.com/) shows how often “growth problems” dissolve once positioning hardens. Related: [most marketing problems are product problems](/essays/most-marketing-problems-are-product-problems).",
    },
    {
      type: "callout",
      title: "A useful suspicion",
      text: "If paid channels only work when the creative explains what the homepage will not, you do not have a creative problem. You have a product-story problem wearing media buyers’ clothes.",
    },
    {
      type: "takeaway",
      text: "It looks like a marketing problem until you dig once. Dig before you amplify.",
    },
    {
      type: "cta",
      lead: "nau studio diagnoses clarity, activation, and positioning before building campaigns that only make noise louder.",
      button: "Visit nau studio",
      href: "/",
    },
  ],
};

export default post;
