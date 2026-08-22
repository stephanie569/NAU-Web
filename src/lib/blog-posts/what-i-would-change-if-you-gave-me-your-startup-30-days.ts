import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "what-i-would-change-if-you-gave-me-your-startup-30-days",
  title: "Give me your product brand for 30 days. Here's what changes.",
  excerpt:
    "A four-week reset for brands launching gear, travel goods or consumer tech with a muddy story.",
  date: "July 12, 2026",
  category: "Go-to-Market",
  image: "/images/blog/blog-33-30-days.png",
  metaDescription:
    "A 30-day plan to clarify positioning, go-to-market and product storytelling for premium consumer product brands.",
  content: [
    {
      type: "p",
      text: "Thirty days is not enough to invent a new category. It is enough to stop pretending fog is strategy. Give me a muddy product brand and the first job is not a rebrand. It is making the universe, and your buyers, able to finish your sentence.",
    },
    {
      type: "p",
      text: "The reset is boring on purpose: research the job, rewrite the story, prove it on the site and in one channel, cut what dilutes. Brands launching gear, travel goods, or consumer tech usually do not need more assets. They need a sharper argument.",
    },
    {
      type: "h2",
      text: "Busy month vs useful month",
    },
    {
      type: "table",
      headers: ["Week focus", "Bad 30 days", "Good 30 days"],
      rows: [
        [
          "Week 1",
          "Moodboards and logo options",
          "Customer interviews and job statement",
        ],
        [
          "Week 2",
          "Feature list expansion",
          "Positioning and homepage rewrite",
        ],
        [
          "Week 3",
          "Six channel experiments at once",
          "One channel plus proof next to claims",
        ],
        [
          "Week 4",
          "Another campaign concept",
          "Cuts, onboarding fixes, and a learning loop",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad:** thirty days of production that leave the same unclear hero. **Good:** a narrow promise, a site that passes a five-second test, and one go-to-market motion that repeats the promise until strangers can say it back.",
    },
    {
      type: "image",
      src: "/images/blog/blog-33-30-days.png",
      alt: "Thirty day product brand reset plan",
    },
    {
      type: "h2",
      text: "The 30-day sequence",
    },
    {
      type: "ol",
      items: [
        "Interview five customers or lost prospects about the job and alternatives.",
        "Lock a one-sentence positioning line in their language.",
        "Rewrite hero, proof, and primary CTA on the site.",
        "Freeze non-essential features and campaign ideas for the month.",
        "Run one channel that can carry the new sentence with real proof.",
        "End with a short learning review: what to keep, cut, and scale next month.",
      ],
    },
    {
      type: "p",
      text: "If you want the adjacent version: [if I joined your startup tomorrow](/essays/if-i-joined-your-startup-tomorrow-what-id-do-first) and [reposition in 60 minutes](/essays/how-id-reposition-your-startup-in-60-minutes).",
    },
    {
      type: "takeaway",
      text: "Thirty days of clarity beats ninety days of production on the wrong story.",
    },
    {
      type: "cta",
      lead: "nau studio runs research-led resets so your next thirty days change the sentence, not just the assets.",
      button: "Visit nau studio",
      href: "/",
    },
  ],
};

export default post;
