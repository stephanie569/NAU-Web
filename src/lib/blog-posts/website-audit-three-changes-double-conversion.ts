import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "website-audit-three-changes-double-conversion",
  title:
    "3 website changes that could double your conversions",
  excerpt:
    "Most conversion lifts do not need a redesign. Sharper first-screen messaging, proof next to claims, and a shorter path to action often unlock the next jump-without touching the brand kit.",
  date: "July 3, 2026",
  category: "Go-to-Market",
  image: "/images/blog/blog-22-double-conversion.png",
  metaDescription:
    "A practical website audit: three high-leverage changes-message, proof, and path-that can meaningfully lift conversion without a full redesign.",
  content: [
    {
      type: "p",
      text: "“Double your conversion rate” is a strong claim. It is also sometimes realistic-when the baseline is unclear messaging, proof parked in a footer nobody reaches, and a CTA path that feels like a negotiation with your own website. In most early-stage audits I run, the biggest gains come from three changes, not a new visual system. That is good news. Redesigns are expensive. Clarity is cheaper-and usually overdue.",
    },
    {
      type: "p",
      text: "This article is the audit lens I use when a founder says traffic looks fine but demos, trials, or inbound are soft. I will teach the framework first, then show how to apply each lever with examples, exercises, and a prioritisation table. If your site already converts well, treat this as a stress test. If it does not, start here before you brief another designer.",
    },
    {
      type: "callout",
      title: "What “double” actually means",
      text: "Doubling is not a promise. It is a reminder that small baselines move fast. Going from 1% to 2% is still doubling-and for a site with decent traffic, that can be the difference between a quiet pipeline and a usable one. The point is leverage, not theatre.",
    },
    {
      type: "h2",
      text: "Why conversion stalls even when the product is good",
    },
    {
      type: "p",
      text: "Conversion is a decision environment. Visitors arrive with a job, a risk tolerance, and limited patience. Your page either reduces uncertainty in the right order-or it asks for commitment while still sounding like a category brochure. [Nielsen Norman Group](https://www.nngroup.com/) has written extensively about how users scan for relevance before they invest attention. That scanning behaviour is why first-screen clarity beats almost every other “optimisation” habit.",
    },
    {
      type: "p",
      text: "I see the same pattern across SaaS, consumer apps, and service-led startups: the product can explain itself in a sales call, but the website still speaks in features and aspirations. Sales closes with outcomes and proof. The homepage closes with vibes. Then the team concludes they need more ads.",
    },
    {
      type: "p",
      text: "If that sounds familiar, you may also recognise the clarity problem described in [why your product does not have a marketing problem](/essays/product-doesnt-have-marketing-problem-clarity-problem). Marketing amplifies what the page already says. If the page is vague, amplification just scales confusion.",
    },
    {
      type: "takeaway",
      text: "Before you change colours, fonts, or “the vibe,” ask whether a cold visitor can name who the page is for, what changes for them, and what to do next-in under ten seconds.",
    },
    {
      type: "h2",
      text: "The three-lever audit framework",
    },
    {
      type: "p",
      text: "I audit conversion as three sequential levers: **message**, **proof**, and **path**. Message earns attention. Proof earns belief. Path removes friction from action. Fix them in that order. Redesigning the path while the headline still could belong to any competitor is how teams stay busy without moving the number.",
    },
    {
      type: "table",
      headers: ["Lever", "Question it answers", "Typical symptom when broken", "First fix"],
      rows: [
        [
          "Message",
          "Is this for me, and what do I get?",
          "Generic hero, feature salad, high bounce",
          "Rewrite first viewport for one audience and one outcome",
        ],
        [
          "Proof",
          "Why should I believe you?",
          "Claims without evidence near the CTA",
          "Move relevant proof next to the claim and the ask",
        ],
        [
          "Path",
          "How hard is the next step?",
          "Long forms, vague CTAs, mobile friction",
          "Shorten fields, clarify language, speed interaction",
        ],
      ],
    },
    {
      type: "p",
      text: "Stripe’s marketing sites are useful here not because every startup should copy the aesthetic, but because the argument is ordered: who it is for, what becomes easier, then evidence, then action. Linear and Notion do a similar job with different tones-product UI as proof, not decoration. The principle transfers even if your brand is warmer, quieter, or more technical.",
    },
    {
      type: "h2",
      text: "Change 1: rewrite the first screen for one job",
    },
    {
      type: "p",
      text: "One audience. One outcome. One action. That is the whole rule. The first viewport is not a brochure of everything you might eventually sell. It is a relevance filter. If everything is important, nothing is-and the visitor will treat your page accordingly.",
    },
    {
      type: "h3",
      text: "What “one job” looks like in practice",
    },
    {
      type: "p",
      text: "Imagine a fictional B2B tool, Northbeam Ops, that helps ops leads cut weekly reporting time. A weak hero says: “AI-powered operations platform for modern teams.” A stronger hero says: “Ops leads: turn weekly reporting into a 20-minute review.” Same product. Different decision quality. The second version lets the right person lean in and the wrong person leave quickly-which is a feature, not a failure.",
    },
    {
      type: "p",
      text: "Apple’s product pages are extreme examples of single-job framing. They do not open with a catalogue of every capability. They open with a felt outcome, then reveal detail as commitment rises. Startups often reverse that sequence: catalogue first, meaning later. Then they wonder why [websites fail in the first ten seconds](/essays/why-startup-websites-fail-first-10-seconds).",
    },
    {
      type: "h3",
      text: "What to remove from the first viewport",
    },
    {
      type: "ul",
      items: [
        "Secondary CTAs that compete with the primary ask (book demo / start trial / watch video / read blog).",
        "Feature chips that name technology instead of outcomes.",
        "Navigation labels that mirror your org chart rather than buyer intent.",
        "Animated noise that delays comprehension on mobile.",
        "“Trusted by” logos with no context-save that for the proof lever, placed with intent.",
      ],
    },
    {
      type: "callout",
      title: "Try this (20 minutes)",
      text: "Open your homepage on a phone. Cover the logo. Read only the headline and subhead aloud. Ask a colleague who does not work on the product: “Who is this for, and what do they get?” If they hedge, rewrite until the answer is boringly specific.",
    },
    {
      type: "p",
      text: "I once watched a founder rewrite their hero six times in an afternoon. Version one sounded like a pitch deck. Version six named a role, a weekly pain, and a measurable relief. Demo requests did not magically explode overnight-but sales said inbound conversations started warmer, which is usually the first honest signal that messaging improved.",
    },
    {
      type: "takeaway",
      text: "The first screen has one job: make the right visitor feel recognised and give them one clear next step. Everything else can wait below the fold.",
    },
    {
      type: "h2",
      text: "Change 2: move proof next to the claim",
    },
    {
      type: "p",
      text: "Testimonials at the bottom help late readers. Proof near the CTA helps deciders. Belief is local. Put evidence where the doubt lives.",
    },
    {
      type: "p",
      text: "Baymard’s research on ecommerce checkout and product pages repeatedly shows that trust cues matter most at moments of hesitation-not in a decorative strip halfway down the page. The same logic applies to SaaS demos and trial signups. If you claim “set up in minutes,” the proof should be a setup time, a short clip, or a customer quote about onboarding-not a vague five-star widget three scrolls later. See [Baymard’s blog](https://baymard.com/blog) for the broader pattern of evidence near decision points.",
    },
    {
      type: "h3",
      text: "Types of proof that actually reduce risk",
    },
    {
      type: "ol",
      items: [
        "Outcome proof: “Cut reporting time from Friday afternoon to a 20-minute Monday review.”",
        "Specificity proof: named role, company size, industry, constraint.",
        "Process proof: screenshots, short Loom, or numbered steps that show the path is real.",
        "Social proof with context: logo plus one-line result, not logo wallpaper.",
        "Risk-reversal proof: clear pricing logic, cancellation language, security notes when relevant.",
      ],
    },
    {
      type: "p",
      text: "Airbnb leans on visual proof of the experience itself. Figma leans on product UI as credibility. A hospitality startup I advised had beautiful photography and almost no operational proof-cancellation policies, response times, host standards. Guests did not need more mood. They needed reassurance that the lovely photo survived contact with reality.",
    },
    {
      type: "h3",
      text: "A simple proof placement map",
    },
    {
      type: "ul",
      items: [
        "Next to the hero claim: one concrete outcome or short customer line.",
        "Next to the primary CTA: the objection that usually kills the click (time, cost, complexity).",
        "Near pricing: value language and who it is for, not a feature dump.",
        "Near “how it works”: process proof that makes the steps feel finite.",
      ],
    },
    {
      type: "callout",
      title: "Exercise: the doubt sticky notes",
      text: "List the three doubts a serious buyer has before booking a call. Place one proof element next to each doubt on the page-not in a separate “Testimonials” chapter that reads like an afterthought. If you lack proof, borrow specificity from sales calls until you have customer language you can publish ethically.",
    },
    {
      type: "takeaway",
      text: "Proof is not a section. It is a response to doubt. Relocate it until every major claim has an answer within eyeshot.",
    },
    {
      type: "h2",
      text: "Change 3: shorten the path to conversation",
    },
    {
      type: "p",
      text: "Fewer form fields. Clearer next-step language. Faster mobile interaction. Friction is a silent tax-and unlike most taxes, nobody notices until the numbers look sad.",
    },
    {
      type: "p",
      text: "Google’s guidance on [Core Web Vitals](https://web.dev/articles/vitals) is useful even when you are not chasing SEO vanity: slow, layout-shifting pages punish comprehension. A visitor who cannot tap the CTA comfortably on mobile will not admire your desktop composition. Accessibility matters here too-[WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) is not only compliance theatre; it is how you stop excluding people who would have converted if the control was usable.",
    },
    {
      type: "image",
      src: "/images/blog/blog-mid-04.png",
      alt: "Website audit workspace focused on conversion improvements",
    },
    {
      type: "h3",
      text: "Path problems I see constantly",
    },
    {
      type: "ul",
      items: [
        "CTA copy that says “Learn more” when the real ask is “Book a 20-minute walkthrough.”",
        "Forms that ask for budget, company size, and phone number before offering any value.",
        "Calendly buried three clicks behind a vague “Contact” page.",
        "Primary button styles that look identical to secondary links.",
        "Mobile sticky bars that cover content or fight the browser chrome.",
      ],
    },
    {
      type: "p",
      text: "Contrast that with how many strong product companies treat signup: short, specific, reversible. Notion’s empty-state onboarding and Linear’s sparse first-run experience both respect that commitment should rise with understanding. Your marketing site should do the same. Ask for the smallest useful next step, not the biggest CRM field set your sales team dreamed up after reading a growth thread.",
    },
    {
      type: "h3",
      text: "A practical path checklist",
    },
    {
      type: "ol",
      items: [
        "Name the action in human language: what happens after the click?",
        "Cut every form field that is not required to route or qualify the next conversation.",
        "Put the primary CTA in a stable, obvious place on mobile and desktop.",
        "Measure time-to-interaction on a mid-range phone, not only on your laptop.",
        "Remove competing outbound links from the conversion zone (footer blogs can wait).",
      ],
    },
    {
      type: "takeaway",
      text: "If the message and proof are clear, path friction is often the last quiet killer. Make the next step feel small, specific, and safe.",
    },
    {
      type: "h2",
      text: "How the three changes compound",
    },
    {
      type: "p",
      text: "Message without proof creates interest that evaporates. Proof without a path creates belief with nowhere to go. Path without message creates efficient clicks into confusion. Together, they form a coherent decision sequence-the same sequence good sales calls already follow.",
    },
    {
      type: "p",
      text: "This is also why [beautiful websites do not always convert](/essays/why-beautiful-websites-dont-always-convert). Polish can support comprehension, but it cannot replace an argument. If you are choosing between a visual refresh and rewriting the first screen plus proof placement, rewrite first. You can always dress the clearer page later.",
    },
    {
      type: "h3",
      text: "A fictional before/after",
    },
    {
      type: "p",
      text: "Before: “The all-in-one platform for ambitious teams.” Feature grid. Logos. “Get started” that leads to a seven-field form. After: “Finance leads at 20-80 person companies: close month-end without the spreadsheet scramble.” One customer line about closing three days faster. CTA: “See a 15-minute month-end walkthrough.” Same product. Different conversion environment.",
    },
    {
      type: "p",
      text: "I have watched teams ship that kind of change in a week-no rebrand, no new illustration system, no six-week “homepage initiative.” The hard part is not Figma. The hard part is choosing who the page is for and accepting that other segments get secondary paths.",
    },
    {
      type: "h2",
      text: "Prioritisation: what to ship this week",
    },
    {
      type: "table",
      headers: ["If your analytics show…", "Start with…", "Why"],
      rows: [
        [
          "High bounce from paid or cold traffic",
          "Message (first viewport)",
          "People do not recognise relevance fast enough",
        ],
        [
          "Solid time on page, weak CTA clicks",
          "Proof near claims",
          "Interest exists; belief is incomplete",
        ],
        [
          "CTA clicks with abandoned forms",
          "Path (fields, language, mobile)",
          "Intent dies in the ask",
        ],
        [
          "Strong desktop, weak mobile",
          "Path + message density",
          "Comprehension and tap targets fail first",
        ],
      ],
    },
    {
      type: "p",
      text: "For a broader pattern library of recurring mistakes, see [the ten mistakes from auditing fifty startup websites](/essays/audited-50-startup-websites-10-mistakes). Use that list after you have applied the three levers-otherwise you will try to fix twelve things and ship none.",
    },
    {
      type: "h2",
      text: "What not to do while you fix these",
    },
    {
      type: "ul",
      items: [
        "Do not launch a full redesign to avoid rewriting copy. Copy is the redesign.",
        "Do not A/B test button colours before the headline names an outcome.",
        "Do not add a chatbot to compensate for a muddy CTA. That is friction wearing a helpful hat.",
        "Do not inflate social proof with vague quotes. Specificity beats volume.",
        "Do not measure success only by bounce rate. Track qualified conversations and activation.",
      ],
    },
    {
      type: "quote",
      text: "If the sales call can explain the product in two minutes, the homepage should be able to start that explanation in two sentences.",
    },
    {
      type: "h2",
      text: "A one-hour self-audit you can run today",
    },
    {
      type: "ol",
      items: [
        "Minutes 0-10: Screenshot the first viewport on mobile and desktop. Write the audience, outcome, and action you see-not the ones you intended.",
        "Minutes 10-25: Highlight every claim on the page. Mark which have proof within one scroll of the claim.",
        "Minutes 25-40: Complete your own form on a phone. Note hesitation, keyboard pain, and unclear next steps.",
        "Minutes 40-55: Draft a rewritten hero and one relocated proof block. Keep visual design constant.",
        "Minutes 55-60: Choose one path cut (field removed, CTA rewritten, or calendar link surfaced).",
      ],
    },
    {
      type: "p",
      text: "If you want a sharper positioning pass before you touch the page, pair this with [how I would reposition your startup in 60 minutes](/essays/how-id-reposition-your-startup-in-60-minutes). Positioning decides what the first screen is allowed to say. The audit decides whether the page actually says it.",
    },
    {
      type: "h2",
      text: "FAQ",
    },
    {
      type: "faq",
      items: [
        {
          question: "Can three changes really double conversion?",
          answer:
            "Sometimes, especially from a weak baseline. More importantly, these three levers are where most early-stage sites leave convertible intent on the table. Treat “double” as a reminder of leverage, not a guarantee.",
        },
        {
          question: "Should I redesign while I rewrite messaging?",
          answer:
            "Usually no. Change copy and structure first so you learn what converts. Then invest in visual craft that supports the clearer argument. Redesigning unclear messaging just makes confusion prettier.",
        },
        {
          question: "What if I serve multiple audiences?",
          answer:
            "Pick a primary audience for the homepage. Give secondary audiences clear entry points (segment pages, nav paths). Homepages that try to please everyone rarely persuade anyone.",
        },
        {
          question: "How do I know which lever to fix first?",
          answer:
            "Use behaviour: bounce and confusion point to message; engagement without clicks points to proof; clicks without completions point to path. When in doubt, fix the first screen.",
        },
        {
          question: "Where can I learn more about usability research habits?",
          answer:
            "Start with Nielsen Norman Group’s articles on scanning and persuasion, Baymard for decision-point UX patterns, and web.dev for performance basics that affect comprehension.",
        },
      ],
    },
    {
      type: "h2",
      text: "Closing",
    },
    {
      type: "p",
      text: "Conversion work is often sold as mystery. It is mostly sequencing: say the right thing, prove it where doubt appears, then make the next step feel small. Do that well and you may not need a new brand system to unlock the next jump. Do it poorly and no amount of motion design will save you-though it will look lovely in the deck.",
    },
    {
      type: "p",
      text: "If you want a companion teardown mindset for studying strong consumer sites, read the [Airbnb homepage teardown](/essays/product-teardown-airbnb-homepage). Steal principles, not pixels. Then apply the three levers to your own URL with ruthless honesty.",
    },
    {
      type: "cta",
      lead: "Want these three changes applied to your site with a clear before/after plan?",
      button: "Book a conversion audit",
      href: "/contact",
    },
  ],
};

export default post;
