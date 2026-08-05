import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "if-i-joined-your-startup-tomorrow-what-id-do-first",
  title: "If I joined your startup tomorrow, this is what I'd do first.",
  excerpt:
    "Day-one priorities for a product strategist joining an early-stage startup: diagnose belief gaps, clarify the offer, and fix the highest-leverage conversion surface before campaigns.",
  date: "July 17, 2026",
  category: "Go-to-market and campaign strategy",
  image: "/images/blog/blog-10-joined.png",
  metaDescription:
    "What a product strategist would do first when joining a startup—48-hour diagnosis, offer rewrite, ICP lock, and conversion-path fixes before any new campaigns.",
  content: [
    {
      type: "p",
      text: "If I joined your startup tomorrow, I would not start with a rebrand, a new campaign calendar, or a feature brainstorm. I would start with the places where customers decide—and where belief currently breaks. The rest can wait until we know what we are fixing. Ambition without a diagnosis is just expensive motion.",
    },
    {
      type: "p",
      text: "This is the same instinct behind [what I would change in your first 30 days](/blog/what-i-would-change-if-you-gave-me-your-startup-30-days), compressed into a first-principles sequence. Whether you hire me full-time or bring nau in for a working partnership, the order stays: listen, clarify, fix the path, then amplify. Campaigns come after the path makes sense. Otherwise you are buying traffic into confusion—and paying for the privilege.",
    },
    {
      type: "h2",
      text: "Why day one is usually spent on the wrong work",
    },
    {
      type: "p",
      text: "New operators want to show value fast. The visible moves are brand refresh, landing-page polish, and a channel plan. Those can help later. On day one they often paper over the real constraint: nobody outside the company can explain the offer the same way twice. Y Combinator’s advice to talk to users and stay narrow is still the least glamorous and most useful habit in the [Y Combinator Library](https://www.ycombinator.com/library).",
    },
    {
      type: "p",
      text: "I have joined—or advised—teams where the homepage, the deck, and the product onboarding told three different stories. Marketing was asked to “fix growth.” Growth was not broken. Consistency was. First Round’s archives are full of similar recovery stories; start at [First Round Review](https://review.firstround.com/) when you need peer language for sequencing work under pressure.",
    },
    {
      type: "callout",
      title: "The day-one anti-agenda",
      text: "No rebrand workshop. No full sitemap rewrite. No “growth brainstorm” with sticky notes. Those feel productive and delay the only question that matters: where does belief break between stranger and paying user?",
    },
    {
      type: "h2",
      text: "First 48 hours: diagnosis before decoration",
    },
    {
      type: "ol",
      items: [
        "Listen to five sales or support recordings end to end—not highlight reels.",
        "Review funnel metrics by stage (visit → signup → activation → paid), not vanity totals.",
        "Rewrite the current offer in one sentence a cold reader could repeat.",
        "Walk the website and first-run experience as a stranger on a phone.",
        "List the top three objections you hear; note where the product or site fails to answer them.",
      ],
    },
    {
      type: "h3",
      text: "What I listen for on calls",
    },
    {
      type: "p",
      text: "I listen for the customer’s words for the problem, the alternatives they already tried, and the moment they hesitate. Hesitation is a map. If they hesitate on “who is this for,” you have an ICP problem. If they hesitate on “will this work for us,” you have a proof problem. If they hesitate on “what happens after I sign up,” you have an activation story problem. Harvard Business Review’s pieces on customer discovery still hold: curiosity beats pitching—browse [HBR](https://hbr.org/).",
    },
    {
      type: "h3",
      text: "How I read the funnel",
    },
    {
      type: "p",
      text: "Stage metrics tell you where the system leaks. Flat demos with rising traffic point to comprehension or relevance. Strong signups with weak activation point to first-value failure. Strong activation with weak retention points to a job that was not urgent enough—or a product that does not keep delivering. This is the diagnostic order in [every startup looks like a marketing problem until you dig deeper](/blog/every-startup-looks-like-marketing-problem-until-deeper).",
    },
    {
      type: "table",
      headers: ["Symptom", "Likely constraint", "First move"],
      rows: [
        [
          "Traffic up, demos flat",
          "Clarity / relevance",
          "Rewrite hero and offer sentence",
        ],
        [
          "Demos up, close rate down",
          "ICP or proof gap",
          "Tighten who it’s for; add proof",
        ],
        [
          "Signups up, activation flat",
          "Time-to-value",
          "Simplify first-run to one outcome",
        ],
        [
          "Activation up, retention flat",
          "Job urgency / habit",
          "Revisit JTBD and weekly value",
        ],
      ],
    },
    {
      type: "takeaway",
      text: "In the first 48 hours, your job is not to look busy—it is to locate the belief break with recordings, stage metrics, and a cold walkthrough.",
    },
    {
      type: "h2",
      text: "First two weeks: lock the system, then the surfaces",
    },
    {
      type: "ul",
      items: [
        "Lock ICP and exclusions—who we will disappoint on purpose.",
        "Fix the homepage and primary CTA path so they match the one-sentence offer.",
        "Align sales language with product reality (no promises the product cannot keep this month).",
        "Define three learning metrics for the next month, not twelve dashboards.",
        "Cut or hide one orphan feature or page that contradicts the Core job.",
      ],
    },
    {
      type: "image",
      src: "/images/blog/blog-mid-03.png",
      alt: "Laptop and notebook representing first-week startup diagnosis work",
    },
    {
      type: "p",
      text: "ICP work is uncomfortable because it excludes. Exclusion is the point. “SMBs” is not an ICP. “UK e-commerce ops leads at brands doing £1–10m who currently stitch inventory in spreadsheets” is. Without exclusions, the homepage becomes a compromise document. For positioning speed, see [how I’d reposition your startup in 60 minutes](/blog/how-id-reposition-your-startup-in-60-minutes).",
    },
    {
      type: "h3",
      text: "Homepage and CTA path",
    },
    {
      type: "p",
      text: "I treat the homepage as the highest-leverage conversion surface for most early teams. It must answer who it is for, what changes, why believe, and what to do next. Beauty helps only after those answers are sharp—[why beautiful websites don’t always convert](/blog/why-beautiful-websites-dont-always-convert). Nielsen Norman Group’s research on how users scan and decide is a useful external discipline: [NN/g](https://www.nngroup.com/).",
    },
    {
      type: "h3",
      text: "Sales and product must share a sentence",
    },
    {
      type: "p",
      text: "If sales sells a future roadmap and the product delivers a thinner present, churn and reputation pay the bill. Align language to what is true this month. Put the roadmap in a labelled section, not in the hero. This is product strategy showing up as go-to-market hygiene—related to [the best marketing feels like product design](/blog/best-marketing-feels-like-product-design).",
    },
    {
      type: "callout",
      title: "Three learning metrics, not a dashboard zoo",
      text: "Example set: qualified CTA rate, time-to-first-value, and paid conversion by ICP segment. Everything else can wait until these move—or explain why they will not.",
    },
    {
      type: "h2",
      text: "A fictional first fortnight: northline",
    },
    {
      type: "p",
      text: "Northline is a fictional AI scheduling tool for clinic managers. Day one, I hear calls where managers ask whether it replaces their EHR. The homepage says “AI for modern care teams.” Funnel: solid traffic, weak demos. Offer rewrite: “Fill cancelled appointment slots automatically for multi-location dental clinics—without replacing your EHR.” ICP exclusions: hospitals, solo practitioners, wellness coaches. Homepage and demo script update in week one. Week two: onboarding goes straight to connecting the calendar and recovering one cancelled slot—not a tour of AI features. Demo rate rises before any new ads. The product did not change much. The decision path did.",
    },
    {
      type: "p",
      text: "Stripe’s early clarity and Linear’s focused narrative are public reminders that sharp promises outperform broad ones. You do not need their budget to copy their discipline. You need the courage to disappoint the wrong segment early.",
    },
    {
      type: "h2",
      text: "What I deliberately postpone",
    },
    {
      type: "ul",
      items: [
        "Full brand identity systems before the offer sentence is stable.",
        "Multi-channel paid experiments before the primary path converts cold visitors.",
        "Large feature bets justified only by one prospect—see [the hidden cost of unused features](/blog/hidden-cost-building-features-nobody-asked-for).",
        "Rebuilding the entire site when five sections and one CTA would do.",
        "Hiring a content army to publish into a fuzzy ICP.",
      ],
    },
    {
      type: "p",
      text: "Postponing is not passivity. It is sequencing. Google’s guidance on helpful content assumes you know who you are helping—[Google Search Central](https://developers.google.com/search/docs). Same for product: know who, then distribute.",
    },
    {
      type: "takeaway",
      text: "Weeks one and two lock ICP, offer, homepage path, sales alignment, and learning metrics—campaigns and rebrands wait until the path can carry them.",
    },
    {
      type: "h2",
      text: "Try this: your own day-one kit",
    },
    {
      type: "ol",
      items: [
        "Block four hours. No Slack. Phone on do not disturb—unless you enjoy theatrical urgency.",
        "Pull five recent call recordings and a funnel export by stage.",
        "Write the offer sentence on paper. Cross out every adjective you could not defend to a sceptical buyer.",
        "Do a cold mobile walkthrough; note the first point of confusion.",
        "Share findings as a one-page note: constraint, evidence, next two fixes, what we will not do this month.",
      ],
    },
    {
      type: "p",
      text: "If you want a deeper build filter before new product work, use [how I decide whether a product is worth building](/blog/how-i-decide-whether-product-worth-building). If spend is about to rise, run [five questions before £10,000 of marketing](/blog/before-spend-10000-marketing-five-questions).",
    },
    {
      type: "h2",
      text: "How I work with founders in those first days",
    },
    {
      type: "p",
      text: "The politics of day one matter as much as the tactics. Founders are often exhausted, defensive about past spends, and under pressure to look decisive. I name the constraint without blaming people. “The homepage and the product tell different stories” is usable. “Marketing failed” is not. Shared artefacts help: the one-sentence offer, the ICP exclusions, the leakage map. Arguments about taste quiet down when the page has a job and a metric.",
    },
    {
      type: "p",
      text: "I also separate what we will ship in two weeks from what we will study. Shipping a clearer hero is a fix. Running three new paid channels is a study that usually waits. If the team needs a visible win for morale, pick a conversion-path win—not a brand exploration. Related: [the most expensive early-stage mistake](/blog/most-expensive-mistake-early-stage-founders) is often sequencing theatre before truth.",
    },
    {
      type: "h3",
      text: "A sample week-one calendar",
    },
    {
      type: "ul",
      items: [
        "Monday: recordings + funnel export; draft offer sentence.",
        "Tuesday: cold walkthrough; ICP exclusions workshop (90 minutes).",
        "Wednesday: homepage and CTA path edits live or in staging.",
        "Thursday: sales script alignment; proof blocks placed beside claims.",
        "Friday: metrics baseline; decide what we will not do next week.",
      ],
    },
    {
      type: "p",
      text: "By Friday the company should feel slightly quieter and slightly sharper. If it feels louder—more initiatives, more channels—you slipped back into motion-as-progress. Return to the leakage map. For product-versus-business clarity when the team confuses shipping with surviving, see [the difference between building a product and a business](/blog/difference-building-product-and-building-business).",
    },
    {
      type: "h3",
      text: "Tools I actually open in week one",
    },
    {
      type: "p",
      text: "A call recorder or shared drive of recordings. A spreadsheet of stage metrics. A doc for the offer sentence. The live site on a phone. That is enough. I do not need a new analytics stack to find fog. Fancy attribution can wait until the primary path converts cold visitors without a founder on the call explaining the product like a tour guide at a museum nobody asked to visit.",
    },
    {
      type: "p",
      text: "When the path is clearer, instrumentation gets more interesting—funnels by ICP segment, time-to-value histograms, qualitative tags on lost demos. Until then, more dashboards mostly help people argue with charts instead of sentences. web.dev’s performance work is worth scheduling once the story is stable enough to deserve speed investment—[web.dev](https://web.dev/).",
    },
    {
      type: "h2",
      text: "Operating cadence after the first fortnight",
    },
    {
      type: "p",
      text: "Once the path is clearer, I install a light weekly rhythm: one customer-truth hour (calls or interviews), one conversion review (site + onboarding), one prioritisation pass against the Core job. Systems beat heroic sprints—see [why I care more about systems than campaigns](/blog/why-i-care-more-about-systems-than-campaigns). Accessibility and performance stay on the list because they are part of conversion, not separate chores—[WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) and [web.dev vitals](https://web.dev/articles/vitals).",
    },
    {
      type: "p",
      text: "The Interaction Design Foundation’s resources on UX research methods can help teams who need a shared toolkit for interviews and usability checks: [Interaction Design Foundation](https://www.interaction-design.org/). Baymard’s work on UX research discipline is another external north star for evidence over opinion: [Baymard](https://baymard.com/blog).",
    },
    {
      type: "quote",
      text: "Campaigns come after the path makes sense. Otherwise you are buying traffic into confusion—and paying for the privilege.",
    },
    {
      type: "faq",
      items: [
        {
          question: "What if the founder wants a rebrand immediately?",
          answer:
            "Separate identity taste from offer clarity. Stabilize the sentence and CTA path first. Brand craft on top of a fuzzy offer is a very stylish way to stay stuck.",
        },
        {
          question: "How do I handle conflicting feedback from investors?",
          answer:
            "Bring stage metrics and call quotes to the conversation. Opinions lose cleanly to leakage maps. Invite investors to name which stage they believe is broken—and what evidence would change their mind.",
        },
        {
          question: "Is two weeks enough to change conversion?",
          answer:
            "Enough to remove the loudest confusion and align the story. Not enough to finish product–market fit. Treat it as clearing the fog so learning can resume.",
        },
        {
          question: "What if we truly have a distribution problem?",
          answer:
            "You will know after cold visitors understand the offer and new users reach value. If those are healthy and volume is not, then—and only then—scale channels.",
        },
      ],
    },
    {
      type: "h2",
      text: "The first-month promise I will make you",
    },
    {
      type: "p",
      text: "I cannot promise hockey-stick growth in thirty days. I can promise a clearer ICP, a repeatable offer sentence, a conversion path that matches reality, and a short list of learning metrics the team actually watches. That is the foundation everything else sits on. Without it, more activity is just a louder fog machine.",
    },
    {
      type: "ul",
      items: [
        "Ship the offer sentence into homepage, deck, and outbound templates.",
        "Fix the primary CTA path end to end on mobile.",
        "Close the loop between sales objections and on-page proof.",
        "Kill one distraction (feature, page, or audience) that dilutes focus.",
        "Review learning metrics weekly before debating new channels.",
      ],
    },
    {
      type: "p",
      text: "If that sounds less exciting than a launch campaign, good. Exciting is easy to buy. Clear is harder—and rarer. Clear is what I would do first.",
    },
    {
      type: "cta",
      lead: "Want this day-one plan applied to your company without hiring full-time?",
      button: "Start a working partnership",
      href: "/contact",
    },
  ],
};

export default post;
