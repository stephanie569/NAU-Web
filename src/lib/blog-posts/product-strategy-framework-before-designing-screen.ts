import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "product-strategy-framework-before-designing-screen",
  title:
    "My pre-Figma checklist before I design a single screen",
  excerpt:
    "Before Figma, before wireframes, before pixels: a five-box strategy framework that keeps product design attached to real customer decisions-and stops beautiful interfaces for the wrong problem.",
  date: "July 25, 2026",
  category: "Research & Positioning",
  image: "/images/blog/blog-04-framework.png",
  metaDescription:
    "A practical product strategy framework to use before UI design-covering ICP, jobs-to-be-done, alternatives, outcomes, belief gaps, and conversion paths.",
  content: [
    {
      type: "p",
      text: "Designing screens too early feels productive. It is also how teams ship beautiful interfaces for the wrong problem. Before I open a design tool, I run a short strategy framework that forces clarity. The frames can wait; the thinking cannot.",
    },
    {
      type: "p",
      text: "I say this as someone who loves good interface craft. Craft without strategy is expensive decoration. Strategy without craft is a memo nobody can use. The order matters: decide what must be true, then design the experience that makes those truths visible and actionable.",
    },
    {
      type: "p",
      text: "This is why I [start projects without opening Figma](/essays/why-i-start-every-project-without-opening-figma). Not as a personality quirk. As risk management. Pixels create false consensus-“we all like this layout”-while the customer, job, and belief gaps remain unnamed.",
    },
    {
      type: "callout",
      title: "When to use this framework",
      text: "Use it before a new product, a major reposition, a homepage redesign, or any feature that will change what customers believe about you. Skip it only when the five boxes are already written and still true.",
    },
    {
      type: "h2",
      text: "Why screens without strategy fail quietly",
    },
    {
      type: "p",
      text: "UI work creates artefacts people can react to. Stakeholders argue about spacing. Engineers estimate tickets. Founders feel momentum. Meanwhile nobody has agreed who the product is for when tradeoffs appear. Tradeoffs always appear.",
    },
    {
      type: "p",
      text: "Figma and Linear are excellent tools for building software experiences. They do not decide your ICP. Airbnb’s product clarity did not come from a component library first; it came from a sharp understanding of hosts, guests, and trust. Apple’s onboarding discipline starts from what the customer must believe and feel-not from a screen inventory. Tools amplify intent. They do not invent it.",
    },
    {
      type: "takeaway",
      text: "If you cannot fill five strategy boxes in plain English, you are not ready to design screens-you are ready to guess in higher resolution.",
    },
    {
      type: "h2",
      text: "The five boxes I fill first",
    },
    {
      type: "ol",
      items: [
        "Customer: who is in, who is out.",
        "Job-to-be-done: the progress they want.",
        "Current alternatives: what they use today (including doing nothing).",
        "Outcome: the measurable change your product creates.",
        "Belief gap: what they must believe before they buy or activate.",
      ],
    },
    {
      type: "h3",
      text: "Box 1: customer: who is in, who is out",
    },
    {
      type: "p",
      text: "Write a primary customer as a decision-maker in a context. Then write exclusions. Exclusions are how positioning becomes real. “Also useful for enterprises, freelancers, and students” is how homepages become airports.",
    },
    {
      type: "p",
      text: "Example: “Head of Customer Success at B2B SaaS companies with 15-60 CSMs, post-Series A, whose renewals depend on messy spreadsheets.” Out: consumer support teams, pure sales tools buyers, enterprises with two-year procurement cycles (for now).",
    },
    {
      type: "h3",
      text: "Box 2: job-to-be-done: the progress they want",
    },
    {
      type: "p",
      text: "Jobs are progress, not feature requests. “I need a dashboard” is a request. “I need to walk into a QBR without fearing a surprise churn story” is a job. Design for the job and the dashboard becomes a means, not a destination.",
    },
    {
      type: "p",
      text: "A useful prompt: When ___ happens, I want to ___, so I can ___. Fill it with customer language from interviews-not from your roadmap vocabulary. The [Interaction Design Foundation](https://www.interaction-design.org/) has accessible primers on user-centred framing; the point is not academic purity. The point is designing for progress.",
    },
    {
      type: "h3",
      text: "Box 3: current alternatives (including doing nothing)",
    },
    {
      type: "p",
      text: "Your competitor is often a spreadsheet, an agency, a junior hire, or inertia. Map the real alternative stack. If “doing nothing” is cheap and pain is intermittent, your product must create urgency or remove friction dramatically. Otherwise you design a nicer optional tool.",
    },
    {
      type: "p",
      text: "Notion did not only compete with other docs tools; it competed with the messy combination of docs, wikis, and tasks people already tolerated. Stripe competed with painful integration work and brittle payment setups. Name the alternative honestly or your differentiation will target a ghost.",
    },
    {
      type: "h3",
      text: "Box 4: outcome: the measurable change",
    },
    {
      type: "p",
      text: "State the change in a way a customer could verify. Time saved. Revenue protected. Errors reduced. Cycle time shortened. Soft outcomes (“feel more aligned”) need observable proxies or they evaporate in sales calls.",
    },
    {
      type: "p",
      text: "Weak: “Better collaboration.” Stronger: “Cut weekly status meeting time by half because blockers are visible without a round-robin.” The second outcome designs onboarding. The first designs posters.",
    },
    {
      type: "h3",
      text: "Box 5: belief gap: what they must believe",
    },
    {
      type: "p",
      text: "Before someone buys or activates, they must believe several things: the problem is worth solving now, your approach works, switching cost is manageable, and risk is acceptable. List the gaps. Each major screen or page should close at least one.",
    },
    {
      type: "table",
      headers: ["Belief gap", "Where it often shows up", "Design / content response"],
      rows: [
        [
          "“This isn’t for companies like mine”",
          "Homepage hero",
          "Audience cue + relevant proof",
        ],
        [
          "“I don’t believe the outcome”",
          "Hero / pricing",
          "Specific metrics, demos, cases",
        ],
        [
          "“Switching will be painful”",
          "Onboarding / migration",
          "Time-to-value path, import, guided setup",
        ],
        [
          "“I’ll look silly if this fails”",
          "Sales / security / guarantee",
          "Risk reversals, references, clarity on scope",
        ],
      ],
    },
    {
      type: "takeaway",
      text: "Screens are arguments. Each one should reduce a belief gap or advance a job. If it does neither, it is decoration.",
    },
    {
      type: "h2",
      text: "Only then do screens make sense",
    },
    {
      type: "p",
      text: "UI becomes a translation layer: each screen should reduce a belief gap or advance a job. If a screen does neither, it is decoration-however lovely the spacing.",
    },
    {
      type: "ul",
      items: [
        "Homepage answers belief gaps for cold traffic.",
        "Onboarding delivers the first outcome fast.",
        "Pricing pages resolve risk and value comparison.",
        "Feature pages map to jobs-not internal modules.",
        "Empty states teach the next action, not the brand story.",
      ],
    },
    {
      type: "image",
      src: "/images/blog/blog-mid-02.png",
      alt: "Strategy notes and planning materials used before UI design begins",
    },
    {
      type: "p",
      text: "When the five boxes are filled, design stops being improvisation and starts being argument made visible. Wireframes get easier because you know what each frame must accomplish. Critiques get sharper because “I don’t like blue” is no longer the main feedback genre-though someone will still mention blue. People are consistent that way.",
    },
    {
      type: "h2",
      text: "A worked example: fictional startup “parcelmind”",
    },
    {
      type: "p",
      text: "Parcelmind wants to build “AI logistics for DTC brands.” Before screens, the boxes:",
    },
    {
      type: "ul",
      items: [
        "Customer: Ops lead at DTC brands doing £2-15M online, shipping from 1-2 warehouses, currently living in Shopify + spreadsheets.",
        "Job: Prevent “where is my order?” chaos during peak without hiring another coordinator.",
        "Alternatives: Spreadsheets, Slack threads, overpaying a 3PL for visibility they still do not trust, doing nothing until Black Friday pain.",
        "Outcome: Reduce WISMO tickets by 30% in 60 days; same-day anomaly detection on delayed parcels.",
        "Belief gaps: “AI will hallucinate tracking,” “We’ll need engineering to integrate,” “This is only for huge brands.”",
      ],
    },
    {
      type: "p",
      text: "Now screens have jobs. Homepage: prove it is for mid-size DTC, show WISMO outcome, demote enterprise theatre. Onboarding: connect store, show first anomaly in under fifteen minutes. Settings can wait. A settings-first onboarding would be a strategy failure wearing a progress bar.",
    },
    {
      type: "h2",
      text: "Try this: fill the boxes in 60 minutes",
    },
    {
      type: "ol",
      items: [
        "Set a timer. No Figma. One document.",
        "Fill each box in bullet form. Force exclusions in box 1.",
        "For box 5, list at least five belief gaps and rank by how often they kill deals or activation.",
        "Map your current homepage and onboarding: which gaps do they close? Which do they ignore?",
        "Choose the single gap to close next. Design only for that until it moves a metric.",
        "Only then open a design tool-with the boxes pinned above the canvas.",
      ],
    },
    {
      type: "callout",
      title: "Team rule",
      text: "No new major screen ships without naming the job it advances and the belief gap it reduces. If nobody can answer, the screen is a speculative asset.",
    },
    {
      type: "h2",
      text: "How this connects to positioning, PMF, and spend",
    },
    {
      type: "p",
      text: "The five boxes are the spine behind repositioning work-see [how I’d reposition your startup in 60 minutes](/essays/how-id-reposition-your-startup-in-60-minutes). They also prevent the expensive habit of scaling an unclear offer, covered in [the most expensive early-stage mistake](/essays/most-expensive-mistake-early-stage-founders). And they keep product-market fit conversations honest: fit requires a defined customer and a valued outcome, not a vibe-more in [what founders get wrong about product-market fit](/essays/what-founders-get-wrong-about-product-market-fit).",
    },
    {
      type: "p",
      text: "For operators who want external reading on building products that map to real decisions, [Harvard Business Review](https://hbr.org/) and [First Round Review](https://review.firstround.com/) regularly cover strategy-before-execution lessons. Pair them with primary customer conversations. Frameworks are not a substitute for contact with reality-they are a way to remember what you learned.",
    },
    {
      type: "faq",
      items: [
        {
          question: "Does this slow us down?",
          answer:
            "It slows fake progress and speeds real progress. An hour of boxes can prevent a month of redesigning the wrong onboarding.",
        },
        {
          question: "What if we already have screens in production?",
          answer:
            "Run the framework retrospectively. You will find screens that exist because of internal org charts, not jobs. Those become candidates to simplify.",
        },
        {
          question: "Can design systems replace this?",
          answer:
            "Design systems improve consistency and speed. They do not choose customers or outcomes. Use both-in the right order.",
        },
        {
          question: "How does this relate to whether something is worth building?",
          answer:
            "If boxes 1-4 are weak, pause build. I expand that decision process in [how I decide whether a product is worth building](/essays/how-i-decide-whether-product-worth-building).",
        },
      ],
    },
    {
      type: "h2",
      text: "Turning boxes into an experience map",
    },
    {
      type: "p",
      text: "Once the five boxes exist, map the journey where belief gaps get closed. This is not a forty-lane journey diagram. It is a short sequence:",
    },
    {
      type: "ol",
      items: [
        "Cold awareness: homepage closes “is this for me?” and “what changes?”",
        "First session: onboarding closes “can I get value without pain?”",
        "Habit: core loops close “does this keep helping the job?”",
        "Expansion: pricing and invites close “is more of this worth it?”",
      ],
    },
    {
      type: "p",
      text: "Assign each major belief gap to a step. If three critical gaps are all dumped onto the homepage, the homepage becomes a suitcase that will not close. Spread the argument. That is how [customer journeys get redesigned](/essays/how-id-redesign-brand-customer-journey) without turning into slideware.",
    },
    {
      type: "h2",
      text: "Critique questions that replace “I don’t like it”",
    },
    {
      type: "p",
      text: "When screens finally appear, critique against the boxes:",
    },
    {
      type: "ul",
      items: [
        "Which job does this screen advance?",
        "Which belief gap does it reduce?",
        "What would a user do if this screen disappeared?",
        "Does this serve the primary ICP-or an excluded segment we already refused?",
        "Where is the proof for the claim this screen makes?",
      ],
    },
    {
      type: "p",
      text: "If the room cannot answer, the screen is premature-even if it is pretty. Pretty is not a strategy KPI, however much Behance would like it to be.",
    },
    {
      type: "h2",
      text: "Common ways teams fake the framework",
    },
    {
      type: "ul",
      items: [
        "Writing an ICP so broad it includes everyone with a pulse and a browser.",
        "Listing “competitors” that are logos you envy, not alternatives customers use.",
        "Stating outcomes nobody can measure (“delight,” “alignment,” “transformation”).",
        "Filling belief gaps with marketing slogans instead of product behaviours.",
        "Doing the workshop once, then ignoring the boxes when a big logo asks for a custom detour.",
      ],
    },
    {
      type: "callout",
      title: "Integrity check",
      text: "Re-open the document every time a major feature is proposed. If the feature does not serve the job or close a ranked belief gap for the primary ICP, it is a side quest. Side quests feel productive. They are how roadmaps become attic spaces.",
    },
    {
      type: "h2",
      text: "From strategy to launch without losing the plot",
    },
    {
      type: "p",
      text: "The framework is the spine of how I move from strategy into build and launch. Messaging, IA, onboarding, and proof placement should all trace back to the boxes. When something cannot trace back, it is usually politics or habit. For the wider approach, see [from strategy to launch](/essays/from-strategy-to-launch-how-i-approach-new-product) and [what I’d change in your startup in 30 days](/essays/what-i-would-change-if-you-gave-me-your-startup-30-days).",
    },
    {
      type: "h2",
      text: "A one-page strategy template you can reuse",
    },
    {
      type: "p",
      text: "Keep the five boxes on a single page-literally one page-so they stay alive. Title it with the product name and the date. When the page gets longer than one screen, you are collecting essays instead of decisions. Decisions should be short enough to argue about.",
    },
    {
      type: "ul",
      items: [
        "Customer (in / out)",
        "Job-to-be-done (when / want / so I can)",
        "Alternatives (including doing nothing)",
        "Outcome (observable change + timeframe)",
        "Belief gaps (ranked 1-5 with owners)",
        "This month’s design priority (one gap, one surface)",
      ],
    },
    {
      type: "p",
      text: "Share it with engineering and sales before kick-off. If sales cannot use the outcome sentence on a call, the box is not done. If engineering cannot see which belief gap a ticket closes, the roadmap will drift towards interestingness. Interestingness is a fine hobby. It is a costly product strategy.",
    },
    {
      type: "h2",
      text: "When to reopen the boxes mid-build",
    },
    {
      type: "p",
      text: "Reopen them when a new segment shows unexpected pull, when activation stalls after a promise change, or when sales keeps inventing a different story than the homepage. Do not reopen them every time someone has a feature idea-that is how strategy becomes a revolving door. Stability is the point; revision is the exception with a reason.",
    },
    {
      type: "p",
      text: "Fill the boxes. Then design like you mean it. And if someone tries to open Figma mid-sentence during the workshop, gently close the laptop. The pixels will still be there after the thinking. The reverse is less true-unthinking pixels have a long half-life.",
    },
    {
      type: "cta",
      lead: "Need a strategy sprint before your next design cycle?",
      button: "Start with product strategy",
      href: "/contact",
    },
  ],
};

export default post;
