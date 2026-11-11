import type { BlogPost } from "@/lib/blog-types";
import { QR_STICKER_CATEGORY } from "@/lib/qr-stickers";

const post: BlogPost = {
  slug: "where-losing-customers",
  title: "Where am I losing customers?",
  excerpt:
    "Churn has an address. Find the broken promise, then fix that moment instead of blaming the quarter.",
  date: "August 22, 2026",
  category: QR_STICKER_CATEGORY,
  image: "/images/qr-stickers/where-losing-customers.jpg",
  metaDescription:
    "Where you lose customers: good vs bad retention diagnosis, examples, and a practical recovery plan.",
  content: [
    {
      type: "p",
      text: "You found this through a NAU sticker. Losing customers feels like weather until you map the path and notice the same cliff every time. Finance sees a lagging number. Marketing needs a street address.",
    },
    {
      type: "p",
      text: "People rarely leave because the universe is unfair. They leave because expectation and delivery had a quiet disagreement, and delivery lost.",
    },
    {
      type: "h2",
      text: "Bad response vs good response",
    },
    {
      type: "table",
      headers: ["Situation", "Bad move", "Good move"],
      rows: [
        [
          "Churn rises",
          "Buy more ads to replace leavers",
          "Find the week the retention curve bends",
        ],
        [
          "First order fails",
          "Blame “price sensitive buyers”",
          "Compare promise in ads vs unboxing reality",
        ],
        [
          "Support ticket",
          "Close the ticket fast",
          "Recover the relationship and the story",
        ],
        [
          "Renewal risk",
          "Discount panic",
          "Prove ROI in their workflow before the date",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad hospitality:** photos that quietly lie about size, noise, or location. Guests feel tricked, leave reviews, and never return. The marketing was excellent. The product experience was a different novel.",
    },
    {
      type: "p",
      text: "**Good retention pattern:** brands that under-promise visually and over-deliver in the room, package, or first session. Outdoor brands keep buyers when gear survives the exact use case the campaign showed. Subscription brands keep buyers when month three is still a gift, not filler that somehow arrived wearing a logo.",
    },
    {
      type: "table",
      headers: ["Moment", "Common leak*", "Usual cause"],
      rows: [
        ["Before first purchase", "70-90% of visitors", "Unclear value or weak proof"],
        ["After first order", "20-40% never reorder", "Expectation mismatch"],
        ["After support issue", "2× churn vs happy cohort", "Slow, faceless recovery"],
        ["At renewal", "5-15% annual logo churn", "ROI never made visible"],
      ],
    },
    {
      type: "image",
      src: "/images/qr-stickers/where-losing-customers.jpg",
      alt: "NAU sticker asking where customers are being lost",
    },
    {
      type: "h2",
      text: "What to do next",
    },
    {
      type: "ol",
      items: [
        "Export cohort retention. Circle the week the curve bends.",
        "Interview five churned buyers with three questions: what almost stopped you first, why you left, what would have kept you one more month.",
        "Rewrite the promise at that moment so it matches delivery, or upgrade delivery to match the promise. Pick one. Doing neither is a hobby.",
        "Add one recovery path for support failures: owner, timeline, make-good.",
        "Stop spending to replace people you could have kept with a clearer sentence.",
      ],
    },
    {
      type: "p",
      text: "Ranges above are illustrative from [Baymard](https://baymard.com/) and common SaaS benchmarks. Related: [product market fit is a moving target](/essays/product-market-fit-isnt-milestone-moving-target).",
    },
    {
      type: "takeaway",
      text: "You are not losing customers everywhere. You are losing them at one broken promise, repeated.",
    },
    {
      type: "cta",
      lead: "You found this through a NAU sticker. nau studio maps buyer journeys and builds campaigns that match what the product actually delivers.",
      button: "Visit nau studio",
      href: "/",
    },
  ],
};

export default post;
