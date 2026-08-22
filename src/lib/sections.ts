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
    slug: "fly-the-earth",
    title: "Fly the Earth.",
    year: "2024",
    image: "/images/clients/fly-the-earth-wing.jpg",
  },
  {
    slug: "kingo",
    title: "Kingo.",
    year: "2024",
    image: "/images/clients/kingo-cover-v2.png",
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
  ctaLead: "Let the right audience find you through one connected campaign.",
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
  lead: "I work with brands that sell movement, escape and adventure. Same craft across categories: clear story, then content that carries it.",
  platformsLabel: "Videos made for",
  platforms: ["Instagram", "TikTok", "LinkedIn", "YouTube Shorts"],
  items: [
    {
      name: "Travel tech",
      blurb:
        "Apps and platforms for travel and education. Positioning and campaign content that make the product easy to understand on screen.",
      focuses: ["Apps", "Booking", "Edtech", "Launch"],
      image: "/images/industries/tech.jpg",
      imageAlt: "Smartphone app and workstation for a travel tech product",
    },
    {
      name: "Consumer goods",
      blurb:
        "Mountaineering, climbing and freediving gear. Product films and UGC that show niche equipment where it actually earns its place.",
      focuses: ["Climbing", "Mountaineering", "Freediving", "Gorpcore"],
      image: "/images/industries/climbing.jpg",
      imageAlt: "Rock climber with technical outdoor gear on a mountain face",
    },
    {
      name: "Travel media",
      blurb:
        "Magazines, podcasts and campaign work for travel brands. Editorial-minded stories that hold attention longer than a single post.",
      focuses: ["Magazines", "Podcasts", "Campaigns", "Editorial"],
      image: "/images/industries/magazines.jpg",
      imageAlt: "Stack of magazines and print media for travel editorial work",
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
      "You receive an early brief first. Then I deliver a full set of materials as UGC, made to hold attention longer. On-location shoots in Europe are available at a separate price, agreed on the first consultation.",
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
      "You receive a plan you can put into practice, including messaging, hooks and channel choices, plus a story that compounds across the series. A launch and growth sequence, with the materials shipping last.",
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
      "You receive strategy playbooks sold separately from Full cycle, when a full engagement isn't the right fit yet. Positioning, launch and GTM frameworks from how I work with product brands, delivered on purchase.",
    thumbnail: "/images/service-digital-guides.png",
    categories: [
      "Positioning",
      "GTM",
      "Organic",
      "Hooks",
    ],
  },
];

export const capabilitiesSectionCopy = {
  title: "Capabilities.",
  lead: "What a campaign shoot can include for outdoor, travel, hospitality and product brands.",
  items: [
    {
      number: "01",
      title: "Product & brand films",
      text: "Cinematic product films in real use: trails, rooms, tables and streets. Made for websites, launches and paid.",
    },
    {
      number: "02",
      title: "On-location shoots",
      text: "On-location shoots in Europe with you and your team. Priced separately and agreed on the first consultation.",
    },
    {
      number: "03",
      title: "Aesthetic UGC",
      text: "Short-form for Instagram, TikTok, YouTube Shorts and LinkedIn. Field perspective that feels found, not forced.",
    },
    {
      number: "04",
      title: "Drone footage",
      text: "Aerials of place and scale: coastline, mountains, resorts, routes and rooftops. Delivered crisp in 4K.",
    },
    {
      number: "05",
      title: "Still photography",
      text: "Digital and analogue stills from the same shoot. Web, lookbooks, email and social frames that match the film.",
    },
    {
      number: "06",
      title: "Full usage rights",
      text: "Everything delivered is yours to publish: organic, paid, email, partners and listings. No hidden licensing.",
    },
  ],
};

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
      "/logos/testimonial-fly-the-earth.png",
      "/logos/yan-bibiyan.png",
      "/logos/kingo.png",
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
      author: "Fly the Earth",
      role: "Travel brand",
      image: "/logos/testimonial-fly-the-earth.png",
      quote:
        "Sharp market and competitor research that clarified where we stand, and who we need to win.",
      layout: "profile-bottom",
    },
    {
      author: "Kingo",
      role: "Consumer product",
      image: "/logos/kingo.png",
      quote:
        "Clear positioning and a campaign series that finally sounded like the product, not another feed of noise.",
      layout: "profile-top-box",
    },
  ],
};

export const pricingSectionCopy = {
  title: "Work with me.",
  subtitle: [
    "UGC at a fixed price, or on-location with your team.",
  ],
  vatNote: "All prices excl. VAT.",
  deliveryLabel: "Delivery",
  outcomeLabel: "Outcome",
  collaborationLabel: "Collaboration",
  includesLabel: "You get",
  goodToKnowLabel: "Good to know",
  cta: "Work with me",
  ctaHref: "/contact",
  offers: [
    {
      id: "full-cycle-ugc",
      name: "Full cycle · UGC",
      tone: "dark" as const,
      price: "€1,440",
      originalPrice: "€1,600",
      discountLabel: "10% off",
      savingsLabel: "Save €160",
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
        "60-day plan for the series + angles",
        "Creative direction for the series",
        "A full campaign series I make for you as UGC",
        "Ideas for supporting content so the series sits in a 360° strategy. Executing that with me is priced separately",
      ],
      highlights: [
        "UGC series",
        "Positioning",
        "60-day plan",
      ],
      outcome: "One connected campaign as UGC. Supporting ideas included.",
      goodToKnow: [
        "Digital guides are not included. They are sold separately in the store.",
        "Set aside a separate budget for product samples or merch so I can shoot the UGC.",
      ],
    },
    {
      id: "full-cycle-on-location",
      name: "Full cycle · On-location",
      tone: "light" as const,
      price: "Custom",
      priceNote: "Discussed on the first consultation",
      delivery: "Scoped on call",
      collaboration: [
        "Free discovery call before anything is priced",
        "Scope the shoot with you and your team",
        "Kick-off workshop once we agree the fee",
        "Working sessions through the cycle",
        "Mid-point review + final walkthrough",
      ],
      includes: [
        "Research: market, category and product audit",
        "Competitor teardown (5-8 brands)",
        "Personas with jobs-to-be-done",
        "Positioning, messaging and tone of voice",
        "60-day plan for the series + angles",
        "Creative direction for the series",
        "On-location shoots in Europe with you and your team",
        "Ideas for supporting content so the series sits in a 360° strategy. Executing that with me is priced separately",
      ],
      highlights: [
        "Your team",
        "Europe shoots",
        "Scoped on call",
      ],
      outcome: "Same full cycle, filmed with your team in Europe.",
      goodToKnow: [
        "Digital guides are not included. They are sold separately in the store.",
        "Set aside a separate production budget when we film with your team.",
        "Travel and related logistics may be quoted separately if they sit outside the agreed fee.",
      ],
    },
  ],
  storeTeaser: {
    id: "digital-guides",
    name: "Digital guides",
    price: "From $19",
    forWhom:
      "Sold separately from Full cycle. Positioning, GTM and the series, without a full engagement.",
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
    "Sold separately from Full cycle. Same strategy thinking as a client engagement. Buy online and use them straight away.",
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
    "Buyer locked, GTM you can run, and a campaign series that carries it. One coherent plan instead of three loose downloads.",
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
      price: "$49",
      category: "Content Creation",
      blurb: "Turn your GTM into a campaign people follow.",
      overview: {
        eyebrow: "Digital guide",
        headline: "Turn your GTM into a campaign that works as one series.",
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
        checkoutLabel: "Checkout · $49",
        preview: [
          {
            number: "01",
            title: "The series map",
            note: "Each piece. One story. Nothing that does not earn its place.",
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
      price: "$29",
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
        checkoutLabel: "Checkout · $29",
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
          "With all three guides you leave with a named buyer, a GTM you can actually run, and a campaign series that carries that story. Same framing I use with clients, packaged so the pieces hand off instead of sitting alone.",
        highlights: [
          "A clear buyer and language before you film anything",
          "A GTM with channels, story and sequence you can run",
          "A campaign series that carries that GTM as one story",
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
            note: "Turn that GTM into a series that works as one campaign.",
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
    "And that is how you found me. I help founders bring strong products to the people who should buy them, with demand that lasts beyond a single campaign.",
  field:
    "We start by defining who the product is for, why it wins, and what to say. Then I produce a full set of materials as UGC. On-location shoots in Europe are available at a separate price, agreed on the first consultation.",
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
    question: "Are digital guides included in Full cycle?",
    answer:
      "No. Digital guides are sold separately in the store. Full cycle covers research, positioning, the plan and a campaign series as UGC. Guides are for teams that want the frameworks without a full engagement.",
  },
  {
    question: "How are on-location shoots in Europe priced?",
    answer:
      "On-location is its own Full cycle tier. Same research and campaign thinking, filmed with you and your team in Europe. The fee is custom and agreed on the first consultation before you commit.",
  },
  {
    question: "What separate budget should I prepare?",
    answer:
      "Beyond the studio fee, set aside a separate budget for product samples or merch on the UGC tier, or for production costs on the on-location tier. We clarify which path fits on the first call.",
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
  stickersPromo: {
    eyebrow: "QR stickers",
    body: "NAU stickers are out across Europe. Each one asks a question, and the essays live here.",
    cta: "Sticker essays",
    href: "/essays#qr-stickers",
    previewImages: [
      "/images/qr-stickers/solving-right-problem.jpg",
      "/images/qr-stickers/not-first-choice.jpg",
      "/images/qr-stickers/where-users-getting-stuck.jpg",
    ],
  },
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
  sending: "Sending…",
  success: "Message sent. I'll reply within 2 business days.",
  error: "Couldn't send just now. Email info@naustudio.org instead.",
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
    title: "Why nau exists.",
    role: "Founder · Organic GTM & Product Storyteller",
    photo: {
      src: "/images/stefani-studio-portrait.jpg",
      alt: "Stefani Dimitrova, founder of nau studio, holding a camera outdoors in Europe",
      caption: "Stefani Dimitrova",
    },
    paragraphs: [
      "I started nau because too many product brands were hiring for posts before they had a story worth posting. Outdoor, travel, hospitality and consumer goods teams were shipping real products, then asking a creator to invent the narrative on the day of the shoot.",
      "My path sits between strategy and making. I research markets, sharpen who the product is for, build organic launch plans, then produce a campaign's worth of materials around one story as UGC, with on-location shoots in Europe available when we agree that path on the first consultation.",
      "You keep the expertise. I help turn it into clear positioning, a go-to-market you can run, and complementary content that keeps attention longer instead of renting a spike.",
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
        text: "A campaign series I make as UGC (on-location in Europe priced on consultation), wrapped around one story from steps one and two.",
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
        text: "Second after research: lock the campaign early. UGC in the package. On-location in Europe priced on consultation.",
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
        text: "You receive the campaign materials last: pieces that complement each other and hold attention longer.",
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
    email: "info@naustudio.org",
    phone: "+359 888 32 9667",
    locationNote: "Working remotely across Europe · UGC in Full cycle · On-location priced on consultation",
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
