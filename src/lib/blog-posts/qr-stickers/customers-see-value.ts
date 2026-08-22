import type { BlogPost } from "@/lib/blog-types";
import { QR_STICKER_CATEGORY } from "@/lib/qr-stickers";

const post: BlogPost = {
  slug: "customers-see-value",
  title: "Can customers see my value?",
  excerpt:
    "Value hidden in features is value that does not sell. How to make outcomes visible, with good and bad examples.",
  date: "August 22, 2026",
  category: QR_STICKER_CATEGORY,
  image: "/images/qr-stickers/customers-see-value.jpg",
  metaDescription:
    "Can customers see your value? Good vs bad value presentation, examples, and a practical visibility fix.",
  content: [
    {
      type: "p",
      text: "You found this through a NAU sticker. Your product delivers. Visitors still leave asking “so what?” which is the most expensive three-word review in business, usually left without being written down.",
    },
    {
      type: "p",
      text: "Value is not what you built. It is what the buyer can see in the first pass: outcome, proof, and contrast with their current pain. Invisible value has the same market impact as imaginary value, which is awkward for everyone who stayed up finishing the roadmap.",
    },
    {
      type: "h2",
      text: "Hidden value vs visible value",
    },
    {
      type: "table",
      headers: ["Element", "Bad (hidden)", "Good (visible)"],
      rows: [
        [
          "Headline",
          "Tech stack or materials only",
          "Life after switching",
        ],
        [
          "Pricing",
          "Features per tier",
          "Who each tier is for and what it unlocks",
        ],
        [
          "Social proof",
          "Logo strip without context",
          "Result + role + constraint",
        ],
        [
          "Demo",
          "Every button clicked",
          "One workflow, start to outcome",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad:** a premium tent brand leading with fabric grams while the buyer is trying to imagine a night in wind and rain. Specs matter. Specs are not the first sentence of the romance.",
    },
    {
      type: "p",
      text: "**Good:** Notion showing workspaces in action before drowning you in blocks. Monzo making money feel visible and human. The outcome arrives before the architecture lecture.",
    },
    {
      type: "image",
      src: "/images/blog/blog-01-clarity.png",
      alt: "Clarity and value proposition diagram",
    },
    {
      type: "h2",
      text: "Make value visible this week",
    },
    {
      type: "ol",
      items: [
        "Finish this homepage sentence: “After you switch, you will ___.” If the blank is a feature, rewrite until it is an outcome.",
        "Move one proof point next to that sentence: number, quote, or before/after.",
        "Rebuild pricing labels around buyer jobs, not internal package names.",
        "Cut the demo to one workflow that ends in the promised outcome.",
        "Ask five recent buyers what they tell friends. Put their words on the site.",
      ],
    },
    {
      type: "callout",
      title: "Value snapshot",
      text: "If a customer cannot photograph the outcome, they probably cannot buy the outcome. Features rarely photograph. Progress does.",
    },
    {
      type: "p",
      text: "Pricing and conversion research from [Paddle](https://www.paddle.com/resources) and [CXL](https://cxl.com/blog/) keep pointing at the same lever: value metrics beat feature counts on cold traffic. Related: [people don’t buy products, they buy a better tomorrow](/essays/people-dont-buy-products-buy-better-tomorrow).",
    },
    {
      type: "takeaway",
      text: "Customers cannot buy what they cannot see.",
    },
    {
      type: "cta",
      lead: "You found this through a NAU sticker. nau studio makes value legible in positioning, on the site and in the campaign materials that follow.",
      button: "Visit nau studio",
      href: "/",
    },
  ],
};

export default post;
