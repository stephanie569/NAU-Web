import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "dont-let-ai-become-your-personality",
  title: "Don't outsource your personality to ChatGPT",
  excerpt: "Automation is useful. Authenticity is harder to automate.",
  date: "August 15, 2026",
  category: "Go-to-Market",
  image: "/images/blog/blog-53-ai-personality.png",
  metaDescription:
    "How to use AI for content and marketing without diluting your brand voice-practical rules for authenticity when automation makes average fluency easy.",
  content: [
    {
      type: "p",
      text: "I can usually tell when a brand has handed its personality to a model. The tells are polite and deadly: symmetrical paragraphs, frictionless enthusiasm, zero texture, and a strange inability to dislike anything. Everything is “exciting.” Nothing is specific. The company sounds like a well-meaning intern who has read every homepage on the internet and learned nothing from a single customer.",
    },
    {
      type: "p",
      text: "Automation is useful. Authenticity is harder to automate. Don’t let AI become your personality. Use it as labour. Keep the quirks, constraints, and convictions that make a human voice recognisable-and a brand trustworthy.",
    },
    {
      type: "p",
      text: "This piece is about voice dilution, how to build guardrails so tools accelerate without homogenising, and why authenticity is not a vibe but a set of editorial decisions. Related: [AI can write your content; it can’t replace your perspective](/essays/ai-can-write-content-cant-replace-perspective).",
    },
    {
      type: "p",
      text: "You do not need to become a poet. You need to become harder to substitute. In a market where everyone can generate competent paragraphs, the brands that win are the ones that still sound like a particular intelligence-one that has met customers, made trade-offs, and is willing to say so.",
    },
    {
      type: "h2",
      text: "What voice dilution actually looks like",
    },
    {
      type: "p",
      text: "Dilution is gradual. First the model “improves” a rough note into something smoother. Then the team prefers the smooth version because it feels safer. Then every channel converges on the same safe cadence. Then customers cannot tell you from the three competitors who made the same bargain. Nobody chose blandness in a meeting. Blandness arrived as a series of convenient edits.",
    },
    {
      type: "ul",
      items: [
        "Hedging language where you used to take a position.",
        "Adjective stacks replacing concrete nouns.",
        "Identical rhythm across emails, ads, and product UI.",
        "Loss of humour, bluntness, or regional texture that once signalled “real people work here.”",
        "Customer phrases replaced by category jargon the model prefers.",
      ],
    },
    {
      type: "takeaway",
      text: "Voice is not a font. It is a pattern of choices. Automate the labour; do not automate the choices that constitute identity.",
    },
    {
      type: "h2",
      text: "Authenticity is a system, not a mood",
    },
    {
      type: "p",
      text: "Founders often treat authenticity as sincerity of feeling. Feelings do not scale. Systems do. An authentic brand voice is a documented set of permissions and prohibitions: what we say, what we never say, which metaphors we own, which customer words we preserve, how we handle disagreement. Without that system, every prompt becomes a roll of the dice-and the dice are weighted toward the median.",
    },
    {
      type: "p",
      text: "People trust people before they trust marketing. A homogenised brand voice is marketing that forgot it needed a person underneath. See [people trust people before they trust marketing](/essays/people-trust-people-before-they-trust-marketing).",
    },
    {
      type: "table",
      headers: ["Signal of human voice", "Signal of model-median voice", "Editorial fix"],
      rows: [
        [
          "Specific trade-offs named",
          "Universal benefits claimed",
          "Require one cost or constraint per piece",
        ],
        [
          "Customer language preserved",
          "Category buzzwords inserted",
          "Keep a living glossary of sacred phrases",
        ],
        [
          "Uneven rhythm, occasional bluntness",
          "Even, always-pleasant cadence",
          "Edit for texture after generation",
        ],
        [
          "Opinions that could be challenged",
          "Consensus restated politely",
          "Start from a stake, not a topic",
        ],
        [
          "Local detail and lived examples",
          "Abstract scenarios",
          "Ban invented case studies",
        ],
      ],
    },
    {
      type: "quote",
      text: "If your brand could swap logos with a competitor and nobody would notice the copy, you do not have a voice. You have a template with a colour palette.",
    },
    {
      type: "h2",
      text: "A framework: capture → codify → constrain → correct",
    },
    {
      type: "h3",
      text: "1. Capture: collect the voice before you automate it",
    },
    {
      type: "p",
      text: "Before scaling generation, gather artefacts that already sound like you: founder emails that got replies, support replies customers thanked, a sales deck sentence that landed, a rant you edited into something publishable. Authenticity needs source material. Models remix; they do not remember your Tuesday.",
    },
    {
      type: "callout",
      title: "Exercise: the voice crate",
      text: "Create a folder with ten artefacts that sound unmistakably like your brand-and five that sound like “corporate generic.” Write three bullet rules that separate the two piles. Those bullets become your first voice spec. Do not skip the negative pile; knowing what you are not is half the personality.",
    },
    {
      type: "h3",
      text: "2. Codify: turn taste into rules people can follow",
    },
    {
      type: "p",
      text: "A voice spec need not be a novel. One page is enough: tone spectrum, words we favour, words we ban, humour allowance, certainty level, how we talk about competitors, how we admit limits. Codify enough that a contractor-or a model-can stay inside the fence. Related: [why I care more about systems than campaigns](/essays/why-i-care-more-about-systems-than-campaigns).",
    },
    {
      type: "h3",
      text: "3. Constrain: put the fence inside the prompt and the process",
    },
    {
      type: "p",
      text: "Constraints are kindness. Tell the tool what not to do. Provide examples. Require structure options before final prose. Never ask for “engaging LinkedIn post about our product” with no spine. Curiosity still beats clever prompting-see [the best prompt is still a good question](/essays/best-prompt-is-still-good-question)-but questions without constraints still produce median answers.",
    },
    {
      type: "ol",
      items: [
        "Paste the voice rules into the system brief every time (or store them as a reusable template).",
        "Provide two positive examples and one anti-example.",
        "Ask for outlines first; approve the stake before drafting.",
        "Generate, then human-edit for texture-not the reverse.",
        "Reject any draft that removes a necessary edge to sound “nicer.”",
      ],
    },
    {
      type: "h3",
      text: "4. Correct: treat drift as a weekly maintenance job",
    },
    {
      type: "p",
      text: "Voice drifts under deadline pressure. Schedule a fifteen-minute review: pick three recent outputs, score them against the voice crate, note new banned phrases the model invented. Correction is how authenticity survives scale. Consistency of voice is a form of earned trust-as is consistency of publishing: [the internet rewards consistency more than brilliance](/essays/internet-rewards-consistency-more-than-brilliance).",
    },
    {
      type: "takeaway",
      text: "Capture real voice. Codify rules. Constrain generation. Correct drift. Personality is maintained, not hoped for.",
    },
    {
      type: "image",
      src: "/images/blog/blog-mid-07.png",
      alt: "A distinct brand voice staying clear while automated drafts stay in the background",
    },
    {
      type: "h2",
      text: "A fictional contrast: two founder newsletters",
    },
    {
      type: "p",
      text: "Founder A pastes rough notes into a model and ships the “improved” version untouched. Within two months the newsletter sounds like a productivity blog with a different logo. Unsubscribes rise among early fans who liked the bluntness. Founder B keeps a voice crate, generates structure from a stake, then reinserts the awkward sentence that was true. Same tools. Different identity outcome.",
    },
    {
      type: "h2",
      text: "Using AI without sounding like a model",
    },
    {
      type: "p",
      text: "Practical habits beat philosophy. Write the ugly first sentence yourself. Keep numbers that are real. Prefer verbs that describe work over adjectives that describe aspiration. Allow one opinion per piece that a competitor would not risk. Read drafts aloud; models rarely survive the ear test when they have sanded off personality.",
    },
    {
      type: "ul",
      items: [
        "Human first line or last line-often both.",
        "At least one lived detail the model could not invent.",
        "One deliberate refusal (what you will not claim).",
        "Edit pass dedicated to removing false symmetry.",
        "Separate “clarity edit” from “nice-ify edit”; keep the first, distrust the second.",
      ],
    },
    {
      type: "h2",
      text: "Brand authenticity under deadline pressure",
    },
    {
      type: "p",
      text: "Deadlines are where personality dies. Someone needs a post by 4pm. The model offers something acceptable. Acceptable ships. Multiply that by sixty days and you have trained your audience-and your team-to expect bland competence. Recovering a voice after that is harder than protecting it weekly.",
    },
    {
      type: "p",
      text: "Build a pre-ship checklist that is short enough to survive a bad day: stake present, lived detail present, banned phrase absent, human line intact, claim still true. If a draft fails two checks, it does not ship-even if the calendar looks empty. Empty calendars recover. Diluted brands do not recover on demand. Organic attention still has to be earned with something recognisable: [organic growth isn’t free-it’s earned](/essays/organic-growth-isnt-free-its-earned).",
    },
    {
      type: "p",
      text: "Founders sometimes worry that protecting voice means sounding eccentric for its own sake. It does not. It means sounding true. True can be quiet, precise, and unfashionable. True can also be warm. What it cannot be is the median of every landing page the model has ever seen. If you need a second opinion, ask a long-time customer which recent post “sounded like you.” Their answer is better research than another prompt trick.",
    },
    {
      type: "ol",
      items: [
        "Write the five-check list above into your publishing tool or Notion template.",
        "Assign one person as voice owner for the month (rotate if needed).",
        "Reject “we’ll fix voice in the next batch”-batches are how drift becomes culture.",
        "Keep a public internal channel for “sentences that sound like us.”",
        "Once a month, rewrite one successful AI-assisted piece from scratch as a calibration exercise.",
      ],
    },
    {
      type: "callout",
      title: "Exercise: the swap test",
      text: "Take your homepage hero, your latest email, and one social post. Cover the logo and brand name. Ask two people who know your market whether they can identify the company. If they cannot, you do not have a personality problem in theory-you have one in the artefacts. Rewrite the identifiable line first; let AI help only after that line exists.",
    },
    {
      type: "callout",
      title: "Try this",
      text: "Take a recent AI-assisted post. Highlight every sentence that could appear on three competitors’ sites. Rewrite only the highlighted sentences from a stake. Keep the rest if it is structurally useful. You will feel the personality return where the generic claims used to sit.",
    },
    {
      type: "h2",
      text: "What research is useful for",
    },
    {
      type: "p",
      text: "For how brand meaning forms through repeated signals, [Harvard Business Review](https://hbr.org/) is consistently useful. [Nielsen Norman Group](https://www.nngroup.com/) helps when voice must become UX microcopy without losing clarity. The [Content Design London](https://contentdesign.london/) community materials are practical on plain language that still has character-authenticity is rarely the same as ornament.",
    },
    {
      type: "h2",
      text: "How this shows up in my work at nau",
    },
    {
      type: "p",
      text: "I help teams build voice systems alongside growth systems-so AI can draft without flattening the brand into category mush. Marketing should still feel designed, not mass-produced: [the best marketing feels like product design](/essays/best-marketing-feels-like-product-design). And when you decide what to automate versus what to own, keep judgement human: [AI should handle the repetition; you should keep the judgement](/essays/ai-should-handle-repetition-you-keep-judgement).",
    },
    {
      type: "p",
      text: "If your team argues that “customers don’t notice voice,” ask sales what phrases buyers repeat back. They notice. They may not use the word authenticity. They use trust. Voice is one of the cheapest trust signals you still fully control.",
    },
    {
      type: "faq",
      items: [
        {
          question: "Isn’t a consistent AI voice better than an inconsistent human one?",
          answer:
            "Consistency matters. Homogeneity does not. Aim for consistent human standards-not consistently median prose.",
        },
        {
          question: "What if our founders are not natural writers?",
          answer:
            "Capture speech. Interview them. Transcribe. Distil rules from how they talk when they are not performing. Writing skill can be supported; personality should not be replaced.",
        },
        {
          question: "How do we stay authentic in regulated industries?",
          answer:
            "Authenticity can be precise and careful. Document approved claims, then invest personality in process, customer reality, and clarity-not in reckless promises.",
        },
        {
          question: "Can we use AI for social and keep humans for the website?",
          answer:
            "You can-but customers experience one brand. If social becomes generic, the website’s care starts to look like a costume. Apply the same voice system everywhere, with different depth.",
        },
      ],
    },
    {
      type: "h2",
      text: "Keep the strange bits",
    },
    {
      type: "p",
      text: "Models are excellent at making you sound like everyone who trained them. Your job is to keep the strange bits that make you recognisable: the blunt sentence, the specific example, the refusal, the humour that is actually yours. Automation can carry the load. It should not wear your face. Don’t let AI become your personality. Let it become your assistant-and keep the personality where trust lives.",
    },
    {
      type: "cta",
      lead: "Want help building a voice and content system that stays human while tools handle the busywork?",
      button: "Talk about your brand voice",
      href: "/contact",
    },
  ],
};

export default post;
