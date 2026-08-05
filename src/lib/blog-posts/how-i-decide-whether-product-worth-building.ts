import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "how-i-decide-whether-product-worth-building",
  title: "How I decide whether a product is worth building.",
  excerpt:
    "A practical build filter for greenlighting product work: urgency, willingness to pay, differentiation, time-to-first-outcome, and kill criteria—so curiosity does not become a roadmap.",
  date: "July 13, 2026",
  category: "Product research and positioning",
  image: "/images/blog/blog-14-worth-building.png",
  metaDescription:
    "How to decide if a product is worth building using urgency, willingness to pay, differentiation, time-to-value, and evidence that would kill the idea early.",
  content: [
    {
      type: "p",
      text: "Not every idea deserves a roadmap. Before I help build, I run a filter that protects founders from expensive curiosity. Interesting is not the same as urgent, and urgency is what pays invoices. I have watched talented teams spend a year polishing a product nobody needed this month. The work was admirable. The market was busy elsewhere.",
    },
    {
      type: "p",
      text: "This filter is how I decide whether a product—or a major bet inside a product—is worth building with nau. It is related to [why great products fail before product–market fit](/blog/why-great-products-fail-before-product-market-fit) and to feature-level restraint in [the hidden cost of unused features](/blog/hidden-cost-building-features-nobody-asked-for). Use it before you hire, before you raise, and before you open Figma—[why I start without Figma](/blog/why-i-start-every-project-without-opening-figma).",
    },
    {
      type: "h2",
      text: "Why founders greenlight the wrong things",
    },
    {
      type: "p",
      text: "Ideas feel cheap. Building feels like progress. Competitors announce adjacent features. Investors ask about TAM. A cousin says they would use it. None of those are demand. Demand is a customer who already feels the cost of not having the thing—and will pay to remove that cost on a timeline that matches your runway.",
    },
    {
      type: "p",
      text: "Y Combinator’s library is blunt about talking to users and building what they need now—[Y Combinator Library](https://www.ycombinator.com/library). First Round’s archives show how focus compounds when founders refuse polite maybes—[First Round Review](https://review.firstround.com/). Harvard Business Review’s strategy-as-choice framing still helps boards accept “no”—[HBR](https://hbr.org/).",
    },
    {
      type: "callout",
      title: "Interesting vs urgent",
      text: "Interesting problems get nods in interviews. Urgent problems get budgets, workarounds, and calendar time. Build for the second. Research the first without marrying it.",
    },
    {
      type: "h2",
      text: "My build filter",
    },
    {
      type: "ol",
      items: [
        "Is the pain frequent and urgent—or merely interesting?",
        "Will a defined segment pay to remove it?",
        "Is there a believable reason you win versus alternatives?",
        "Can we deliver a meaningful first outcome quickly?",
        "Do we know what evidence would kill the idea early?",
      ],
    },
    {
      type: "h3",
      text: "1. Frequency and urgency",
    },
    {
      type: "p",
      text: "Ask how often the pain hits and what they do today when it does. Daily spreadsheet pain beats annual mild inconvenience. If buyers can delay forever without consequence, your sales cycle will inherit that delay. Jobs-to-be-done language helps—see the [Interaction Design Foundation](https://www.interaction-design.org/) for accessible JTBD primers—but you do not need jargon. You need a calendar: when does this hurt, and what breaks if they wait?",
    },
    {
      type: "h3",
      text: "2. Willingness to pay in a defined segment",
    },
    {
      type: "p",
      text: "“Everyone could use this” is a red flag. Name the segment narrowly enough to find them. Listen for existing spend: agencies, tools, overtime, error costs. If nobody pays for a workaround today, you may be creating a category and a charity simultaneously. Category creation is possible; it is not a default early-stage plan. Clarity about who pays connects to [clarity vs marketing problems](/blog/product-doesnt-have-marketing-problem-clarity-problem).",
    },
    {
      type: "h3",
      text: "3. A believable reason you win",
    },
    {
      type: "p",
      text: "Alternatives include incumbents, spreadsheets, agencies, and doing nothing. Your wedge must be explainable in one breath: workflow fit, speed, distribution, data, regulation, audience trust. “We will be more AI” is not a wedge. Stripe’s early API delight, Linear’s speed, Figma’s multiplayer clarity—each was a reason to switch that customers could feel quickly.",
    },
    {
      type: "h3",
      text: "4. Meaningful first outcome, quickly",
    },
    {
      type: "p",
      text: "If value requires six integrations, a data science team, and a quarter of configuration, activation will punish you. Can a motivated user in the ICP reach a real outcome fast? If not, you may still build—but budget for concierge onboarding or a thinner first product. Time-to-value is part of worthiness, not a later UX polish item. Performance and accessibility shape that outcome too ([web.dev vitals](https://web.dev/articles/vitals), [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/)).",
    },
    {
      type: "h3",
      text: "5. Kill criteria",
    },
    {
      type: "p",
      text: "What evidence would make you stop? No paid pilots after N conversations. No retention after first-month cohorts. Switching costs higher than reported. Write the kill criteria before optimism edits them. Teams that refuse to pre-commit to stopping criteria tend to “learn” indefinitely on the same dead horse.",
    },
    {
      type: "table",
      headers: ["Filter question", "Green signal", "Red signal"],
      rows: [
        [
          "Urgency",
          "Frequent pain + costly workaround",
          "Nice-to-have; easy to delay",
        ],
        [
          "Willingness to pay",
          "Named segment already spending",
          "Vague audience; no budget owner",
        ],
        [
          "Why you win",
          "Clear wedge vs real alternatives",
          "Parity story or “more AI”",
        ],
        [
          "First outcome",
          "Value in an early session",
          "Months before any win",
        ],
        [
          "Kill criteria",
          "Prewritten stop rules",
          "“We’ll know it when we see it”",
        ],
      ],
    },
    {
      type: "takeaway",
      text: "A product worth building has urgent pain, a paying segment, a real wedge, fast first value, and kill criteria written before hope takes the wheel.",
    },
    {
      type: "quote",
      text: "A product worth building has a customer who already feels the cost of not having it.",
    },
    {
      type: "h2",
      text: "Applying the filter: two fictional ideas",
    },
    {
      type: "h3",
      text: "Idea a — shelfsync for indie retailers",
    },
    {
      type: "p",
      text: "Pain: stockouts and over-orders weekly; owners live in three spreadsheets. Segment: UK indie retailers with 2–5 shops, already paying for a basic POS. Wedge: syncs to their specific POS in under a day with reorder suggestions in plain language. First outcome: one accurate reorder list in the first session. Kill criteria: fewer than three paid pilots after twenty qualified demos in sixty days. Verdict: worth a thin build.",
    },
    {
      type: "h3",
      text: "Idea b — “AI mentor for everyone”",
    },
    {
      type: "p",
      text: "Pain: vague desire for self-improvement. Segment: undefined. Wedge: “friendlier GPT.” First outcome: chat that feels nice. Kill criteria: none. Verdict: interesting podcast topic, not a product plan. Curiosity can continue as content experiments without a multi-year platform bet.",
    },
    {
      type: "p",
      text: "Airbnb’s early wedge—better than a hotel for a specific trip context, with trust mechanisms—was urgent for hosts and guests in a way “community platform” never was. Learn from the wedge, not the later empire. Related teardown energy: [Airbnb homepage](/blog/product-teardown-airbnb-homepage).",
    },
    {
      type: "h2",
      text: "What the filter is not",
    },
    {
      type: "ul",
      items: [
        "Not a substitute for taste or craft once you greenlight.",
        "Not a claim that only small ideas win—sequencing still allows ambition.",
        "Not an excuse to ignore distribution forever—only to delay it until the path works ([dig deeper than marketing](/blog/every-startup-looks-like-marketing-problem-until-deeper)).",
        "Not anti-innovation—anti-unexamined inventory on the roadmap.",
      ],
    },
    {
      type: "p",
      text: "Nielsen Norman Group’s emphasis on observing real behaviour over hypothetical enthusiasm is useful when you validate urgency—[NN/g](https://www.nngroup.com/). Baymard’s evidence-led culture is another external nudge against building from opinions alone—[Baymard](https://baymard.com/blog). Google’s people-first guidance rewards products and pages that help a real audience—[Google Search Central](https://developers.google.com/search/docs).",
    },
    {
      type: "h2",
      text: "Evidence quality: what counts and what flatters",
    },
    {
      type: "p",
      text: "Not all validation is equal. A LinkedIn poll is entertainment. A waitlist without payment intent is a soft maybe. Stronger evidence looks like: paid pilots, deposit pre-orders, repeated unpaid workarounds with named costs, and users who recruit colleagues without prompting. Weak evidence looks like: “I would use that,” advisor enthusiasm, and competitor feature checklists treated as demand.",
    },
    {
      type: "p",
      text: "When evidence conflicts, prefer behaviour over compliments. Watch what people already do on Fridays when the pain hits. That observation habit is classic UX research discipline—[NN/g](https://www.nngroup.com/) and the [Interaction Design Foundation](https://www.interaction-design.org/) both teach versions of it. I borrow the humility without borrowing the bureaucracy.",
    },
    {
      type: "h3",
      text: "Runway math belongs in the filter",
    },
    {
      type: "p",
      text: "A product can pass qualitatively and still be unwise on your timeline. If first value requires six months of platform work and you have four months of runway, the idea is not “validated”—it is mismatched to constraints. Either thin the outcome, fund the gap, or choose a different wedge. Strategy includes arithmetic. Ignoring runway while celebrating interview quotes is how thoughtful people still ship themselves into a corner. Related: [what founders get wrong about PMF](/blog/what-founders-get-wrong-about-product-market-fit).",
    },
    {
      type: "p",
      text: "Similarly, if distribution to the ICP is structurally blocked—no affordable channel, no partners, no SEO path, no sales motion you can execute—revisit worthiness. Building a beloved product nobody can discover is a museum with a Slack channel. Sequence discovery constraints into the filter, not as a post-launch surprise.",
    },
    {
      type: "h2",
      text: "Team dynamics that break the filter",
    },
    {
      type: "p",
      text: "Filters fail socially before they fail logically. A co-founder falls in love with the demo. An investor attaches identity to the category story. An engineer has already built half the platform “because we would need it anyway.” In those rooms, the filter must be a shared artefact—answers written, kill criteria dated—not a vibe check in a hallway. If someone wants to override a red signal, make the override explicit and temporary, with a review date. Silent overrides are how dead products stay “strategic priorities.”",
    },
    {
      type: "p",
      text: "I also separate build decisions from identity. Killing an idea is not killing the company’s ambition. It is protecting ambition for a job the market will fund. Teams that equate stopping with failure keep burning runway to avoid an awkward conversation. Awkward is cheaper. For sequencing once something does pass, [if I joined tomorrow](/blog/if-i-joined-your-startup-tomorrow-what-id-do-first) and [thirty-day changes](/blog/what-i-would-change-if-you-gave-me-your-startup-30-days) describe how I operationalise the green light without instantly returning to fog.",
    },
    {
      type: "h2",
      text: "Thin builds versus platform fantasies",
    },
    {
      type: "p",
      text: "Even after a green light, the first ship should be embarrassingly focused. Platform fantasies—“we will need multi-tenant everything eventually”—are how first outcomes slip into next year. Build the spine that delivers the job; leave the cathedral for later. Linear and early Stripe energy beats enterprise architecture cosplay. If engineers worry about rework, budget intentional rework as the price of learning—cheaper than building the final form of the wrong product.",
    },
    {
      type: "p",
      text: "Marketing for a thin build should also stay thin: one offer, one proof set, one CTA path. Do not announce a platform while shipping a wedge. The mismatch trains distrust. [Why beautiful websites don’t always convert](/blog/why-beautiful-websites-dont-always-convert) applies equally to launch pages that over-promise scope the product cannot yet keep.",
    },
    {
      type: "p",
      text: "If the thin build still cannot find urgency after honest exposure to the ICP, honour the kill criteria. Parking an idea is a strategic act. It frees attention for a job that already hurts. Curiosity can continue in notebooks; runway should not.",
    },
    {
      type: "h2",
      text: "From filter to first build",
    },
    {
      type: "p",
      text: "If the filter passes, I still do not leap to a kitchen-sink MVP. I define the smallest experience that delivers the first outcome, align the public story to that outcome, and instrument learning metrics. That is the spirit of [strategy before screens](/blog/product-strategy-framework-before-designing-screen) and [from strategy to launch](/blog/from-strategy-to-launch-how-i-approach-new-product). If the filter fails, I recommend a cheaper probe: concierge service, waitlist with interviews, manual workflow—learning without permanent UI tax.",
    },
    {
      type: "callout",
      title: "Passing is not forever",
      text: "Re-run the filter when ICP shifts, when a competitor changes alternatives, or when activation data contradicts interview optimism. Greenlights expire.",
    },
    {
      type: "h2",
      text: "Try this: a 90-minute build filter workshop",
    },
    {
      type: "ol",
      items: [
        "Write the idea in one sentence without buzzwords.",
        "Answer the five filter questions with evidence (quotes, spend, metrics)—blank answers count as fails.",
        "List real alternatives, including doing nothing.",
        "Design the thinnest first outcome experience on paper.",
        "Write kill criteria and a review date. Put both in the project brief.",
        "Decide: build thin, probe manually, or park the idea without guilt.",
      ],
    },
    {
      type: "p",
      text: "For day-one company diagnosis after you have something shipping, use [if I joined tomorrow](/blog/if-i-joined-your-startup-tomorrow-what-id-do-first). For spend discipline once you have a path, use [five questions before £10k marketing](/blog/before-spend-10000-marketing-five-questions).",
    },
    {
      type: "takeaway",
      text: "If you cannot name the cost of not having the product for a specific buyer, you are not ready to ship—you are ready to keep talking, which is cheaper.",
    },
    {
      type: "faq",
      items: [
        {
          question: "What if interviews are enthusiastic but nobody pays?",
          answer:
            "Enthusiasm is not a purchase order. Run paid pilots or pre-orders. Compliments are free; budgets are not. Treat unpaid praise as a yellow light.",
        },
        {
          question: "Can we build while still validating?",
          answer:
            "Yes—thin slices with kill criteria. Avoid platform architecture for unproven jobs. Concierge and manual steps are valid scaffolding.",
        },
        {
          question: "How does this apply to internal products?",
          answer:
            "Replace willingness to pay with willingness to change behaviour and sponsor time. Urgency, first outcome, and kill criteria still apply.",
        },
        {
          question: "What if the idea is a founder’s personal passion?",
          answer:
            "Passion can fuel craft. It cannot invent urgency. Keep passion projects scoped as experiments until the filter passes with external evidence.",
        },
      ],
    },
    {
      type: "h2",
      text: "What to do before your next build decision",
    },
    {
      type: "ul",
      items: [
        "Run the five questions in writing with evidence attached.",
        "Name alternatives honestly, including status quo.",
        "Define first outcome and kill criteria before sprint planning.",
        "Choose thin build, manual probe, or park—no vague “exploratory roadmap.”",
        "Revisit the filter on a dated cadence after any greenlight.",
      ],
    },
    {
      type: "p",
      text: "If we cannot name the cost of not having it, we are not ready to ship. We are ready to keep talking—and talking is cheaper than building the wrong thing. Use the filter. Protect the runway. Build when the customer’s pain is already doing half the selling.",
    },
    {
      type: "cta",
      lead: "Evaluating an idea and want a rigorous second opinion?",
      button: "Request a build filter session",
      href: "/contact",
    },
  ],
};

export default post;
