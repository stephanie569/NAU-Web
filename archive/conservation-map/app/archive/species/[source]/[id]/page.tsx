import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARCHIVE_SOURCES } from "@/lib/archive/sources";
import { getArchiveSpecies } from "@/lib/archive/search";
import type { ArchiveSource } from "@/lib/archive/types";

export const dynamic = "force-dynamic";

const SOURCES = new Set<ArchiveSource>(["col", "gbif", "worms"]);

type Props = { params: Promise<{ source: string; id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { source, id } = await params;
  if (!SOURCES.has(source as ArchiveSource)) return { title: "Species | nau" };
  const species = await getArchiveSpecies(source as ArchiveSource, id);
  return {
    title: species
      ? `${species.scientificName} | Species archive`
      : "Species | nau",
  };
}

export default async function ArchiveSpeciesPage({ params }: Props) {
  const { source, id } = await params;
  if (!SOURCES.has(source as ArchiveSource)) notFound();
  const species = await getArchiveSpecies(source as ArchiveSource, id);
  if (!species) notFound();

  const sourceMeta = ARCHIVE_SOURCES[species.source];
  const rows: [string, string | undefined][] = [
    ["Scientific name", species.scientificName],
    ["Authorship", species.authorship],
    ["Rank", species.rank],
    ["Status", species.status],
    ["Kingdom", species.kingdom],
    ["Phylum", species.phylum],
    ["Class", species.className],
    ["Order", species.order],
    ["Family", species.family],
    ["Genus", species.genus],
  ];

  return (
    <div className="min-h-svh bg-[#070b10] text-white">
      <div className="mx-auto max-w-[760px] px-5 py-10 md:px-8 md:py-14">
        <Link
          href="/archive"
          className="text-[12px] text-white/45 transition-colors hover:text-white/80"
        >
          ← Species archive
        </Link>
        <p className="mt-6 text-[11px] font-semibold tracking-[0.14em] text-[#9fd0ff]/80 uppercase">
          {sourceMeta.label}
        </p>
        <h1 className="mt-2 text-[clamp(1.6rem,3.5vw,2.6rem)] font-medium tracking-[-0.04em] italic">
          {species.scientificName}
        </h1>
        {species.authorship ? (
          <p className="mt-2 text-[14px] text-white/50">{species.authorship}</p>
        ) : null}

        <dl className="mt-8 space-y-3 border-t border-white/10 pt-6">
          {rows
            .filter(([, v]) => Boolean(v))
            .map(([label, value]) => (
              <div key={label} className="grid grid-cols-[8rem_1fr] gap-3 text-[13px]">
                <dt className="text-white/40">{label}</dt>
                <dd className="text-white/85">{value}</dd>
              </div>
            ))}
        </dl>

        <a
          href={species.url}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex rounded-sm border border-white/15 px-3 py-2 text-[13px] text-[#9fd0ff] transition-colors hover:border-[#9fd0ff]/40"
        >
          Open on {sourceMeta.label} ↗
        </a>
      </div>
    </div>
  );
}
