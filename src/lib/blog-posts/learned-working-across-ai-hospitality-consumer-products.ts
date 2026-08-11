import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "learned-working-across-ai-hospitality-consumer-products",
  title:
    "What outdoor, travel and consumer brands taught me the hard way",
  excerpt:
    "Cross-category lessons that transfer when you build physical products-and what doesn't.",
  date: "July 10, 2026",
  category: "Research & Positioning",
  image: "/images/blog/blog-16-ai-hospitality.png",
  metaDescription:
    "What working across consumer product categories taught me about positioning, launches and storytelling that transfers.",
  content: [
    {
      type: "p",
      text: "Working across AI, hospitality, and consumer products can look scattered on a CV. In practice, it sharpened a useful pattern: industries change vocabulary, not human decision-making. People still need to understand, trust, and get value-preferably before they lose patience. The rest is costume.",
    },
    {
      type: "p",
      text: "This piece is what transferred, what did not, and how I adapt strategy without abandoning standards. If you build in one category and feel tempted to borrow “best practices” wholesale from another, treat this as a translation guide-not a licence to copy someone else’s homepage structure and hope the category gods are kind.",
    },
    {
      type: "h2",
      text: "Why cross-industry work sharpens product sense",
    },
    {
      type: "p",
      text: "Specialists deepen craft. Cross-category work deepens diagnosis. When you have watched the same conversion failure wear three different outfits-an AI waitlist, a hotel booking flow, a DTC landing page-you stop blaming the industry and start fixing the decision path.",
    },
    {
      type: "p",
      text: "Harvard Business Review’s writing on [customer jobs and progress](https://hbr.org/) keeps returning to a stubborn idea: people hire products to make progress in their lives. The Interaction Design Foundation’s materials on [user-centred design](https://www.interaction-design.org/) say the same thing with more wireframes. Different shelves, same truth.",
    },
    {
      type: "callout",
      title: "The blunt test I reuse everywhere",
      text: "Can a stranger explain what this is for after one screen? If not, the category is not the problem. The narrative is.",
    },
    {
      type: "takeaway",
      text: "Industries teach constraints. Humans teach conversion. Learn both-and never confuse jargon for strategy.",
    },
    {
      type: "h2",
      text: "What transferred across markets",
    },
    {
      type: "p",
      text: "Four laws showed up so consistently that I treat them as defaults until evidence says otherwise.",
    },
    {
      type: "ul",
      items: [
        "People buy reduced risk and increased progress-not feature lists.",
        "Trust design matters as much as feature design.",
        "First-session value predicts retention better than polish.",
        "Category jargon is a conversion tax everywhere.",
      ],
    },
    {
      type: "h3",
      text: "1. Reduced risk, increased progress",
    },
    {
      type: "p",
      text: "In AI, risk often means “will this hallucinate and embarrass me?” In hospitality, risk means “will this trip feel disappointing?” In consumer products, risk means “will I waste money and time?” Different flavours, same purchase psychology.",
    },
    {
      type: "p",
      text: "Stripe did not win developers with abstractions alone; it reduced implementation risk. Airbnb did not win travellers with inventory alone; it reduced the risk of a bad stay through reviews, photos, and host signals. Notion reduced the risk of tool sprawl by making the alternative feel coherent. The pattern is transferable even when the interface is not.",
    },
    {
      type: "h3",
      text: "2. Trust is a designed surface",
    },
    {
      type: "p",
      text: "Teams often treat trust as a logo row. Useful trust is contextual: security near data claims, reviews near booking, process clarity near “how AI works.” Baymard’s [UX research](https://baymard.com/blog) and Nielsen Norman Group’s [trust and credibility findings](https://www.nngroup.com/) keep confirming that people look for specific cues at decision moments-not vibes.",
    },
    {
      type: "h3",
      text: "3. First-session value beats launch-day aesthetics",
    },
    {
      type: "p",
      text: "I have seen gorgeous AI demos that never activate, and plain hotel tools that staff adopt because they solve tomorrow morning’s check-in. Polish helps after value is obvious. Before that, polish is a costume party.",
    },
    {
      type: "h3",
      text: "4. Jargon is a tax",
    },
    {
      type: "p",
      text: "“Agentic workflows,” “revPAR optimisation,” “community-led growth loops”-sometimes accurate, often a fog machine. If the customer cannot reuse your language in a conversation with a colleague, you do not have positioning. You have a glossary. That is why [clarity problems masquerade as marketing problems](/blog/product-doesnt-have-marketing-problem-clarity-problem) so often.",
    },
    {
      type: "takeaway",
      text: "Universal laws: reduce risk, design trust, deliver early value, kill jargon. Category flavour comes after.",
    },
    {
      type: "h2",
      text: "What changed by industry",
    },
    {
      type: "p",
      text: "Adaptation matters. Pretending every product is SaaS with nicer fonts is how you ship the wrong first experience.",
    },
    {
      type: "table",
      headers: ["Category", "Primary fear", "What clarity must do first", "Typical first value"],
      rows: [
        [
          "AI products",
          "Unreliability / opacity",
          "Demystify inputs, outputs, and failure modes",
          "A useful result the user can verify",
        ],
        [
          "Hospitality",
          "Emotional disappointment",
          "Create certainty about the experience",
          "Confidence the stay/service will feel right",
        ],
        [
          "Consumer products",
          "Irrelevance / waste",
          "Prove instant personal relevance",
          "A quick win that feels made for them",
        ],
      ],
    },
    {
      type: "h3",
      text: "AI: demystification as product strategy",
    },
    {
      type: "p",
      text: "AI products often fail the first ten seconds because they lead with model theatre. Visitors need to know: what goes in, what comes out, what happens when it is wrong, and why this is better than ChatGPT-plus-a-spreadsheet.",
    },
    {
      type: "p",
      text: "Fictional example: “Lumen,” an AI contract review tool for small legal teams. Early homepage: “Next-gen legal intelligence.” After adaptation: “Flag risky clauses in vendor contracts before you sign-built for lean in-house teams.” Onboarding asks for one contract and returns annotated risk in minutes. The model still matters. The demystification matters more for conversion.",
    },
    {
      type: "ul",
      items: [
        "Show the workflow, not the neural romance.",
        "Put human override and review in the story early.",
        "Use proof that names accuracy bounds without fake precision.",
        "Avoid “AI-powered” as a headline-say the job.",
      ],
    },
    {
      type: "h3",
      text: "Hospitality: emotional certainty",
    },
    {
      type: "p",
      text: "Hospitality decisions are identity-adjacent. People imagine themselves in a place. That is why imagery, specificity, and operational trust matter more than feature grids. A hotel website that lists “synergy of wellness and local immersion” has said nothing a tired traveller can use.",
    },
    {
      type: "p",
      text: "Working with hospitality teams taught me to design for the person who books and the person who arrives. Marketing sells the dream; operations must survive Tuesday. Product experiences that ignore staff workflows eventually collapse the guest promise-something consumer SaaS founders sometimes miss when they treat hotels like “users.”",
    },
    {
      type: "p",
      text: "Airbnb’s strength-explored further in my [homepage teardown](/blog/product-teardown-airbnb-homepage)-is job clarity plus visual proof. Independent hotels can steal the principle without copying the marketplace UI: own the stay promise early, reduce uncertainty, make the next step obvious.",
    },
    {
      type: "h3",
      text: "Consumer products: instant relevance",
    },
    {
      type: "p",
      text: "Consumer attention is unforgiving. If the first viewport does not feel personally useful, people bounce. Apple’s product storytelling and Linear’s sharp category stance both show how relevance can be designed: one idea, strong craft, little apology.",
    },
    {
      type: "p",
      text: "Fictional example: “North,” a consumer budgeting app. Feature-led homepage listed sync, charts, and AI insights. Relevance-led rewrite: “See where next month’s money actually goes-before it disappears.” First session forces a two-minute categorisation win. Retention improved because the product finally behaved like the promise.",
    },
    {
      type: "takeaway",
      text: "AI needs demystification. Hospitality needs emotional certainty. Consumer needs instant relevance. The clarity standard stays constant.",
    },
    {
      type: "h2",
      text: "A portable framework: translate → trust → time",
    },
    {
      type: "p",
      text: "When I enter a new category, I run a three-pass diagnostic before redesigning anything.",
    },
    {
      type: "ol",
      items: [
        "Translate: rewrite the offer in the customer’s language (no category costume).",
        "Trust: map objections and place evidence at those moments.",
        "Time: define the fastest path to a felt outcome in session one.",
      ],
    },
    {
      type: "p",
      text: "This pairs cleanly with [the strategy-to-launch arc](/blog/from-strategy-to-launch-how-i-approach-new-product) and with [starting without Figma](/blog/why-i-start-every-project-without-opening-figma). The industry changes the answers inside the boxes; it should not delete the boxes.",
    },
    {
      type: "callout",
      title: "Try this across any category (60 minutes)",
      text: "Interview or review five customer quotes. Circle every word a stranger would not use. Rewrite your homepage headline using only circled-out language’s opposite: plain words. Then time a first-run of your product with a stopwatch. If first value takes longer than a coffee goes cold, you have a time-to-value problem-regardless of industry.",
    },
    {
      type: "h2",
      text: "Mistakes that look industry-specific (and aren’t)",
    },
    {
      type: "ul",
      items: [
        "Leading with internal architecture (“our platform,” “our stack,” “our model”).",
        "Assuming category buyers already understand your wedge.",
        "Copying competitor IA because “that’s how this market does it.”",
        "Adding channels before the first session works.",
        "Confusing brand moodboards with decision design.",
      ],
    },
    {
      type: "p",
      text: "These mistakes show up in [startup website audits](/blog/audited-50-startup-websites-10-mistakes) constantly. The AI company and the skincare brand make the same error with different adjectives. That is oddly comforting-and useful, because the fixes transfer.",
    },
    {
      type: "h2",
      text: "What I borrow from each world",
    },
    {
      type: "h3",
      text: "From AI teams",
    },
    {
      type: "p",
      text: "Respect for evaluation. The best AI product teams ask “how do we know this is right?” That question belongs in hospitality ops tools and consumer apps too. Define success criteria for the first outcome, not just for the model.",
    },
    {
      type: "h3",
      text: "From hospitality teams",
    },
    {
      type: "p",
      text: "Respect for emotion and operations. A promise that cannot survive peak hours is marketing debt. Consumer founders who romanticise “delight” without staffing reality could learn from hotels that live or die on Tuesday evenings.",
    },
    {
      type: "h3",
      text: "From consumer teams",
    },
    {
      type: "p",
      text: "Respect for ruthless relevance. B2B can hide behind demos; consumer products cannot. Borrow the discipline of one idea per viewport and [first-ten-seconds clarity](/blog/why-startup-websites-fail-first-10-seconds).",
    },
    {
      type: "quote",
      text: "The best cross-industry habit is intellectual humility: assume your favourite pattern is a hypothesis until a customer in this market proves it.",
    },
    {
      type: "h2",
      text: "Decision design is the real constant",
    },
    {
      type: "p",
      text: "Under every category costume sits a decision: understand, trust, act. [Nielsen Norman Group](https://www.nngroup.com/) keeps showing that people scan for relevance and next steps. [Baymard](https://baymard.com/blog) keeps showing that ambiguity and weak trust cues raise abandonment. Those findings are not “ecommerce-only” curiosities. They are human. Your AI waitlist and your hotel booking widget obey the same physics.",
    },
    {
      type: "p",
      text: "When I audit an experience, I ignore the industry slide deck and ask: where does comprehension break, where does risk spike, where does the path fork without guidance? That diagnostic works in a model playground and in a guest app. The fixes differ in flavour-tooltips versus photography, eval notes versus house rules-but the diagnosis method does not.",
    },
    {
      type: "h3",
      text: "A shared objection map",
    },
    {
      type: "table",
      headers: ["Objection type", "AI flavour", "Hospitality flavour", "Consumer flavour"],
      rows: [
        [
          "Will this work for me?",
          "Accuracy / fit to my data",
          "Will the stay match the photos?",
          "Is this relevant to my life?",
        ],
        [
          "What if it fails?",
          "Hallucination / liability",
          "Bad night / no support",
          "Wasted money / hassle",
        ],
        [
          "Is it worth switching?",
          "Vs ChatGPT + docs",
          "Vs hotel brand I know",
          "Vs doing nothing",
        ],
      ],
    },
    {
      type: "p",
      text: "Once you see objections as types, you stop inventing random homepage sections and start placing answers where fear lives. That is also why [systems beat campaigns](/blog/why-i-care-more-about-systems-than-campaigns): objection handling should be an operating habit, not a launch-week scramble.",
    },
    {
      type: "callout",
      title: "Exercise: three-industry rewrite",
      text: "Take your current homepage headline. Rewrite it three ways as if you were launching in AI, hospitality, and consumer tomorrow-using only demystification, certainty, or relevance as the lead. Then pick the rewrite that matches your actual category. The point is not theatrics; it is noticing which clarity muscle you underuse.",
    },
    {
      type: "h2",
      text: "Hiring and teams: what cross-industry work changes",
    },
    {
      type: "p",
      text: "Cross-category experience also changes how I staff projects. Pure SaaS growth playbooks can mis-hire for hospitality operations tools. Pure consumer brand instincts can under-serve AI buyers who need governance language. I look for people who can hold two truths: craft standards are universal; go-to-market vocabulary is local.",
    },
    {
      type: "ul",
      items: [
        "Pair a category expert with a clarity generalist early.",
        "Ban unexplained jargon in shared briefs-define or delete.",
        "Test copy with someone outside the industry before polish.",
        "Keep a living glossary of customer words versus internal words.",
      ],
    },
    {
      type: "p",
      text: "Y Combinator’s [Library](https://www.ycombinator.com/library) advice to talk to users is category-agnostic for a reason. Users will hand you the vocabulary if you stop performing expertise long enough to hear it. First Round’s [Review](https://review.firstround.com/) pieces on early GTM similarly reward teams who learn the buyer’s language before scaling spend.",
    },
    {
      type: "h2",
      text: "Systems that travel; campaigns that don’t",
    },
    {
      type: "p",
      text: "Campaign tactics are local. Systems are portable. A positioning system, proof system, and learning cadence work in AI and hotels alike-see [why I care more about systems than campaigns](/blog/why-i-care-more-about-systems-than-campaigns). A TikTok playbook from consumer rarely ports cleanly into enterprise AI sales cycles, and forcing it is how you get awkward webinars with ring lights.",
    },
    {
      type: "p",
      text: "Performance and accessibility remain universal hygiene. [Core Web Vitals](https://web.dev/articles/vitals) and [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) do not care whether you sell models or mattresses. Slow, inaccessible experiences quietly tax every category.",
    },
    {
      type: "h2",
      text: "A composite case: when three worlds collide",
    },
    {
      type: "p",
      text: "Fictional product: “Grove,” an AI concierge for boutique hotels that also sells a guest-facing consumer app for preferences. Three audiences, one brand risk.",
    },
    {
      type: "p",
      text: "Translate pass: staff language (“handoffs,” “VIPs,” “arrivals”) separate from guest language (“remember how I like my stay”). Trust pass: hotels need reliability and control; guests need privacy and usefulness. Time pass: staff get value when tonight’s arrival list is clearer in five minutes; guests get value when one preference saves a future friction.",
    },
    {
      type: "p",
      text: "Without that separation, Grove becomes a muddy “AI hospitality platform” nobody can pitch. With it, the company can still share a system underneath-but markets two jobs with two narratives. That is [product versus business](/blog/difference-building-product-and-building-business) thinking in miniature: features alone do not create a repeatable value exchange.",
    },
    {
      type: "faq",
      items: [
        {
          question: "Should my AI product look more like consumer apps?",
          answer:
            "Steal consumer clarity and speed-to-value, not consumer brand theatre. Enterprise buyers still need demystification, governance, and proof. Pretty onboarding that hides how the system fails will backfire.",
        },
        {
          question: "How do I know if I’m over-fitting to industry clichés?",
          answer:
            "If your homepage could swap logos with three competitors and still read the same, you are in cliché territory. Rewrite until the job and wedge are specific.",
        },
        {
          question: "Is hospitality too different for SaaS playbooks?",
          answer:
            "SaaS mechanics can apply; SaaS tone often does not. Design for emotional certainty and operational reality. Do not import pure PLG assumptions into properties that buy through relationships.",
        },
        {
          question: "What’s the fastest way to apply this tomorrow?",
          answer:
            "Run Translate → Trust → Time on your live homepage and first-session flow. Ship one clarity fix, one trust placement, one time-to-value cut within a week.",
        },
      ],
    },
    {
      type: "h2",
      text: "What to practise",
    },
    {
      type: "ol",
      items: [
        "Collect ten customer phrases; ban internal jargon for a week of copy edits.",
        "Map the top five objections by category audience you serve.",
        "Time first value with a stopwatch and a non-expert user.",
        "Rewrite one viewport for demystification, certainty, or relevance-whichever your category needs most.",
        "Keep a “portable principles” doc so tactics stay local and standards stay stable.",
      ],
    },
    {
      type: "p",
      text: "Cross-industry work is not a personality quirk. It is a reminder that humans decide under uncertainty in every market. Categories differ. Clarity, trust, and time-to-value do not. For founders stuck asking for more channels when the real issue is coherence, continue with [what founders actually need isn’t more marketing](/blog/founders-actually-need-isnt-more-marketing).",
    },
    {
      type: "cta",
      lead: "Building across categories and need a partner who can translate strategy into experience?",
      button: "Get in touch",
      href: "/contact",
    },
  ],
};

export default post;
