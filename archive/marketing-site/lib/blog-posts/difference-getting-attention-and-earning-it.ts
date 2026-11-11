import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "difference-getting-attention-and-earning-it",
  title: "Getting attention is easy. Earning it is the actual job.",
  excerpt: "Reach is easy to rent. Belief is harder, and more durable.",
  date: "August 24, 2026",
  category: "Go-to-Market",
  image: "/images/blog/blog-64-earn-attention.png",
  metaDescription:
    "The difference between getting attention and earning it: rented reach vs durable belief, and how to build systems that compound when the spend stops.",
  content: [
    {
      type: "p",
      text: "Getting attention is a solved problem if you have a card on file. Bid higher, post louder, stitch something embarrassing. Platforms will rent you eyeballs by the thousand until the invoice looks like a lifestyle choice.",
    },
    {
      type: "p",
      text: "Earning attention is different. Someone gives you mindshare because the work was useful, the story was true, a peer vouched, or the product created a moment worth repeating. Reach is easy to rent. Belief is harder, and more durable. If growth only works while the auction runs, you do not have an audience. You have a tab open on someone else’s marketplace.",
    },
    {
      type: "h2",
      text: "Rented reach vs earned belief",
    },
    {
      type: "table",
      headers: ["Signal", "Bad (getting)", "Good (earning)"],
      rows: [
        [
          "Growth plan",
          "Spend until spikes appear",
          "Useful work, proof, and peer recommendation",
        ],
        [
          "Metric",
          "Impressions only",
          "Return visits, mentions, conversions after spend stops",
        ],
        [
          "Creative",
          "Loud novelty every week",
          "True stories people choose to keep",
        ],
        [
          "When spend pauses",
          "Silence",
          "Residual memory and inbound",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad consumer brand:** boosting every post to hit reach targets while nothing is worth saving. **Good consumer brand:** one talkable moment, then paid support only after organic interest shows up.",
    },
    {
      type: "p",
      text: "**Bad travel / hospitality:** endless boosted room tours. **Good hospitality:** a neighbourhood or stay story guests retell, with a clear book path. Outdoor brands earn attention the same way when field truth beats lifestyle noise.",
    },
    {
      type: "image",
      src: "/images/blog/blog-64-earn-attention.png",
      alt: "Getting attention vs earning durable belief",
    },
    {
      type: "h2",
      text: "How to earn attention instead of only renting it",
    },
    {
      type: "ol",
      items: [
        "Separate vanity reach from belief metrics: saves, returns, referrals, revenue.",
        "Build one asset people return to (guide, tool, story series) before buying more impressions.",
        "Put proof and usefulness before novelty in the creative brief.",
        "Run a spend pause test: what still happens when ads stop for two weeks?",
        "Invest in peer and customer stories, not only brand voice.",
        "Only scale paid after organic behaviour shows the message sticks.",
      ],
    },
    {
      type: "p",
      text: "Related: [organic growth is not free; it is earned](/essays/organic-growth-isnt-free-its-earned). For measurement and brand memory, [Think with Google](https://www.thinkwithgoogle.com/) and [Nielsen Norman Group](https://www.nngroup.com/) are better guides than another reach dashboard.",
    },
    {
      type: "callout",
      title: "Attention is not belief",
      text: "A glance can be bought. Willingness to act, return, or recommend cannot. Optimise for storage, not only exposure.",
    },
    {
      type: "takeaway",
      text: "Getting attention is easy to rent. Earning it is the actual job, and it compounds when the spend stops.",
    },
    {
      type: "cta",
      lead: "Welcome to the journal. nau studio helps brands build systems that earn belief, not only dashboards that rent reach.",
      button: "Visit nau studio",
      href: "/",
    },
  ],
};

export default post;
