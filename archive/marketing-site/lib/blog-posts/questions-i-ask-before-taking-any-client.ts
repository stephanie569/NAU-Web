import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "questions-i-ask-before-taking-any-client",
  title: "The questions I ask before I take any product brand",
  excerpt:
    "Five fit questions that protect both sides from polite failure before research or launch work begins.",
  date: "July 9, 2026",
  category: "Research & Positioning",
  image: "/images/blog/blog-17-client-questions.png",
  metaDescription:
    "The questions I ask before taking a product brand client: decision, learning, authority, willingness to cut, and success in 30 and 90 days.",
  content: [
    {
      type: "p",
      text: "Not every project is a fit. The universe is full of collaborations that look friendly, feel busy, and change nothing. Charm is not a brief. Budget is not a strategy. And “we just need a quick redesign” is occasionally true, but more often a symptom wearing lipstick.",
    },
    {
      type: "p",
      text: "Before I say yes, I ask questions that detect whether we can increase learning speed together. Founders can use the same list in reverse: if you cannot answer them well, you may need a clarity sprint before a build sprint.",
    },
    {
      type: "h2",
      text: "Weak fit vs strong fit",
    },
    {
      type: "table",
      headers: ["Question", "Bad signal", "Good signal"],
      rows: [
        [
          "Customer decision",
          "“We need more leads / a refresh”",
          "Named job and belief gap",
        ],
        [
          "Prior attempts",
          "Blame-only stories or “we haven’t tried”",
          "Specific experiments and lessons",
        ],
        [
          "Decision speed",
          "Committee fog, month-long approvals",
          "Clear owner, weekly shipping possible",
        ],
        [
          "Willingness to cut",
          "Attachment to every feature and channel",
          "Curiosity about focus",
        ],
        [
          "Success definition",
          "“Make it pop” / “more brand”",
          "Measurable 30 and 90 day outcomes",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad:** chemistry without constraints. Everyone likes each other, nobody can ship, and the work becomes polite theatre. **Good:** urgency with a real constraint, authority to decide, and openness to cut copy, features, or channels that do not serve the customer decision.",
    },
    {
      type: "image",
      src: "/images/blog/blog-17-client-questions.png",
      alt: "Client fit questions before starting product brand work",
    },
    {
      type: "h2",
      text: "Run the fit check in one call",
    },
    {
      type: "ol",
      items: [
        "Ask what decision you are trying to make easier for customers.",
        "Ask what you have already tried, and what you learned.",
        "Confirm who decides, and how quickly changes can ship.",
        "Test openness to cutting features, copy, or channels.",
        "Define success in 30 days and 90 days in one sentence each.",
        "If answers stay vague, pause the build and run a clarity sprint first.",
      ],
    },
    {
      type: "p",
      text: "[First Round Review](https://review.firstround.com/) and [Y Combinator’s Library](https://www.ycombinator.com/library) both circle the same theme: early companies need partners who increase learning speed, not vanity output. Related: [before you spend £10,000 on marketing, five questions](/essays/before-spend-10000-marketing-five-questions).",
    },
    {
      type: "takeaway",
      text: "Good fit is mutual protection: you get outcomes; I get conditions where outcomes are possible.",
    },
    {
      type: "cta",
      lead: "If you want a partner who starts with fit questions instead of a moodboard, nau studio begins with research and positioning.",
      button: "Visit nau studio",
      href: "/",
    },
  ],
};

export default post;
