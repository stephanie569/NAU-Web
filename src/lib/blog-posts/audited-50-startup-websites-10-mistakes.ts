import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "audited-50-startup-websites-10-mistakes",
  title:
    "I audited 50 product brand sites. Same 10 fails, every time.",
  excerpt:
    "Fifty brand sites across outdoor, travel and consumer goods. Same conversion habits: vague headlines, weak proof, cluttered heroes.",
  date: "July 18, 2026",
  category: "Go-to-Market",
  image: "/images/blog/blog-32-50-websites.png",
  metaDescription:
    "Ten recurring mistakes on product brand websites, and how to fix hero clarity, proof and conversion paths before you spend on traffic.",
  content: [
    {
      type: "p",
      text: "After fifty brand sites across outdoor, travel, and consumer goods, the surprises ran out early. The same fails showed up with the reliability of a timetable, which is impressive for chaos and less impressive for conversion.",
    },
    {
      type: "p",
      text: "Traffic is rarely the first problem. Clarity is. Sites ask visitors to decode category jargon, hunt for proof, and guess the next step. Paid media then amplifies confusion at a premium. Fix the page before you buy more people to bounce from it.",
    },
    {
      type: "h2",
      text: "Bad vs good homepage habits",
    },
    {
      type: "table",
      headers: ["Area", "Bad", "Good"],
      rows: [
        [
          "Headline",
          "Vague mission poetry",
          "Who it is for + outcome in one line",
        ],
        [
          "Hero",
          "Stock collage + five CTAs",
          "One visual job, one primary action",
        ],
        [
          "Proof",
          "“Trusted by teams” with no names",
          "Specific results, logos, or quotes with context",
        ],
        [
          "Offer",
          "Feature list as the story",
          "Problem, outcome, then features as support",
        ],
        [
          "Nav / CTA",
          "Everything is equally urgent",
          "One clear path; secondary links stay secondary",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad outdoor brand:** hero says “Adventure awaits” over a generic trail photo, CTA buried under three competing buttons. **Good outdoor brand:** names the use case (all-day weather comfort), shows the product in that condition, and one shop or find-a-dealer path.",
    },
    {
      type: "p",
      text: "**Bad travel / hospitality site:** room galleries that look like every OTA listing, with pricing and booking three clicks deep. **Good hospitality site:** removes booking anxiety first (neighbourhood, timing, what to expect), then a single book path. Same rooms. Different reason to trust.",
    },
    {
      type: "image",
      src: "/images/blog/blog-32-50-websites.png",
      alt: "Common startup website mistakes from fifty brand audits",
    },
    {
      type: "h2",
      text: "How to fix the site before you buy traffic",
    },
    {
      type: "ol",
      items: [
        "Rewrite the hero in customer language: who, what outcome, why now.",
        "Cut to one primary CTA above the fold. Move the rest below or into nav.",
        "Add proof within one scroll: result, named customer, or specific constraint you solved.",
        "Remove decorative sections that do not answer “why us” or “what next.”",
        "Run a five-minute stranger test: can they explain the offer and next step without coaching?",
        "Only then increase spend. Measure conversion, not just sessions.",
      ],
    },
    {
      type: "p",
      text: "For conversion research patterns, [Baymard Institute](https://baymard.com/) and [Nielsen Norman Group](https://www.nngroup.com/) remain useful baselines. Internally, pair this with [why startup websites fail in the first 10 seconds](/essays/why-startup-websites-fail-first-10-seconds).",
    },
    {
      type: "callout",
      title: "The expensive pattern",
      text: "Beautiful site, unclear offer, rising ad budget. That is not a growth plan. It is an amplifier for ambiguity.",
    },
    {
      type: "takeaway",
      text: "The same ten fails keep showing up because clarity is harder than design. Fix the message before you buy more eyes.",
    },
    {
      type: "cta",
      lead: "Welcome to the journal. nau studio audits product brand sites for clarity, proof, and conversion paths before you scale spend.",
      button: "Visit nau studio",
      href: "/",
    },
  ],
};

export default post;
