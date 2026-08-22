import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "next-marketing-campaign-should-start-with-walk",
  title: "Your next campaign should start with a walk outside",
  excerpt:
    "Observing people in the wild beats another analytics dashboard when you need campaign truth.",
  date: "July 30, 2026",
  category: "Content",
  image: "/images/blog/blog-44-start-with-walk.png",
  metaDescription:
    "Why your next marketing campaign should start with a walk. Field observation, real behaviour, and why watching people beats another analytics dashboard.",
  content: [
    {
      type: "p",
      text: "Most campaign briefs begin in a room with a screen. Decks. Dashboards. Competitor ads pulled into a moodboard that somehow always ends up purple. Then a media plan arrives, and everyone agrees it looks rigorous. Meanwhile nobody has watched an actual human decide anything in the last fortnight, which is an impressive achievement for a species that still has legs.",
    },
    {
      type: "p",
      text: "Analytics tell you what happened inside systems you already built. A walk tells you what people do when your brand is not the centre of the universe, which is nearly always. If your next campaign starts with a channel brainstorm, you have skipped the most affordable research method available: observation.",
    },
    {
      type: "h2",
      text: "Dashboard-first vs walk-first",
    },
    {
      type: "table",
      headers: ["Lens", "Bad (screen only)", "Good (walk + screen)"],
      rows: [
        [
          "Insight source",
          "Last-click reports and competitor ads",
          "Behaviour in place: queues, shelves, streets, apps in use",
        ],
        [
          "Audience",
          "Persona slides from last year",
          "People you can describe by situation, not vibe",
        ],
        [
          "Creative idea",
          "Trend templates",
          "Friction and delight you witnessed",
        ],
        [
          "Placement",
          "Wherever CPM looks cheap",
          "Where attention already gathers for that job",
        ],
        [
          "Risk",
          "Optimising a fantasy funnel",
          "Testing against reality you can point at",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad travel campaign:** planned entirely from booking-engine charts, then shot in a studio that looks like every other OTA ad. **Good travel pattern:** walk the neighbourhood, note what travellers photograph, what confuses them at arrival, what staff actually say. Then build creative from that street-level truth.",
    },
    {
      type: "p",
      text: "**Bad retail / consumer brand:** brief written from last quarter’s ROAS. **Good pattern:** watch how people pick up, compare, and abandon products in store or on the pavement outside. The jokes and hesitations are the brief.",
    },
    {
      type: "image",
      src: "/images/blog/blog-44-start-with-walk.png",
      alt: "Field notes from a walk used to brief a campaign",
    },
    {
      type: "h2",
      text: "How to start the campaign with a walk",
    },
    {
      type: "ol",
      items: [
        "Pick one place your customer already makes the decision (street, store, station, trailhead, lobby).",
        "Spend 60 to 90 minutes watching without pitching. Note friction, workarounds, and what people photograph.",
        "Capture five exact phrases you hear or overhear about the problem (or ask politely if appropriate).",
        "Map one placement idea to where attention already gathers, not where your media deck prefers.",
        "Write the brief from those notes. Only then open analytics to confirm scale, not to invent the idea.",
        "Shoot or design against the observed moment. If the creative needs a paragraph of explanation, you walked past the insight.",
      ],
    },
    {
      type: "p",
      text: "Related: [start with a conversation, not a camera](/essays/next-campaign-begin-conversation-not-camera) and [your city is an underrated marketing channel](/essays/your-city-most-underrated-marketing-channel). For observational research habits, [Nielsen Norman Group](https://www.nngroup.com/) and field notes from [Harvard Business Review](https://hbr.org/) still travel well.",
    },
    {
      type: "takeaway",
      text: "Dashboards describe your funnel. Walks describe the world. Campaigns need both, in that order.",
    },
    {
      type: "cta",
      lead: "nau studio builds street-smart campaigns from field observation, placement, and a clear product story.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
