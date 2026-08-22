import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "good-street-campaign-doesnt-end-on-street",
  title: "The street campaign isn't over when people walk past",
  excerpt:
    "Design marketing that moves from pavement to phone: capture paths, follow-up, and systems that convert attention into action.",
  date: "August 3, 2026",
  category: "Content",
  image: "/images/blog/blog-40-street-to-phone.png",
  metaDescription:
    "How to design street campaigns that continue on the phone: bad vs good offline-to-online bridges, examples, and a practical checklist.",
  content: [
    {
      type: "p",
      text: "A street campaign that ends on the street is a postcard to the wind. People walk past, briefly register something colourful, and continue living their lives with the serene indifference of a universe that has seen many posters. The work is not finished when the paste dries. It is finished when someone who was on the pavement has a clear reason to continue on their phone.",
    },
    {
      type: "p",
      text: "Good offline work designs the bridge: what they see, what they do next, where they land, and how you follow up. Without that system, you paid for urban decoration. With it, the street becomes a top-of-funnel with better lighting.",
    },
    {
      type: "h2",
      text: "Paste-and-pray vs pavement-to-phone",
    },
    {
      type: "table",
      headers: ["Step", "Bad", "Good"],
      rows: [
        [
          "Creative",
          "Logo-heavy, no reason to stop",
          "One curious hook people want to finish",
        ],
        [
          "Capture",
          "Tiny URL nobody will type",
          "QR or short path to a useful page",
        ],
        [
          "Landing",
          "Homepage that ignores the street context",
          "Message matches what they just saw",
        ],
        [
          "Follow-up",
          "None",
          "Email, SMS, or retargeting with the same story",
        ],
        [
          "Measure",
          "Footfall vibes",
          "Scans, landings, conversions by location",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad sticker or poster run:** beautiful art, dead QR, generic homepage. The street did its job. The product experience did not RSVP. **Good street campaign:** the offline line continues online in the same voice, with one clear next step and a reason that was not “buy now” shouted from a lamppost.",
    },
    {
      type: "p",
      text: "**Bad hospitality activation:** flyer that sends people to a booking engine with twelve fields. **Good hospitality activation:** neighbourhood story, one stay type, and a short path that respects the fact they are still walking.",
    },
    {
      type: "image",
      src: "/images/blog/blog-40-street-to-phone.png",
      alt: "Illustration of a street campaign bridging to phone",
    },
    {
      type: "h2",
      text: "Build the bridge before you print",
    },
    {
      type: "ol",
      items: [
        "Write the street line and the landing headline together so they match.",
        "Test the QR or short URL on multiple phones before printing.",
        "Land on a page that completes the story, not a generic homepage.",
        "Define one conversion: email, sample, booking, waitlist. Not five.",
        "Plan follow-up for scanners within 24 hours in the same narrative.",
        "Tag locations so you learn which streets earn attention worth repeating.",
      ],
    },
    {
      type: "p",
      text: "More on why the code was never the real issue: [the QR code was never the problem](/essays/qr-code-was-never-the-problem). For offline thinking, see also [best marketing doesn’t always start behind a screen](/essays/best-marketing-doesnt-always-start-behind-screen).",
    },
    {
      type: "callout",
      title: "Street is half the system",
      text: "If the phone experience is an afterthought, the street campaign was a mural with a marketing budget.",
    },
    {
      type: "takeaway",
      text: "A good street campaign does not end on the street. Design the path from pavement to phone before you print.",
    },
    {
      type: "cta",
      lead: "nau studio designs offline-to-online campaigns that keep working after someone walks past.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
