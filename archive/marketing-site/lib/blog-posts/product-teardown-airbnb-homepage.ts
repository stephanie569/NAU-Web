import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "product-teardown-airbnb-homepage",
  title: "Airbnb's homepage: what I'd change (and why)",
  excerpt:
    "A respectful teardown of Airbnb’s homepage: what works for clarity and trust, what to tighten, and principles startups can reuse.",
  date: "July 4, 2026",
  category: "Go-to-Market",
  image: "/images/blog/blog-21-airbnb.png",
  metaDescription:
    "Product teardown of Airbnb’s homepage: clarity, trust, and conversion lessons startups can apply without copying marketplace complexity.",
  content: [
    {
      type: "p",
      text: "Airbnb’s homepage is a masterclass in category ownership, and still has tradeoffs worth studying. Teardowns are useful when they extract principles startups can use, not when they dunk on brands that have already earned their place. Airbnb can afford complexity most early products should not imitate. That gap is the lesson, and it is more useful than a roast.",
    },
    {
      type: "p",
      text: "Read the homepage as a decision surface for a cold visitor: what already works for job clarity and trust, what I would tighten for learning value, and how to translate the principles into a startup site that is not a marketplace.",
    },
    {
      type: "h2",
      text: "What works vs what startups should not copy blindly",
    },
    {
      type: "table",
      headers: ["Area", "Bad copy (early startup)", "Good lesson from Airbnb"],
      rows: [
        [
          "Job clarity",
          "Vague lifestyle poetry",
          "Search and stay intent are obvious fast",
        ],
        [
          "Trust",
          "Adjective claims with no context",
          "Visual proof of places and stays as the product",
        ],
        [
          "Complexity",
          "Copy every module because Airbnb has it",
          "Earn modules after the core job converts",
        ],
        [
          "Primary action",
          "Five equal CTAs",
          "One dominant path: find a stay",
        ],
        [
          "Cold visitor",
          "Assume brand awareness",
          "Still answer “what is this?” without a lecture",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad startup imitation:** rebuild Airbnb’s density on day one (categories, inspiration rails, loyalty prompts) before anyone understands your offer. **Good translation:** borrow the discipline of a clear job and a dominant action. Hospitality brands should remove booking anxiety first. Consumer brands should show the product in the job, not a collage of vibes.",
    },
    {
      type: "p",
      text: "**What I would tighten for learning:** for a cold visitor who is not already in the Airbnb habit, reduce decorative choice early and surface one sharper proof of why a stay here beats the alternative. Airbnb’s brand can carry ambiguity. Most startups cannot.",
    },
    {
      type: "image",
      src: "/images/blog/blog-21-airbnb.png",
      alt: "Airbnb homepage teardown notes for clarity and trust",
    },
    {
      type: "h2",
      text: "Principles to steal for your homepage",
    },
    {
      type: "ol",
      items: [
        "Name the job above the fold in language a stranger uses.",
        "Make one primary action dominate. Secondary paths stay secondary.",
        "Show the product as proof, not stock metaphor.",
        "Cut modules you have not earned. Density is a privilege of fit.",
        "Test with a cold visitor: can they say what you do and what to click next in ten seconds?",
        "Only then add inspiration, categories, or loyalty layers.",
      ],
    },
    {
      type: "p",
      text: "Related: [why startup websites fail in the first 10 seconds](/essays/why-startup-websites-fail-first-10-seconds) and [landing page reviews that help or hurt](/essays/landing-page-review-helping-hurting-conversions). [Baymard Institute](https://baymard.com/) and [Nielsen Norman Group](https://www.nngroup.com/) remain useful on homepage clarity and trust.",
    },
    {
      type: "takeaway",
      text: "Steal Airbnb’s clarity discipline, not its complexity. Earn density after the core job converts.",
    },
    {
      type: "cta",
      lead: "nau studio teardowns and redesigns product brand sites for clarity, trust, and a single strong conversion path.",
      button: "Visit nau studio",
      href: "/",
    },
  ],
};

export default post;
