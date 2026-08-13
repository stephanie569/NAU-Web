import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "three-product-decisions-cost-companies-millions",
  title: "3 quiet product decisions that burn millions",
  excerpt:
    "Broad ICPs, feature theatre, and scaling before activation rarely look dramatic in the moment. Over years they destroy conversion, retention, and clarity-quietly, and at scale.",
  date: "June 25, 2026",
  category: "Research & Positioning",
  image: "/images/blog/blog-29-cost-millions.png",
  metaDescription:
    "Three product decisions that quietly cost companies millions: serving everyone, shipping features instead of strategy, and scaling acquisition before activation is solved.",
  content: [
    {
      type: "p",
      text: "Some product decisions explode immediately. A bad launch. A pricing change that tanks conversion overnight. A hire that does not fit. Those are easy to spot because the damage arrives with a receipt.",
    },
    {
      type: "p",
      text: "The expensive ones are quieter. They look responsible in a roadmap review. They survive board meetings. They get defended with phrases like “for now,” “flexibility,” and “we’ll refine later.” Years later, the company is paying in slower sales cycles, higher CAC, weaker retention, and teams that cannot explain the product the same way twice. Quiet is not the same as cheap.",
    },
    {
      type: "p",
      text: "After years of product strategy and web experience work with early-stage teams, I keep seeing the same three decisions do the most damage. Not because founders are careless-because the decisions feel safe while they are being made. This piece breaks down each one: what it looks like, why it costs so much, what better looks like, and how to reverse it before the bill compounds.",
    },
    {
      type: "callout",
      title: "What “millions” actually means here",
      text: "I am not inventing a study. I mean the compounding cost of wasted acquisition, elongated sales cycles, churned cohorts, and years of roadmap spend on the wrong surface. A company that burns £40k/month on ads into a fuzzy offer, or ships two years of features for an undefined ICP, is not making a dramatic mistake. It is making an expensive habit.",
    },
    {
      type: "h2",
      text: "Decision 1: serving everyone “for now”",
    },
    {
      type: "p",
      text: "Broad ICPs feel commercially responsible. Narrowing feels like leaving money on the table. So the website says “for modern teams,” the sales deck says “for any growing company,” and the product tries to be useful to everyone who might eventually pay. The result is chronic vagueness dressed up as optionality.",
    },
    {
      type: "p",
      text: "Stripe did not win by being “payments for everyone imaginable” in language that meant nothing. Early Stripe made developers feel understood. Airbnb did not open with “hospitality for all humans.” It made hosts and guests see a specific job. Notion eventually became broad-but it earned breadth after a clear wedge, not before. Broad without a wedge is not ambition. It is fog with a larger TAM slide.",
    },
    {
      type: "h3",
      text: "Why this decision costs so much",
    },
    {
      type: "ul",
      items: [
        "Messaging cannot commit, so conversion stays soft across every channel.",
        "Onboarding cannot prioritise one first win, so activation stays mediocre.",
        "Sales cycles lengthen because every call re-discovers who the product is for.",
        "Product teams ship for conflicting personas, so complexity grows without loyalty.",
        "Support and success absorb edge cases that never should have been sold.",
      ],
    },
    {
      type: "p",
      text: "The quiet cost is not one failed campaign. It is years of average performance that never becomes sharp enough to compound. Competitors with a narrower story start winning the same accounts-not because their product is better, but because the buyer feels recognised faster.",
    },
    {
      type: "h3",
      text: "A simple framework: wedge → proof → expand",
    },
    {
      type: "ol",
      items: [
        "Wedge: pick one customer, one urgent job, one outcome you can deliver in the first session.",
        "Proof: get retention, referrals, and language from that wedge before you broaden copy.",
        "Expand: only then widen ICP, channels, and feature surface-using evidence, not optimism.",
      ],
    },
    {
      type: "p",
      text: "If you cannot name who is *not* a fit, you do not have an ICP. You have a hope. Hope is a lovely personality trait and a disastrous go-to-market strategy.",
    },
    {
      type: "table",
      headers: ["Signal", "Broad ICP (expensive)", "Wedge ICP (compounding)"],
      rows: [
        [
          "Homepage",
          "Category language, many audiences",
          "One customer, one outcome, one CTA",
        ],
        [
          "Sales",
          "Custom pitch every call",
          "Repeatable narrative with small variants",
        ],
        [
          "Roadmap",
          "Requests from everywhere",
          "Requests scored against the wedge job",
        ],
        [
          "Metrics",
          "Aggregate vanity totals",
          "Cohort health by segment",
        ],
      ],
    },
    {
      type: "takeaway",
      text: "Niche first is not permanent smallness. It is how you earn the right to expand without paying for confusion at every stage of the funnel. For the clarity version of this problem, see [why products often have a clarity problem, not a marketing problem](/essays/product-doesnt-have-marketing-problem-clarity-problem).",
    },
    {
      type: "h2",
      text: "Decision 2: shipping features to avoid strategy",
    },
    {
      type: "p",
      text: "Feature velocity feels like progress. Strategy feels like conflict. Guess which one gets scheduled.",
    },
    {
      type: "p",
      text: "Teams ship integrations, dashboards, settings, and “just one more workflow” because shipping is visible and deciding is uncomfortable. The product becomes a museum of partially related capabilities. Conversion stagnates. Existing customers ask for even more. New customers cannot find the plot. Complexity compounds while clarity does not.",
    },
    {
      type: "p",
      text: "Linear’s strength was never “more project management features than anyone.” It was a sharp opinion about how software teams should work. Figma did not win by matching every legacy desktop tool checkbox on day one. It won a clear collaboration job and expanded from there. Feature parity is a late-game problem. Early-game companies that chase it are paying for someone else’s roadmap.",
    },
    {
      type: "h3",
      text: "The hidden bill for feature theatre",
    },
    {
      type: "ul",
      items: [
        "Engineering time that never returns: every feature has a maintenance mortgage.",
        "UX debt: denser navigation, slower onboarding, more empty states that need explanation.",
        "Positioning debt: the story becomes a list, and lists do not create preference.",
        "Sales debt: demos get longer while conviction gets thinner.",
        "Opportunity cost: the feature that would have created the aha moment never ships.",
      ],
    },
    {
      type: "callout",
      title: "A useful test",
      text: "If removing a feature would not change your primary customer’s first-week outcome, it is probably not strategy-it is anxiety with a pull request. The [hidden cost of building features nobody asked for](/essays/hidden-cost-building-features-nobody-asked-for) is rarely the build week. It is the years of explaining, supporting, and navigating around it.",
    },
    {
      type: "h3",
      text: "Framework: outcome backlog, not feature backlog",
    },
    {
      type: "p",
      text: "Rewrite the next quarter’s backlog as outcomes a defined customer must reach. Features become hypotheses for those outcomes-not commitments because a competitor shipped something shiny.",
    },
    {
      type: "ol",
      items: [
        "Name the primary outcome for your wedge ICP in the first session and first month.",
        "Score every request by how directly it moves that outcome.",
        "Cap “exploratory” features to a small percentage of capacity-then review ruthlessly.",
        "Kill or pause one active initiative that only exists to avoid a positioning decision.",
      ],
    },
    {
      type: "quote",
      text: "Shipping feels like progress. Deciding feels like conflict. Companies that only schedule the first eventually pay for the second with interest.",
    },
    {
      type: "takeaway",
      text: "If your roadmap is growing faster than your customers’ ability to explain why they bought you, you are not iterating. You are diluting. Strategy is the constraint that makes iteration useful.",
    },
    {
      type: "h2",
      text: "Decision 3: scaling acquisition before activation",
    },
    {
      type: "p",
      text: "Buying traffic into a weak first-run experience multiplies waste. You are not buying growth. You are funding confusion at scale-which is an impressive way to spend money, if not a sensible one.",
    },
    {
      type: "p",
      text: "Activation is the moment a new user reaches a meaningful outcome-not account creation, not “completed profile,” not “invited a teammate because the checklist said so.” If time-to-value is long, unclear, or dependent on a heroic onboarding call every time, paid acquisition will look like a channel problem when it is an experience problem.",
    },
    {
      type: "p",
      text: "This is why so many teams “test ads” and conclude the channel does not work. The channel worked. It delivered people into a product that did not repay attention quickly enough. For a related pattern, see [the most expensive early-stage mistake](/essays/most-expensive-mistake-early-stage-founders) and [what founders get wrong about product-market fit](/essays/what-founders-get-wrong-about-product-market-fit).",
    },
    {
      type: "h3",
      text: "What good activation design looks like",
    },
    {
      type: "ul",
      items: [
        "One primary path to first value-not five optional tours.",
        "Defaults that create a useful starting state instead of an empty canvas.",
        "Copy that matches the acquisition promise (ad → page → first session).",
        "Instrumentation that measures outcome, not only funnel steps.",
        "Human follow-up for high-intent users until the product can carry the handoff.",
      ],
    },
    {
      type: "p",
      text: "Apple’s onboarding discipline-and more generally, products that treat first-run as part of the product, not a tutorial bolted on-show the same principle: belief is designed, not hoped for. If you want a concrete teardown angle on that idea, I wrote about [how I’d improve Apple’s onboarding experience](/essays/how-id-improve-apple-onboarding-experience).",
    },
    {
      type: "h3",
      text: "Framework: fix TTV before CAC",
    },
    {
      type: "table",
      headers: ["Stage", "Question", "If the answer is weak"],
      rows: [
        [
          "Promise",
          "Does the landing page match the ad?",
          "Stop spend; fix message match first",
        ],
        [
          "First session",
          "Can a new user reach value without help?",
          "Redesign activation before scaling",
        ],
        [
          "Week one",
          "Do cohorts return without discounts?",
          "You have a retention problem, not a channel problem",
        ],
        [
          "Paid scale",
          "Is unit economics stable by segment?",
          "Scale only the segments that activate",
        ],
      ],
    },
    {
      type: "takeaway",
      text: "Acquisition amplifies whatever the product already is. If activation is weak, scale makes the weakness louder and more expensive. Fix time-to-value before you buy attention.",
    },
    {
      type: "h2",
      text: "How these three decisions reinforce each other",
    },
    {
      type: "p",
      text: "They rarely appear alone. A broad ICP forces a broad feature set. A broad feature set slows activation. Weak activation makes founders buy more traffic to compensate. More traffic creates more edge-case requests. The roadmap expands again. The story gets vaguer. CAC rises. Everyone works harder. Growth still feels fragile.",
    },
    {
      type: "p",
      text: "This is why “we need more marketing” is often the wrong diagnosis. Many teams actually need the system underneath marketing to stop contradicting itself. That is the argument behind [what founders actually need isn’t more marketing](/essays/founders-actually-need-isnt-more-marketing) and [why every startup looks like a marketing problem until you dig deeper](/essays/every-startup-looks-like-marketing-problem-until-deeper).",
    },
    {
      type: "quote",
      text: "Quiet product decisions do not fail loudly. They fail as permanently average growth-and average growth is how companies run out of time while still looking busy.",
    },
    {
      type: "h2",
      text: "Try this: a 90-minute quiet-cost audit",
    },
    {
      type: "p",
      text: "You do not need a reorganisation to find which decision is draining you. Run this with your founding team this week.",
    },
    {
      type: "ol",
      items: [
        "Write your ICP in one sentence. Then write who you will refuse for 90 days. If you cannot refuse anyone, Decision 1 is active.",
        "List the last six shipped features. For each, name the customer outcome improved. If you cannot, Decision 2 is active.",
        "Pull activation by cohort for the last 8 weeks. If paid cohorts activate worse than organic-or activation is undefined-Decision 3 is active.",
        "Pick one decision to reverse for 30 days. Only one. Reversal requires focus, not a manifesto.",
        "Rewrite homepage + first-session success criteria to match that reversal before you change channels.",
      ],
    },
    {
      type: "callout",
      title: "Exercise: the million-pound sentence",
      text: "Complete this without jargon: “We help [specific person] achieve [specific outcome] in [specific timeframe], unlike [clear alternative].” If your team cannot agree on the blanks in under ten minutes, you have found the leak. The rest of the company is already paying for the disagreement.",
    },
    {
      type: "h2",
      text: "What reversing each decision looks like in practice",
    },
    {
      type: "h3",
      text: "Reverse a broad ICP",
    },
    {
      type: "p",
      text: "Choose one wedge for a quarter. Update the homepage, ads, outbound, and demo script to that wedge. Keep serving existing customers outside the wedge, but stop recruiting them. Measure conversion and retention for the wedge alone. Expand only when the wedge is boringly consistent.",
    },
    {
      type: "h3",
      text: "Reverse feature theatre",
    },
    {
      type: "p",
      text: "Freeze net-new surface area for two sprints. Use the capacity to improve time-to-value, empty states, and the primary workflow. Communicate the freeze as strategy, not scarcity. Customers respect focus more than founders expect-especially when the product finally feels inevitable.",
    },
    {
      type: "h3",
      text: "Reverse premature scale",
    },
    {
      type: "p",
      text: "Cut acquisition spend to a learning budget. Fix message match and first-session outcome. Reopen spend only when activation for the target segment clears a threshold you define in advance. If that feels emotionally difficult, that is useful information about how addicted the team has become to motion.",
    },
    {
      type: "h2",
      text: "Where external research helps (and where it doesn’t)",
    },
    {
      type: "p",
      text: "Usability and conversion research will not invent your strategy, but it will stop you guessing about friction. The [Nielsen Norman Group](https://www.nngroup.com/) remains a practical library for usability patterns. [Baymard’s research](https://baymard.com/blog) is excellent on checkout and form friction-even if you are B2B SaaS, the principles transfer. For product learning culture, [Y Combinator’s Library](https://www.ycombinator.com/library) and [First Round Review](https://review.firstround.com/) are still worth reading when you need outside perspective without agency theatre.",
    },
    {
      type: "p",
      text: "What those sources cannot do is choose your wedge. That is still a founder decision. Frameworks reduce fog. They do not replace courage.",
    },
    {
      type: "faq",
      items: [
        {
          question: "How do I know which of the three decisions is my main leak?",
          answer:
            "Start with symptoms. If strangers cannot explain your offer, begin with ICP. If people understand the offer but never reach value, begin with activation. If the product works for a niche but the roadmap is a buffet, begin with feature restraint. Most teams have all three; reverse the one that unblocks the next 30 days.",
        },
        {
          question: "Won’t niching hurt fundraising or TAM slides?",
          answer:
            "Investors who understand early-stage companies prefer a credible wedge over a fictional total addressable market. A sharp wedge with proof is easier to expand into a real market story than a broad claim with soft metrics.",
        },
        {
          question: "What if competitors are shipping faster than us?",
          answer:
            "Shipping volume is not the same as customer preference. Match the jobs that create retention in your wedge. Ignore checkbox features that only exist to look complete in comparison grids.",
        },
        {
          question: "When is it actually time to scale acquisition?",
          answer:
            "When a cold visitor can understand the offer, reach a meaningful outcome without heroics, and return without discounts-and when unit economics hold for that segment. Until then, treat paid spend as a diagnostic tool, not a growth engine.",
        },
      ],
    },
    {
      type: "h2",
      text: "A clearer ending",
    },
    {
      type: "p",
      text: "The companies that lose millions to these decisions rarely feel reckless. They feel diligent. They are shipping. They are testing channels. They are “keeping options open.” Meanwhile the product story thins, activation stays soft, and every pound of growth costs more than it should.",
    },
    {
      type: "p",
      text: "If you recognise one of these decisions in your company, do not try to fix all three this month. Pick the quietest expensive one-the one that makes every other investment underperform-and reverse it with discipline. Clarity compounds. So does fog. Choose which interest rate you want to pay.",
    },
    {
      type: "p",
      text: "If you want a practical starting diagnostic after this, read [If your product isn’t growing, start here](/essays/if-product-isnt-growing-start-here). If the deeper issue is belief before scale, read [why great products fail before product-market fit](/essays/why-great-products-fail-before-product-market-fit).",
    },
    {
      type: "cta",
      lead: "Suspect a quiet product decision is draining growth? Let’s find it before another quarter compounds the cost.",
      button: "Book a strategy review",
      href: "/contact",
    },
  ],
};

export default post;
