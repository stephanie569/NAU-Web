export const selectedWorkSection = {
  title: "Selected Work",
  period: "(2018–2026)",
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
      name: "Fly The Earth",
      src: "/logos/fly-the-earth.png",
    },
    {
      id: "dea-accelerate",
      name: "DEA Accelerate",
      src: "/logos/dea.png",
    },
    {
      id: "kingo",
      name: "Kingo",
      src: "/logos/kingo.png",
    },
    {
      id: "patronaj",
      name: "Patronaj",
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
};

export const projectsPageCopy = {
  range: "(2018–2026)",
  title: "Projects.",
  description:
    "Work across the full cycle: Research & Positioning, organic Go-to-Market, and Team Content.",
  searchPlaceholder: "Search…",
  categoryLabel: "Category",
  categories: [
    "Research & Positioning",
    "Go-to-Market",
    "Team Content",
  ],
  ctaLead:
    "Need Research & Positioning, organic Go-to-Market, or content that matters?",
  ctaHighlight: "I'm here to help.",
  contact: {
    name: "Stefani Dimitrova",
    role: "Organic GTM & product storytelling",
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
    category: "Go-to-Market",
    image:
      "https://framerusercontent.com/images/r3DvXiPExOamPrqqTNfWM1K9o4.jpg",
    logo: "https://framerusercontent.com/images/PyQzA1IF3BF1gkVO1xuZHClY0c.svg",
  },
  {
    slug: "warpspeed-launch",
    title: "Fieldkit.",
    displayName: "Fieldkit",
    year: "2024",
    category: "Go-to-Market",
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
    category: "Go-to-Market",
    image:
      "https://framerusercontent.com/images/0KGHRsvK3go8kOWricmADe0VWs.jpg",
    logo: "https://framerusercontent.com/images/JLzkuHlsyLa7VHaiV3ZJ16kiHhg.svg",
  },
  {
    slug: "cloudwatch-platform",
    title: "Lenscraft.",
    displayName: "Lenscraft",
    year: "2020",
    category: "Go-to-Market",
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
    title: "Go-to-Market",
    description:
      "I turn research into organic go-to-market you can actually run: channels, stories and creative that compound for steady growth.",
    thumbnail: img("qQlR5lTiRYzT2lPzSWLLVkcgH6Y"),
    categories: [
      "Organic GTM",
      "Launch strategy",
      "Channel planning",
      "Campaign concepts",
      "Product storytelling",
      "Creative testing",
    ],
    extraCount: "6+",
  },
  {
    number: "003",
    title: "Team Content",
    description:
      "I build founder-led and product-led content that matters, so customers understand the product, not just another post.",
    thumbnail: img("9hTP0obDSaEcVCyC5kaHbx7FfI"),
    categories: [
      "Founder-led content",
      "Product-led storytelling",
      "Customer stories",
      "Short-form video",
      "Product photography",
      "Campaign assets",
    ],
    extraCount: "6+",
  },
];

export const testimonialsSectionCopy = {
  label: "Testimonials",
  title: "Experiences.",
  year: "©2025",
  summary: {
    rating: "4.9",
    suffix: "/5",
    highlight: "27+ projects",
    text: "with product brands that needed organic growth plans and content that matched the product.",
    intro: "I've worked on",
    projectCount: "27+",
    trustedBy: "Trusted by product brands growing steadily",
    cta: "Leave a review",
    avatars: [
      "7XElicIcn53vdnwyFHTpct98",
      "D53nCbgrC45WamdByYxomUf9c",
      "fqOOPJWEd96G4368QW9n1dcVU",
      "lVMA2BWo8D0yz8GINpzGpDx4",
    ],
  },
  reviews: [
    {
      author: "James Carter",
      role: "Outdoor apparel brand",
      quote:
        "Incredible work—delivered exactly what we needed, on time and beyond expectations.",
      image: "i3aEeezQjGIGVleGgSPry44QwKo",
      layout: "profile-top",
    },
    {
      author: "Emily Davis",
      role: "Travel products brand",
      quote:
        "A smooth process from start to finish. Highly professional and thoughtful.",
      image: "7A0a2DwVW1CflEhx9hinSNdRmw",
      layout: "profile-bottom",
    },
    {
      author: "Anna Martinez",
      role: "Consumer technology",
      quote:
        "Our new branding is exactly what we envisioned—clean, modern, and unique.",
      image: "Lr6nDfwod2cfh3RCn5wxChQoOg",
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
  includesLabel: "Includes",
  cta: "Work with me",
  embeddedNote: {
    title: "Strategy + production, included",
    description:
      "Organic GTM, creative direction and content that matters come with the engagement.",
  },
  addon: {
    title: "Bring it to life",
    description:
      "Once positioning is clear, I'll make the content with your team.",
    price: "+$1,500",
    features: [
      "Founder videos",
      "Team content",
      "Product photography",
      "Product demos",
      "Website assets",
      "Campaign content",
      "Short-form video",
      "Behind-the-scenes",
    ],
  },
  packages: [
    {
      id: "strategy-sprint",
      name: "Strategy Sprint",
      price: "From $2,500",
      unit: "",
      forWhom: "Clarity first. Grow steadily later.",
      delivery: "2–3 weeks",
      recommended: false,
      includes: [
        "Market research",
        "Competitor analysis",
        "Product positioning",
        "Customer personas",
        "Value proposition",
        "Messaging framework",
        "Product audit",
        "Recommendations",
      ],
      outcome: "Who it's for, why it matters, how to say it.",
      allowsAddon: true,
    },
    {
      id: "launch-partner",
      name: "Launch Partner",
      price: "From $5,000",
      unit: "",
      forWhom: "Organic go-to-market you can actually run.",
      delivery: "4–6 weeks",
      recommended: true,
      includes: [
        "Everything in Strategy Sprint",
        "Organic go-to-market strategy",
        "Campaign strategy",
        "Content strategy",
        "Launch roadmap",
        "Website messaging",
        "Creative direction",
        "Founder content plan",
        "Organic growth ideas",
        "Success metrics",
      ],
      outcome: "A steady growth plan, not a launch-day spike.",
      allowsAddon: true,
    },
    {
      id: "embedded-partner",
      name: "Embedded Partner",
      price: "Custom",
      unit: "",
      forWhom: "The full 360. Research to content that matters.",
      delivery: "Ongoing",
      recommended: false,
      includes: [
        "Product immersion",
        "Strategy workshops",
        "Customer interviews",
        "Product positioning",
        "Ongoing organic GTM",
        "Creative direction",
        "Founder-led content",
        "Team content",
        "Product photography",
        "Campaign production",
        "Launch assets",
        "Iteration",
      ],
      outcome: "A partner across the whole cycle, not a one-off creator.",
      allowsAddon: false,
    },
  ],
  guides: {
    eyebrow: "Start smaller",
    title: "Digital guides",
    price: "$19–99",
    forWhom: "Self-paced. Strategy on paper before you hire anyone.",
    note: "Paid online. Find a QR across Europe and they're free.",
    cta: "Get it",
    qrCta: "Found a QR?",
    qrNote: "Email me where you found it—I'll send the guide free.",
    qrLinkLabel: "Claim free →",
    items: [
      {
        id: "organic-marketing-ideas",
        title: "Organic marketing ideas",
        price: "$19",
        blurb: "Earned ideas—not another content calendar.",
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
        blurb: "The full path in one guide—strategy before spend.",
      },
    ],
  },
};

export const moreServicesSectionCopy = {
  label: "Looking for more?",
  headlineLead: "Need Research & Positioning, organic Go-to-Market, or content that matters.",
  headlineRest: "I shape the mix around your product. The full cycle stays connected.",
  contact: {
    name: "Stefani Dimitrova",
    role: "Organic GTM & product storytelling",
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
    role: "Organic GTM & product storytelling",
  },
};

export const teamMembers = [
  {
    name: "Stefani Dimitrova",
    role: "Organic GTM & product storytelling",
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
    question: "What's included in Go-to-Market work?",
    answer:
      "Organic launch planning, messaging, channel ideas that compound, creative testing and what to measure. Built for steady growth, not a one-week spike.",
  },
  {
    question: "How does Embedded Partner work?",
    answer:
      "We agree a custom engagement based on your product and timeline. I work alongside your team across the full cycle: research, positioning, organic launches and content.",
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
    email: "hello@site.com",
    message: "Your message",
  },
  submit: "Send Message",
  legalLead: "By submitting, you agree to my",
  legalLink: "Terms and Privacy Policy.",
  headline: "Let's talk.",
  subheadline:
    "Organic go-to-market and content that matters for product brands growing steadily. The full cycle from research to storytelling stays connected.",
  benefits: [
    {
      title: "Full cycle, not just posts.",
      description:
        "Research, positioning, organic GTM and content stay one path. That's the difference from hiring a creator alone.",
    },
    {
      title: "Clear next steps.",
      description:
        "After we talk, I'll share a practical plan to move forward.",
    },
  ],
};

export const contactPageCopy = {
  title: "Get in touch.",
  subheadlineLead: "Growing a product brand steadily?",
  subheadlineRest: " Reach out. I'll suggest a clear next step.",
  teamLead: {
    name: "Stefani Dimitrova",
    role: "Organic GTM & product storytelling",
    image: "/images/stefani-dimitrova-portrait.jpg",
  },
  placeholders: {
    name: "Your name *",
    email: "Email *",
    message: "Your message",
  },
  submit: "Submit",
  legalLead: "By submitting, you agree to my",
  termsLabel: "Terms",
  privacyLabel: "Privacy Policy",
};
