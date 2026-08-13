import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "what-founders-get-wrong-about-product-market-fit",
  title: "What product brands get wrong about PMF (every single time)",
  excerpt:
    "Product-market fit isn't a slide. It's whether real customers keep choosing the thing you make.",
  date: "July 21, 2026",
  category: "Research & Positioning",
  image: "/images/blog/blog-07-pmf-wrong.png",
  metaDescription:
    "What product brands get wrong about product-market fit-and how to treat it as a moving target, not a milestone.",
  content: [
    {
      type: "p",
      text: "Founders get product-market fit wrong in predictable ways. They celebrate launches. They confuse compliments with demand. They declare fit because investors liked the deck. Then reality arrives as churn and stalled conversion-which is the market’s way of asking for a refund on the narrative.",
    },
    {
      type: "p",
      text: "I care about this because “we have PMF” is often used as a permission slip to scale. If the declaration is premature, you get the [most expensive early-stage mistake](/essays/most-expensive-mistake-early-stage-founders): amplifying an offer the market has not truly pulled. Fit is not a mood. It is a pattern of evidence.",
    },
    {
      type: "p",
      text: "This piece is about the misconceptions, a clearer definition, and the signals I trust-plus exercises you can run without inventing a vanity dashboard. For why strong products still die before fit, see [why great products fail before product-market fit](/essays/why-great-products-fail-before-product-market-fit).",
    },
    {
      type: "h2",
      text: "A clearer definition (before the misconceptions)",
    },
    {
      type: "p",
      text: "Product-market fit is repeated evidence that a defined segment gets enough value to return, pay, and refer-without heroic founder intervention every week. If the product only works when you are personally charming people into staying, you have a relationship, not fit.",
    },
    {
      type: "ul",
      items: [
        "A specific customer can describe the problem and your value in their own words.",
        "Retention by cohort improves or stabilises for that segment-not only total user counts.",
        "Willingness to pay shows up without constant discounting as the main motion.",
        "Pull appears: inbound interest, referrals, or expansion that is not entirely manufactured.",
        "The story travels without you in the room.",
      ],
    },
    {
      type: "takeaway",
      text: "Fit is evidence in a segment. Broad vibes and launch parties are not evidence.",
    },
    {
      type: "h2",
      text: "Common misconceptions",
    },
    {
      type: "h3",
      text: "“We launched, so we’re close.”",
    },
    {
      type: "p",
      text: "Launch is distribution, not fit. Shipping makes the product available. Fit is what happens after availability: do the right people keep getting value? Many launches are excellent marketing events for products that still have not found a home.",
    },
    {
      type: "h3",
      text: "“People say they love it.”",
    },
    {
      type: "p",
      text: "Love without retention is politeness. Users will say kind things, especially to founders. Watch behaviour: return visits, completed jobs, unpaid invoices that somehow still get paid, referrals that happen without a campaign. Compliments are data. They are not sufficient data.",
    },
    {
      type: "h3",
      text: "“Our waitlist is huge.”",
    },
    {
      type: "p",
      text: "Waitlists measure curiosity, not value. Curiosity is useful. It is also cheap for the signer and expensive for the team that mistakes it for demand. Convert a slice of the waitlist into activated, retained users before you tattoo “PMF” on the pitch deck.",
    },
    {
      type: "h3",
      text: "“We’ll find fit after we scale.”",
    },
    {
      type: "p",
      text: "Scale reveals problems; it rarely invents fit. More traffic on a fuzzy offer produces more confusion at higher cost. If anything, scale delays learning by drowning signal in noise. Learn in a narrow segment first.",
    },
    {
      type: "h3",
      text: "“Investors said we’re early but promising-so fit is inevitable.”",
    },
    {
      type: "p",
      text: "Investor enthusiasm is not customer retention. It can fund the search for fit. It cannot substitute for it. Treat capital as time to gather evidence-not as evidence itself.",
    },
    {
      type: "ul",
      items: [
        "“We launched, so we’re close.” Launch is distribution, not fit.",
        "“People say they love it.” Love without retention is politeness.",
        "“Our waitlist is huge.” Waitlists measure curiosity, not value.",
        "“We’ll find fit after we scale.” Scale reveals problems; it rarely invents fit.",
        "“Our category is hot.” Heat is not a customer.",
      ],
    },
    {
      type: "quote",
      text: "If the product only works when you are personally charming people into staying, you have a relationship, not fit.",
    },
    {
      type: "h2",
      text: "What good evidence looks like (without fake precision)",
    },
    {
      type: "p",
      text: "I avoid pretending there is one universal PMF score. Segments differ. Motions differ. What does not differ: you need repeated proof in a defined group, not a single lucky month.",
    },
    {
      type: "table",
      headers: ["Signal", "Stronger evidence", "Weaker evidence"],
      rows: [
        [
          "Retention",
          "Cohort retention for ICP users who activated",
          "Total MAU rising while cohorts decay",
        ],
        [
          "Demand",
          "Qualified inbound / referrals from ICP",
          "Press spike with no follow-through",
        ],
        [
          "Value",
          "Users complete the core job unprompted",
          "Users need weekly founder check-ins to stay",
        ],
        [
          "Payment",
          "Pay, expand, or clear intent to pay",
          "Discounts as the default closer",
        ],
        [
          "Language",
          "Customers explain you consistently",
          "Every customer describes a different product",
        ],
      ],
    },
    {
      type: "p",
      text: "Activation matters as much as retention. Signup is not value. Measure “first meaningful outcome.” If people create accounts and never reach value, you do not have a top-of-funnel problem-you have a product experience problem wearing acquisition cologne.",
    },
    {
      type: "takeaway",
      text: "Track retention by cohort, separate activation from signup, and listen for customers explaining the product without your help.",
    },
    {
      type: "h2",
      text: "How strong products talk about value (and what to copy)",
    },
    {
      type: "p",
      text: "Notice how clear products make the job obvious. Figma made collaborative design feel inevitable for teams tired of file handoffs. Airbnb made hosting and staying with strangers feel navigable through trust design-not through vague “community platform” language alone. Stripe reduced a painful job to something developers could finish. The lesson is not “be a famous company.” The lesson is: fit shows up when a segment repeatedly chooses you for a job they already have.",
    },
    {
      type: "p",
      text: "A fictional counterexample: Loomwise, an AI meeting tool, declared PMF after a Product Hunt launch and 8,000 waitlist signups. Cohort retention for the ICP-sales managers at 30-100 person B2B teams-was weak. People loved the demo GIF. They did not change their weekly behaviour. Loomwise had launch fit with Twitter, not product-market fit with sales managers. Painful distinction. Useful distinction.",
    },
    {
      type: "h2",
      text: "A practical way to pressure-test fit this month",
    },
    {
      type: "ol",
      items: [
        "Track retention by cohort, not total users-slice by ICP if you can.",
        "Separate activation from signup; define the first meaningful outcome in one line.",
        "Listen for customers explaining the product without your help; capture phrases.",
        "Test willingness to pay before you romanticise growth-price conversations count.",
        "Pick one segment and one job; stop averaging metrics across everyone.",
        "Write down what would falsify your PMF claim in the next sixty days.",
      ],
    },
    {
      type: "callout",
      title: "Falsification prompt",
      text: "Complete this sentence: “We would admit we do not have fit yet if ___.” If you cannot fill the blank, your definition of fit is not operational-it is aspirational.",
    },
    {
      type: "h2",
      text: "Fit, clarity, and the website",
    },
    {
      type: "p",
      text: "Sometimes founders have early fit in a segment and still fail to grow because the public story is muddy. That is a clarity and distribution problem on top of a real wedge-see [clarity problems](/essays/product-doesnt-have-marketing-problem-clarity-problem) and [first-ten-seconds website failures](/essays/why-startup-websites-fail-first-10-seconds). Other times the story is polished and fit is absent: beautiful site, weak retention. Different medicine.",
    },
    {
      type: "p",
      text: "Use the [strategy framework before screens](/essays/product-strategy-framework-before-designing-screen) to keep ICP, job, outcome, and belief gaps explicit. Use [repositioning in 60 minutes](/essays/how-id-reposition-your-startup-in-60-minutes) when the wedge needs a public rewrite. Do not use paid scale as a substitute for either.",
    },
    {
      type: "h2",
      text: "Reading that keeps you honest",
    },
    {
      type: "p",
      text: "Operator essays in the [Y Combinator Library](https://www.ycombinator.com/library) and [First Round Review](https://review.firstround.com/) are useful because they obsess over customers and retention, not slogans. [Harvard Business Review](https://hbr.org/) is denser on strategy framing. None of them replace talking to your users-but they can stop you from mistaking a launch spike for a market.",
    },
    {
      type: "faq",
      items: [
        {
          question: "Is there a single metric that proves PMF?",
          answer:
            "No single metric is universal. A cluster of evidence in a defined segment beats one vanity number. If someone sells you a magic PMF threshold for every business, treat it as a heuristic-not a law.",
        },
        {
          question: "Can we have fit in one segment and not another?",
          answer:
            "Yes-and that is normal. Declare fit where the evidence lives. Expanding too early into non-fit segments recreates fog.",
        },
        {
          question: "What if retention is good but growth is slow?",
          answer:
            "You may have a wedge with a distribution or clarity problem. Fix the story and channels without abandoning the segment that already loves you.",
        },
        {
          question: "How does this relate to deciding whether to build more?",
          answer:
            "If fit evidence is weak, more features rarely create it. See [how I decide whether a product is worth building](/essays/how-i-decide-whether-product-worth-building) and [if your product isn’t growing, start here](/essays/if-product-isnt-growing-start-here).",
        },
      ],
    },
    {
      type: "h2",
      text: "Building a lightweight PMF evidence board",
    },
    {
      type: "p",
      text: "You do not need a BI cathedral. You need a board-literal or digital-that forces honesty weekly:",
    },
    {
      type: "ul",
      items: [
        "Segment definition (who counts as ICP this month).",
        "Activation definition (first meaningful outcome).",
        "Cohort retention sketch for ICP activators.",
        "Five verbatim customer explanations of the product.",
        "Payment signal (paid, expanded, or strong intent with dates).",
        "Falsifier: what would make us retract the PMF claim.",
      ],
    },
    {
      type: "p",
      text: "Review it weekly for fifteen minutes. If the board is empty or theatrical, you are not “data driven.” You are decorating. Teams that keep this board current argue less about vibes and more about what to fix next-activation, wedge, or story.",
    },
    {
      type: "h2",
      text: "When founders confuse product-market fit with product-founder fit",
    },
    {
      type: "p",
      text: "Some products work brilliantly when the founder is in every deal, every onboarding, every escalation. That can be an early gift. It is not fit. Fit requires the product and the story to work when you are on a plane with Wi‑Fi that only pretends to exist. If removing the founder collapses retention, you have high-touch success-and a scaling mirage.",
    },
    {
      type: "p",
      text: "Document which interventions you personally provide. Turn the best ones into product or onboarding. Eliminate the ones that only exist to compensate for confusion. This is how you graduate from heroics to a business-see also [the difference between building a product and building a business](/essays/difference-building-product-and-building-business).",
    },
    {
      type: "h2",
      text: "Segment discipline: the antidote to averaged lies",
    },
    {
      type: "p",
      text: "Averaged metrics hide fit and non-fit in the same chart. A segment that loves you and a segment that shrugs can average into “interesting retention.” Split the data. Declare fit only where behaviour supports it. Expand only with intent. Averaging feels mature. It is often how teams talk themselves into premature scale.",
    },
    {
      type: "callout",
      title: "Try this week",
      text: "Take your last fifty activated users. Tag them into one primary ICP and “other.” Compare retention and payment between the two. If “other” is large and weak, your story may be attracting the wrong crowd-even if the product is strong for someone.",
    },
    {
      type: "h2",
      text: "PMF myths that waste roadmap time",
    },
    {
      type: "ul",
      items: [
        "“One more feature and we’ll unlock fit.” Features can help a clear job; they rarely invent a job.",
        "“A redesign will create fit.” Design can reveal value; it cannot replace value.",
        "“Enterprise deals prove fit.” A few custom projects prove you can sell projects.",
        "“Competitors raised, so the market is validated for us.” Their fit is not yours.",
      ],
    },
    {
      type: "p",
      text: "Roadmaps should serve the evidence board-not the myth list. When evidence is weak, prioritise learning: interviews, activation repair, sharper wedge. When evidence is strong in a segment, prioritise making that value faster to reach and easier to explain. That is how [products worth building](/essays/how-i-decide-whether-product-worth-building) stay worth building.",
    },
    {
      type: "takeaway",
      text: "Fit claims should survive contact with cohorts, payment, and customer language. If they only survive contact with optimism, keep working.",
    },
    {
      type: "h2",
      text: "From evidence to next action: a simple decision tree",
    },
    {
      type: "p",
      text: "Once you stop arguing about vibes, the next action becomes clearer:",
    },
    {
      type: "ul",
      items: [
        "Strong retention in ICP, weak growth → clarify story and distribution; do not rebuild the core job.",
        "Strong signup, weak activation → fix time-to-value before buying more traffic.",
        "Strong activation, weak retention → the job may be wrong, or the product fails after the honeymoon.",
        "Inconsistent customer language → positioning and clarity work before scale.",
        "No willingness to pay → you may have a useful toy, not a business yet.",
        "Fit in one segment, chaos everywhere else → protect the wedge; expand only with a deliberate second sentence.",
      ],
    },
    {
      type: "p",
      text: "This tree is deliberately blunt. Bluntness prevents the popular move of doing everything at once-ads, redesign, six features-and learning nothing. Pick the branch. Run the work. Re-check the evidence board. That loop is how founders graduate from PMF mythology to product reality. It is also how you avoid the special boredom of debating “do we have fit?” for the twelfth month without changing a single metric definition.",
    },
    {
      type: "h2",
      text: "A closing note on honesty with yourself",
    },
    {
      type: "p",
      text: "The hardest part of PMF is not the framework. It is admitting when you do not have it yet-especially after public launches, investor updates, or team hiring keyed to a growth story. Honesty feels like a step backward. It is usually the first step that makes forward motion real. Premature certainty is comforting and expensive-like buying a bigger megaphone for a sentence you have not finished writing.",
    },
    {
      type: "p",
      text: "Treat product-market fit as a claim that requires evidence. Then go gather evidence like an adult-not like a launch-day optimist with a ring light. And if growth is stuck, start with diagnosis before theatre: [if your product isn’t growing, start here](/essays/if-product-isnt-growing-start-here).",
    },
    {
      type: "cta",
      lead: "Unsure whether you have fit-or just momentum theatre?",
      button: "Get a PMF reality check",
      href: "/contact",
    },
  ],
};

export default post;
