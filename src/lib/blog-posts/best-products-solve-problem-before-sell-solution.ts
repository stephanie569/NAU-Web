import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "best-products-solve-problem-before-sell-solution",
  title: "Sell the problem first. The solution can wait.",
  excerpt: "Features are answers. Problems are the reason anyone listens.",
  date: "September 1, 2026",
  category: "Research & Positioning",
  image: "/images/blog/blog-56-solve-problem.png",
  metaDescription:
    "The best products earn attention by naming the problem clearly before selling features. A product strategy guide to problem-first positioning, proof, and roadmaps.",
  content: [
    {
      type: "p",
      text: "Most pitch decks open with the product. Slide one is a screenshot. Slide two is a feature list dressed as a vision. Slide three is a market size number large enough to make everyone slightly nervous. Somewhere around slide seven, if you are lucky, someone mentions the customer’s actual Tuesday. By then the room has already decided whether they like the solution-without agreeing on the problem.",
    },
    {
      type: "p",
      text: "I have watched this pattern burn months of runway. Teams ship elegant answers to questions nobody is asking out loud. Marketing then inherits the awkward job of inventing urgency after the fact. It rarely works. Features are answers. Problems are the reason anyone listens.",
    },
    {
      type: "p",
      text: "This piece is about building and positioning products so the problem arrives first-in research, in copy, in demos, and in the roadmap. It sits alongside [how I decide whether a product is worth building](/essays/how-i-decide-whether-product-worth-building) and [why great products fail before product-market fit](/essays/why-great-products-fail-before-product-market-fit). If you are already mid-launch and wondering why the channel feels broken, start here instead of the ad account: [most product launches don't fail because of marketing](/essays/most-product-launches-dont-fail-because-of-marketing).",
    },
    {
      type: "h2",
      text: "Why solution-first feels productive (and usually isn't)",
    },
    {
      type: "p",
      text: "Building is comforting. Naming a problem precisely is not. A problem statement forces trade-offs: who hurts, how often, what they do today, what they will pay to stop. A feature list lets you stay in the pleasant fog of possibility. Founders are rewarded for shipping; they are rarely rewarded, early on, for saying “we are not building that yet.” So the roadmap fills with solutions looking for an audience.",
    },
    {
      type: "ul",
      items: [
        "Solution-first copy sounds clever and lands soft-nobody feels seen.",
        "Solution-first demos show capability; buyers buy relief.",
        "Solution-first roadmaps accumulate features without accumulating belief.",
        "Solution-first fundraising trains you to sell theatre to people who will never use the product.",
      ],
    },
    {
      type: "p",
      text: "The irony is that problem-first work is faster in the long run. You cut half the backlog before it becomes code. You write landing pages that do not need a thesaurus. You stop arguing about button colours because the conversation is about whether the pain is real. Related reading when the backlog is already bloated: [the hidden cost of building features nobody asked for](/essays/hidden-cost-building-features-nobody-asked-for).",
    },
    {
      type: "takeaway",
      text: "If strangers cannot repeat your problem in one sentence, they will not remember your solution in ten.",
    },
    {
      type: "h2",
      text: "A simple sequence: pain → language → proof → product",
    },
    {
      type: "p",
      text: "I use a four-step sequence with founders at nau. It is deliberately boring. Boring is underrated.",
    },
    {
      type: "h3",
      text: "1. Pain: find the cost of inaction",
    },
    {
      type: "p",
      text: "Ask what breaks if they wait another quarter. Money, time, reputation, compliance, sleep-pick the currency that already appears on their calendar. Mild inconvenience is not a market. Chronic, costly friction is. Jobs-to-be-done language helps here; the [Interaction Design Foundation](https://www.interaction-design.org/) has clear primers if you want the theory without the cult.",
    },
    {
      type: "h3",
      text: "2. Language: steal their words, not yours",
    },
    {
      type: "p",
      text: "Customers do not say “synergistic workflow orchestration.” They say “I spend Friday nights copying numbers into three tools.” Your homepage should sound like their Slack rant, cleaned up slightly for public consumption. If your positioning requires a glossary, you are still selling the solution’s self-image.",
    },
    {
      type: "h3",
      text: "3. Proof: show the problem is solvable before you sell the suite",
    },
    {
      type: "p",
      text: "A case study, a before/after, a two-minute teardown, a spreadsheet that already works-anything that proves the pain can move. Proof is not a feature tour. Proof is evidence that Tuesday got shorter.",
    },
    {
      type: "h3",
      text: "4. Product: only then attach the mechanism",
    },
    {
      type: "p",
      text: "Once the problem and proof are clear, features become explanations rather than the pitch. “Here’s how we remove that Friday-night copy-paste” lands. “Here’s our AI-powered platform” does not, unless the listener already trusts you.",
    },
    {
      type: "callout",
      title: "Try this",
      text: "Write your homepage headline as a problem statement with no product nouns. If you cannot, you do not have positioning-you have a brochure. Then write one sentence of proof. Only after that may you name the product.",
    },
    {
      type: "h2",
      text: "Problem clarity versus solution theatre",
    },
    {
      type: "table",
      headers: ["Signal", "Problem-first", "Solution-first"],
      rows: [
        [
          "Homepage hero",
          "Names the costly situation",
          "Names the product or category buzzword",
        ],
        [
          "Demo structure",
          "Starts with their current workaround",
          "Starts with your settings screen",
        ],
        [
          "Roadmap debate",
          "Tied to pain frequency and severity",
          "Tied to competitor feature parity",
        ],
        [
          "Sales call",
          "Buyer finishes your sentences",
          "You finish theirs with feature names",
        ],
        [
          "Metrics that matter",
          "Time-to-relief, retention of the relieved",
          "Activation of unused modules",
        ],
      ],
    },
    {
      type: "quote",
      text: "A feature is a claim. A problem, stated in the customer’s language, is an invitation to trust.",
    },
    {
      type: "image",
      src: "/images/blog/blog-mid-02.png",
      alt: "Problem statement clarifying into a product decision on a sparse whiteboard",
    },
    {
      type: "h2",
      text: "Framework: the problem brief before any build",
    },
    {
      type: "p",
      text: "Before design, before Figma, before the sprint-write a one-page problem brief. I refuse to open a layout tool until this exists, which is why [I start every project without opening Figma](/essays/why-i-start-every-project-without-opening-figma). The brief is not a PRD. It is a discipline.",
    },
    {
      type: "ol",
      items: [
        "Who specifically feels this (role, context, constraint)-not “SMBs.”",
        "What they do today when it hurts (tools, people, workarounds).",
        "How often it hits and what it costs in their currency.",
        "What “solved” looks like in the first week of use.",
        "What evidence would kill the idea (not what would make it pretty).",
      ],
    },
    {
      type: "p",
      text: "If you cannot fill the brief, you are not ready to sell a solution. You are ready to research. That is not failure. That is the job. For a fuller pre-design sequence, use [the product strategy framework I use before designing a single screen](/essays/product-strategy-framework-before-designing-screen).",
    },
    {
      type: "h2",
      text: "A fictional contrast: two invoicing tools",
    },
    {
      type: "p",
      text: "Founder A launches “InvoiceOS-AI-native billing for modern teams.” The site lists integrations, templates, and a chatbot. Demos start on the dashboard. Trial users poke around and leave. Support tickets ask what the product is for.",
    },
    {
      type: "p",
      text: "Founder B launches with a different first sentence: “Freelancers who chase late payments every month.” The hero shows a calendar with three red “still unpaid” days. The demo opens on a reminder sequence the founder built for themselves. Features appear as explanations of how chasing stops. Same category. Different first move. Only one of them solved a problem before selling a solution.",
    },
    {
      type: "takeaway",
      text: "Category nouns impress peers. Situation nouns convert buyers.",
    },
    {
      type: "h2",
      text: "Exercise: the mute-button pitch",
    },
    {
      type: "callout",
      title: "Exercise",
      text: "Record a sixty-second pitch. Mute the audio and watch only the first fifteen seconds of visuals or slides. If a stranger cannot guess the problem from what they see, rewrite. Then unmute and check whether your first spoken sentence names cost or capability. Capability first usually means you are still selling the solution to yourself.",
    },
    {
      type: "h2",
      text: "Where this breaks in practice",
    },
    {
      type: "p",
      text: "Problem-first is not “never talk about features.” It is sequencing. Engineers need specs. Designers need constraints. Investors need a mechanism. The mistake is leading every external conversation with the mechanism because that is what you spent the weekend building.",
    },
    {
      type: "p",
      text: "It also breaks when founders confuse their own annoyance with a market. Your Friday night frustration is a hypothesis, not proof. Treat early buyers as teachers-more on that in [the first customer isn't your market. They're your teacher.](/essays/first-customer-isnt-your-market-theyre-your-teacher)-and keep updating the problem statement as language sharpens.",
    },
    {
      type: "p",
      text: "Useful external anchors: [Y Combinator’s library](https://www.ycombinator.com/library) on talking to users, [First Round Review](https://review.firstround.com/) on focus, and [Nielsen Norman Group](https://www.nngroup.com/) on how people actually scan product copy. None of them will write your problem sentence for you.",
    },
    {
      type: "h2",
      text: "Problem-first across the stack",
    },
    {
      type: "p",
      text: "The discipline only works if it survives contact with every surface. Website, sales deck, onboarding email, in-product empty states, support macros-each one either reinforces the problem or quietly reverts to feature theatre. I have seen a sharp homepage undone by a demo that opens on settings. I have seen a sharp demo undone by an onboarding checklist that asks for integrations before any relief appears.",
    },
    {
      type: "ul",
      items: [
        "Homepage: situation and cost before product name.",
        "Demo: their workaround before your dashboard.",
        "Onboarding: first win before configuration completeness.",
        "Pricing page: outcomes and who it is for before feature matrices.",
        "Support: answers framed as “you were trying to stop X” before button paths.",
      ],
    },
    {
      type: "p",
      text: "When those surfaces disagree, the customer learns not to trust the first sentence they read. Consistency is not brand fussiness. It is how problem clarity becomes belief. Airbnb’s early pages worked because they made the awkward lodging problem feel solvable before they sold “a platform.” Figma won attention by making multiplayer design pain obvious in the product itself-not by listing vector tools first.",
    },
    {
      type: "h2",
      text: "A weekly habit that keeps you honest",
    },
    {
      type: "p",
      text: "Once a week, take one sales call recording or support thread and extract a single verbatim problem sentence. Put it next to your homepage hero. If they do not rhyme, rewrite the hero-or rewrite the ICP. Do not debate adjectives in a vacuum. Debate against the words people already use when they are annoyed.",
    },
    {
      type: "p",
      text: "This habit also protects you from PMF theatre. Declaring fit while the public sentence and the private rant diverge is how teams freeze a story the market has already left. Keep the problem moving as evidence moves-fit is not a trophy, which is why [product-market fit isn't a milestone. It's a moving target](/essays/product-market-fit-isnt-milestone-moving-target).",
    },
    {
      type: "h2",
      text: "How this shows up in my work at nau",
    },
    {
      type: "p",
      text: "When founders come to me mid-build, I often pause the visual work and force the problem brief. It feels slow for a week and saves a quarter. Websites, onboarding, and launch narratives all get clearer when the product stops introducing itself as a list of verbs. If what you need is not another campaign but a sharper product story, read [what founders actually need isn’t more marketing](/essays/founders-actually-need-isnt-more-marketing).",
    },
    {
      type: "faq",
      items: [
        {
          question: "Doesn't everyone already know their problem?",
          answer:
            "They know a vague discomfort. Few can state frequency, cost, workaround, and kill criteria in one page. That gap is where most roadmaps go to waste money.",
        },
        {
          question: "What if our product creates a new category?",
          answer:
            "New categories still start with old pains. Translate the novel mechanism into a familiar cost. Category creation without a felt problem is a TED talk with a Stripe account.",
        },
        {
          question: "How long should the problem stay on the homepage?",
          answer:
            "Until the market finishes your sentence for you. When inbound already uses your language, you can lead with the product name. Most early teams are nowhere near that.",
        },
        {
          question: "Isn't this just positioning?",
          answer:
            "Positioning is the public face of problem clarity. The deeper work is product strategy: what you refuse to build because it does not serve the stated pain.",
        },
      ],
    },
    {
      type: "h2",
      text: "Listen first, then ship",
    },
    {
      type: "p",
      text: "The best products do not open with their own cleverness. They open with a problem the buyer already pays for-with time, money, or quiet dread. Solve that on the page, in the demo, and in the first week of use. Sell the solution only after someone feels understood. Features will wait. Attention will not.",
    },
    {
      type: "cta",
      lead: "Want help turning a fuzzy solution into a problem-first product story and roadmap?",
      button: "Talk about your product",
      href: "/contact",
    },
  ],
};

export default post;
