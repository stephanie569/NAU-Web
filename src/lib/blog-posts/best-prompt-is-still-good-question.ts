import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "best-prompt-is-still-good-question",
  title: "Your best prompt is still a better question",
  excerpt: "Why curiosity will outlast prompt engineering.",
  date: "August 14, 2026",
  category: "Go-to-Market",
  image: "/images/blog/blog-54-good-question.png",
  metaDescription:
    "Prompt engineering tricks fade. Curiosity and good questions remain the durable skill for research, strategy, and useful AI-assisted work.",
  content: [
    {
      type: "p",
      text: "Prompt libraries multiply like umbrellas in an office: always available, rarely the reason anything got done. A clever prompt can polish an answer. It cannot invent a question worth asking.",
    },
    {
      type: "p",
      text: "Your best prompt is still a better question. Curiosity outlasts prompt engineering because models amplify whatever you aim them at. Vague aims produce fluent mush. Sharp questions produce useful drafts, research angles, and decisions.",
    },
    {
      type: "h2",
      text: "Prompt tricks vs good questions",
    },
    {
      type: "table",
      headers: ["Task", "Bad (prompt theatre)", "Good (question first)"],
      rows: [
        [
          "Research",
          "“Summarise this market”",
          "“Who already tried to solve X and why did they quit?”",
        ],
        [
          "Positioning",
          "“Write a value prop”",
          "“What progress is the buyer hiring us for?”",
        ],
        [
          "Content",
          "“Make it viral”",
          "“What tension did we see that competitors ignore?”",
        ],
        [
          "Product",
          "“Suggest features”",
          "“Where do users get stuck before value?”",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad SaaS habit:** prompting for a homepage rewrite without customer language. **Good SaaS habit:** collecting five stuck-moment quotes, then asking the model to draft from those quotes only.",
    },
    {
      type: "p",
      text: "**Bad travel / hospitality habit:** “write Instagram captions about luxury.” **Good habit:** “what anxiety do first-time visitors have about this neighbourhood, and how do we remove it?” Same tools. Different aim.",
    },
    {
      type: "image",
      src: "/images/blog/blog-54-good-question.png",
      alt: "Better questions beat prompt engineering tricks",
    },
    {
      type: "h2",
      text: "How to work question-first with AI",
    },
    {
      type: "ol",
      items: [
        "Write the decision you need before you open a tool.",
        "Turn it into one sharp question a human could answer in an interview.",
        "Gather notes, quotes, or constraints. Feed those in, not a blank vibe.",
        "Use AI to expand, cluster, or draft. Keep the question ownership human.",
        "Reject answers that are fluent but do not change a decision.",
        "Keep a running list of questions that produced useful work. Retire prompt trivia.",
      ],
    },
    {
      type: "p",
      text: "Related: [AI can write the post; it cannot be you](/essays/ai-can-write-content-cant-replace-perspective). For research discipline, [First Round Review](https://review.firstround.com/) and [Harvard Business Review](https://hbr.org/) still reward better questions over better templates.",
    },
    {
      type: "takeaway",
      text: "Prompt tricks expire. Curiosity does not. Aim the tool with a question worth answering.",
    },
    {
      type: "cta",
      lead: "Welcome to the journal. nau studio starts with research questions so strategy and content have somewhere true to aim.",
      button: "Visit nau studio",
      href: "/",
    },
  ],
};

export default post;
