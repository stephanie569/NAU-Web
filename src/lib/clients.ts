export const clientPlatforms = [
  "Instagram",
  "TikTok",
  "YouTube",
  "LinkedIn",
] as const;

export type ClientPlatform = (typeof clientPlatforms)[number];

export type ClientWorkItem = {
  title: string;
  platform: ClientPlatform;
  href: string;
  thumbnail: string;
};

export type ClientMetric = {
  value: string;
  label: string;
};

export type ClientCampaign = {
  research: string;
  goals: string[];
};

export type ClientResults = {
  summary: string;
  metrics: ClientMetric[];
};

export type ClientBookingPackage = {
  destination: string;
  region: string;
  image: string;
  accommodation: string;
  activity: string;
  eventManager: string;
  rating: string;
  selected?: boolean;
};

export type ClientPlanner = {
  title: string;
  summary: string;
  categories: { label: string; active?: boolean }[];
  packages: ClientBookingPackage[];
  confirmLabel: string;
};

export type ClientProfile = {
  slug: string;
  name: string;
  headline: string;
  role: string;
  bio: string;
  photo: string;
  photoAlt: string;
  logo: string;
  year: string;
  category: string;
  /** When true, omitted from listings, marquee, related, and detail routes. */
  hidden?: boolean;
  planner?: ClientPlanner;
  campaign: ClientCampaign;
  results: ClientResults;
  work: ClientWorkItem[];
};

const PLAY_URL = "https://youtu.be/ZeIR4YnlSiE";
const SERIES_PLATFORMS: ClientPlatform[] = [
  "Instagram",
  "TikTok",
  "YouTube",
  "LinkedIn",
];

function seriesWork(titles: string[], thumbs: string[]): ClientWorkItem[] {
  return titles.map((title, index) => ({
    title,
    platform: SERIES_PLATFORMS[index % SERIES_PLATFORMS.length],
    href: PLAY_URL,
    thumbnail: thumbs[index % thumbs.length],
  }));
}

export const clients: ClientProfile[] = [
  {
    slug: "the-pine",
    name: "The Pine",
    headline: "Team retreats in Europe, told as a series people book.",
    role: "Team retreats & experiences",
    bio: "The Pine is the all-in-one platform for company getaways across Europe: stays, curated experiences and on-site facilitation in one flow. I helped the brand get clear on who books retreats and why, then built a campaign content series so HR and team leads could find them, trust the offer and request a quote without paid ads.",
    photo: "/images/clients/the-pine-progress.png",
    photoAlt: "The Pine dashboard showing your offsite progress: stay booked, activity confirmed, host assigned",
    logo: "/logos/the-pine.png",
    year: "2025",
    category: "Content Creation",
    planner: {
      title: "Complete your booking",
      summary: "12 guests · Coastal Greece · 4-7 June",
      categories: [
        { label: "Greece", active: true },
        { label: "Spain" },
        { label: "Portugal" },
        { label: "Bulgaria" },
      ],
      packages: [
        {
          destination: "Coastal Greece",
          region: "Halkidiki",
          image: "/images/guides/travel.jpg",
          accommodation: "Sea-view villa · Sleeps 12",
          activity: "Private boat day",
          eventManager: "Maria · On-site from arrival",
          rating: "4.9/5",
          selected: true,
        },
        {
          destination: "Mountain Spain",
          region: "Pyrenees",
          image: "/images/guides/outdoor.jpg",
          accommodation: "Forest lodge · 10 rooms",
          activity: "Guided hike & cookout",
          eventManager: "Carlos · Retreat lead",
          rating: "4.8/5",
        },
        {
          destination: "River Portugal",
          region: "Douro Valley",
          image: "/images/guides/travel-lake.jpg",
          accommodation: "Estates house · Pool & terrace",
          activity: "Kayak & vineyard lunch",
          eventManager: "Sofia · Local host",
          rating: "4.7/5",
        },
      ],
      confirmLabel: "Confirm booking",
    },
    campaign: {
      research:
        "We mapped how teams buy retreats in Europe: HR and office managers juggling venues, activities, food and logistics across multiple vendors. Competitor teardowns showed most players sell either a hotel or a single activity. The Pine’s edge is the full getaway in one place. Interviews confirmed buyers need proof of connection, focus and growth, not another vague “epic team building” promise.",
      goals: [
        "Follow one team getaway from “we need an offsite” to quote",
        "Cover stay, experience, host, destinations, logistics, then proof",
        "Shoot handheld on location with real teams, never with brochure polish",
        "Open on the planning headache so scrollers stop before the offer",
      ],
    },
    results: {
      summary:
        "The series turned a multi-vendor planning headache into a clear product story. Organic views and quote intent rose without ads, and The Pine finally had a campaign library that shows stays, experiences and facilitation as one coordinated getaway.",
      metrics: [
        { value: "1.2M+", label: "Organic views" },
        { value: "3.4×", label: "Avg. watch time vs prior posts" },
        { value: "+48%", label: "Quote form starts in 60 days" },
        { value: "10", label: "Campaign videos shipped" },
      ],
    },
    work: seriesWork(
      [
        "01 · Hook: your ideal team retreat, made easy",
        "02 · Stays & venues that fit the team",
        "03 · Curated experiences that actually bond",
        "04 · On-site facilitation, when you want it",
        "05 · Greece to Bulgaria: pick the backdrop",
        "06 · Food, transport and logistics in one flow",
        "07 · Proof: what teams say after the reset",
        "08 · LinkedIn cut for HR and office managers",
        "09 · Mid-series: connection, focus, growth",
        "10 · Series closer: get a quote, not another vendor list",
      ],
      [
        "/images/clients/the-pine-boat.jpg",
        "/images/guides/adventure.jpg",
        "/images/guides/travel-lake.jpg",
        "/images/guides/travel.jpg",
      ],
    ),
  },
  {
    slug: "go-guide",
    name: "Go Guide",
    headline: "Adventure experiences, with a story that sounds like the field.",
    role: "Adventure experiences",
    bio: "Go Guide runs adventure experiences for people who want the trip, not the brochure. They already had a strategy. I built a campaign content series around one story so every piece sounds like them in the field, works with the next cut, and keeps people watching instead of scrolling past another random post.",
    photo: "/images/clients/go-guide-cover.png",
    photoAlt: "Go Guide magazine cover: Show your love and support local business",
    logo: "/logos/go-guide.png",
    year: "2025",
    category: "Content Creation",
    hidden: true,
    campaign: {
      research:
        "We audited how adventure brands sell experiences online: glossy highlight reels, vague “epic” language and little proof of what a guest actually does on day one. Competitor teardowns and guest-language interviews showed Go Guide’s edge was operational clarity and on-the-ground energy, not another cinematic montage. The market already knew the category. It needed a brand that felt like the trip itself.",
      goals: [
        "Translate the existing strategy into one campaign story guests can repeat",
        "Ship complementary campaign content that sounds like Go Guide in the field",
        "Prioritise Instagram and TikTok for discovery, with YouTube for longer proof",
        "Raise organic enquiries without buying a spike of attention",
      ],
    },
    results: {
      summary:
        "The series finally sounded like the brand outdoors: pieces that work together, stories people stay with, and a library the team can keep running. Organic reach and enquiry intent rose without paid ads.",
      metrics: [
        { value: "860K+", label: "Organic views" },
        { value: "2.8×", label: "Completion rate vs prior Reels" },
        { value: "+36%", label: "Enquiry form starts" },
        { value: "10", label: "Campaign videos shipped" },
      ],
    },
    work: seriesWork(
      [
        "01 · Hook: what the first morning feels like",
        "02 · Field cut: guide energy, not brochure polish",
        "03 · Longer proof: a day on the trail",
        "04 · Operator story for partners",
        "05 · Guest UGC: the moment they book for",
        "06 · Kit check before you go",
        "07 · Why this route, not another",
        "08 · Safety without the lecture",
        "09 · Mid-series: the group dynamic",
        "10 · Series closer: why this trip",
      ],
      [
        "/images/clients/go-guide-cover.png",
        "/images/guides/adventure.jpg",
        "/images/guides/travel-lake.jpg",
        "/images/guides/travel.jpg",
      ],
    ),
  },
  {
    slug: "yan-bibiyan",
    name: "Yan Bibiyan",
    headline: "A product brand with a clearer story to tell.",
    role: "Product brand",
    bio: "Yan Bibiyan came with a product worth buying. The work was to help the right audience find it, with a connected content series rather than one-off posts.",
    photo: "/images/guides/travel.jpg",
    photoAlt: "Campaign still for Yan Bibiyan",
    logo: "/logos/yan-bibiyan.png",
    year: "2024",
    category: "Marketing Strategy",
    campaign: {
      research:
        "Research and go-to-market notes for this campaign will sit here once the brief is locked.",
      goals: [
        "Sharpen positioning",
        "Define the campaign story",
        "Ship content that matches the product",
      ],
    },
    results: {
      summary: "Results and analytics for this campaign will appear here after launch.",
      metrics: [],
    },
    work: seriesWork(
      [
        "01 · Who it’s for",
        "02 · Why it wins",
        "03 · The campaign hook",
        "04 · Founder cut",
        "05 · Product in use",
        "06 · Objection, answered",
        "07 · Partner story",
        "08 · Proof people remember",
        "09 · Mid-series reminder",
        "10 · Series closer",
      ],
      [
        "/images/guides/travel.jpg",
        "/images/guides/adventure.jpg",
        "/images/guides/outdoor.jpg",
        "/images/guides/travel-lake.jpg",
      ],
    ),
  },
  {
    slug: "fly-the-earth",
    name: "Fly the Earth",
    headline: "A travel brand that knows where it stands.",
    role: "Travel brand",
    bio: "Fly the Earth needed sharper market and competitor research before another content push. I clarified where the brand sits, who it needs to win, and the messaging that carries a campaign series, so the next videos pull people through one story instead of scattering them.",
    photo: "/images/clients/fly-the-earth-wing.jpg",
    photoAlt: "Paraglider wing and pilot against a blue sky with orange smoke",
    logo: "/logos/fly-the-earth.png",
    year: "2024",
    category: "Research & Positioning",
    campaign: {
      research:
        "We tore down five to eight travel and lifestyle competitors, mapped category language and interviewed buyers on what “travel brand” actually means when they book or buy. The audit showed Fly the Earth was competing on mood while stronger neighbours owned a clear job: planning, packing or the feeling of arrival. Positioning had to get specific before cameras rolled.",
      goals: [
        "Define who the brand is for and who it is not",
        "Write a positioning line and messaging pillars buyers can repeat",
        "Build a 60-day organic go-to-market plan the content series can carry",
        "Brief campaign content that matches the research, not a random moodboard",
      ],
    },
    results: {
      summary:
        "Sharp market and competitor research clarified where the brand stands and who it needs to win. The team left with a positioning system, a runnable GTM sequence and a content brief that finally matched the product story.",
      metrics: [
        { value: "8", label: "Competitor brands audited" },
        { value: "1", label: "Positioning system locked" },
        { value: "60-day", label: "Organic GTM plan" },
        { value: "10", label: "Videos briefed for the series" },
      ],
    },
    work: seriesWork(
      [
        "01 · Positioning film: who it’s for",
        "02 · Hook: the job travel buyers hire you for",
        "03 · Category teardown, made watchable",
        "04 · Founder note for the trade",
        "05 · Campaign opener: arrival, not mood",
        "06 · Packing the story, not the cliché",
        "07 · Why this brand wins the brief",
        "08 · Partner cut for distributors",
        "09 · Mid-series: proof of the job",
        "10 · Series closer: a line people can repeat",
      ],
      [
        "/images/clients/fly-the-earth-wing.jpg",
        "/images/guides/travel.jpg",
        "/images/guides/adventure.jpg",
        "/images/guides/outdoor.jpg",
      ],
    ),
  },
  {
    slug: "dea-accelerate",
    name: "DEA",
    headline: "A brand built for movement, with room to grow.",
    role: "Product brand",
    bio: "DEA is part of the nau studio roster. This page is ready for campaign research, goals, results and the work I built for the brand.",
    photo: "/images/guides/hospitality.jpg",
    photoAlt: "Campaign still for DEA",
    logo: "/logos/dea.png",
    year: "2024",
    category: "Marketing Strategy",
    campaign: {
      research:
        "Research and go-to-market notes for this campaign will sit here once the brief is locked.",
      goals: [
        "Define the market wedge",
        "Set launch goals",
        "Plan the content series",
      ],
    },
    results: {
      summary: "Results and analytics for this campaign will appear here after launch.",
      metrics: [],
    },
    work: seriesWork(
      [
        "01 · Market wedge, in one line",
        "02 · Launch hook",
        "03 · Product proof",
        "04 · Founder for the trade",
        "05 · Use-case in the wild",
        "06 · Why now",
        "07 · Partner cut",
        "08 · Objection, answered",
        "09 · Mid-series reminder",
        "10 · Series closer",
      ],
      [
        "/images/guides/hospitality.jpg",
        "/images/guides/hospitality-lobby.jpg",
        "/images/guides/travel.jpg",
        "/images/studio-collaboration.jpg",
      ],
    ),
  },
  {
    slug: "kingo",
    name: "Kingo",
    headline: "A product story the right buyers can find.",
    role: "Consumer product",
    bio: "Kingo had a product worth buying and a feed that still sounded like everyone else. I clarified who it is for, set organic go-to-market goals and made a campaign content series so the right audience could find the product, remember it and share it for the right reason.",
    photo: "/images/clients/kingo-cover-v2.png",
    photoAlt: "Kingo sales AI app on a phone, with floating opportunity and assistant cards",
    logo: "/logos/kingo.png",
    year: "2024",
    category: "Content Creation",
    campaign: {
      research:
        "We reviewed Kingo’s category neighbours, retail language and how buyers describe the product when they recommend it to a friend. The gap was not volume. It was clarity: features were listed, but the job-to-be-done was soft. Competitor content rented trends. Kingo needed a series that made the product’s job obvious in seconds.",
      goals: [
        "Lock ICP and the one job the product wins on",
        "Build messaging and hooks that carry a full campaign series",
        "Ship campaign content across Instagram, TikTok, YouTube and LinkedIn",
        "Grow organic discovery without relying on paid boosts",
      ],
    },
    results: {
      summary:
        "The campaign gave Kingo a clear product story and a content system that compounds. Organic views and saves rose, and the brand stopped resetting the narrative with every post.",
      metrics: [
        { value: "640K+", label: "Organic views" },
        { value: "+52%", label: "Saves vs prior month" },
        { value: "2.1×", label: "Avg. engagement rate" },
        { value: "10", label: "Campaign videos shipped" },
      ],
    },
    work: seriesWork(
      [
        "01 · Hook: the job in three seconds",
        "02 · UGC: how buyers actually use it",
        "03 · Promo cut: one product, one win",
        "04 · Founder brief for retail partners",
        "05 · Series mid-point: proof in use",
        "06 · Unboxing without the fluff",
        "07 · Why this, not the alternative",
        "08 · Trade cut: shelf to story",
        "09 · Objection, answered on camera",
        "10 · Closer: what to remember",
      ],
      [
        "/images/clients/kingo-cover-v2.png",
        "/images/guides/hospitality.jpg",
        "/images/guides/travel.jpg",
        "/images/studio-collaboration.jpg",
      ],
    ),
  },
  {
    slug: "patronaj",
    name: "Patronaj.net",
    headline: "A brand with a clearer path to the right audience.",
    role: "Product brand",
    bio: "Patronaj.net is part of the nau studio roster. This profile can hold research, go-to-market goals, results and campaign videos once they are ready.",
    photo: "/images/studio-collaboration.jpg",
    photoAlt: "Working session still for Patronaj.net",
    logo: "/logos/patronaj.png",
    year: "2023",
    category: "Research & Positioning",
    campaign: {
      research:
        "Research and go-to-market notes for this campaign will sit here once the brief is locked.",
      goals: [
        "Position the product clearly",
        "Set go-to-market goals",
        "Plan content that compounds",
      ],
    },
    results: {
      summary: "Results and analytics for this campaign will appear here after launch.",
      metrics: [],
    },
    work: seriesWork(
      [
        "01 · Positioning in one breath",
        "02 · Who it’s not for",
        "03 · Campaign hook",
        "04 · Founder cut",
        "05 · Product in context",
        "06 · Why this path",
        "07 · Partner story",
        "08 · Proof that travels",
        "09 · Mid-series reminder",
        "10 · Series closer",
      ],
      [
        "/images/studio-collaboration.jpg",
        "/images/guides/hospitality.jpg",
        "/images/guides/travel.jpg",
        "/images/guides/outdoor.jpg",
      ],
    ),
  },
];

export const featuredClientSlugs: readonly string[] = [
  "the-pine",
  "kingo",
  "fly-the-earth",
];

export function getPublishedClients() {
  return clients.filter((client) => !client.hidden);
}

export function getClient(slug: string) {
  const client = clients.find((item) => item.slug === slug);
  if (!client || client.hidden) return undefined;
  return client;
}

export function getRelatedClients(slug: string, limit = 3) {
  return featuredClientSlugs
    .filter((featuredSlug) => featuredSlug !== slug)
    .map((featuredSlug) =>
      getPublishedClients().find((client) => client.slug === featuredSlug),
    )
    .filter((client): client is ClientProfile => Boolean(client))
    .slice(0, limit);
}

export function watchLabel(platform: ClientPlatform) {
  return `Play ${platform} video`;
}
