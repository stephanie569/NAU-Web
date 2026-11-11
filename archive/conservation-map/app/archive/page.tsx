import type { Metadata } from "next";
import { ArchiveExplorer } from "@/components/archive/ArchiveExplorer";
import { ARCHIVE_SOURCES } from "@/lib/archive/sources";
import { readArchiveStore } from "@/lib/archive/store";

export const metadata: Metadata = {
  title: "Species archive | nau",
  description:
    "Animal species archive federating Catalogue of Life, GBIF, and WoRMS — with a daily check for newly listed species.",
};

export const dynamic = "force-dynamic";

export default function ArchivePage() {
  const store = readArchiveStore();

  return (
    <div className="min-h-svh bg-[#070b10] text-white">
      <div className="mx-auto max-w-[1100px] px-5 py-10 md:px-8 md:py-14">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-[#9fd0ff]/80 uppercase">
          Data archive
        </p>
        <h1 className="mt-2 max-w-3xl text-[clamp(1.8rem,4vw,3rem)] font-medium tracking-[-0.04em] text-white">
          Every animal species listed by the world’s core catalogues
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/60">
          This archive searches live records from{" "}
          <a
            className="text-[#9fd0ff] underline-offset-2 hover:underline"
            href={ARCHIVE_SOURCES.col.url}
            target="_blank"
            rel="noreferrer"
          >
            Catalogue of Life
          </a>
          ,{" "}
          <a
            className="text-[#9fd0ff] underline-offset-2 hover:underline"
            href={ARCHIVE_SOURCES.gbif.url}
            target="_blank"
            rel="noreferrer"
          >
            GBIF
          </a>
          , and{" "}
          <a
            className="text-[#9fd0ff] underline-offset-2 hover:underline"
            href={ARCHIVE_SOURCES.worms.url}
            target="_blank"
            rel="noreferrer"
          >
            WoRMS
          </a>
          . The site also builds a complete local Animalia archive (COL ∪ GBIF ∪
          WoRMS) so every listed animal is stored here, and a daily loop catches
          newly discovered species.
        </p>

        <ArchiveExplorer
          initialMeta={store.meta}
          initialPhyla={store.phyla}
          initialDiscoveries={store.discoveries.slice(0, 60)}
        />
      </div>
    </div>
  );
}
