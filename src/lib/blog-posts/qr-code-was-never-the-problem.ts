import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "qr-code-was-never-the-problem",
  title: "The QR code was never the problem",
  excerpt: "Why context matters far more than technology.",
  date: "July 31, 2026",
  category: "Go-to-market and campaign strategy",
  image: "/images/blog/blog-43-qr-code.png",
  metaDescription:
    "The QR code was never the problem—context was. Why promise-before-scan, placement, and bridge design matter far more than the scanning technology itself.",
  content: [
    {
      type: "p",
      text: "Every few years the industry rediscovers QR codes, declares them back, then blames the technology when campaigns flop. That is a category error. The QR code is a door. Doors are not interesting. What is on either side of the door—and why someone would walk through—is the entire craft.",
    },
    {
      type: "p",
      text: "I have seen QR codes work beautifully on a muddy festival fence and fail completely on a polished tube poster. Same technology. Different context. Different promise. Different aftermath. If your scan rates are embarrassing, do not start with a vendor conversation about dynamic codes and pixel tracking. Start with why a busy human should interrupt their day for you.",
    },
    {
      type: "p",
      text: "This piece is about bridge design: promise before scan, placement with manners, and destinations that repay the effort. It sits beside [why the internet still needs the real world](/blog/why-internet-still-needs-real-world) and [a good street campaign doesn’t end on the street](/blog/good-street-campaign-doesnt-end-on-street).",
    },
    {
      type: "h2",
      text: "What a QR code actually is (and is not)",
    },
    {
      type: "p",
      text: "A QR code is a deferred click. It moves someone from a physical context into a digital one with more friction than a thumb-tap on a phone they are already holding. That friction is not fatal. It is a filter. Filters are useful when the reward is clear. They are fatal when the reward is “learn more.”",
    },
    {
      type: "ul",
      items: [
        "It is not a creative idea.",
        "It is not a strategy.",
        "It is not proof of innovation.",
        "It is a bridge between two moments—if both moments deserve each other.",
      ],
    },
    {
      type: "takeaway",
      text: "If you cannot explain the reward in one spoken sentence at the placement site, the code is decoration. Related: [the best marketing feels like product design](/blog/best-marketing-feels-like-product-design).",
    },
    {
      type: "h2",
      text: "The promise → scan → payoff bridge",
    },
    {
      type: "p",
      text: "I evaluate QR usage with a three-part bridge. Fail any span and the whole thing collapses—usually onto a slow landing page that looks like it was built for desktop in 2019.",
    },
    {
      type: "table",
      headers: ["Span", "Job", "Common failure"],
      rows: [
        [
          "Promise",
          "Tell them what they get before they unlock their phone",
          "“Scan for more” / logo-only codes",
        ],
        [
          "Scan",
          "Make the physical act easy and socially comfortable",
          "Tiny codes, glare, awkward height, queues",
        ],
        [
          "Payoff",
          "Deliver the promised value in under five seconds",
          "Homepage dump, app-store maze, lead-form ambush",
        ],
      ],
    },
    {
      type: "p",
      text: "Promise is the most neglected. Marketers obsess over code aesthetics and UTM hygiene while putting nothing human-readable next to the square. Strangers do not scan mysteries unless the mystery is the product—and even then, only if the culture around it supports play.",
    },
    {
      type: "image",
      src: "/images/blog/blog-mid-02.png",
      alt: "Physical poster with a clear promise beside a QR code rather than a code alone",
    },
    {
      type: "h2",
      text: "Context is the strategist",
    },
    {
      type: "h3",
      text: "1. Time context",
    },
    {
      type: "p",
      text: "A commute scan must be faster than a gallery scan. A queue can tolerate a slightly richer payoff than a pavement dash. Design for the seconds people actually have—not the seconds your analytics dashboard wishes they had.",
    },
    {
      type: "h3",
      text: "2. Social context",
    },
    {
      type: "p",
      text: "People avoid looking foolish. Asking someone to stand in the middle of a busy pavement, unlock their phone, open a camera, and aim at a 3cm code is a social ask. Raise the code. Enlarge it. Give them a reason that feels clever rather than obedient. Privacy matters too: do not force a performance in a space where people feel watched.",
    },
    {
      type: "h3",
      text: "3. Intent context",
    },
    {
      type: "p",
      text: "A menu QR at a table has high intent. A billboard QR on a motorway has near-zero intent and a non-trivial crash risk. Intent is not a vibe. It is a physical fact about what people are doing with their hands and eyes.",
    },
    {
      type: "callout",
      title: "Try this",
      text: "Stand at the placement for ten minutes and narrate out loud what a stranger would have to stop doing in order to scan. If the list includes “risk my safety,” “look like a tourist,” or “abandon my child,” redesign. More on observation: [why your next campaign should start with a walk](/blog/next-marketing-campaign-should-start-with-walk).",
    },
    {
      type: "h2",
      text: "Misuse patterns I keep seeing",
    },
    {
      type: "ol",
      items: [
        "The orphan code: no promise, no brand story, just a square and hope.",
        "The homework code: lands on a PDF or a 12-field form.",
        "The vanity code: exists because a stakeholder saw QR codes “working” elsewhere.",
        "The duplicate destination: every code goes to the homepage, destroying learning.",
        "The desktop destination: tiny tap targets, pop-ups, cookie banners eating the payoff.",
      ],
    },
    {
      type: "p",
      text: "None of these are technology problems. They are manners problems. You have invited someone across a bridge and then forgotten to meet them.",
    },
    {
      type: "takeaway",
      text: "A QR code without a designed aftermath is not interactive marketing. It is a scavenger hunt with no prize.",
    },
    {
      type: "h2",
      text: "Designing the payoff like a product surface",
    },
    {
      type: "p",
      text: "Treat the post-scan page as a first-run experience. One job. One primary action. Proof adjacent to the claim. Fast load. No bait-and-switch. If the poster promised a map, open the map. If it promised a sample request, show a three-field form—not your company’s life story.",
    },
    {
      type: "ul",
      items: [
        "Unique URL per placement so you can learn which contexts convert.",
        "Mobile-first layout tested on mid-range Android in sunlight.",
        "Offline fallback where relevant (festival wifi is a rumour).",
        "A thank-you state that can be screenshotted—people like receipts.",
      ],
    },
    {
      type: "p",
      text: "This is the same discipline as web conversion work—see [why beautiful websites don’t always convert](/blog/why-beautiful-websites-dont-always-convert) and [why startup websites fail in the first 10 seconds](/blog/why-startup-websites-fail-first-10-seconds)—applied to a colder start. The user did not search for you. They interrupted themselves for you. Repay that.",
    },
    {
      type: "h2",
      text: "When QR is the wrong tool",
    },
    {
      type: "p",
      text: "Sometimes the honest answer is: do not use one. If the physical piece can carry the whole message, let it. If SMS shortlinks or near-field alternatives fit the environment better, use them. If the audience is older and less camera-fluent in that context, design for them instead of lecturing them about “how easy QR is now.” Technology worship is not strategy.",
    },
    {
      type: "p",
      text: "For broader thinking on physical-digital systems, read [why the best marketing doesn’t always start behind a screen](/blog/best-marketing-doesnt-always-start-behind-screen) and [your city is the most underrated marketing channel](/blog/your-city-most-underrated-marketing-channel).",
    },
    {
      type: "h2",
      text: "A one-day QR audit",
    },
    {
      type: "ol",
      items: [
        "Inventory every live code and its destination.",
        "Rewrite the on-site promise in six words or fewer.",
        "Check size, height, contrast, and glare at the real location.",
        "Time the path from scan to promised value on a mid-range phone.",
        "Kill or redirect any code that dumps to a generic homepage.",
        "Add one metric that matters (completion of the promised action)—not just scans.",
      ],
    },
    {
      type: "callout",
      title: "Exercise: the stranger script",
      text: "Write the exact words a staff member would say if someone asked “why should I scan that?” If you cannot answer without jargon, the poster cannot answer either. Put that spoken sentence on the creative.",
    },
    {
      type: "h2",
      text: "Useful references",
    },
    {
      type: "p",
      text: "For interaction clarity under real-world constraints, [Nielsen Norman Group](https://www.nngroup.com/) remains grounding. For mobile performance as part of trust, see [Core Web Vitals](https://web.dev/articles/vitals). For accessibility and inclusive design of public information, the [GOV.UK Design System](https://design-system.service.gov.uk/) is a masterclass in not making citizens suffer for your cleverness.",
    },
    {
      type: "faq",
      items: [
        {
          question: "Are dynamic QR codes worth it?",
          answer:
            "Yes for iteration and safety (you can change destinations). No as a substitute for a clear promise. Dynamic plumbing does not fix a boring bridge.",
        },
        {
          question: "What scan rate should we expect?",
          answer:
            "It depends entirely on context and promise. Compare like-for-like placements. A single industry benchmark without context is mostly fiction.",
        },
        {
          question: "Should every piece of OOH include a QR?",
          answer:
            "No. Include one when the digital layer adds a value the physical layer cannot. Otherwise you are adding friction for the sake of looking modern.",
        },
        {
          question: "How do we attribute revenue?",
          answer:
            "Unique destinations, simple conversion events, and honesty about assist vs last-click. Do not torture the model until it flatters the poster.",
        },
      ],
    },
    {
      type: "h2",
      text: "Fix the bridge, not the square",
    },
    {
      type: "p",
      text: "The QR code was never the problem. Ambiguous promises, rude placements, and disappointing destinations were. Get those right and the square becomes invisible in the best way: people use it without thinking about the technology at all.",
    },
    {
      type: "p",
      text: "At nau, I treat QR—and any physical-to-digital handoff—as product design in public. Context first. Promise second. Payoff third. Tracking last. If you reverse that order, you get dashboards full of scans and customers full of regret.",
    },
    {
      type: "cta",
      lead: "Have a physical-to-digital bridge that isn’t earning its keep?",
      button: "Let’s redesign the context",
      href: "/contact",
    },
  ],
};

export default post;
