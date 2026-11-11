/**
 * Optional RSS / permitted API imports.
 * Only explicitly configured feeds are used — never invent feeds or scrape sites.
 * Imported items remain draft until an editor approves them.
 */

import { randomUUID } from "crypto";
import { readWildlifeStore, writeWildlifeStore } from "@/lib/wildlife/store";
import type { ConservationEventRecord } from "@/lib/wildlife/types";

export type ConfiguredFeed = {
  id: string;
  /** Human label */
  name: string;
  url: string;
  /** Must be explicitly allowlisted in env */
  type: "rss" | "json_api";
  defaultSpeciesId: string;
  defaultRegionId: string;
  defaultRegionName: string;
  organisation: string;
};

/** Parse WILDLIFE_FEEDS_JSON — array of ConfiguredFeed. Empty / unset = disabled. */
export function getConfiguredFeeds(): ConfiguredFeed[] {
  const raw = process.env.WILDLIFE_FEEDS_JSON?.trim();
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as ConfiguredFeed[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (f) =>
        f &&
        typeof f.url === "string" &&
        f.url.startsWith("https://") &&
        f.defaultSpeciesId &&
        (f.type === "rss" || f.type === "json_api"),
    );
  } catch {
    return [];
  }
}

function duplicateKey(e: {
  speciesId: string;
  headline: string;
  eventDate: string;
  sourceUrl: string;
}) {
  return [e.speciesId, e.headline, e.eventDate, e.sourceUrl]
    .join("|")
    .toLowerCase();
}

/**
 * Import configured feeds as draft/pending_review events.
 * Does not invent content; only maps titles/links/dates when present.
 */
export async function importConfiguredFeeds(): Promise<{
  imported: number;
  skipped: number;
  feeds: number;
}> {
  const feeds = getConfiguredFeeds();
  if (feeds.length === 0) {
    return { imported: 0, skipped: 0, feeds: 0 };
  }

  const store = readWildlifeStore();
  const existing = new Set(
    store.events.map((e) =>
      duplicateKey({
        speciesId: e.speciesId,
        headline: e.headline,
        eventDate: e.eventDate,
        sourceUrl: e.sourceUrl,
      }),
    ),
  );

  let imported = 0;
  let skipped = 0;

  for (const feed of feeds) {
    const mapping = store.mappings.find(
      (m) => m.speciesId === feed.defaultSpeciesId,
    );
    if (!mapping) {
      skipped += 1;
      continue;
    }

    try {
      const res = await fetch(feed.url, {
        headers: { Accept: "application/rss+xml, application/xml, application/json" },
        cache: "no-store",
      });
      if (!res.ok) {
        skipped += 1;
        continue;
      }
      const text = await res.text();
      const items =
        feed.type === "json_api"
          ? parseJsonItems(text)
          : parseRssItems(text);

      for (const item of items) {
        const key = duplicateKey({
          speciesId: feed.defaultSpeciesId,
          headline: item.title,
          eventDate: item.date,
          sourceUrl: item.link,
        });
        if (existing.has(key)) {
          skipped += 1;
          continue;
        }
        existing.add(key);

        const event: ConservationEventRecord = {
          id: randomUUID(),
          speciesId: feed.defaultSpeciesId,
          regionId: feed.defaultRegionId || mapping.regionId,
          regionName: feed.defaultRegionName || mapping.regionName,
          displayLat: mapping.displayLat,
          displayLng: mapping.displayLng,
          eventType: "general_story",
          headline: item.title,
          summary: item.summary || item.title,
          eventDate: item.date,
          publicationDate: item.date,
          sourceUrl: item.link,
          organisation: feed.organisation || feed.name,
          verificationStatus: "pending_review",
          isHistoricalImport: true,
          submittedBy: `feed:${feed.id}`,
        };
        store.events.unshift(event);
        imported += 1;
      }
    } catch {
      skipped += 1;
    }
  }

  writeWildlifeStore(store);
  return { imported, skipped, feeds: feeds.length };
}

function parseRssItems(xml: string): { title: string; link: string; date: string; summary: string }[] {
  const items: { title: string; link: string; date: string; summary: string }[] =
    [];
  const blocks = xml.match(/<item[\s\S]*?<\/item>/gi) || [];
  for (const block of blocks.slice(0, 25)) {
    const title = textBetween(block, "title");
    const link = textBetween(block, "link");
    const dateRaw =
      textBetween(block, "pubDate") || textBetween(block, "dc:date");
    const summary =
      textBetween(block, "description") || textBetween(block, "content:encoded");
    if (!title || !link) continue;
    const date = toIsoDate(dateRaw) || new Date().toISOString().slice(0, 10);
    items.push({
      title: stripTags(title).slice(0, 200),
      link: link.trim(),
      date,
      summary: stripTags(summary || title).slice(0, 500),
    });
  }
  return items;
}

function parseJsonItems(text: string): { title: string; link: string; date: string; summary: string }[] {
  try {
    const data = JSON.parse(text) as {
      items?: { title?: string; link?: string; url?: string; date?: string; summary?: string }[];
    };
    return (data.items || [])
      .filter((i) => i.title && (i.link || i.url))
      .slice(0, 25)
      .map((i) => ({
        title: String(i.title).slice(0, 200),
        link: String(i.link || i.url),
        date: toIsoDate(i.date) || new Date().toISOString().slice(0, 10),
        summary: String(i.summary || i.title).slice(0, 500),
      }));
  } catch {
    return [];
  }
}

function textBetween(xml: string, tag: string): string {
  const re = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>|<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i");
  const m = xml.match(re);
  return (m?.[1] || m?.[2] || "").trim();
}

function stripTags(s: string) {
  return s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function toIsoDate(raw?: string | null) {
  if (!raw) return null;
  const d = new Date(raw);
  if (Number.isNaN(d.getTime())) return null;
  return d.toISOString().slice(0, 10);
}
