import type { BlogPost } from "@/lib/blog-types";
import { QR_STICKER_CATEGORY } from "@/lib/qr-stickers";

const post: BlogPost = {
  slug: "not-first-choice",
  title: "Why isn't my product the first choice?",
  excerpt:
    "Second choice is a positioning problem. How to stop being comparable and start being obvious.",
  date: "August 22, 2026",
  category: QR_STICKER_CATEGORY,
  image: "/images/qr-stickers/not-first-choice.jpg",
  metaDescription:
    "Why your product is not first choice: good vs bad positioning, examples, and a practical fix.",
  content: [
    {
      type: "p",
      text: "You found this through a NAU sticker. People like your product. They still open three tabs before they pick you. Being liked and being first are related in the way “nearly catching the train” is related to catching the train.",
    },
    {
      type: "p",
      text: "First choice is not “best on a spreadsheet.” It is the name that fits the situation fastest. If buyers compare feature grids, you entered a category on someone else’s terms.",
    },
    {
      type: "h2",
      text: "Second-choice brands vs first-choice brands",
    },
    {
      type: "table",
      headers: ["Signal", "Bad (second choice)", "Good (first choice)"],
      rows: [
        [
          "Shortlist",
          "Always included, rarely picked first",
          "Named before the comparison starts",
        ],
        [
          "Pitch",
          "“We also do X, Y, Z”",
          "“We win this trade-off for this buyer”",
        ],
        [
          "Price talk",
          "Discount requested early",
          "Value anchored to a unique job",
        ],
        [
          "Language",
          "Described like competitor X",
          "Described in your own sentence",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad positioning:** listing every capability until the buyer’s eyes glaze into a polite smile. **Good positioning:** Oatly making dairy alternatives feel like the sensible default (“It's like milk, but made for humans”). Rapha selling road culture, not only jerseys. Comparison starts to feel slightly wrong.",
    },
    {
      type: "image",
      src: "/images/blog/blog-06-reposition.png",
      alt: "Brand repositioning workshop notes",
    },
    {
      type: "h2",
      text: "How to become first choice",
    },
    {
      type: "ol",
      items: [
        "Name the best-fit customer in one line. Be cruelly specific.",
        "Name the real alternative they use today (including “do nothing”).",
        "Name the one trade-off you win. Delete the other claims from the hero.",
        "Put that sentence on the homepage, in sales openers, and in campaign hooks.",
        "Test with five outsiders: if they still compare you as “like X but…,” rewrite until the “but” is unnecessary.",
      ],
    },
    {
      type: "p",
      text: "April Dunford’s positioning work and teardowns on [First Round Review](https://review.firstround.com/) keep returning to the same craft: customer, alternative, unique value. More: [how I’d reposition your startup in 60 minutes](/essays/how-id-reposition-your-startup-in-60-minutes).",
    },
    {
      type: "takeaway",
      text: "First-choice brands refuse to be compared on someone else’s scoreboard.",
    },
    {
      type: "cta",
      lead: "You found this through a NAU sticker. nau studio sharpens who you are for and why you win, before the next campaign ships.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
