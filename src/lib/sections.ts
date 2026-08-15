export const serviceCategories = [
  "Research & Positioning",
  "Content Creation",
  "Marketing Strategy",
] as const;

export const selectedWorkSection = {
  projects: [
    {
      id: "the-pine",
      name: "The Pine",
      src: "/logos/the-pine.png",
    },
    {
      id: "go-guide",
      name: "Go Guide",
      src: "/logos/go-guide.png",
    },
    {
      id: "yan-bibiyan",
      name: "Yan Bibiyan",
      src: "/logos/yan-bibiyan.png",
    },
    {
      id: "fly-the-earth",
      name: "Fly the Earth",
      src: "/logos/fly-the-earth.png",
    },
    {
      id: "dea-accelerate",
      name: "DEA",
      src: "/logos/dea.png",
    },
    {
      id: "kingo",
      name: "Kingo",
      src: "/logos/kingo.png",
    },
    {
      id: "patronaj",
      name: "Patronaj.net",
      src: "/logos/patronaj.png",
    },
  ],
};

/** @deprecated Use selectedWorkSection.projects */
export const clientLogos = selectedWorkSection.projects;

export const featuredProjects = [
  {
    slug: "the-pine",
    title: "The Pine.",
    year: "2025",
    image: "/images/clients/the-pine-progress.png",
  },
  {
    slug: "go-guide",
    title: "Go Guide.",
    year: "2025",
    image: "/images/clients/go-guide-cover.png",
  },
  {
    slug: "kingo",
    title: "Kingo.",
    year: "2024",
    image: "/images/clients/kingo-cover-v2.png",
  },
  {
    slug: "fly-the-earth",
    title: "Fly the Earth.",
    year: "2024",
    image: "/images/clients/fly-the-earth-wing.jpg",
  },
];

export const projectsSectionCopy = {
  count: "20+",
  description:
    "Selected work with product brands growing steadily: organic go-to-market, positioning and campaign content series.",
  cta: "View all",
  ctaHref: "/clients",
  homeLimit: 4,
};

export const pageBottomCtaCopy = {
  ctaLead: "Let the right audience find you, with 10 videos only.",
  ctaHighlight: "That's the progress we build together.",
  ctaButton: "Work with me",
  ctaHref: "/contact",
  secondaryButton: "Explore products",
  secondaryHref: "/#digital-guides",
  contact: {
    name: "Stefani Dimitrova",
    role: "Organic GTM & Product Storyteller",
    image: "/images/stefani-dimitrova-portrait.jpg",
  },
};

export const projectsPageCopy = {
  title: "Clients.",
  description:
    "Work across the full cycle: Research & Positioning, Marketing Strategy, and Content Creation.",
  searchPlaceholder: "Search...",
  categoryLabel: "Category",
  categories: [...serviceCategories],
  ...pageBottomCtaCopy,
};

export const projectsPageItems = [
  {
    slug: "the-pine",
    title: "The Pine.",
    displayName: "The Pine",
    year: "2025",
    category: "Content Creation",
    image: "/images/clients/the-pine-progress.png",
    logo: "/logos/the-pine.png",
  },
  {
    slug: "boltshift-rebrand",
    title: "Trailform.",
    displayName: "Trailform",
    year: "2025",
    category: "Research & Positioning",
    image:
      "https://framerusercontent.com/images/TQUaM9GTresksymLH16ncQaPo.jpg",
    logo: "https://framerusercontent.com/images/uesNBJIRG5fZ2tDJzkhxXbuauQw.svg",
  },
  {
    slug: "ephemeral-campaign",
    title: "Shoreline.",
    displayName: "Shoreline",
    year: "2025",
    category: "Marketing Strategy",
    image:
      "https://framerusercontent.com/images/r3DvXiPExOamPrqqTNfWM1K9o4.jpg",
    logo: "https://framerusercontent.com/images/PyQzA1IF3BF1gkVO1xuZHClY0c.svg",
  },
  {
    slug: "warpspeed-launch",
    title: "Fieldkit.",
    displayName: "Fieldkit",
    year: "2024",
    category: "Marketing Strategy",
    image:
      "https://framerusercontent.com/images/UPqJOHQLdYtNuK2jee5437Lno.jpg",
    logo: "https://framerusercontent.com/images/j2k0BUaOnC0jNyx5dP4hieQnFL4.svg",
  },
  {
    slug: "wilson-co-studio",
    title: "Northline.",
    displayName: "Northline",
    year: "2024",
    category: "Research & Positioning",
    image:
      "https://framerusercontent.com/images/HlvuJF9yIQ3Q8fP86EjFIq5ExE.jpg",
    logo: "https://framerusercontent.com/images/kH7hh1Be4txgKwuTgZl3jpdZp8.svg",
  },
  {
    slug: "experiences-app",
    title: "Summit Co.",
    displayName: "Summit Co.",
    year: "2023",
    category: "Marketing Strategy",
    image:
      "https://framerusercontent.com/images/0KGHRsvK3go8kOWricmADe0VWs.jpg",
    logo: "https://framerusercontent.com/images/JLzkuHlsyLa7VHaiV3ZJ16kiHhg.svg",
  },
  {
    slug: "cloudwatch-platform",
    title: "Lenscraft.",
    displayName: "Lenscraft",
    year: "2020",
    category: "Marketing Strategy",
    image:
      "https://framerusercontent.com/images/qiCYd5j7XEmvyt9BpMldI3mNm8.jpg",
    logo: "https://framerusercontent.com/images/zCY9SAfJ5gqVMOvrM5dzywwbU.svg",
  },
];

export const servicesSectionCopy = {
  count: 4,
};

export const industriesSectionCopy = {
  title: "Industries.",
  platformsLabel: "Videos made for",
  platforms: ["Instagram", "TikTok", "LinkedIn", "YouTube Shorts"],
  items: [
    {
      name: "Travel tech",
      blurb: "Apps and platforms for travel and education.",
    },
    {
      name: "Consumer goods",
      blurb: "Sports gear, clothes, food and accessories.",
    },
    {
      name: "Travel media",
      blurb: "Magazines and brands\nbuilt on travel stories.",
    },
  ],
};

export const servicesItems = [
  {
    number: "001",
    title: "Research & Positioning",
    summary:
      "You receive a clear assessment of what you're launching and the problem it solves: a map of the market, category and competitors, and sharp positioning on who it's for and why it wins, before anyone films a post.",
    thumbnail: "/images/service-research-positioning.png",
    categories: [
      "Validation",
      "Research",
      "Competitors",
      "Positioning",
    ],
  },
  {
    number: "002",
    title: "Content Creation",
    summary:
      "You receive an early brief for the campaign series. Then I deliver 10 series or promo videos, either as UGC I create or filmed with you and your team anywhere in Europe, made to hold attention longer.",
    thumbnail: "/images/service-content-creation-phone.png",
    categories: [
      "Campaigns",
      "Promo",
      "UGC",
      "Storytelling",
    ],
  },
  {
    number: "003",
    title: "Marketing Strategy",
    summary:
      "You receive a plan you can put into practice, including messaging, hooks and channel choices, plus a campaign story that compounds across the series. A launch and growth sequence, with the videos shipping last.",
    thumbnail: "/images/service-marketing-strategy.png",
    categories: [
      "Growth",
      "Launch",
      "Channels",
      "Messaging",
    ],
  },
  {
    number: "004",
    title: "Digital Guides",
    summary:
      "You receive strategy playbooks when a full engagement isn't the right fit yet. Positioning, launch and GTM frameworks from how I work with product brands, delivered on purchase.",
    thumbnail: "/images/service-digital-guides.png",
    categories: [
      "Positioning",
      "GTM",
      "Organic",
      "Hooks",
    ],
  },
];

export const testimonialsSectionCopy = {
  title: "Experiences.",
  year: "Founded 2023",
  summary: {
    rating: "4.9",
    suffix: "/5",
    projectCount: "20+",
    trustedBy: "Trusted by brands in movement, escape and adventure",
    avatars: [
      "/logos/testimonial-the-pine.png",
      "/logos/testimonial-go-guide.png",
      "/logos/testimonial-fly-the-earth.png",
      "/logos/yan-bibiyan.png",
    ],
  },
  reviews: [
    {
      author: "The Pine",
      role: "Team retreats & experiences",
      image: "/logos/testimonial-the-pine.png",
      quote:
        "Full 360: research, strategy and content in one cycle. She turned our retreat offer into organic reach without buying ads.",
      layout: "profile-top-box",
    },
    {
      author: "Go Guide",
      role: "Adventure experiences",
      image: "/logos/testimonial-go-guide.png",
      quote:
        "We came with the strategy. She built a content series that finally sounds like us in the field: pieces that work together, and stories people stay with.",
      layout: "profile-bottom",
    },
    {
      author: "Fly the Earth",
      role: "Travel brand",
      image: "/logos/testimonial-fly-the-earth.png",
      quote:
        "Sharp market and competitor research that clarified where we stand, and who we need to win.",
      layout: "profile-top-box",
    },
  ],
};

export const pricingSectionCopy = {
  title: "Work with me.",
  vatNote: "All prices excl. VAT.",
  deliveryLabel: "Delivery",
  outcomeLabel: "Outcome",
  collaborationLabel: "Collaboration",
  includesLabel: "You get",
  cta: "Work with me",
  ctaHref: "/contact",
  offer: {
    id: "full-cycle",
    name: "Full cycle",
    price: "€1,440",
    originalPrice: "€1,600",
    discountLabel: "10% off",
    savingsLabel: "Save €160",
    forWhom:
      "Let the right audience find you, with 10 videos only, plus research and positioning for a 360° strategy.",
    delivery: "4-6 weeks",
    collaboration: [
      "Free discovery call before you commit",
      "Kick-off workshop",
      "Working sessions through the cycle",
      "Mid-point review + final walkthrough",
      "Async feedback and 2 revision rounds",
    ],
    includes: [
      "Research: market, category and product audit",
      "Competitor teardown (5-8 brands)",
      "Personas with jobs-to-be-done",
      "Positioning, messaging and tone of voice",
      "60-day plan for the 10 videos + campaign angles",
      "Creative direction for the series",
      "10 series or promo videos I make for you: UGC I create, or I come shoot you and your team anywhere in Europe",
      "Ideas for supporting content so the videos sit in a 360° strategy. Executing that with me is priced separately",
    ],
    highlights: [
      "10 series or promo videos I\u00A0make",
      "Market, competitors and\u00A0positioning",
      "A 60-day plan for the\u00A010\u00A0videos",
    ],
    outcome:
      "Let the right audience find you, with 10 videos only. I create them as UGC, or I shoot you and your team anywhere in Europe. Supporting-content ideas for a 360° strategy are included. Executing those with me is extra.",
    outcomeMobile:
      "Let the right audience find you, with 10 videos only. UGC I create, or I shoot you anywhere in Europe. Supporting-content ideas included. Execution with me is extra.",
    image: "/images/offer-camera-3d-peek.png",
    imageAlt: "Hand holding a Sony Alpha camera from behind the offer card, content creation for product brands",
  },
  storeTeaser: {
    id: "digital-guides",
    name: "Digital guides",
    price: "From $19",
    forWhom: "Positioning, GTM and the series, without a full engagement.",
    outcome:
      "The same frameworks I use on client projects, packaged as guides you can buy and use straight away.",
    delivery: "Instant download",
    cta: "Purchase",
    href: "/#digital-guides",
  },
};

export const storeSectionCopy = {
  title: "Products.",
  description:
    "Digital guides with the same strategy thinking as a client engagement. Buy online and use them straight away.",
  searchPlaceholder: "Search...",
  categoryLabel: "Category",
  categories: [...serviceCategories],
  emptyState: "No guides match your search.",
  intro:
    "Playbooks built from real launches, for brands that want clarity before committing to a full project.",
  stickers:
    "Stickers are free to friends, partners and brands building gear worth talking about.",
  cta: "Get the guide",
  packageCta: "Get the set",
  packageOfferEyebrow: "All three combined",
  packageOfferHeadline:
    "Walk away knowing your buyer, how you’ll grow, and what to film.",
  packageOfferBody:
    "Buyer locked, GTM you can run, and a 10-video series that carries it. One coherent plan instead of three loose downloads.",
  packageOfferLabel: "Take the full set",
  packageOfferNote: "Usually $97",
  packageOfferSave: "Save $18",
  packageOfferHref: "/products/full-guides-set",
  notifyCta: "Tell me when it drops",
  comingSoonLabel: "Coming soon",
  checkoutSuccessTitle: "Payment received",
  checkoutSuccessNote:
    "Thanks. I'll email your guide shortly. This is test mode until you switch Stripe to live keys.",
  checkoutCancelTitle: "Checkout cancelled",
  checkoutCancelNote: "No charge was made. Browse again whenever you're ready.",
  items: [
    {
      id: "product-positioning-workbook",
      title: "The 10-Video Series",
      price: "$29",
      category: "Content Creation",
      blurb: "Turn your GTM into a campaign people follow.",
      overview: {
        eyebrow: "Digital guide",
        headline: "Turn your GTM into 10 videos that work as one campaign.",
        lead:
          "A practical guide for building the series from the strategy you already have. You leave with the videos, order and story that carry the GTM, instead of a pile of disconnected posts.",
        highlights: [
          "Which videos the series actually needs, and which to cut",
          "A story order that follows the GTM, not the algorithm",
          "Hooks, proof and closer pieces that work as one campaign",
          "A brief you can shoot, or hand to a team, without starting over",
        ],
        includes: [
          "Worksheets you can complete in one focused session",
          "Prompts from the same framing I use with client brands",
          "Instant download after checkout",
        ],
        bestFor:
          "Founders and marketers who already have a GTM, and need the series that makes it land.",
        checkoutLabel: "Checkout · $29",
        preview: [
          {
            number: "01",
            title: "The series map",
            note: "Ten slots. One story. Nothing that does not earn its place.",
          },
          {
            number: "02",
            title: "What to film",
            note: "Hooks, proof, field cuts and a closer that still sounds like you.",
          },
          {
            number: "03",
            title: "What to cut",
            note: "The posts that look busy and do nothing for the GTM.",
          },
          {
            number: "04",
            title: "The brief",
            note: "Ready to shoot, or to hand to a team, without starting over.",
          },
        ],
      },
      poster: {
        label: "Series",
        headline: "10-VIDEO",
        subline: "SERIES",
        tagline: "From your GTM",
        image: "/images/guides/outdoor.jpg",
        gradientFrom: "#0e1218",
        gradientTo: "#1f3d5c",
        accent: "#9fd0ff",
      },
    },
    {
      id: "go-to-market-playbook",
      title: "The GTM You Can Run",
      price: "$49",
      category: "Marketing Strategy",
      blurb: "Translate the market into channels, story and sequence.",
      overview: {
        eyebrow: "Digital guide",
        headline: "Turn what you know about the market into a GTM you can run.",
        lead:
          "How to take buyers, alternatives and category truth and shape a go-to-market with channels, story and sequence. Built to leave the deck and go into the next 60 days.",
        highlights: [
          "Which market signals matter, and which to ignore for now",
          "A GTM story the right audience can repeat",
          "Channels and sequence with owners and timing",
          "What to measure in the first stretch so you know if it’s working",
        ],
        includes: [
          "GTM framework and worksheets",
          "Launch sequence templates",
          "Instant download after checkout",
        ],
        bestFor:
          "Teams who understand their market and need a go-to-market they can put into practice.",
        checkoutLabel: "Checkout · $49",
        preview: [
          {
            number: "01",
            title: "The buyer truth",
            note: "Which market signals matter, and which to ignore for now.",
          },
          {
            number: "02",
            title: "The story",
            note: "A GTM line the right audience can repeat without a deck.",
          },
          {
            number: "03",
            title: "The sequence",
            note: "Channels, owners and timing for the next 60 days.",
          },
          {
            number: "04",
            title: "The first proof",
            note: "What to measure so you know if it is working.",
          },
        ],
      },
      poster: {
        label: "GTM",
        headline: "GTM YOU",
        subline: "CAN RUN",
        tagline: "From your market",
        image: "/images/guides/hospitality.jpg",
        industry: "Hospitality",
        gradientFrom: "#0a1210",
        gradientTo: "#164840",
        accent: "#7ef0d4",
      },
    },
    {
      id: "organic-marketing-ideas",
      title: "Name Your Buyer",
      price: "$19",
      category: "Research & Positioning",
      blurb: "Lock the buyer before you film a single video.",
      overview: {
        eyebrow: "Digital guide",
        headline: "Get clear on who buys, before you film a single post.",
        lead:
          "A practical guide for product brands that need sharper positioning. Fill it in once and you’ll know who you serve, why you win, and how to say it without sounding like everyone else.",
        highlights: [
          "Who buys and who doesn’t, written in customer language",
          "Why you win against the real alternatives",
          "A positioning one-liner and messaging starters you can use immediately",
          "Tone notes so your content finally sounds like one brand",
        ],
        includes: [
          "Worksheets you can complete in one focused session",
          "Prompts from the same framing I use with client brands",
          "Instant download after checkout",
        ],
        bestFor:
          "Founders and marketers about to launch, reposition, or brief content, when clarity is the missing piece.",
        checkoutLabel: "Checkout · $19",
        preview: [
          {
            number: "01",
            title: "Who buys",
            note: "The buyer, written in their language, not yours.",
          },
          {
            number: "02",
            title: "Who doesn’t",
            note: "The polite no that keeps the work sharp.",
          },
          {
            number: "03",
            title: "Why you win",
            note: "Against the real alternatives, not a fantasy competitor.",
          },
          {
            number: "04",
            title: "How to say it",
            note: "A one-liner and tone so the next video sounds like one brand.",
          },
        ],
      },
      poster: {
        label: "Buyer",
        headline: "NAME YOUR",
        subline: "BUYER",
        tagline: "Before you film",
        image: "/images/guides/travel.jpg",
        industry: "Travel",
        gradientFrom: "#1c1810",
        gradientTo: "#5a3d1c",
        accent: "#f0c56e",
      },
    },
    {
      id: "full-guides-set",
      title: "The Full Set",
      price: "$79",
      category: "Package",
      blurb: "Clear buyer, runnable GTM, series ready to shoot.",
      overview: {
        eyebrow: "Package",
        headline:
          "Walk away knowing your buyer, how you’ll grow, and what to film.",
        lead:
          "With all three guides you leave with a named buyer, a GTM you can actually run, and a 10-video series that carries that story. Same framing I use with clients, packaged so the pieces hand off instead of sitting alone.",
        highlights: [
          "A clear buyer and language before you film anything",
          "A GTM with channels, story and sequence you can run",
          "A 10-video series that carries that GTM as one campaign",
          "The feeling of a finished plan, not three loose downloads",
        ],
        includes: [
          "All three digital guides",
          "The same framing I use with client brands",
          "Instant download after checkout",
        ],
        bestFor:
          "Founders and marketers who want the feeling of a finished plan: clear buyer, runnable GTM, and a series ready to shoot.",
        checkoutLabel: "Checkout · $79",
        preview: [
          {
            number: "01",
            title: "Name Your Buyer",
            note: "Lock the buyer and the language before anything else.",
          },
          {
            number: "02",
            title: "The GTM You Can Run",
            note: "Translate the market into channels, story and sequence.",
          },
          {
            number: "03",
            title: "The 10-Video Series",
            note: "Turn that GTM into ten videos that work as one campaign.",
          },
          {
            number: "04",
            title: "One download",
            note: "All three guides, ready when the set drops.",
          },
        ],
      },
      poster: {
        label: "Package",
        headline: "ALL 3",
        subline: "GUIDES",
        tagline: "Usually $97",
        image: "/images/guides/outdoor.jpg",
        gradientFrom: "#120e18",
        gradientTo: "#1a2a4a",
        accent: "#9fd0ff",
      },
    },
  ],
};

export type StoreGuide = (typeof storeSectionCopy.items)[number];

export const moreServicesSectionCopy = {
  label: "Need something else?",
  headlineLead: "Need Research & Positioning, Marketing Strategy, or a campaign content series.",
  headlineRest: "I shape the mix around your product. The full cycle stays connected.",
  contact: {
    name: "Stefani Dimitrova",
    role: "Organic GTM & Product Storyteller",
    image: "/images/stefani-dimitrova-portrait.jpg",
  },
};

export const teamSectionCopy = {
  brand: "nau studio",
  sectionLabel: "Who I am",
  sectionTitleLead: "meet the",
  sectionTitle: "Founder.",
  titleLead: "You built something worth\u00A0buying.",
  title: "Now it's time for your audience to find\u00A0you.",
  company: "nau studio",
  lead:
    "I'm Stefani. I help founders bring strong products to the people who should buy them, with demand that lasts beyond a single campaign.",
  field:
    "We start by defining who the product is for, why it wins, and what to say. Then I produce those ten videos as UGC I create, or filmed with you and your team anywhere in\u00A0Europe.",
  proof:
    "Not another stream of random posts. Clear, memorable videos that people understand in seconds and share with buyers who already need what you\u00A0built.",
  closeLead: "You bring the\u00A0product.",
  closeEmphasis: "I help the right audience find\u00A0it.",
  metrics: [
    { value: "20+", label: "Brands" },
    { value: "60+", label: "Campaigns" },
    { value: "500+", label: "Videos" },
    { value: "1M+", label: "Views" },
  ],
  platformsProofLabel: "Built for",
  careers: {
    title: "Start here",
    description: "Tell me about the product and where growth feels stuck.",
    cta: "Work with me",
    href: "/contact",
  },
  photo: {
    src: "/images/stefani-dimitrova-portrait.jpg",
    alt: "Stefani Dimitrova, founder of nau studio",
    caption: "Stefani Dimitrova",
    role: "Organic GTM & Product Storyteller",
  },
};

export const teamMembers = [
  {
    name: "Stefani Dimitrova",
    role: "Organic GTM & Product Storyteller",
    image: "/images/stefani-dimitrova-portrait.jpg",
  },
];

export const faqSectionCopy = {
  title: "FAQ.",
  description: "Clear answers about working with me.",
};

export const faqItems = [
  {
    question: "Who do you work with?",
    answer:
      "Product brands that want steady growth: outdoor, travel, marine, consumer tech, lifestyle, sustainable goods and sports equipment. Focus is physical products.",
  },
  {
    question: "What do you help with?",
    answer:
      "The full cycle: research, positioning, organic go-to-market, and content as a campaign series of promo videos that complement each other so attention lasts longer. All three services are real. I'm strongest at executing organic GTM and building the storytelling that makes it land.",
  },
  {
    question: "How are you different from creators?",
    answer:
      "Most creators start at the post. I start earlier and finish later. Research, positioning, launch strategy and a connected content series stay one 360 cycle, so the story matches the product and the growth plan holds.",
  },
  {
    question: "Is this UGC or social media management?",
    answer:
      "Neither day-to-day social management nor random UGC. I make exactly 10 series or promo videos around one campaign, either UGC I create, or I come shoot you and your team anywhere in Europe. Research and positioning come first.",
  },
  {
    question: "What’s included beyond the 10 videos?",
    answer:
      "You get ideas for supporting content so the series sits in a 360° strategy: posts, angles and follow-ups that complement the videos. If you want me to execute that supporting layer with you, that’s priced separately.",
  },
  {
    question: "Can you help if we already launched?",
    answer:
      "Yes. I clarify positioning, rebuild the organic go-to-market plan, and create a content series that matches what the product delivers, so the next posts pull people through one story, not scatter them.",
  },
  {
    question: "How do I get started?",
    answer:
      "Send a short note about your product brand and whether you need clarity, a launch plan, or a campaign content series that finally matches the product. I'll suggest a next step.",
  },
];

export const blogSectionCopy = {
  title: "Newest essays",
  titleMuted: "from the studio.",
  description:
    "Organic growth, positioning and campaign storytelling for brands that make things.",
  cta: "Read",
  ctaHref: "/essays",
  brand: "nau",
  featuredTitle:
    "Great products still fail before PMF. Here's why.",
};

export const blogPreviewPosts = [
  {
    slug: "if-patagonia-hired-me-tomorrow-where-id-start",
    date: "July 18, 2026",
    title: "If Patagonia hired me tomorrow, I'd start here",
    excerpt:
      "How I'd approach research, positioning and launch storytelling for a premium outdoor brand.",
    authorImage: "/images/blog/blog-23-patagonia.png",
  },
  {
    slug: "best-marketing-feels-like-product-design",
    date: "July 6, 2026",
    title: "If it feels like an ad, you've already lost them",
    excerpt:
      "When marketing sits on top of the product, it underperforms. Belief belongs in the product experience.",
    authorImage: "/images/blog/blog-34-marketing-product.png",
  },
];

export const blogFeaturedPost = {
  slug: "why-great-products-fail-before-product-market-fit",
  title: "Great products still fail before PMF. Here's why.",
  image: "/images/blog/blog-31-great-products-fail.png",
};

export const contactSectionCopy = {
  brand: "nau",
  formTitle: "Have a project",
  formTitleMuted: "in mind?",
  fields: {
    name: "Your name*",
    email: "E-mail*",
    message: "Message",
  },
  placeholders: {
    name: "Alex Morgan",
    email: "you@brand.com",
    message:
      "Product, who it's for, where growth feels stuck, and a link if you have one.",
  },
  submit: "Send message",
  legalLead: "By submitting, you agree to my",
  termsLabel: "Terms",
  privacyLabel: "Privacy Policy",
  headline: "Let's talk.",
  subheadline:
    "I work with brands that sell movement, escape and adventure: outdoor, travel, experiences and product brands that want steady organic growth.",
  prepLabel: "Include in your message",
  prepItems: [
    "The product and what stage it's at",
    "Who it's for",
    "Where growth feels stuck",
    "A link to the website or deck",
  ],
  replyNote: "I read every note before we talk and reply within 2 business days.",
};

export const contactPageCopy = {
  title: "Get in touch.",
  subheadlineLead: "Selling movement, escape or adventure?",
  subheadlineRest:
    " Get in touch and I'll suggest a next step across Research & Positioning, Marketing Strategy or Content Creation.",
  teamLead: {
    name: "Stefani Dimitrova",
    role: "Organic GTM & Product Storyteller",
    image: "/images/stefani-dimitrova-portrait.jpg",
  },
  placeholders: {
    name: "Your name *",
    email: "Email *",
    message: "Tell me about the product and where growth feels stuck.",
  },
  submit: "Send message",
  legalLead: "By submitting, you agree to my",
  termsLabel: "Terms",
  privacyLabel: "Privacy Policy",
};

export const studioPageCopy = {
  meta: {
    title: "Studio | Stefani Dimitrova · nau studio Europe",
    description:
      "Meet Stefani Dimitrova and nau studio: organic go-to-market, product positioning and campaign content series for outdoor, travel and hospitality brands across Europe. Full cycle from research to launch.",
  },
  intro: {
    label: "Studio",
    title: "nau studio.",
    location: "Bulgaria · Europe",
    since: "Founded 2023",
    photo: {
      src: "/images/studio-header-ripples.jpg",
      alt: "Black and white water ripples",
    },
  },
  impact: {
    stats: [
      { value: "1M+", label: "Organic views" },
      { value: "20+", label: "Projects launched" },
      { value: "98%", label: "Client satisfaction" },
      { value: "500+", label: "Videos produced" },
    ],
  },
  approach: {
    lead: "A one-founder practice for product brands: research, positioning and campaign content series in one\u00A0cycle.",
  },
  story: {
    label: "Story",
    title: "The story of me.",
    role: "Founder · Organic GTM & Product Storyteller",
    photo: {
      src: "/images/stefani-studio-portrait.jpg",
      alt: "Stefani Dimitrova, founder of nau studio, holding a camera outdoors in Europe",
      caption: "Stefani Dimitrova",
    },
    paragraphs: [
      "I started nau because too many product brands were hiring for posts before they had a story worth posting. Outdoor, travel, hospitality and consumer goods teams were shipping real products, then asking a creator to invent the narrative on the day of the shoot.",
      "My path sits between strategy and making. I research markets, sharpen who the product is for, build organic launch plans, then make the videos myself: 10 series or promo cuts around one campaign, either as UGC I create or on a Europe shoot with you and your team.",
      "You keep the expertise. I help turn it into clear positioning, a go-to-market you can run, and complementary videos that keep attention longer instead of renting a spike.",
    ],
    facts: [
      { label: "Based", value: "Bulgaria" },
      { label: "Reach", value: "Europe" },
      { label: "Focus", value: "Products" },
      { label: "Since", value: "2023" },
    ],
  },
  aboutStudio: {
    label: "Practice",
    title: "What is nau studio?",
    lead:
      "A one-founder practice: research, strategy and campaign content series in one path, so product brands grow without renting attention.",
    body: [
      "Built for outdoor, travel, hospitality and lifestyle products across Europe.",
      "Start with strategy, a full launch, or a content series only. The work stays connected.",
    ],
    pillars: [
      {
        number: "001",
        title: "Clarity",
        text: "Who it's for and why it wins, decided before anyone presses record.",
      },
      {
        number: "002",
        title: "Strategy",
        text: "Organic channels and a launch sequence built to compound, not spike.",
      },
      {
        number: "003",
        title: "Content",
        text: "10 series or promo videos I make (UGC I create, or I come shoot you and your team anywhere in Europe), wrapped around one campaign from steps one and two.",
      },
    ],
  },
  collaborationPhoto: {
    src: "/images/studio-collaboration.jpg",
    alt: "Working session at nau studio, reviewing product storytelling and go-to-market on laptop",
    caption: "In session",
  },
  cycle: {
    label: "Method",
    title: "The full cycle of my work.",
    lead:
      "Six steps from blank page to assets you can run. Content is planned second, after research, and delivered last, once the strategy can carry it.",
    columns: {
      stage: "Stage",
      focus: "Focus",
      outcome: "Outcome",
    },
    steps: [
      {
        number: "001",
        title: "Immerse",
        focus: "Product",
        text: "How it works, who already buys it, and what 'steady growth' means for this brand.",
      },
      {
        number: "002",
        title: "Define",
        focus: "Clarity",
        text: "Who it's for, why it wins, and the messaging, before anyone films a post.",
      },
      {
        number: "003",
        title: "Brief",
        focus: "Content",
        text: "Second after research: lock the 10-video series early. UGC I create, or a Europe shoot with you and your team.",
      },
      {
        number: "004",
        title: "Plan",
        focus: "Strategy",
        text: "Organic channels, launch sequence and a roadmap that the series will carry.",
      },
      {
        number: "005",
        title: "Create",
        focus: "Delivery",
        text: "You receive the videos last: 10 series or promo cuts that complement each other and hold attention longer.",
      },
      {
        number: "006",
        title: "Refine",
        focus: "Learning",
        text: "What resonated, what to cut, and what to ship next in the series, so the cycle compounds.",
      },
    ],
  },
  collab: {
    label: "Collaborations",
    title: "Custom collaborations.",
    lead:
      "Have a product launch, repositioning or Europe content day that does not fit a template? Tell me about the brand and where growth feels stuck. I reply with a clear next step: strategy sprint, full launch or a campaign content series.",
    email: "info@thetimeisnau.com",
    phone: "+359 888 32 9667",
    locationNote: "Working remotely across Europe · On-location shoots anywhere in Europe",
    placeholders: {
      name: "Your name *",
      email: "Work email *",
      company: "Brand / company",
      location: "Where are you based? (city, country)",
      message:
        "Product, audience, and what you need help with: launch, positioning, GTM or content.",
    },
    submit: "Send collaboration request",
    legalLead: "By submitting, you agree to my",
    termsLabel: "Terms",
    privacyLabel: "Privacy Policy",
  },
};
