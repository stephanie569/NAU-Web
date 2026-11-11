import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const maxDuration = 20;

const ALLOWED_HOST_SUFFIXES = [
  "wikimedia.org",
  "wikipedia.org",
  "gbif.org",
  "inaturalist.org",
  "amazonaws.com",
  "staticflickr.com",
  "flickr.com",
  "cloudfront.net",
  "googleusercontent.com",
  "zenodo.org",
  "quod.lib.umich.edu",
  "nhm.ac.uk",
  "naturalis.nl",
  "biolib.cz",
  "wikidata.org",
];

function isAllowedUrl(raw: string): URL | null {
  try {
    const url = new URL(raw);
    if (url.protocol !== "https:") return null;
    const host = url.hostname.toLowerCase();
    if (
      ALLOWED_HOST_SUFFIXES.some(
        (suffix) => host === suffix || host.endsWith(`.${suffix}`),
      )
    ) {
      return url;
    }
    // Common museum / research image CDNs referenced by GBIF media
    if (/\.(edu|ac\.[a-z]{2,3})$/i.test(host) || host.includes("museum")) {
      return url;
    }
    return null;
  } catch {
    return null;
  }
}

export async function GET(request: Request) {
  const raw = new URL(request.url).searchParams.get("url");
  if (!raw) {
    return NextResponse.json({ error: "Missing url" }, { status: 400 });
  }
  const target = isAllowedUrl(raw);
  if (!target) {
    return NextResponse.json({ error: "Host not allowed" }, { status: 400 });
  }

  try {
    const upstream = await fetch(target.toString(), {
      headers: {
        Accept: "image/avif,image/webp,image/*,*/*",
        "User-Agent": "NAU-Web-ConservationMap/1.0 (species marker icons)",
      },
      next: { revalidate: 86400 },
    });
    if (!upstream.ok) {
      return NextResponse.json(
        { error: `Upstream ${upstream.status}` },
        { status: 502 },
      );
    }
    const contentType = upstream.headers.get("content-type") || "image/jpeg";
    if (!contentType.startsWith("image/") && !contentType.includes("octet-stream")) {
      return NextResponse.json({ error: "Not an image" }, { status: 415 });
    }
    const buf = await upstream.arrayBuffer();
    // Cap ~4MB to avoid runaway proxies
    if (buf.byteLength > 4_000_000) {
      return NextResponse.json({ error: "Image too large" }, { status: 413 });
    }
    return new NextResponse(buf, {
      status: 200,
      headers: {
        "Content-Type": contentType.startsWith("image/")
          ? contentType
          : "image/jpeg",
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch {
    return NextResponse.json({ error: "Proxy failed" }, { status: 502 });
  }
}
