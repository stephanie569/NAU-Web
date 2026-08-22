export type QrSticker = {
  id: string;
  question: string;
  image: string;
  location: string;
  /** Set when the matching essay is published. */
  essaySlug?: string;
};

export const QR_STICKERS: QrSticker[] = [
  {
    id: "content-feels-like-ad",
    question: "Why does my content feel like an ad?",
    image: "/images/qr-stickers/content-feels-like-ad.jpg",
    location: "Amsterdam",
    essaySlug: "content-feels-like-ad",
  },
  {
    id: "where-users-getting-stuck",
    question: "Where are users getting stuck?",
    image: "/images/qr-stickers/where-users-getting-stuck.jpg",
    location: "Berlin",
    essaySlug: "where-users-getting-stuck",
  },
  {
    id: "videos-views-not-buyers",
    question: "Why are my videos getting views but not buyers?",
    image: "/images/qr-stickers/videos-views-not-buyers.jpg",
    location: "London",
    essaySlug: "videos-views-not-buyers",
  },
  {
    id: "solving-right-problem",
    question: "Am I solving the right problem?",
    image: "/images/qr-stickers/solving-right-problem.jpg",
    location: "Barcelona",
    essaySlug: "solving-right-problem",
  },
  {
    id: "where-losing-customers",
    question: "Where am I losing customers?",
    image: "/images/qr-stickers/where-losing-customers.jpg",
    location: "The Alps",
    essaySlug: "where-losing-customers",
  },
  {
    id: "not-first-choice",
    question: "Why isn't my product the first choice?",
    image: "/images/qr-stickers/not-first-choice.jpg",
    location: "Paris",
    essaySlug: "not-first-choice",
  },
  {
    id: "understand-in-3-sec",
    question: "Can people understand my product in 3 sec?",
    image: "/images/qr-stickers/understand-in-3-sec.jpg",
    location: "Lisbon",
    essaySlug: "understand-in-3-sec",
  },
  {
    id: "limiting-growth",
    question: "What's limiting my product's growth?",
    image: "/images/qr-stickers/limiting-growth.jpg",
    location: "Copenhagen",
    essaySlug: "limiting-growth",
  },
  {
    id: "right-story",
    question: "Is my brand telling the right story?",
    image: "/images/qr-stickers/right-story.jpg",
    location: "Milan",
    essaySlug: "right-story",
  },
  {
    id: "content-or-filling-feed",
    question: "Am I making content or just filling a feed?",
    image: "/images/qr-stickers/content-or-filling-feed.jpg",
    location: "Vienna",
    essaySlug: "content-or-filling-feed",
  },
  {
    id: "customers-see-value",
    question: "Can customers see my value?",
    image: "/images/qr-stickers/customers-see-value.jpg",
    location: "Amsterdam",
    essaySlug: "customers-see-value",
  },
];

export const QR_STICKER_CATEGORY = "QR Stickers";

export function getQrStickerByEssaySlug(slug: string) {
  return QR_STICKERS.find((sticker) => sticker.essaySlug === slug);
}
