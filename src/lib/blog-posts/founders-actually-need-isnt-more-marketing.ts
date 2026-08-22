import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "founders-actually-need-isnt-more-marketing",
  title: "Product brands don't need more marketing. They need this.",
  excerpt:
    "When the fix isn't another campaign, it's research, positioning, and a story the product can keep.",
  date: "July 7, 2026",
  category: "Research & Positioning",
  image: "/images/blog/blog-19-not-marketing.png",
  metaDescription:
    "What product brands actually need instead of more marketing: clarity, positioning, and go-to-market that matches the product.",
  content: [
    {
      type: "p",
      text: "“We need more marketing” is often code for “we need more results.” The missing ingredient is rarely volume. It is coherence. More volume applied to incoherence is just a louder version of the same problem, like turning up the music to fix a flat tyre. Energetic. Irrelevant.",
    },
    {
      type: "p",
      text: "More content, more ads, more social, more events: sometimes those are right. Often they are a bypass around harder work. Offer clarity, conversion design, activation, proof, and learning. Diagnose the constraint before you amplify.",
    },
    {
      type: "h2",
      text: "More volume vs the real constraint",
    },
    {
      type: "table",
      headers: ["Symptom", "Bad response", "Better response"],
      rows: [
        [
          "Soft pipeline",
          "Double ad spend",
          "Can strangers explain the offer?",
        ],
        [
          "Content that ignores",
          "Post more often",
          "Say one sharp thing worth remembering",
        ],
        [
          "Demos that stall",
          "More nurture sequences",
          "Fix first value and proof on the site",
        ],
        [
          "High churn",
          "Win-back campaigns",
          "Match promise to product in week one",
        ],
        [
          "Team anxiety",
          "Another channel experiment",
          "Name the bottleneck: clarity, activation, or distribution",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad SaaS habit:** buying top-of-funnel while the homepage still hedges and onboarding never delivers the sold outcome. You pay more for the same drop-offs. **Good SaaS habit:** tighten positioning and first-value path, then spend. Growth follows a story the product can keep.",
    },
    {
      type: "p",
      text: "**Bad consumer brand:** calendar full of posts, empty of reasons to care. **Good consumer brand:** one memorable job, proof in use, then distribution that does not apologise for specificity.",
    },
    {
      type: "image",
      src: "/images/blog/blog-19-not-marketing.png",
      alt: "Illustration about needing clarity instead of more marketing",
    },
    {
      type: "h2",
      text: "What to do instead of “more marketing”",
    },
    {
      type: "ol",
      items: [
        "Ask: if traffic doubled tomorrow, would the experience convert and retain?",
        "If no, fix clarity, CTA, proof, or activation before buying volume.",
        "Write the offer in one sentence a customer could repeat. Use that everywhere.",
        "Map drop-offs from visit to first value. Fix the largest leak first.",
        "Only then choose one channel and measure learning, not vanity activity.",
        "Revisit the “more marketing” request monthly with the bottleneck named out loud.",
      ],
    },
    {
      type: "p",
      text: "[Y Combinator’s Library](https://www.ycombinator.com/library) keeps nudging founders back to users and wedge. Related: [every startup looks like a marketing problem until you dig deeper](/essays/every-startup-looks-like-marketing-problem-until-deeper).",
    },
    {
      type: "callout",
      title: "A better first question",
      text: "If we doubled traffic tomorrow, would we convert and retain, or simply pay more for the same drop-offs? Answer that before you buy volume.",
    },
    {
      type: "takeaway",
      text: "“More marketing” is a results request. Diagnose the constraint before you amplify.",
    },
    {
      type: "cta",
      lead: "nau studio builds research, positioning, and go-to-market so campaigns have something coherent to amplify.",
      button: "Visit nau studio",
      href: "/",
    },
  ],
};

export default post;
