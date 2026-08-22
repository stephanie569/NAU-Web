import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "product-doesnt-have-marketing-problem-clarity-problem",
  title:
    "You don't have a marketing problem. You have a clarity problem.",
  excerpt:
    "When growth stalls, founders buy ads. More often, customers still cannot explain what you do in one clear sentence.",
  date: "July 28, 2026",
  category: "Research & Positioning",
  image: "/images/blog/blog-01-clarity.png",
  metaDescription:
    "Why stalled startup growth is usually a clarity problem, not a marketing problem, and how to fix positioning and messaging before you spend more.",
  content: [
    {
      type: "p",
      text: "When a product stops growing, the default move is more marketing. More channels. More creatives. More spend. Sometimes that is the right call. More often, marketing is being asked to paper over a product story that is still fuzzy, which is a bit like hiring a louder town crier for a map nobody can read.",
    },
    {
      type: "p",
      text: "If a stranger cannot explain what you do, who it is for, and why it matters after thirty seconds on your site, you do not have a distribution problem. You have a clarity problem. Paid media will only make the confusion travel faster.",
    },
    {
      type: "h2",
      text: "Marketing problem vs clarity problem",
    },
    {
      type: "table",
      headers: ["Signal", "Bad diagnosis", "Good diagnosis"],
      rows: [
        [
          "Low conversion",
          "“Creative is tired”",
          "Offer still fuzzy; hero cannot name the job",
        ],
        [
          "High CAC",
          "“Wrong channel”",
          "Market understands you and still declines",
        ],
        [
          "Sales cycles drag",
          "“Need more nurture”",
          "No crisp decision frame or proof",
        ],
        [
          "Every channel fails",
          "“Need a new agency”",
          "Category story is shared and unclear",
        ],
        [
          "Team language",
          "Internal jargon on the homepage",
          "Customer sentences on the homepage",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad outdoor brand site:** mission poetry (“Adventure awaits”) and a feature grid. Visitors bounce because they cannot place the product. **Good outdoor brand site:** who it is for, the weather or trip problem, proof the gear survives it, one shop path. Same category. Different clarity.",
    },
    {
      type: "p",
      text: "**Bad SaaS:** “AI-native operating system for modern teams.” **Good SaaS:** “Stop losing decisions in email” (or whatever the real wedge is) with a screenshot of that outcome. Clarity is a constraint. Constraint is what makes marketing cheap.",
    },
    {
      type: "image",
      src: "/images/blog/blog-01-clarity.png",
      alt: "Clarity stack before marketing spend",
    },
    {
      type: "h2",
      text: "How to fix clarity before you spend",
    },
    {
      type: "ol",
      items: [
        "Ask five outsiders to explain your offer after 30 seconds on the homepage. Record the gaps.",
        "Rewrite the hero in their words: who, outcome, why now. Cut adjectives.",
        "Add one proof within one scroll that would survive “says who?”",
        "Align ads, sales deck, and onboarding to the same sentence.",
        "Freeze new channel experiments until conversion and comprehension improve.",
        "Only then increase spend. Amplify clarity, do not rent confusion.",
      ],
    },
    {
      type: "p",
      text: "Related: [I audited 50 product brand sites](/essays/audited-50-startup-websites-10-mistakes) and [why startup websites fail in the first 10 seconds](/essays/why-startup-websites-fail-first-10-seconds). [Baymard Institute](https://baymard.com/) and [Nielsen Norman Group](https://www.nngroup.com/) remain useful on comprehension and conversion.",
    },
    {
      type: "callout",
      title: "Quick test",
      text: "If three teammates write three different one-liners, the market will write a fourth: “I’m not sure.” Fix the sentence before you buy more eyes.",
    },
    {
      type: "takeaway",
      text: "Marketing amplifies. Clarity decides whether amplification helps. Fix the sentence first.",
    },
    {
      type: "cta",
      lead: "nau studio starts with research and positioning so your next campaign spends on clarity, not confusion.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
