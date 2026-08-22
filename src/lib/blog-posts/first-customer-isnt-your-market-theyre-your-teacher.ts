import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "first-customer-isnt-your-market-theyre-your-teacher",
  title: "Your first customer isn't a market. They're your teacher.",
  excerpt:
    "Treat early buyers as a curriculum, not a crowd to scale. Extract the lesson before you industrialise the anecdote.",
  date: "August 30, 2026",
  category: "Research & Positioning",
  image: "/images/blog/blog-58-first-customer.png",
  metaDescription:
    "Why your first customer is a teacher not a market: bad vs good early-revenue habits, examples, and a practical interview curriculum.",
  content: [
    {
      type: "p",
      text: "The champagne moment arrives early. Someone pays. A card clears. Suddenly the roadmap has a mandate: build whatever this person just asked for, then find a thousand more like them. It is a very human reaction, and also an excellent way to industrialise an anecdote while congratulating yourself for product-market fit.",
    },
    {
      type: "p",
      text: "The first customer is not your market. They are your teacher. Early buyers tolerate incompleteness, often know you, and may buy to help. Their feature requests feel like prophecy. They are usually autobiography. Treat them as curriculum and you might learn what the market actually is.",
    },
    {
      type: "h2",
      text: "Scaling the anecdote vs learning from it",
    },
    {
      type: "table",
      headers: ["Moment", "Bad move", "Good move"],
      rows: [
        [
          "First payment",
          "Rewrite the roadmap around one request",
          "Interview for job, alternatives, and why now",
        ],
        [
          "Feature ask",
          "Ship custom work as product",
          "Ask who else has the same job this week",
        ],
        [
          "Pricing",
          "Assume the first price is the market",
          "Test willingness with two more similar buyers",
        ],
        [
          "ICP",
          "Clone the first logo on LinkedIn",
          "Separate helpful buyers from repeatable buyers",
        ],
        [
          "Proof",
          "Call one sale product-market fit",
          "Look for the second and third independent yes",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad B2B pattern:** a design partner who loves you becomes the product. You build a services company with SaaS branding and a roadmap only one CFO understands. **Good B2B pattern:** extract the job they hired you for, then find others with the same job who never met the founder.",
    },
    {
      type: "p",
      text: "**Bad consumer brand:** friends-and-family revenue treated as category demand. **Good consumer brand:** early buyers as teachers of language, objections, and the moment they almost did not buy.",
    },
    {
      type: "image",
      src: "/images/blog/blog-58-first-customer.png",
      alt: "Illustration of learning from a first customer",
    },
    {
      type: "h2",
      text: "A curriculum for the first ten buyers",
    },
    {
      type: "ol",
      items: [
        "After each early sale, ask: what did you try before us, why us now, what almost stopped you?",
        "Write the job in their words. If you cannot, you are still guessing.",
        "Tag which requests are unique to this buyer versus likely shared.",
        "Do not add a feature until two more independent buyers describe the same job.",
        "Separate love (relationship) from demand (repeatable pain and willingness to pay).",
        "Declare product-market fit only when strangers convert without founder heroics.",
      ],
    },
    {
      type: "p",
      text: "Jobs-to-be-done framing from [Harvard Business Review](https://hbr.org/) still helps separate progress from polite feedback. Related: [what founders get wrong about product-market fit](/essays/what-founders-get-wrong-about-product-market-fit).",
    },
    {
      type: "callout",
      title: "Revenue is evidence, not a blank cheque",
      text: "Celebrate the sale. Then run the interview. Champagne and curiosity can share a calendar invite.",
    },
    {
      type: "takeaway",
      text: "Your first customer is a teacher. Scale the lesson, not the anecdote.",
    },
    {
      type: "cta",
      lead: "nau studio helps founders turn early buyers into positioning and product decisions, not custom roadmaps.",
      button: "Visit nau studio",
      href: "/",
    },
  ],
};

export default post;
