/**
 * Resolve a human-readable English common name for a species.
 * Never invents names — only Wikipedia / GBIF vernaculars.
 */

type CacheEntry = { name: string | null; at: number };
const cache = new Map<string, CacheEntry>();
const TTL_MS = 1000 * 60 * 60 * 12;

function cacheKey(scientific: string, gbifKey?: string | null) {
  return `${scientific.toLowerCase()}|${gbifKey || ""}`;
}

function looksLikeBinomial(s: string): boolean {
  return /^[A-Z][a-z]+(\s+[a-z]+)+$/.test(s.trim());
}

export async function resolveCommonName(options: {
  scientificName: string;
  gbifKey?: string | null;
}): Promise<string | null> {
  const scientific = options.scientificName.trim();
  if (!scientific) return null;
  const key = cacheKey(scientific, options.gbifKey);
  const hit = cache.get(key);
  if (hit && Date.now() - hit.at < TTL_MS) return hit.name;

  const fromWiki = await fromWikipediaTitle(scientific);
  if (fromWiki) {
    cache.set(key, { name: fromWiki, at: Date.now() });
    return fromWiki;
  }

  if (options.gbifKey) {
    const fromGbif = await fromGbifVernaculars(options.gbifKey);
    if (fromGbif) {
      cache.set(key, { name: fromGbif, at: Date.now() });
      return fromGbif;
    }
  }

  const matched = await matchGbifKey(scientific);
  if (matched) {
    const fromGbif = await fromGbifVernaculars(matched);
    if (fromGbif) {
      cache.set(key, { name: fromGbif, at: Date.now() });
      return fromGbif;
    }
  }

  cache.set(key, { name: null, at: Date.now() });
  return null;
}

async function fromWikipediaTitle(
  scientific: string,
): Promise<string | null> {
  const slug = scientific.replace(/\s+/g, "_");
  try {
    const res = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(slug)}`,
      {
        headers: {
          Accept: "application/json",
          "User-Agent": "NAU-Web-ConservationMap/1.0",
        },
        cache: "force-cache",
      },
    );
    if (!res.ok) return null;
    const data = (await res.json()) as {
      title?: string;
      type?: string;
      description?: string;
    };
    if (data.type === "disambiguation") return null;
    const title = (data.title || "").trim();
    if (!title) return null;
    // Prefer Wikipedia display title when it isn't just the Latin name
    if (
      title.toLowerCase() !== scientific.toLowerCase() &&
      !looksLikeBinomial(title)
    ) {
      return title;
    }
    return null;
  } catch {
    return null;
  }
}

async function matchGbifKey(scientific: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.gbif.org/v1/species/match?name=${encodeURIComponent(scientific)}`,
      {
        headers: { Accept: "application/json", "User-Agent": "NAU-Web/1.0" },
        cache: "force-cache",
      },
    );
    if (!res.ok) return null;
    const data = (await res.json()) as {
      usageKey?: number;
      confidence?: number;
      matchType?: string;
    };
    if (!data.usageKey) return null;
    if (data.confidence != null && data.confidence < 80) return null;
    if (data.matchType === "HIGHERRANK") return null;
    return String(data.usageKey);
  } catch {
    return null;
  }
}

async function fromGbifVernaculars(gbifKey: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.gbif.org/v1/species/${encodeURIComponent(gbifKey)}/vernacularNames?limit=40`,
      {
        headers: { Accept: "application/json", "User-Agent": "NAU-Web/1.0" },
        cache: "force-cache",
      },
    );
    if (!res.ok) return null;
    const data = (await res.json()) as {
      results?: {
        vernacularName?: string;
        language?: string;
        preferred?: boolean;
      }[];
    };
    const rows = data.results || [];
    const en = rows.filter(
      (r) =>
        r.vernacularName &&
        (!r.language || /^en/i.test(r.language) || r.language === ""),
    );
    const preferred = en.find((r) => r.preferred) || en[0] || rows[0];
    const name = preferred?.vernacularName?.trim();
    if (!name) return null;
    if (looksLikeBinomial(name)) return null;
    return name;
  } catch {
    return null;
  }
}
