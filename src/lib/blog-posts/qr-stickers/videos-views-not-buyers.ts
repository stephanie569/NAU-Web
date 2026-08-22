import type { BlogPost } from "@/lib/blog-types";
import { QR_STICKER_CATEGORY } from "@/lib/qr-stickers";

const post: BlogPost = {
  slug: "videos-views-not-buyers",
  title: "Why are my videos getting views but not buyers?",
  excerpt:
    "Views measure attention. Revenue measures fit. How to stop confusing the two, with fixes that actually convert.",
  date: "August 22, 2026",
  category: QR_STICKER_CATEGORY,
  image: "/images/qr-stickers/videos-views-not-buyers.jpg",
  metaDescription:
    "Why videos get views but not buyers: good vs bad creative strategies, metrics, and solutions for product brands.",
  content: [
    {
      type: "p",
      text: "You found this through a NAU sticker. The views look heroic in the stand-up. The revenue line looks like it has other plans. This is not a paradox. It is two different sports being scored on the same clip.",
    },
    {
      type: "p",
      text: "Views reward novelty, controversy, or entertainment. Buyers reward clarity, proof, and timing. Asking one video to win both without design is like asking a toaster to also be a violin. Technically someone will try. Rarely well.",
    },
    {
      type: "h2",
      text: "Bad vs good creative jobs",
    },
    {
      type: "table",
      headers: ["Job", "Bad approach", "Good approach"],
      rows: [
        [
          "Reach",
          "Expect every viral clip to sell",
          "Use reach to earn the right audience, then hand off",
        ],
        [
          "Proof",
          "Feature montage with music",
          "Show one outcome a buyer recognises",
        ],
        [
          "Close",
          "“Link in bio” with no reason",
          "Offer that matches what the video just proved",
        ],
        [
          "Measurement",
          "Celebrate views alone",
          "Track saves, profile visits, and purchases by series",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad DTC pattern:** a stunt goes wide, attracts an audience that will never pay your price, then the team concludes “video doesn’t convert.” It converted attention. It simply converted the wrong kind.",
    },
    {
      type: "p",
      text: "**Better pattern:** Allbirds’ early demos stayed close to the purchase decision: material, comfort, everyday use. Less circus. More “this is what changes if you switch.” Contrast a premium outdoor brand posting only cliff jumps: reach from people who will never need a £400 shell, and wonder why the till is quiet.",
    },
    {
      type: "image",
      src: "/images/qr-stickers/videos-views-not-buyers.jpg",
      alt: "NAU sticker about videos getting views but not buyers",
    },
    {
      type: "h2",
      text: "A practical split that works",
    },
    {
      type: "ol",
      items: [
        "Run three series, not one blob: Reach, Proof, Close.",
        "Label each draft before you shoot. If it is Reach, do not judge it on revenue this week.",
        "For Proof videos, show one before/after or one field constraint the buyer already lives with.",
        "For Close videos, restates the offer in the language Proof already earned.",
        "In analytics, group posts by series. Compare profile-to-purchase, not views-to-vibes.",
      ],
    },
    {
      type: "p",
      text: "[Think with Google](https://www.thinkwithgoogle.com/) keeps repeating a usefully boring truth: match creative to funnel stage. Related essay: [the difference between getting attention and earning it](/essays/difference-getting-attention-and-earning-it).",
    },
    {
      type: "takeaway",
      text: "Views are not broken. Your brief is. Give each video one job and measure that job.",
    },
    {
      type: "cta",
      lead: "You found this through a NAU sticker. nau studio builds campaign series where views and buyers pull in the same direction.",
      button: "Visit nau studio",
      href: "/",
    },
  ],
};

export default post;
