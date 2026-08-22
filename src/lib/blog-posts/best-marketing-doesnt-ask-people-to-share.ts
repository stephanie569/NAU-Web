import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "best-marketing-doesnt-ask-people-to-share",
  title: "Stop asking people to share. Make something they want to.",
  excerpt:
    "If you have to beg for shares, the moment was never worth sharing.",
  date: "August 22, 2026",
  category: "Content",
  image: "/images/blog/blog-66-dont-ask-share.png",
  metaDescription:
    "The best marketing does not ask people to share it. Design moments worth retelling, with practical good and bad examples for product brands.",
  content: [
    {
      type: "p",
      text: "“Please share” is the marketing equivalent of asking strangers to clap for a joke they did not hear. If the moment was worth retelling, people already would. If it was not, the ask only highlights the gap.",
    },
    {
      type: "p",
      text: "The best marketing does not ask people to share. It designs something they want to show: a useful result, a status signal, a surprise, a story with a punchline. Shares are an outcome. Begging is a symptom.",
    },
    {
      type: "h2",
      text: "Ask vs earn",
    },
    {
      type: "table",
      headers: ["Moment", "Bad (ask)", "Good (earn)"],
      rows: [
        [
          "Post",
          "“Tag a friend who needs this”",
          "A result or joke people want to own",
        ],
        [
          "Product",
          "Referral code as the whole idea",
          "A moment so specific it becomes a story",
        ],
        [
          "Campaign",
          "Share-to-enter without a reason",
          "Personalised payoff (Wrapped-style) or collectible object",
        ],
        [
          "CTA",
          "Beg for distribution",
          "Make the next step useful or delightful",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad consumer brand:** endless “share if you agree” captions on product flat-lays. **Good consumer brand:** packaging, unboxing, or a yearly recap people photograph because it reflects them, not because you asked.",
    },
    {
      type: "p",
      text: "**Bad hospitality:** “repost for a chance to win.” **Good hospitality:** a stay detail so specific guests tell the story at dinner. Outdoor and travel brands win the same way when the product creates a scene, not a share prompt.",
    },
    {
      type: "image",
      src: "/images/blog/blog-66-dont-ask-share.png",
      alt: "Design moments worth sharing instead of asking for shares",
    },
    {
      type: "h2",
      text: "What to do instead of begging",
    },
    {
      type: "ol",
      items: [
        "List the last five things customers already photographed or mentioned without a prompt.",
        "Build the next campaign around amplifying those moments, not inventing share language.",
        "Remove “please share” from captions for two weeks. Replace with a clearer story beat.",
        "Add one personalised or collectible element people can claim as theirs.",
        "Make referral a reward for a real outcome, not a substitute for talkability.",
        "Measure organic mentions and saves, not only forced share clicks.",
      ],
    },
    {
      type: "p",
      text: "See also [people rarely share advertisements; they share stories](/essays/people-rarely-share-advertisements-share-stories). For how people decide what to pass on, [Nielsen Norman Group](https://www.nngroup.com/) and [Harvard Business Review](https://hbr.org/) both cover social proof and word of mouth without treating it as magic.",
    },
    {
      type: "takeaway",
      text: "If you have to ask for shares, redesign the moment. Sharing is a compliment, not a chore you assign.",
    },
    {
      type: "cta",
      lead: "Welcome to the journal. nau studio helps brands design talkable moments so distribution starts as behaviour, not a caption ask.",
      button: "Visit nau studio",
      href: "/",
    },
  ],
};

export default post;
