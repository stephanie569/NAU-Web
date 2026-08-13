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
    "/essays/why-great-products-fail-before-product-market-fit",
  audit50: "/essays/audited-50-startup-websites-10-mistakes",
  thirtyDays:
    "/essays/what-i-would-change-if-you-gave-me-your-startup-30-days",
  marketingProduct:
    "/essays/best-marketing-feels-like-product-design",
  first1000: "/essays/first-1000-pounds-startup-spent-wrong-place",
  clarityProblem:
    "/essays/product-doesnt-have-marketing-problem-clarity-problem",
  spend10k: "/essays/before-spend-10000-marketing-five-questions",
  tenSeconds: "/essays/why-startup-websites-fail-first-10-seconds",
  frameworkBeforeDesign:
    "/essays/product-strategy-framework-before-designing-screen",
  expensiveMistake:
    "/essays/most-expensive-mistake-early-stage-founders",
  reposition60: "/essays/how-id-reposition-your-startup-in-60-minutes",
  pmfWrong: "/essays/what-founders-get-wrong-about-product-market-fit",
  featureCost: "/essays/hidden-cost-building-features-nobody-asked-for",
  beautifulConvert: "/essays/why-beautiful-websites-dont-always-convert",
  joinedTomorrow:
    "/essays/if-i-joined-your-startup-tomorrow-what-id-do-first",
  tenYears: "/essays/ten-years-building-products-taught-me-about-startups",
  digDeeper:
    "/essays/every-startup-looks-like-marketing-problem-until-deeper",
  noFigma: "/essays/why-i-start-every-project-without-opening-figma",
  worthBuilding: "/essays/how-i-decide-whether-product-worth-building",
  strategyLaunch:
    "/essays/from-strategy-to-launch-how-i-approach-new-product",
  crossIndustry:
    "/essays/learned-working-across-ai-hospitality-consumer-products",
  clientQuestions: "/essays/questions-i-ask-before-taking-any-client",
  systems: "/essays/why-i-care-more-about-systems-than-campaigns",
  notMoreMarketing: "/essays/founders-actually-need-isnt-more-marketing",
  productVsBusiness:
    "/essays/difference-building-product-and-building-business",
  airbnb: "/essays/product-teardown-airbnb-homepage",
  doubleConversion:
    "/essays/website-audit-three-changes-double-conversion",
  patagonia: "/essays/if-patagonia-hired-me-tomorrow-where-id-start",
  appleOnboarding: "/essays/how-id-improve-apple-onboarding-experience",
  fiveMinutes: "/essays/five-minutes-on-your-website-enough-to-find-issues",
  growingFaster:
    "/essays/product-breakdown-startup-growing-faster-than-competitors",
  landingReview: "/essays/landing-page-review-helping-hurting-conversions",
  customerJourney: "/essays/how-id-redesign-brand-customer-journey",
  costMillions: "/essays/three-product-decisions-cost-companies-millions",
  startHere: "/essays/if-product-isnt-growing-start-here",
  offlineMarketing:
    "/essays/best-marketing-doesnt-always-start-behind-screen",
  shareStories:
    "/essays/people-rarely-share-advertisements-share-stories",
  cityChannel: "/essays/your-city-most-underrated-marketing-channel",
  realWorld: "/essays/why-internet-still-needs-real-world",
  streetToPhone: "/essays/good-street-campaign-doesnt-end-on-street",
  photograph: "/essays/how-to-create-marketing-people-photograph",
  smallBudgets:
    "/essays/small-budgets-dont-kill-good-ideas-predictable-ones-do",
  qrCode: "/essays/qr-code-was-never-the-problem",
  startWithWalk: "/essays/next-marketing-campaign-should-start-with-walk",
  memorableBrands:
    "/essays/memorable-brands-dont-interrupt-give-something-worth-remembering",
  organicEarned: "/essays/organic-growth-isnt-free-its-earned",
  trustPeople: "/essays/people-trust-people-before-they-trust-marketing",
  consistency: "/essays/internet-rewards-consistency-more-than-brilliance",
  customerMarketers:
    "/essays/customers-better-marketers-than-marketing-team",
  emotionMemory: "/essays/growth-strategies-ignore-what-people-remember",
  aiPerspective: "/essays/ai-can-write-content-cant-replace-perspective",
  thinkingAdvantage:
    "/essays/competitive-advantage-was-never-typing-faster",
  aiPersonality: "/essays/dont-let-ai-become-your-personality",
  goodQuestion: "/essays/best-prompt-is-still-good-question",
  repetitionJudgement:
    "/essays/ai-should-handle-repetition-you-keep-judgement",
  solveProblemBeforeSolution:
    "/essays/best-products-solve-problem-before-sell-solution",
  launchesDontFailMarketing:
    "/essays/most-product-launches-dont-fail-because-of-marketing",
  firstCustomerTeacher:
    "/essays/first-customer-isnt-your-market-theyre-your-teacher",
  fiveFeatureQuestions:
    "/essays/before-build-another-feature-ask-five-questions",
  pmfMovingTarget:
    "/essays/product-market-fit-isnt-milestone-moving-target",
  betterTomorrow:
    "/essays/people-dont-buy-products-buy-better-tomorrow",
  launchBeforeDay:
    "/essays/launch-campaign-starts-long-before-launch-day",
  marketingIsProductProblem:
    "/essays/most-marketing-problems-are-product-problems",
  earnAttention:
    "/essays/difference-getting-attention-and-earning-it",
  storyBeforeLogo:
    "/essays/every-product-deserves-story-before-logo",
  dontAskShare:
    "/essays/best-marketing-doesnt-ask-people-to-share",
  internetNeedsRealWorld:
    "/essays/internet-still-needs-the-real-world",
  conversationNotCamera:
    "/essays/next-campaign-begin-conversation-not-camera",
  footprintsBeforeImpressions:
    "/essays/good-marketing-leaves-footprints-before-impressions",
  rememberHowFelt:
    "/essays/people-remember-how-brand-made-them-feel",
} as const;
