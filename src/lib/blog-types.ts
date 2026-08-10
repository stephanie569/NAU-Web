export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "image"; src: string; alt: string }
  | { type: "callout"; title: string; text: string }
  | { type: "takeaway"; text: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "faq"; items: { question: string; answer: string }[] }
  | { type: "cta"; lead: string; button: string; href: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  metaDescription: string;
  content: BlogBlock[];
};

/** Internal journal paths for cross-linking. */
export const blogLinks = {
  pmfFail:
    "/blog/why-great-products-fail-before-product-market-fit",
  audit50: "/blog/audited-50-startup-websites-10-mistakes",
  thirtyDays:
    "/blog/what-i-would-change-if-you-gave-me-your-startup-30-days",
  marketingProduct:
    "/blog/best-marketing-feels-like-product-design",
  first1000: "/blog/first-1000-pounds-startup-spent-wrong-place",
  clarityProblem:
    "/blog/product-doesnt-have-marketing-problem-clarity-problem",
  spend10k: "/blog/before-spend-10000-marketing-five-questions",
  tenSeconds: "/blog/why-startup-websites-fail-first-10-seconds",
  frameworkBeforeDesign:
    "/blog/product-strategy-framework-before-designing-screen",
  expensiveMistake:
    "/blog/most-expensive-mistake-early-stage-founders",
  reposition60: "/blog/how-id-reposition-your-startup-in-60-minutes",
  pmfWrong: "/blog/what-founders-get-wrong-about-product-market-fit",
  featureCost: "/blog/hidden-cost-building-features-nobody-asked-for",
  beautifulConvert: "/blog/why-beautiful-websites-dont-always-convert",
  joinedTomorrow:
    "/blog/if-i-joined-your-startup-tomorrow-what-id-do-first",
  tenYears: "/blog/ten-years-building-products-taught-me-about-startups",
  digDeeper:
    "/blog/every-startup-looks-like-marketing-problem-until-deeper",
  noFigma: "/blog/why-i-start-every-project-without-opening-figma",
  worthBuilding: "/blog/how-i-decide-whether-product-worth-building",
  strategyLaunch:
    "/blog/from-strategy-to-launch-how-i-approach-new-product",
  crossIndustry:
    "/blog/learned-working-across-ai-hospitality-consumer-products",
  clientQuestions: "/blog/questions-i-ask-before-taking-any-client",
  systems: "/blog/why-i-care-more-about-systems-than-campaigns",
  notMoreMarketing: "/blog/founders-actually-need-isnt-more-marketing",
  productVsBusiness:
    "/blog/difference-building-product-and-building-business",
  airbnb: "/blog/product-teardown-airbnb-homepage",
  doubleConversion:
    "/blog/website-audit-three-changes-double-conversion",
  patagonia: "/blog/if-patagonia-hired-me-tomorrow-where-id-start",
  appleOnboarding: "/blog/how-id-improve-apple-onboarding-experience",
  fiveMinutes: "/blog/five-minutes-on-your-website-enough-to-find-issues",
  growingFaster:
    "/blog/product-breakdown-startup-growing-faster-than-competitors",
  landingReview: "/blog/landing-page-review-helping-hurting-conversions",
  customerJourney: "/blog/how-id-redesign-brand-customer-journey",
  costMillions: "/blog/three-product-decisions-cost-companies-millions",
  startHere: "/blog/if-product-isnt-growing-start-here",
  offlineMarketing:
    "/blog/best-marketing-doesnt-always-start-behind-screen",
  shareStories:
    "/blog/people-rarely-share-advertisements-share-stories",
  cityChannel: "/blog/your-city-most-underrated-marketing-channel",
  realWorld: "/blog/why-internet-still-needs-real-world",
  streetToPhone: "/blog/good-street-campaign-doesnt-end-on-street",
  photograph: "/blog/how-to-create-marketing-people-photograph",
  smallBudgets:
    "/blog/small-budgets-dont-kill-good-ideas-predictable-ones-do",
  qrCode: "/blog/qr-code-was-never-the-problem",
  startWithWalk: "/blog/next-marketing-campaign-should-start-with-walk",
  memorableBrands:
    "/blog/memorable-brands-dont-interrupt-give-something-worth-remembering",
  organicEarned: "/blog/organic-growth-isnt-free-its-earned",
  trustPeople: "/blog/people-trust-people-before-they-trust-marketing",
  consistency: "/blog/internet-rewards-consistency-more-than-brilliance",
  customerMarketers:
    "/blog/customers-better-marketers-than-marketing-team",
  emotionMemory: "/blog/growth-strategies-ignore-what-people-remember",
  aiPerspective: "/blog/ai-can-write-content-cant-replace-perspective",
  thinkingAdvantage:
    "/blog/competitive-advantage-was-never-typing-faster",
  aiPersonality: "/blog/dont-let-ai-become-your-personality",
  goodQuestion: "/blog/best-prompt-is-still-good-question",
  repetitionJudgement:
    "/blog/ai-should-handle-repetition-you-keep-judgement",
  solveProblemBeforeSolution:
    "/blog/best-products-solve-problem-before-sell-solution",
  launchesDontFailMarketing:
    "/blog/most-product-launches-dont-fail-because-of-marketing",
  firstCustomerTeacher:
    "/blog/first-customer-isnt-your-market-theyre-your-teacher",
  fiveFeatureQuestions:
    "/blog/before-build-another-feature-ask-five-questions",
  pmfMovingTarget:
    "/blog/product-market-fit-isnt-milestone-moving-target",
  betterTomorrow:
    "/blog/people-dont-buy-products-buy-better-tomorrow",
  launchBeforeDay:
    "/blog/launch-campaign-starts-long-before-launch-day",
  marketingIsProductProblem:
    "/blog/most-marketing-problems-are-product-problems",
  earnAttention:
    "/blog/difference-getting-attention-and-earning-it",
  storyBeforeLogo:
    "/blog/every-product-deserves-story-before-logo",
  dontAskShare:
    "/blog/best-marketing-doesnt-ask-people-to-share",
  internetNeedsRealWorld:
    "/blog/internet-still-needs-the-real-world",
  conversationNotCamera:
    "/blog/next-campaign-begin-conversation-not-camera",
  footprintsBeforeImpressions:
    "/blog/good-marketing-leaves-footprints-before-impressions",
  rememberHowFelt:
    "/blog/people-remember-how-brand-made-them-feel",
} as const;
