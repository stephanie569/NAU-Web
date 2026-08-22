import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "before-spend-10000-marketing-five-questions",
  title: "About to drop £10k on marketing? Answer these first.",
  excerpt:
    "A £10,000 marketing budget can create traction, or burn runway. These five questions decide which, and how to turn spend into a learning system instead of a hope ritual.",
  date: "July 27, 2026",
  category: "Go-to-Market",
  image: "/images/blog/blog-02-budget.png",
  metaDescription:
    "Five questions to answer before spending £10,000 on startup marketing, so budget goes to conversion and clarity, not wasted traffic and vague brand awareness.",
  content: [
    {
      type: "p",
      text: "£10,000 feels large enough to “do marketing” and small enough to spend without a thesis. That is a dangerous combination, roughly equivalent to buying a ticket to a destination you have not named.",
    },
    {
      type: "p",
      text: "Budget is not strategy. Without answers to five questions, spend becomes a hope ritual: ads, content, events, then a shrug when the dashboard does not move. Turn the money into a learning system, or keep it until the offer is clear enough to learn from.",
    },
    {
      type: "h2",
      text: "Spend vs learn",
    },
    {
      type: "table",
      headers: ["Question", "Bad answer", "Good answer"],
      rows: [
        [
          "Who?",
          "“Anyone who needs this”",
          "One segment you can reach and recognise",
        ],
        [
          "Message?",
          "Feature list as the ad",
          "Problem + outcome in their language",
        ],
        [
          "Conversion path?",
          "Traffic to a vague homepage",
          "Landing that matches the promise",
        ],
        [
          "Success metric?",
          "Impressions / vanity reach",
          "Leads, trials, or sales with a cost cap",
        ],
        [
          "Kill rule?",
          "“Give it more time”",
          "Date and threshold to stop or rewrite",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad consumer brand:** £10k into broad awareness before the homepage can explain the product in ten seconds. **Good consumer brand:** half the budget testing one clear offer to one audience, with a landing page that matches the creative.",
    },
    {
      type: "p",
      text: "**Bad travel / hospitality spend:** boosting pretty photos with no booking path or seasonal offer. **Good hospitality spend:** one campaign, one stay reason, one book CTA, measured by booked nights not likes.",
    },
    {
      type: "image",
      src: "/images/blog/blog-02-budget.png",
      alt: "Five questions before spending a £10k marketing budget",
    },
    {
      type: "h2",
      text: "How to turn £10k into a learning system",
    },
    {
      type: "ol",
      items: [
        "Write the segment and the offer in one sentence each. If either is fuzzy, pause spend.",
        "Fix the conversion path first: page, form, or checkout that matches the ad.",
        "Pick one primary channel for the test. Split attention kills learning.",
        "Define a success metric and a stop-loss before launch.",
        "Run creative that names the problem, not only the product.",
        "After the test window, keep what converted. Kill what only impressed.",
      ],
    },
    {
      type: "p",
      text: "[Think with Google](https://www.thinkwithgoogle.com/) is useful for measurement discipline. [First Round Review](https://review.firstround.com/) covers early go-to-market trade-offs without romance. Also read [where the first £1,000 often goes wrong](/essays/first-1000-pounds-startup-spent-wrong-place).",
    },
    {
      type: "callout",
      title: "Awareness is not a strategy",
      text: "If you cannot name who should convert and how, awareness spend mostly funds someone else’s learning curve on your brand.",
    },
    {
      type: "takeaway",
      text: "£10k is either a learning budget or a hope ritual. The five questions decide which.",
    },
    {
      type: "cta",
      lead: "Welcome to the journal. nau studio helps founders turn marketing spend into clear offers, conversion paths, and tests that teach.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
