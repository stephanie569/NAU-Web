import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "best-marketing-doesnt-always-start-behind-screen",
  title: "Your best campaign might not start on a screen",
  excerpt:
    "Why some of the most effective campaigns begin where Wi-Fi is least relevant.",
  date: "August 7, 2026",
  category: "Content",
  image: "/images/blog/blog-36-offline-marketing.png",
  metaDescription:
    "Why the best marketing often starts offline: experiential campaigns, physical proof, and how real-world moments build trust that screens alone cannot buy.",
  content: [
    {
      type: "p",
      text: "Most campaign plans open in a tab. That is fine until every brand is fighting for the same thumb, at which point the physical world starts looking oddly underpriced, like vacant land next to a crowded motorway.",
    },
    {
      type: "p",
      text: "The best marketing does not always start behind a screen. Offline moments create proof people can photograph, talk about, and remember. Screens then amplify what already happened. Starting on the screen alone often means inventing a story with nothing physical to hold.",
    },
    {
      type: "h2",
      text: "Screen-first vs world-first",
    },
    {
      type: "table",
      headers: ["Stage", "Bad (screen only)", "Good (world then screen)"],
      rows: [
        [
          "Idea",
          "Another feed post about the product",
          "A place, object, or event people can encounter",
        ],
        [
          "Proof",
          "Claims in a caption",
          "Something real enough to photograph",
        ],
        [
          "Distribution",
          "Boost until it stops",
          "Organic shares of a real moment, then paid support",
        ],
        [
          "Follow-up",
          "Campaign ends when the post ends",
          "QR, site, or offer that continues the story",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad outdoor brand:** endless product spins on white backgrounds. **Good outdoor brand:** a repair pop-up, trail day, or field demo people talk about afterward. The jacket shows up as a character in a real place.",
    },
    {
      type: "p",
      text: "**Bad hospitality:** more room-tour reels. **Good hospitality:** a neighbourhood morning people can actually take, with a simple path back to book. Travel brands win the same way when the campaign starts in the city, not only in the creative brief.",
    },
    {
      type: "image",
      src: "/images/blog/blog-36-offline-marketing.png",
      alt: "Marketing campaigns that start offline before the screen",
    },
    {
      type: "h2",
      text: "How to start a campaign outside the tab",
    },
    {
      type: "ol",
      items: [
        "Name one real-world moment that would be worth photographing without a brand ask.",
        "Design the physical piece or experience first. Digital comes second.",
        "Add a clear bridge: QR, short URL, or simple next step that continues the story.",
        "Capture the moment well enough to fuel content for weeks, not one post.",
        "Measure mentions, footfall, and conversions, not only impressions.",
        "Only boost what already earned attention in the wild.",
      ],
    },
    {
      type: "p",
      text: "More on this thread: [your city as a marketing channel](/essays/your-city-most-underrated-marketing-channel) and [why the internet still needs the real world](/essays/why-internet-still-needs-real-world). For brand memory research, [Nielsen Norman Group](https://www.nngroup.com/) and [Think with Google](https://www.thinkwithgoogle.com/) both cover why experience beats interruption.",
    },
    {
      type: "takeaway",
      text: "Screens amplify. The world invents. Start where something can happen, then publish what happened.",
    },
    {
      type: "cta",
      lead: "Welcome to the journal. nau studio builds campaigns that begin in the real world and finish as systems, not one-off posts.",
      button: "Visit nau studio",
      href: "/",
    },
  ],
};

export default post;
