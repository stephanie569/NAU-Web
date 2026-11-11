import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "why-i-care-more-about-systems-than-campaigns",
  title: "Why I pick systems over one-hit campaigns",
  excerpt:
    "Campaigns spike. Systems compound. Build positioning, experience, proof, and learning so marketing stops reinventing belief every month.",
  date: "July 8, 2026",
  category: "Go-to-Market",
  image: "/images/blog/blog-18-systems.png",
  metaDescription:
    "Why product and brand systems outperform one-off marketing campaigns, and how to build compounding clarity into your startup.",
  content: [
    {
      type: "p",
      text: "Campaigns are fireworks. Systems are plumbing. The universe prefers fireworks at parties and plumbing for civilisation. Founders who live on launches keep reinventing belief every month, which is exhausting and oddly popular.",
    },
    {
      type: "p",
      text: "I pick systems because positioning, experience, proof, and learning compound. A campaign can amplify a system. A campaign cannot permanently replace one. When the spike fades, the system is what still explains you.",
    },
    {
      type: "h2",
      text: "Spike marketing vs compounding systems",
    },
    {
      type: "table",
      headers: ["Layer", "Bad (campaign-only)", "Good (system)"],
      rows: [
        [
          "Positioning",
          "Rewritten for every launch",
          "Stable promise, refreshed proof",
        ],
        [
          "Content",
          "Orphan posts for the calendar",
          "Series that share one job",
        ],
        [
          "Proof",
          "One-off case study for the launch week",
          "Always-on proof next to claims",
        ],
        [
          "Learning",
          "Post-mortems that nobody reads",
          "Weekly loop that changes the next ship",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad:** a brilliant launch that leaves the homepage, onboarding, and sales narrative unchanged. **Good:** a campaign that sits on top of a clear sentence, a repeatable proof library, and a learning cadence that survives the hangover.",
    },
    {
      type: "image",
      src: "/images/blog/blog-18-systems.png",
      alt: "Systems that compound versus one-hit campaigns",
    },
    {
      type: "h2",
      text: "Install the four-part system",
    },
    {
      type: "ol",
      items: [
        "Lock a one-sentence positioning line for the next quarter.",
        "Map the product experience that proves that line in the first session.",
        "Build a small proof library: results, customers, constraints, demos.",
        "Plan content as series tied to the job, not as calendar filler.",
        "Run one learning review each week: keep, cut, change.",
        "Only then design a campaign that amplifies what already works.",
      ],
    },
    {
      type: "p",
      text: "Related: [organic growth is earned](/essays/organic-growth-isnt-free-its-earned) and [small budgets don’t kill ideas](/essays/small-budgets-dont-kill-good-ideas-predictable-ones-do).",
    },
    {
      type: "takeaway",
      text: "Campaigns spike. Systems compound. Build the belief machine before you buy the megaphone.",
    },
    {
      type: "cta",
      lead: "nau studio builds positioning, proof and learning systems so campaigns stop starting from zero.",
      button: "Visit nau studio",
      href: "/",
    },
  ],
};

export default post;
