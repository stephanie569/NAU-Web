import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "what-i-would-change-if-you-gave-me-your-startup-30-days",
  title: "What I would change if you gave me your startup for 30 days",
  excerpt:
    "A practical 30-day plan for early-stage startups: diagnose belief breaks, rebuild the offer, fix the conversion surface, and install a learning system—without rebrand theatre.",
  date: "July 12, 2026",
  category: "Product Launches",
  image: "/images/blog/blog-33-30-days.png",
  metaDescription:
    "A 30-day startup turnaround plan covering positioning, website conversion, product narrative, and proof systems—for founders who need clarity fast.",
  content: [
    {
      type: "p",
      text: "If you handed me your early-stage startup for 30 days, I would not start with a rebrand, a new feature roadmap, or a bigger ad budget. I would start with clarity. Unclear companies waste every other investment.",
    },
    {
      type: "p",
      text: "This is the plan I would run. It is for founders who feel busy, under pressure, and unsure why growth is not matching effort. Thirty days will not invent luck. It can remove confusion—and confusion is usually the silent growth tax.",
    },
    {
      type: "p",
      text: "I am writing this as the operating plan I actually use in compressed strategy sprints at nau: diagnose where belief breaks, rebuild the offer, fix the highest-leverage experience, then install a learning loop so week five is not a relapse into noise.",
    },
    {
      type: "callout",
      title: "What 30 days can and cannot do",
      text: "Can: sharpen positioning, align homepage and first-session story, place proof where objections live, define activation, and create a weekly decision cadence. Cannot: manufacture product–market fit from nothing, replace a missing market, or heal a team that refuses to choose an ICP.",
    },
    {
      type: "h2",
      text: "Days 1–7: find where belief actually breaks",
    },
    {
      type: "p",
      text: "Week one is not about aesthetics. It is about locating the break: awareness, understanding, trust, activation, or retention. Most teams skip diagnosis because shipping feels braver than looking. Looking is braver.",
    },
    {
      type: "ul",
      items: [
        "Review analytics for drop-off by stage—not vanity totals.",
        "Interview five recent customers and five lost leads.",
        "Rewrite the current offer in one sentence and test it with strangers.",
        "Map the first-session experience from ad or search to the aha moment.",
      ],
    },
    {
      type: "h3",
      text: "The belief-break map",
    },
    {
      type: "table",
      headers: ["Stage", "Symptom", "What I inspect first"],
      rows: [
        [
          "Awareness",
          "Low qualified traffic",
          "Channels vs offer sharpness",
        ],
        [
          "Understanding",
          "High bounce, confused demos",
          "Homepage narrative",
        ],
        [
          "Trust",
          "Long cycles, soft yeses",
          "Proof placement and specificity",
        ],
        [
          "Activation",
          "Signups without value",
          "Time-to-value path",
        ],
        [
          "Retention",
          "One-week ghosts",
          "Core job and habit loop",
        ],
      ],
    },
    {
      type: "p",
      text: "By day seven I want one sentence: “Belief breaks at ___ because ___.” If the team cannot agree, we are not ready for week two. Disagreement is data.",
    },
    {
      type: "takeaway",
      text: "Week one produces a diagnosis, not a mood board. If you want the evergreen version of this diagnostic, use [If your product isn’t growing, start here](/blog/if-product-isnt-growing-start-here).",
    },
    {
      type: "h2",
      text: "Days 8–14: rebuild the offer and the story",
    },
    {
      type: "p",
      text: "Most startups do not need more channels. They need a sharper promise. In week two, I lock positioning around one ICP, one primary job, and one measurable outcome.",
    },
    {
      type: "ol",
      items: [
        "Define who is not a fit—and stop marketing to them.",
        "Create a homepage narrative that matches sales conversations.",
        "Align pricing language with outcomes, not feature volume.",
        "Draft a proof plan: case snippets, metrics, and demos that remove risk.",
      ],
    },
    {
      type: "p",
      text: "This is where founders often feel the itch to “refresh the brand.” Resist it. Brand polish on a fuzzy offer is expensive stationery. Positioning first. Visual system later, if needed.",
    },
    {
      type: "image",
      src: "/images/blog/blog-mid-07.png",
      alt: "Strategy workspace with notes and planning materials for a 30-day startup sprint",
    },
    {
      type: "h3",
      text: "Offer canvas I actually use",
    },
    {
      type: "ul",
      items: [
        "Customer: specific role + context (not “SMBs”).",
        "Job: the urgent work they hire you for.",
        "Outcome: measurable change in a believable timeframe.",
        "Alternative: what they do today (including nothing).",
        "Proof: the strongest evidence you can show this month.",
        "Next step: one primary action that matches readiness.",
      ],
    },
    {
      type: "callout",
      title: "Try this on day 10",
      text: "Take your best sales call recording. Extract the phrases that made the buyer lean in. Those phrases belong on the homepage. Your internal vocabulary can stay in Notion where it cannot hurt anyone.",
    },
    {
      type: "takeaway",
      text: "Week two ends with a written offer that sales, product, and the website can share without translation. Related: [how I’d reposition your startup in 60 minutes](/blog/how-id-reposition-your-startup-in-60-minutes).",
    },
    {
      type: "h2",
      text: "Days 15–21: fix the conversion surface",
    },
    {
      type: "p",
      text: "Week three is where product strategy meets the website. I redesign the highest-leverage pages so the story is hard to misunderstand. Not every page. The pages that currently tax attention: homepage, primary landing page, pricing or plan page, and the first-run handoff.",
    },
    {
      type: "ul",
      items: [
        "Hero clarity: who it is for, what changes, what to do next.",
        "Onboarding or lead flow that earns information gradually.",
        "Trust placed where objections actually appear.",
        "Speed and mobile UX treated as conversion infrastructure.",
      ],
    },
    {
      type: "p",
      text: "I borrow ruthlessly from conversion and usability discipline—[Nielsen Norman Group](https://www.nngroup.com/) for interaction clarity, [Baymard](https://baymard.com/blog) for form and checkout-like friction, [web.dev](https://web.dev/) for performance. The aesthetic can stay yours. The comprehension must become public.",
    },
    {
      type: "h3",
      text: "What I change on the page (in order)",
    },
    {
      type: "ol",
      items: [
        "Headline and support line matched to the week-two offer.",
        "One primary CTA; secondary action demoted visually.",
        "Proof moved beside the claims that create risk.",
        "Feature sections rewritten as jobs.",
        "Form fields reduced to what the next conversation needs.",
        "Mobile pass: CTA, type size, tap targets, speed.",
      ],
    },
    {
      type: "p",
      text: "If you want a pattern library of what goes wrong, I documented it in [I audited 50 startup websites](/blog/audited-50-startup-websites-10-mistakes). If you want a shorter conversion lens, see [three changes that can double conversion](/blog/website-audit-three-changes-double-conversion).",
    },
    {
      type: "takeaway",
      text: "Week three is not “make it prettier.” It is make the right next step obvious for the right customer.",
    },
    {
      type: "h2",
      text: "Days 22–30: install a learning system",
    },
    {
      type: "p",
      text: "The final week is about making progress compound. Without a learning loop, every campaign resets to zero. Useful, if you enjoy starting from scratch every Monday.",
    },
    {
      type: "ol",
      items: [
        "Pick three weekly metrics tied to revenue reality.",
        "Run one offer test and one experience test—not ten.",
        "Document what customers say in their language.",
        "Keep a simple cadence: learn → decide → ship → measure.",
      ],
    },
    {
      type: "h3",
      text: "The three-metric dashboard",
    },
    {
      type: "table",
      headers: ["Metric", "Why it matters", "Trap to avoid"],
      rows: [
        [
          "Activation rate (target segment)",
          "Shows if first value is real",
          "Using signup as activation",
        ],
        [
          "Qualified conversations or trials",
          "Shows if the story converts",
          "Counting every form fill as demand",
        ],
        [
          "Early retention / repeat use",
          "Shows if value sticks",
          "Vanity MAU without job completion",
        ],
      ],
    },
    {
      type: "quote",
      text: "In 30 days you cannot invent luck. You can remove confusion—and confusion is usually the silent growth tax.",
    },
    {
      type: "h2",
      text: "What I would leave alone",
    },
    {
      type: "p",
      text: "I would not burn brand equity for novelty. I would not chase every channel. And I would not confuse motion with strategy. The goal is a company that can explain itself, prove itself, and invite the right next step.",
    },
    {
      type: "ul",
      items: [
        "No full rebrand unless the current identity actively contradicts the offer.",
        "No roadmap explosion “while we’re at it.”",
        "No multi-channel blitz before activation is defined.",
        "No hiring a growth person to compensate for an unclear product story.",
      ],
    },
    {
      type: "p",
      text: "This format can become a series—industry by industry—but the spine stays the same: clarity, experience, proof. For the philosophy underneath, see [why I care more about systems than campaigns](/blog/why-i-care-more-about-systems-than-campaigns) and [if I joined your startup tomorrow](/blog/if-i-joined-your-startup-tomorrow-what-id-do-first).",
    },
    {
      type: "h2",
      text: "A day-by-day skeleton you can steal",
    },
    {
      type: "h3",
      text: "Week 1",
    },
    {
      type: "ul",
      items: [
        "Day 1–2: analytics + funnel map.",
        "Day 3–5: customer and lost-lead interviews.",
        "Day 6: stranger clarity tests on current homepage.",
        "Day 7: write the belief-break diagnosis; align founders.",
      ],
    },
    {
      type: "h3",
      text: "Week 2",
    },
    {
      type: "ul",
      items: [
        "Day 8–9: ICP wedge and anti-ICP.",
        "Day 10–11: offer canvas + sales narrative alignment.",
        "Day 12–13: proof inventory and gaps.",
        "Day 14: freeze the offer language for the sprint.",
      ],
    },
    {
      type: "h3",
      text: "Week 3",
    },
    {
      type: "ul",
      items: [
        "Day 15–17: homepage / primary landing rebuild.",
        "Day 18–19: pricing or plan page + proof placement.",
        "Day 20: mobile and performance pass.",
        "Day 21: first-session handoff alignment with product.",
      ],
    },
    {
      type: "h3",
      text: "Week 4",
    },
    {
      type: "ul",
      items: [
        "Day 22–23: instrumentation and metric definitions.",
        "Day 24–26: one offer test + one experience test live.",
        "Day 27–28: interview follow-ups; capture language.",
        "Day 29–30: decision memo—what continues, what stops, what scales next.",
      ],
    },
    {
      type: "callout",
      title: "Exercise: the day-30 memo",
      text: "Write one page: what we believed on day 1, what evidence changed, what we shipped, what we will not do in the next 60 days. If you cannot write the “will not do” list, the sprint failed—because focus is the deliverable.",
    },
    {
      type: "h2",
      text: "Worked example: “northline” (fictional B2B)",
    },
    {
      type: "p",
      text: "Northline sells ops visibility for multi-location retailers. Growth flat. Ads expensive. In 30 days we find belief breaks at understanding and activation: the site says “AI retail platform,” while buyers care about reducing stockouts at store level. Week two locks a wedge: regional ops managers at 15–80 store retailers. Week three rebuilds the homepage around stockout reduction with proof from three pilots. Week four measures activation as “first stockout alert acted on,” not “dashboard viewed.” Ads resume at learning budget only for that wedge. Same product. Different honesty.",
    },
    {
      type: "h2",
      text: "Roles, rituals, and artefacts for the sprint",
    },
    {
      type: "p",
      text: "A 30-day plan fails when it stays inspirational. It works when people know what to produce by which day. Here is the operating kit I insist on—even for tiny teams.",
    },
    {
      type: "h3",
      text: "Roles (can be the same two people wearing hats)",
    },
    {
      type: "ul",
      items: [
        "Decision owner: one founder who can lock ICP and offer language.",
        "Experience owner: someone who can ship website and first-session changes.",
        "Learning owner: someone who books interviews, synthesises notes, and updates the metric definitions.",
      ],
    },
    {
      type: "h3",
      text: "Weekly ritual",
    },
    {
      type: "ol",
      items: [
        "90 minutes: review the three metrics and one qualitative insight.",
        "Decide one thing to ship and one thing to stop.",
        "Assign owners and a done definition before the meeting ends.",
        "No brainstorming theatre without a decision attached.",
      ],
    },
    {
      type: "h3",
      text: "Artefacts that must exist by day 30",
    },
    {
      type: "ul",
      items: [
        "One-page offer canvas (customer, job, outcome, alternative, proof, next step).",
        "Belief-break diagnosis memo from week one.",
        "Updated primary conversion page live in production.",
        "Activation definition written where the team can see it.",
        "Day-30 decision memo with a “will not do” list.",
      ],
    },
    {
      type: "p",
      text: "If those artefacts do not exist, you had a busy month, not a sprint. Busy months are how startups rehearse looking productive while the story stays foggy. For the clarity-first philosophy behind this kit, see [why I start every project without opening Figma](/blog/why-i-start-every-project-without-opening-figma) and [from strategy to launch](/blog/from-strategy-to-launch-how-i-approach-new-product).",
    },
    {
      type: "takeaway",
      text: "Rituals protect focus after motivation fades. Artefacts make the learning portable when a new hire or advisor joins mid-chaos.",
    },
    {
      type: "h2",
      text: "Common ways teams dilute the 30 days",
    },
    {
      type: "p",
      text: "Even with a good plan, founders dilute the month. They reopen the ICP debate after every sales call. They treat the homepage rewrite as a design contest. They run five tests instead of one. They invite too many stakeholders into week-one interviews and turn learning into politics.",
    },
    {
      type: "p",
      text: "Protect the sprint like you would protect a product launch: limited scope, clear owners, visible artefacts, and a public “will not do” list. If someone wants to add a rebrand, a new channel, and three features mid-sprint, the answer is not “maybe later.” The answer is “not in these 30 days.”",
    },
    {
      type: "h2",
      text: "Outside reading worth the time",
    },
    {
      type: "p",
      text: "[Y Combinator’s Library](https://www.ycombinator.com/library) for early product discipline, [First Round Review](https://review.firstround.com/) for operating cadence, and [Harvard Business Review](https://hbr.org/) when you need shared strategic language with a board or sceptical co-founder. Use them as thinking tools—not as permission to delay your own interviews.",
    },
    {
      type: "faq",
      items: [
        {
          question: "What if we are pre-product?",
          answer:
            "Compress weeks three’s “conversion surface” into an offer test page and a concierge experience. The spine stays: diagnosis, sharp promise, proof, learning loop.",
        },
        {
          question: "Can this work for a consumer app?",
          answer:
            "Yes—with activation and retention definitions tuned to consumer behaviour. The mistake is copying B2B demo CTAs onto a consumer habit product.",
        },
        {
          question: "What team do I need for 30 days?",
          answer:
            "Founder attention, access to customers, someone who can ship website changes, and someone who can adjust the first-run path. Large teams often slow this down.",
        },
        {
          question: "What happens after day 30?",
          answer:
            "You run the learning cadence. You expand the wedge only when metrics earn it. You do not celebrate the sprint by immediately undoing the focus.",
        },
      ],
    },
    {
      type: "h2",
      text: "The point of the month",
    },
    {
      type: "p",
      text: "Thirty days is enough to stop paying the confusion tax. It is not enough to replace strategy forever. Treat the sprint as a reset of the system that makes growth possible—then protect the focus you bought.",
    },
    {
      type: "p",
      text: "If you want help running this on your company rather than adapting the template alone, that is exactly the kind of work I do.",
    },
    {
      type: "cta",
      lead: "Want a 30-day plan for your startup—not a generic playbook?",
      button: "Start a 30-day sprint conversation",
      href: "/contact",
    },
  ],
};

export default post;
