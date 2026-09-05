export const serviceCategories = [
  "Research & Positioning",
  "Content Creation",
  "Marketing Strategy",
] as const;

export const selectedWorkSection = {
  projects: [
    {
      id: "tommy-hilfiger",
      name: "Tommy Hilfiger",
      src: "/logos/tommy-hilfiger.png",
    },
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
    "Product brands growing through one connected campaign at a time.",
  cta: "View all",
  ctaHref: "/clients",
  homeLimit: 4,
};

export const pageBottomCtaCopy = {
  ctaLead: "Let the right audience find you through one connected campaign.",
  ctaHighlight: "That's the impact we build together.",
  ctaButton: "Work with me",
  ctaHref: "/contact",
  secondaryButton: "View services",
  secondaryHref: "/#services",
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
  count: 3,
};

export const industriesSectionCopy = {
  title: "Industries.",
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
      image: "/images/industries/travel-media.jpg",
      imageAlt: "Travel magazine with a colorful landscape cover on a clean surface",
    },
  ],
};

export const servicesItems = [
  {
    number: "001",
    title: "Research & Positioning",
    summary:
      "Inside your campaign: a clear read on the market, category and competitors, plus positioning on who it is for and why it wins, before anything is filmed.",
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
      "The campaign deliverable: a full UGC series made to hold attention. On-location shoots in Europe are a separate tier, agreed on the first consultation.",
    thumbnail: "/images/service-content-creation-minimal.png",
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
      "Inside your campaign: messaging, hooks, channel choices and a 60-day organic plan the series carries. Not a standalone strategy deck.",
    thumbnail: "/images/service-marketing-strategy.png",
    categories: [
      "Growth",
      "Launch",
      "Channels",
      "Messaging",
    ],
  },
];

export const capabilitiesSectionCopy = {
  title: "Capabilities.",
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
        "Testimonials and street marketing became the spine. Social kept the standard. The feed finally sounded like the product buyers already trust.",
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
        "Set aside a separate production budget when we film with your team.",
        "Travel and related logistics may be quoted separately if they sit outside the agreed fee.",
      ],
    },
  ],
};

export const moreServicesSectionCopy = {
  label: "Need something else?",
  headlineLead: "The main offer is one connected campaign.",
  headlineRest: "On-location shoots in Europe are scoped separately.",
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
  title: "Now get it in front of the right\u00A0buyers.",
  company: "nau studio",
  lead:
    "I help product brands grow through positioning, organic go-to-market, and connected campaign video.",
  field:
    "Ten years across Tommy Hilfiger, outdoor brands, and a venture studio building early-stage businesses — plus four years behind the camera as a photographer and videographer. Product and growth trained, so I know what needs to be said and how to capture it.",
  proof:
    "We start with who buys and why you win, then build the UGC series around it. On-location shoots in Europe are also available when that path fits.",
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
      "One connected campaign: research, positioning, organic go-to-market and a UGC series that work as one story. On-location shoots in Europe are a separate offer.",
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
