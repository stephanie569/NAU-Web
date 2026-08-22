import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "qr-code-was-never-the-problem",
  title: "The QR code was never the problem. The story was.",
  excerpt:
    "QR codes are doors. Context, promise, and what happens after the scan matter more than the technology.",
  date: "July 31, 2026",
  category: "Content",
  image: "/images/blog/blog-43-qr-code.png",
  metaDescription:
    "The QR code was never the problem. Context, promise, placement, and post-scan design matter far more than the scanning technology.",
  content: [
    {
      type: "p",
      text: "Every few years the industry rediscovers QR codes, declares them back, then blames the technology when campaigns flop. That is a category error. The QR code is a door. Doors are not interesting. What is on either side of the door, and why someone would walk through, is the entire craft. Blaming the hinge for a boring room is a long tradition.",
    },
    {
      type: "p",
      text: "I have seen QR codes work on a muddy festival fence and fail on a polished tube poster. Same technology. Different context. Different promise. Different aftermath. If your scan rates are embarrassing, do not start with a vendor conversation about dynamic codes. Start with why a busy human should interrupt their day for you.",
    },
    {
      type: "h2",
      text: "Tech-first QR vs story-first QR",
    },
    {
      type: "table",
      headers: ["Span", "Bad (tech-first)", "Good (story-first)"],
      rows: [
        [
          "Before the scan",
          "“Scan here” with no reason",
          "A clear promise of what they get next",
        ],
        [
          "Placement",
          "Wherever there is empty space",
          "Where the job already has attention and time",
        ],
        [
          "Landing",
          "Homepage or generic form",
          "A bridge page that continues the promise",
        ],
        [
          "After",
          "Dead end after one click",
          "A next step that rewards the interruption",
        ],
        [
          "Measurement",
          "Scans as success",
          "Completed actions that match the promise",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad street campaign:** QR on a poster that says nothing but “Learn more,” landing on a homepage that forgot the poster existed. **Good street pattern:** the physical line states the reward (“Get the map,” “Claim the sample,” “See today’s setlist”), the code sits where people pause, and the phone experience finishes that sentence in under five seconds.",
    },
    {
      type: "p",
      text: "**Bad hospitality QR:** table tent to a slow PDF menu. **Good hospitality QR:** order, pay, or local tip that removes friction the guest already felt. The code is plumbing. The story is the reason to open the camera.",
    },
    {
      type: "image",
      src: "/images/blog/blog-43-qr-code.png",
      alt: "QR campaign design focusing on promise and post-scan bridge",
    },
    {
      type: "h2",
      text: "How to fix a QR campaign",
    },
    {
      type: "ol",
      items: [
        "Write the promise in one line that appears before the code. If it is weak, the code will not save it.",
        "Choose placement where people already pause (queue, table, trailhead, packaging), not where your deck prefers.",
        "Build a bridge page that continues the physical message. Do not dump people on the homepage.",
        "Deliver the reward in under five seconds of load and reading time.",
        "Track completed actions, not scans alone.",
        "Test with a stranger on the street: would they interrupt their day for this promise?",
      ],
    },
    {
      type: "p",
      text: "Related: [a good street campaign doesn't end on the street](/essays/good-street-campaign-doesnt-end-on-street) and [how to create marketing people photograph](/essays/how-to-create-marketing-people-photograph). For mobile experience baselines, [Nielsen Norman Group](https://www.nngroup.com/) and [Baymard Institute](https://baymard.com/) stay useful.",
    },
    {
      type: "takeaway",
      text: "The QR code was never the problem. The missing story before and after the scan was.",
    },
    {
      type: "cta",
      lead: "nau studio designs street and QR campaigns around promise, placement, and the bridge after the scan.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
