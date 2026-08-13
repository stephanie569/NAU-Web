import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "from-strategy-to-launch-how-i-approach-new-product",
  title: "My playbook from blank page to launch (no fluff)",
  excerpt:
    "A practical end-to-end method for taking a product from strategy to launch: clarify the offer, design the decision path, ship focused first value, then learn with discipline.",
  date: "July 11, 2026",
  category: "Go-to-Market",
  image: "/images/blog/blog-15-strategy-launch.png",
  metaDescription:
    "How I take products from strategy to launch-ICP, narrative, experience design, proof, measurement, and learning loops founders can reuse.",
  content: [
    {
      type: "p",
      text: "Every new product I take on follows the same arc: strategy, narrative, experience, proof, launch, learning. The tools change. The sequence does not. Skipping steps feels entrepreneurial. It usually just feels expensive later-especially when the team discovers, three months in, that the homepage still cannot explain what the product does.",
    },
    {
      type: "p",
      text: "This article is the method I use with founders and product teams. It is not a ceremony. It is a way to keep launches from becoming theatre: lots of noise, little learning, and a Slack channel full of screenshots nobody acts on. If you want the shorter version of why I delay pixels, see [why I start every project without opening Figma](/essays/why-i-start-every-project-without-opening-figma). If you want the “is this even worth building?” filter first, start with [how I decide whether a product is worth building](/essays/how-i-decide-whether-product-worth-building).",
    },
    {
      type: "h2",
      text: "Why sequence beats hustle",
    },
    {
      type: "p",
      text: "Most early launches fail for a boring reason: the team ships an interface before they agree on the decision they want a stranger to make. Marketing then tries to compensate with volume. Design tries to compensate with polish. Neither fixes an unfinished story.",
    },
    {
      type: "p",
      text: "Good product strategy is not a slide deck. It is a shared answer to five questions: who is this for, what job are they hiring it for, what must they believe, what is the first valuable outcome, and how will we know we are wrong. [Y Combinator’s Library](https://www.ycombinator.com/library) returns to versions of these questions constantly because they are the ones that survive contact with customers.",
    },
    {
      type: "callout",
      title: "A useful reframe",
      text: "Treat launch as the start of a learning system, not the end of a build cycle. If you cannot name what you will measure in week one, you are not launching-you are releasing.",
    },
    {
      type: "takeaway",
      text: "Sequence exists to protect learning. Strategy without shipping is theatre. Shipping without strategy is expensive improvisation.",
    },
    {
      type: "h2",
      text: "The six-stage launch arc",
    },
    {
      type: "p",
      text: "I keep the arc deliberately plain. Fancy names make teams feel organised while they skip the hard bits.",
    },
    {
      type: "ol",
      items: [
        "Strategy: ICP, job, outcome, tradeoffs.",
        "Narrative: homepage and onboarding story.",
        "Experience: screens that reduce belief gaps.",
        "Proof: evidence placed where objections live.",
        "Launch: one primary CTA and a measurement plan.",
        "Learning: weekly decisions based on real behaviour.",
      ],
    },
    {
      type: "table",
      headers: ["Stage", "Primary question", "Output you can hold"],
      rows: [
        [
          "Strategy",
          "Who is in, who is out, and what progress do they want?",
          "One-page brief: ICP, job, outcome, non-goals",
        ],
        [
          "Narrative",
          "What must a stranger understand in 10 seconds?",
          "Homepage outline + onboarding storyboard",
        ],
        [
          "Experience",
          "Which screens remove friction or doubt?",
          "Focused first-session path",
        ],
        [
          "Proof",
          "Where do objections appear, and what evidence answers them?",
          "Proof map by claim",
        ],
        [
          "Launch",
          "What is the one action, and how will we measure it?",
          "CTA + instrumentation checklist",
        ],
        [
          "Learning",
          "What will we decide next Tuesday?",
          "Weekly review ritual",
        ],
      ],
    },
    {
      type: "h2",
      text: "Stage 1: strategy before screens",
    },
    {
      type: "p",
      text: "I start with a [product strategy framework before designing a single screen](/essays/product-strategy-framework-before-designing-screen). The goal is not consensus theatre. The goal is tradeoffs people can defend.",
    },
    {
      type: "h3",
      text: "The five boxes",
    },
    {
      type: "ul",
      items: [
        "Customer: who is in, who is out (be rude about the “out”).",
        "Job-to-be-done: the progress they want, in their language.",
        "Current alternatives: including spreadsheets, agencies, and doing nothing.",
        "Outcome: the first measurable change your product creates.",
        "Belief gap: what they must believe before they buy or activate.",
      ],
    },
    {
      type: "p",
      text: "Real companies do this quietly. Stripe’s early clarity was not “payments infrastructure for developers” as a slogan alone-it was a ruthless ICP and a job (accept payments without becoming a payments company). Notion’s early expansion looked chaotic from the outside; underneath, the job stayed “one workspace where work lives.” Linear’s wedge was not “another issue tracker”-it was speed and taste for teams who already knew the category.",
    },
    {
      type: "p",
      text: "Fictional example: a founder builds “AI meeting notes for everyone.” Everyone is not an ICP. After the five boxes, it becomes “async meeting notes for remote product teams who already use Slack and hate rewatching recordings.” Suddenly the homepage writes itself-and half the roadmap can be deleted without ceremony.",
    },
    {
      type: "callout",
      title: "Try this (45 minutes)",
      text: "Write the five boxes on one page. Then write a second page titled “What we will not build in the next 90 days.” If the second page is empty, you do not have strategy yet-you have optimism with a backlog.",
    },
    {
      type: "takeaway",
      text: "If you cannot name who is out, you cannot design a first experience that feels inevitable for who is in.",
    },
    {
      type: "h2",
      text: "Stage 2: narrative: the story customers can repeat",
    },
    {
      type: "p",
      text: "Narrative is not brand poetry. It is the sequence of sentences that move a stranger from confusion to a next step. Most startups fail here because [the product does not have a marketing problem-it has a clarity problem](/essays/product-doesnt-have-marketing-problem-clarity-problem).",
    },
    {
      type: "p",
      text: "I write the homepage before the feature list. The homepage is the pitch under pressure: cold traffic, short attention, no sales call to rescue you. Nielsen Norman Group’s work on [how users read on the web](https://www.nngroup.com/) is still useful here-people scan for relevance and next actions, not your origin story.",
    },
    {
      type: "h3",
      text: "A simple narrative spine",
    },
    {
      type: "ol",
      items: [
        "Who this is for (so the wrong people leave quickly).",
        "The job and the costly status quo.",
        "How it works in three steps max.",
        "Proof that this works for people like them.",
        "One primary action.",
      ],
    },
    {
      type: "p",
      text: "Apple’s product pages are instructive even when you are not shipping hardware: one idea per section, proof next to claims, and almost no decorative clutter in the first viewport. Airbnb’s homepage-which I unpack in a [dedicated teardown](/essays/product-teardown-airbnb-homepage)-owns the job immediately: find a place. Startups often bury the job under category language and a carousel of ambitions.",
    },
    {
      type: "quote",
      text: "If a smart stranger cannot explain your product after one scroll, your narrative is not ready for paid traffic. It is barely ready for your mum.",
    },
    {
      type: "h2",
      text: "Stage 3: experience: screens that reduce belief gaps",
    },
    {
      type: "p",
      text: "Once the story is clear, UI becomes translation. Each screen should either reduce a belief gap or advance a job. If it does neither, it is decoration-however elegant the spacing.",
    },
    {
      type: "ul",
      items: [
        "Homepage answers belief gaps for cold traffic.",
        "Onboarding delivers the first outcome fast.",
        "Pricing resolves risk and value comparison.",
        "Feature pages map to jobs-not internal modules.",
      ],
    },
    {
      type: "p",
      text: "Time-to-value is the silent killer of “successful” launches. Teams celebrate signups while activation limps. I design the first session like a product: what must the user complete to feel progress? Figma’s early “open a file and draw” clarity, or Stripe’s “get an API key and charge a card,” are not accidents-they are first-session design.",
    },
    {
      type: "p",
      text: "For web performance and experience quality, I treat [web.dev’s Core Web Vitals](https://web.dev/articles/vitals) as hygiene, not a growth hack. Slow pages do not only hurt SEO; they tax trust before your copy gets a fair hearing. Accessibility is the same category of seriousness-[WCAG guidance](https://www.w3.org/WAI/standards-guidelines/wcag/) is not optional polish if you claim to build for real customers.",
    },
    {
      type: "callout",
      title: "Exercise: belief-gap map",
      text: "List the top five reasons a target customer would not buy. Next to each, name the screen (or sales asset) that answers it. Gaps in the map are your real roadmap-usually more useful than the feature backlog.",
    },
    {
      type: "takeaway",
      text: "Experience design is not “make it pretty.” It is “make the next belief cheaper to hold.”",
    },
    {
      type: "h2",
      text: "Stage 4: proof: evidence with a job",
    },
    {
      type: "p",
      text: "Proof is often treated as a footer collage of logos. That is decoration. Useful proof sits next to the claim it supports: security near data concerns, outcomes near pricing, process clarity near “how it works.”",
    },
    {
      type: "p",
      text: "Baymard Institute’s research on [ecommerce UX](https://baymard.com/blog) keeps reminding retailers that trust and clarity reduce abandonment. The same logic applies to SaaS demos and waitlists: people abandon when risk feels higher than curiosity.",
    },
    {
      type: "h3",
      text: "Types of proof that actually move decisions",
    },
    {
      type: "ul",
      items: [
        "Outcome proof: before/after metrics in customer language.",
        "Process proof: screenshots or short walkthroughs that demystify.",
        "Social proof: named roles, companies, and specific results-not vague praise.",
        "Risk reducers: guarantees, security notes, clear pricing, cancel ease.",
      ],
    },
    {
      type: "p",
      text: "Early-stage teams often lack logos. That is fine. Specificity beats prestige. “Used by three remote product teams to cut meeting rewatch time by half” beats “Trusted by innovators worldwide,” which sounds like it was written by a tired brochure.",
    },
    {
      type: "h2",
      text: "Stage 5: launch: one CTA and a measurement plan",
    },
    {
      type: "p",
      text: "Launch is where teams panic into optionality: book a demo, start free, watch video, join Discord, download whitepaper. Optionality feels generous. It is usually indecision in a trench coat.",
    },
    {
      type: "p",
      text: "Pick one primary action for the stage you are in. Early: waitlist with a clear promise. Mid: product-led activation. Sales-led: a demo that qualifies. Then instrument the path. Google’s [Search Central documentation](https://developers.google.com/search/docs) matters if organic discovery is part of the plan-but even more important is whether you can answer: where do people drop, and what did they understand when they did?",
    },
    {
      type: "ol",
      items: [
        "Define the primary conversion event.",
        "Define the activation event that proves first value.",
        "Instrument drop-offs between them.",
        "Agree what “good” looks like in week one (ranges, not fantasies).",
        "Assign an owner for the weekly review.",
      ],
    },
    {
      type: "callout",
      title: "Launch checklist (print this)",
      text: "Homepage says who/job/outcome in the first viewport. One primary CTA. Proof sits next to claims. First-session path delivers a meaningful outcome. Analytics track signup → activation. Team knows the Tuesday review questions. Support/FAQ covers the top three objections.",
    },
    {
      type: "h2",
      text: "Stage 6: learning: weekly decisions, not monthly regrets",
    },
    {
      type: "p",
      text: "A launch without a learning rhythm becomes a museum of dashboards. I prefer a short weekly ritual: what did behaviour teach us, what will we change, what will we ignore. [First Round Review](https://review.firstround.com/) is full of operating cadence examples; steal the discipline, not the buzzwords.",
    },
    {
      type: "ul",
      items: [
        "What surprised us in qualitative feedback?",
        "Where did quantitative drop-off match (or contradict) that feedback?",
        "What is the smallest change that tests a new belief?",
        "What are we deliberately not touching this week?",
      ],
    },
    {
      type: "p",
      text: "This is also where [product-market fit misunderstandings](/essays/what-founders-get-wrong-about-product-market-fit) show up. Teams treat a spike as fit, or silence as “need more ads.” Learning loops force honesty: if activation is weak, more traffic is a louder version of the same problem-something I unpack in [what founders actually need isn’t more marketing](/essays/founders-actually-need-isnt-more-marketing).",
    },
    {
      type: "takeaway",
      text: "Learning is a decision system. If your weekly meeting does not end with a shippable change or an explicit non-change, it was a status update with snacks.",
    },
    {
      type: "h2",
      text: "A worked example: “Harbor,” a fictional B2B tool",
    },
    {
      type: "p",
      text: "Harbor helps boutique hotels manage guest preferences across systems. The founder wants a big launch: Product Hunt, paid LinkedIn, a redesign, and a new AI feature.",
    },
    {
      type: "p",
      text: "We run the arc. Strategy narrows ICP to independent hotels with 20-80 rooms still using spreadsheets for VIP notes. Narrative becomes: “Stop losing guest preferences between your PMS and your front desk.” Experience focuses on importing a CSV and seeing a guest profile in under ten minutes. Proof uses three hotel interviews with specific outcomes. Launch CTA is a guided onboarding, not a webinar. Learning tracks import → first profile used at check-in.",
    },
    {
      type: "p",
      text: "The AI feature waits. The Product Hunt post waits. The team ships something a night manager can explain to a colleague-which is the real distribution channel in hospitality, whether founders like it or not.",
    },
    {
      type: "h2",
      text: "Common ways teams break the arc",
    },
    {
      type: "table",
      headers: ["Shortcut", "What it feels like", "What it costs"],
      rows: [
        [
          "Design before strategy",
          "Visible progress",
          "Rework once messaging hardens",
        ],
        [
          "Launch without instrumentation",
          "Speed",
          "Opinions replacing evidence",
        ],
        [
          "Multiple CTAs",
          "Optionality",
          "Diluted learning signal",
        ],
        [
          "Proof as decoration",
          "Credibility theatre",
          "Unanswered objections at the moment of decision",
        ],
        [
          "Weekly meetings without decisions",
          "Alignment",
          "Stalled iteration",
        ],
      ],
    },
    {
      type: "h2",
      text: "Roles and rituals that keep the arc alive",
    },
    {
      type: "p",
      text: "Methods fail when nobody owns them. Assign light roles even in a three-person team: one narrative owner, one instrumentation owner, one weekly-review facilitator (can be the same human with a checklist). Rituals beat heroics.",
    },
    {
      type: "ul",
      items: [
        "Monday: check activation and drop-off; note anomalies.",
        "Midweek: ship one narrative or path improvement.",
        "Friday: 45-minute learning review with a written decision.",
        "Monthly: revisit ICP/job/outcome; update non-goals.",
      ],
    },
    {
      type: "p",
      text: "This is how [systems compound instead of campaigns thrashing](/essays/why-i-care-more-about-systems-than-campaigns). The launch arc is not a one-off waterfall. It is a loop you re-enter with better questions each time-especially after you confuse [product shipping with business building](/essays/difference-building-product-and-building-business).",
    },
    {
      type: "callout",
      title: "Pre-mortem before you announce",
      text: "Two days before launch, write: “It is six weeks later and the launch disappointed-what were the three most likely reasons?” Force specificity (unclear ICP, weak activation, no proof, unowned metrics). Fix what you can before the fireworks. Premortems are cheaper than post-mortems with cake.",
    },
    {
      type: "h2",
      text: "How this connects to systems, not campaigns",
    },
    {
      type: "p",
      text: "A good launch arc is the seed of an operating system: positioning, experience, proof, and learning that campaigns can amplify later. That is why [I care more about systems than campaigns](/essays/why-i-care-more-about-systems-than-campaigns). Campaigns without this foundation are sparks. Sparks are lovely. They do not heat a house.",
    },
    {
      type: "p",
      text: "If you only have thirty days, the same arc still applies-compressed. I outline that compression in [what I would change if you gave me your startup for 30 days](/essays/what-i-would-change-if-you-gave-me-your-startup-30-days).",
    },
    {
      type: "faq",
      items: [
        {
          question: "How long should strategy take before we design?",
          answer:
            "For early products, one focused week is often enough to fill the five boxes and draft narrative. Longer than that usually means unresolved disagreement-or avoidance dressed as research.",
        },
        {
          question: "What if we need to launch next week?",
          answer:
            "Compress, do not skip. Write ICP/job/outcome on one page, rewrite the first viewport, pick one CTA, instrument signup → activation, and schedule the first learning review before launch day ends.",
        },
        {
          question: "Do we need a full redesign to follow this?",
          answer:
            "Usually no. Message, path, and proof changes outperform cosmetic redesigns. If the story is wrong, new visuals just make the wrong story more expensive.",
        },
        {
          question: "Where does brand fit in this arc?",
          answer:
            "Brand expresses strategy; it does not replace it. Voice, visual system, and motion should make the job and outcome easier to recognise-not harder to parse.",
        },
      ],
    },
    {
      type: "h2",
      text: "What to do this week",
    },
    {
      type: "ol",
      items: [
        "Fill the five strategy boxes with your co-founder or product lead.",
        "Rewrite the first viewport until a stranger can say who/job/outcome.",
        "Map belief gaps to screens and notice the empty cells.",
        "Choose one primary CTA and define activation.",
        "Book a 45-minute weekly learning review for the next four Tuesdays.",
      ],
    },
    {
      type: "p",
      text: "Launches go wrong when teams confuse motion with progress. The arc above is deliberately unglamorous. That is the point. Strategy, narrative, experience, proof, launch, learning-then repeat with better questions. For complementary framing on commercial reality versus feature shipping, read [the difference between building a product and building a business](/essays/difference-building-product-and-building-business).",
    },
    {
      type: "cta",
      lead: "Planning a launch and want a strategy-to-ship partner?",
      button: "Let’s map your launch arc",
      href: "/contact",
    },
  ],
};

export default post;
