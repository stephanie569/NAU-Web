import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "if-patagonia-hired-me-tomorrow-where-id-start",
  title: "If Patagonia hired me tomorrow, I'd start here",
  excerpt:
    "A speculative memo: protect meaning, clarify the digital path from inspiration to action. Bad vs good mission-led journeys.",
  date: "July 2, 2026",
  category: "Go-to-Market",
  image: "/images/blog/blog-23-patagonia.png",
  metaDescription:
    "If Patagonia hired a product strategist: where to start on digital clarity, customer journeys, and brand-aligned conversion. Lessons for mission-led startups.",
  content: [
    {
      type: "p",
      text: "If Patagonia hired me tomorrow, I would not start by inventing a new campaign slogan. That would be like offering the ocean a new name. The brand already has meaning. The job is to make the digital path from inspiration to action as honest as the jacket that survives a decade of weather.",
    },
    {
      type: "p",
      text: "Mission-led brands fail online when conversion is treated as a separate personality from the mission. Inspiration without a path is a TED Talk. A path without integrity is a checkout funnel in outdoor clothing. The useful work sits between those poles.",
    },
    {
      type: "h2",
      text: "Bad mission path vs good mission path",
    },
    {
      type: "table",
      headers: ["Moment", "Bad (extractive)", "Good (aligned)"],
      rows: [
        [
          "Homepage",
          "Generic shop energy with mission as decoration",
          "Mission and product job visible in one glance",
        ],
        [
          "Story",
          "Activism content that never connects to use",
          "Stories that show how product and values meet in the field",
        ],
        [
          "Commerce",
          "Urgency tricks that contradict durability claims",
          "Clear product truth, repair, and longevity cues",
        ],
        [
          "Proof",
          "Awards and vibes only",
          "Use, repair, community, and measurable outcomes",
        ],
        [
          "Ask",
          "Buy now on every surface",
          "Right ask for the stage: learn, repair, buy, join",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad:** a beautiful film about wild places that dumps into a cluttered PDP with five competing CTAs and a countdown timer. The film said “care.” The page said “hurry.” Buyers notice the mismatch. **Good:** Worn Wear style continuity, where repair and longevity are not a side quest. They are part of how the brand earns the next purchase.",
    },
    {
      type: "p",
      text: "This is not only a Patagonia thought experiment. Any mission-led product brand can run the same test: if you removed the manifesto, would the product journey still feel true? If you removed the product, would the manifesto still have a place to land?",
    },
    {
      type: "image",
      src: "/images/blog/blog-23-patagonia.png",
      alt: "Mission-led brand journey from inspiration to action",
    },
    {
      type: "h2",
      text: "Where I would start in the first 30 days",
    },
    {
      type: "ol",
      items: [
        "Audit the top five digital entry points for mission-to-product continuity.",
        "Map belief stages from care to purchase to ownership (including repair and return).",
        "Remove conversion tactics that contradict durability and trust claims.",
        "Put one primary path on the homepage: inspire, understand, choose, own.",
        "Align content series to ownership stories, not only acquisition spikes.",
        "Define success as activated owners and retained believers, not only sessions.",
      ],
    },
    {
      type: "p",
      text: "Related: [redesigning the customer journey](/essays/how-id-redesign-brand-customer-journey), [best marketing feels like product design](/essays/best-marketing-feels-like-product-design), and Patagonia’s own [Worn Wear](https://wornwear.patagonia.com/) as a living reference for integrity in commerce.",
    },
    {
      type: "takeaway",
      text: "Protect the meaning. Clarify the path. If those two fight, the brand loses either trust or revenue, usually both.",
    },
    {
      type: "cta",
      lead: "nau studio helps mission-led product brands keep integrity and conversion on the same path.",
      button: "Visit nau studio",
      href: "/",
    },
  ],
};

export default post;
