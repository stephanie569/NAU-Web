import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "good-marketing-leaves-footprints-before-impressions",
  title: "Impressions fade. Footprints stick.",
  excerpt:
    "Traces in the world beat vanity metrics on a dashboard. Design proof people can follow back to your brand.",
  date: "August 19, 2026",
  category: "Content",
  image: "/images/blog/blog-69-footprints.png",
  metaDescription:
    "Why good marketing leaves footprints before impressions: bad vs good proof, examples, and practical steps for memorable brand traces.",
  content: [
    {
      type: "p",
      text: "Impressions are a polite fiction that something happened. Footprints are evidence someone was there. Dashboards love the first. Memory prefers the second. Much of modern marketing optimises for being briefly noticed by people who will never remember your name, which is an odd ambition once you say it aloud.",
    },
    {
      type: "p",
      text: "Good marketing leaves traces: a sticker someone photographs, a sample that gets handed on, a line people repeat, a place someone returns to. Impressions can support footprints. They cannot replace them. If the only proof of your campaign is a screenshot of reach, you ran a weather report, not a brand moment.",
    },
    {
      type: "h2",
      text: "Impression theatre vs footprint design",
    },
    {
      type: "table",
      headers: ["Goal", "Bad", "Good"],
      rows: [
        [
          "Proof of work",
          "Reach chart in the deck",
          "Photos, saves, referrals, return visits",
        ],
        [
          "Creative",
          "Polished and forgettable",
          "Specific enough to retell or show a friend",
        ],
        [
          "Offline",
          "Poster nobody interacts with",
          "Object or moment people keep or share",
        ],
        [
          "Follow-up",
          "Hope they remember the URL",
          "Clear path from encounter to next step",
        ],
        [
          "Measurement",
          "Vanity only",
          "Traces plus conversion quality",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad city campaign:** billboards that look expensive and leave no reason to stop, photograph, or search later. **Good city campaign:** a physical detail people want to show someone else, with a bridge to the product that does not feel like a coupon yelling.",
    },
    {
      type: "p",
      text: "**Bad product brand:** endless feed ads with identical CTAs and zero residue. **Good product brand:** content or objects that survive the scroll, like Worn Wear stories or a sample pack people pass along.",
    },
    {
      type: "image",
      src: "/images/blog/blog-69-footprints.png",
      alt: "Illustration of marketing footprints versus impressions",
    },
    {
      type: "h2",
      text: "How to design footprints this month",
    },
    {
      type: "ol",
      items: [
        "Pick one campaign. Define the footprint: what physical or digital trace should remain after the impression fades?",
        "Design the creative so someone would show it to a friend without being asked.",
        "Add a clear path from that moment to a next step (URL, QR to a useful page, sample, booking).",
        "Measure traces: photos, saves, mentions, return visits, not reach alone.",
        "Kill assets that only look good in a metrics screenshot.",
        "Reuse the strongest footprint in the next channel instead of inventing a new forgettable one.",
      ],
    },
    {
      type: "p",
      text: "For attention and scanning behaviour, [Nielsen Norman Group](https://www.nngroup.com/) remains useful. Related: [your city is the most underrated marketing channel](/essays/your-city-most-underrated-marketing-channel).",
    },
    {
      type: "callout",
      title: "A simple scoreboard",
      text: "If nobody kept, shared, or returned because of the work, you bought impressions. If someone left a trail back to you, you bought a footprint.",
    },
    {
      type: "takeaway",
      text: "Impressions fade. Footprints stick. Design traces people can follow back to the brand.",
    },
    {
      type: "cta",
      lead: "nau studio builds campaigns meant to leave residue in the world, not only numbers on a dashboard.",
      button: "Visit nau studio",
      href: "/",
    },
  ],
};

export default post;
