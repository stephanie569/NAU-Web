import { NextResponse } from "next/server";
import { resolveSpeciesPhoto } from "@/lib/map/animalPhoto";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

type IconRequestItem = {
  id: string;
  scientificName: string;
  commonName?: string | null;
  gbifKey?: string | null;
};

/**
 * Batch-resolve species photos for map marker icons.
 * Cap + concurrency keep Wikipedia/GBIF polite.
 */
export async function POST(request: Request) {
  let body: { items?: IconRequestItem[] };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const items = (body.items || [])
    .filter((i) => i?.id && i?.scientificName)
    .slice(0, 40);

  const icons: Record<string, string | null> = {};
  const queue = [...items];
  const workers = Array.from({ length: Math.min(5, queue.length) }, async () => {
    while (queue.length) {
      const item = queue.shift();
      if (!item) break;
      try {
        const photo = await resolveSpeciesPhoto({
          scientificName: item.scientificName,
          commonName: item.commonName,
          gbifKey: item.gbifKey,
        });
        icons[item.id] = photo?.url ?? null;
      } catch {
        icons[item.id] = null;
      }
    }
  });
  await Promise.all(workers);

  return NextResponse.json({ icons });
}
