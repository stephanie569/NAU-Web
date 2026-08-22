import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "what-founders-get-wrong-about-product-market-fit",
  title: "What product brands get wrong about PMF (every single time)",
  excerpt:
    "Product-market fit is not a slide. It is whether real customers keep choosing the thing you make.",
  date: "July 21, 2026",
  category: "Research & Positioning",
  image: "/images/blog/blog-07-pmf-wrong.png",
  metaDescription:
    "What product brands get wrong about product-market fit, and how to treat it as a moving target, not a milestone.",
  content: [
    {
      type: "p",
      text: "Product-market fit is treated like a graduation ceremony. You pass a milestone, post the slide, and assume the universe will keep hiring you forever. It will not. Markets drift. Alternatives appear. Your clarity decays if you stop earning it.",
    },
    {
      type: "p",
      text: "What brands get wrong is mistaking interest for fit, growth for retention, and a lucky week for a durable job in the customer’s life. Fit is not declared. It is observed in repeat choice and willingness to recommend.",
    },
    {
      type: "h2",
      text: "PMF theatre vs PMF evidence",
    },
    {
      type: "table",
      headers: ["Signal", "Bad interpretation", "Good interpretation"],
      rows: [
        [
          "Waitlist",
          "“We have PMF”",
          "Interest. Not yet retention.",
        ],
        [
          "Revenue spike",
          "“We are done positioning”",
          "Check activation and repeat purchase",
        ],
        [
          "Press",
          "“The market gets us”",
          "Strangers still need a clear sentence",
        ],
        [
          "Roadmap",
          "Add for every new lead type",
          "Protect the job that already works",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad:** declaring fit because inbound is busy while churn and confusion stay high. **Good:** measuring whether customers can explain the value, keep using it, and would be upset if it disappeared. Sean Ellis popularised a version of that last test for a reason.",
    },
    {
      type: "image",
      src: "/images/blog/blog-07-pmf-wrong.png",
      alt: "What product brands get wrong about product-market fit",
    },
    {
      type: "h2",
      text: "Treat PMF as a moving target",
    },
    {
      type: "ol",
      items: [
        "Write the job customers hire you for in their words.",
        "Ask ten users what they would miss if you vanished.",
        "Track activation and retention alongside acquisition.",
        "Freeze features that dilute the core job for 30 days.",
        "Rewrite homepage and onboarding when customer language drifts.",
        "Re-run the fit check every quarter, not only after a fundraise narrative.",
      ],
    },
    {
      type: "p",
      text: "Also: [great products still fail before PMF](/essays/why-great-products-fail-before-product-market-fit) and [PMF as a moving target](/essays/product-market-fit-isnt-milestone-moving-target).",
    },
    {
      type: "takeaway",
      text: "Fit is repeat choice in customer language, not a milestone on a slide.",
    },
    {
      type: "cta",
      lead: "nau studio helps brands prove and renew fit with research, positioning and a clearer product story.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
