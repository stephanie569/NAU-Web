import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "how-to-create-marketing-people-photograph",
  title: "Make marketing people actually want to photograph",
  excerpt:
    "Design moments people choose to photograph. Bad vs good campaign cues, and a practical way to earn voluntary social proof.",
  date: "August 2, 2026",
  category: "Content",
  image: "/images/blog/blog-41-photograph.png",
  metaDescription:
    "How to design marketing people want to photograph: photogenic moments, voluntary social proof, and a practical sequence that spreads without begging anyone to go viral.",
  content: [
    {
      type: "p",
      text: "Asking strangers to “go viral” is like asking the universe for a personal favour. The universe is busy. People photograph what makes them look interesting, kind, or in on something. Your job is to design that moment, not to nag them into unpaid media labour.",
    },
    {
      type: "p",
      text: "Photographable marketing fails when the brand is the subject and the human is the prop. It works when the human gets a story worth keeping, and the brand is the stage lighting.",
    },
    {
      type: "h2",
      text: "Bad vs good: same budget, different photo",
    },
    {
      type: "table",
      headers: ["Cue", "Bad (nobody shoots it)", "Good (phones come out)"],
      rows: [
        [
          "Visual",
          "Logo wall, stock smile, flyer pile",
          "A clear, surprising object or scene",
        ],
        [
          "Participation",
          "“Tag us for a chance to win”",
          "Something worth doing even with no prize",
        ],
        [
          "Place",
          "Anywhere / nowhere",
          "A location people already stop or gather",
        ],
        [
          "Brand role",
          "Logo screams first",
          "Brand discovered after the moment lands",
        ],
        [
          "Share reason",
          "Help our campaign",
          "Help me look like I found something",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad pop-up:** a branded booth with free stickers and a QR that only opens a newsletter. People take the sticker, leave the booth, forget the brand by the next corner. **Good pattern:** a moment people want on their camera roll (a repair station, a field test, a neighbourhood map) where the brand is the reason the moment exists.",
    },
    {
      type: "p",
      text: "**Bad outdoor campaign:** product flat-lays on concrete with “shop the look.” **Good:** gear in use in weather that makes the photo feel earned. Same product. Different reason for a stranger to press the shutter.",
    },
    {
      type: "image",
      src: "/images/blog/blog-41-photograph.png",
      alt: "Photographable street marketing moment",
    },
    {
      type: "h2",
      text: "Build a photographable moment this month",
    },
    {
      type: "ol",
      items: [
        "Write the human payoff in one line: what do they get to show or feel?",
        "Design one object or scene that is readable in a phone frame from three metres.",
        "Place it where people already pause (queue, corner, trailhead, lobby), not where you wish they paused.",
        "Make brand discovery secondary: visible on close look, not screaming in the first glance.",
        "Give a clear next step after the photo (site, map, story), not only “follow us.”",
        "Capture ten real photos yourself. If you would not post them, redesign before launch.",
      ],
    },
    {
      type: "p",
      text: "Related reading: [people rarely share advertisements, they share stories](/essays/people-rarely-share-advertisements-share-stories), [memorable brands give something worth keeping](/essays/memorable-brands-dont-interrupt-give-something-worth-remembering), and [your city as a marketing channel](/essays/your-city-most-underrated-marketing-channel).",
    },
    {
      type: "takeaway",
      text: "If the only reason to photograph it is that you asked, you built an ad. If they photograph it to keep the moment, you built marketing that travels.",
    },
    {
      type: "cta",
      lead: "nau studio designs campaigns people choose to photograph, then connects street moments back to a clear product story.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
