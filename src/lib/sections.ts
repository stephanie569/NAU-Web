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
  count: 27,
  description:
    "Selected work with product brands growing steadily: organic go-to-market, positioning and content that matters.",
  cta: "View all clients",
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
    role: "Organic GTM & Product Storytelling",
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
  count: 3,
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
];

export const testimonialsSectionCopy = {
  label: "Testimonials",
  title: "Experiences.",
  year: "Founded 2023",
  summary: {
    rating: "4.9",
    suffix: "/5",
    highlight: "27+ projects",
    text: "with product brands that needed organic growth plans and content that matched the product.",
    intro: "I've worked on",
    projectCount: "27+",
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
  label: "Simple pricing",
  title: "Pricing.",
  recommendedBadge: "Recommended",
  deliveryLabel: "Delivery",
  outcomeLabel: "Outcome",
  collaborationLabel: "Collaboration",
  includesLabel: "You get",
  cta: "Work with me",
  contentAddonsLabel: "Add content",
  contentAddonsSummary: "Optional after strategy is locked",
  contentAddons: [
    {
      id: "ugc-creator",
      title: "Remote UGC content",
      summary:
        "I create the content on camera - authentic UGC your brand can run across organic and paid. Shot remotely.",
      price: "From +€900",
      features: [
        "1 remote shoot block",
        "4-6 UGC-style short videos, edited (15-45s)",
        "Hooks and scripts aligned to your messaging",
        "Product-in-hand and talking-to-camera formats",
        "Captions and file handoff",
        "2 revision rounds on selects",
      ],
    },
    {
      id: "production-sprint",
      title: "Team content",
      summary:
        "A full content day with founder, product and campaign video - shot remotely or on-site in Europe.",
      price: "From +€1,400",
      features: [
        "1 full-day content session (founder + product)",
        "6-8 short-form videos, edited (15-45s)",
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
      name: "Strategy Sprint",
      price: "From €2,400",
      unit: "",
      forWhom: "Clarity first. Grow steadily later.",
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
        "Value proposition + messaging framework, 6-8 pages",
        "Tone of voice starter (do / don't examples)",
        "Recommendations brief with next steps (2-3 pages)",
      ],
      highlights: [
        "Research pack, 10-14 pages: market, category, product audit",
        "Competitor teardown: 5-8 brands",
        "2-3 customer personas with jobs-to-be-done",
        "4-6 UGC-style short videos, edited (15-45s)",
      ],
      outcome: "Who it's for, why it matters, how to say it.",
      allowsAddon: true,
      contentAddonChoice: true,
    },
    {
      id: "launch-partner",
      name: "Launch Partner",
      price: "From €4,800",
      unit: "",
      forWhom: "Organic go-to-market you can actually run.",
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
        "Everything in Strategy Sprint",
        "Organic GTM plan, 5-10 pages: channels, sequence, owners",
        "90-day launch roadmap with weekly milestones",
        "Campaign strategy: 2-3 launch angles with hooks",
        "Content strategy: pillars + 30-day calendar",
        "Founder content plan: 8-12 shot / story ideas",
        "Website messaging outline: home + 3 key pages",
        "Creative direction notes (mood, references, formats)",
        "Organic growth ideas list (15-20 tactics)",
        "KPI sheet: what to measure in the first 90 days",
      ],
      outcome: "A steady growth plan, not a launch-day spike.",
      allowsAddon: true,
      contentAddonChoice: true,
      contentAddonLabel: "Bring it to life",
    },
    {
      id: "content-sprint",
      name: "Content Sprint",
      price: "From €900",
      unit: "",
      forWhom: "You already have the vision. You need content that matches it.",
      delivery: "1-2 weeks",
      recommended: false,
      collaboration: [
        "Free discovery call (30 min) - confirm fit, not a strategy deep-dive",
        "Creative alignment session (45 min) on hooks, tone and formats",
        "Async feedback on selects",
        "2 revision rounds",
      ],
      includes: [
        "Your existing strategy is the brief - no repositioning work",
        "Hooks and scripts aligned to your messaging before we shoot",
        "Shot list and production plan",
        "Captions and organised file handoff",
      ],
      outcome: "Content you can post - without redoing strategy.",
      allowsAddon: false,
      contentAddonChoice: true,
      contentAddonLabel: "Choose format",
      contentAddonSummary: "Remote UGC or a team content day",
      contentOnly: true,
    },
  ],
  storeTeaser: {
    id: "digital-guides",
    name: "Digital Guides",
    eyebrow: "Self-paced",
    price: "From $19",
    forWhom:
      "If you already have a strategy and you enjoy doing your content, but you need just a little reassurance and polishing - here is a portal to my store, where you can find digital guides created from me to you.",
    outcome: "Strategy on paper. Pick what you need, when you need it.",
    delivery: "Instant download",
    cta: "Explore the store",
    href: "/store",
    highlights: [
      "Positioning, launch and organic growth playbooks",
      "Built from real client work - not generic templates",
      "Use them alone, or before you hire me",
      "Paid online - or free if you find a nau QR across Europe",
    ],
  },
};

export const storeSectionCopy = {
  title: "Store",
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
    },
    {
      id: "product-positioning-workbook",
      title: "Product positioning workbook",
      price: "$29",
      blurb: "Who it's for, why it matters, how to say it.",
    },
    {
      id: "launch-planning-template",
      title: "Launch planning template",
      price: "$39",
      blurb: "A roadmap you can actually run.",
    },
    {
      id: "go-to-market-playbook",
      title: "Go-to-market playbook",
      price: "$49",
      blurb: "Channels, story and a launch sequence that holds.",
    },
    {
      id: "product-validation-guide",
      title: "Product validation guide",
      price: "$79",
      blurb: "Test the product before you spend on the story.",
    },
    {
      id: "from-research-to-launch",
      title: "From research to launch",
      price: "$99",
      blurb: "The full path in one guide - strategy before spend.",
    },
  ],
};

export const moreServicesSectionCopy = {
  label: "Looking for more?",
  headlineLead: "Need Research & Positioning, Marketing Strategy, or content that matters.",
  headlineRest: "I shape the mix around your product. The full cycle stays connected.",
  contact: {
    name: "Stefani Dimitrova",
    role: "Organic GTM & Product Storytelling",
    image: "/images/stefani-dimitrova-portrait.jpg",
  },
};

export const teamSectionCopy = {
  brand: "nau studio",
  title: "Who you'll",
  titleMuted: "work with.",
  company: "nau studio",
  lead: "Good to have you here. Chances are, you're already very good at what you do. You just need more of the right people to know about it.",
  tension:
    "Maybe growth has stalled. Maybe marketing keeps falling to the bottom of the list. Or maybe you're simply done being the product person, strategist, marketer and content team all at once. So you found me.",
  focus: "I build for people who sell movement, escape and adventure.",
  field:
    "My work spans hospitality, outdoor products, adventure experiences and travel technology. I help brands sharpen positioning, find their audience and build organic growth around products worth talking about.",
  proof:
    "Along the way, I've helped turn early-stage ideas into market-ready products, reposition brands around clearer customer needs, build go-to-market strategies from scratch and launch new digital experiences. Where I go deepest is content: the plan, the making of it, or guiding your team through it, so the brand earns organic reach instead of buying attention.",
  closeLead: "You bring the expertise.",
  closeEmphasis: "I help turn it into demand.",
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
    role: "Organic GTM & Product Storytelling",
  },
};

export const teamMembers = [
  {
    name: "Stefani Dimitrova",
    role: "Organic GTM & Product Storytelling",
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
      "Product brands that want steady growth: outdoor, travel, marine, consumer tech, lifestyle, sustainable goods and sports equipment. Physical products, not service businesses.",
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
  cta: "Explore the blog",
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
    message: "Tell me about the product and where growth feels stuck.",
  },
  submit: "Send Message",
  legalLead: "By submitting, you agree to my",
  legalLink: "Terms and Privacy Policy.",
  headline: "Let's talk.",
  subheadline:
    "I work with brands that sell movement, escape and adventure - outdoor, travel, experiences and product brands that want steady organic growth.",
  benefits: [
    {
      title: "Research to Content Creation.",
      description:
        "Research & Positioning, Marketing Strategy and Content Creation stay one 360 cycle - so the story matches the product and the growth plan holds.",
    },
    {
      title: "A clear next step.",
      description:
        "Share a short note about your brand. I'll suggest whether you need clarity, a launch plan, or content that finally matches what you sell.",
    },
  ],
};

export const contactPageCopy = {
  title: "Get in touch.",
  subheadlineLead: "Selling movement, escape or adventure?",
  subheadlineRest:
    " Reach out. I'll suggest a next step across Research & Positioning, Marketing Strategy or Content Creation.",
  teamLead: {
    name: "Stefani Dimitrova",
    role: "Organic GTM & Product Storytelling",
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
