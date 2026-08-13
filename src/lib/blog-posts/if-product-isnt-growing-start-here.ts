import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "if-product-isnt-growing-start-here",
  title: "Product stuck? Don't touch ads yet. Start here.",
  excerpt:
    "When growth stalls, founders reach for channels. Start instead with a diagnostic: clarity, activation, proof, retention-then distribution. A practical sequence for stuck products.",
  date: "June 24, 2026",
  category: "Research & Positioning",
  image: "/images/blog/blog-30-start-here.png",
  metaDescription:
    "If your product isn’t growing, start with clarity, activation, proof, and retention-not more channels. A practical diagnostic framework for stalled startups.",
  content: [
    {
      type: "p",
      text: "If your product is not growing, do not start with a new channel plan. Start with a diagnostic that separates symptoms from causes. New channels are easy to buy. Clear diagnosis is harder-and usually cheaper.",
    },
    {
      type: "p",
      text: "I say this as someone who has watched capable founders respond to flat charts with more content, more ads, more partnerships, and more features. The activity looks responsible. The underlying system stays broken. Growth problems are often clarity problems wearing a marketing costume.",
    },
    {
      type: "p",
      text: "This is the starting sequence I use with founders at nau. It is deliberately unglamorous. It will not give you a viral hook. It will tell you whether the product is ready to be amplified-or whether amplification would only make the confusion louder.",
    },
    {
      type: "callout",
      title: "Before you begin",
      text: "You need access to: homepage + key landing pages, first-run product experience, basic analytics (or honest qualitative substitutes), and five recent customer conversations. If you have none of those, that is already the diagnosis.",
    },
    {
      type: "h2",
      text: "Why “more channels” is the wrong first move",
    },
    {
      type: "p",
      text: "Channels multiply whatever is already true. If strangers cannot explain the offer, more traffic creates more confused visitors. If activation is weak, more signups create more ghost accounts. If proof is thin, more demos create longer cycles and softer closes. Distribution is an amplifier, not a strategy.",
    },
    {
      type: "p",
      text: "This is closely related to [scaling before clarity](/essays/most-expensive-mistake-early-stage-founders) and [spending the first budget in the wrong place](/essays/first-1000-pounds-startup-spent-wrong-place). The pattern is always the same: motion before understanding.",
    },
    {
      type: "quote",
      text: "Growth problems are often clarity problems wearing a marketing costume.",
    },
    {
      type: "h2",
      text: "The starting diagnostic (in order)",
    },
    {
      type: "p",
      text: "Work top to bottom. Do not skip ahead because a later stage feels more exciting. Exciting is how teams avoid the uncomfortable finding.",
    },
    {
      type: "ol",
      items: [
        "Clarity: can a stranger explain the offer?",
        "Activation: do new users reach value quickly?",
        "Proof: is belief supported where objections appear?",
        "Retention: do cohorts come back without discounts?",
        "Only then: distribution volume.",
      ],
    },
    {
      type: "takeaway",
      text: "If you cannot pass the clarity test, nothing downstream is trustworthy. Fix the story and the first session before you debate TikTok versus LinkedIn.",
    },
    {
      type: "h2",
      text: "1. Clarity: can a stranger explain the offer?",
    },
    {
      type: "p",
      text: "Clarity is not clever copy. It is whether a cold visitor can answer three questions in under ten seconds: Who is this for? What changes if I use it? What should I do next?",
    },
    {
      type: "p",
      text: "Stripe’s early clarity was developer-shaped. Notion eventually became many things, but the early pull was a clear job for teams drowning in docs. Linear made project tracking feel opinionated rather than endless. Clarity is a product decision expressed on a page-not a slogan contest.",
    },
    {
      type: "h3",
      text: "How to test clarity this week",
    },
    {
      type: "ul",
      items: [
        "Show your homepage to five people outside your company for 20 seconds. Ask them to explain the offer back to you.",
        "Compare their language to your headline. If they invent a different product, you have a clarity leak.",
        "Read your hero out loud. If you need a second paragraph to make the first make sense, rewrite the first.",
        "Check whether ads, homepage, sales deck, and first product screen use the same promise.",
      ],
    },
    {
      type: "callout",
      title: "Try this",
      text: "Rewrite the homepage for one ICP, one outcome, one proof point. Publish it. Measure bounce and CTA click for seven days before you touch channels. Related reading: [why startup websites fail in the first 10 seconds](/essays/why-startup-websites-fail-first-10-seconds) and [five minutes on your website is enough to find issues](/essays/five-minutes-on-your-website-enough-to-find-issues).",
    },
    {
      type: "takeaway",
      text: "If a stranger cannot repeat the offer, you do not have a growth problem yet. You have a comprehension problem. Marketing cannot permanently compensate for that.",
    },
    {
      type: "h2",
      text: "2. Activation: do new users reach value quickly?",
    },
    {
      type: "p",
      text: "Activation is the first meaningful outcome-not signup. Many products celebrate account creation while the actual aha moment is buried behind setup, empty states, permissions, or a blank canvas that asks the user to be imaginative on day one. That is a design failure, not a user failure.",
    },
    {
      type: "p",
      text: "Define activation as a behaviour that correlates with retention. For a scheduling tool it might be “first meeting booked.” For an analytics product it might be “first insight shared with a teammate.” For a marketplace it might be “first successful transaction.” If your activation metric is “completed onboarding checklist,” you are measuring compliance, not value.",
    },
    {
      type: "h3",
      text: "Activation diagnostic checklist",
    },
    {
      type: "ol",
      items: [
        "Map the path from ad or search → signup → first meaningful outcome.",
        "Time a new user (or watch five session recordings). Where do they stall?",
        "Count required decisions before value. Each decision is a chance to leave.",
        "Check whether the acquisition promise matches the first session. Mismatch kills trust fast.",
        "Instrument the outcome, not only the funnel steps that lead to it.",
      ],
    },
    {
      type: "p",
      text: "For research on friction and usability patterns, [Nielsen Norman Group](https://www.nngroup.com/) and [Baymard](https://baymard.com/blog) are practical. For performance as part of first experience, [web.dev’s Core Web Vitals](https://web.dev/articles/vitals) is a useful baseline-slow pages are activation problems in disguise.",
    },
    {
      type: "takeaway",
      text: "If paid users activate worse than organic users, you likely have message mismatch or a first-run experience that only works for people who already believed. Fix that before you buy more belief.",
    },
    {
      type: "h2",
      text: "3. Proof: is belief supported where objections appear?",
    },
    {
      type: "p",
      text: "Proof is not a logos row at the bottom of the page. Proof is risk reduction placed next to the claim that creates the risk. If you claim time savings, show a specific outcome near that claim. If pricing creates hesitation, put a relevant case study near pricing-not in a forgotten `/customers` graveyard.",
    },
    {
      type: "p",
      text: "Early-stage companies often have more proof than they display. A founder call that consistently converts. A metric from three customers. A before/after workflow. A short demo that removes mystery. Those are product assets. Treat them like features.",
    },
    {
      type: "table",
      headers: ["Objection", "Weak proof", "Useful proof"],
      rows: [
        [
          "“Will this work for us?”",
          "Generic testimonial",
          "Outcome from a similar customer",
        ],
        [
          "“Is this worth the price?”",
          "Adjective-heavy claims",
          "Time saved, revenue moved, errors reduced",
        ],
        [
          "“Can we trust you?”",
          "Stock photos of handshakes",
          "Named humans, specific context, clear result",
        ],
        [
          "“What happens next?”",
          "Vague ‘Get started’",
          "Concrete next step with expected outcome",
        ],
      ],
    },
    {
      type: "takeaway",
      text: "If objections repeat in sales and the site does not answer them, you are forcing every conversation to rebuild belief from scratch. That is an expensive hobby.",
    },
    {
      type: "h2",
      text: "4. Retention: do cohorts come back without discounts?",
    },
    {
      type: "p",
      text: "Retention is the honesty metric. You can buy signups. You can temporarily buy attention with promotions. You cannot permanently buy the feeling that the product is necessary. If cohorts only return when discounted, you have a value problem-or a habit problem-masked as a growth problem.",
    },
    {
      type: "ul",
      items: [
        "Look at retention by cohort and by segment, not only aggregate MAU.",
        "Separate “logged in” from “completed the core job again.”",
        "Interview churned users with one question: what failed to become inevitable?",
        "Check whether expansion revenue comes from the same job you acquired for-or from unrelated add-ons that confuse the story.",
      ],
    },
    {
      type: "p",
      text: "This is where many teams discover they never had product-market fit-they had a launch spike. For the deeper cut, see [why great products fail before product-market fit](/essays/why-great-products-fail-before-product-market-fit) and [what founders get wrong about product-market fit](/essays/what-founders-get-wrong-about-product-market-fit).",
    },
    {
      type: "takeaway",
      text: "Retention problems are rarely solved by a new channel. They are solved by a clearer job, a faster path to value, and a product that creates a reason to return.",
    },
    {
      type: "h2",
      text: "5. Only then: distribution volume",
    },
    {
      type: "p",
      text: "When clarity, activation, proof, and retention are honest, distribution becomes leverage. Ads explain something real. Content compounds. Partnerships do not create mismatched expectations. Sales cycles shorten because the product story arrives pre-believed.",
    },
    {
      type: "p",
      text: "Until then, keep distribution in “learning mode”: small budgets, tight segments, ruthless review of message match and activation-not vanity reach.",
    },
    {
      type: "h3",
      text: "A sane distribution checklist",
    },
    {
      type: "ol",
      items: [
        "One primary channel for 30 days-not five half-attempts.",
        "Creative and landing page share one promise.",
        "Weekly review: cost per activated user, not cost per click.",
        "Pause anything that produces signups without activation.",
        "Document the language that converts; feed it back into product and site.",
      ],
    },
    {
      type: "h2",
      text: "A worked example (fictional, but familiar)",
    },
    {
      type: "p",
      text: "Imagine “Harbor,” a SaaS tool for independent hospitality operators. Growth is flat. The founders want LinkedIn ads and a content engine. In week one we run the diagnostic.",
    },
    {
      type: "ul",
      items: [
        "Clarity: strangers describe Harbor as “hotel software.” Harbor actually helps boutique operators recover missed upsells from guest messaging. Fail.",
        "Activation: signup is easy; first value requires importing three systems and waiting for a “insights ready” email 48 hours later. Fail.",
        "Proof: homepage logos from unrelated brands; no outcome metrics near pricing. Fail.",
        "Retention: operators who completed first upsell campaign return weekly; others ghost. Mixed-but instructive.",
      ],
    },
    {
      type: "p",
      text: "The fix is not ads. It is a sharper homepage, a guided first campaign with sample data, proof from three boutique operators near the CTA, and only then a small paid test to that exact segment. Harbor did not need more marketing. It needed a system that made marketing honest.",
    },
    {
      type: "h2",
      text: "The one-page growth diagnostic you can run today",
    },
    {
      type: "table",
      headers: ["Layer", "Pass condition", "If you fail"],
      rows: [
        [
          "Clarity",
          "5/5 strangers can explain the offer",
          "Rewrite homepage + primary CTA",
        ],
        [
          "Activation",
          "Defined outcome reached by target % of new users",
          "Shorten path; improve defaults",
        ],
        [
          "Proof",
          "Objections answered beside claims",
          "Capture and place real outcomes",
        ],
        [
          "Retention",
          "Cohorts return without bribes",
          "Revisit job-to-be-done and habits",
        ],
        [
          "Distribution",
          "Unit economics hold by segment",
          "Scale only what already activates",
        ],
      ],
    },
    {
      type: "callout",
      title: "Exercise: the five-call mirror",
      text: "This week, call five recent signups (active and inactive). Ask only: What did you think this was? What almost stopped you? When did it first feel useful-or never? Write their answers verbatim. Your next homepage draft should sound more like them than like your deck.",
    },
    {
      type: "h2",
      text: "How to run the diagnostic without lying to yourself",
    },
    {
      type: "p",
      text: "The sequence only works if the team resists a few predictable self-deceptions. I see the same ones every month.",
    },
    {
      type: "ul",
      items: [
        "Declaring clarity because the founding team understands the offer (they are not the market).",
        "Calling signup “activation” because the real outcome is hard to instrument.",
        "Treating one enthusiastic design partner as segment-wide proof.",
        "Skipping retention review because “we’re still early” while spending like you are not.",
        "Jumping to distribution because diagnosis feels slow-and then calling the resulting mess a channel problem.",
      ],
    },
    {
      type: "p",
      text: "A useful anti-pattern check: if your proposed next action increases spend or surface area without increasing understanding, pause. Understanding is the scarce resource. Money is often the coping mechanism.",
    },
    {
      type: "callout",
      title: "Founder prompt",
      text: "Complete this sentence in writing: “We are not growing because ___, and the evidence is ___.” If the blank is “we need more awareness” and your evidence is vibes, restart the diagnostic at clarity.",
    },
    {
      type: "h2",
      text: "What I do when founders feel busy but stuck",
    },
    {
      type: "p",
      text: "At nau, I usually start with positioning, the conversion surface (website), and the first-session narrative-because that is where belief is won or lost. We do not begin with a channel brainstorm. We begin with the system that makes channels worth buying.",
    },
    {
      type: "p",
      text: "If you want a time-boxed version of this work, the companion piece is [what I would change if you gave me your startup for 30 days](/essays/what-i-would-change-if-you-gave-me-your-startup-30-days). If the issue is deeper than a stuck funnel, read [the difference between building a product and building a business](/essays/difference-building-product-and-building-business).",
    },
    {
      type: "p",
      text: "Useful external reading when you need frameworks beyond this page: [Y Combinator’s Library](https://www.ycombinator.com/library) on early product learning, [First Round Review](https://review.firstround.com/) on go-to-market systems, and [Harvard Business Review](https://hbr.org/) for strategic framing when the team needs shared language-not more slogans.",
    },
    {
      type: "faq",
      items: [
        {
          question: "What if our problem really is awareness?",
          answer:
            "Then clarity and activation should already pass. If strangers understand the offer, reach value, and retain, but volume is low, distribution is the right lever. Most teams assume awareness first and discover later that awareness was never the bottleneck.",
        },
        {
          question: "How long should a diagnostic take?",
          answer:
            "A useful first pass can take one focused week. A perfect model is not the goal. An honest ranking of which layer is broken is.",
        },
        {
          question: "Can we fix clarity and run ads at the same time?",
          answer:
            "You can keep a small learning budget. Do not scale spend while the homepage and first session still disagree. Parallel work is fine; parallel self-deception is not.",
        },
        {
          question: "What metrics should we put on the weekly dashboard?",
          answer:
            "Three is enough: activation rate for the target segment, retention for the latest cohorts, and cost per activated user (or sales-qualified conversation) for any paid tests. Everything else is optional colour.",
        },
      ],
    },
    {
      type: "h2",
      text: "Start here-then stay disciplined",
    },
    {
      type: "p",
      text: "If growth is stuck, the temptation is to do something visible by Friday. Visibility is not the same as progress. The sequence above is how you stop paying for the wrong work.",
    },
    {
      type: "p",
      text: "Clarity. Activation. Proof. Retention. Then distribution. It is not a slogan. It is the order in which reality usually reveals itself-whether your roadmap likes it or not.",
    },
    {
      type: "cta",
      lead: "If growth is stuck, start with a clear diagnosis-not another tactic. I can help you find the real bottleneck.",
      button: "Start here with me",
      href: "/contact",
    },
  ],
};

export default post;
