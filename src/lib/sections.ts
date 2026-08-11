export const selectedWorkSection = {
  title: "Selected Work",
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
    slug: "boltshift-rebrand",
    title: "Trailform.",
    year: "2025",
    image:
      "https://framerusercontent.com/images/TQUaM9GTresksymLH16ncQaPo.jpg",
  },
  {
    slug: "ephemeral-campaign",
    title: "Shoreline.",
    year: "2025",
    image:
      "https://framerusercontent.com/images/r3DvXiPExOamPrqqTNfWM1K9o4.jpg",
  },
  {
    slug: "warpspeed-launch",
    title: "Fieldkit.",
    year: "2024",
    image:
      "https://framerusercontent.com/images/UPqJOHQLdYtNuK2jee5437Lno.jpg",
  },
  {
    slug: "wilson-co-studio",
    title: "Northline.",
    year: "2024",
    image:
      "https://framerusercontent.com/images/HlvuJF9yIQ3Q8fP86EjFIq5ExE.jpg",
  },
  {
    slug: "experiences-app",
    title: "Summit Co.",
    year: "2023",
    image:
      "https://framerusercontent.com/images/0KGHRsvK3go8kOWricmADe0VWs.jpg",
  },
  {
    slug: "cloudwatch-platform",
    title: "Lenscraft.",
    year: "2023",
    image:
      "https://framerusercontent.com/images/qiCYd5j7XEmvyt9BpMldI3mNm8.jpg",
  },
];

export const projectsSectionCopy = {
  count: "20+",
  description:
    "Selected work with product brands growing steadily: organic go-to-market, positioning and content that matters.",
  cta: "View all",
  ctaHref: "/clients",
  homeLimit: 4,
};

export const projectsPageCopy = {
  title: "Clients.",
  description:
    "Work across the full cycle: Research & Positioning, Marketing Strategy, and Content Creation.",
  searchPlaceholder: "Search…",
  categoryLabel: "Category",
  categories: [
    "Research & Positioning",
    "Marketing Strategy",
    "Content Creation",
  ],
  ctaLead:
    "Need Research & Positioning, Marketing Strategy, or content that matters?",
  ctaHighlight: "I'm here to help.",
  contact: {
    name: "Stefani Dimitrova",
    role: "Organic GTM & Product Storyteller",
    image: "/images/stefani-dimitrova-portrait.jpg",
  },
};

export const projectsPageItems = [
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

const img = (id: string, size = 280) =>
  `https://framerusercontent.com/images/${id}.jpg?width=${size}&height=${size}`;

export const servicesItems = [
  {
    number: "001",
    title: "Research & Positioning",
    description:
      "I validate what you're launching, map the market, and sharpen positioning so organic growth has somewhere true to stand.",
    thumbnail: img("vGSJoy0fkCYvuK5CETUzS64NNo"),
    categories: [
      "Product validation",
      "Market research",
      "Competitor analysis",
      "Customer insight",
      "Value proposition",
      "Product positioning",
    ],
    extraCount: "6+",
  },
  {
    number: "002",
    title: "Marketing Strategy",
    description:
      "I turn research into a marketing strategy you can actually run: channels, stories and creative that compound for steady organic growth.",
    thumbnail: img("qQlR5lTiRYzT2lPzSWLLVkcgH6Y"),
    categories: [
      "Organic growth strategy",
      "Launch planning",
      "Channel planning",
      "Campaign concepts",
      "Product storytelling",
      "Creative testing",
    ],
    extraCount: "6+",
  },
  {
    number: "003",
    title: "Content Creation",
    description:
      "I plan it, make it, or guide your team - so brands that sell movement, escape and adventure earn organic reach instead of buying attention.",
    thumbnail: "/images/service-content-creation.png",
    categories: [
      "Content planning",
      "Founder-led content",
      "Product storytelling",
      "Team guidance",
      "Short-form video",
      "Campaign assets",
    ],
    extraCount: "6+",
  },
  {
    number: "004",
    title: "Digital Guides",
    description:
      "I write self-paced playbooks for when you want clarity without a full engagement - positioning, launch planning and GTM on paper, ready to buy.",
    thumbnail: "/images/guides/travel-lake.jpg",
    categories: [
      "Organic marketing ideas",
      "Positioning workbook",
      "Launch planning",
      "Go-to-market playbook",
      "Product validation",
      "Research to launch",
    ],
    extraCount: "6+",
  },
];

export const testimonialsSectionCopy = {
  label: "Testimonials",
  title: "Experiences.",
  year: "Founded 2023",
  summary: {
    rating: "4.9",
    suffix: "/5",
    highlight: "20+ projects",
    text: "with product brands that needed organic growth plans and content that matched the product.",
    intro: "I've worked on",
    projectCount: "20+",
    trustedBy: "Trusted by brands in movement, escape and adventure",
    cta: "Work with me",
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
      role: "Outdoor apparel",
      quote:
        "Full 360 - research, strategy and content in one cycle. She turned our product story into organic reach without buying ads.",
      image: "/logos/testimonial-the-pine.png",
      layout: "profile-top-box",
    },
    {
      author: "Go Guide",
      role: "Adventure experiences",
      quote:
        "We came with the strategy. She built the content that finally sounds like us in the field - stories people actually save and share.",
      image: "/logos/testimonial-go-guide.png",
      layout: "profile-bottom",
    },
    {
      author: "Fly the Earth",
      role: "Travel brand",
      quote:
        "Sharp market and competitor research that clarified where we actually stand - and who we need to win.",
      image: "/logos/testimonial-fly-the-earth.png",
      layout: "profile-top-box",
    },
  ],
};

export const pricingSectionCopy = {
  label: "Simple packages",
  title: "Packages.",
  vatNote: "All prices excl. VAT.",
  recommendedBadge: "Recommended",
  deliveryLabel: "Delivery",
  outcomeLabel: "Outcome",
  collaborationLabel: "Collaboration",
  includesLabel: "You get",
  cta: "Purchase",
      contentAddonsLabel: "Add content",
  contentAddonsSummary: "Optional · keep Strategy only, or add UGC / team day",
  contentAddons: [
    {
      id: "ugc-creator",
      title: "Remote UGC content",
      summary:
        "I create the content on camera - authentic UGC your brand can run across organic and paid. Shot remotely.",
      price: "From +€1,200",
      standalonePrice: "From €1,200",
      features: [
        "12 storytelling videos (one per week) as a series, edited (15-45s)",
        "Hooks and scripts aligned to your messaging",
        "Product-in-hand and talking-to-camera formats",
        "Captions and file handoff",
        "2 revision rounds on selects",
      ],
    },
    {
      id: "production-sprint",
      title: "Team content",
      regionNote: "Europe only",
      summary:
        "Two full content days with founder, product and campaign video - shot on-site only.",
      price: "From +€1,400",
      standalonePrice: "From €1,400",
      features: [
        "2 full-day content sessions (founder + product)",
        "12 short-form videos, edited (15-45s)",
        "1 product demo cut (60-90s)",
        "Website hero video + 3 campaign cuts",
        "Shot list, captions and file handoff",
        "2 revision rounds on selects",
      ],
    },
  ],
  packages: [
    {
      id: "strategy-sprint",
      name: "Strategy sprint",
      price: "From €2,400",
      unit: "",
      forWhom: "Step 1 · Research and positioning. Content optional.",
      delivery: "2-3 weeks",
      recommended: false,
      collaboration: [
        "Free discovery call (30 min) before you commit",
        "Kickoff workshop (90 min)",
        "2 working sessions (60 min each)",
        "Final walkthrough (60 min)",
        "Async feedback in shared docs",
        "2 revision rounds on the pack",
      ],
      includes: [
        "Research pack, 10-14 pages: market, category, product audit",
        "Competitor teardown: 5-8 brands",
        "2-3 customer personas with jobs-to-be-done",
        "Positioning one-pager (who it's for, why it wins)",
        "Value proposition + messaging framework, 2 pages",
        "Tone of voice starter (do / don't examples)",
        "Recommendations brief with next steps (2-3 pages)",
      ],
      highlights: [
        "Market research + competitor teardown",
        "Positioning and messaging framework",
        "Personas, tone of voice and next steps",
      ],
      outcome: "Who it's for, why it wins, how to say it.",
      allowsAddon: true,
      contentAddonChoice: true,
    },
    {
      id: "launch-partner",
      name: "Full launch",
      price: "From €3,420",
      originalPrice: "From €3,800",
      discountLabel: "10% off",
      unit: "",
      forWhom: "Step 2 · Strategy, go-to-market and content included.",
      delivery: "4-6 weeks",
      recommended: true,
      collaboration: [
        "Free discovery call (30 min) before you commit",
        "Kickoff workshop (90 min)",
        "4 working sessions (60 min each)",
        "Mid-point review (45 min)",
        "Final walkthrough (60 min)",
        "Async feedback in shared docs",
        "2 revision rounds on the full pack",
      ],
      includes: [
        "Everything in Strategy",
        "Organic GTM plan, 5-10 pages: channels, sequence, owners",
        "Campaign strategy: 2-3 launch angles with hooks",
        "Website messaging outline: home + 3 key pages",
        "Creative direction notes (mood, references, formats)",
        "Organic growth ideas list (15-20 tactics)",
        "KPI sheet: what to measure in the first 90 days",
        "Content production included - remote UGC or team content day",
      ],
      highlights: [
        "Everything in Strategy",
        "90-day GTM roadmap",
        "Content included · UGC or team day",
      ],
      outcome: "A plan you can run week by week, with content included.",
      allowsAddon: true,
      contentAddonChoice: true,
      contentAddonLabel: "Choose your content format",
      contentAddonSummary: "Included in the price · pick one before purchasing",
      contentIncluded: true,
    },
    {
      id: "content-sprint",
      name: "Content sprint",
      price: "From €1,200",
      unit: "",
      forWhom: "Step 3 · Already have a plan? Video only.",
      delivery: "1-2 weeks",
      recommended: false,
      collaboration: [
        "Free discovery call (30 min) - confirm fit, not a strategy deep-dive",
        "Creative alignment session (45 min) on hooks, tone and formats",
        "Async feedback on selects",
        "2 revision rounds",
      ],
      includes: [
        "Hooks and scripts aligned to your messaging before we shoot",
        "Shot list and production plan",
        "Captions and organised file handoff",
        "2 revision rounds on selects",
      ],
      highlights: [
        "Remote UGC or team content day",
        "4-6 short videos, edited",
        "No strategy or repositioning",
      ],
      outcome: "Edited deliverables ready to post.",
      allowsAddon: false,
      contentAddonChoice: true,
      contentAddonLabel: "Choose format",
      contentAddonSummary: "Required · pick UGC or team day before purchasing",
      contentOnly: true,
    },
  ],
  storeTeaser: {
    id: "digital-guides",
    name: "Digital guides",
    eyebrow: "Self-paced",
    price: "From $19",
    forWhom:
      "If you already have a strategy and you enjoy doing your content, but you need just a little reassurance and polishing - here is a portal to my packages, where you can find digital guides created from me to you.",
    outcome:
      "Self-paced playbooks when you want clarity without a full engagement. Pick a guide, apply it and move at your own speed.",
    delivery: "Instant download",
    cta: "Purchase",
    href: "/packages",
  },
};

export const storeSectionCopy = {
  title: "Packages",
  subtitle: "Digital guides. Paid online - or free if you find a QR across Europe.",
  intro:
    "Self-paced strategy on paper before you hire anyone. Find a nau QR on a sticker somewhere across Europe and that same guide is free - say where you found it and I'll send the file.",
  stickers:
    "Stickers are free to friends, partners and brands building gear worth talking about.",
  qrCta: "Found a QR?",
  qrNote: "Email me where you found it - I'll send the guide free.",
  qrLinkLabel: "Claim free",
  cta: "Get it",
  items: [
    {
      id: "organic-marketing-ideas",
      title: "Organic marketing ideas",
      price: "$19",
      blurb: "Earned ideas - not another content calendar.",
      poster: {
        label: "Organic",
        headline: "ORGANIC",
        subline: "MARKETING IDEAS",
        tagline: "Earned attention only",
        image: "/images/guides/travel.jpg",
        industry: "Travel",
        gradientFrom: "#1c1810",
        gradientTo: "#5a3d1c",
        accent: "#f0c56e",
      },
    },
    {
      id: "product-positioning-workbook",
      title: "Product positioning workbook",
      price: "$29",
      blurb: "Who it's for, why it matters, how to say it.",
      poster: {
        label: "Positioning",
        headline: "POSITIONING",
        subline: "WORKBOOK",
        tagline: "Who it's for & why it wins",
        image: "/images/guides/outdoor.jpg",
        industry: "Outdoor",
        gradientFrom: "#0e1218",
        gradientTo: "#1f3d5c",
        accent: "#9fd0ff",
      },
    },
    {
      id: "launch-planning-template",
      title: "Launch planning template",
      price: "$39",
      blurb: "A roadmap you can actually run.",
      poster: {
        label: "Launch",
        headline: "LAUNCH",
        subline: "PLANNING",
        tagline: "A roadmap you can run",
        image: "/images/guides/adventure.jpg",
        industry: "Adventure",
        gradientFrom: "#160e12",
        gradientTo: "#5a2438",
        accent: "#ffb0c8",
      },
    },
    {
      id: "go-to-market-playbook",
      title: "Go-to-market playbook",
      price: "$49",
      blurb: "Channels, story and a launch sequence that holds.",
      poster: {
        label: "GTM",
        headline: "GO-TO-MARKET",
        subline: "PLAYBOOK",
        tagline: "Channels · story · sequence",
        image: "/images/guides/hospitality.jpg",
        industry: "Hospitality",
        gradientFrom: "#0a1210",
        gradientTo: "#164840",
        accent: "#7ef0d4",
      },
    },
    {
      id: "product-validation-guide",
      title: "Product validation guide",
      price: "$79",
      blurb: "Test the product before you spend on the story.",
      poster: {
        label: "Validation",
        headline: "VALIDATION",
        subline: "GUIDE",
        tagline: "Test before you spend",
        image: "/images/guides/hospitality-lobby.jpg",
        industry: "Hospitality",
        gradientFrom: "#120e18",
        gradientTo: "#3a2458",
        accent: "#d4b0ff",
      },
    },
    {
      id: "from-research-to-launch",
      title: "From research to launch",
      price: "$99",
      blurb: "The full path in one guide - strategy before spend.",
      poster: {
        label: "Full path",
        headline: "RESEARCH",
        subline: "TO LAUNCH",
        tagline: "The full path in one guide",
        image: "/images/guides/travel-lake.jpg",
        industry: "Travel tech",
        gradientFrom: "#111111",
        gradientTo: "#2e2e2e",
        accent: "#ffffff",
      },
    },
  ],
};

export type StoreGuide = (typeof storeSectionCopy.items)[number];

export const moreServicesSectionCopy = {
  label: "Looking for more?",
  headlineLead: "Need Research & Positioning, Marketing Strategy, or content that matters.",
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
  title: "Hi - I'm Stefani. It's good to have you here.",
  company: "nau studio",
  lead: "I work with founders who are great at the product, but still find growth harder than it should\u00A0be.",
  field:
    "Together we get clear on who your new product is for, how to talk about it, and what content will actually earn attention - the sort that grows steadily instead of arriving in a panic.",
  proof:
    "Then the right people understand it faster, and find you without another paid push whispering 'please notice us' into the void.",
  closeLead: "You bring the\u00A0expertise.",
  closeEmphasis: "I help turn it into\u00A0demand.",
  metrics: [
    { value: "20+", label: "Brands" },
    { value: "60+", label: "Campaigns" },
    { value: "500+", label: "Videos" },
    { value: "1M+", label: "Views" },
  ],
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
    question: "What do you actually help with?",
    answer:
      "The full cycle: research, positioning, organic go-to-market and content that matters. All three services are real. I'm strongest at executing organic GTM and building the storytelling that makes it land.",
  },
  {
    question: "How are you different from creators?",
    answer:
      "Most creators start at the post. I start earlier and finish later. Research, positioning, launch strategy and content stay one 360 cycle, so the story matches the product and the growth plan holds.",
  },
  {
    question: "Is this UGC or social media management?",
    answer:
      "No. Content is the last step of the cycle: founder-led and product-led storytelling, proof and campaign assets. Research and positioning come first.",
  },
  {
    question: "What's included in Marketing Strategy work?",
    answer:
      "Organic launch planning, messaging, channel ideas that compound, creative testing and what to measure. Built for steady growth, not a one-week spike.",
  },
  {
    question: "Can you help if we already launched?",
    answer:
      "Yes. I clarify positioning, rebuild the organic go-to-market plan, and create content that matches what the product delivers.",
  },
  {
    question: "How do I get started?",
    answer:
      "Send a short note about your product brand and whether you need clarity, a launch plan, or content that finally matches the product. I'll suggest a next step.",
  },
];

export const blogSectionCopy = {
  title: "Newest essays",
  titleMuted: "from the blog.",
  description:
    "Organic growth, positioning and content that matters for brands that make things.",
  cta: "Read",
  ctaHref: "/blog",
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
    name: "John Doe",
    email: "you@brand.com",
    message:
      "Product, who it's for, where growth feels stuck, and a link if you have one.",
  },
  submit: "Send Message",
  legalLead: "By submitting, you agree to my",
  termsLabel: "Terms",
  privacyLabel: "Privacy Policy",
  headline: "Let's talk.",
  subheadline:
    "I work with brands that sell movement, escape and adventure - outdoor, travel, experiences and product brands that want steady organic growth.",
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
    " Reach out. I'll suggest a next step across Research & Positioning, Marketing Strategy or Content Creation.",
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
  submit: "Send Message",
  legalLead: "By submitting, you agree to my",
  termsLabel: "Terms",
  privacyLabel: "Privacy Policy",
};

export const studioPageCopy = {
  meta: {
    title: "Studio | Stefani Dimitrova - nau studio Europe",
    description:
      "Meet Stefani Dimitrova and nau studio: organic go-to-market, product positioning and content for outdoor, travel and hospitality brands across Europe. Full cycle from research to launch.",
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
    lead: "A one-founder practice for product brands - research, positioning and organic content in one\u00A0cycle.",
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
      "I started nau because too many product brands were hiring for posts before they had a story worth posting. Outdoor, travel, hospitality and consumer goods teams were shipping real products - then asking a creator to invent the narrative on the day of the shoot.",
      "My path sits between strategy and making. I research markets, sharpen who the product is for, build organic launch plans, then create or direct the content that carries that plan - remote UGC or on-site team days across Europe.",
      "You keep the expertise. I help turn it into clear positioning, a go-to-market you can run, and storytelling that earns attention instead of renting it.",
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
      "A one-founder practice where research, strategy and content stay one path - so product brands grow without renting attention every week.",
    body: [
      "Built for outdoor, travel, hospitality and lifestyle products across Europe - physical products first.",
      "Start where you need help most: strategy, full launch, or content-only. The work stays connected either way.",
    ],
    pillars: [
      {
        number: "001",
        title: "Clarity",
        text: "Who it's for and why it wins - decided before anyone hits record.",
      },
      {
        number: "002",
        title: "Strategy",
        text: "Organic channels and a launch sequence built to compound, not spike.",
      },
      {
        number: "003",
        title: "Content",
        text: "Remote UGC or Europe team days, shot to the brief from steps one and two.",
      },
    ],
  },
  collaborationPhoto: {
    src: "/images/studio-collaboration.jpg",
    alt: "Working session at nau studio - reviewing product storytelling and go-to-market on laptop",
    caption: "In session",
  },
  cycle: {
    label: "Method",
    title: "The full cycle of my work.",
    lead:
      "Five steps from blank page to assets you can run. Most creators start at the post. I start with the product - and finish after the first learning loop.",
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
        text: "Who it's for, why it wins, and the messaging - before anyone films a post.",
      },
      {
        number: "003",
        title: "Plan",
        focus: "Strategy",
        text: "Organic channels, launch sequence and a 90-day roadmap with KPIs.",
      },
      {
        number: "004",
        title: "Create",
        focus: "Content",
        text: "Founder-led or product-led work on that brief - remote UGC or a Europe team day.",
      },
      {
        number: "005",
        title: "Refine",
        focus: "Learning",
        text: "What resonated, what to cut, and what to ship next - so the cycle compounds.",
      },
    ],
    cta: {
      label: "Next step",
      title: "Start where you are.",
      text: "Strategy sprint, full launch, or content-only if you want to work together - or grab a digital guide if you prefer to move self-paced first.",
      secondary: {
        button: "See packages",
        href: "/#packages",
      },
      primary: {
        button: "Work with me",
        href: "/contact",
      },
    },
  },
  collab: {
    label: "Collaborations",
    title: "Custom collaborations.",
    lead:
      "Have a product launch, repositioning or Europe content day that does not fit a template? Tell me about the brand and where growth feels stuck. I reply with a clear next step - strategy sprint, full launch or content-only.",
    email: "info@thetimeisnau.com",
    phone: "+359 888 32 9667",
    locationNote: "Working remotely across Europe · Team content days in Europe only",
    placeholders: {
      name: "Your name *",
      email: "Work email *",
      company: "Brand / company",
      location: "Where are you based? (city, country)",
      message:
        "Product, audience, and what you need help with - launch, positioning, GTM or content.",
    },
    submit: "Send collaboration request",
    legalLead: "By submitting, you agree to my",
    termsLabel: "Terms",
    privacyLabel: "Privacy Policy",
  },
};
