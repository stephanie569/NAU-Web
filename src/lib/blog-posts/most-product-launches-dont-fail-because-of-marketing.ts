import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "most-product-launches-dont-fail-because-of-marketing",
  title: "Your launch didn't fail because of marketing",
  excerpt: "When the launch underperforms, the channel is rarely the first place to look.",
  date: "August 31, 2026",
  category: "Research & Positioning",
  image: "/images/blog/blog-57-launch-fail.png",
  metaDescription:
    "Most product launches fail from unclear problems, weak proof, and premature scale-not marketing. A diagnostic for founders before blaming the channel.",
  content: [
    {
      type: "p",
      text: "The post-mortem is usually swift and theatrical. The launch underperformed. Therefore marketing failed. Someone suggests a new agency, a new creative angle, a bigger budget, a hotter channel. The product stays untouched, like a sacred object that simply needed better lighting.",
    },
    {
      type: "p",
      text: "I have sat in those rooms. Sometimes the creative really was weak. More often the channel was asked to paper over a product story that was not ready for strangers. When the launch underperforms, the channel is rarely the first place to look-it is merely the loudest.",
    },
    {
      type: "p",
      text: "This piece is a diagnostic. It pairs with [every startup looks like a marketing problem until you dig deeper](/essays/every-startup-looks-like-marketing-problem-until-deeper) and with how I sequence work in [from strategy to launch: how I approach a new product](/essays/from-strategy-to-launch-how-i-approach-new-product). If your “marketing problem” is actually an unread problem statement, start with [the best products solve a problem before they sell a solution](/essays/best-products-solve-problem-before-sell-solution).",
    },
    {
      type: "h2",
      text: "What a launch actually tests",
    },
    {
      type: "p",
      text: "A launch is not a marketing event. It is a stress test of several systems at once: whether the problem is sharp, whether the offer is legible, whether onboarding delivers a first outcome, whether support can absorb confusion, whether the team can say no to scope that dilutes the promise. Ads and emails are only the megaphone.",
    },
    {
      type: "ul",
      items: [
        "If the promise is fuzzy, more reach distributes confusion faster.",
        "If activation is slow, paid traffic becomes a refund machine.",
        "If the ICP is too wide, creative cannot invent focus.",
        "If proof is thin, trust collapses at the second scroll.",
      ],
    },
    {
      type: "p",
      text: "Marketing can amplify a clear product. It cannot invent one on a deadline. That is not a moral judgement. It is operational physics.",
    },
    {
      type: "takeaway",
      text: "A weak launch is often a product-readiness problem wearing a media budget.",
    },
    {
      type: "h2",
      text: "The five failure modes I see most",
    },
    {
      type: "h3",
      text: "1. Problem not sharp enough for cold traffic",
    },
    {
      type: "p",
      text: "Warm intros forgive vague positioning. Cold traffic does not. If a stranger cannot recognise their situation in the first screen, they bounce-and the spreadsheet blames CPC. Fix the sentence before you fix the bid strategy.",
    },
    {
      type: "h3",
      text: "2. Offer without a first win",
    },
    {
      type: "p",
      text: "Launch day promises a transformation. Day three still asks for a CSV upload, a calendar sync, and a training webinar. The gap between promise and first outcome is where launches go to die quietly. Ship the first win, then the announcement.",
    },
    {
      type: "h3",
      text: "3. Audience too broad to believe",
    },
    {
      type: "p",
      text: "“For teams that want to grow” is not a segment. It is a shrug. Narrow until a real person feels called out. You can expand later. You cannot expand belief you never created.",
    },
    {
      type: "h3",
      text: "4. Proof postponed until “after we have users”",
    },
    {
      type: "p",
      text: "Circular logic. Early launches need borrowed proof: founder story, pilot results, teardown, waitlist interviews, a public build log. Waiting for logos before you earn trust is how you wait forever.",
    },
    {
      type: "h3",
      text: "5. Launch as a date instead of a system",
    },
    {
      type: "p",
      text: "One big bang, then silence. No follow-up narrative, no learning loop, no iteration cadence. Markets do not owe you a debutante ball. They owe you attention proportional to usefulness over time.",
    },
    {
      type: "callout",
      title: "Try this",
      text: "Before blaming the channel, write one page: promise, first outcome within seven days, ICP in one sentence, proof available today, and the single metric that would make you pause spend. If any line is blank, pause the launch-not the agency.",
    },
    {
      type: "h2",
      text: "Marketing vs product: where to look first",
    },
    {
      type: "table",
      headers: ["Symptom", "Often looks like", "Look here first"],
      rows: [
        [
          "High CTR, low signup",
          "Bad landing creative",
          "Promise mismatch or confusing offer",
        ],
        [
          "High signup, low activation",
          "Onboarding UX polish",
          "Time-to-first-outcome too long",
        ],
        [
          "Activation, no retention",
          "Email nurture gap",
          "Problem not recurring or value not felt",
        ],
        [
          "Warm intros convert, ads don't",
          "Creative quality",
          "Positioning only works with context",
        ],
        [
          "Lots of demos, few closes",
          "Sales enablement",
          "ICP too wide or proof too thin",
        ],
      ],
    },
    {
      type: "quote",
      text: "If paid traffic is the only place your product makes sense, you do not have a launch problem. You have a clarity problem with a credit card.",
    },
    {
      type: "image",
      src: "/images/blog/blog-mid-04.png",
      alt: "Launch checklist focusing on product readiness before media spend",
    },
    {
      type: "h2",
      text: "A readiness framework before you announce",
    },
    {
      type: "ol",
      items: [
        "Can a cold visitor state the problem after ten seconds?",
        "Can a new user reach a meaningful outcome in one session or one week?",
        "Do you have proof a sceptic can inspect without a sales call?",
        "Is support ready for the top five confusions you already know?",
        "Do you know what you will learn in the first fourteen days-and what would kill the spend?",
      ],
    },
    {
      type: "p",
      text: "If you answer no to two or more, marketing is not your bottleneck. Product readiness is. This is the same discipline as [before you build another feature, ask these five questions](/essays/before-build-another-feature-ask-five-questions)-applied to the launch surface, not the backlog.",
    },
    {
      type: "h2",
      text: "A fictional contrast: two SaaS launches",
    },
    {
      type: "p",
      text: "Team A books a Product Hunt day, runs LinkedIn ads, and sends a founder video. Onboarding requires three integrations before anything useful appears. Comments are polite. Retention is not. The post-mortem blames “distribution.”",
    },
    {
      type: "p",
      text: "Team B delays the public date by three weeks. They cut two features, rewrite the hero around a specific workflow pain, add a guided path to a first report in twelve minutes, and collect five pilot quotes. The launch is quieter. The week-two retention chart is not. Same marketing skills. Different product readiness.",
    },
    {
      type: "takeaway",
      text: "Delaying a launch to earn a first win is not cowardice. It is cost control.",
    },
    {
      type: "h2",
      text: "Exercise: the reverse post-mortem",
    },
    {
      type: "callout",
      title: "Exercise",
      text: "Write the failure post-mortem before you launch. Assume results are mediocre. List five non-marketing causes that would explain it. For each, define a pre-launch fix or a kill switch. If you cannot imagine non-marketing causes, you are not diagnosing-you are defending the roadmap.",
    },
    {
      type: "h2",
      text: "When marketing really is the problem",
    },
    {
      type: "p",
      text: "Sometimes it is. Creative that lies. Targeting that ignores ICP. A site that loads like a brick. A brand voice that apologises for existing. Those deserve scrutiny. But audit them after you have confirmed problem clarity, first-win path, and proof. Otherwise you will optimise the megaphone while the song is unfinished.",
    },
    {
      type: "p",
      text: "External reading that stays useful: [Lenny’s Newsletter](https://www.lennysnewsletter.com/) on launch sequencing, [First Round Review](https://review.firstround.com/) on go-to-market that respects product truth, and [Harvard Business Review](https://hbr.org/) on why organisations misattribute failure to the loudest department. For founders who keep reaching for more spend when they need more focus, see [what founders actually need isn’t more marketing](/essays/founders-actually-need-isnt-more-marketing).",
    },
    {
      type: "h2",
      text: "A fourteen-day launch learning loop",
    },
    {
      type: "p",
      text: "Assume you cleared readiness and still want a public moment. Treat the first fourteen days as instrumentation, not a coronation. Decide in advance which drop-offs send you back to product work versus creative work. Otherwise every dip becomes a branding debate.",
    },
    {
      type: "ol",
      items: [
        "Day 0: freeze the promise sentence and the first-win path-no mid-launch feature gifts.",
        "Days 1-3: watch comprehension (bounce, scroll, demo requests) more than vanity reach.",
        "Days 4-7: watch activation quality-did they reach the win you named?",
        "Days 8-14: watch qualitative language in replies, sales calls, and churn reasons.",
        "Day 14: choose one of three moves-amplify, rewrite the promise, or pause spend and fix the product path.",
      ],
    },
    {
      type: "p",
      text: "This loop also stops the common panic hire: replacing a marketer because week one felt quiet. Quiet with strong activation is a distribution problem. Loud with weak activation is a product problem wearing impressions. Confusing the two is how budgets and reputations both thin out.",
    },
    {
      type: "h2",
      text: "What to tell the board without sounding defensive",
    },
    {
      type: "p",
      text: "Boards like channel narratives because channels have vendors and invoices. Product readiness is harder to dramatise. Bring the diagnostic table with your numbers. Show warm versus cold conversion. Show time-to-first-outcome. Show the proof you do and do not have. Then ask for time or budget against the real bottleneck-not a generic “go-to-market push.”",
    },
    {
      type: "p",
      text: "If the honest answer is that early customers are still teaching you and the ICP is not stable enough for paid scale, say that. Scaling a private curriculum is how launches fail politely. Keep learning until patterns repeat-then market. The discipline is the same one behind [how I decide whether a product is worth building](/essays/how-i-decide-whether-product-worth-building).",
    },
    {
      type: "h2",
      text: "How this shows up in my work at nau",
    },
    {
      type: "p",
      text: "I often get hired “for the launch site” and end up rebuilding the offer narrative, the first-run experience, and the proof stack before a single campaign brief. That is not scope creep. That is preventing an expensive misunderstanding. If your product is not growing and everyone is staring at the funnel, start here: [if your product isn’t growing, start here](/essays/if-product-isnt-growing-start-here).",
    },
    {
      type: "faq",
      items: [
        {
          question: "Should we ever launch without perfect readiness?",
          answer:
            "Yes-softly, to a narrow list, with learning goals. Public paid amplification is what demands readiness. Private learning does not.",
        },
        {
          question: "How do I convince a co-founder who only wants ads?",
          answer:
            "Show the diagnostic table with your actual funnel numbers. Move the argument from opinion to where drop-off already lives.",
        },
        {
          question: "What if competitors launched louder and won?",
          answer:
            "Volume can win a news cycle. Retention wins a business. Study what they clarified, not only what they spent.",
        },
        {
          question: "Is Product Hunt still worth it?",
          answer:
            "As a distribution spike for a ready product, sometimes. As a substitute for problem clarity and first-win design, almost never.",
        },
      ],
    },
    {
      type: "h2",
      text: "Look past the megaphone",
    },
    {
      type: "p",
      text: "Most product launches do not fail because of marketing. They fail because marketing was asked to compensate for an unclear problem, a slow first win, thin proof, or a date mistaken for a system. Fix the product story until cold traffic can understand it. Then-and only then-turn up the volume.",
    },
    {
      type: "cta",
      lead: "Want a launch readiness review that looks at product truth before media plans?",
      button: "Book a launch diagnostic",
      href: "/contact",
    },
  ],
};

export default post;
