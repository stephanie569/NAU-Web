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
  title: "Selected work.",
  count: "20+",
  description:
    "Stories from the field — brands, places and people connected to the outdoors.",
  cta: "Work with me",
  ctaHref: "/contact",
  homeLimit: 4,
};

export const pageBottomCtaCopy = {
  ctaLead: "If your story belongs in the wild,",
  ctaHighlight: "let's make it impossible to ignore.",
  ctaButton: "Work with me",
  ctaHref: "/contact",
  secondaryButton: "Explore the Map",
  secondaryHref: "/map",
  contact: {
    name: "Stefani Dimitrova",
    role: "Photographer & storyteller",
    image: "/images/stefani-dimitrova-portrait.jpg",
  },
};

export const industriesSectionCopy = {
  title: "Focus.",
  platformsLabel: "Stories made for",
  platforms: ["Instagram", "TikTok", "LinkedIn", "YouTube"],
  items: [
    {
      name: "Wildlife & nature",
      blurb:
        "Field photography and film that honour animals, habitats and the people who protect them — quiet frames with lasting weight.",
      focuses: ["Wildlife", "Habitats", "Conservation", "Field"],
      image: "/images/industries/tech.jpg",
      imageAlt: "Nature and wildlife storytelling in the field",
    },
    {
      name: "Outdoor & adventure",
      blurb:
        "Mountains, coasts and trails. Product and place stories for brands that live outside — gear that earns its keep in real conditions.",
      focuses: ["Climbing", "Mountaineering", "Trails", "Coast"],
      image: "/images/industries/climbing.jpg",
      imageAlt: "Rock climber with technical outdoor gear on a mountain face",
    },
    {
      name: "Travel & editorial",
      blurb:
        "Magazines, campaigns and long-form travel stories. Editorial-minded work that holds attention longer than a single post.",
      focuses: ["Editorial", "Campaigns", "Travel", "Documentary"],
      image: "/images/industries/travel-media.jpg",
      imageAlt: "Travel magazine with a landscape cover on a clean surface",
    },
  ],
};

export const servicesItems = [
  {
    number: "001",
    title: "Nature photography",
    summary:
      "Still photography from the field — wildlife, landscapes and the human stories that sit beside them. Made for campaigns, editorial and conservation use.",
    thumbnail: "/images/service-content-creation-minimal.png",
    categories: ["Wildlife", "Landscapes", "Editorial", "Print"],
  },
  {
    number: "002",
    title: "Story films",
    summary:
      "Short films and series that carry a place or species with care. Cinematic, grounded, and built to travel across social, web and screenings.",
    thumbnail: "/images/service-research-positioning.png",
    categories: ["Film", "Documentary", "Campaigns", "Social"],
  },
  {
    number: "003",
    title: "Conservation storytelling",
    summary:
      "Narrative direction for projects that protect nature — clear messaging, honest visuals, and stories that move people to care and act.",
    thumbnail: "/images/service-marketing-strategy.png",
    categories: ["Impact", "NGOs", "Campaigns", "Education"],
  },
];

export const capabilitiesSectionCopy = {
  title: "Capabilities.",
  items: [
    {
      number: "01",
      title: "Still photography",
      text: "Digital and analogue stills from the same shoot. Wildlife, landscape and portrait frames for web, print, lookbooks and social.",
    },
    {
      number: "02",
      title: "Story films",
      text: "Cinematic short films and series shot in real places — trails, coastlines, forests and working landscapes.",
    },
    {
      number: "03",
      title: "On-location shoots",
      text: "Field shoots across Europe with you and your team. Scoped and agreed on the first consultation.",
    },
    {
      number: "04",
      title: "Drone footage",
      text: "Aerials of place and scale: coastline, mountains, habitats and routes. Delivered crisp in 4K.",
    },
    {
      number: "05",
      title: "Field storytelling",
      text: "Short-form and long-form that feels found in the wild — not staged for the algorithm.",
    },
    {
      number: "06",
      title: "Usage rights",
      text: "Organic use across social, website, email and listings is included. Paid media and conservation campaign licences are quoted to scope.",
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
    trustedBy: "Trusted by outdoor, travel and adventure brands",
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
        "She turned our outdoor retreat story into organic reach — research, strategy and visuals that feel like the place itself.",
      layout: "profile-top-box",
    },
    {
      author: "Fly the Earth",
      role: "Travel brand",
      image: "/logos/testimonial-fly-the-earth.png",
      quote:
        "Sharp storytelling that clarified where we stand — and visuals that make people want to go.",
      layout: "profile-bottom",
    },
    {
      author: "Kingo",
      role: "Consumer product",
      image: "/logos/kingo.png",
      quote:
        "The feed finally sounded like the product buyers already trust. Field perspective, not forced ads.",
      layout: "profile-top-box",
    },
  ],
};

export const teamSectionCopy = {
  brand: "Stefani Dimitrova",
  sectionLabel: "Who I am",
  sectionTitleLead: "meet the",
  sectionTitle: "Photographer.",
  titleLead: "Nature has a story worth\u00A0telling.",
  title: "I help people see it — and care enough to\u00A0protect\u00A0it.",
  company: "Stefani Dimitrova",
  lead:
    "I am a photographer and storyteller working with nature, wildlife and the outdoors — building images and films that make the wild feel close.",
  field:
    "Ten years across Tommy Hilfiger, outdoor brands, and early-stage ventures — plus years behind the camera. Product and growth trained, so I know what needs to be said and how to capture it in the field.",
  proof:
    "Today I use that craft in service of nature: honest photography, story films, and conservation-minded campaigns. The Map is where wildlife stories live in public.",
  closeLead: "You bring the\u00A0place.",
  closeEmphasis: "I help the world feel\u00A0it.",
  metrics: [
    { value: "20+", label: "Brands" },
    { value: "60+", label: "Campaigns" },
    { value: "500+", label: "Videos" },
    { value: "1M+", label: "Views" },
  ],
  platformsProofLabel: "Built for",
  careers: {
    title: "Start here",
    description: "Tell me about the place, species or story you want to share.",
    cta: "Work with me",
    href: "/contact",
  },
  photo: {
    src: "/images/stefani-dimitrova-portrait.jpg",
    alt: "Stefani Dimitrova, photographer and storyteller",
    caption: "Stefani Dimitrova",
    role: "Photographer & storyteller",
  },
};

export const teamMembers = [
  {
    name: "Stefani Dimitrova",
    role: "Photographer & storyteller",
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
      "Conservation projects, outdoor and travel brands, editorial teams, and anyone with a nature story that deserves careful, honest visuals.",
  },
  {
    question: "What do you help with?",
    answer:
      "Nature photography, story films and conservation storytelling — from a single field shoot to a connected campaign that carries the wild with care.",
  },
  {
    question: "Where do you shoot?",
    answer:
      "Primarily across Europe, with field work scoped to the story. On-location fees and logistics are agreed on the first consultation before you commit.",
  },
  {
    question: "What is the Map?",
    answer:
      "An interactive globe of wildlife stories — a public home for species and places I care about. Explore it anytime; it sits alongside commission work.",
  },
  {
    question: "Can the work be used in paid campaigns?",
    answer:
      "Organic use across social, website, email and listings is included with the engagement. Paid advertising and large conservation licences are quoted separately to scope.",
  },
];
