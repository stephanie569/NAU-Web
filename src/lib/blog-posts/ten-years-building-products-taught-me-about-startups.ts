import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "ten-years-building-products-taught-me-about-startups",
  title: "10 years with products. These lessons actually stuck.",
  excerpt:
    "What building and launching physical products taught me about clarity, systems and stories that sell.",
  date: "July 16, 2026",
  category: "Research & Positioning",
  image: "/images/blog/blog-11-ten-years.png",
  metaDescription:
    "Lessons from a decade of product work: clarity beats cleverness, systems beat spikes, and the best marketing starts as product strategy.",
  content: [
    {
      type: "p",
      text: "Ten years of building products across different markets taught me a quiet truth: startups rarely fail from lack of ambition. They fail from lack of clarity under pressure. Ambition is plentiful. Clear sentences are not. I have worked in and around AI, hospitality, consumer products, and the unglamorous middle where a founder’s slide deck meets a user’s first five minutes. The industries change. The failure modes rhyme.",
    },
    {
      type: "p",
      text: "This is not a memoir of logos I have touched. It is a field guide of patterns I trust enough to bet a project on. If you want the practitioner version of how I work now at nau, these lessons are the spine. They also explain why I care more about the first sentence than the launch party.",
    },
    {
      type: "h2",
      text: "Lesson 1: customers pay for progress, not features",
    },
    {
      type: "p",
      text: "Features are how teams talk to each other. Progress is how customers talk to their lives. The freelancers who loved “multi-currency tax packs” in a roadmap meeting still abandoned the product when invoicing stayed slow. Jobs-to-be-done is not a slogan; it is a reminder to measure the advancement people hire you for. The [Interaction Design Foundation](https://www.interaction-design.org/) has clear primers if your team needs shared language.",
    },
    {
      type: "p",
      text: "Stripe did not win early by listing every financial primitive. It won by making “accept payments” feel like progress in an afternoon. Linear did not win by matching every issue tracker checkbox. It won by making speed-to-clarity feel inevitable. When roadmaps swell, ask: what progress got faster this month? If the answer is “we shipped surface area,” you are collecting stamps, not customers. See also [the hidden cost of features nobody asked for](/essays/hidden-cost-building-features-nobody-asked-for).",
    },
    {
      type: "takeaway",
      text: "Price and retention follow felt progress. Feature counts follow internal politics-do not confuse the two.",
    },
    {
      type: "h2",
      text: "Lesson 2: a sharp sentence outperforms a clever brand line",
    },
    {
      type: "p",
      text: "Clever lines win workshops. Sharp sentences win cold traffic. “Reimagine collaboration” can hang in a lobby. “Your design team can comment on the live file-no more exporting PDFs for feedback” can close a trial. I have rewritten more heroes than I have designed net-new illustrations, and the rewrites moved metrics more often. Clarity problems masquerade as marketing problems-[your product’s clarity problem](/essays/product-doesnt-have-marketing-problem-clarity-problem).",
    },
    {
      type: "p",
      text: "Nielsen Norman Group’s work on content and comprehension keeps validating the obvious: people skim, decide fast, and punish vagueness-[NN/g](https://www.nngroup.com/). Google’s people-first guidance in [Google Search Central](https://developers.google.com/search/docs) is another external nudge toward usefulness over performance theatre.",
    },
    {
      type: "callout",
      title: "The sticky-note test",
      text: "If your homepage headline needs a subhead, a diagram, and a founder explanation to make sense, the headline is not finished. Clever is optional. Repeatable is not.",
    },
    {
      type: "h2",
      text: "Lesson 3: speed matters only after direction is clear",
    },
    {
      type: "p",
      text: "Move-fast culture without a Core job produces beautifully deployed confusion. I have seen teams ship weekly and still not learn, because each release answered a different question. Speed is a multiplier. Multipliers need a number worth multiplying. Y Combinator’s library returns to focus and user truth constantly-[Y Combinator Library](https://www.ycombinator.com/library). First Round’s operator stories show the same pattern under different logos: [First Round Review](https://review.firstround.com/).",
    },
    {
      type: "p",
      text: "My practical rule: freeze the offer sentence and ICP exclusions before you celebrate velocity. Then go fast. That sequence shows up in [the strategy framework before designing a screen](/essays/product-strategy-framework-before-designing-screen) and in [why I start without Figma](/essays/why-i-start-every-project-without-opening-figma).",
    },
    {
      type: "h2",
      text: "Lesson 4: the website is part of the product",
    },
    {
      type: "p",
      text: "Treating the site as a brochure is how teams create a gap between promise and first session. The homepage sets expectations the onboarding must keep. When they diverge, trust drops before the product has a chance. Airbnb’s public pages and product experience historically worked hard to feel like one system-I explore related territory in [the Airbnb homepage teardown](/essays/product-teardown-airbnb-homepage).",
    },
    {
      type: "p",
      text: "Performance and accessibility are product quality, not “web nice-to-haves.” A slow, inaccessible path is a broken feature. Keep [web.dev vitals](https://web.dev/articles/vitals) and [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) in the same conversation as activation. Baymard’s research culture-evidence over opinion-is a healthy influence even outside e-commerce: [Baymard](https://baymard.com/blog).",
    },
    {
      type: "table",
      headers: ["If you treat the site as…", "You optimise for…", "Customers experience…"],
      rows: [
        [
          "A brochure",
          "Awards and vibes",
          "Promise/product mismatch",
        ],
        [
          "A lead form",
          "CTA volume",
          "Unqualified demos and churn",
        ],
        [
          "Part of the product",
          "Belief → first value",
          "Coherent journey and trust",
        ],
      ],
    },
    {
      type: "takeaway",
      text: "Website, onboarding, and sales script are one product story told in three rooms-keep them aligned or pay in bounce and churn.",
    },
    {
      type: "h2",
      text: "Lesson 5: founders who listen carefully ship less-and win more",
    },
    {
      type: "p",
      text: "Listening is not collecting compliments. It is hunting for the cost of the status quo in the customer’s own words. The best founders I have worked with schedule contact with reality the way others schedule stand-ups. They kill features cheerfully. They disappoint the wrong segment early. They ask what would make a buyer act this month-not someday.",
    },
    {
      type: "p",
      text: "Harvard Business Review’s enduring material on discovery and strategy-as-choice still beats most Twitter threads-[HBR](https://hbr.org/). When listening is weak, teams invent requirements. When listening is strong, roadmaps shrink and conversion paths get kinder. That is also how I filter ideas worth building: [how I decide whether a product is worth building](/essays/how-i-decide-whether-product-worth-building).",
    },
    {
      type: "h2",
      text: "Lesson 6: systems beat spikes",
    },
    {
      type: "p",
      text: "A launch spike feels like strategy. A weekly system is strategy. I optimise for compounding understanding: positioning that stays sharp, experiences that teach the offer, proof that accumulates, and metrics that ask useful questions. Campaigns become amplifiers, not crutches. I wrote that preference plainly in [why I care more about systems than campaigns](/essays/why-i-care-more-about-systems-than-campaigns) and [founders don’t need more marketing](/essays/founders-actually-need-isnt-more-marketing).",
    },
    {
      type: "ol",
      items: [
        "Weekly: one hour of raw customer truth (calls, support, interviews).",
        "Weekly: one conversion review of the primary path on mobile.",
        "Biweekly: kill or clarify one orphan message, feature, or audience.",
        "Monthly: rewrite the offer sentence until a stranger can repeat it.",
        "Quarterly: check whether Core progress got faster for the ICP-not whether the roadmap got longer.",
      ],
    },
    {
      type: "callout",
      title: "Spikes still matter",
      text: "Launches, PR, and bursts of distribution are useful after the path converts. Before that, they are a tax on learning-louder data that still confuses you.",
    },
    {
      type: "h2",
      text: "Lesson 7: proof is a product feature",
    },
    {
      type: "p",
      text: "Early in my career I treated testimonials as marketing garnish. Now I treat proof as part of the experience architecture. Claims without nearby evidence create doubt; doubt creates demos that should have been self-serve wins-or silent bounces. Place metrics, named customers, and concrete outcomes beside the bravest sentences. Update proof when the product changes so the site does not sell a museum piece.",
    },
    {
      type: "p",
      text: "This overlaps with conversion work in [three changes that can double conversion](/essays/website-audit-three-changes-double-conversion) and with the diagnostic patience in [every startup looks like a marketing problem](/essays/every-startup-looks-like-marketing-problem-until-deeper). Proof is how you borrow trust until lived experience replaces it.",
    },
    {
      type: "h2",
      text: "Lesson 8: saying no is a product skill",
    },
    {
      type: "p",
      text: "The decade taught me that taste is often the courage to disappoint a loud minority. Roadmaps fill with polite obligations: a prospect’s wishlist, a competitor’s checkbox, a board member’s pet theory. Without a Core job written in ink, every request sounds reasonable. With it, most requests become sequenced-or declined. Apple’s public restraint is easy to mythologise; the transferable habit is fewer simultaneous promises.",
    },
    {
      type: "p",
      text: "If your team cannot name what you are not building this quarter, you do not have prioritisation. You have a queue. Queues are not strategies. They are how interesting companies become average ones with longer settings pages.",
    },
    {
      type: "h2",
      text: "Mistakes I made so you can skip the scenic route",
    },
    {
      type: "p",
      text: "I once helped ship a feature set because a single enterprise prospect “needed it to sign.” They did not sign. The features remained, confusing everyone else. I once approved a homepage that won internal applause and lost external comprehension. I once treated a traffic spike as product-market fit because hope is a powerful analyst. Each mistake taught the same correction: return to the customer’s cost, the offer sentence, and the first session.",
    },
    {
      type: "p",
      text: "The corrective habits are dull on purpose. Dull scales. Drama does not. When a project feels exciting for the wrong reasons-new category narratives, sudden pivots without evidence, redesigns as conflict avoidance-I slow the room down with questions from [questions I ask before taking any client](/essays/questions-i-ask-before-taking-any-client). Excitement that cannot survive those questions usually cannot survive the market either.",
    },
    {
      type: "p",
      text: "If growth is stalling and you need a starting point rather than a memoir, use [if the product isn’t growing, start here](/essays/if-product-isnt-growing-start-here). The decade compressed into an operating order is more useful than another inspirational thread.",
    },
    {
      type: "h2",
      text: "How the lessons show up in a normal tuesday",
    },
    {
      type: "p",
      text: "Theory is cheap until it changes the calendar. On a normal Tuesday I expect to see: a customer-truth block that is not optional, a conversion path reviewed on mobile, a roadmap argument that cites the Core job, and at least one explicit no. If the Tuesday is only stand-ups, Slack archaeology, and polishing a launch that lacks a sentence, the lessons have not landed-they are posters.",
    },
    {
      type: "p",
      text: "I also expect the website and the product to be discussed in the same meeting occasionally. Separate ownership is fine; separate stories are not. When marketing ships a promise product cannot keep this month, someone has to catch it before customers do. That catch is strategy, not nitpicking. web.dev and accessibility standards keep that joint conversation honest about quality-[web.dev](https://web.dev/), [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/).",
    },
    {
      type: "h2",
      text: "What I optimise for now",
    },
    {
      type: "p",
      text: "I optimise for systems that create compounding understanding: positioning, experience design, and proof. Campaigns come after. That is the spine of my work at nau. Cross-industry work taught me the same constraints wear different clothes-[what I learned across AI, hospitality, and consumer](/essays/learned-working-across-ai-hospitality-consumer-products). The questions I ask before taking a client exist to protect this focus: [questions before any client](/essays/questions-i-ask-before-taking-any-client).",
    },
    {
      type: "p",
      text: "Figma, Notion, and Apple are often held up as taste examples. Taste matters. Taste without a decision map is interior design for the wrong house. I would rather ship a plainer page that converts a clear ICP than a gorgeous one that flatters the team. [Why beautiful websites don’t always convert](/essays/why-beautiful-websites-dont-always-convert) is the public version of that argument.",
    },
    {
      type: "h2",
      text: "A composite story from the decade",
    },
    {
      type: "p",
      text: "A hospitality startup once asked for “a bolder brand and more content.” Traffic was fine. Bookings were not. Calls revealed hosts feared damage and unclear payouts-not a lack of blog posts. We rewrote the offer around trust and payout clarity, rebuilt the first-run checklist to deliver one confirmed booking path, and cut three feature teasers that promised a future platform. Content came later, aimed at the objections we actually heard. Bookings moved. The brand got bolder after it had something true to say. The lesson was not “content is useless.” It was “sequence truth before volume.”",
    },
    {
      type: "quote",
      text: "Startups rarely fail from lack of ambition. They fail from lack of clarity under pressure.",
    },
    {
      type: "h2",
      text: "Try this: a ten-year lesson audit in one afternoon",
    },
    {
      type: "ol",
      items: [
        "Write your offer in one sentence. Remove every word a customer did not say in a recent call.",
        "List features shipped in 90 days. Mark which ones improved Core progress for the ICP.",
        "Open the homepage and onboarding side by side. Circle mismatches in promise vs first value.",
        "Pick one system habit to install this week (customer truth hour or mobile path review).",
        "Name one audience you will disappoint on purpose for the next quarter.",
      ],
    },
    {
      type: "p",
      text: "If the audit feels uncomfortable, you are doing it correctly. Comfort is what the fog feels like from the inside.",
    },
    {
      type: "faq",
      items: [
        {
          question: "Do these lessons change for deep tech or regulated markets?",
          answer:
            "The proof bar rises and cycles lengthen, but clarity, ICP focus, and coherent journeys still decide whether expertise becomes a product people can buy. Complexity is not an excuse for a fuzzy sentence.",
        },
        {
          question: "What about brand as a moat?",
          answer:
            "Brand compounds when the experience keeps the promise. Brand as varnish on confusion evaporates under sales scrutiny. Build the kept promise first.",
        },
        {
          question: "How do you handle conflicting lessons from advisors?",
          answer:
            "Return to stage metrics and customer language. Advisors are inputs. Leakage maps are judges. Ask what evidence would change the advice.",
        },
        {
          question: "Where should a new founder start?",
          answer:
            "Offer sentence, ICP exclusions, and time-to-first-value. Then distribution. The order in [if I joined tomorrow](/essays/if-i-joined-your-startup-tomorrow-what-id-do-first) is deliberate.",
        },
      ],
    },
    {
      type: "h2",
      text: "The decade, compressed",
    },
    {
      type: "ul",
      items: [
        "Progress over features.",
        "Sharp sentences over clever lines.",
        "Direction before velocity.",
        "Website as product, not brochure.",
        "Careful listening over roadmap theatre.",
        "Systems over spikes.",
      ],
    },
    {
      type: "p",
      text: "I still like beautiful work. I still like ambitious roadmaps. I just refuse to let either pretend they are strategy. Strategy is the set of choices that make progress obvious to the right customer-and make everything else wait its turn. Ten years in, that is still the work.",
    },
    {
      type: "cta",
      lead: "If you want a partner who builds from strategy outward, let’s talk.",
      button: "Start a project",
      href: "/contact",
    },
  ],
};

export default post;
