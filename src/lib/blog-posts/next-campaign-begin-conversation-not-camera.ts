import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "next-campaign-begin-conversation-not-camera",
  title: "Start the campaign with a conversation, not a camera",
  excerpt:
    "Shoot later. Listen first. Capture vernacular and objections, then make creative that already knows what to say.",
  date: "August 20, 2026",
  category: "Content",
  image: "/images/blog/blog-68-conversation-first.png",
  metaDescription:
    "Why your next campaign should begin with a conversation, not a camera. Listen in the wild first, then shoot creative that already knows what to say.",
  content: [
    {
      type: "p",
      text: "Kick-offs have a ritual. Mood boards land before anyone has spoken to a customer that week. Someone books a studio. Someone argues about lenses. The brief still cannot say what a real person objects to in a real sentence. The camera arrives early. Understanding arrives late, if at all, which is an odd order of operations for a species that invented language before cinema.",
    },
    {
      type: "p",
      text: "Your next campaign should begin with a conversation, not a camera. Not because conversation is virtuous, but because creative without vernacular is expensive guesswork. The wild already contains the language, the friction, and the jokes your audience uses when they are not performing for a brand.",
    },
    {
      type: "h2",
      text: "Camera-first vs conversation-first",
    },
    {
      type: "table",
      headers: ["Habit", "Bad (camera first)", "Good (conversation first)"],
      rows: [
        [
          "Brief",
          "Looks and references before objections",
          "Customer words and friction before visuals",
        ],
        [
          "Script",
          "Brand adjectives in a voiceover",
          "Phrases people already use about the problem",
        ],
        [
          "Casting / talent",
          "Generic lifestyle models",
          "People who match the job and context",
        ],
        [
          "Shoot day",
          "Hope the edit invents the insight",
          "Capture proof of the insight you already heard",
        ],
        [
          "Success",
          "Pretty frames that need a caption to explain",
          "Frames that make sense without a brand lecture",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad hospitality campaign:** glossy room tours shot before anyone asked guests what almost stopped them booking. The film looks expensive. The objections stay unspoken. **Good hospitality pattern:** interview five recent bookers and five abandoners first, then shoot the answers (noise, neighbourhood, timing, what “value” meant).",
    },
    {
      type: "p",
      text: "**Bad outdoor brand:** studio hero shots of jackets that never leave a seamless backdrop. **Good outdoor brand:** film the weather change the product claims to survive, using language hikers already use. Same jacket. Different reason to believe.",
    },
    {
      type: "image",
      src: "/images/blog/blog-68-conversation-first.png",
      alt: "Campaign planning that starts with customer conversations",
    },
    {
      type: "h2",
      text: "A conversation-first campaign week",
    },
    {
      type: "ol",
      items: [
        "Talk to five customers and five near-misses. Record exact phrases for problem, objection, and win.",
        "Build a one-page brief from those phrases only. No adjectives that did not appear in the interviews.",
        "Draft hooks and headlines from vernacular before you storyboard.",
        "Shoot to prove the insight: the moment, the context, the before/after of the job.",
        "Test cuts with people who were not in the room. If they need a caption to get it, reshoot the idea, not just the colour grade.",
      ],
    },
    {
      type: "p",
      text: "Related: [your next campaign should start with a walk](/essays/next-marketing-campaign-should-start-with-walk) and [people rarely share ads, they share stories](/essays/people-rarely-share-advertisements-share-stories). For interview craft, [Nielsen Norman Group](https://www.nngroup.com/) still publishes clear guidance on listening without leading.",
    },
    {
      type: "takeaway",
      text: "Cameras record light. Conversations record meaning. Shoot the second one first.",
    },
    {
      type: "cta",
      lead: "nau studio builds campaigns from research and real customer language before the first frame is shot.",
      button: "Visit nau studio",
      href: "/",
    },
  ],
};

export default post;
