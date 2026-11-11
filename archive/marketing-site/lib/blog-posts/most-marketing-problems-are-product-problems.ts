import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "most-marketing-problems-are-product-problems",
  title: "That marketing problem is usually a product problem in disguise",
  excerpt:
    "When growth stalls, check the offer before you check the calendar. Bad vs good diagnoses and a fix sequence.",
  date: "August 25, 2026",
  category: "Go-to-Market",
  image: "/images/blog/blog-63-marketing-product-problems.png",
  metaDescription:
    "Most marketing problems are product problems in disguise. Diagnose the offer, clarity and experience before you blame the campaign calendar.",
  content: [
    {
      type: "p",
      text: "When growth stalls, the calendar gets blamed first. Not enough posts. Wrong channel mix. Creative fatigue. The algorithm. Founders open Notion and schedule their way out of a feeling. Sometimes that works. Often it is rearranging furniture in a house with a structural crack, which is a popular indoor sport among ambitious teams.",
    },
    {
      type: "p",
      text: "Many “marketing problems” are product and offer problems wearing a content costume. If strangers cannot understand the value, if activation fails, or if the product does not repay attention, more campaigns only scale the mismatch.",
    },
    {
      type: "h2",
      text: "Marketing symptom vs product cause",
    },
    {
      type: "table",
      headers: ["Symptom", "Bad diagnosis", "Good diagnosis"],
      rows: [
        [
          "Low conversion",
          "Need better ads",
          "Offer or page unclear",
        ],
        [
          "High traffic, low sales",
          "Wrong creative",
          "Promise and product disagree",
        ],
        [
          "No shares",
          "Audience is lazy",
          "Nothing worth keeping or telling",
        ],
        [
          "Churn after signup",
          "Need nurture emails",
          "First value path is broken",
        ],
        [
          "CAC rising",
          "Bid higher",
          "Positioning too broad or proof too weak",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad:** hiring another agency while the product still cannot explain its job in one sentence. You will get prettier confusion. **Good:** separate channel issues from offer issues. Fix the product story and experience first, then ask marketing to amplify something true.",
    },
    {
      type: "p",
      text: "**Bad consumer brand:** “Our marketing is not working” when returns and support tickets already tell you the product story is oversold. **Good:** align claim, experience, and proof until marketing is mostly distribution of a truth that already holds.",
    },
    {
      type: "image",
      src: "/images/blog/blog-63-marketing-product-problems.png",
      alt: "Marketing symptoms mapped to product causes",
    },
    {
      type: "h2",
      text: "Diagnose before you schedule",
    },
    {
      type: "ol",
      items: [
        "Write the current marketing complaint in one line.",
        "Ask whether a clearer offer or better first-run experience would shrink the complaint.",
        "If yes, fix clarity, activation, or proof before adding posts.",
        "If no, then audit channel fit, creative, and cadence.",
        "Align homepage, ads, and product first session to the same promise.",
        "Only then reopen the calendar as amplification, not compensation.",
      ],
    },
    {
      type: "p",
      text: "Continue with [if the product is not growing, start here](/essays/if-product-isnt-growing-start-here), [every startup looks like a marketing problem until you dig deeper](/essays/every-startup-looks-like-marketing-problem-until-deeper), and [best marketing feels like product design](/essays/best-marketing-feels-like-product-design).",
    },
    {
      type: "takeaway",
      text: "If marketing has to compensate for the product story, you do not have a calendar problem. You have a product problem in disguise.",
    },
    {
      type: "cta",
      lead: "nau studio separates product problems from channel problems, then builds campaigns that amplify a story that already holds.",
      button: "Visit nau studio",
      href: "/",
    },
  ],
};

export default post;
