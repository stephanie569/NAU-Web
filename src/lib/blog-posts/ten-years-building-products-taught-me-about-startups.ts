import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "ten-years-building-products-taught-me-about-startups",
  title: "10 years with products. These lessons actually stuck.",
  excerpt:
    "What building and launching physical products taught me about clarity, systems and stories that sell.",
  date: "July 16, 2026",
  category: "Research & Positioning",
  image: "/images/blog/blog-11-ten-years.png",
  metaDescription:
    "Lessons from a decade of product work: clarity beats cleverness, systems beat spikes, and the best marketing starts as product strategy.",
  content: [
    {
      type: "p",
      text: "Ten years of product work teaches you that the universe is indifferent to how hard you worked on the wrong sentence. Effort is not a strategy. Cleverness is not comprehension. And a launch day is not the same thing as a reason to exist.",
    },
    {
      type: "p",
      text: "The lessons that stuck were boring in the best way: clarify the job, write the story before the logo, build systems that compound, and treat marketing as product strategy with a louder microphone.",
    },
    {
      type: "h2",
      text: "What fails vs what compounds",
    },
    {
      type: "table",
      headers: ["Lesson", "Bad habit", "Good habit"],
      rows: [
        [
          "Clarity",
          "Clever category slogans",
          "Customer language on the first screen",
        ],
        [
          "Story",
          "Logo and palette first",
          "Job, promise, and proof before brand kit",
        ],
        [
          "Growth",
          "Campaign spikes with no retention",
          "Systems for positioning, proof, and learning",
        ],
        [
          "Shipping",
          "Features for the roadmap photo",
          "Cuts that protect time-to-value",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad:** treating every year as a fresh brand exercise while the product still cannot explain itself in one breath. **Good:** locking a narrow promise, proving it in the experience, then amplifying only what already works offline and on the site.",
    },
    {
      type: "image",
      src: "/images/blog/blog-11-ten-years.png",
      alt: "Lessons from ten years building and launching products",
    },
    {
      type: "h2",
      text: "Apply the decade in one week",
    },
    {
      type: "ol",
      items: [
        "Write the customer job in one sentence without your product name.",
        "Rewrite the homepage headline from that sentence alone.",
        "List every feature that does not serve the job and freeze it for 30 days.",
        "Collect three proof points that sit next to the claim, not below the fold.",
        "Replace one campaign idea with a system: recurring proof, content series, or onboarding loop.",
        "Ask five outsiders to explain what you sell. Align on their words, not yours.",
      ],
    },
    {
      type: "p",
      text: "Deeper reading: [why I care more about systems than campaigns](/essays/why-i-care-more-about-systems-than-campaigns) and [I don’t open Figma first](/essays/why-i-start-every-project-without-opening-figma).",
    },
    {
      type: "takeaway",
      text: "Clarity beats cleverness. Systems beat spikes. Marketing that works starts as product strategy.",
    },
    {
      type: "cta",
      lead: "nau studio turns a decade of product lessons into research, positioning, and launches that hold up after week one.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
