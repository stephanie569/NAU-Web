import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "growth-strategies-ignore-what-people-remember",
  title: "Growth hacks forget the one thing people actually remember",
  excerpt:
    "Emotion, not optimisation. Most growth strategies ignore what sticks in memory, and then wonder why retention is soft.",
  date: "August 8, 2026",
  category: "Content",
  image: "/images/blog/blog-50-emotion-memory.png",
  metaDescription:
    "Why growth strategies fail when they ignore emotion and memory: bad vs good tactics, examples, and practical memorable-moment design.",
  content: [
    {
      type: "p",
      text: "Growth strategy often behaves as if humans were spreadsheets with legs. Optimise the funnel, shorten the form, A/B the button colour, then act surprised when nobody remembers why they signed up. People remember how something made them feel. Everything else is a footnote the brain cheerfully misplaces.",
    },
    {
      type: "p",
      text: "Emotion is not decoration on top of growth. It is the retention mechanism wearing nicer clothes. If your playbook has fifty tactics and zero memorable moments, you are renting attention that will leave the moment a competitor offers a slightly prettier spreadsheet.",
    },
    {
      type: "h2",
      text: "Hack theatre vs memory design",
    },
    {
      type: "table",
      headers: ["Lever", "Bad", "Good"],
      rows: [
        [
          "Acquisition",
          "Clickbait that breaks the promise",
          "Hook that matches the product feeling",
        ],
        [
          "Onboarding",
          "Tutorial walls",
          "One early moment of delight or relief",
        ],
        [
          "Content",
          "Calendar filler",
          "Stories people retell without a prompt",
        ],
        [
          "Retention",
          "Discount panic",
          "Rituals, status, or usefulness that compounds",
        ],
        [
          "Metrics",
          "Only CTR and CAC",
          "Saves, shares, NPS themes, return reasons",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad SaaS growth:** endless lifecycle emails that sound like a polite robot chasing a overdue invoice. **Good SaaS growth:** a first-value moment so clear people tell a colleague unprompted. Slack’s early wedge was social and emotional (stop losing decisions), not a feature matrix.",
    },
    {
      type: "p",
      text: "**Bad consumer brand:** growth hacks that train people to wait for discounts. **Good consumer brand:** moments of care, craft, or surprise that become the story, which is why repair and longevity narratives outlast coupon codes.",
    },
    {
      type: "image",
      src: "/images/blog/blog-50-emotion-memory.png",
      alt: "Illustration of emotion and memory in growth",
    },
    {
      type: "h2",
      text: "Put memory back in the growth plan",
    },
    {
      type: "ol",
      items: [
        "Name the feeling you want someone to have after first use (relief, pride, calm, belonging).",
        "Design one moment in week one that creates that feeling on purpose.",
        "Audit acquisition creative: does it promise that feeling or a different product?",
        "Replace one pure optimisation experiment with a memorability experiment this sprint.",
        "Interview five retained users: what do they remember? Build more of that.",
        "Drop tactics that raise conversion while training forgettable, low-intent behaviour.",
      ],
    },
    {
      type: "p",
      text: "Maya Angelou’s line about people remembering how you made them feel is over-quoted because it keeps being true. Related: [people remember how a brand made them feel](/essays/people-remember-how-brand-made-them-feel).",
    },
    {
      type: "callout",
      title: "Optimisation is not the enemy",
      text: "Optimise the path. Do not optimise away the reason anyone cared. A faster form into a forgettable product is still a forgettable product.",
    },
    {
      type: "takeaway",
      text: "Growth hacks forget what people remember. Design emotion on purpose, then measure whether it stuck.",
    },
    {
      type: "cta",
      lead: "nau studio builds growth systems around memorable product moments, not only funnel tweaks.",
      button: "Visit nau studio",
      href: "/",
    },
  ],
};

export default post;
