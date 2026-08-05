import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "why-i-start-every-project-without-opening-figma",
  title: "Why I start every project without opening Figma.",
  excerpt:
    "I delay design tools on purpose. Strategy, customer language, and decision mapping come first—so pixels serve a real argument instead of inventing one under deadline pressure.",
  date: "July 14, 2026",
  category: "Product research and positioning",
  image: "/images/blog/blog-13-no-figma.png",
  metaDescription:
    "Why starting product and website projects without Figma leads to clearer strategy, better messaging, stronger conversion design, and fewer pretty wrong answers.",
  content: [
    {
      type: "p",
      text: "Opening Figma too early creates false progress. Frames look like decisions. They are not. I start every project in conversation, research, and narrative—because design should translate strategy, not invent it under deadline pressure while everyone stares at a blank artboard hoping inspiration will arrive with coffee and a new plugin.",
    },
    {
      type: "p",
      text: "This is not an anti-design rant. I care about craft. Craft without an argument becomes a very expensive mood. The process below is how I keep pixels honest at nau—whether the deliverable is a homepage, an onboarding flow, or a broader product experience. For the formal boxes I fill first, see [the strategy framework before designing a screen](/blog/product-strategy-framework-before-designing-screen). The short version: always decide what must be believed first, then design.",
    },
    {
      type: "h2",
      text: "The problem with early Figma",
    },
    {
      type: "p",
      text: "Design tools reward visible output. Stakeholders relax when they see frames. Teams debate corner radius while the offer sentence still wobbles. You leave the workshop with a mid-fidelity homepage and the same strategic fog you walked in with—only now it has a type scale. That fog ships. Bounce rates do not care about your auto-layout hygiene.",
    },
    {
      type: "p",
      text: "Nielsen Norman Group has spent decades showing that usability problems often start in unclear information and tasks, not in missing gradients—[NN/g](https://www.nngroup.com/). Baymard’s research culture similarly privileges evidence over aesthetic opinion—[Baymard](https://baymard.com/blog). Early Figma tends to invert that order: opinion first, evidence later, if at all.",
    },
    {
      type: "callout",
      title: "False progress checklist",
      text: "You have frames but no ICP exclusions. You have components but no belief-gap map. You have motion studies but no success metric. That is theatre with a .fig file extension.",
    },
    {
      type: "h2",
      text: "What I do before design tools",
    },
    {
      type: "h3",
      text: "1. Capture customer phrases verbatim",
    },
    {
      type: "p",
      text: "I collect the words buyers use for the problem, the workaround, and the fear. Those phrases become headline candidates and onboarding copy. Invented brand language can wait. If a founder says “synergistic workflow OS” and a customer says “I just need the roster to stop breaking every Friday,” Friday wins. Y Combinator’s user-facing advice still applies—[Y Combinator Library](https://www.ycombinator.com/library).",
    },
    {
      type: "h3",
      text: "2. Map belief gaps in the buying journey",
    },
    {
      type: "p",
      text: "What must someone believe before they click, trial, or pay? Typical gaps: “this is for companies like mine,” “it will work with our stack,” “the switching cost is worth it,” “these people are credible.” Each page and section gets a job against a gap. Decoration without a gap job is optional. This is how I avoid the failure mode in [why beautiful websites don’t always convert](/blog/why-beautiful-websites-dont-always-convert).",
    },
    {
      type: "h3",
      text: "3. Write the offer until it survives a sceptical read",
    },
    {
      type: "p",
      text: "Plain text. No hero image. No gradient. If the argument fails in a document, Figma will not rescue it. I pressure-test with someone outside the company. Related reading: [clarity vs marketing problems](/blog/product-doesnt-have-marketing-problem-clarity-problem) and [repositioning in 60 minutes](/blog/how-id-reposition-your-startup-in-60-minutes).",
    },
    {
      type: "h3",
      text: "4. Define success metrics for the experience",
    },
    {
      type: "p",
      text: "What does “better” mean in fourteen days? Qualified CTA rate? Time-to-first-value? Demo show rate? Without a metric, design debates become taste contests. With a metric, taste serves an outcome. First Round’s operator writing is full of this discipline—[First Round Review](https://review.firstround.com/).",
    },
    {
      type: "table",
      headers: ["Pre-Figma artefact", "Question it answers", "Owner"],
      rows: [
        [
          "Verbatim phrase bank",
          "What language is already trusted?",
          "Research / founder",
        ],
        [
          "Belief-gap map",
          "What must change before action?",
          "Strategist / PM",
        ],
        [
          "Offer sentence",
          "Who is it for and what changes?",
          "Founder + strategist",
        ],
        [
          "Success metrics",
          "How will we know the design worked?",
          "Founder + product",
        ],
      ],
    },
    {
      type: "takeaway",
      text: "Before pixels: customer language, belief gaps, a sceptical-ready offer, and success metrics. Then—and only then—open the design tool.",
    },
    {
      type: "h2",
      text: "When Figma finally opens",
    },
    {
      type: "p",
      text: "Every screen gets a job: reduce a belief gap or advance a job-to-be-done. Hierarchy follows the argument. Imagery supports meaning. Motion directs attention to the next decision. Components become a system for clarity, not a playground. Apple’s product pages often demonstrate meaning-first hierarchy; Stripe’s marketing historically did the same with restraint. You are not copying their visual skin. You are copying their refusal to let style invent the pitch.",
    },
    {
      type: "ul",
      items: [
        "Homepage: cold-traffic belief gaps and one primary action.",
        "Pricing: risk, comparison, and value clarity.",
        "Onboarding: shortest path to first outcome.",
        "Feature pages: jobs, not internal module names.",
      ],
    },
    {
      type: "p",
      text: "Performance and accessibility enter the design conversation early—not as a QA surprise. Designing six hero variants that each weigh a megabyte is a strategic own-goal. Keep [web.dev](https://web.dev/), [web.dev vitals](https://web.dev/articles/vitals), and [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) in the room with the artboard.",
    },
    {
      type: "h2",
      text: "A fictional start: canvasly",
    },
    {
      type: "p",
      text: "Canvasly wants a “premium redesign” of their project tool for creative studios. Day one request: open Figma. I refuse politely. We interview four studio producers. Phrases: “client feedback chaos,” “version soup,” “I need one link that isn’t embarrassing.” Belief gaps: will clients adopt it, will it replace email, is migration painful? Offer sentence: “One client-ready link for creative studios tired of version soup—feedback in context, without another bloated PM suite.” Metrics: demo rate from studio ICP, time-to-first shared link. Then we design. The hero shows one link and a short feedback thread—not an abstract purple blob labelled synergy. Conversion improves because the argument arrived before the pixels.",
    },
    {
      type: "p",
      text: "Figma the company, ironically, is a fine reminder that collaborative clarity beats ornamental complexity. Use the tool. Do not let the tool set the sequence.",
    },
    {
      type: "callout",
      title: "Founders who insist on frames first",
      text: "I still start with a one-page brief. If they need a visual to feel momentum, I sketch wire structure in low fidelity after the offer sentence—never a polished brand exploration as step one.",
    },
    {
      type: "h2",
      text: "A working pre-Figma brief template",
    },
    {
      type: "p",
      text: "I keep briefs short enough that founders actually read them. If a brief needs a table of contents, it has become a novel. The sections below are usually enough to unlock design without inviting decorative wandering.",
    },
    {
      type: "ul",
      items: [
        "ICP and exclusions (five lines maximum).",
        "Offer sentence and the outcome metric for the experience.",
        "Top three belief gaps with the proof we will place beside each.",
        "Primary CTA and what “qualified” means for that action.",
        "Constraints: brand non-negotiables, tech limits, accessibility bar, performance budget.",
        "Out of scope: the elegant ideas we are not exploring this round.",
      ],
    },
    {
      type: "p",
      text: "Out of scope is the kindness that prevents mid-project scope creep dressed as “quick explorations.” Explorations are cheap only when the argument is stable. When it is not, every exploration rewrites strategy in pixels—and nobody notices until the bounce rate files a complaint. For client intake discipline that protects this sequence, see [questions I ask before taking any client](/blog/questions-i-ask-before-taking-any-client).",
    },
    {
      type: "h3",
      text: "What “done” means before design starts",
    },
    {
      type: "p",
      text: "I call the pre-Figma phase done when a sceptical outsider can repeat the offer, the team agrees on exclusions, belief gaps have owners, and success metrics are written where everyone can see them. Not when the mood board feels exciting. Excitement is allowed later—preferably after the first conversion review shows the argument working on a phone held by someone who does not love you.",
    },
    {
      type: "p",
      text: "If stakeholders demand visual options immediately, I offer two structural wire directions after the sentence locks—not five brand worlds. Structure debates are cheaper than aesthetic debates. Aesthetic debates without structure are how projects burn weeks choosing between two equally unclear futures. For end-to-end sequencing from strategy into launch, see [from strategy to launch](/blog/from-strategy-to-launch-how-i-approach-new-product).",
    },
    {
      type: "h3",
      text: "Research methods that fit a startup week",
    },
    {
      type: "p",
      text: "You do not need a six-week research programme to earn the right to open Figma. Five calls, a support-tag review, a cold paraphrase test, and a mobile walkthrough will expose most belief gaps. The Interaction Design Foundation’s research overviews help teams avoid cargo-cult methods—[Interaction Design Foundation](https://www.interaction-design.org/)—but the standard is still evidence, not ceremony. If research becomes a way to delay decisions forever, you have swapped one form of false progress for another.",
    },
    {
      type: "p",
      text: "Document decisions in the brief so the design file does not become the only source of truth. Files change; premises should be harder to accidentally overwrite with a prettier frame. That is also why I keep success metrics outside the design tool—so “looks done” cannot silently replace “worked.”",
    },
    {
      type: "p",
      text: "When the brief is locked, Figma becomes a translation layer with constraints—and constraints are liberating. Designers make better hierarchy choices when they know which sentence must win. Engineers estimate more honestly when the first outcome is named. Founders argue less about colour when the belief gaps are on the page. That is the real speed gain: fewer circular debates disguised as craft. If you want the same discipline applied to whether the product should exist at all, pair this process with [how I decide whether a product is worth building](/blog/how-i-decide-whether-product-worth-building).",
    },
    {
      type: "h3",
      text: "Collaboration without premature polish",
    },
    {
      type: "p",
      text: "Engineers can join pre-Figma work by pressure-testing feasibility of the first outcome and instrumentation. Marketers can pressure-test whether the offer sentence can live in an ad without a paragraph of footnotes. Founders bring veto power on ICP honesty. Nobody needs a style tile to contribute. When polish arrives early, quieter experts stop challenging the premise—because arguing with a beautiful frame feels rude. Rudeness in service of clarity is underrated. Invite the challenge while the brief is still words; it is cheaper than inviting it after three hero variants.",
    },
    {
      type: "h2",
      text: "How this connects to conversion and product strategy",
    },
    {
      type: "p",
      text: "Starting late in Figma is how you avoid building the wrong features beautifully—[hidden feature costs](/blog/hidden-cost-building-features-nobody-asked-for)—and how you avoid marketing theatre—[dig deeper than marketing](/blog/every-startup-looks-like-marketing-problem-until-deeper). It is also why my first days in a company look like diagnosis, not design sprints: [if I joined tomorrow](/blog/if-i-joined-your-startup-tomorrow-what-id-do-first).",
    },
    {
      type: "p",
      text: "Harvard Business Review’s pieces on design as strategic advantage assume design is integrated with choice-making—[HBR](https://hbr.org/). The Interaction Design Foundation’s UX strategy materials reinforce the same sequence: understand, then shape—[Interaction Design Foundation](https://www.interaction-design.org/). Google’s content and quality guidance rewards pages that help real people—[Google Search Central](https://developers.google.com/search/docs)—another reason argument precedes art direction.",
    },
    {
      type: "h2",
      text: "Try this: a no-Figma morning",
    },
    {
      type: "ol",
      items: [
        "Block three hours. Leave design tools closed.",
        "Pull five customer quotes or call moments into a single doc.",
        "List belief gaps for the primary conversion path.",
        "Write the offer sentence; delete adjectives you cannot defend.",
        "Define one success metric for the next design iteration.",
        "Only after lunch: open Figma and assign each section a gap or job.",
      ],
    },
    {
      type: "p",
      text: "If the morning feels “unproductive,” notice the itch. That itch is addiction to visible output. Learning to tolerate invisible clarity work is a competitive advantage. So is shipping systems instead of spikes—[systems over campaigns](/blog/why-i-care-more-about-systems-than-campaigns).",
    },
    {
      type: "quote",
      text: "When Figma finally opens, every screen has a job. That is how beautiful work also converts—and how I avoid designing my way into a prettier version of the wrong problem.",
    },
    {
      type: "takeaway",
      text: "Delay the design tool until language, gaps, offer, and metrics are real. Then use craft to make the argument inevitable.",
    },
    {
      type: "faq",
      items: [
        {
          question: "Does this slow projects down?",
          answer:
            "It slows false starts. Projects that open Figma first often redo the same screens after strategy catches up. Front-loading clarity is usually faster end-to-end.",
        },
        {
          question: "What about design sprints?",
          answer:
            "Sprints work when the problem and customer are defined. If those are fuzzy, a sprint becomes a workshop for decorating ambiguity. Define first, sprint second.",
        },
        {
          question: "Can engineers start building before Figma?",
          answer:
            "Yes—on foundations, instrumentation, and spikes tied to the success metric. Avoid polishing UI for undecided narratives.",
        },
        {
          question: "Is wireframing allowed in the pre-Figma phase?",
          answer:
            "Low-fidelity structure sketches are fine after the offer sentence. High-fidelity exploration before argument is what I avoid.",
        },
      ],
    },
    {
      type: "h2",
      text: "What to change in your next kickoff",
    },
    {
      type: "ul",
      items: [
        "Put “offer sentence locked” before “explore directions” on the agenda.",
        "Require a belief-gap map in the brief.",
        "Agree success metrics before style tiles.",
        "Schedule customer-language review with founders present.",
        "Open Figma only when the argument can stand alone in text.",
        "After design starts, refuse new “quick explorations” that reopen the offer without new evidence.",
      ],
    },
    {
      type: "p",
      text: "Pixels are powerful. They persuade, reassure, and guide. They should not be asked to invent the strategy while the clock runs. Close the tool until the words are true. Then open it—and make those words impossible to ignore. The blank artboard will still be there tomorrow; a fuzzy offer will still be fuzzy after a week of decorative frames.",
    },
    {
      type: "cta",
      lead: "Want a project process that starts with clarity—not decoration?",
      button: "See how I work",
      href: "/contact",
    },
  ],
};

export default post;
