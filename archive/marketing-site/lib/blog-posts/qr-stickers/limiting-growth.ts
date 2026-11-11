import type { BlogPost } from "@/lib/blog-types";
import { QR_STICKER_CATEGORY } from "@/lib/qr-stickers";

const post: BlogPost = {
  slug: "limiting-growth",
  title: "What's limiting my product's growth?",
  excerpt:
    "Growth stalls at one bottleneck. Diagnose it before you pour more fuel on the wrong fire.",
  date: "August 22, 2026",
  category: QR_STICKER_CATEGORY,
  image: "/images/qr-stickers/limiting-growth.jpg",
  metaDescription:
    "What limits product growth: good vs bad diagnosis, four bottleneck types, and a practical fix order.",
  content: [
    {
      type: "p",
      text: "You found this through a NAU sticker. Growth feels capped. The team debates tactics while the real limiter sits one layer down, humming quietly, like a fuse nobody checked.",
    },
    {
      type: "p",
      text: "Adding budget to a clarity problem makes louder confusion. Adding features to a distribution problem makes a heavier product nobody discovers. The universe, in its wisdom, will not correct this for you.",
    },
    {
      type: "h2",
      text: "Bad diagnosis vs good diagnosis",
    },
    {
      type: "table",
      headers: ["Limiter", "Bad response", "Good response"],
      rows: [
        [
          "Story / positioning",
          "More creatives, same fuzzy offer",
          "Rewrite who it is for and why it wins",
        ],
        [
          "Channel fit",
          "Copy-paste the winning post everywhere",
          "Match creative to intent per channel",
        ],
        [
          "Retention",
          "Buy more top-of-funnel",
          "Fix first-session outcome",
        ],
        [
          "Operations",
          "Scale ads into chaos",
          "Capacity and support before spend",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad:** “We need more content” when cold visitors still cannot explain the product. **Good:** pick the metric that must move this quarter, walk backwards until a step refuses to budge, and treat that step as the limiter until proven otherwise.",
    },
    {
      type: "p",
      text: "PLG companies in [Y Combinator’s library](https://www.ycombinator.com/library) often stall when activation never catches acquisition. Consumer outdoor brands stall when wholesale works but the DTC story does not travel. Different industries. Same lesson: find the weak layer.",
    },
    {
      type: "image",
      src: "/images/qr-stickers/limiting-growth.jpg",
      alt: "NAU sticker asking what limits product growth",
    },
    {
      type: "h2",
      text: "A simple order of operations",
    },
    {
      type: "ol",
      items: [
        "Write the growth goal in one number (revenue, activations, bookings).",
        "Map the path to that number in five steps or fewer.",
        "Circle the step with the worst conversion or capacity.",
        "Run one fix on that step for two weeks. No parallel “also let’s rebrand.”",
        "Only then unlock the next layer. Patience is a growth strategy disguised as boredom.",
      ],
    },
    {
      type: "p",
      text: "Related: [if your product isn’t growing, start here](/essays/if-product-isnt-growing-start-here).",
    },
    {
      type: "takeaway",
      text: "Growth is capped by the weakest layer in the stack, not the loudest opinion in the room.",
    },
    {
      type: "cta",
      lead: "You found this through a NAU sticker. nau studio runs the full cycle: research, positioning, GTM and content that compound instead of spike.",
      button: "Visit nau studio",
      href: "/",
    },
  ],
};

export default post;
