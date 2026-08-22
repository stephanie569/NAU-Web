import type { BlogPost } from "@/lib/blog-types";
import { QR_STICKER_CATEGORY } from "@/lib/qr-stickers";

const post: BlogPost = {
  slug: "content-feels-like-ad",
  title: "Why does my content feel like an ad?",
  excerpt:
    "When every post sells, nothing earns attention. How to spot ad-like content, and what to make instead.",
  date: "August 22, 2026",
  category: QR_STICKER_CATEGORY,
  image: "/images/qr-stickers/content-feels-like-ad.jpg",
  metaDescription:
    "Why brand content feels like an ad, with good and bad examples, and practical fixes for product brands.",
  content: [
    {
      type: "p",
      text: "You found this through a NAU sticker. The question landed because you already feel it: the post is polished, on-brand, and somehow still ignored. Like a very expensive pamphlet that learned to dance.",
    },
    {
      type: "p",
      text: "Content feels like an ad when the audience can finish your sentence before you do. The camera announces “campaign.” The caption announces “buy.” The viewer’s brain, which has survived decades of this sort of thing, files it under skip and goes looking for something that might be interesting.",
    },
    {
      type: "h2",
      text: "Bad vs good: same product, different job",
    },
    {
      type: "table",
      headers: ["Moment", "Bad (ad-like)", "Good (worth watching)"],
      rows: [
        [
          "Opening frame",
          "Logo, then product spin",
          "A recognisable problem or moment first",
        ],
        [
          "Caption",
          "Feature list + shop link",
          "One honest tension; product arrives later",
        ],
        [
          "Proof",
          "“Premium quality” with no context",
          "Field use, constraint, customer voice",
        ],
        [
          "Ask",
          "Buy now on every post",
          "One clear next step when the story earned it",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad outdoor brand:** three angles of a jacket on a white cyclorama, soft piano, caption that begins with “Introducing.” It is not wrong so much as it is already over. The viewer has seen this film before, starring different logos.",
    },
    {
      type: "p",
      text: "**Good reference:** Patagonia’s [Worn Wear](https://wornwear.patagonia.com/) films. The product appears, but the plot is repair, longevity, and people who keep using gear past its marketing shelf life. The jacket is a character, not the narrator yelling its own name.",
    },
    {
      type: "p",
      text: "**Bad hotel content:** endless room tours that compete with every OTA listing on earth. **Good hospitality content:** how a guest actually spends a slow morning in the neighbourhood. Same budget. Different reason to stay for the ending.",
    },
    {
      type: "image",
      src: "/images/qr-stickers/content-feels-like-ad.jpg",
      alt: "NAU sticker asking why content feels like an ad",
    },
    {
      type: "h2",
      text: "What to do this week",
    },
    {
      type: "ol",
      items: [
        "Pick one upcoming post. Write the outcome for someone who never buys: what should they feel or learn?",
        "Film that answer first. Put the product inside the answer, not on top of it.",
        "Cut the opening logo sting unless the logo is genuinely the joke.",
        "Move the hard sell to the last line, and only if the piece earned it.",
        "Review last month’s feed: if every post ends with “shop now,” alternate with story-only pieces for two weeks and compare saves and profile visits.",
      ],
    },
    {
      type: "p",
      text: "[Nielsen Norman Group](https://www.nngroup.com/) has shown for years that people scan for relevance, not polish. Relevance is a story job. Polish is a finishing job. Do them in that order and your content stops feeling like an ad that wandered into the wrong party.",
    },
    {
      type: "takeaway",
      text: "If the viewer can finish your sentence, you are making ads. If they want to know what happens next, you are making content.",
    },
    {
      type: "cta",
      lead: "You found this through a NAU sticker. nau studio helps product brands build campaigns that feel like story, not schedule.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
