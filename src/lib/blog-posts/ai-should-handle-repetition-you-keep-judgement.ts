import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "ai-should-handle-repetition-you-keep-judgement",
  title: "Let AI do the boring bits. You keep the taste.",
  excerpt:
    "Scale the busywork. Protect the decisions that define the work.",
  date: "August 13, 2026",
  category: "Go-to-Market",
  image: "/images/blog/blog-55-repetition-judgement.png",
  metaDescription:
    "A practical division of labour with AI: automate repetition and protect judgement-what to delegate to tools and what founders must still own.",
  content: [
    {
      type: "p",
      text: "The most expensive AI mistake I see is not using the tools. It is using them on the wrong layer of the work. Teams automate the decision and hand-craft the busywork-or worse, automate both and call the resulting fog a workflow. Then they wonder why everything is faster and somehow worse.",
    },
    {
      type: "p",
      text: "AI should handle the repetition. You should keep the judgement. Scale the busywork. Protect the decisions that define the work. That is the division of labour. It is not anti-automation. It is pro-standards.",
    },
    {
      type: "p",
      text: "This piece is a practical map of what to delegate, what to own, and how to build a system where tools increase throughput without eroding taste. Related: [your competitive advantage was never typing faster](/essays/competitive-advantage-was-never-typing-faster).",
    },
    {
      type: "p",
      text: "Think of it as kitchen brigade logic. Prep can be delegated. Seasoning the dish before it leaves the pass cannot. Many teams currently let the model season freely and then wonder why every plate tastes like the same hotel buffet. Draw the pass line. Put a human on it.",
    },
    {
      type: "h2",
      text: "Repetition vs judgement: a clean enough line",
    },
    {
      type: "p",
      text: "Repetition is work where the pattern is stable and the cost of a small error is low or easily caught: formatting, first-pass summaries, variation generation, tagging, drafting from a finished brief, turning a master essay into three channel cuts. Judgement is work where the wrong call is expensive or identity-defining: positioning, pricing logic, what to promise, what to refuse, which customer pain is real, whether a claim is earned.",
    },
    {
      type: "p",
      text: "The line is not moral. It is economic. Automate where patterns dominate. Stay human where consequences dominate. If you reverse them, you get brittle brands and busy calendars. For why perspective still sits on the human side, read [AI can write your content; it can’t replace your perspective](/essays/ai-can-write-content-cant-replace-perspective).",
    },
    {
      type: "ul",
      items: [
        "Repetition loves templates, examples, and constraints.",
        "Judgement loves evidence, stakes, and accountability.",
        "Mixing them without a gate creates fluent errors at scale.",
        "Owning judgement does not mean doing every task yourself-it means owning the standard.",
      ],
    },
    {
      type: "takeaway",
      text: "Automate pattern-matching labour. Keep decision rights on anything that commits the brand, the product story, or the customer promise.",
    },
    {
      type: "h2",
      text: "A map of what to automate vs what to own",
    },
    {
      type: "table",
      headers: ["Work type", "Usually automate / assist", "Usually keep human", "Gate needed?"],
      rows: [
        [
          "Research synthesis",
          "Clustering notes, summarising transcripts",
          "Which insight changes the roadmap",
          "Yes-before strategy shifts",
        ],
        [
          "Content production",
          "Outlines, variations, formatting",
          "Stake, voice, proof, final publish",
          "Yes-before anything public",
        ],
        [
          "Support macros",
          "Draft replies from policy",
          "Edge cases, apologies, exceptions",
          "Yes-for tone and risk",
        ],
        [
          "Analytics",
          "Charting, anomaly lists",
          "Causal interpretation and next experiment",
          "Yes-before budget moves",
        ],
        [
          "Design exploration",
          "Layout options from a brief",
          "Product narrative and UX priorities",
          "Yes-before build",
        ],
      ],
    },
    {
      type: "quote",
      text: "If nobody can name who owns the final yes, you did not build an AI workflow. You built a diffusion of responsibility with better autocomplete.",
    },
    {
      type: "h2",
      text: "A framework: sort → standard → assist → audit",
    },
    {
      type: "h3",
      text: "1. Sort: inventory tasks by pattern vs consequence",
    },
    {
      type: "p",
      text: "List the recurring work in your marketing and product loop. Mark each item R (repetition) or J (judgement), and note the cost of being wrong. Sorting is uncomfortable because it reveals how much time you spend polishing R while avoiding J. Do it anyway. Strategy before screens still applies: [why I start every project without opening Figma](/essays/why-i-start-every-project-without-opening-figma).",
    },
    {
      type: "callout",
      title: "Exercise: the R/J inventory",
      text: "Take last week’s calendar and tool history. Categorise each block as R or J. Circle every J that was deferred and every R that was over-polished. Next week, move two hours from excess R-polish into one deferred J decision. Measure whether rework drops. That is the ROI of judgement time.",
    },
    {
      type: "h3",
      text: "2. Standard: define the human gate before you scale assist",
    },
    {
      type: "p",
      text: "A standard is what “good” means when nobody is watching: voice rules, proof requirements, claim limits, accessibility basics, legal boundaries. Without standards, assistants optimise for speed into a void. With standards, assistants become leverage. Systems beat campaigns here: [why I care more about systems than campaigns](/essays/why-i-care-more-about-systems-than-campaigns).",
    },
    {
      type: "h3",
      text: "3. Assist: give tools clear inputs and narrow jobs",
    },
    {
      type: "p",
      text: "Assistants fail when the job is “do marketing.” They succeed when the job is “turn this approved stake into three outlines” or “extract objections from these eight call notes.” Narrow jobs. Rich inputs. Human selection afterward. Curiosity still beats prompt costumes-[the best prompt is still a good question](/essays/best-prompt-is-still-good-question).",
    },
    {
      type: "ol",
      items: [
        "Write the standard that must not be violated.",
        "Write the input packet (stake, examples, constraints, audience).",
        "Ask for options, not a single final artefact.",
        "Select, edit, and only then format or scale.",
        "Log failures where the assistant quietly changed a claim.",
      ],
    },
    {
      type: "h3",
      text: "4. Audit: review outputs on a cadence, not only on crisis",
    },
    {
      type: "p",
      text: "Audits catch drift: voice dilution, invented proof, overconfident summaries, customer language replaced by jargon. Schedule them. Treat audit findings as system updates, not blame. Authenticity erodes quietly-see [don’t let AI become your personality](/essays/dont-let-ai-become-your-personality).",
    },
    {
      type: "takeaway",
      text: "Sort work. Set standards. Assist narrowly. Audit on purpose. That is a sustainable division of labour with AI.",
    },
    {
      type: "image",
      src: "/images/blog/blog-mid-09.png",
      alt: "Repetitive tasks flowing to automation while judgement stays with the team",
    },
    {
      type: "h2",
      text: "A fictional contrast: two growth teams",
    },
    {
      type: "p",
      text: "Team A lets a model draft campaigns, choose hooks, and invent testimonials “for inspiration,” then lightly edits. Launch speed is impressive. Trust damage arrives later when a customer recognises a fabricated pattern. Team B uses AI to cluster support themes and draft outline options, but humans choose the stake, approve proof, and write the sentence that takes a risk. Slower day one. Cleaner month three. Same category of tools. Different ownership of judgement.",
    },
    {
      type: "h2",
      text: "Protecting the decisions that define the work",
    },
    {
      type: "p",
      text: "Defining decisions are few: who you are for, what you refuse to claim, what success looks like this quarter, what quality bar blocks shipping. Put those on a short list. Assign owners. Do not bury them inside a prompt chain. Marketing that behaves like product design protects these decisions as carefully as UX priorities: [the best marketing feels like product design](/essays/best-marketing-feels-like-product-design).",
    },
    {
      type: "ul",
      items: [
        "Positioning and offer: human-owned, AI-assisted research welcome.",
        "Proof and claims: human-owned; never invent for speed.",
        "Voice and personality: human-owned standards; AI drafts inside the fence.",
        "Channel tactics: assist freely once the spine is set.",
        "Measurement interpretation: assist with views; humans own causal stories that move budget.",
      ],
    },
    {
      type: "h2",
      text: "Scaling busywork without scaling confusion",
    },
    {
      type: "p",
      text: "Busywork scales cleanly when the inputs are clean. If your brief is vague, automation multiplies vagueness. If your stake is sharp, automation multiplies usefulness. The operational lesson is boring and correct: spend more time on the packet you give the tool than on the settings of the tool.",
    },
    {
      type: "p",
      text: "Teams that skip this step often create a second job-editing machine sludge-that feels like productivity because it fills the day. It is not. It is unpaid quality control for a process you refused to design. Design the process: standards, inputs, gates, audits. Then let repetition run. Consistency of system still outperforms brilliance of one-off heroics: [the internet rewards consistency more than brilliance](/essays/internet-rewards-consistency-more-than-brilliance).",
    },
    {
      type: "p",
      text: "Judgement is not a mystical aura. It is a named person saying yes or no against a standard, with enough context to be accountable. If your AI stack has no named humans at the gates, you have automated diffusion of responsibility. That feels modern until a claim goes wrong and nobody can explain who approved it. Keep the boring org chart of taste. It is part of the product.",
    },
    {
      type: "ol",
      items: [
        "For each automated workflow, name the human owner of the gate.",
        "Require a written input packet before generation starts.",
        "Cap unattended publishing; prefer assisted drafts with a named approver.",
        "Review one week of outputs against the judgement charter every Friday.",
        "Kill any workflow that saves minutes but creates hours of trust repair.",
      ],
    },
    {
      type: "callout",
      title: "Exercise: the two-column week",
      text: "For five working days, keep a two-column log: Repetition completed with AI assist, and Judgements made without outsourcing the final call. At the end of the week, ask whether the second column is embarrassingly short. If it is, you did not lack tools-you lacked ownership. Rebalance before you add another integration.",
    },
    {
      type: "callout",
      title: "Try this",
      text: "Write a one-page “judgement charter”: five decisions AI may not finalise, three artefacts that always need a named human approver, and two metrics that trigger an audit. Put it where the team can see it. If someone cannot find the charter, you do not have a charter-you have a hope.",
    },
    {
      type: "h2",
      text: "What research is useful for",
    },
    {
      type: "p",
      text: "For human-AI collaboration patterns, [Harvard Business Review](https://hbr.org/) regularly covers augmentation versus substitution. [Nielsen Norman Group](https://www.nngroup.com/) is practical when automation touches UX and content quality. The [UK Government’s guidance on using AI in the public sector](https://www.gov.uk/government/publications/guidance-to-civil-servants-on-use-of-generative-ai) is unexpectedly clear on keeping humans accountable for outputs-worth reading even if you are not a civil servant.",
    },
    {
      type: "h2",
      text: "How this shows up in my work at nau",
    },
    {
      type: "p",
      text: "I help founders design growth systems where AI compresses repetition and humans keep the stakes. That usually means clearer briefs, stronger voice rules, and fewer campaigns that try to invent belief from scratch. If belief still has to be earned the long way, start with [organic growth isn’t free-it’s earned](/essays/organic-growth-isnt-free-its-earned). If trust is the real bottleneck, read [people trust people before they trust marketing](/essays/people-trust-people-before-they-trust-marketing).",
    },
    {
      type: "p",
      text: "The goal is not a smaller role for humans. It is a sharper one. Less time formatting. More time deciding. Less time regenerating the same paragraph. More time protecting the sentence that could only come from your company. That is the bargain worth making with these tools.",
    },
    {
      type: "p",
      text: "Do that consistently and AI stops being a personality replacement or a thinking substitute. It becomes what it should have been from the start: leverage on the work that never deserved a human’s full attention.",
    },
    {
      type: "faq",
      items: [
        {
          question: "Doesn’t keeping judgement human slow us down?",
          answer:
            "It slows reckless publishing. It speeds learning by reducing rework and trust repairs. Speed without standards is just a faster way to confuse the market.",
        },
        {
          question: "What if our team is tiny and one person does everything?",
          answer:
            "Then timebox judgement blocks and automation blocks explicitly. Tiny teams fail when they automate the only hour they had for deciding.",
        },
        {
          question: "Can judgement be trained into the model over time?",
          answer:
            "You can encode preferences and examples. You cannot outsource accountability. Treat models as constrained assistants, not as owners of irreversible calls.",
        },
        {
          question: "How do we know we automated the wrong thing?",
          answer:
            "Watch for rising edit fatigue, brand drift, customer replies that say “this doesn’t sound like you,” or decisions that somehow “just happened” inside a tool chain.",
        },
      ],
    },
    {
      type: "h2",
      text: "Draw the line on purpose",
    },
    {
      type: "p",
      text: "AI is excellent at repetition and indifferent to responsibility. Your advantage is the opposite profile. Let tools carry the pattern work. Keep the judgements that define product, promise, and personality. Draw the line on purpose-or the market will draw it for you when everything you publish sounds fast, fluent, and forgettable.",
    },
    {
      type: "cta",
      lead: "Want help designing an AI-assisted growth system that scales busywork without giving away the decisions that matter?",
      button: "Talk about your workflow",
      href: "/contact",
    },
  ],
};

export default post;
