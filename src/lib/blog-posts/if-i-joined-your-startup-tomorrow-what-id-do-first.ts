import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "if-i-joined-your-startup-tomorrow-what-id-do-first",
  title: "If I joined your product brand tomorrow, day one looks like this",
  excerpt:
    "Day-one moves for a product brand: diagnose the story, fix clarity, then choose what to launch. Bad vs good first weeks.",
  date: "July 17, 2026",
  category: "Go-to-Market",
  image: "/images/blog/blog-10-joined.png",
  metaDescription:
    "What I'd do first if I joined a product brand tomorrow: research, positioning and launch clarity before more content. Bad vs good first moves and a practical sequence.",
  content: [
    {
      type: "p",
      text: "If I joined tomorrow, I would not open the content calendar first. That would be like rearranging deckchairs on a ship that has not yet decided which ocean it is crossing. Day one is diagnosis. Day one is not a rebrand workshop with snacks.",
    },
    {
      type: "p",
      text: "Early brands often confuse motion with progress. More posts, more ads, more “awareness.” The expensive question is simpler: can a stranger explain what you sell, who it is for, and why it matters, without a founder in the room?",
    },
    {
      type: "h2",
      text: "Bad first week vs good first week",
    },
    {
      type: "table",
      headers: ["Focus", "Bad (busy)", "Good (decisive)"],
      rows: [
        [
          "Inputs",
          "Internal opinions and last quarter’s deck",
          "Customer calls, lost deals, support tickets",
        ],
        [
          "Site",
          "Visual refresh while the headline stays vague",
          "One clear promise + proof in the first viewport",
        ],
        [
          "Content",
          "Fill the feed to look alive",
          "Freeze noise until the story is repeatable",
        ],
        [
          "Launch",
          "Ship the next feature because it is on the roadmap",
          "Ship the smallest offer that proves the job",
        ],
        [
          "Team ritual",
          "Status meetings about channels",
          "One shared sentence for audience, job, proof",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad:** spending week one on brand colours, a new logo mark, and a LinkedIn announcement that “something big is coming.” The market does not care that something is coming. It cares whether the something is for them. **Good:** five conversations with recent buyers and five with people who almost bought, then rewrite the homepage from their language.",
    },
    {
      type: "p",
      text: "**Bad outdoor startup day one:** plan a launch film. **Good day one:** map where people stall between “interested” and “ordered,” then fix the stall before you amplify it.",
    },
    {
      type: "image",
      src: "/images/blog/blog-10-joined.png",
      alt: "Day-one product brand diagnostic checklist",
    },
    {
      type: "h2",
      text: "The first-week sequence",
    },
    {
      type: "ol",
      items: [
        "Read the homepage cold. Write one sentence: who, what changes, what next.",
        "Interview five customers and five near-misses. Capture their words verbatim.",
        "List the top three stalls in the journey (site, checkout, onboarding, support).",
        "Rewrite the hero and primary CTA from customer language, not roadmap language.",
        "Cut or pause one active campaign that amplifies an unclear offer.",
        "Define the next launch as a belief test, not a feature dump.",
      ],
    },
    {
      type: "p",
      text: "More depth: [if your product is not growing, start here](/essays/if-product-isnt-growing-start-here), [60-minute repositioning](/essays/how-id-reposition-your-startup-in-60-minutes), and [what founders actually need is not more marketing](/essays/founders-actually-need-isnt-more-marketing).",
    },
    {
      type: "takeaway",
      text: "Day one is not content. Day one is whether the product story can survive contact with a stranger.",
    },
    {
      type: "cta",
      lead: "nau studio starts with research and positioning so day one is diagnosis, not noise.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
