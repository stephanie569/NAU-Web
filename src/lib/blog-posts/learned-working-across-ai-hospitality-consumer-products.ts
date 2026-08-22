import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "learned-working-across-ai-hospitality-consumer-products",
  title:
    "What outdoor, travel and consumer brands taught me the hard way",
  excerpt:
    "Cross-category lessons that transfer when you build physical products, and what does not. Bad vs good habits.",
  date: "July 10, 2026",
  category: "Research & Positioning",
  image: "/images/blog/blog-16-ai-hospitality.png",
  metaDescription:
    "What working across outdoor, travel and consumer product categories taught me about positioning, launches and storytelling that transfers, with practical next steps.",
  content: [
    {
      type: "p",
      text: "Working across categories is a fine way to discover that most “unique” brand problems are recycled with better lighting. Outdoor gear, travel stays, and consumer products argue in different accents. They still fail for similar reasons: unclear jobs, borrowed language, and launches that assume the market already cares. The galaxy of niches is large. The failure modes are not.",
    },
    {
      type: "p",
      text: "What transfers is method. What does not transfer is costume. Copying a hospitality tone onto a technical jacket, or a SaaS funnel onto a weekend bag, is how brands become fluent in the wrong language.",
    },
    {
      type: "h2",
      text: "What transfers vs what does not",
    },
    {
      type: "table",
      headers: ["Topic", "Bad (copy the costume)", "Good (copy the method)"],
      rows: [
        [
          "Positioning",
          "Borrow a competitor’s adjectives",
          "Interview for the job in this category’s words",
        ],
        [
          "Proof",
          "Awards and mood only",
          "Use conditions: weather, trip, wear, stay",
        ],
        [
          "Story",
          "Generic lifestyle film",
          "A specific tension the customer already feels",
        ],
        [
          "Launch",
          "Channel playbook from another industry",
          "Warm the audience that already shares the job",
        ],
        [
          "UX / path",
          "Force a B2B funnel onto a product buy",
          "Match the decision length to the risk",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad transfer:** a travel brand adopting startup jargon (“operating system for stays”) because it sounds modern. Guests do not hire operating systems. They hire less anxiety. **Good transfer:** the hospitality insight that reducing uncertainty converts, applied to outdoor gear sizing, shipping, and returns with equal honesty.",
    },
    {
      type: "p",
      text: "**Bad consumer habit:** feature lists that could sit on any SKU. **Good outdoor habit:** name the condition (rain, pack weight, cold mornings) and the progress. Conditions make claims testable. Adjectives do not.",
    },
    {
      type: "image",
      src: "/images/blog/blog-16-ai-hospitality.png",
      alt: "Cross-category product brand lessons",
    },
    {
      type: "h2",
      text: "A transfer checklist you can run now",
    },
    {
      type: "ol",
      items: [
        "List three practices you copied from another category. Mark costume vs method.",
        "Rewrite your promise using only words customers used in the last ten interviews.",
        "Add one condition-based proof point (weather, trip, stay, wear cycle).",
        "Remove one borrowed buzzword that does not change a buyer decision.",
        "Align the purchase path length to the real risk of the product.",
        "Steal one method from another industry (trust ritual, repair story, pre-launch warm-up) without stealing its voice.",
      ],
    },
    {
      type: "p",
      text: "More: [ten years building products](/essays/ten-years-building-products-taught-me-about-startups), [questions I ask before taking any client](/essays/questions-i-ask-before-taking-any-client), and [every startup looks like a marketing problem until you dig deeper](/essays/every-startup-looks-like-marketing-problem-until-deeper).",
    },
    {
      type: "takeaway",
      text: "Steal methods across categories. Leave the costumes behind. Buyers hire progress in their own language.",
    },
    {
      type: "cta",
      lead: "nau studio works across product categories with the same core method: research, positioning, then campaigns that fit the job.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
