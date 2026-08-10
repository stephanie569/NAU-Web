import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "before-build-another-feature-ask-five-questions",
  title: "About to ship another feature? Ask these 5 first.",
  excerpt: "A checklist for stopping roadmap theatre before it ships.",
  date: "August 29, 2026",
  category: "Research & Positioning",
  image: "/images/blog/blog-59-five-questions-feature.png",
  metaDescription:
    "Five questions to ask before building another feature—pain evidence, who benefits, opportunity cost, first-win path, and kill criteria—to stop roadmap theatre.",
  content: [
    {
      type: "p",
      text: "Roadmaps are optimistic documents. They assume that more surface area equals more value, that a competitor’s screenshot is a requirement, and that a single customer’s email is a democratic mandate. Then the sprint starts, the feature ships, usage stays flat, and everyone agrees the release notes were lovely.",
    },
    {
      type: "p",
      text: "I have helped kill more features on paper than I have designed in Figma—and that is intentional. Building is the expensive step. Asking better questions is the cheap one. This checklist is for stopping roadmap theatre before it ships.",
    },
    {
      type: "p",
      text: "It complements [the hidden cost of building features nobody asked for](/blog/hidden-cost-building-features-nobody-asked-for) and [the product strategy framework I use before designing a single screen](/blog/product-strategy-framework-before-designing-screen). If the feature exists to impress a launch audience rather than relieve a pain, read [most product launches don't fail because of marketing](/blog/most-product-launches-dont-fail-because-of-marketing) before you estimate story points.",
    },
    {
      type: "h2",
      text: "Why features multiply",
    },
    {
      type: "p",
      text: "Features are visible progress. Saying no is invisible leadership. Sales wants a checkbox. Design wants a portfolio piece. Engineering wants a clean abstraction. The founder wants the anxiety to stop. None of those are customer outcomes. They are organisational coping mechanisms with a Jira ticket.",
    },
    {
      type: "ul",
      items: [
        "Competitor parity feels like strategy and often is mimicry.",
        "“Quick wins” accumulate into a product nobody can explain.",
        "Internal users of the roadmap outnumber external users of the feature.",
        "Unused features still cost support, QA, cognitive load, and credibility.",
      ],
    },
    {
      type: "takeaway",
      text: "Every feature is a promise you will maintain. Ask whether the promise is worth the compound interest.",
    },
    {
      type: "h2",
      text: "The five questions",
    },
    {
      type: "h3",
      text: "1. What painful behaviour does this change—and how do we know?",
    },
    {
      type: "p",
      text: "Not “users might like it.” Not “it would be cool with AI.” Name the current behaviour: export to Sheets, email a VA, abandon onboarding at step four. Name the evidence: session recordings, support tags, interview notes, willingness to pay for a workaround. If evidence is a vibe, the feature is a guess with a deploy pipeline.",
    },
    {
      type: "h3",
      text: "2. Who gets the value—and are they the ones who renew?",
    },
    {
      type: "p",
      text: "Champions request features that make them look good. Economic buyers renew products that reduce cost or risk. End users adopt tools that shrink their Tuesday. If those three are not aligned, you may ship delight for someone who does not hold the budget. Be explicit.",
    },
    {
      type: "h3",
      text: "3. What do we not build if we build this?",
    },
    {
      type: "p",
      text: "Opportunity cost is the adult question. A feature is not plus-one. It is minus something else: the first-win path, the performance work, the onboarding rewrite, the sales cycle shortening. If you cannot name the sacrifice, you are not prioritising—you are collecting.",
    },
    {
      type: "h3",
      text: "4. How does a new user reach a first win with this in the way?",
    },
    {
      type: "p",
      text: "Complexity is a tax on activation. Each control, each empty state, each settings pane is another place to stall. If the feature does not accelerate time-to-relief for the core job, it is decoration in the hallway of a house people never enter.",
    },
    {
      type: "h3",
      text: "5. What evidence would make us rip it out?",
    },
    {
      type: "p",
      text: "Kill criteria before build. Adoption threshold, support burden, effect on retention, effect on the sales narrative. Without a kill switch, every feature becomes permanent folklore. Teams that cannot delete cannot strategise.",
    },
    {
      type: "callout",
      title: "Try this",
      text: "Print the five questions at the top of every PRD or linear ticket template. Refuse estimation until all five have answers in plain language. Incomplete answers are a valid reason to park work—more valid than “we already designed the screens.”",
    },
    {
      type: "h2",
      text: "Scorecard: keep, park, or kill",
    },
    {
      type: "table",
      headers: ["Question", "Green light", "Yellow", "Red"],
      rows: [
        [
          "Pain evidence",
          "Repeated behaviour + cost",
          "Anecdote from one account",
          "Opinion or competitor FOMO",
        ],
        [
          "Who benefits",
          "Buyer and user aligned",
          "User yes, buyer unclear",
          "Only internal stakeholders excited",
        ],
        [
          "Opportunity cost",
          "Named sacrifice, accepted",
          "Vague “we’ll manage”",
          "Nothing deprioritised",
        ],
        [
          "First-win impact",
          "Shortens time-to-relief",
          "Neutral to core path",
          "Adds steps before value",
        ],
        [
          "Kill criteria",
          "Written and owned",
          "“We’ll review later”",
          "No one allowed to delete",
        ],
      ],
    },
    {
      type: "quote",
      text: "A roadmap without kill criteria is a museum of decisions nobody is brave enough to reverse.",
    },
    {
      type: "image",
      src: "/images/blog/blog-mid-07.png",
      alt: "Five-question checklist beside a sparse product roadmap",
    },
    {
      type: "h2",
      text: "Framework: the feature trial, not the feature marriage",
    },
    {
      type: "p",
      text: "When a feature clears the five questions, still ship it as a trial: limited surface, clear success metric, review date. Marriage can wait. This is especially true when early customers are teaching you—see [the first customer isn't your market. They're your teacher.](/blog/first-customer-isnt-your-market-theyre-your-teacher).",
    },
    {
      type: "ol",
      items: [
        "Define the smallest version that could change the painful behaviour.",
        "Instrument one primary metric and two guardrails (e.g. activation, support volume).",
        "Set a review date before the sprint starts.",
        "Publish the kill criteria in the same channel as the launch note.",
        "If it fails, remove it—do not hide it in a settings graveyard.",
      ],
    },
    {
      type: "h2",
      text: "A fictional contrast: two “export” requests",
    },
    {
      type: "p",
      text: "Team A hears “we need CSV export” from a champion. They build a general exporter with filters, scheduling, and templates. Three months later, two accounts use it monthly. Support maintains edge cases. The core dashboard still confuses new users.",
    },
    {
      type: "p",
      text: "Team B runs the five questions. Evidence shows the pain is “I paste three numbers into a board update.” They ship a one-click “copy board summary” and park full export. Adoption is high among the renewing persona. The champion is slightly disappointed and still renews. Same request category. Different product judgement.",
    },
    {
      type: "takeaway",
      text: "The request is a clue. The behaviour is the brief. The smallest relief is often the strategy.",
    },
    {
      type: "h2",
      text: "Exercise: the feature autopsy",
    },
    {
      type: "callout",
      title: "Exercise",
      text: "Pick three features shipped in the last six months. Run them backwards through the five questions using today’s data. Which would you still green-light? Which were roadmap theatre? Write one paragraph per feature. Share it without blame—this is calibration, not a tribunal. Then apply the same bar to the next item in the queue.",
    },
    {
      type: "h2",
      text: "When “just build it” is correct",
    },
    {
      type: "p",
      text: "Sometimes speed beats ceremony: a legal requirement, a clear blocker to activation, a bet with a tiny blast radius and a fixed review date. The five questions still help—they just resolve quickly. What they prevent is the vague middle: medium effort, unclear owner, eternal maintenance.",
    },
    {
      type: "p",
      text: "For problem-first sequencing before any of this, read [the best products solve a problem before they sell a solution](/blog/best-products-solve-problem-before-sell-solution). External anchors I still send founders: [SVPG on product discovery](https://www.svpg.com/), [First Round Review](https://review.firstround.com/) on focus, and [Nielsen Norman Group](https://www.nngroup.com/) on why more UI often means less usable.",
    },
    {
      type: "h2",
      text: "How design and engineering should use the same five",
    },
    {
      type: "p",
      text: "If product writes a green-lit brief and design invents three extra modes “while we’re here,” you have not asked the questions—you have hosted them. The five questions belong in critique. Designers ask whether the interaction shortens first-win. Engineers ask whether the abstraction creates permanent surface area for a temporary bet. QA asks what failure would look like against the kill criteria.",
    },
    {
      type: "ul",
      items: [
        "Design critique: remove anything that does not serve the stated behaviour change.",
        "Engineering estimate: include maintenance and support load, not only build hours.",
        "Release note: restate the painful behaviour you intended to change—so success is checkable.",
        "Retro: compare outcome to kill criteria without protecting egos or tickets.",
      ],
    },
    {
      type: "p",
      text: "Teams that share the checklist stop arguing about taste as if taste were strategy. Taste still matters. It just stops being the only vocabulary available when someone wants another toggle.",
    },
    {
      type: "h2",
      text: "The quiet cost of saying yes",
    },
    {
      type: "p",
      text: "Unused features do not sit politely in the corner. They appear in demos you feel obliged to explain. They appear in security questionnaires. They appear in cognitive load for every new hire learning the product. They appear when you try to reposition and the UI still advertises last year’s bets.",
    },
    {
      type: "p",
      text: "That is why the opportunity-cost question is not philosophical. It is compound interest on distraction. If your launch underperformed and the instinct is to ship “one more differentiator,” pause. Differentiator theatre is still theatre. Diagnose readiness first—then decide whether a feature is the lever at all.",
    },
    {
      type: "h2",
      text: "How this shows up in my work at nau",
    },
    {
      type: "p",
      text: "I use these questions when scoping websites and product UX alike. A settings page can be as vain as a SaaS module. We cut until the first win is obvious, then design. If your team needs a sharper filter on what deserves build time at all, start with [how I decide whether a product is worth building](/blog/how-i-decide-whether-product-worth-building).",
    },
    {
      type: "faq",
      items: [
        {
          question: "Won't this slow us down?",
          answer:
            "It slows estimation theatre. It speeds delivery of things that matter by preventing sprints spent on museum pieces.",
        },
        {
          question: "What if sales says we will lose the deal?",
          answer:
            "Price the custom work or the risk honestly. Losing one deal can be cheaper than gaining a permanent feature for a segment you do not serve.",
        },
        {
          question: "Do AI features get a free pass?",
          answer:
            "No. AI that does not change a painful behaviour is still roadmap theatre with a GPU bill. Same five questions.",
        },
        {
          question: "How do we handle board pressure for “more product”?",
          answer:
            "Show the autopsy of unused features and the activation metric. Boards can learn; they prefer charts to vibes when you give them both.",
        },
      ],
    },
    {
      type: "h2",
      text: "Ask before you estimate",
    },
    {
      type: "p",
      text: "Before you build another feature, ask what behaviour changes, who benefits, what you sacrifice, how first-win is affected, and what would make you delete it. If those answers are weak, the roadmap is performing. Let it. Just do not ship the performance to production.",
    },
    {
      type: "cta",
      lead: "Want help pressure-testing your roadmap before the next sprint locks in theatre?",
      button: "Review your feature queue",
      href: "/contact",
    },
  ],
};

export default post;
