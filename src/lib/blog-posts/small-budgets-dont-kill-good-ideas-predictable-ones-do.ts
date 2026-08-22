import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "small-budgets-dont-kill-good-ideas-predictable-ones-do",
  title: "Small budgets don't kill ideas. Predictable ones do.",
  excerpt:
    "Creative marketing frameworks for founders who cannot outspend the competition but can out-think them.",
  date: "August 1, 2026",
  category: "Content",
  image: "/images/blog/blog-42-small-budgets.png",
  metaDescription:
    "Small budgets do not kill good ideas. Predictable ones do. Frameworks for founders who cannot outspend competitors but can out-think them.",
  content: [
    {
      type: "p",
      text: "A small budget is not a tragedy. A predictable idea with a small budget is. The universe already has enough ads that could belong to anyone, which is a remarkable achievement in wastefulness when money is scarce.",
    },
    {
      type: "p",
      text: "Founders who cannot outspend competitors often try to out-imitate them instead. Same formats, same hooks, same “thought leadership.” Scarcity then becomes an excuse for sameness. The fix is not more posts. It is a sharper constraint that makes the work hard to ignore.",
    },
    {
      type: "h2",
      text: "Predictable spend vs constrained creativity",
    },
    {
      type: "table",
      headers: ["Choice", "Bad (predictable)", "Good (constrained)"],
      rows: [
        [
          "Idea",
          "Competitor clone with a smaller cheque",
          "One memorable wedge only you can own",
        ],
        [
          "Channel",
          "Everywhere, thinly",
          "One place where your customer already gathers",
        ],
        [
          "Asset",
          "Generic stock and slogans",
          "Proof, place, or product in the real world",
        ],
        [
          "Success",
          "Impressions and “we posted”",
          "Saved, shared, or brought into sales conversations",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad:** stretching a thin budget across six channels so nothing is strong enough to be remembered. **Good:** one series, one local moment, or one product demonstration that people photograph because it is useful or strange in a useful way.",
    },
    {
      type: "image",
      src: "/images/blog/blog-42-small-budgets.png",
      alt: "Small budget creative marketing framework illustration",
    },
    {
      type: "h2",
      text: "A low-budget system that still compounds",
    },
    {
      type: "ol",
      items: [
        "Write the one belief you need a stranger to hold after seeing your work once.",
        "Pick one channel where your buyers already pay attention.",
        "Design for shareability or photographability, not for completeness.",
        "Reuse one strong asset across weeks instead of inventing twelve weak ones.",
        "Kill any concept that still works if you swap your logo for a competitor’s.",
        "Measure memory: can five outsiders repeat your promise after one exposure?",
      ],
    },
    {
      type: "p",
      text: "More on earning attention without buying it: [your city as a growth channel](/essays/your-city-most-underrated-marketing-channel) and [why the feed still needs the real world](/essays/why-internet-still-needs-real-world).",
    },
    {
      type: "takeaway",
      text: "Budget limits volume. Predictability kills distinctiveness. Fix the idea before you stretch the spend.",
    },
    {
      type: "cta",
      lead: "nau studio builds campaigns and systems that work when you cannot outspend the category.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
