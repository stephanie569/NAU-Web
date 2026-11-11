import type { BlogPost } from "@/lib/blog-types";
import { QR_STICKER_CATEGORY } from "@/lib/qr-stickers";

const post: BlogPost = {
  slug: "content-or-filling-feed",
  title: "Am I making content or just filling a feed?",
  excerpt:
    "Cadence is not strategy. How to tell feed-filling from real content, and how to build a series that remembers itself.",
  date: "August 22, 2026",
  category: QR_STICKER_CATEGORY,
  image: "/images/qr-stickers/content-or-filling-feed.jpg",
  metaDescription:
    "Making content vs filling a feed: good vs bad planning, examples, and a series system that works.",
  content: [
    {
      type: "p",
      text: "You found this through a NAU sticker. The calendar is full. The impact is not. This is the modern condition of having successfully produced a great deal of nothing in particular.",
    },
    {
      type: "p",
      text: "Filling a feed optimises for presence. Making content optimises for memory. The first is measurable by output. The second by whether anyone can describe what you stand for after three posts without consulting your LinkedIn.",
    },
    {
      type: "h2",
      text: "Feed filling vs content",
    },
    {
      type: "table",
      headers: ["Measure", "Bad (filling)", "Good (content)"],
      rows: [
        [
          "Planning",
          "Weekly slot to hit",
          "Series with a beginning and end",
        ],
        [
          "Topic",
          "Whatever is due",
          "One job-to-be-done per arc",
        ],
        [
          "Reuse",
          "Same promo, new background",
          "Clips that reference each other",
        ],
        [
          "Success",
          "Posted on time",
          "Saved, shared, cited in sales calls",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad:** twelve orphan posts that could be shuffled randomly without anyone noticing. That is not a content strategy. That is a filing system with filters.",
    },
    {
      type: "p",
      text: "**Good:** Red Bull Media House does not merely “post.” It publishes worlds. A local outdoor shop can do the same at smaller scale: one season, one trail, one gear choice, told across four connected pieces instead of twelve lonely orphans hoping for algorithmic mercy.",
    },
    {
      type: "image",
      src: "/images/qr-stickers/content-or-filling-feed.jpg",
      alt: "NAU sticker asking if you are making content or filling a feed",
    },
    {
      type: "h2",
      text: "Install a series system",
    },
    {
      type: "ol",
      items: [
        "Pick one customer job for the next 30 days.",
        "Plan four to six pieces that only make full sense in order.",
        "Write the last piece first so you know where the arc lands.",
        "Kill any draft that could belong to a competitor with the logo swapped.",
        "Measure the series as a set: completion, saves, and inbound language that repeats your promise.",
      ],
    },
    {
      type: "callout",
      title: "Series test",
      text: "Could someone binge your last ten posts in order and feel a plot? If shuffling them changes nothing, you are filling a feed. Congratulations on the consistency. Condolences on the story.",
    },
    {
      type: "p",
      text: "[Sprout Social](https://sproutsocial.com/insights/) publishes frequency benchmarks. Benchmarks tell you how often others show up. They do not tell you why anyone should care. Related: [why I care more about systems than campaigns](/essays/why-i-care-more-about-systems-than-campaigns).",
    },
    {
      type: "takeaway",
      text: "Strategy is what you refuse to post, not what you scheduled.",
    },
    {
      type: "cta",
      lead: "You found this through a NAU sticker. nau studio plans campaign series with a story arc, not a content calendar for its own sake.",
      button: "Visit nau studio",
      href: "/",
    },
  ],
};

export default post;
