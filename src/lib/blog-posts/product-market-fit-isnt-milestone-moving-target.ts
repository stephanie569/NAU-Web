import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "product-market-fit-isnt-milestone-moving-target",
  title: "PMF isn't a milestone. It's a moving target.",
  excerpt:
    "“We've got PMF” is often a pause button disguised as progress. Fit is a relationship you renegotiate.",
  date: "August 28, 2026",
  category: "Research & Positioning",
  image: "/images/blog/blog-60-pmf-moving.png",
  metaDescription:
    "Product-market fit isn't a one-time milestone. Why “we've got PMF” can freeze learning, and how to keep fit as markets and products shift.",
  content: [
    {
      type: "p",
      text: "Somewhere between the seed round and the Series A dinner, someone declares product-market fit. The phrase is spoken like a belt earned in martial arts: permanent, framed, no longer up for debate. Hiring accelerates. Roadmaps thicken. Curiosity softens. After all, you have got it. The universe, meanwhile, continues to rearrange itself without filing a memo.",
    },
    {
      type: "p",
      text: "“We’ve got PMF” is often a pause button disguised as progress. Markets move. Competitors copy. Customers’ jobs change. Your own product drifts. Fit is not a certificate. It is a relationship under continuous renegotiation.",
    },
    {
      type: "h2",
      text: "Milestone mindset vs moving-target mindset",
    },
    {
      type: "table",
      headers: ["Topic", "Bad (milestone)", "Good (moving target)"],
      rows: [
        [
          "Evidence",
          "One good quarter or a viral launch",
          "Retention, referrals, and willingness to pay over time",
        ],
        [
          "Learning",
          "Stops after the declaration",
          "Continues with cohort and interview rhythms",
        ],
        [
          "Roadmap",
          "Feature sprawl “because we can”",
          "Defend the job that earned fit",
        ],
        [
          "Messaging",
          "Frozen tagline from last year",
          "Updated when customer language shifts",
        ],
        [
          "Competition",
          "Ignored until panic",
          "Watched as a signal that the job is valuable",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad consumer brand:** declares fit after a holiday spike, then ignores return rates and support themes. **Good pattern:** treat spikes as weather and retention as climate. Outdoor brands that stay fit keep proving the product in the conditions they sold.",
    },
    {
      type: "p",
      text: "**Bad SaaS:** “We hit PMF” after one enterprise logo, then builds for every adjacent request. **Good SaaS:** keep interviewing the core job, watch the week retention bends, and refuse features that dilute the wedge. Fit is maintained, not archived.",
    },
    {
      type: "image",
      src: "/images/blog/blog-60-pmf-moving.png",
      alt: "Product-market fit as a moving target, not a certificate",
    },
    {
      type: "h2",
      text: "How to keep fit without freezing",
    },
    {
      type: "ol",
      items: [
        "Define fit in behaviours, not vibes: retention, referrals, expansion, or repeat purchase.",
        "Schedule a monthly “fit check”: five customer conversations plus one cohort chart.",
        "Rewrite the homepage if customer language has drifted more than your copy has.",
        "Cut or freeze roadmap items that do not serve the job that earned retention.",
        "Watch competitors as evidence of the job’s value, not as a feature shopping list.",
        "Revisit pricing and packaging when the job’s urgency or alternatives change.",
      ],
    },
    {
      type: "p",
      text: "Related: [what founders get wrong about product-market fit](/essays/what-founders-get-wrong-about-product-market-fit) and [why great products fail before product-market fit](/essays/why-great-products-fail-before-product-market-fit). [Lenny's Newsletter](https://www.lennysnewsletter.com/) and [First Round Review](https://review.firstround.com/) often treat PMF as a living system, not a trophy.",
    },
    {
      type: "takeaway",
      text: "PMF is not a belt you hang on the wall. It is a relationship you renegotiate while the market keeps moving.",
    },
    {
      type: "cta",
      lead: "nau studio helps product brands keep fit: research, positioning, and go-to-market that move when the job moves.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
