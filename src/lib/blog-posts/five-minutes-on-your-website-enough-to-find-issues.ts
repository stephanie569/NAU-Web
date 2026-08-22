import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "five-minutes-on-your-website-enough-to-find-issues",
  title: "I spent 5 minutes on your site. Here's what I found.",
  excerpt:
    "A rapid-audit format: the conversion issues that usually appear in the first five minutes, and a prioritised fix order.",
  date: "June 30, 2026",
  category: "Go-to-Market",
  image: "/images/blog/blog-25-five-minutes.png",
  metaDescription:
    "Five-minute website audit for startups: messaging, CTA, proof, and mobile issues, with bad vs good patterns and a fix checklist.",
  content: [
    {
      type: "p",
      text: "You do not always need a four-week audit to find the truth. In five minutes, a trained eye can spot the issues that later show up as weak demos and high bounce. Long audits have their place. So does noticing the obvious before it becomes a quarterly project with a steering committee and a mood board nobody asked for.",
    },
    {
      type: "p",
      text: "Teams go blind to their own homepage. You know the product, so you fill in gaps automatically. A cold visitor cannot. Your five-minute confusion is a useful proxy for their five-second bounce, which is why rapid audits feel rude and still work.",
    },
    {
      type: "h2",
      text: "What five minutes usually finds",
    },
    {
      type: "table",
      headers: ["Area", "Bad", "Good"],
      rows: [
        [
          "Headline",
          "Category jargon or “welcome”",
          "Who it is for and what changes",
        ],
        [
          "CTA",
          "Multiple competing asks",
          "One primary next step above the fold",
        ],
        [
          "Proof",
          "Logos without outcomes",
          "Specific result, quote, or demo",
        ],
        [
          "Nav",
          "Everything is equally loud",
          "Paths match the jobs visitors arrive with",
        ],
        [
          "Mobile",
          "Tiny type, buried CTA",
          "Readable offer and tap-friendly action",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad SaaS homepage:** a hero that says “reimagine workflows,” three CTAs, and proof that is a grey logo strip. Beautiful emptiness. **Good SaaS homepage:** a sentence a prospect could email their boss, one action, and a number or story that makes the claim less lonely.",
    },
    {
      type: "p",
      text: "**Bad hospitality site:** photo carousel before location, who it is for, or booking anxiety. **Good hospitality site:** neighbourhood truth, stay type, and a booking path that does not require detective work.",
    },
    {
      type: "image",
      src: "/images/blog/blog-25-five-minutes.png",
      alt: "Illustration of a five-minute website audit",
    },
    {
      type: "h2",
      text: "Run this fix order this week",
    },
    {
      type: "ol",
      items: [
        "Open the site on a phone. Time how long until you know what it is and for whom.",
        "Rewrite the headline in customer language. Cut adjectives that do no work.",
        "Pick one primary CTA. Demote the rest visually.",
        "Add one concrete proof line next to the claim (result, quote, or demo).",
        "Remove or hide nav items that do not help a first-time buyer decide.",
        "Recheck mobile: offer readable, CTA tappable, no mystery scroll.",
      ],
    },
    {
      type: "p",
      text: "[Nielsen Norman Group](https://www.nngroup.com/) has shown for years that people scan for relevance, not polish. Related: [why startup websites fail in the first 10 seconds](/essays/why-startup-websites-fail-first-10-seconds).",
    },
    {
      type: "callout",
      title: "What five minutes is for",
      text: "Five minutes finds structural clarity problems. It does not replace analytics or interviews. Use it to build a prioritised fix list, not to declare the brand finished or doomed.",
    },
    {
      type: "takeaway",
      text: "If a strategist cannot understand the offer in five minutes, neither can a cold visitor with less patience.",
    },
    {
      type: "cta",
      lead: "nau studio runs fast clarity audits and turns them into homepage and conversion fixes that stick.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
