import type { Region, Species, Story } from "@/lib/map/types";

/**
 * ILLUSTRATIVE DEMO FIXTURES ONLY.
 * Not live wildlife monitoring. Remove or disable via mapConfig.enableDemoContent.
 * Do not treat numbers, links, or organisations here as verified fact.
 */

export const demoSpecies: Species[] = [
  {
    id: "demo-brown-bear",
    commonName: "Brown bear",
    scientificName: "Ursus arctos",
    animalGroup: "mammals",
    description:
      "A large omnivore associated with forested mountain landscapes. This demo profile is illustrative only.",
    ecologicalRole:
      "Seed disperser and apex scavenger-predator that shapes forest food webs.",
    threats: ["Habitat fragmentation", "Human–wildlife conflict", "Poaching"],
  },
  {
    id: "demo-imperial-eagle",
    commonName: "Eastern imperial eagle",
    scientificName: "Aquila heliaca",
    animalGroup: "birds",
    description:
      "A large raptor of open plains and forest edges. Demo content — not a live status report.",
    ecologicalRole:
      "Top aerial predator that helps regulate medium-sized vertebrate populations.",
    threats: ["Electrocution on power lines", "Nest disturbance", "Prey decline"],
  },
  {
    id: "demo-european-souslik",
    commonName: "European ground squirrel",
    scientificName: "Spermophilus citellus",
    animalGroup: "mammals",
    description:
      "A burrowing grassland mammal. Demo record for population-trend UI only.",
    ecologicalRole:
      "Keystone digger that maintains steppe grassland structure and prey base.",
    threats: ["Grassland conversion", "Fragmentation", "Pesticides"],
  },
  {
    id: "demo-marbled-polecat",
    commonName: "Marbled polecat",
    scientificName: "Vormela peregusna",
    animalGroup: "mammals",
    description:
      "A small carnivore of open habitats. Used here only to demonstrate recovery milestones.",
    ecologicalRole:
      "Predator of rodents and insects in steppe and semi-arid systems.",
    threats: ["Habitat loss", "Secondary poisoning", "Road mortality"],
  },
];

export const demoRegions: Region[] = [
  {
    id: "demo-region-rhodope",
    name: "Rhodope Mountains (broad region)",
    displayLat: 41.65,
    displayLng: 24.7,
    focusAltitude: 1.45,
  },
  {
    id: "demo-region-sakar",
    name: "Sakar foothills (broad region)",
    displayLat: 41.95,
    displayLng: 26.25,
    focusAltitude: 1.45,
  },
  {
    id: "demo-region-dobrudzha",
    name: "Dobrudzha plains (broad region)",
    displayLat: 43.7,
    displayLng: 27.9,
    focusAltitude: 1.5,
  },
  {
    id: "demo-region-strandzha",
    name: "Strandzha foothills (broad region)",
    displayLat: 42.05,
    displayLng: 27.55,
    focusAltitude: 1.45,
  },
];

const now = Date.now();
const days = (n: number) =>
  new Date(now - n * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

export const demoStories: Story[] = [
  {
    id: "demo-story-bear-profile",
    speciesId: "demo-brown-bear",
    regionId: "demo-region-rhodope",
    type: "animal",
    headline: "Brown bear — mountain forest story (demo)",
    summary:
      "Illustrative wildlife story about brown bears in a broad mountain region of Bulgaria. No live tracking or nest locations are shown.",
    whyItMatters:
      "Large carnivores signal connected habitats. Sharing verified stories helps people care before conflict escalates.",
    monitoringPeriod: "Illustrative profile — no monitoring period claimed",
    publishedAt: days(40),
    reviewedAt: days(40),
    sources: [
      {
        label: "Replace with a cited source",
        url: "https://example.com/replace-with-verified-source",
      },
    ],
    organisation: {
      name: "Demo conservation partner (placeholder)",
      url: "https://example.com/replace-with-organisation",
    },
    action: {
      label: "Learn about verified support options",
      url: "https://example.com/replace-with-action",
    },
    status: "published",
    isDemo: true,
  },
  {
    id: "demo-story-eagle-incident",
    speciesId: "demo-imperial-eagle",
    regionId: "demo-region-sakar",
    type: "incident",
    headline: "Confirmed power-line incident (demo)",
    summary:
      "Demonstration of a confirmed incident marker. In production, only publish when an authoritative source documents the event.",
    whyItMatters:
      "Electrocution and collisions are preventable with infrastructure fixes — but only verified reports should drive alerts.",
    eventDate: days(20),
    publishedAt: days(5),
    reviewedAt: days(2),
    sources: [
      {
        label: "Replace with incident citation",
        url: "https://example.com/replace-with-incident-source",
      },
    ],
    organisation: {
      name: "Demo raptor programme (placeholder)",
      url: "https://example.com/replace-with-organisation",
    },
    action: {
      label: "Visit organisation page",
      url: "https://example.com/replace-with-action",
    },
    status: "published",
    isDemo: true,
  },
  {
    id: "demo-story-souslik-decline",
    speciesId: "demo-european-souslik",
    regionId: "demo-region-dobrudzha",
    type: "population_trend",
    headline: "Reported grassland decline signal (demo)",
    summary:
      "Demonstration of a population-trend alert. No percentage is shown because no cited assessment is attached.",
    whyItMatters:
      "Missing numbers must never imply safety. Trends only appear with a cited scope and monitoring period.",
    monitoringPeriod: "Illustrative monitoring window — not a real assessment",
    publishedAt: days(9),
    reviewedAt: days(3),
    sources: [
      {
        label: "Replace with assessment citation",
        url: "https://example.com/replace-with-assessment",
      },
    ],
    organisation: {
      name: "Demo grassland network (placeholder)",
    },
    action: {
      label: "Read about grassland stewardship",
      url: "https://example.com/replace-with-action",
    },
    status: "published",
    isDemo: true,
  },
  {
    id: "demo-story-polecat-recovery",
    speciesId: "demo-marbled-polecat",
    regionId: "demo-region-strandzha",
    type: "recovery",
    headline: "Verified recovery milestone (demo)",
    summary:
      "Demonstration of a recovery milestone marker for UI and legend behaviour. Not an endorsed conservation claim.",
    whyItMatters:
      "Celebrating verified wins keeps hope honest — only after independent review should recovery pulse green.",
    eventDate: days(60),
    publishedAt: days(12),
    reviewedAt: days(4),
    sources: [
      {
        label: "Replace with recovery citation",
        url: "https://example.com/replace-with-recovery-source",
      },
    ],
    organisation: {
      name: "Demo recovery partner (placeholder)",
      url: "https://example.com/replace-with-organisation",
    },
    action: {
      label: "Support verified programmes",
      url: "https://example.com/replace-with-action",
    },
    status: "published",
    isDemo: true,
  },
  {
    id: "demo-story-eagle-neutral",
    speciesId: "demo-imperial-eagle",
    regionId: "region-bulgaria",
    type: "story",
    headline: "General wildlife story (demo)",
    summary:
      "A neutral wildlife story marker for Bulgaria at a broad national display location.",
    whyItMatters:
      "Not every story is an alert. Neutral markers keep education separate from incidents and trends.",
    monitoringPeriod: "Ongoing storytelling — illustrative",
    publishedAt: days(25),
    reviewedAt: days(25),
    sources: [
      {
        label: "Replace with story source",
        url: "https://example.com/replace-with-source",
      },
    ],
    status: "published",
    isDemo: true,
  },
];
