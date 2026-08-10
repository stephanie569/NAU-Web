import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "how-id-redesign-brand-customer-journey",
  title: "I'd redesign this brand's whole customer journey. Here's how.",
  excerpt:
    "A journey redesign approach focused on belief stages—awareness, understanding, trust, activation, and expansion—without adding unnecessary touchpoints or channel clutter.",
  date: "June 26, 2026",
  category: "Go-to-Market",
  image: "/images/blog/blog-28-customer-journey.png",
  metaDescription:
    "How to redesign a brand customer journey around belief stages: awareness, understanding, trust, activation, expansion—and remove friction that blocks growth.",
  content: [
    {
      type: "p",
      text: "Customer journey redesigns fail when they add steps. I redesign journeys by clarifying stages of belief and removing anything that does not advance the next decision. More touchpoints are not a strategy. They are often a calendar problem wearing a customer-experience badge—and a fine way to spend a quarter building email number fourteen while checkout still confuses people.",
    },
    {
      type: "p",
      text: "This article gives you the belief-stage map I use, how to assign one primary artifact per stage, examples from familiar product companies and fictional startups, exercises, and a prioritisation method that keeps redesigns from becoming omnichannel theatre.",
    },
    {
      type: "callout",
      title: "Premise",
      text: "A journey is a sequence of decisions, not a sequence of channels. Channels are delivery mechanisms. If the decision is unclear, a new channel only scales the confusion.",
    },
    {
      type: "h2",
      text: "Why journey maps go wrong",
    },
    {
      type: "p",
      text: "Classic journey maps often become inventories of every email, ad, SMS, in-app tip, and Retargeting Idea™ someone pitched in a workshop. The wall looks impressive. The customer still stalls between “interested” and “activated.” Interaction Design Foundation resources on journeys and UX process are useful when maps stay tied to user goals—see [interaction-design.org](https://www.interaction-design.org/)—rather than internal department ownership.",
    },
    {
      type: "p",
      text: "Another failure mode: mapping the company’s process (lead → MQL → SQL → opportunity) and calling it a customer journey. Those stages matter for sales ops. They are not how belief forms. Belief forms as: why care, what changes, why trust, how to get value, why stay.",
    },
    {
      type: "takeaway",
      text: "If your journey map cannot be explained as decisions a human makes, it is an org chart in disguise.",
    },
    {
      type: "h2",
      text: "The journey map I use: five belief stages",
    },
    {
      type: "ol",
      items: [
        "Awareness: why should I care?",
        "Understanding: what changes for me?",
        "Trust: why believe you?",
        "Activation: how do I get value quickly?",
        "Expansion: why stay and grow with you?",
      ],
    },
    {
      type: "p",
      text: "Each stage gets one primary artifact—page, email, in-product moment—not five. Simplicity is a strategy. Complexity is what happens when nobody chooses. This pairs with the [Patagonia-style memo on protecting meaning while designing paths](/blog/if-patagonia-hired-me-tomorrow-where-id-start): belief without a path is inspiration; a path without belief is extraction.",
    },
    {
      type: "h3",
      text: "Stage table",
    },
    {
      type: "table",
      headers: ["Stage", "Human question", "Primary artifact", "Success signal"],
      rows: [
        [
          "Awareness",
          "Why should I care?",
          "Category/problem entry: ad, social proof post, SEO page, referral",
          "Click or arrival with relevant intent",
        ],
        [
          "Understanding",
          "What changes for me?",
          "Offer page or product story with clear outcome",
          "Time with key sections; return visits; CTA consideration",
        ],
        [
          "Trust",
          "Why believe you?",
          "Proof cluster: case study, security, customers, demos",
          "Proof engagement; sales questions get easier",
        ],
        [
          "Activation",
          "How do I get value quickly?",
          "First-run / onboarding to one win",
          "Time-to-first-win; activation rate",
        ],
        [
          "Expansion",
          "Why stay and grow?",
          "In-product value moments + thoughtful upgrade paths",
          "Retention, expansion revenue, referrals",
        ],
      ],
    },
    {
      type: "h2",
      text: "Stage by stage: how I redesign",
    },
    {
      type: "h3",
      text: "Awareness — why should I care?",
    },
    {
      type: "p",
      text: "Awareness fails when campaigns talk about the company instead of the customer’s felt problem. Airbnb’s early growth stories (widely discussed in public founder interviews and case archives) centred on a job—find a place to stay—more than on corporate identity. Your awareness artifact should name a tension the ICP already feels.",
    },
    {
      type: "p",
      text: "Redesign move: pick one awareness wedge for the next 90 days. Not seven campaigns. One. Measure whether arrivals understand the problem framing when they land.",
    },
    {
      type: "h3",
      text: "Understanding — what changes for me?",
    },
    {
      type: "p",
      text: "This is usually the homepage or core offer page. It must translate features into life-after. Stripe and Notion are strong public references for making capability feel concrete without drowning the first viewport. If understanding is weak, paid awareness becomes an expensive bounce generator—see also [clarity versus marketing problems](/blog/product-doesnt-have-marketing-problem-clarity-problem).",
    },
    {
      type: "p",
      text: "Redesign move: rewrite the understanding artifact until a stranger can narrate audience, outcome, and next step. Protect that page from becoming a junk drawer for every stakeholder’s module.",
    },
    {
      type: "h3",
      text: "Trust — why believe you?",
    },
    {
      type: "p",
      text: "Trust is not a logo strip alone. It is evidence matched to risk: security for enterprise, outcomes for ROI buyers, craft for design tools, community for consumer brands. Figma’s product visibility and customer stories do different trust jobs than a bank’s compliance page—and should.",
    },
    {
      type: "p",
      text: "Redesign move: list the top three doubts from sales and support. Build or relocate proof that answers those doubts within the journey—ideally before the hardest ask. Baymard’s decision-point research mindset applies: [baymard.com/blog](https://baymard.com/blog).",
    },
    {
      type: "h3",
      text: "Activation — how do I get value quickly?",
    },
    {
      type: "p",
      text: "Activation is where many journeys die after “successful” signup. The marketing promise must match the first-run win. Redesign onboarding around one outcome; defer power features. For a detailed playbook, use [how I would improve Apple-style onboarding](/blog/how-id-improve-apple-onboarding-experience).",
    },
    {
      type: "p",
      text: "Redesign move: define activation as a felt outcome, instrument time-to-that-outcome, and cut steps that do not serve it. Accessibility and performance count here—[WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) and [web.dev](https://web.dev/) are part of respecting the user’s first hour.",
    },
    {
      type: "h3",
      text: "Expansion — why stay and grow?",
    },
    {
      type: "p",
      text: "Expansion should feel like earned next value, not a hostage upsell. Good expansion journeys surface new capabilities when the user hits a real limit—seats, volume, collaboration—not when the billing team hits a quarterly target. Linear and other product-led tools often expand through workflow depth; consumer brands expand through trust and habit.",
    },
    {
      type: "p",
      text: "Redesign move: map the first natural expansion trigger in the product. Build one clear path. Delete two premature upgrade nags. Your future self—and your churn chart—will thank you.",
    },
    {
      type: "takeaway",
      text: "One primary artifact per belief stage beats five weak touches that argue with each other.",
    },
    {
      type: "h2",
      text: "The “one artifact” rule in practice",
    },
    {
      type: "p",
      text: "Teams panic when told to reduce touches. They imagine abandoning customers. The opposite happens: remaining artifacts get sharper because they have a job. Secondary channels can support the primary artifact; they should not invent a parallel story.",
    },
    {
      type: "table",
      headers: ["Stage", "Primary artifact", "Allowed support", "Usually cut"],
      rows: [
        [
          "Understanding",
          "Offer / home page",
          "One explainer video linked from page",
          "Three competing “resources” CTAs in hero",
        ],
        [
          "Trust",
          "Case study or proof page",
          "Sales leave-behind PDF that matches page",
          "Unrelated testimonial carousels everywhere",
        ],
        [
          "Activation",
          "First-run to one win",
          "One onboarding email that points back in-product",
          "Five-email sequence before first win",
        ],
        [
          "Expansion",
          "In-product upgrade moment",
          "CS playbook aligned to same trigger",
          "Generic monthly “explore features” blasts",
        ],
      ],
    },
    {
      type: "callout",
      title: "Exercise: artifact inventory",
      text: "List every email, page, ad, and in-app prompt touching new users in their first 14 days. Tag each with a belief stage. If any stage has more than three artifacts, cut or merge until one is clearly primary. If a stage has zero, that is your redesign priority.",
    },
    {
      type: "h2",
      text: "Composite redesign: “harbour” hospitality brand",
    },
    {
      type: "p",
      text: "Harbour is a fictional boutique stay brand with lovely photography and a messy journey: ads to homepage, homepage to blog, blog to Instagram, Instagram to booking engine with different tone, then post-stay emails that ignore the stay context.",
    },
    {
      type: "ol",
      items: [
        "Awareness: keep one campaign theme—“quiet coastal stays for deep-work weekends”—not five vibes.",
        "Understanding: rebuild homepage around that job; remove blog modules from the first viewport.",
        "Trust: surface house rules, host response norms, and real guest outcomes near booking.",
        "Activation: simplify booking to fewer steps; confirmations that set arrival expectations.",
        "Expansion: post-stay path to return booking and referrals—not a spray of unrelated city guides.",
      ],
    },
    {
      type: "p",
      text: "Same rooms. Clearer belief sequence. That is journey redesign without a new brand identity. For mission-sensitive versions of the same tension, revisit the [Patagonia starting points](/blog/if-patagonia-hired-me-tomorrow-where-id-start).",
    },
    {
      type: "h2",
      text: "B2B SaaS variant: the same stages, different artifacts",
    },
    {
      type: "p",
      text: "For a fictional analytics tool, the five stages might look like this: Awareness via a problem-led LinkedIn narrative or SEO page about “board reporting without spreadsheet panic.” Understanding via a homepage that names finance leads and a concrete weekly outcome. Trust via a security page plus a case study with metrics a CFO respects. Activation via an example workspace that produces a usable chart before warehouse drama. Expansion via a natural invite to connect a second data source when the first win is real.",
    },
    {
      type: "p",
      text: "Notice what did not get added: a podcast, a community Discord, a newsletter, and a partner webinar series in month one. Those can arrive later as support for a stage that already works. Premature channel sprawl is how B2B teams confuse motion with progress—then hire someone to “own lifecycle” while activation still takes a fortnight.",
    },
    {
      type: "ul",
      items: [
        "Awareness artifact: one problem page or campaign, not five themes.",
        "Understanding artifact: offer page with sales-script nouns.",
        "Trust artifact: proof that answers procurement and ROI doubts.",
        "Activation artifact: first-win path instrumented weekly.",
        "Expansion artifact: in-product trigger tied to a real limit.",
      ],
    },
    {
      type: "takeaway",
      text: "SaaS journeys fail most often between Understanding and Activation—the promise is clear, the first win is not. Fix that seam before you fund more top-of-funnel.",
    },
    {
      type: "h2",
      text: "How this connects to product strategy",
    },
    {
      type: "p",
      text: "Journey redesign is product strategy in slow motion. If activation cannot deliver the understanding-stage promise, you do not have a lifecycle email problem—you have a product problem. YC’s library repeatedly returns to talking to users and shipping value—[ycombinator.com/library](https://www.ycombinator.com/library). HBR’s customer experience pieces similarly warn against theatre without operational change—[hbr.org](https://hbr.org/).",
    },
    {
      type: "p",
      text: "When growth stalls, diagnose which belief stage breaks. Awareness weak → distribution or wedge. Understanding weak → messaging. Trust weak → proof and risk. Activation weak → first-run. Expansion weak → product value or packaging. For a practical triage, see [if the product is not growing, start here](/blog/if-product-isnt-growing-start-here).",
    },
    {
      type: "takeaway",
      text: "Name the broken stage before you fund a new channel. Channels cannot fix the wrong stage.",
    },
    {
      type: "h2",
      text: "A 60-minute journey redesign workshop",
    },
    {
      type: "ol",
      items: [
        "Write the five belief questions on a board.",
        "Place current artifacts under each question (sticky notes).",
        "Circle duplicates and contradictions.",
        "Choose one primary artifact per stage for the next quarter.",
        "Assign owners and a cut list for non-primary touches.",
        "Define one metric per stage (not twenty).",
        "Schedule a four-week review; resist adding channels before the review.",
      ],
    },
    {
      type: "quote",
      text: "A journey with fewer, clearer decisions feels more premium than a journey with more “delight” interruptions.",
    },
    {
      type: "h2",
      text: "What I refuse to add during a redesign",
    },
    {
      type: "ul",
      items: [
        "A new social channel “to meet customers where they are” before the site explains the offer.",
        "Chat widgets that compensate for unclear CTAs.",
        "Loyalty schemes before activation works.",
        "Personalisation engines with nothing coherent to personalise.",
        "Journey PDFs longer than the experience they describe.",
      ],
    },
    {
      type: "p",
      text: "Restraint is part of the craft. First Round Review often highlights companies that win by focus—[review.firstround.com](https://review.firstround.com/). Your journey can borrow that ethic without borrowing someone else’s playbook wholesale.",
    },
    {
      type: "h2",
      text: "FAQ",
    },
    {
      type: "faq",
      items: [
        {
          question: "Do we need different journeys for every persona?",
          answer:
            "Start with one primary ICP journey. Add a second only when evidence shows a different belief sequence—not merely a different job title. Shared stages with branched artifacts beat six parallel maps nobody maintains.",
        },
        {
          question: "Where do sales calls fit?",
          answer:
            "Sales is often the trust and understanding accelerator for high-consideration products. Script it to the same belief stages. Do not let the website tell a different story than the call.",
        },
        {
          question: "How do we handle post-purchase for ecommerce?",
          answer:
            "Treat fulfilment, care, returns, and reorder as activation and expansion. Silence or generic blasts after payment waste the trust you just bought.",
        },
        {
          question: "What tools should we use to map this?",
          answer:
            "A whiteboard is enough to decide. Use software to document decisions, not to postpone them. The artifact inventory exercise matters more than the diagram aesthetic.",
        },
        {
          question: "How does this relate to website conversion work?",
          answer:
            "Website modules are stage artifacts. Use the [landing page review framework](/blog/landing-page-review-helping-hurting-conversions) and [three conversion changes](/blog/website-audit-three-changes-double-conversion) inside Understanding and Trust stages.",
        },
      ],
    },
    {
      type: "h2",
      text: "Closing",
    },
    {
      type: "p",
      text: "I redesign journeys by clarifying belief stages and removing anything that does not advance the next decision. Awareness, understanding, trust, activation, expansion—each with one primary artifact and a clear success signal. Everything else earns its place as support or gets cut.",
    },
    {
      type: "p",
      text: "If your current map looks busy, that is not proof of sophistication. It may be proof that nobody chose. Choose. Then measure whether belief actually moves.",
    },
    {
      type: "cta",
      lead: "Want a customer journey redesign that reduces friction instead of adding channels?",
      button: "Map your journey with me",
      href: "/contact",
    },
  ],
};

export default post;
