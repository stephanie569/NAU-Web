import type { BlogPost } from "@/lib/blog-types";
import { QR_STICKER_CATEGORY } from "@/lib/qr-stickers";

const post: BlogPost = {
  slug: "right-story",
  title: "Is my brand telling the right story?",
  excerpt:
    "The right story is the one customers repeat without slides. How to spot a wrong story and rebuild a coherent one.",
  date: "August 22, 2026",
  category: QR_STICKER_CATEGORY,
  image: "/images/qr-stickers/right-story.jpg",
  metaDescription:
    "Is your brand telling the right story? Good vs bad narrative coherence, examples, and a rebuild checklist.",
  content: [
    {
      type: "p",
      text: "You found this through a NAU sticker. The visuals are consistent. The story still feels thin, like a beautifully typeset instruction manual for a device that does not exist.",
    },
    {
      type: "p",
      text: "The right story means a stranger can say who you are for, what you stand against, and what changes if they believe you. The wrong story means every channel invents a slightly different legend, and customers, being sensible, believe none of them fully.",
    },
    {
      type: "h2",
      text: "Wrong story vs right story",
    },
    {
      type: "table",
      headers: ["Touchpoint", "Bad", "Good"],
      rows: [
        [
          "Homepage",
          "Mission adjectives, no buyer",
          "One promise, one proof",
        ],
        [
          "Social",
          "New personality every week",
          "Same tension as the site",
        ],
        [
          "Sales / support",
          "Internal jargon on every call",
          "Words customers already use",
        ],
        [
          "Product",
          "Ad promise ≠ first use",
          "Delivery matches the hook",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad:** a brand that posts sustainability quotes on Monday and hard discount codes on Tuesday without reconciling the two. The audience notices. Audiences always notice.",
    },
    {
      type: "p",
      text: "**Good:** Patagonia’s story survived because product, activism, and retail reinforce the same tension. Apple’s story is not a list of specs. It is creative empowerment with ruthless simplicity, repeated from keynote to unboxing until it feels inevitable.",
    },
    {
      type: "image",
      src: "/images/blog/blog-65-story-before-logo.png",
      alt: "Brand story framework before visual identity",
    },
    {
      type: "h2",
      text: "Rebuild the story in five moves",
    },
    {
      type: "ol",
      items: [
        "Write the customer as the hero and your brand as the guide with a plan ([StoryBrand](https://storybrand.com/) is useful here).",
        "Name the villain: the status quo, the anxiety, the waste. Be specific.",
        "Write one promise sentence a non-founder can repeat.",
        "Audit homepage, last ten posts, and sales opener. Delete anything that contradicts the promise.",
        "Brief the next campaign from that sentence only. If a shot does not serve it, it does not ship.",
      ],
    },
    {
      type: "takeaway",
      text: "If your team needs a deck to explain the story, customers will not explain it for you.",
    },
    {
      type: "p",
      text: "More: [every product deserves a story before a logo](/essays/every-product-deserves-story-before-logo).",
    },
    {
      type: "cta",
      lead: "You found this through a NAU sticker. nau studio builds one story across research, positioning and campaign content.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
