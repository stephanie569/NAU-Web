import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "first-1000-pounds-startup-spent-wrong-place",
  title: "Your first £1,000? You're probably spending it wrong.",
  excerpt:
    "Where early product brands waste budget, and what to fund before ads, logos, or tool stacks.",
  date: "June 28, 2026",
  category: "Research & Positioning",
  image: "/images/blog/blog-35-first-1000.png",
  metaDescription:
    "Where to spend a startup’s first £1,000: clarity and proof before ads, logos, and unused tools, with a bad vs good allocation.",
  content: [
    {
      type: "p",
      text: "The first £1,000 you spend on a startup is a strategy decision disguised as shopping. Most founders spend it on logos, software seats, stock photography, or a burst of ads before they have an offer clear enough to convert. Looking busy is cheaper emotionally than getting clear. It is more expensive commercially, which the universe finds quietly amusing.",
    },
    {
      type: "p",
      text: "The budget is rarely the problem. The sequence is. Early money should buy learning and belief: customer conversations, a sharp offer page, and proof someone cares. Decoration and dashboards can wait until there is something worth decorating.",
    },
    {
      type: "h2",
      text: "Wrong first spend vs useful first spend",
    },
    {
      type: "table",
      headers: ["Category", "Bad spend", "Good spend"],
      rows: [
        [
          "Brand",
          "Full identity before positioning",
          "One clear offer page and a temporary mark",
        ],
        [
          "Tools",
          "Premium seats for unused workflows",
          "The minimum stack that ships learning",
        ],
        [
          "Ads",
          "Broad campaigns with a fuzzy landing page",
          "Small tests only after the offer is sayable",
        ],
        [
          "Research",
          "None, because research feels slow",
          "Paid interviews and prototype feedback",
        ],
        [
          "Proof",
          "Stock photos of success",
          "One case, demo, or before/after that is real",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad early SaaS:** Notion templates, a custom logo, and Meta ads pointing at a homepage that still cannot name the job. Busy. Soft results. **Good early SaaS:** fifty pounds on interview incentives, a plain landing page in customer language, and a waitlist with a reason to join.",
    },
    {
      type: "p",
      text: "**Bad consumer brand:** packaging mockups and influencer seeding before anyone validated the problem. **Good consumer pattern:** sample runs, street or inbox feedback, then identity once the story sticks.",
    },
    {
      type: "image",
      src: "/images/blog/blog-35-first-1000.png",
      alt: "Illustration about spending the first thousand pounds wisely",
    },
    {
      type: "h2",
      text: "A better sequence for the first £1,000",
    },
    {
      type: "ol",
      items: [
        "Budget £200 to £400 for customer conversations or prototype tests with incentives.",
        "Spend the next chunk on a single offer page that a stranger can understand in ten seconds.",
        "Add one piece of proof: screenshot, quote, demo, or sample result.",
        "Only then test a small paid or outbound experiment against that page.",
        "Delay identity systems and unused tools until the offer converts at least a few real people.",
        "Write the next £1,000 plan only after you list what you learned, not what looked professional.",
      ],
    },
    {
      type: "p",
      text: "[Y Combinator](https://www.ycombinator.com/library) keeps pointing founders toward users before scale. Related: [before you spend £10,000 on marketing, ask five questions](/essays/before-spend-10000-marketing-five-questions).",
    },
    {
      type: "callout",
      title: "A note on the number",
      text: "£1,000 is a useful unit, not a universal law. Keep the principle: buy learning and belief before decoration and scale.",
    },
    {
      type: "takeaway",
      text: "Spend the first £1,000 on clarity and proof. Ads and logos amplify whatever you already are.",
    },
    {
      type: "cta",
      lead: "nau studio helps early product brands sequence spend so the first budget buys learning, not decoration.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
