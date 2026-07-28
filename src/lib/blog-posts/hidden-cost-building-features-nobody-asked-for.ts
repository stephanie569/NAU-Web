import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "hidden-cost-building-features-nobody-asked-for",
  title: "The hidden cost of building features nobody asked for.",
  excerpt:
    "Unused features do not just waste sprint time. They slow onboarding, confuse positioning, and make every future decision more expensive—here is how to stop paying that tax.",
  date: "July 20, 2026",
  category: "Product Strategy",
  image: "/images/blog/blog-08-features.png",
  metaDescription:
    "Learn the hidden costs of shipping unused features—complexity, slower onboarding, weaker positioning—and a practical framework to build only what customers need.",
  content: [
    {
      type: "p",
      text: "Feature bloat rarely looks dramatic in a sprint review. It looks responsible: “customers might need this.” The ticket is small. The designer already mocked a toggle. Engineering says two days. Someone mentions a competitor. The room nods. The feature ships. Months later, adoption sits near zero, onboarding takes longer, and nobody can explain what the product is for without opening a slide deck. Might is an expensive word.",
    },
    {
      type: "p",
      text: "I have watched this pattern across early-stage products in AI, hospitality, and consumer tools. The team is rarely careless. They are trying to be helpful. Helpfulness without a job-to-be-done is how products become museums of unfinished intentions. If you are deciding what to build next quarter—or what to cut—this is the discipline I use at nau.",
    },
    {
      type: "h2",
      text: "Why “just one more feature” feels rational",
    },
    {
      type: "p",
      text: "Founders add features for understandable reasons. A prospect asks for something on a sales call. A board member compares you to Linear or Notion. Analytics show a drop-off and the instinct is to add a step, not remove friction. Competitors announce something shiny. Each reason feels local and urgent. The cost is global and delayed.",
    },
    {
      type: "p",
      text: "Y Combinator’s library on product and growth repeatedly returns to a related idea: focus is a strategy, not a personality trait. You can read that framing in the [Y Combinator Library](https://www.ycombinator.com/library). The same lesson shows up in product–market fit work: clarity beats coverage. I wrote about that failure mode in [why great products fail before product–market fit](/blog/why-great-products-fail-before-product-market-fit).",
    },
    {
      type: "callout",
      title: "The polite lie in the roadmap",
      text: "Most unused features were justified as “low cost.” Low cost to ship is not low cost to own. Ownership includes UI surface, edge cases, docs, support scripts, QA paths, and the cognitive load on every new user who must decide whether the thing matters.",
    },
    {
      type: "h2",
      text: "What unused features actually cost",
    },
    {
      type: "p",
      text: "The invoice for feature bloat does not arrive in one line item. It arrives as slower learning, messier positioning, and a product that is harder to sell—even when the core is strong.",
    },
    {
      type: "h3",
      text: "1. Longer time-to-value",
    },
    {
      type: "p",
      text: "Every extra control, tab, or empty state competes for attention in the first session. New users do not arrive with your mental model. They arrive with a job and limited patience. When the interface offers six paths and only one delivers the outcome you promised on the homepage, activation drops. Stripe and Figma win partly because the first useful action is obvious. Your unused feature may be hiding that action behind a denser nav.",
    },
    {
      type: "h3",
      text: "2. Weaker information architecture and SEO",
    },
    {
      type: "p",
      text: "Marketing pages multiply to justify modules. Navigation grows. Search engines and humans both struggle to understand what the site is about. Google’s guidance on helpful, people-first content rewards clarity of purpose—see [Google Search Central](https://developers.google.com/search/docs). A product that tries to be everything becomes hard to rank for anything specific.",
    },
    {
      type: "h3",
      text: "3. Harder sales conversations",
    },
    {
      type: "p",
      text: "When the product does twelve things poorly and two things well, sales defaults to a tour. Tours are not persuasion. Persuasion is “for this customer, we remove this cost.” Feature sprawl turns demos into inventory lists. Buyers leave impressed and undecided—the most expensive emotional state in B2B.",
    },
    {
      type: "h3",
      text: "4. Engineering drag on every release",
    },
    {
      type: "p",
      text: "Dead features still have regression risk. They still break in edge browsers. They still need feature flags and migration notes. Teams start shipping slower because the blast radius grew. You did not buy optionality. You bought permanent tax.",
    },
    {
      type: "h3",
      text: "5. Diluted brand promise",
    },
    {
      type: "p",
      text: "Every feature is a vote for what your product is. Cast enough vague votes and customers cannot repeat your promise. That is a clarity problem dressed as a roadmap problem—related to [your product’s clarity problem](/blog/product-doesnt-have-marketing-problem-clarity-problem).",
    },
    {
      type: "table",
      headers: ["Visible cost", "Hidden cost", "Where it shows up"],
      rows: [
        [
          "Sprint days to build",
          "Months of support and QA",
          "Release velocity, bug backlog",
        ],
        [
          "One more nav item",
          "Slower first-session comprehension",
          "Activation, time-to-value",
        ],
        [
          "Competitor parity checkbox",
          "Blurred positioning",
          "Win rate, homepage bounce",
        ],
        [
          "“Might need later” module",
          "Harder prioritisation forever",
          "Roadmap politics, team focus",
        ],
      ],
    },
    {
      type: "takeaway",
      text: "Unused features tax onboarding, sales clarity, SEO structure, and engineering speed—long after the sprint that shipped them is forgotten.",
    },
    {
      type: "h2",
      text: "A short story: the dashboard that ate the company",
    },
    {
      type: "p",
      text: "Imagine a fictional startup, Ledgerly—an invoicing tool for freelancers. Core job: get paid faster. After three months of decent retention, a few agencies ask for “team permissions,” “white-label PDFs,” and “multi-currency tax packs.” None of those requests come from the ICP that is already paying. The team ships all three in a quarter. Homepage now leads with “built for teams.” Freelancers bounce. Agencies still want Salesforce-level depth. Support tickets shift from “how do I get paid” to “why can’t my contractor see X.” The product did not get worse at invoicing. It got worse at being about invoicing.",
    },
    {
      type: "p",
      text: "Contrast that with how Linear kept issue tracking sharp, or how early Stripe refused to become “every financial product.” Focus is not anti-ambition. It is sequenced ambition. Airbnb’s early product discipline—host trust and booking clarity before feature theatre—is a useful reminder that growth often follows a narrower promise, not a wider one. I tear down related homepage clarity in [the Airbnb homepage teardown](/blog/product-teardown-airbnb-homepage).",
    },
    {
      type: "h2",
      text: "The feature focus filter",
    },
    {
      type: "p",
      text: "Before anything enters the build queue, I run five questions. If any answer is mushy, the feature waits—or dies. This pairs with [how I decide whether a product is worth building](/blog/how-i-decide-whether-product-worth-building), applied at feature scale.",
    },
    {
      type: "ol",
      items: [
        "Job: Which specific progress does this create for a named ICP—not a persona poster?",
        "Evidence: What behaviour, quote, or retention signal proves the job is urgent now?",
        "Outcome metric: What measurable change do we expect in 14 days after launch?",
        "Smallest ship: What is the thinnest experience that creates that outcome?",
        "Kill criteria: What adoption or quality threshold triggers sunset, not “more polish”?",
      ],
    },
    {
      type: "p",
      text: "Jobs-to-be-done thinking helps here. The [Interaction Design Foundation](https://www.interaction-design.org/) has accessible primers on JTBD and user-centred framing. You do not need academic purity. You need a sentence a sceptical founder would respect: “Freelancers who invoice weekly will create and send an invoice in under three minutes, and we will measure first-invoice completion within 14 days.”",
    },
    {
      type: "h3",
      text: "Adoption windows beat roadmap optimism",
    },
    {
      type: "p",
      text: "I prefer a 14-day adoption window for most early features. Not because learning finishes in two weeks, but because silence is a signal. If almost nobody finds, tries, or returns to the feature, polishing it is usually vanity. Sunset or hide it. Prefer deleting and clarifying over adding and hoping. First Round Review has published repeatedly on focus and product judgment; start at [First Round Review](https://review.firstround.com/) when you need founder-level case studies on prioritisation under pressure.",
    },
    {
      type: "callout",
      title: "Parity is not a strategy",
      text: "Matching a competitor feature-for-feature assumes they chose correctly and that your customers share their constraints. Often neither is true. Steal outcomes, not checklists.",
    },
    {
      type: "takeaway",
      text: "Require a job, evidence, metric, smallest ship, and kill criteria—or do not build. Hope is not a requirements document.",
    },
    {
      type: "h2",
      text: "How to audit what you already shipped",
    },
    {
      type: "p",
      text: "If the roadmap already looks like a junk drawer, run a ruthless inventory. This is related to the diagnostic order in [every startup looks like a marketing problem until you dig deeper](/blog/every-startup-looks-like-marketing-problem-until-deeper): comprehension and activation before more surface area.",
    },
    {
      type: "ol",
      items: [
        "List every user-facing capability in one spreadsheet: name, owner, last meaningful usage, support volume.",
        "Tag each as Core (drives the main job), Adjacent (helps a minority of the ICP), or Orphan (built for a deal, a whim, or a ghost).",
        "For Orphans: hide, merge, or delete within a fixed window. Do not “revisit next quarter” without a date.",
        "For Adjacent: keep only if it does not slow Core time-to-value.",
        "Rewrite navigation and marketing so Core is unmistakable.",
      ],
    },
    {
      type: "p",
      text: "Nielsen Norman Group’s research on information scent and cognitive load is useful when you redesign IA after a cut—browse [NN/g](https://www.nngroup.com/). Users do not thank you for options they never needed. They thank you for finding the outcome faster.",
    },
    {
      type: "h2",
      text: "Try this: a 90-minute feature focus session",
    },
    {
      type: "p",
      text: "Use this exercise with your founder, PM, and one engineer who lives in the support tickets.",
    },
    {
      type: "ol",
      items: [
        "Write the product’s one-sentence job for the primary ICP on a whiteboard. No commas that smuggle in extra audiences.",
        "List the last eight shipped features. Score each 0–2 for: used in first session, used weekly by retained users, mentioned unprompted in sales or support.",
        "Anything scoring 0–1 across the board is a candidate for sunset or deep hide.",
        "Pick one candidate. Write the Feature Focus Filter answers. If you cannot, schedule deletion—not a redesign.",
        "Agree the next two builds only if they improve Core time-to-value or remove a measured belief gap.",
      ],
    },
    {
      type: "p",
      text: "If the session turns political, that is data. Feature ownership without outcome ownership is how companies accumulate polite debt. For a wider first-week diagnostic when priorities feel scrambled, see [what I’d do if I joined your startup tomorrow](/blog/if-i-joined-your-startup-tomorrow-what-id-do-first).",
    },
    {
      type: "h2",
      text: "What good restraint looks like in public products",
    },
    {
      type: "p",
      text: "Apple’s hardware and software often win by saying no to configurations that would please a loud minority. Notion stayed expandable without making every template a default obligation in the first session. Figma’s early collaborative editing was a sharp bet, not a kitchen sink. None of these companies are feature-free. They are feature-sequenced. The difference is whether new surface area serves a clear job for a clear customer—or soothes internal anxiety.",
    },
    {
      type: "p",
      text: "Harvard Business Review’s writing on strategy as choice—what you will not do—is older than most SaaS categories and still sharper than most roadmap rituals. Start at [HBR](https://hbr.org/) if you need language for saying no in the boardroom without sounding stubborn.",
    },
    {
      type: "quote",
      text: "Every feature is a vote for what your product is. Cast fewer votes, more intentionally.",
    },
    {
      type: "h2",
      text: "Connecting features to the website and first run",
    },
    {
      type: "p",
      text: "Features do not live only in the app. They leak into homepage claims, pricing tables, and onboarding checklists. If marketing promises a capability that 2% of users ever touch, you train buyers to expect a different product. That is how beautiful sites still fail to convert—covered in [why beautiful websites don’t always convert](/blog/why-beautiful-websites-dont-always-convert). Align the public story to Core. Let Adjacent live behind progressive disclosure.",
    },
    {
      type: "p",
      text: "Accessibility and performance suffer under sprawl too. More components mean more states to make keyboard-friendly and fast. The [WCAG guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) and [web.dev vitals](https://web.dev/articles/vitals) are not separate from product strategy; they are reminders that every extra surface has a human cost.",
    },
    {
      type: "faq",
      items: [
        {
          question: "What if a big prospect requires a feature to close?",
          answer:
            "Price it as a project or enterprise add-on, time-box the build, and refuse to put it on the homepage until Core users need it. One deal should not redefine the product for everyone—unless that deal is your new ICP on purpose.",
        },
        {
          question: "How do we sunset without angering users?",
          answer:
            "Warn early, export data, offer a path, and explain the job you are protecting. Most users of unused features are not power users; they are edge cases. The louder risk is confusing the majority forever.",
        },
        {
          question: "Isn’t shipping fast how startups learn?",
          answer:
            "Shipping experiments is learning. Shipping permanent UI without kill criteria is accumulating inventory. Prefer reversible probes—concierge, waitlists, manual workflows—before durable surface area.",
        },
        {
          question: "Where should we put the time we save by cutting?",
          answer:
            "Into time-to-value, proof, and the primary conversion path. That usually beats another module. See also [before you spend £10,000 on marketing](/blog/before-spend-10000-marketing-five-questions).",
        },
      ],
    },
    {
      type: "h2",
      text: "What to do this week",
    },
    {
      type: "ul",
      items: [
        "Write one Core job sentence and pin it where roadmap debates happen.",
        "Kill or hide one Orphan feature with a dated plan.",
        "Add kill criteria to every in-flight ticket before more build hours.",
        "Align homepage and onboarding to Core only—no orphan promises.",
        "Review activation for the cohort that never touches secondary modules.",
      ],
    },
    {
      type: "h2",
      text: "A final filter before the next sprint planning",
    },
    {
      type: "p",
      text: "Print this and keep it next to the backlog. If a ticket cannot survive it, it does not belong in the sprint—however small it looks on paper.",
    },
    {
      type: "ul",
      items: [
        "We can name the ICP who needs this without saying “also useful for…”.",
        "We can point to evidence newer than a single anecdote from last quarter.",
        "We know the metric that would make us proud—and the metric that would make us delete it.",
        "We have checked that shipping it will not slow Core time-to-value.",
        "We are willing to hide it if adoption fails, not quietly leave it in the nav forever.",
      ],
    },
    {
      type: "p",
      text: "Restraint is not scarcity theatre. It is respect for attention—theirs and yours. Build less that matters more. The market rarely asks for a bigger product. It asks for a clearer one. When you need a partner to run that filter with you—not another brainstorm sticky—bring the roadmap and the support themes. The cuts are usually obvious once the Core job is written in ink.",
    },
    {
      type: "cta",
      lead: "Need help deciding what to build—and what to cut—next quarter?",
      button: "Run a feature focus session",
      href: "/contact",
    },
  ],
};

export default post;
