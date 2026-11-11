import type { BlogPost } from "@/lib/blog-types";

const post: BlogPost = {
  slug: "every-product-deserves-story-before-logo",
  title: "Skip the logo. Write the story first.",
  excerpt:
    "A mark cannot carry meaning you have not decided. Sequence narrative before identity so branding expresses something real.",
  date: "August 23, 2026",
  category: "Go-to-Market",
  image: "/images/blog/blog-65-story-before-logo.png",
  metaDescription:
    "Why product story should come before logo design: bad vs good sequencing, examples, and a practical narrative brief.",
  content: [
    {
      type: "p",
      text: "Somewhere between seed and Series A, a founder opens a tab for brand agencies. Mood boards appear. Wordmarks multiply. Someone says the company needs to look real. Fair impulse. Wrong sequence. A logo cannot carry meaning you have not decided, which is rather like commissioning a flag before anyone agrees which country it represents.",
    },
    {
      type: "p",
      text: "Story answers who it is for, what unsatisfactory today it replaces, what better tomorrow it sells, and why this approach rather than the neighbour’s. Logo answers which mark goes on the slide. Useful. Secondary. When teams buy marks first, they spend the next year trying to make decoration mean something it was never briefed to mean.",
    },
    {
      type: "h2",
      text: "Logo-first vs story-first",
    },
    {
      type: "table",
      headers: ["Decision", "Bad (logo first)", "Good (story first)"],
      rows: [
        [
          "Brief",
          "Make us look premium",
          "Who we serve, job we finish, promise we keep",
        ],
        [
          "Homepage",
          "Pretty hero, vague headline",
          "Customer language in the first line",
        ],
        [
          "Agency work",
          "Argue about curves for weeks",
          "Argue about the offer for days, then design",
        ],
        [
          "Rebrand",
          "New mark, same confusion",
          "Reposition, then express it visually",
        ],
        [
          "Proof",
          "Lifestyle stock",
          "One real use case the mark can stand on",
        ],
      ],
    },
    {
      type: "p",
      text: "**Bad consumer startup:** six wordmark options and a homepage that still cannot say what changes for the buyer. Stationery for a company that has not finished its sentence. **Good outdoor brand:** a clear job (stay dry on long days) before colour systems. Patagonia’s storytelling works because the narrative existed before the next type treatment.",
    },
    {
      type: "p",
      text: "**Bad hospitality brand:** logo refresh while booking copy still hides neighbourhood, noise, and who the stay is for. **Good product brand:** a one-page story that a designer can express, not invent under deadline.",
    },
    {
      type: "image",
      src: "/images/blog/blog-65-story-before-logo.png",
      alt: "Illustration of product story coming before logo design",
    },
    {
      type: "h2",
      text: "Write the story before you brief design",
    },
    {
      type: "ol",
      items: [
        "Fill one page: customer, problem, better tomorrow, why you, what you refuse.",
        "Test that page on five people outside the company. If they cannot retell it, the story is unfinished.",
        "Turn the story into a homepage headline and one proof line before any identity kickoff.",
        "Brief designers with that page, not with adjectives like modern or bold.",
        "Freeze logo exploration until the story survives a cold read without your narration.",
        "If the story changes monthly, pause identity spend until positioning stops drifting.",
      ],
    },
    {
      type: "p",
      text: "Useful framing on jobs and progress still lives at [Harvard Business Review](https://hbr.org/). Related: [people don’t buy products; they buy a better tomorrow](/essays/people-dont-buy-products-buy-better-tomorrow).",
    },
    {
      type: "callout",
      title: "Marks recognise. Stories persuade.",
      text: "Recognition without persuasion is wallpaper. Buy wallpaper after you know what the room is for.",
    },
    {
      type: "takeaway",
      text: "Every product deserves a story before it deserves a logo. Identity should express meaning, not invent it.",
    },
    {
      type: "cta",
      lead: "nau studio starts with research and narrative so brand work has something real to express.",
      button: "Visit nau studio",
      href: "/",
    },
  ],
};

export default post;
