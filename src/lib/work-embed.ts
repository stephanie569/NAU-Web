import type { ClientPlatform, ClientWorkItem } from "@/lib/clients";

/** Used when a work link is not yet a specific post URL, so cards still play on-page. */
const FALLBACK_YOUTUBE_ID = "ZeIR4YnlSiE";

function youtubeEmbed(id: string, autoplay: boolean) {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
  });
  if (autoplay) params.set("autoplay", "1");
  return `https://www.youtube.com/embed/${id}?${params.toString()}`;
}

function extractYouTubeId(url: URL) {
  const host = url.hostname.replace(/^www\./, "");
  if (host === "youtu.be") {
    return url.pathname.split("/").filter(Boolean)[0] ?? null;
  }
  if (host.includes("youtube.com")) {
    const fromQuery = url.searchParams.get("v");
    if (fromQuery) return fromQuery;
    const match = url.pathname.match(/\/(?:embed|shorts|live)\/([^/?]+)/);
    return match?.[1] ?? null;
  }
  return null;
}

function extractInstagramPath(url: URL) {
  const match = url.pathname.match(/\/(p|reel|reels|tv)\/([^/?]+)/);
  if (!match) return null;
  const kind = match[1] === "reels" ? "reel" : match[1];
  return `/${kind}/${match[2]}/embed`;
}

function extractTikTokId(url: URL) {
  const match =
    url.pathname.match(/\/video\/(\d+)/) ||
    url.pathname.match(/\/v\/(\d+)/) ||
    url.pathname.match(/\/embed\/v2\/(\d+)/);
  return match?.[1] ?? null;
}

function extractLinkedInEmbed(url: URL) {
  const urn = url.pathname.match(/urn:li:[\w]+:[\d]+/);
  if (urn) return `https://www.linkedin.com/embed/feed/update/${urn[0]}`;

  const activity = url.href.match(/activity[-:](\d+)/);
  if (activity) {
    return `https://www.linkedin.com/embed/feed/update/urn:li:activity:${activity[1]}`;
  }

  const ugc = url.href.match(/ugcPost[-:](\d+)/);
  if (ugc) {
    return `https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:${ugc[1]}`;
  }

  return null;
}

/** Returns an embeddable player URL, or null if the link cannot play in-page. */
export function getWorkEmbedSrc(
  item: Pick<ClientWorkItem, "href" | "platform">,
  options: { autoplay?: boolean } = {},
): string | null {
  const autoplay = options.autoplay ?? false;

  try {
    const url = new URL(item.href);
    const host = url.hostname.replace(/^www\./, "");

    if (
      item.platform === "YouTube" ||
      host.includes("youtube.com") ||
      host === "youtu.be"
    ) {
      const id = extractYouTubeId(url);
      if (id && id.length >= 6) return youtubeEmbed(id, autoplay);
    }

    if (item.platform === "Instagram" || host.includes("instagram.com")) {
      const path = extractInstagramPath(url);
      if (path) return `https://www.instagram.com${path}`;
    }

    if (item.platform === "TikTok" || host.includes("tiktok.com")) {
      const id = extractTikTokId(url);
      if (id) return `https://www.tiktok.com/embed/v2/${id}`;
    }

    if (item.platform === "LinkedIn" || host.includes("linkedin.com")) {
      return extractLinkedInEmbed(url);
    }
  } catch {
    return null;
  }

  return null;
}

/**
 * Prefer a real post embed. If the stored link is only a profile/home URL,
 * fall back to a playable YouTube embed so the grid still works on-site.
 */
export function getPlayableEmbedSrc(
  item: ClientWorkItem,
  options: { autoplay?: boolean } = {},
): string {
  return (
    getWorkEmbedSrc(item, options) ??
    youtubeEmbed(FALLBACK_YOUTUBE_ID, options.autoplay ?? false)
  );
}

export function playLabel(platform: ClientPlatform) {
  return `Play ${platform} video`;
}
