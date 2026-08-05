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
    title: "Boltshift.",
    year: "2025",
    image:
      "https://framerusercontent.com/images/TQUaM9GTresksymLH16ncQaPo.jpg",
  },
  {
    slug: "ephemeral-campaign",
    title: "Ephemeral.",
    year: "2025",
    image:
      "https://framerusercontent.com/images/r3DvXiPExOamPrqqTNfWM1K9o4.jpg",
  },
  {
    slug: "warpspeed-launch",
    title: "Powersurge.",
    year: "2024",
    image:
      "https://framerusercontent.com/images/UPqJOHQLdYtNuK2jee5437Lno.jpg",
  },
  {
    slug: "wilson-co-studio",
    title: "Mastermail.",
    year: "2024",
    image:
      "https://framerusercontent.com/images/HlvuJF9yIQ3Q8fP86EjFIq5ExE.jpg",
  },
  {
    slug: "experiences-app",
    title: "Warpspeed.",
    year: "2023",
    image:
      "https://framerusercontent.com/images/0KGHRsvK3go8kOWricmADe0VWs.jpg",
  },
  {
    slug: "cloudwatch-platform",
    title: "CloudWatch.",
    year: "2023",
    image:
      "https://framerusercontent.com/images/qiCYd5j7XEmvyt9BpMldI3mNm8.jpg",
  },
];

export const projectsSectionCopy = {
  count: 27,
  description:
    "Selected work with founders and product teams—positioning, launches and content that helped products find their story.",
};

export const projectsPageCopy = {
  range: "(2018–2026)",
  title: "Projects.",
  description:
    "Selected work with founders and product teams—research, positioning, campaign strategy and content created with the people behind the product.",
  searchPlaceholder: "Search…",
  categoryLabel: "Category",
  categories: [
    "Product research and positioning",
    "Go-to-market and campaign strategy",
    "Content creation with your team",
  ],
  ctaLead:
    "Whether you need sharper positioning, a clearer launch plan, or content made with your team,",
  ctaHighlight: "I'm here to help.",
  contact: {
    name: "Stefani Dimitrova",
    role: "Product strategist & creative partner",
    image: "/images/founder-stefani.png",
  },
};

export const projectsPageItems = [
  {
    slug: "boltshift-rebrand",
    title: "Boltshift.",
    displayName: "Boltshift",
    year: "2025",
    category: "Product research and positioning",
    image:
      "https://framerusercontent.com/images/TQUaM9GTresksymLH16ncQaPo.jpg",
    logo: "https://framerusercontent.com/images/uesNBJIRG5fZ2tDJzkhxXbuauQw.svg",
  },
  {
    slug: "ephemeral-campaign",
    title: "Ephemeral.",
    displayName: "Ephemeral",
    year: "2025",
    category: "Go-to-market and campaign strategy",
    image:
      "https://framerusercontent.com/images/r3DvXiPExOamPrqqTNfWM1K9o4.jpg",
    logo: "https://framerusercontent.com/images/PyQzA1IF3BF1gkVO1xuZHClY0c.svg",
  },
  {
    slug: "warpspeed-launch",
    title: "Powersurge.",
    displayName: "Powersurge",
    year: "2024",
    category: "Go-to-market and campaign strategy",
    image:
      "https://framerusercontent.com/images/UPqJOHQLdYtNuK2jee5437Lno.jpg",
    logo: "https://framerusercontent.com/images/j2k0BUaOnC0jNyx5dP4hieQnFL4.svg",
  },
  {
    slug: "wilson-co-studio",
    title: "Mastermail.",
    displayName: "Mastermail",
    year: "2024",
    category: "Product research and positioning",
    image:
      "https://framerusercontent.com/images/HlvuJF9yIQ3Q8fP86EjFIq5ExE.jpg",
    logo: "https://framerusercontent.com/images/kH7hh1Be4txgKwuTgZl3jpdZp8.svg",
  },
  {
    slug: "experiences-app",
    title: "Warpspeed.",
    displayName: "Warpspeed",
    year: "2023",
    category: "Go-to-market and campaign strategy",
    image:
      "https://framerusercontent.com/images/0KGHRsvK3go8kOWricmADe0VWs.jpg",
    logo: "https://framerusercontent.com/images/JLzkuHlsyLa7VHaiV3ZJ16kiHhg.svg",
  },
  {
    slug: "cloudwatch-platform",
    title: "CloudWatch.",
    displayName: "CloudWatch",
    year: "2020",
    category: "Go-to-market and campaign strategy",
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
    title: "Product research and positioning",
    description:
      "Before creating content, I find out what the product is really competing against, who should care about it and which message has the strongest chance of connecting.",
    thumbnail: img("vGSJoy0fkCYvuK5CETUzS64NNo"),
    categories: [
      "Market research",
      "Competitor analysis",
      "Customer insight",
      "Value proposition",
      "Messaging",
      "Product positioning",
    ],
    extraCount: "6+",
  },
  {
    number: "002",
    title: "Go-to-market and campaign strategy",
    description:
      "I turn the research into a practical launch and campaign plan, connecting the product’s positioning with the channels, stories and creative ideas that can move it forward.",
    thumbnail: img("qQlR5lTiRYzT2lPzSWLLVkcgH6Y"),
    categories: [
      "Launch strategy",
      "Campaign concepts",
      "Content strategy",
      "Channel planning",
      "Organic & outdoor ideas",
      "Creative testing",
    ],
    extraCount: "6+",
  },
  {
    number: "003",
    title: "Content creation with your team",
    description:
      "I create the campaign content with the people behind the product, helping founders, teams and customers communicate the story in a way that feels credible, useful and human.",
    thumbnail: img("9hTP0obDSaEcVCyC5kaHbx7FfI"),
    categories: [
      "Founder-led content",
      "Product demos",
      "Customer stories",
      "Short-form video",
      "Photography",
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
    text: "with founders and product teams who needed clarity, not a larger agency.",
    intro: "I've worked on",
    projectCount: "27+",
    trustedBy: "Trusted by founders and product teams",
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
      role: "Wilson & Co",
      quote:
        "Incredible work—delivered exactly what we needed, on time and beyond expectations.",
      image: "i3aEeezQjGIGVleGgSPry44QwKo",
      layout: "profile-top",
    },
    {
      author: "Emily Davis",
      role: "StartUp Hub",
      quote:
        "A smooth process from start to finish. Highly professional and thoughtful.",
      image: "7A0a2DwVW1CflEhx9hinSNdRmw",
      layout: "profile-bottom",
    },
    {
      author: "Anna Martinez",
      role: "Marketing Director",
      quote:
        "Our new branding is exactly what we envisioned—clean, modern, and unique. #1 in our industry.",
      image: "Lr6nDfwod2cfh3RCn5wxChQoOg",
      layout: "profile-top-box",
    },
  ],
};

export const pricingSectionCopy = {
  label: "Simple pricing",
  title: "Pricing.",
  billing: {
    project: "Per project",
    monthly: "Monthly",
  },
  addon: {
    title: "Need content production too?",
    description:
      "Add founder-led video, campaign assets and team content once the positioning and plan are clear.",
    price: "+$1,490",
  },
  plans: {
    project: {
      price: "$2,490",
      unit: "/project",
      delivery: "3-4 weeks",
    },
    monthly: {
      price: "$990",
      unit: "/month",
      delivery: "Ongoing support",
    },
  },
  features: [
    "Research, positioning and messaging",
    "Launch or campaign plan",
    "Content direction with your team",
  ],
  deliveryLabel: "Delivery time",
  cta: "Work with me",
};

export const moreServicesSectionCopy = {
  label: "Looking for more?",
  headlineLead: "Need research, a launch plan, or content with your team—",
  headlineRest:
    "I shape the mix around your product, not a fixed agency package.",
  contact: {
    name: "Stefani Dimitrova",
    role: "Product strategist & creative partner",
    image: "/images/founder-stefani.png",
  },
};

export const teamSectionCopy = {
  brand: "nau",
  title: "The person",
  titleMuted: "behind the projects.",
  company: "nau",
  careers: {
    title: "Let's work together",
    description:
      "If you're preparing to launch, reposition, or tell the product story with your own people, I'd love to hear from you.",
    cta: "Work with me",
    href: "/contact",
  },
  collaboration: {
    lead: "I work where product strategy, marketing and content",
    emphasis: "meet.",
    rest: "I rarely begin with “What should we post?” I begin with the product, the customer and the reason anyone should care—then turn that into campaigns and content your team can actually use.",
  },
};

export const teamMembers = [
  {
    name: "Stefani Dimitrova",
    role: "Product strategist & creative partner",
    image: "/images/founder-stefani.png",
  },
];

export const faqSectionCopy = {
  title: "FAQ.",
  description:
    "Got questions? Here are clear answers about working with me.",
};

export const faqItems = [
  {
    question: "What do you actually help with?",
    answer:
      "Three connected areas: product research and positioning, go-to-market and campaign strategy, and content creation with your team. Strategy comes first; content brings the campaign to life.",
  },
  {
    question: "Is this UGC or social media management?",
    answer:
      "No. Content is part of product marketing—often founder-led, team-led, customer stories, demos and campaign assets. The research and positioning before production are essential to the work.",
  },
  {
    question: "What's included in go-to-market work?",
    answer:
      "Launch and campaign planning, messaging hypotheses, channel ideas (including organic and outdoor where they fit), creative testing plans, and clear measures of what to watch.",
  },
  {
    question: "How does the monthly subscription model work?",
    answer:
      "You pay a fixed monthly fee for ongoing research, campaign iteration, or content made with your team. Clear scope, no large agency overhead.",
  },
  {
    question: "Can you help if we already launched?",
    answer:
      "Yes. Many engagements start after a confused launch: I clarify positioning, rebuild the campaign plan, and create content that matches what the product actually delivers.",
  },
  {
    question: "How do I get started?",
    answer:
      "Reach out with a short note about your product and what you're trying to achieve. I'll suggest a clear next step.",
  },
];

export const blogSectionCopy = {
  title: "Newest essays",
  titleMuted: "from the journal.",
  description:
    "Notes on product marketing, positioning, launches, organic campaigns, founder-led content, and how to use AI without losing judgment.",
  cta: "Explore the journal",
  ctaHref: "/blog",
  brand: "nau",
  featuredTitle:
    "Why great products fail before they ever reach product–market fit",
};

export const blogPreviewPosts = [
  {
    slug: "audited-50-startup-websites-10-mistakes",
    date: "July 18, 2026",
    title:
      "I audited 50 startup websites. Here are the 10 mistakes I saw over and over again.",
    excerpt:
      "Fifty early-stage sites, different niches, same conversion habits: vague headlines, weak proof, cluttered heroes, and pages that ask for interest without earning it. The mistakes—and the fixes.",
    authorImage: "/images/blog/blog-32-50-websites.png",
  },
  {
    slug: "best-marketing-feels-like-product-design",
    date: "July 6, 2026",
    title:
      "The best marketing doesn't feel like marketing—it feels like product design",
    excerpt:
      "When marketing sits on top of the product, it underperforms. The brands that win design belief as part of the product experience—message, UX, and proof as one system.",
    authorImage: "/images/blog/blog-34-marketing-product.png",
  },
];

export const blogFeaturedPost = {
  slug: "why-great-products-fail-before-product-market-fit",
  title:
    "Why great products fail before they ever reach product–market fit",
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
    "I help founders turn good products into stories people want to be part of—from market research and positioning to launch strategy and content creation.",
  benefits: [
    {
      title: "Direct collaboration.",
      description:
        "You work with me—not a large anonymous team. Strategy and content stay connected.",
    },
    {
      title: "Clear next steps.",
      description:
        "After we talk, I'll share a practical plan for research, campaign and content.",
    },
  ],
};

export const contactPageCopy = {
  title: "Get in touch.",
  subheadlineLead: "Have a product to launch or reposition?",
  subheadlineRest:
    " Reach out, and I'll suggest a clear way to move forward together.",
  teamLead: {
    name: "Stefani Dimitrova",
    role: "Product strategist & creative partner",
    image: "/images/founder-stefani.png",
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
