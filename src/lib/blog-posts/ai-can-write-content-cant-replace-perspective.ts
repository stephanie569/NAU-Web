import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "ai-can-write-content-cant-replace-perspective",
  title: "AI can write the post. It can't be you.",
  excerpt:
    "Tools can draft paragraphs. They cannot decide what you uniquely see, and that is still the scarce advantage.",
  date: "August 17, 2026",
  category: "Go-to-Market",
  image: "/images/blog/blog-51-ai-perspective.png",
  metaDescription:
    "AI can draft content at speed, but perspective remains the scarce advantage. How to use generation tools without losing the point of view that makes work worth reading.",
  content: [
    {
      type: "p",
      text: "Founders paste a bland brief into a model, receive a polished paragraph, and look briefly relieved, as if marketing had been solved by fluent sentences. The sentences are fine. Fine sentences are now as common as gravity, which is useful for holding things down and useless as a differentiator.",
    },
    {
      type: "p",
      text: "AI can write your content. It cannot replace your perspective. Perspective is what you notice after contact with customers, markets, and trade-offs. Without it, posts skim cleanly and leave no residue. People nod, forget, and move on to the next interchangeable insight.",
    },
    {
      type: "h2",
      text: "Fluency vs perspective",
    },
    {
      type: "table",
      headers: ["Moment", "Bad (fluent only)", "Good (perspective first)"],
      rows: [
        [
          "Brief",
          "Write a LinkedIn post about our launch",
          "Name the tension we saw in five customer calls this week",
        ],
        [
          "Opening",
          "Generic category wisdom",
          "A specific observation only your team could make",
        ],
        [
          "Proof",
          "Buzzwords and soft claims",
          "A customer sentence, a failed experiment, a clear trade-off",
        ],
        [
          "Edit pass",
          "Make it sound more professional",
          "Cut anything that could have come from a competitor",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad SaaS content:** a model-written post about “unlocking synergies” that could sit on any competitor’s blog with a find-and-replace. **Good SaaS content:** the one awkward onboarding moment you refused to ignore, told in plain language, with the fix you shipped.",
    },
    {
      type: "p",
      text: "**Bad outdoor brand:** lifestyle captions that sound like every other jacket brand on the internet. **Good outdoor brand:** what actually failed on a wet ridge, and what you changed in the next run. Same product. Different reason to keep reading.",
    },
    {
      type: "image",
      src: "/images/blog/blog-51-ai-perspective.png",
      alt: "AI can draft content; perspective remains the scarce advantage",
    },
    {
      type: "h2",
      text: "How to keep perspective when you use AI",
    },
    {
      type: "ol",
      items: [
        "Write the point of view in one sentence before you open any tool. If you cannot, research first.",
        "Feed the model your notes, customer quotes, and constraints. Never feed it a blank “write about X.”",
        "Draft with AI if you want speed. Edit by deleting everything that could belong to a rival.",
        "Require one concrete detail per piece: a number, a failure, a named trade-off, or a real customer line.",
        "Publish less when the calendar is full but the perspective is empty. Volume without a point of view trains people to ignore you.",
      ],
    },
    {
      type: "p",
      text: "For how teams mis-assign AI work, see [let AI do the boring bits](/essays/ai-should-handle-repetition-you-keep-judgement). On why selection beats speed, [First Round Review](https://review.firstround.com/) and [Harvard Business Review](https://hbr.org/) both keep returning to judgement as the scarce skill when output gets cheap.",
    },
    {
      type: "callout",
      title: "A quick test",
      text: "Cover the logo. If the piece still sounds like it could only come from your team, keep it. If it sounds like category wallpaper, rewrite from a real observation.",
    },
    {
      type: "takeaway",
      text: "AI multiplies fluency. Perspective is still the moat, and only you can supply it.",
    },
    {
      type: "cta",
      lead: "Welcome to the journal. nau studio helps product brands turn research and positioning into content that sounds like them, not like everyone else.",
      button: "Visit nau studio",
      href: "/",
    },
  ],
};

export default post;
