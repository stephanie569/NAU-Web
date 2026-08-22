import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "people-rarely-share-advertisements-share-stories",
  title:
    "Nobody shares ads. They share stories they were part of.",
  excerpt:
    "Design campaigns people want to retell. Participation beats persuasion when word of mouth is the goal.",
  date: "August 6, 2026",
  category: "Content",
  image: "/images/blog/blog-37-share-stories.png",
  metaDescription:
    "People share stories they were part of, not ads. Design participation, word-of-mouth moments, and campaigns worth retelling.",
  content: [
    {
      type: "p",
      text: "Nobody wakes up hoping to share your advertisement. They wake up hoping to have something worth saying. That distinction is uncomfortable for marketers because it moves the job from persuasion to participation, which is harder and, inconveniently, more effective.",
    },
    {
      type: "p",
      text: "People rarely share advertisements. They share stories they happened to be part of: the unexpected invitation, the moment they looked clever in front of friends, the small public win, the ritual they can retell without sounding like a brochure. If your campaign cannot produce that kind of story, you are buying distribution for a monologue.",
    },
    {
      type: "h2",
      text: "Ad-shaped vs story-shaped campaigns",
    },
    {
      type: "table",
      headers: ["Element", "Bad (ad-shaped)", "Good (story-shaped)"],
      rows: [
        [
          "Role of the audience",
          "Audience watches and is asked to share",
          "Audience participates and has something to tell",
        ],
        [
          "Creative centre",
          "Brand message first",
          "Human moment first, brand as context",
        ],
        [
          "Ask",
          "“Share this” with a hashtag",
          "Create a reason the story travels without begging",
        ],
        [
          "Proof of success",
          "Impressions and forced UGC",
          "Unprompted retells and photos of the moment",
        ],
        [
          "After the campaign",
          "Silence until the next flight",
          "A ritual or artifact people keep using",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad street campaign:** a poster that says “Share your adventure with us” and a QR to a form. **Good street pattern:** something worth photographing or joining (a temporary experience, a giveaway with a twist, a public game) so the story is the participation. Related craft: [how to create marketing people photograph](/essays/how-to-create-marketing-people-photograph).",
    },
    {
      type: "p",
      text: "**Bad hospitality promo:** “Tag us for a chance to win.” **Good hospitality promo:** design a check-in or local ritual guests already want to show friends. The brand becomes a character in their story, not the narrator of an ad.",
    },
    {
      type: "image",
      src: "/images/blog/blog-37-share-stories.png",
      alt: "Campaign designed for participation and retelling",
    },
    {
      type: "h2",
      text: "How to design for sharing without begging",
    },
    {
      type: "ol",
      items: [
        "Write the story you want someone to tell a friend in one sentence. If it sounds like a slogan, rewrite until it sounds like a night out.",
        "Design one participation moment: do, find, claim, or join, not “watch and repost.”",
        "Remove the share ask from the hero. If the moment is strong, the ask is optional.",
        "Capture and amplify unprompted stories rather than inventing forced UGC briefs.",
        "Leave a footprint after the campaign: a ritual, object, or place people can return to.",
        "Measure retells and referrals, not only reach.",
      ],
    },
    {
      type: "p",
      text: "Related: [best marketing doesn't ask people to share](/essays/best-marketing-doesnt-ask-people-to-share) and [good street campaigns don't end on the street](/essays/good-street-campaign-doesnt-end-on-street). Contagious ideas research summarised by [Jonah Berger](https://jonahberger.com/) and pieces on [First Round Review](https://review.firstround.com/) are useful companions.",
    },
    {
      type: "takeaway",
      text: "Ads ask for distribution. Stories earn it. Build the moment people were part of.",
    },
    {
      type: "cta",
      lead: "nau studio designs campaigns people want to retell: street, content, and product moments that create a story, not a slogan.",
      button: "Visit nau studio",
      href: "/studio",
    },
  ],
};

export default post;
