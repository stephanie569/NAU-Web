import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "every-startup-looks-like-marketing-problem-until-deeper",
  title: "Every startup looks like a marketing problem until you dig deeper.",
  excerpt:
    "Surface symptoms point to marketing. Digging deeper usually reveals positioning gaps, weak activation, or a product story that never landed—here is the diagnostic order I use.",
  date: "July 15, 2026",
  category: "Product research and positioning",
  image: "/images/blog/blog-12-dig-deeper.png",
  metaDescription:
    "Why startup growth issues look like marketing problems—and a practical diagnostic for clarity, activation, retention, and distribution before you spend more on channels.",
  content: [
    {
      type: "p",
      text: "From the outside, every stalled startup looks like it needs marketing. Dig one layer deeper and you often find something else: an ICP that is too broad, an activation flow that never delivers value, or a homepage that cannot finish a sentence. Marketing is the costume. Clarity is usually the patient.",
    },
    {
      type: "p",
      text: "I am not anti-marketing. I am anti-misdiagnosis. Amplifying a fuzzy offer makes the confusion louder and the CAC sadder. The teams that recover fastest are the ones willing to dig past the symptom. This is the diagnostic order I use at nau—and the reason I often disappoint founders who want a channel plan on day one before anyone can finish a sentence about the customer.",
    },
    {
      type: "h2",
      text: "Why marketing becomes the default villain (and hero)",
    },
    {
      type: "p",
      text: "Marketing is visible. When pipeline dips, the visible lever is more campaigns, more content, more spend. Product strategy and activation design are quieter. They live in sentences, onboarding steps, and who you refuse to sell to. Boards can screenshot an ad calendar. They cannot screenshot a belief gap. So the organisation reaches for the screenshot.",
    },
    {
      type: "p",
      text: "Y Combinator’s library keeps returning to product and users before scale—[Y Combinator Library](https://www.ycombinator.com/library). First Round’s operator essays show how often “growth problems” dissolve once positioning and onboarding harden—[First Round Review](https://review.firstround.com/). Harvard Business Review’s strategy writing still names the trap of treating symptoms as root causes—[HBR](https://hbr.org/).",
    },
    {
      type: "callout",
      title: "A useful suspicion",
      text: "If paid channels “only work” when the creative explains what the homepage will not, you do not have a creative problem. You have a product-story problem wearing media buyers’ clothes.",
    },
    {
      type: "h2",
      text: "A simple diagnostic order",
    },
    {
      type: "p",
      text: "I run four questions in sequence. Skipping ahead feels faster. It rarely is. This pairs with [your product doesn’t have a marketing problem](/blog/product-doesnt-have-marketing-problem-clarity-problem) and [before you spend £10,000 on marketing](/blog/before-spend-10000-marketing-five-questions).",
    },
    {
      type: "ol",
      items: [
        "Can a cold visitor understand the offer?",
        "Can a new user reach value quickly?",
        "Do retained users describe the product consistently?",
        "Only then: is distribution insufficient?",
      ],
    },
    {
      type: "h3",
      text: "1. Comprehension: can a stranger explain you?",
    },
    {
      type: "p",
      text: "Open the homepage in incognito on a phone. Time-to-paraphrase should be short. If a stranger cannot say who it is for and what changes, distribution will punish you. Nielsen Norman Group’s research on how people scan and decide is a helpful external check—[NN/g](https://www.nngroup.com/). Google’s guidance on helpful content assumes the page actually helps someone specific—[Google Search Central](https://developers.google.com/search/docs).",
    },
    {
      type: "p",
      text: "Symptoms of a comprehension gap: rising traffic with flat demos; sales restarting the pitch every call; ads that must over-explain; customers describing five different products. Fixes live in ICP, offer sentence, hero, and proof placement—not in another blog series. Related: [why websites fail in the first 10 seconds](/blog/why-startup-websites-fail-first-10-seconds).",
    },
    {
      type: "h3",
      text: "2. Activation: can they reach value quickly?",
    },
    {
      type: "p",
      text: "If people sign up and stall, you may have sold a story the first session cannot keep. Time-to-value is a product strategy metric. Empty-state tours, forced education, and feature museums are common villains. Stripe and Figma made early value feel obvious; that was not an accident of taste alone. Accessibility and performance matter here too—slow or unusable paths fake “activation problems” that are really quality problems ([WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/), [web.dev vitals](https://web.dev/articles/vitals)).",
    },
    {
      type: "h3",
      text: "3. Retention narrative: do users agree on what you are?",
    },
    {
      type: "p",
      text: "Ask ten retained users what they hire you for. If answers scatter, your product is a toolkit without a centre—or your marketing invited the wrong crowd. Consistency is a signal of fit. Scatter is a signal to narrow. This is adjacent to [what founders get wrong about product–market fit](/blog/what-founders-get-wrong-about-product-market-fit).",
    },
    {
      type: "h3",
      text: "4. Distribution: only after the path works",
    },
    {
      type: "p",
      text: "When cold visitors understand you, new users reach value, and retained users rhyme, then volume is a fair target. Until then, more channels multiply noise. Marketing becomes the right tool when the machine can take load.",
    },
    {
      type: "table",
      headers: ["Stage check", "Healthy signal", "If broken, dig here"],
      rows: [
        [
          "Comprehension",
          "Cold paraphrase matches your offer",
          "ICP, hero, proof, nav focus",
        ],
        [
          "Activation",
          "Short time-to-first-value",
          "Onboarding, empty states, performance",
        ],
        [
          "Retention narrative",
          "Users describe the same job",
          "Positioning, feature sprawl, ICP mix",
        ],
        [
          "Distribution",
          "Volume limited despite healthy path",
          "Channels, creative, partnerships",
        ],
      ],
    },
    {
      type: "takeaway",
      text: "Diagnose in order: comprehension → activation → retention narrative → distribution. Skipping to ads is how you fund confusion.",
    },
    {
      type: "h2",
      text: "A fictional dig: meadowhr",
    },
    {
      type: "p",
      text: "MeadowHR sells “people ops for growing teams.” Pipeline softens. The board wants LinkedIn Ads. Digging deeper: the homepage never names a company stage; onboarding forces a full HRIS setup before any win; retained customers are mostly 40–80 person tech firms who use it for holiday and sickness tracking—not “people ops.” Ads would have bought the wrong audience into a heavyweight setup. Fixes: ICP exclusions, hero rewrite around leave tracking for mid-size tech, onboarding that completes one leave policy in minutes, sales script aligned. Distribution came later—and cheaper per qualified lead.",
    },
    {
      type: "p",
      text: "Notion’s expansion worked because a clear centre of gravity existed first. Your expansion fantasies can wait until someone can explain the centre without a deck.",
    },
    {
      type: "h2",
      text: "Common misreads that keep teams shallow",
    },
    {
      type: "ul",
      items: [
        "“We need more content” when the ICP is undefined—content cannot aim itself.",
        "“We need a rebrand” when the offer sentence is unfinished—paint is not strategy.",
        "“We need more features” when activation is buried—see [unused feature costs](/blog/hidden-cost-building-features-nobody-asked-for).",
        "“We need better creatives” when the landing page contradicts the ad.",
        "“We need a growth hire” when no one owns the primary conversion path.",
      ],
    },
    {
      type: "p",
      text: "Baymard’s research discipline—find the real friction—is a good cultural import even for SaaS marketing sites: [Baymard](https://baymard.com/blog). The Interaction Design Foundation’s UX research primers help teams structure interviews so “digging deeper” is not just founder intuition: [Interaction Design Foundation](https://www.interaction-design.org/).",
    },
    {
      type: "h2",
      text: "The language trap: when teams argue past the diagnosis",
    },
    {
      type: "p",
      text: "Digging fails when vocabulary stays vague. “Engagement is down” can mean anything. Force precision: which stage, which segment, which device, which offer version. Replace “we need growth” with “qualified demo rate from cold UK traffic fell after the reposition.” Precision makes the next experiment obvious. Vagueness invites another campaign brainstorm—the organisational comfort blanket.",
    },
    {
      type: "p",
      text: "I also watch for category theatre: teams that describe themselves with buzzwords nobody searches and nobody says on calls. If customer language and homepage language diverge, comprehension is already broken. Pull phrases from recordings into the hero before you debate brand voice. [Five minutes on your website](/blog/five-minutes-on-your-website-enough-to-find-issues) is often enough to spot the divergence; depth comes from pairing that scan with funnel stages.",
    },
    {
      type: "h3",
      text: "When product and marketing co-own the dig",
    },
    {
      type: "p",
      text: "The healthiest teams run the diagnostic together. Marketing brings channel and creative evidence. Product brings activation and retention. Founders bring ICP honesty. If marketing alone owns “growth,” you will keep buying attention for a product story product does not keep. If product alone owns “growth,” you may ship features into silence. Shared leakage maps beat departmental narratives. That is also why [the best marketing feels like product design](/blog/best-marketing-feels-like-product-design).",
    },
    {
      type: "p",
      text: "For spend that is about to land in the wrong place, revisit [where the first £1,000 often goes wrong](/blog/first-1000-pounds-startup-spent-wrong-place). The pattern is older than your current stack.",
    },
    {
      type: "h2",
      text: "What deeper looks like across three surfaces",
    },
    {
      type: "p",
      text: "Homepage: replace category poetry with customer + outcome; place proof beside risk; choose one CTA. Onboarding: delete steps that do not create the first outcome; measure time-to-value; fix performance blockers that masquerade as drop-off. Sales: record the objections that never appear on-site; add answers as proof blocks; stop selling roadmap fiction. Those three surfaces cover most “marketing problems” I am asked to fix. Channels come after the surfaces agree with each other.",
    },
    {
      type: "p",
      text: "When teams insist the brand is the issue, I ask whether a colder, clearer page with the same brand assets would convert better. Often it would. Brand then becomes a craft layer on a working argument—not a ransom note holding strategy hostage. For website-specific surgery after the dig, [landing page review](/blog/landing-page-review-helping-hurting-conversions) and [why sites fail in ten seconds](/blog/why-startup-websites-fail-first-10-seconds) stay on the shortlist.",
    },
    {
      type: "h2",
      text: "A note on ego, boards, and the urge to look busy",
    },
    {
      type: "p",
      text: "Digging deeper can feel politically risky. Marketing spend is a visible response to board pressure. Clarity work can look like “just copy changes.” I reframe it as risk removal: every pound spent amplifying confusion has a cost beyond CAC—it teaches the organisation the wrong lesson about what works. Show the stage metrics. Show the paraphrase failures. Make the invisible constraint visible enough that busywork looks expensive.",
    },
    {
      type: "p",
      text: "If you need a partner posture for that conversation, the day-one plan in [if I joined your startup tomorrow](/blog/if-i-joined-your-startup-tomorrow-what-id-do-first) doubles as a board-friendly sequence: diagnose, clarify, fix the path, then amplify. Skipping to amplify is not bold. It is loud.",
    },
    {
      type: "p",
      text: "One more practical habit: write the diagnostic answer as a memo the team can reopen in a month. Memory edits history toward whatever spend felt busiest. A dated leakage map keeps everyone honest when the next “we need marketing” wave arrives—and it will. Attach the cold paraphrases; they are harder to argue with than opinions about brand energy.",
    },
    {
      type: "h2",
      text: "How I dig in practice",
    },
    {
      type: "ol",
      items: [
        "Pull stage metrics and annotate the largest drop with a hypothesis.",
        "Listen to five calls or support threads without defending the product.",
        "Rewrite the offer in one sentence; pressure-test with two outsiders.",
        "Walk website + first run on mobile; note first confusion and first value.",
        "Only then decide whether the next pound should buy clarity work or distribution.",
      ],
    },
    {
      type: "p",
      text: "This is the spirit of [if I joined your startup tomorrow](/blog/if-i-joined-your-startup-tomorrow-what-id-do-first) and [what I’d change in 30 days](/blog/what-i-would-change-if-you-gave-me-your-startup-30-days). Dig until the constraint is visible, then design the system that removes it.",
    },
    {
      type: "callout",
      title: "Marketing still matters",
      text: "Once the path is sound, marketing is how you earn attention at scale. The point is sequence—not purity. Amplify what is true.",
    },
    {
      type: "h2",
      text: "Try this: a 60-minute deeper dig",
    },
    {
      type: "ol",
      items: [
        "Write the four diagnostic questions on a page. Answer with evidence, not vibes.",
        "For the first failed question, list three concrete fixes you could ship in two weeks.",
        "Put a hold on new channel experiments until those fixes land—or until you document why the path is already healthy.",
        "Share the one-page dig with the team. Invite disagreement with data attached.",
        "Schedule a follow-up to re-measure the same stage.",
      ],
    },
    {
      type: "p",
      text: "If you want conversion-specific surgery after the dig, use [three changes that can double conversion](/blog/website-audit-three-changes-double-conversion) or [landing page review](/blog/landing-page-review-helping-hurting-conversions). If beauty is masking the issue, read [why beautiful websites don’t always convert](/blog/why-beautiful-websites-dont-always-convert).",
    },
    {
      type: "quote",
      text: "Marketing amplifies what is already true. If the product story is unclear, amplification makes the confusion louder.",
    },
    {
      type: "takeaway",
      text: "Digging deeper is a discipline: evidence at each stage, fixes that match the broken stage, and distribution only when the path can carry it.",
    },
    {
      type: "faq",
      items: [
        {
          question: "What if investors demand growth now?",
          answer:
            "Show the leakage map. Propose a two-week clarity/activation sprint with named metrics, then a distribution plan gated on those metrics. Urgency without diagnosis is how budgets vanish.",
        },
        {
          question: "Can we dig and run small ads in parallel?",
          answer:
            "Small tests that learn message-market fit can help—if you treat them as research, not a scale plan, and if landing pages match the creative.",
        },
        {
          question: "How do we know distribution is finally the constraint?",
          answer:
            "Cold visitors paraphrase correctly, activation hits a healthy bar for the ICP, retained users rhyme, and volume is the limiter. Then buy the megaphone.",
        },
        {
          question: "Is this only for B2B SaaS?",
          answer:
            "The order holds for consumer and services too. The surfaces change; the questions do not. Comprehension and first value still precede scale.",
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
        "Run the four-question diagnostic with evidence attached.",
        "Pick the earliest failed stage and assign an owner.",
        "Pause net-new channel spend until the fix is in flight—or justified.",
        "Align homepage, sales, and onboarding to one offer sentence.",
        "Re-measure the same stage in fourteen days.",
        "Save the dated memo so the next growth panic starts from evidence, not folklore.",
      ],
    },
    {
      type: "p",
      text: "Every startup looks like a marketing problem from the hallway. From the funnel, the recordings, and the first session, it usually looks like something more specific—and more fixable. Dig. Then spend. That order is the whole job—and the difference between durable growth work and expensive noise.",
    },
    {
      type: "cta",
      lead: "Ready to dig past the marketing symptom?",
      button: "Book a diagnostic call",
      href: "/contact",
    },
  ],
};

export default post;
