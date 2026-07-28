import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "product-doesnt-have-marketing-problem-clarity-problem",
  title:
    "Your product doesn't have a marketing problem. It has a clarity problem.",
  excerpt:
    "When growth stalls, founders buy ads. More often, customers still cannot explain what you do—or why it matters—in one clear sentence. Here is how to diagnose and fix the clarity stack before you spend.",
  date: "July 28, 2026",
  category: "Product Strategy",
  image: "/images/blog/blog-01-clarity.png",
  metaDescription:
    "Why stalled startup growth is usually a clarity problem, not a marketing problem—and how to fix positioning, messaging, and product narrative before you spend more on acquisition.",
  content: [
    {
      type: "p",
      text: "When a product stops growing, the default move is more marketing. More channels. More creatives. More spend. Sometimes that is the right call. More often, marketing is being asked to paper over a product story that is still fuzzy.",
    },
    {
      type: "p",
      text: "Most founders respond to slow growth by adding more features, or more ads, or both. This is understandable, in the same way that adding another cupboard is an understandable response to losing your keys.",
    },
    {
      type: "p",
      text: "Clarity problems look like marketing problems because both show up as weak conversion. The difference is root cause. If a stranger cannot repeat your offer after ten seconds on the homepage, you do not have a distribution gap. You have a comprehension gap. Amplifying confusion is not a growth strategy—it is a louder way to waste runway.",
    },
    {
      type: "p",
      text: "I see this pattern constantly at nau: founders who have shipped something real, hired smart people, and still cannot get cold traffic to understand the product. The instinct is to blame the channel. The fix is almost always upstream—in the sentence, the audience, and the proof.",
    },
    {
      type: "h2",
      text: "Why clarity beats spend (and why founders ignore it)",
    },
    {
      type: "p",
      text: "Marketing spend assumes the offer is already legible. Ads, SEO, partnerships, and outbound all work better when the visitor already knows who the product is for, what changes, and why they should care now. When those three answers are fuzzy, every channel underperforms—and teams conclude “marketing doesn’t work for us.”",
    },
    {
      type: "p",
      text: "Clarity is unglamorous. It does not look like a campaign launch. It looks like rewriting a headline until a non-founder can say it back. It looks like deleting a feature grid that sounds impressive and saying less, better. Founders avoid it because it feels like admitting the story is unfinished. The market has already noticed.",
    },
    {
      type: "p",
      text: "Companies that communicate cleanly do not win because they have better fonts. They win because the product narrative is simple enough to travel. Stripe’s early story was not “payments infrastructure for developers building internet businesses with modern APIs”—it was closer to: payments that do not fight you. Linear did not sell “issue tracking for high-performance software teams with opinionated workflows.” It sold speed and calm in a category that felt noisy. Notion’s early promise was a workspace that bends to how you think—not a feature matrix of databases, wikis, and docs. The products are deep. The first sentence is shallow on purpose.",
    },
    {
      type: "callout",
      title: "A useful test",
      text: "Ask five people outside your company to visit your homepage for ten seconds, close the tab, and write one sentence about what you do. If you get five different sentences—or five shrugs—you have a clarity problem. No amount of CPC optimisation will fix five shrugs.",
    },
    {
      type: "takeaway",
      text: "If cold visitors cannot explain your offer, spending more on traffic multiplies confusion. Fix the sentence before you buy the megaphone.",
    },
    {
      type: "h2",
      text: "How to tell clarity problems from marketing problems",
    },
    {
      type: "p",
      text: "Both problems reduce demos, trials, and revenue. Diagnosis matters because the remedies are opposite. A marketing problem means the offer is understood and still undersupplied with attention. A clarity problem means attention arrives and still fails to convert—because belief never forms.",
    },
    {
      type: "table",
      headers: ["Signal", "Likely clarity problem", "Likely marketing problem"],
      rows: [
        [
          "Traffic quality",
          "Traffic is decent; conversion stays flat",
          "Conversion is healthy; volume is low",
        ],
        [
          "Sales calls",
          "Every call restarts the pitch from zero",
          "Calls move quickly once people arrive",
        ],
        [
          "Customer language",
          "Buyers describe the product differently than you do",
          "Buyers echo your story without prompting",
        ],
        [
          "Paid creatives",
          "Ads only work when they over-explain the product",
          "Simple ads work; you need more reach",
        ],
        [
          "Support / onboarding",
          "New users ask “what is this for?” after signup",
          "Users get stuck on setup, not purpose",
        ],
      ],
    },
    {
      type: "ul",
      items: [
        "Traffic is fine, but demos and trials stay flat.",
        "Sales calls restart the pitch from scratch every time.",
        "Customers describe your product differently than you do.",
        "Paid campaigns only “work” while you over-explain in the creative.",
        "Investors “get it” after a twenty-minute narrative, but the homepage still needs a guide.",
      ],
    },
    {
      type: "p",
      text: "If three or more of those are true, pause the media plan. You are not under-marketed. You are under-explained. For a related diagnostic order, see [why every startup looks like a marketing problem until you dig deeper](/blog/every-startup-looks-like-marketing-problem-until-deeper).",
    },
    {
      type: "takeaway",
      text: "Marketing problems are supply problems for a clear offer. Clarity problems are comprehension problems that no channel can paper over.",
    },
    {
      type: "h2",
      text: "The clarity stack that fixes conversion before spend",
    },
    {
      type: "p",
      text: "I use a five-layer stack with founders before we touch acquisition. Each layer must be answerable in plain English. If a layer is fuzzy, the layers below it will fail—no matter how pretty the design.",
    },
    {
      type: "h3",
      text: "1. One customer, one job",
    },
    {
      type: "p",
      text: "Name a person, not a market. “SMB owners” is a category. “A freelance studio founder who loses three hours a week reconciling invoices across tools” is a customer. The job is the progress they want: get paid on time without chasing. If you cannot name one customer and one job, your messaging will try to please everyone and convert no one.",
    },
    {
      type: "p",
      text: "Airbnb did not start as “travel for everyone.” Early focus was hosts and guests around events when hotels were scarce—a sharp job with a sharp context. Breadth came later. Early-stage teams that skip this step build websites that sound like category reports.",
    },
    {
      type: "h3",
      text: "2. One outcome sentence without jargon",
    },
    {
      type: "p",
      text: "Write the change your product creates in one sentence a tired buyer could repeat. Ban internal vocabulary. If your sentence requires “synergies,” “AI-native,” or “end-to-end platform,” rewrite it until a human remains.",
    },
    {
      type: "p",
      text: "Weak: “An AI-powered workflow platform that unifies collaboration for modern teams.” Stronger: “Stop chasing project updates across five tools—see what’s blocked in one place.” The second sentence can survive a LinkedIn scroll. The first needs a glossary.",
    },
    {
      type: "h3",
      text: "3. Align website, onboarding, and sales to that sentence",
    },
    {
      type: "p",
      text: "Clarity dies when channels tell different stories. The homepage promises “save time.” Onboarding asks for twelve integrations before value. Sales leads with features the homepage never mentioned. Align the sentence across the first session, the deck, and the primary CTA. Inconsistency is a tax on belief.",
    },
    {
      type: "h3",
      text: "4. Place proof next to the claim that needs belief",
    },
    {
      type: "p",
      text: "Every strong claim creates a doubt. “Cut reporting time in half” needs a metric, a quote, or a before/after. “Trusted by finance teams” needs names or logos that matter to your ICP. Proof that lives in a footer while the claim lives in the hero is decorative, not persuasive. Put proof where the doubt appears.",
    },
    {
      type: "h3",
      text: "5. Only then increase distribution",
    },
    {
      type: "p",
      text: "Once a cold visitor can understand the offer, and a new user can reach the outcome, spend becomes leverage instead of theatre. Until then, paid acquisition is a very expensive way to confirm what your sales calls already told you.",
    },
    {
      type: "ol",
      items: [
        "Name one customer and one job-to-be-done.",
        "Write one outcome sentence without jargon.",
        "Align the website, onboarding, and sales deck to that sentence.",
        "Place proof next to the claim that needs belief.",
        "Only then increase distribution.",
      ],
    },
    {
      type: "image",
      src: "/images/blog/blog-mid-01.png",
      alt: "Clean workspace representing product clarity work before marketing spend",
    },
    {
      type: "quote",
      text: "Marketing amplifies what is already true. If the product story is unclear, amplification makes the confusion louder.",
    },
    {
      type: "takeaway",
      text: "The clarity stack is sequential. Skip a layer and every channel below it inherits the fog.",
    },
    {
      type: "h2",
      text: "What clarity looks like in products people actually understand",
    },
    {
      type: "p",
      text: "Figma’s early clarity was not “collaborative interface design with multiplayer canvases.” It was: design together in the browser, without the file-handoff mess. Apple’s product pages rarely lead with specs; they lead with what changes in your life—then specs support the belief. These companies still have complexity. They refuse to put complexity in the first sentence.",
    },
    {
      type: "p",
      text: "Contrast that with a fictional but familiar startup—call it FlowMesh. FlowMesh sells “intelligent operations orchestration for scale-ups.” The homepage lists twelve integrations, six persona tabs, and a hero video that never finishes loading on mobile. Sales loves the product. Cold traffic bounces. The founders hire an agency to “fix the creative.” The creative still has to explain FlowMesh in fifteen seconds. It cannot. The problem was never the ad account.",
    },
    {
      type: "p",
      text: "When FlowMesh finally rewrote for one ICP—“ops leads at 20–80 person SaaS companies drowning in status meetings”—and one outcome—“replace weekly status theatre with a live view of what is blocked”—trial starts rose without increasing spend. Same product. Different sentence. That is clarity work.",
    },
    {
      type: "p",
      text: "If your homepage fails in the first viewport, read [why most startup websites fail in the first 10 seconds](/blog/why-startup-websites-fail-first-10-seconds). If you are about to scale spend anyway, answer [these five questions before you spend £10,000 on marketing](/blog/before-spend-10000-marketing-five-questions).",
    },
    {
      type: "h2",
      text: "Try this: a 45-minute clarity sprint",
    },
    {
      type: "p",
      text: "You do not need a six-week brand project. You need forced decisions. Run this with a co-founder or someone who will disagree with you politely.",
    },
    {
      type: "ol",
      items: [
        "Write your current homepage headline on a whiteboard. Cross out every buzzword. Rewrite until a non-founder can repeat it.",
        "List three ICPs you currently chase. Circle one. Write who you are explicitly not for.",
        "Write the job in customer language: “When I ___, I want to ___, so I can ___.”",
        "List the top three doubts a buyer has after reading your claim. Assign one proof asset to each doubt.",
        "Open your onboarding. Mark the first moment the user experiences the promised outcome. If it is after step eight, cut steps.",
        "Ask two customers to explain your product in their words. Steal their language for the homepage.",
      ],
    },
    {
      type: "callout",
      title: "Exercise output",
      text: "End the sprint with one sentence (audience + outcome), one exclusion list, three proof placements, and one primary CTA for the next thirty days. Everything else is optional until those are stable.",
    },
    {
      type: "h2",
      text: "Common objections (and why they are usually wrong)",
    },
    {
      type: "faq",
      items: [
        {
          question: "But our product is complex—won’t a simple sentence undersell us?",
          answer:
            "A simple sentence is an entry point, not a full specification. Complexity belongs after belief. If people never understand the door, they never enter the house. Stripe, Notion, and Linear are complex products with simple fronts.",
        },
        {
          question: "What if we serve multiple segments?",
          answer:
            "Pick a primary for the next ninety days. Multiple segments on one homepage create multiple half-stories. You can still sell to others; you cannot lead with everyone. For a timed version of this work, see [how I’d reposition your startup in 60 minutes](/blog/how-id-reposition-your-startup-in-60-minutes).",
        },
        {
          question: "Can’t good marketing copy fix unclear positioning?",
          answer:
            "Copy can polish fog. It cannot invent a decision. Positioning chooses who wins and what you refuse. Without that, copywriters rearrange adjectives. Useful guidance on how people actually read interfaces sits with groups like the [Nielsen Norman Group](https://www.nngroup.com/)—but research will not save a sentence that still tries to please everyone.",
        },
        {
          question: "We already have product–market fit. Is clarity still the issue?",
          answer:
            "Sometimes. Fit in one segment can hide muddy storytelling as you expand. If expansion channels underperform while core customers still love you, the story is not travelling. See [what founders get wrong about product–market fit](/blog/what-founders-get-wrong-about-product-market-fit).",
        },
      ],
    },
    {
      type: "h2",
      text: "What I do when founders insist it is “just marketing”",
    },
    {
      type: "p",
      text: "I start with the homepage and a cold read. Then sales call recordings. Then onboarding. Usually the same fog appears in all three places. We tighten the ICP, rewrite the outcome sentence, move proof next to claims, and only then discuss channels. For a broader sequence, [if your product isn’t growing, start here](/blog/if-product-isnt-growing-start-here) maps the order I use.",
    },
    {
      type: "p",
      text: "Founders sometimes want the campaign because campaigns feel like action. Clarity feels like homework. Homework is cheaper. The [Y Combinator Library](https://www.ycombinator.com/library) is full of reminders that talking to users and sharpening the offer beats theatrical growth—because the hard part was never the ad platform settings.",
    },
    {
      type: "h2",
      text: "Where clarity breaks inside the product—not only on the website",
    },
    {
      type: "p",
      text: "Homepage fog is the visible symptom. The same fog often lives in onboarding, empty states, pricing pages, and sales collateral. If the product takes twelve steps before the promised outcome appears, you have taught the user that your sentence was aspirational. Aspiration is not a retention strategy.",
    },
    {
      type: "p",
      text: "Walk the first session as a stranger. Where do you first experience the outcome named on the homepage? If the answer is “after integrations, permissions, a team invite, and a tutorial modal,” your clarity problem is experiential. Marketing did not cause that. Product sequencing did. This is why [best marketing feels like product design](/blog/best-marketing-feels-like-product-design)—the story and the session must agree.",
    },
    {
      type: "ul",
      items: [
        "Empty states that explain the company mission instead of the next action.",
        "Pricing pages organised by internal packages instead of buyer jobs.",
        "Sales decks that lead with architecture while buyers still ask what changes Monday morning.",
        "Support macros that re-pitch the product because activation never landed.",
      ],
    },
    {
      type: "h2",
      text: "A weekly clarity operating rhythm",
    },
    {
      type: "p",
      text: "Clarity is not a one-off workshop. It drifts as you add features, hire, and chase logos. Install a light rhythm so the sentence stays true.",
    },
    {
      type: "ol",
      items: [
        "Every Monday: read five recent call notes or support tickets for language mismatches.",
        "Every other week: cold ten-second homepage test with one outsider.",
        "Every month: rewrite the outcome sentence from scratch without looking at the live site; compare.",
        "Every quarter: revisit exclusions. If you have quietly re-added three “also for” segments, you are drifting.",
      ],
    },
    {
      type: "p",
      text: "Teams that treat clarity as a campaign theme lose it by Thursday. Teams that treat it as an operating constraint keep conversion from rotting while they ship. For a longer operating view, see [why I care more about systems than campaigns](/blog/why-i-care-more-about-systems-than-campaigns).",
    },
    {
      type: "takeaway",
      text: "Clarity decays unless you defend it. Build a rhythm that catches drift before you fund another channel.",
    },
    {
      type: "h2",
      text: "What “good enough clarity” looks like before you scale",
    },
    {
      type: "p",
      text: "You do not need perfect prose. You need decision-ready comprehension. Practical bar:",
    },
    {
      type: "ul",
      items: [
        "Two of three cold readers can name audience and outcome after ten seconds.",
        "Sales calls spend less time defining the category and more time on fit and implementation.",
        "New users reach the promised outcome without a founder screenshare as the default path.",
        "Paid creative can stay short because the landing page finishes the thought.",
        "Customers’ explanations of the product cluster around the same job—not five different products.",
      ],
    },
    {
      type: "p",
      text: "When those are true, marketing becomes leverage. Until then, marketing is a spotlight on unfinished work. Spotlights are honest like that—and slightly rude, which is why founders prefer another cupboard.",
    },
    {
      type: "p",
      text: "Fix the sentence first. Then buy the megaphone.",
    },
    {
      type: "cta",
      lead: "Want a clarity audit before you put more budget into acquisition?",
      button: "Book a clarity review",
      href: "/contact",
    },
  ],
};

export default post;
