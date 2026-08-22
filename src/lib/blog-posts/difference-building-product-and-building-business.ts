import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "difference-building-product-and-building-business",
  title: "Building a product ≠ building a business. Here's the gap.",
  excerpt:
    "Products ship features. Businesses create repeatable value exchange. How positioning, pricing, retention, and operational clarity turn screens into a company.",
  date: "July 5, 2026",
  category: "Research & Positioning",
  image: "/images/blog/blog-20-product-business.png",
  metaDescription:
    "The difference between building a product and building a business: strategy, pricing, retention, and distribution that turn features into a company.",
  content: [
    {
      type: "p",
      text: "Building a product and building a business are related, and dangerously easy to confuse. A product can be elegant and still not be a business. Elegance without economics is a hobby with better typography.",
    },
    {
      type: "p",
      text: "A business needs a repeatable reason customers pay and stay. That means positioning, pricing, retention, and distribution, not only features. Shipping screens without commercial clarity is how teams stay busy while the company stays optional.",
    },
    {
      type: "h2",
      text: "Product work vs business work",
    },
    {
      type: "table",
      headers: ["Lens", "Building a product", "Building a business"],
      rows: [
        [
          "Focus",
          "What it does",
          "Who pays, why, how often, why they return",
        ],
        [
          "Quality bar",
          "Feature craft",
          "Offer clarity, distribution, economics",
        ],
        [
          "Success",
          "Shipped and polished",
          "Repeatable value exchange",
        ],
        [
          "Risk",
          "Incomplete UX",
          "Nobody will pay, or nobody returns",
        ],
        [
          "Next step",
          "Another feature",
          "Pricing, retention, or channel proof",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad SaaS pattern:** endless feature releases with a pricing page that still says “contact us” and no retention narrative. **Good SaaS pattern:** a clear buyer, a price that matches the job, and a first-win path that makes renewal rational.",
    },
    {
      type: "p",
      text: "**Bad consumer / hospitality pattern:** beautiful brand work with no path to repeat purchase or rebooking. **Good consumer, outdoor, or travel business:** the product experience creates a reason to return, and operations can deliver it without heroics.",
    },
    {
      type: "image",
      src: "/images/blog/blog-20-product-business.png",
      alt: "Gap between building a product and building a business",
    },
    {
      type: "h2",
      text: "How to close the product-to-business gap",
    },
    {
      type: "ol",
      items: [
        "Write who pays and what progress they buy in one sentence.",
        "Put a real price (or clear package) in front of real prospects this month.",
        "Define the retention reason: what would make them miss you if you vanished.",
        "Map one distribution path you can run repeatedly, not a one-off launch.",
        "Freeze features that do not serve payment, activation, or retention for 30 days.",
        "Review weekly: learning about willingness to pay beats shipping theatre.",
      ],
    },
    {
      type: "p",
      text: "Start with [how I decide whether a product is worth building](/essays/how-i-decide-whether-product-worth-building). For commercial clarity, [Y Combinator’s Library](https://www.ycombinator.com/library) and [First Round Review](https://review.firstround.com/) stay practical on pricing, retention, and focus.",
    },
    {
      type: "takeaway",
      text: "Products ship. Businesses create repeatable value exchange. Close the gap on purpose.",
    },
    {
      type: "cta",
      lead: "Welcome to the journal. nau studio helps founders connect product craft to positioning, pricing, and go-to-market so screens become a company.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
