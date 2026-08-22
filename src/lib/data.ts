export const siteConfig = {
  name: "nau",
  tagline: "studio",
  founder: "Stefani Dimitrova",
  description:
    "nau studio by Stefani Dimitrova. Organic go-to-market and campaign content series for product brands growing steadily.",
  email: "info@thetimeisnau.com",
  phone: "+359 888 32 9667",
  year: "2023",
  founded: "2023",
};

/** Primary IA: depth pages + home section anchors. */
export const primaryNavLinks = [
  { href: "/studio", label: "Studio" },
  { href: "/#clients", label: "Clients" },
  { href: "/#services", label: "Services" },
  { href: "/#digital-guides", label: "Products" },
  { href: "/essays", label: "Essays" },
];

export const navLinks = [
  { href: "/", label: "Home" },
  ...primaryNavLinks,
];

export const footerNavLinks = [...primaryNavLinks];

export const socialLinks = [
  { href: "https://www.linkedin.com/in/stefani-dimitrova", label: "LinkedIn" },
  { href: "https://www.tiktok.com/", label: "TikTok" },
];

export const services = [
  {
    number: "001",
    title: "Research & Positioning",
    steps: [
      "Validate what you're launching.",
      "Map the market and competitors.",
      "Sharpen positioning before content starts.",
    ],
  },
  {
    number: "002",
    title: "Content Creation",
    steps: [
      "Second after research: lock the campaign series early.",
      "Strategy shapes the brief. Then I produce the campaign materials.",
      "Delivered last: a campaign's worth of materials.",
    ],
  },
  {
    number: "003",
    title: "Marketing Strategy",
    steps: [
      "Turn research into a runnable plan.",
      "Choose channels and stories that compound.",
      "Sequence the launch. Then the campaign materials ship last.",
    ],
  },
  {
    number: "004",
    title: "Digital Guides",
    steps: [
      "Playbooks when a full engagement isn't the fit yet.",
      "Positioning and GTM, packaged from client work. Delivered on purchase.",
    ],
  },
];

export const stats = [
  { value: "20+", label: "projects" },
  { value: "98%", label: "Client satisfaction rate" },
  { value: "+30%", label: "Conversion Rate Improvement" },
  { value: "3-4 weeks", label: "Delivery time" },
];

export const clients = [
  "The Pine",
  "Yan Bibiyan",
  "Fly The Earth",
  "Kingo",
  "Patronaj",
  "DEA Accelerate",
];

export const projects = [
  {
    slug: "boltshift-rebrand",
    title: "Trailform.",
    category: "Research & Positioning",
    year: "2025",
    image:
      "https://framerusercontent.com/images/TQUaM9GTresksymLH16ncQaPo.jpg",
    description:
      "Positioning for an outdoor apparel brand launching a new hiking line.",
  },
  {
    slug: "ephemeral-campaign",
    title: "Shoreline.",
    category: "Go-to-Market",
    year: "2025",
    image:
      "https://framerusercontent.com/images/r3DvXiPExOamPrqqTNfWM1K9o4.jpg",
    description:
      "Launch campaign for a marine and watersports accessories brand.",
  },
  {
    slug: "warpspeed-launch",
    title: "Fieldkit.",
    category: "Go-to-Market",
    year: "2024",
    image:
      "https://framerusercontent.com/images/UPqJOHQLdYtNuK2jee5437Lno.jpg",
    description:
      "Go-to-market and launch site for travel bags and everyday carry.",
  },
  {
    slug: "wilson-co-studio",
    title: "Northline.",
    category: "Research & Positioning",
    year: "2024",
    image:
      "https://framerusercontent.com/images/HlvuJF9yIQ3Q8fP86EjFIq5ExE.jpg",
    description:
      "Research and positioning for a lifestyle brand expanding into premium home.",
  },
  {
    slug: "experiences-app",
    title: "Summit Co.",
    category: "Go-to-Market",
    year: "2023",
    image:
      "https://framerusercontent.com/images/0KGHRsvK3go8kOWricmADe0VWs.jpg",
    description:
      "Campaign strategy for camping and climbing gear entering new retail.",
  },
  {
    slug: "cloudwatch-platform",
    title: "Lenscraft.",
    category: "Go-to-Market",
    year: "2020",
    image:
      "https://framerusercontent.com/images/qiCYd5j7XEmvyt9BpMldI3mNm8.jpg",
    description:
      "Product storytelling and launch support for camera and action-cam gear.",
  },
];

export const testimonials = [
  {
    quote:
      "Full 360: research, strategy and content in one cycle. She turned our retreat offer into organic reach without buying ads.",
    author: "The Pine",
    role: "Team retreats & experiences",
  },
  {
    quote:
      "Sharp market and competitor research that clarified where we stand, and who we need to win.",
    author: "Fly the Earth",
    role: "Travel brand",
  },
  {
    quote:
      "Clear positioning and a campaign series that finally sounded like the product, not another feed of noise.",
    author: "Kingo",
    role: "Consumer product",
  },
];

export const faqs = [
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
    question: "What's included in Marketing Strategy work?",
    answer:
      "Organic launch planning, messaging, channel ideas that compound, creative testing and what to measure. Built for steady growth, not a one-week spike.",
  },
  {
    question: "Can you help if we already launched?",
    answer:
      "Yes. I clarify positioning, rebuild the organic go-to-market plan, and create a content series that matches what the product delivers, so the next posts pull people through one story, not scatter them.",
  },
  {
    question: "How do I get started?",
    answer:
      "Send a short note about your product brand and whether you need clarity, a launch plan, or content that finally matches the product. I'll suggest a next step.",
  },
];

export const team = [
  {
    name: "Stefani Dimitrova",
    role: "Organic GTM & Product Storyteller",
    bio: "I build for people who sell movement, escape and adventure. My work spans hospitality, outdoor products, adventure experiences and travel technology. You bring the expertise. I help turn it into demand.",
    image: "/images/stefani-dimitrova-portrait.jpg",
  },
];
