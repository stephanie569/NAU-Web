import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "landing-page-review-helping-hurting-conversions",
  title: "Your landing page: what's helping vs quietly killing conversions",
  excerpt:
    "A balanced landing page review framework: name what builds belief so you do not destroy strengths, then remove the friction that quietly kills conversion.",
  date: "June 27, 2026",
  category: "Go-to-Market",
  image: "/images/blog/blog-27-landing-review.png",
  metaDescription:
    "Landing page review framework for startups: what helps conversions, what hurts them, how to prioritise fixes, plus exercises and an FAQ.",
  content: [
    {
      type: "p",
      text: "A good landing page review is balanced. It names what is working-so you do not destroy strengths-and what is hurting conversion so you can intervene with precision. Blanket redesigns are how good headlines die in the name of freshness. I have watched teams “refresh” a converting page into a prettier bounce rate. Taste is not a strategy; diagnosis is.",
    },
    {
      type: "p",
      text: "This framework is what I use when reviewing paid landing pages, homepage heroes treated as landers, and product marketing pages that need to earn a demo or trial. You will leave with a helping/hurting inventory, a prioritisation method, exercises, and a review checklist you can run in under an hour.",
    },
    {
      type: "callout",
      title: "Review mindset",
      text: "Protect what builds belief. Cut what creates doubt or delay. Change fashion last. If you cannot explain why an element exists in the decision sequence, it is a candidate for removal-not for a nicer border radius.",
    },
    {
      type: "h2",
      text: "What a landing page is for",
    },
    {
      type: "p",
      text: "A landing page has one job: advance a specific visitor from interest to a specific next step. It is not a brand museum. It is not a sitemap. It is a decision environment with a beginning, middle, and ask. Nielsen Norman Group’s guidance on persuasion and scanning behaviour is useful background-[nngroup.com](https://www.nngroup.com/)-because most visitors will not read your carefully workshopped paragraphs in order.",
    },
    {
      type: "p",
      text: "If the page tries to educate everyone about everything, it will convert like a brochure. If you need a sharper first-screen philosophy, pair this article with [why startup websites fail in the first ten seconds](/blog/why-startup-websites-fail-first-10-seconds).",
    },
    {
      type: "takeaway",
      text: "Define the visitor, the promise, and the next step before you debate section order. Reviews without that brief become interior design.",
    },
    {
      type: "h2",
      text: "Usually helping",
    },
    {
      type: "ul",
      items: [
        "Specific headlines tied to a real job.",
        "Short supporting copy that removes one objection.",
        "Visible primary CTA above the fold.",
        "Relevant proof near decision points.",
      ],
    },
    {
      type: "h3",
      text: "Specific headlines tied to a real job",
    },
    {
      type: "p",
      text: "“Close your books three days faster” beats “AI-powered finance platform.” Specificity lets the right person self-select. Stripe, Linear, and many strong product pages lead with outcomes or crisp category ownership-not a stew of buzzwords. Your headline should survive the logo-cover test: still clear without brand recognition.",
    },
    {
      type: "h3",
      text: "Supporting copy that removes one objection",
    },
    {
      type: "p",
      text: "The subhead is not a second headline competing for glory. It answers the first doubt after relevance: time cost, integration burden, who it is for, what happens next. One objection. Not five. Density is not thoroughness.",
    },
    {
      type: "h3",
      text: "Visible primary CTA",
    },
    {
      type: "p",
      text: "If the next step is a demo, the demo ask should not dress as a text link in a paragraph. Visual hierarchy is part of honesty. On mobile, the CTA must remain findable without archaeological scrolling. Baymard’s UX patterns around primary actions and checkout friction are instructive even for SaaS-[baymard.com/blog](https://baymard.com/blog).",
    },
    {
      type: "h3",
      text: "Relevant proof near decision points",
    },
    {
      type: "p",
      text: "Proof is not a testimonials chapter for people who finish novels. Place outcome-specific evidence next to the claim and the ask. A quote about onboarding speed belongs near “set up fast,” not in a footer mosaic.",
    },
    {
      type: "takeaway",
      text: "Helping elements make relevance, reassurance, and action obvious. Keep them-even if a designer is bored of them.",
    },
    {
      type: "h2",
      text: "Usually hurting",
    },
    {
      type: "ul",
      items: [
        "Feature dumps without outcomes.",
        "Competing CTAs and outbound links.",
        "Slow media that delays comprehension.",
        "Forms that ask for too much too soon.",
      ],
    },
    {
      type: "h3",
      text: "Feature dumps without outcomes",
    },
    {
      type: "p",
      text: "Six columns of icons with labels like “Advanced analytics,” “Smart automations,” and “Seamless integrations” teach the visitor that you have features. They do not teach why life improves. Translate features into jobs. If you cannot, the feature may not belong on the lander.",
    },
    {
      type: "h3",
      text: "Competing ctas and outbound links",
    },
    {
      type: "p",
      text: "“Book demo,” “Start free,” “Watch video,” “Read customer story,” and a nav that escapes to the blog-each is a fork. Forks are fine in products; they are expensive on landers paid for by the click. Pick a primary. Demote the rest. Your ad promised one path; honour it.",
    },
    {
      type: "h3",
      text: "Slow media",
    },
    {
      type: "p",
      text: "Autoplaying hero videos, enormous unoptimised images, and animation that postpones text-these punish mobile users and paid traffic. Performance is conversion infrastructure. Follow [web.dev](https://web.dev/) and [Core Web Vitals](https://web.dev/articles/vitals) as practical standards, not as a side quest for the engineering backlog.",
    },
    {
      type: "h3",
      text: "Forms that ask for too much too soon",
    },
    {
      type: "p",
      text: "Budget, phone, company size, how did you hear about us, and a paragraph-sized “needs” field before any value-this is CRM hunger wearing a product mask. Ask for enough to route the conversation. Enrich later. Friction should match commitment stage.",
    },
    {
      type: "h2",
      text: "The helping / hurting review table",
    },
    {
      type: "table",
      headers: ["Element", "Helping signal", "Hurting signal", "Fix"],
      rows: [
        [
          "Headline",
          "Names audience + outcome",
          "Category cliché",
          "Rewrite with exclusion power",
        ],
        [
          "Subhead",
          "Removes one objection",
          "Repeats headline in longer words",
          "Answer time, risk, or fit",
        ],
        [
          "CTA",
          "Specific next step",
          "Learn more / Get started",
          "Name action + expectation",
        ],
        [
          "Proof",
          "Outcome near claim",
          "Logo wallpaper only",
          "Add specificity; relocate",
        ],
        [
          "Features",
          "Job-based bullets",
          "Icon grid jargon",
          "Outcome rewrite or cut",
        ],
        [
          "Media",
          "Fast, supportive of claim",
          "Slow, decorative",
          "Compress; defer; caption with purpose",
        ],
        [
          "Form",
          "Minimum viable fields",
          "Interrogation",
          "Cut fields; explain why each remains",
        ],
      ],
    },
    {
      type: "p",
      text: "Fill this table in a live review. Force every major module into a row. Ambiguous modules are usually hurting by distraction.",
    },
    {
      type: "h2",
      text: "A review sequence that prevents redesign theatre",
    },
    {
      type: "ol",
      items: [
        "State the campaign promise and ICP in one line.",
        "Check message match from ad → headline (if paid).",
        "Inventory helping elements; explicitly protect them.",
        "Inventory hurting elements; rank by conversion impact.",
        "Ship copy/structure fixes before visual system changes.",
        "Re-measure; only then consider design craft upgrades.",
      ],
    },
    {
      type: "p",
      text: "Message match deserves emphasis. If the ad says “inventory for Shopify DTC brands” and the lander says “supply chain OS for modern commerce,” you manufactured bounce before the hero illustration even loaded. Google Search Central’s guidance on landing page experience and relevance is directionally useful even beyond SEO-[developers.google.com/search/docs](https://developers.google.com/search/docs).",
    },
    {
      type: "callout",
      title: "Try this (45 minutes)",
      text: "Print the landing page as a PDF. Highlight green = helps belief/action. Red = hurts. Yellow = unclear. Rewrite all red text without opening a design tool. Then remove one yellow module entirely. Ship. Measure.",
    },
    {
      type: "takeaway",
      text: "Copy and structure first. Visual redesign last. Protect greens like revenue.",
    },
    {
      type: "h2",
      text: "Worked example: a paid lander for “parcelmint”",
    },
    {
      type: "p",
      text: "Parcelmint (fictional) runs ads: “Shopify brands: cut packing time without hiring.” Old lander headline: “The future of fulfilment operations.” Helping: decent customer quote mid-page; clear product screenshots. Hurting: three CTAs; feature icons; 45-second autoplay video; seven-field form.",
    },
    {
      type: "p",
      text: "Review outcome: keep screenshots and quote; move quote under new headline matching the ad; single CTA “See a 12-minute packing walkthrough”; replace icons with three job bullets; replace autoplay with a static frame + optional play; form fields cut to email + store URL. Same offer. Cleaner decision path.",
    },
    {
      type: "p",
      text: "This is the same philosophy as the [three conversion levers](/blog/website-audit-three-changes-double-conversion): message, proof, path-applied to a single URL with paid traffic on the line.",
    },
    {
      type: "h2",
      text: "Section-by-section: a practical walkthrough",
    },
    {
      type: "h3",
      text: "Hero",
    },
    {
      type: "p",
      text: "Ask: does this hero earn the click that brought someone here? Match the ad or referrer’s language. Show one outcome. Place one primary CTA. If you need a visual, make it evidence of the product-not abstract gradients that could advertise anyone. Founders sometimes defend vague heroes as “brand.” Brand that cannot speak an outcome is costume jewellery.",
    },
    {
      type: "h3",
      text: "Social proof band",
    },
    {
      type: "p",
      text: "Logos help when the visitor recognises them and when proximity to the ask is tight. Anonymous startup logos in greyscale do less than one named outcome from a company that looks like the buyer. Prefer “Used by ops leads at Series B fintechs” plus one metric over a graveyard of marks.",
    },
    {
      type: "h3",
      text: "How it works",
    },
    {
      type: "p",
      text: "Three steps beat twelve. Name the customer action in each step, not your internal pipeline stage. “Connect Shopify → Import last 30 days of orders → See packing bottlenecks” is a story. “Sign up → Configure → Optimise” is a shrug.",
    },
    {
      type: "h3",
      text: "Pricing module (if present)",
    },
    {
      type: "p",
      text: "Pricing helps when it clarifies fit. It hurts when it is a feature matrix tournament. Label plans by who they are for. State what is included in outcome language. If you hide pricing for sales reasons, at least explain the next step honestly-“Talk to us for a scoped walkthrough”-so the CTA is not a trapdoor.",
    },
    {
      type: "h3",
      text: "Final CTA band",
    },
    {
      type: "p",
      text: "Repeat the promise, not a new one. Tired landers invent a second offer at the bottom (“Also try our agency!”). That is how you train people to distrust the first ask. Same outcome. Same CTA. Shorter form if needed.",
    },
    {
      type: "callout",
      title: "Exercise: the one-scroll story",
      text: "Cover the page so only one scroll of content is visible at a time. For each scroll, write the belief it should create. If two scrolls create the same belief, merge them. If a scroll creates no belief, cut it.",
    },
    {
      type: "p",
      text: "When stakeholders insist a hurting section “needs to stay for brand,” ask which belief stage it serves. If the answer is “presence,” it is decoration. Decoration can exist below the conversion zone; they should not occupy the decision path you are paying for with ads or scarce attention. Brand is how the argument feels once the argument is clear-not a licence to keep modules that stall the ask.",
    },
    {
      type: "h2",
      text: "Accessibility and trust are conversion features",
    },
    {
      type: "p",
      text: "Low contrast CTAs, missing form labels, and keyboard-unusable modals are not “edge cases.” They are lost conversions you will never see in a heatmap anecdote. Build to [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) basics on every lander you pay for. Trust also includes accurate claims-overpromising in hero copy creates refund and churn debt downstream.",
    },
    {
      type: "p",
      text: "If your page is gorgeous and still soft, read [why beautiful websites do not always convert](/blog/why-beautiful-websites-dont-always-convert). If issues leap out immediately, use the [five-minute audit](/blog/five-minutes-on-your-website-enough-to-find-issues) as a pre-review.",
    },
    {
      type: "h2",
      text: "Prioritisation: impact versus effort",
    },
    {
      type: "table",
      headers: ["Fix type", "Typical impact", "Typical effort", "When to do it"],
      rows: [
        [
          "Headline + CTA rewrite",
          "High",
          "Low",
          "Always first",
        ],
        [
          "Proof relocation",
          "High",
          "Low",
          "Same sprint as copy",
        ],
        [
          "Form field reduction",
          "High",
          "Low-medium",
          "When clicks > completions",
        ],
        [
          "Remove competing CTAs",
          "Medium-high",
          "Low",
          "Especially on paid landers",
        ],
        [
          "Media performance pass",
          "Medium-high",
          "Medium",
          "When mobile bounce is high",
        ],
        [
          "Full visual redesign",
          "Variable",
          "High",
          "After argument is clear",
        ],
      ],
    },
    {
      type: "h2",
      text: "FAQ",
    },
    {
      type: "faq",
      items: [
        {
          question: "Should every page follow the same template?",
          answer:
            "Share a decision sequence (relevance → proof → path), not identical section decoration. Templates help speed; dogma hurts message match.",
        },
        {
          question: "How many CTAs is too many?",
          answer:
            "On a paid lander, one primary is the default. Secondary can exist as quiet text if it supports the same intent (e.g. “Prefer email? Write us”). Avoid equal-weight forks.",
        },
        {
          question: "Do long landing pages convert better?",
          answer:
            "Length should match uncertainty. High-consideration B2B may need more proof. Do not add length to look serious. Add answers to real doubts.",
        },
        {
          question: "When is a redesign justified?",
          answer:
            "When the argument is clear, tracking is clean, and the visual system still undermines trust or comprehension. Redesign to support the argument-not to escape writing it.",
        },
        {
          question: "What should we watch in analytics?",
          answer:
            "Scroll depth to proof, CTA click rate, form start/complete, mobile vs desktop conversion, and post-click quality (show rates, activation)-not bounce alone.",
        },
      ],
    },
    {
      type: "h2",
      text: "Closing",
    },
    {
      type: "p",
      text: "Keep what builds belief. Cut what creates doubt or delay. The rest is taste-and taste is secondary to understanding. A landing page review that only lists problems creates panic. A review that protects strengths and ranks friction creates a sprint plan.",
    },
    {
      type: "p",
      text: "Run the green/red highlight exercise this week. Ship one helping reinforcement and one hurting removal. Then decide whether you still want a redesign-or whether the page simply needed honesty.",
    },
    {
      type: "cta",
      lead: "Need a landing page review that is specific, honest, and actionable?",
      button: "Send your landing page",
      href: "/contact",
    },
  ],
};

export default post;
