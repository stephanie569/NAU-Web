import type { AnimalCardPhoto } from "@/lib/wildlife/types";

type CacheEntry = { photo: AnimalCardPhoto | null; at: number };
const cache = new Map<string, CacheEntry>();
const HIT_TTL_MS = 1000 * 60 * 60 * 12;
const MISS_TTL_MS = 1000 * 60 * 15;

/** Bump when photo preference logic changes so stale plates are not reused. */
const PHOTO_CACHE_VER = "v3-organism";

function cacheKey(scientificName: string, gbifKey?: string | null) {
  return `${PHOTO_CACHE_VER}|${scientificName.toLowerCase()}|${gbifKey || ""}`;
}

/** Binomial only — strip authorship and infra-rank noise for lookups. */
export function cleanScientificName(name: string): string {
  let n = name
    .replace(/\s*\([^)]*\)\s*/g, " ")
    .replace(/,/g, " ")
    .replace(/\b(var|subsp|ssp|f|cf|aff)\.?\.?\b/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  const parts = n.split(" ").filter(Boolean);
  if (parts.length >= 2) return `${parts[0]} ${parts[1]}`;
  return parts[0] || name.trim();
}

/**
 * Resolve a public species photo with credit.
 * Wikipedia → iNaturalist → GBIF occurrence media → GBIF species media.
 * Never invents images.
 */
export async function resolveSpeciesPhoto(options: {
  scientificName: string;
  commonName?: string | null;
  gbifKey?: string | null;
  wormsId?: string | null;
  /** Prefer diver / field photos (iNaturalist) before encyclopedia thumbnails. */
  preferFieldPhotos?: boolean;
}): Promise<AnimalCardPhoto | null> {
  const scientific = cleanScientificName(options.scientificName);
  const key = cacheKey(scientific, options.gbifKey || options.wormsId);
  const hit = cache.get(key);
  if (hit) {
    const ttl = hit.photo ? HIT_TTL_MS : MISS_TTL_MS;
    if (Date.now() - hit.at < ttl) return hit.photo;
  }

  const fieldFirst = Boolean(options.preferFieldPhotos || options.wormsId);
  const common =
    options.commonName &&
    options.commonName.trim().toLowerCase() !== scientific.toLowerCase()
      ? options.commonName.trim()
      : null;

  const genus = scientific.split(" ")[0];

  // Prefer real organism photos (skip ledgers, labels, historic plates)
  if (fieldFirst) {
    const fieldTries = [
      () => fromINaturalist(scientific),
      ...(common ? [() => fromINaturalist(common)] : []),
      () => fromWikipedia(scientific),
      ...(common ? [() => fromWikipedia(common)] : []),
      () => fromGbifOccurrences(scientific, { organismOnly: true }),
      ...(genus && genus.length > 2 ? [() => fromWikipedia(genus)] : []),
    ];
    for (const tryFn of fieldTries) {
      try {
        const photo = await withTimeout(tryFn(), 3200);
        if (photo?.url && !looksLikeNonOrganismMedia(photo)) {
          cache.set(key, { photo, at: Date.now() });
          return photo;
        }
      } catch {
        /* next */
      }
    }
  }

  const primary = fieldFirst
    ? [
        () => fromINaturalist(scientific),
        ...(common ? [() => fromINaturalist(common)] : []),
        () => fromWikipedia(scientific),
        ...(common ? [() => fromWikipedia(common)] : []),
      ]
    : [
        () => fromWikipedia(scientific),
        ...(common ? [() => fromWikipedia(common)] : []),
        () => fromINaturalist(scientific),
      ];

  const raced = await raceFirstPhoto(primary, 3200);
  if (raced?.url && !looksLikeNonOrganismMedia(raced)) {
    cache.set(key, { photo: raced, at: Date.now() });
    return raced;
  }

  const fallback: (() => Promise<AnimalCardPhoto | null>)[] = [
    () => fromGbifOccurrences(scientific, { organismOnly: true }),
  ];
  if (options.gbifKey) {
    fallback.push(() => fromGbifMedia(options.gbifKey!, scientific));
  }
  if (options.wormsId) {
    fallback.push(() => fromWormsImages(options.wormsId!, scientific));
  }
  if (genus && genus.length > 2) {
    fallback.push(() => fromWikipedia(genus));
  }

  for (const tryFn of fallback) {
    try {
      const photo = await withTimeout(tryFn(), 2500);
      if (photo?.url && !looksLikeNonOrganismMedia(photo)) {
        cache.set(key, { photo, at: Date.now() });
        return photo;
      }
    } catch {
      /* next source */
    }
  }

  cache.set(key, { photo: null, at: Date.now() });
  return null;
}

/** Reject ledgers, specimen labels, and historic plates — not usable as animal photos. */
function looksLikeNonOrganismMedia(photo: AnimalCardPhoto): boolean {
  const blob = `${photo.credit || ""} ${photo.alt || ""} ${photo.url || ""}`.toLowerCase();
  if (
    /\b(accessions?\s+register|zoology\s+accessions|ledger|handwrit|manuscript|specimen\s+label|type\s+label|catalogue\s+(card|page)|catalog\s+(card|page)|register:\s*fishes|page\s+\d+)\b/.test(
      blob,
    )
  ) {
    return true;
  }
  if (/\b(gilbert|bleeker|cuvier|lithograph|woodcut|engraving)\b/.test(blob)) {
    return true;
  }
  if (
    /\b(plate\s*\d|illustration|drawing|no known copyright)\b/.test(blob) &&
    !/\b(observation|photo by|photograph by)\b/.test(blob)
  ) {
    return true;
  }
  return false;
}

function looksLikeHistoricPlate(photo: AnimalCardPhoto): boolean {
  return looksLikeNonOrganismMedia(photo);
}

async function withTimeout<T>(
  promise: Promise<T>,
  ms: number,
): Promise<T | null> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    return await Promise.race([
      promise,
      new Promise<null>((resolve) => {
        timer = setTimeout(() => resolve(null), ms);
      }),
    ]);
  } finally {
    if (timer) clearTimeout(timer);
  }
}

async function raceFirstPhoto(
  tries: (() => Promise<AnimalCardPhoto | null>)[],
  ms: number,
): Promise<AnimalCardPhoto | null> {
  if (!tries.length) return null;
  return new Promise((resolve) => {
    let settled = false;
    let pending = tries.length;
    const timer = setTimeout(() => {
      if (!settled) {
        settled = true;
        resolve(null);
      }
    }, ms);

    for (const tryFn of tries) {
      void tryFn()
        .then((photo) => {
          pending -= 1;
          if (settled) return;
          if (photo?.url) {
            settled = true;
            clearTimeout(timer);
            resolve(photo);
            return;
          }
          if (pending <= 0) {
            settled = true;
            clearTimeout(timer);
            resolve(null);
          }
        })
        .catch(() => {
          pending -= 1;
          if (!settled && pending <= 0) {
            settled = true;
            clearTimeout(timer);
            resolve(null);
          }
        });
    }
  });
}

async function fromWikipedia(title: string): Promise<AnimalCardPhoto | null> {
  const slug = title.trim().replace(/\s+/g, "_");
  if (!slug) return null;
  const res = await fetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(slug)}`,
    {
      headers: {
        Accept: "application/json",
        "User-Agent":
          "NAU-Web-ConservationMap/1.0 (https://github.com/; species profile photos)",
        "Api-User-Agent":
          "NAU-Web-ConservationMap/1.0 (https://github.com/; species profile photos)",
      },
      cache: "force-cache",
    },
  );
  if (!res.ok) return null;
  const data = (await res.json()) as {
    title?: string;
    thumbnail?: { source?: string };
    originalimage?: { source?: string };
    content_urls?: { desktop?: { page?: string } };
    type?: string;
  };
  if (data.type === "disambiguation") return null;
  const url = data.thumbnail?.source || data.originalimage?.source;
  if (!url) return null;
  return {
    url,
    credit: "Wikipedia / Wikimedia Commons",
    sourceUrl: data.content_urls?.desktop?.page || null,
    alt: data.title || title,
  };
}

async function fromINaturalist(
  scientificName: string,
): Promise<AnimalCardPhoto | null> {
  const res = await fetch(
    `https://api.inaturalist.org/v1/taxa?q=${encodeURIComponent(scientificName)}&rank=species&per_page=3`,
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
    results?: {
      id?: number;
      name?: string;
      preferred_common_name?: string;
      default_photo?: {
        medium_url?: string;
        square_url?: string;
        url?: string;
        attribution?: string;
      };
      wikipedia_url?: string;
    }[];
  };

  const match =
    data.results?.find(
      (r) => r.name?.toLowerCase() === scientificName.toLowerCase(),
    ) || data.results?.[0];
  if (!match) return null;

  const label = match.preferred_common_name || match.name || scientificName;
  const taxonUrl =
    match.wikipedia_url ||
    (match.id
      ? `https://www.inaturalist.org/taxa/${match.id}`
      : `https://www.inaturalist.org/taxa/search?q=${encodeURIComponent(scientificName)}`);

  // Prefer a real observation photo over taxon default (often a historic plate)
  if (match.id) {
    const obsPhoto = await fromINaturalistObservations(match.id, label, taxonUrl);
    if (obsPhoto) return obsPhoto;
  }

  const photo = match.default_photo;
  const url = photo?.medium_url || photo?.url || photo?.square_url;
  if (!url) return null;
  const candidate: AnimalCardPhoto = {
    url,
    credit: photo?.attribution || "iNaturalist",
    sourceUrl: taxonUrl,
    alt: label,
  };
  if (looksLikeHistoricPlate(candidate)) return null;
  return candidate;
}

async function fromINaturalistObservations(
  taxonId: number,
  alt: string,
  sourceUrl: string,
): Promise<AnimalCardPhoto | null> {
  for (const qs of [
    `taxon_id=${taxonId}&photos=true&quality_grade=research&per_page=8&order_by=votes&order=desc`,
    `taxon_id=${taxonId}&photos=true&per_page=8&order_by=votes&order=desc`,
  ]) {
    const res = await fetch(`https://api.inaturalist.org/v1/observations?${qs}`, {
      headers: {
        Accept: "application/json",
        "User-Agent": "NAU-Web-ConservationMap/1.0",
      },
      cache: "force-cache",
    });
    if (!res.ok) continue;
    const data = (await res.json()) as {
      results?: {
        uri?: string;
        user?: { login?: string };
        photos?: {
          url?: string;
          attribution?: string;
          license_code?: string | null;
        }[];
      }[];
    };

    for (const obs of data.results || []) {
      const p = obs.photos?.[0];
      if (!p?.url) continue;
      // iNat thumb URLs use square; swap to medium for card display
      const url = p.url
        .replace("/square.", "/medium.")
        .replace("/small.", "/medium.");
      const credit =
        p.attribution ||
        (obs.user?.login
          ? `© ${obs.user.login} · iNaturalist`
          : "iNaturalist observation");
      const candidate: AnimalCardPhoto = {
        url,
        credit,
        sourceUrl: obs.uri || sourceUrl,
        alt,
      };
      if (looksLikeHistoricPlate(candidate)) continue;
      return candidate;
    }
  }
  return null;
}

async function fromGbifOccurrences(
  scientificName: string,
  options: { organismOnly?: boolean } = {},
): Promise<AnimalCardPhoto | null> {
  const res = await fetch(
    `https://api.gbif.org/v1/occurrence/search?mediaType=StillImage&scientificName=${encodeURIComponent(scientificName)}&limit=12`,
    {
      headers: { Accept: "application/json" },
      cache: "force-cache",
    },
  );
  if (!res.ok) return null;
  const data = (await res.json()) as {
    results?: {
      basisOfRecord?: string;
      media?: {
        type?: string;
        identifier?: string;
        references?: string;
        rightsHolder?: string;
        creator?: string;
        license?: string;
        title?: string;
      }[];
    }[];
  };

  // Prefer observation photos over museum specimen dumps
  const ranked = [...(data.results || [])].sort((a, b) => {
    const score = (o: { basisOfRecord?: string }) =>
      /observation/i.test(o.basisOfRecord || "")
        ? 0
        : /specimen/i.test(o.basisOfRecord || "")
          ? 2
          : 1;
    return score(a) - score(b);
  });

  for (const occ of ranked) {
    for (const m of occ.media || []) {
      if (!m.identifier || !/^https?:\/\//i.test(m.identifier)) continue;
      if (
        m.type &&
        !/stillimage/i.test(m.type) &&
        !/\.(jpe?g|png|webp|gif)(\?|$)/i.test(m.identifier)
      ) {
        continue;
      }
      const creditParts = [m.rightsHolder, m.creator, m.license].filter(Boolean);
      const candidate: AnimalCardPhoto = {
        url: m.identifier,
        credit: creditParts.length
          ? `GBIF · ${creditParts.join(" · ")}`
          : "GBIF occurrence media",
        sourceUrl: m.references || null,
        alt: m.title || scientificName,
      };
      if (looksLikeNonOrganismMedia(candidate)) continue;
      if (
        options.organismOnly &&
        /specimen/i.test(occ.basisOfRecord || "") &&
        /\b(register|label|ledger|accessions)\b/i.test(m.title || "")
      ) {
        continue;
      }
      return candidate;
    }
  }
  return null;
}

async function fromWormsImages(
  aphiaId: string,
  scientificName: string,
): Promise<AnimalCardPhoto | null> {
  const res = await fetch(
    `https://www.marinespecies.org/rest/AphiaImagesByAphiaID/${encodeURIComponent(aphiaId)}`,
    {
      headers: {
        Accept: "application/json",
        "User-Agent": "NAU-Web-ConservationMap/1.0",
      },
      cache: "force-cache",
    },
  );
  if (!res.ok) return null;
  const data = (await res.json()) as
    | {
        image_url?: string;
        thumbnail_url?: string;
        image_title?: string;
        attribution?: string;
        license?: string;
      }[]
    | { message?: string };
  if (!Array.isArray(data) || !data.length) return null;
  const img = data.find((d) => d.image_url || d.thumbnail_url) || data[0];
  const url = img.image_url || img.thumbnail_url;
  if (!url || !/^https?:\/\//i.test(url)) return null;
  return {
    url,
    credit: [img.attribution, img.license].filter(Boolean).join(" · ") ||
      "WoRMS",
    sourceUrl: `https://www.marinespecies.org/aphia.php?p=taxdetails&id=${aphiaId}`,
    alt: img.image_title || scientificName,
  };
}

async function fromWormsByName(
  scientificName: string,
): Promise<AnimalCardPhoto | null> {
  const res = await fetch(
    `https://www.marinespecies.org/rest/AphiaRecordsByName/${encodeURIComponent(scientificName)}?like=false&marine_only=true&offset=1`,
    {
      headers: {
        Accept: "application/json",
        "User-Agent": "NAU-Web-ConservationMap/1.0",
      },
      cache: "force-cache",
    },
  );
  if (!res.ok) return null;
  const rows = (await res.json()) as { AphiaID?: number; status?: string }[] | null;
  const hit =
    rows?.find((r) => /accepted/i.test(r.status || "")) || rows?.[0];
  if (!hit?.AphiaID) return null;
  return fromWormsImages(String(hit.AphiaID), scientificName);
}

async function fromGbifMedia(
  gbifKey: string,
  scientificName: string,
): Promise<AnimalCardPhoto | null> {
  const res = await fetch(
    `https://api.gbif.org/v1/species/${encodeURIComponent(gbifKey)}/media?limit=8`,
    {
      headers: { Accept: "application/json" },
      cache: "force-cache",
    },
  );
  if (!res.ok) return null;
  const data = (await res.json()) as {
    results?: {
      type?: string;
      identifier?: string;
      references?: string;
      createdBy?: string;
      rightsHolder?: string;
      license?: string;
    }[];
  };
  const image = (data.results || []).find(
    (r) => r.identifier && /^https?:\/\//i.test(r.identifier),
  );
  if (!image?.identifier) return null;
  const creditParts = [
    image.rightsHolder,
    image.createdBy,
    image.license,
  ].filter(Boolean);
  return {
    url: image.identifier,
    credit: creditParts.length
      ? `GBIF · ${creditParts.join(" · ")}`
      : "GBIF species media",
    sourceUrl: image.references || `https://www.gbif.org/species/${gbifKey}`,
    alt: scientificName,
  };
}
