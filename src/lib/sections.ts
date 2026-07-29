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
    "I've worked with brands across industries to shape products and stories that connect. Here are some recent projects.",
};

export const projectsPageCopy = {
  range: "(2018–2026)",
  title: "Projects.",
  description:
    "I've worked with brands across industries to shape products and stories that connect. Here are some recent projects.",
  searchPlaceholder: "Search…",
  categoryLabel: "Category",
  categories: ["Product Strategy", "Product Launches", "Go-to-Market"],
  ctaLead:
    "Whether you need sharper product strategy, a clearer launch, or go-to-market that compounds,",
  ctaHighlight: "I'm here to help.",
  contact: {
    name: "Stefani Dimitrova",
    role: "Designer & strategist",
    image: "/images/founder-stefani.png",
  },
};

export const projectsPageItems = [
  {
    slug: "boltshift-rebrand",
    title: "Boltshift.",
    displayName: "Boltshift",
    year: "2025",
    category: "Product Strategy",
    image:
      "https://framerusercontent.com/images/TQUaM9GTresksymLH16ncQaPo.jpg",
    logo: "https://framerusercontent.com/images/uesNBJIRG5fZ2tDJzkhxXbuauQw.svg",
  },
  {
    slug: "ephemeral-campaign",
    title: "Ephemeral.",
    displayName: "Ephemeral",
    year: "2025",
    category: "Go-to-Market",
    image:
      "https://framerusercontent.com/images/r3DvXiPExOamPrqqTNfWM1K9o4.jpg",
    logo: "https://framerusercontent.com/images/PyQzA1IF3BF1gkVO1xuZHClY0c.svg",
  },
  {
    slug: "warpspeed-launch",
    title: "Powersurge.",
    displayName: "Powersurge",
    year: "2024",
    category: "Product Launches",
    image:
      "https://framerusercontent.com/images/UPqJOHQLdYtNuK2jee5437Lno.jpg",
    logo: "https://framerusercontent.com/images/j2k0BUaOnC0jNyx5dP4hieQnFL4.svg",
  },
  {
    slug: "wilson-co-studio",
    title: "Mastermail.",
    displayName: "Mastermail",
    year: "2024",
    category: "Product Strategy",
    image:
      "https://framerusercontent.com/images/HlvuJF9yIQ3Q8fP86EjFIq5ExE.jpg",
    logo: "https://framerusercontent.com/images/kH7hh1Be4txgKwuTgZl3jpdZp8.svg",
  },
  {
    slug: "experiences-app",
    title: "Warpspeed.",
    displayName: "Warpspeed",
    year: "2023",
    category: "Product Launches",
    image:
      "https://framerusercontent.com/images/0KGHRsvK3go8kOWricmADe0VWs.jpg",
    logo: "https://framerusercontent.com/images/JLzkuHlsyLa7VHaiV3ZJ16kiHhg.svg",
  },
  {
    slug: "cloudwatch-platform",
    title: "CloudWatch.",
    displayName: "CloudWatch",
    year: "2020",
    category: "Product Launches",
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
    title: "Product Strategy",
    description:
      "Get clear on who it is for, what changes, and which decisions should shape the product—before you spend on the wrong story.",
    thumbnail: img("vGSJoy0fkCYvuK5CETUzS64NNo"),
    categories: [
      "Positioning",
      "ICP clarity",
      "Offer design",
      "Roadmap focus",
      "Decision frameworks",
    ],
    extraCount: "5+",
  },
  {
    number: "002",
    title: "Product Launches",
    description:
      "Turn strategy into a launch people understand: narrative, experience, proof, and the path from first visit to first value.",
    thumbnail: img("qQlR5lTiRYzT2lPzSWLLVkcgH6Y"),
    categories: [
      "Launch narrative",
      "Web experiences",
      "Onboarding",
      "Conversion",
      "Proof systems",
    ],
    extraCount: "5+",
  },
  {
    number: "003",
    title: "Go-to-Market",
    description:
      "Build distribution that compounds—messaging, organic growth, and campaigns that match what the product actually delivers.",
    thumbnail: img("9hTP0obDSaEcVCyC5kaHbx7FfI"),
    categories: [
      "Organic growth",
      "Campaign design",
      "Community",
      "Distribution",
      "Message-market fit",
    ],
    extraCount: "5+",
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
    text: "that help companies generate real results.",
    intro: "I've delivered",
    projectCount: "27+",
    trustedBy: "Trusted by clients worldwide",
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
    title: "Need go-to-market support too?",
    description:
      "Add distribution, messaging, and campaign systems that match your product story.",
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
    "Strategy workshop + clear offer narrative",
    "Launch or go-to-market plan",
    "Priority support during delivery",
  ],
  deliveryLabel: "Delivery time",
  cta: "Get in touch",
};

export const moreServicesSectionCopy = {
  label: "Looking for more?",
  headlineLead: "Add product strategy, launches, or go-to-market—",
  headlineRest:
    "flexible tools to strengthen your project. I'll shape a solution that fits your business, not a one-size-fits-all process.",
  contact: {
    name: "Stefani Dimitrova",
    role: "Designer & strategist",
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
      "If you're ready to create something meaningful, I'd love to hear from you.",
    cta: "Get in touch",
    href: "/contact",
  },
  collaboration: {
    lead: "I believe great work comes",
    emphasis: "from collaboration.",
    rest: "That's why I partner closely with each client to make sure every project meets your goals and exceeds expectations.",
  },
};

export const teamMembers = [
  {
    name: "Stefani Dimitrova",
    role: "Designer & strategist",
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
      "Three things: product strategy (clarity, positioning, decisions), product launches (narrative, experience, proof), and go-to-market (distribution and campaigns that match the product).",
  },
  {
    question: "Do you only work on websites?",
    answer:
      "No. Web experiences are often part of a launch, but the work starts with strategy and the story customers need to believe—not templates for their own sake.",
  },
  {
    question: "What's included in go-to-market work?",
    answer:
      "Messaging that travels, organic growth systems, campaign ideas tied to real product proof, and a plan for how attention becomes understanding—not just more traffic.",
  },
  {
    question: "How does the monthly subscription model work?",
    answer:
      "You pay a fixed monthly fee for ongoing strategy, launch support, or go-to-market iteration. No large upfront costs—just a clear, ongoing partnership.",
  },
  {
    question: "Can you help if we already launched?",
    answer:
      "Yes. Many engagements start after a confused launch: we clarify the offer, fix the experience, and rebuild go-to-market around what actually works.",
  },
  {
    question: "How do I get started?",
    answer:
      "Just reach out. We'll discuss your needs, I'll propose a plan, and we can get started on your project.",
  },
];

export const blogSectionCopy = {
  title: "Newest essays",
  titleMuted: "from the journal.",
  description:
    "Clear thinking on product, positioning, and conversion—written for founders who would rather understand the problem than decorate it.",
  cta: "See all",
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
    "Tell me about your project—whether it's product strategy, a launch, or go-to-market.",
  benefits: [
    {
      title: "Quick response.",
      description:
        "If you're ready to create and collaborate, I'd love to hear from you.",
    },
    {
      title: "Clear next steps.",
      description:
        "After we talk, I'll share a clear plan and timeline for your project.",
    },
  ],
};

export const contactPageCopy = {
  title: "Get in touch.",
  subheadlineLead: "Have a project in mind?",
  subheadlineRest:
    " Reach out, and I'll discuss the best way to move forward with you.",
  teamLead: {
    name: "Stefani Dimitrova",
    role: "Designer & strategist",
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
