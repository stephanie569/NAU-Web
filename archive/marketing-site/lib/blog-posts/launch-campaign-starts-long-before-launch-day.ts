import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "launch-campaign-starts-long-before-launch-day",
  title: "Launch day is late. The campaign should've already started.",
  excerpt:
    "Build anticipation, proof and distribution before you hit publish. Bad vs good launch timing and a pre-launch sequence.",
  date: "August 26, 2026",
  category: "Go-to-Market",
  image: "/images/blog/blog-62-before-launch.png",
  metaDescription:
    "Your launch campaign starts long before launch day. How to build anticipation, proof and distribution before you hit publish, with bad vs good patterns and a practical sequence.",
  content: [
    {
      type: "p",
      text: "Launch day has a mythology problem. Teams treat it like a premiere: curtains up, confetti, a carefully timed founder post. Then Tuesday arrives looking suspiciously like Monday. The product is live. The market was not waiting with flowers. In a universe this indifferent, cold opens are expensive hobbies.",
    },
    {
      type: "p",
      text: "The day you hit publish is rarely the day the story begins. Strong launches start weeks earlier with audience warming, proof gathering, and a distribution list that already cares. Launch day is the handoff, not the invention of attention.",
    },
    {
      type: "h2",
      text: "Bad launch vs good launch",
    },
    {
      type: "table",
      headers: ["Phase", "Bad (cold open)", "Good (warmed path)"],
      rows: [
        [
          "Before",
          "Silence until the big day",
          "Teasers, waitlist, early access conversations",
        ],
        [
          "Proof",
          "Promise without evidence",
          "Beta results, customer voice, field tests ready",
        ],
        [
          "Distribution",
          "Hope the algorithm notices",
          "Named list of people and partners who will share",
        ],
        [
          "Day-of",
          "One post and a Product Hunt thread",
          "Coordinated story across owned + warm channels",
        ],
        [
          "After",
          "Disappear until the next launch",
          "Follow-up stories, onboarding help, owner content",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad:** building in secret for nine months, then surprising a market that has never heard your category sentence. Surprise is not a strategy when strangers still need education. **Good:** publish the problem early, invite a small cohort, collect proof, then launch into recognition instead of confusion.",
    },
    {
      type: "p",
      text: "**Bad consumer launch:** film drop on day one with no prior community. **Good:** sample circle, repair stories, or trail notes that train the audience before the buy button appears.",
    },
    {
      type: "image",
      src: "/images/blog/blog-62-before-launch.png",
      alt: "Pre-launch campaign timeline",
    },
    {
      type: "h2",
      text: "Start the campaign before launch day",
    },
    {
      type: "ol",
      items: [
        "Write the launch sentence now: who it is for, what changes, why now.",
        "Build a warm list: customers, waitlist, partners, creators who already trust you.",
        "Ship two or three pre-launch stories that teach the problem without spoiling nothing useful.",
        "Collect proof in private: quotes, metrics, photos, constraints you can show day-of.",
        "Assign distribution owners. Hope is not an owner.",
        "Plan the week after launch as carefully as day one: onboarding, FAQ, owner stories.",
      ],
    },
    {
      type: "p",
      text: "Related: [most product launches do not fail because of marketing](/essays/most-product-launches-dont-fail-because-of-marketing), [from strategy to launch](/essays/from-strategy-to-launch-how-i-approach-new-product), and [the next campaign should begin with a conversation](/essays/next-campaign-begin-conversation-not-camera).",
    },
    {
      type: "takeaway",
      text: "Launch day is late if that is when you start. Warm the story, gather proof, then publish into recognition.",
    },
    {
      type: "cta",
      lead: "nau studio plans launch campaigns that start before publish day, with proof and distribution already in motion.",
      button: "Visit nau studio",
      href: "/",
    },
  ],
};

export default post;
