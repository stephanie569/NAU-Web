import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "people-trust-people-before-they-trust-marketing",
  title: "People trust people. Marketing comes later.",
  excerpt:
    "Communities outperform audiences in the long run. Build peer proof before you scale brand voice.",
  date: "August 11, 2026",
  category: "Content",
  image: "/images/blog/blog-47-trust-people.png",
  metaDescription:
    "People trust people long before marketing. Why communities beat audiences, how peer proof works, and how founder-led credibility compounds.",
  content: [
    {
      type: "p",
      text: "I have never met a founder who was converted by a brand account. Not really. They were converted by a peer who said “this works,” a founder who said something true in public, a customer whose story sounded inconveniently specific. Marketing arrived later, to explain, to package, to scale. Trust had already chosen a human, which is awkward for anyone who preferred a logo.",
    },
    {
      type: "p",
      text: "People trust people long before they trust marketing. That is not a romantic slogan. It is a sequencing problem most teams get backwards: they build an audience of strangers before they build a community of believers, then wonder why engagement feels like shouting in a well-designed room.",
    },
    {
      type: "h2",
      text: "Brand-led trust vs peer-led trust",
    },
    {
      type: "table",
      headers: ["Signal", "Bad (brand-led first)", "Good (peer-led first)"],
      rows: [
        [
          "Proof",
          "Logo wall and adjectives",
          "Named humans with specific outcomes",
        ],
        [
          "Voice",
          "Corporate account as the only speaker",
          "Founders and customers visible early",
        ],
        [
          "Community",
          "Audience metrics without belonging",
          "Spaces where peers help peers",
        ],
        [
          "Campaign ask",
          "“Follow us” as the goal",
          "“Talk to someone who used this” as the path",
        ],
        [
          "Scale",
          "Paid before belief exists",
          "Paid after peer proof is easy to find",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad consumer launch:** polished brand film, no customers willing to go on record. **Good pattern:** early Glossier-style community loops, outdoor brands whose ambassadors are real users, hospitality brands that put guest language on the homepage. Marketing packages what peers already believe.",
    },
    {
      type: "p",
      text: "**Bad B2B:** anonymous case studies and “trusted by teams worldwide.” **Good B2B:** a founder who says something true weekly, plus three customers who will take a reference call. Trust is a person-to-person transfer that marketing can accelerate, not invent.",
    },
    {
      type: "image",
      src: "/images/blog/blog-47-trust-people.png",
      alt: "Peer proof and community before brand-scale marketing",
    },
    {
      type: "h2",
      text: "How to put people before marketing",
    },
    {
      type: "ol",
      items: [
        "List ten people who already trust you (customers, advisors, peers). Ask what they would tell a sceptical friend.",
        "Put three specific human stories on the homepage or sales path within one week.",
        "Create one place peers can talk (community, events, shared channel) with a clear job, not a ghost town.",
        "Publish founder or operator voice weekly for 12 weeks. Specific beats polished.",
        "Add a reference path before you increase paid spend: intro, quote, or call.",
        "Only then scale brand campaigns that amplify existing peer belief.",
      ],
    },
    {
      type: "p",
      text: "Related: [customers are better marketers than your marketing team](/essays/customers-better-marketers-than-marketing-team) and [organic isn't free, it's earned](/essays/organic-growth-isnt-free-its-earned). [First Round Review](https://review.firstround.com/) and [Lenny's Newsletter](https://www.lennysnewsletter.com/) often cover community and founder-led growth well.",
    },
    {
      type: "takeaway",
      text: "Trust chooses a human first. Marketing’s job is to arrive second, then scale what people already said.",
    },
    {
      type: "cta",
      lead: "nau studio helps product brands build peer proof, founder voice, and campaigns that scale trust instead of inventing it.",
      button: "Visit nau studio",
      href: "/",
    },
  ],
};

export default post;
