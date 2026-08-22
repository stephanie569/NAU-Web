import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "dont-let-ai-become-your-personality",
  title: "Don't outsource your personality to ChatGPT",
  excerpt:
    "AI makes average fluency cheap. Brand voice still needs opinions, texture, and a human who will say no.",
  date: "August 15, 2026",
  category: "Go-to-Market",
  image: "/images/blog/blog-53-ai-personality.png",
  metaDescription:
    "How to use AI for marketing without diluting brand voice: bad vs good habits, industry examples, and a practical editorial checklist.",
  content: [
    {
      type: "p",
      text: "I can usually tell when a brand has handed its personality to a model. The prose is polite, symmetrical, and strangely unable to dislike anything. Everything is exciting. Nothing is specific. It is the literary equivalent of a hotel lobby that smells of nothing in particular and therefore smells of everywhere.",
    },
    {
      type: "p",
      text: "Automation is useful. Authenticity is harder to automate. When every channel converges on frictionless enthusiasm, customers cannot tell you from the three competitors who made the same bargain. Voice dilution rarely arrives as a decision. It arrives as a series of convenient edits.",
    },
    {
      type: "h2",
      text: "Bad AI habits vs good AI habits",
    },
    {
      type: "table",
      headers: ["Moment", "Bad", "Good"],
      rows: [
        [
          "Drafting",
          "Paste a prompt and publish the first fluent output",
          "Paste rough notes; keep your verbs and vetoes",
        ],
        [
          "Editing",
          "Smooth until every sentence sounds safe",
          "Protect one sharp opinion and one concrete detail",
        ],
        [
          "Voice",
          "Same cadence across email, ads, and support",
          "Channel rules with a shared point of view",
        ],
        [
          "Proof",
          "Generic claims the model invents",
          "Customer language, numbers, and constraints you verified",
        ],
        [
          "Review",
          "Ship because it sounds professional",
          "Ask: would a competitor refuse to say this?",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad SaaS brand:** homepage paragraphs that could belong to any B2B tool, hedged enthusiasm, and a blog that never names a trade-off. Readers feel nothing because nothing was risked. **Good product brand:** a short list of what you will not build, written in human language, then AI used only to tighten structure around that spine.",
    },
    {
      type: "p",
      text: "**Bad consumer brand:** captions that begin with “Excited to announce” and end with five hashtags the model suggested. **Good outdoor or hospitality brand:** one memorable constraint (weather, neighbourhood, repair) that a model cannot invent without your field notes.",
    },
    {
      type: "image",
      src: "/images/blog/blog-53-ai-personality.png",
      alt: "Illustration about keeping human personality when using AI",
    },
    {
      type: "h2",
      text: "What to do this week",
    },
    {
      type: "ol",
      items: [
        "Write a one-page voice brief: three words you use, three you ban, one belief you will defend in public.",
        "Collect ten sentences customers actually said. Make them mandatory source material before any model draft.",
        "For the next five pieces, generate a draft only after you write the ugly first paragraph yourself.",
        "Add a review gate: if the piece has no specific noun, number, or refusal, it does not ship.",
        "Audit last month’s content. Flag anything a competitor could publish unchanged. Rewrite those first.",
      ],
    },
    {
      type: "p",
      text: "For practical writing research on how people scan and decide, see [Nielsen Norman Group](https://www.nngroup.com/). Related: [AI can write your content; it can’t replace your perspective](/essays/ai-can-write-content-cant-replace-perspective).",
    },
    {
      type: "callout",
      title: "A simple test",
      text: "Read the piece aloud. If you would never say it to a customer on a call, do not put it on the homepage. Fluency is not voice.",
    },
    {
      type: "takeaway",
      text: "AI should handle repetition. You keep judgement, texture, and the sentences a competitor would refuse to copy.",
    },
    {
      type: "cta",
      lead: "nau studio helps product brands keep a sharp point of view while using AI for speed, not sameness.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
