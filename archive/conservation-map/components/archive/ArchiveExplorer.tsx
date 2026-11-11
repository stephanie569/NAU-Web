"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, useTransition } from "react";
import { ARCHIVE_SOURCES } from "@/lib/archive/sources";
import type {
  ArchiveMeta,
  ArchivePhylum,
  ArchiveSearchHit,
  ArchiveSpecies,
  DiscoveryRecord,
} from "@/lib/archive/types";

type Props = {
  initialMeta: ArchiveMeta;
  initialPhyla: ArchivePhylum[];
  initialDiscoveries: DiscoveryRecord[];
};

function formatCount(n?: number) {
  if (n == null) return "—";
  return n.toLocaleString("en-US");
}

export function ArchiveExplorer({
  initialMeta,
  initialPhyla,
  initialDiscoveries,
}: Props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ArchiveSearchHit[]>([]);
  const [browse, setBrowse] = useState<ArchiveSpecies[]>([]);
  const [browseOffset, setBrowseOffset] = useState(0);
  const [localCount, setLocalCount] = useState(initialMeta.localCount ?? 0);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const [syncMsg, setSyncMsg] = useState<string | null>(null);
  const [meta, setMeta] = useState(initialMeta);
  const [discoveries, setDiscoveries] = useState(initialDiscoveries);
  const [phyla, setPhyla] = useState(initialPhyla);

  const loadBrowse = (offset = 0) => {
    startTransition(async () => {
      try {
        const res = await fetch(
          `/api/archive/animals?offset=${offset}&limit=40`,
        );
        const data = await res.json();
        setBrowse(data.results || []);
        setBrowseOffset(offset);
        if (typeof data.localCount === "number") setLocalCount(data.localCount);
        if (data.ingest) {
          setMeta((m) => ({ ...m, ingest: data.ingest, localCount: data.localCount }));
        }
      } catch {
        /* ignore */
      }
    });
  };

  useEffect(() => {
    loadBrowse(0);
    const id = window.setInterval(() => {
      fetch("/api/archive/stats")
        .then((r) => r.json())
        .then((data) => {
          if (data.meta) {
            setMeta(data.meta);
            if (typeof data.meta.localCount === "number") {
              setLocalCount(data.meta.localCount);
            }
          }
        })
        .catch(() => undefined);
    }, 15000);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- mount poll
  }, []);

  const phylumTotal = useMemo(
    () => phyla.reduce((sum, p) => sum + p.count, 0),
    [phyla],
  );

  const runSearch = () => {
    const q = query.trim();
    if (q.length < 2) {
      setResults([]);
      setError("Enter at least 2 characters");
      return;
    }
    startTransition(async () => {
      setError(null);
      try {
        const res = await fetch(`/api/archive/search?q=${encodeURIComponent(q)}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Search failed");
        setResults(data.results || []);
      } catch (err) {
        setResults([]);
        setError(err instanceof Error ? err.message : "Search failed");
      }
    });
  };

  const runSync = () => {
    startTransition(async () => {
      setSyncMsg("Syncing catalogues…");
      try {
        const res = await fetch("/api/archive/sync", { method: "POST" });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || data.error || "Sync failed");
        setSyncMsg(data.message || "Sync complete");
        const stats = await fetch("/api/archive/stats").then((r) => r.json());
        setMeta(stats.meta);
        setDiscoveries(stats.discoveries || []);
        setPhyla(stats.phyla || []);
      } catch (err) {
        setSyncMsg(err instanceof Error ? err.message : "Sync failed");
      }
    });
  };

  return (
    <div className="mt-10 space-y-10">
      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-sm border border-[#9fd0ff]/25 bg-[#9fd0ff]/5 px-4 py-4 sm:col-span-2 lg:col-span-1">
          <p className="text-[11px] font-semibold tracking-[0.12em] text-[#9fd0ff]/80 uppercase">
            Local archive
          </p>
          <p className="mt-2 text-[1.45rem] font-medium tracking-[-0.03em] text-white">
            {formatCount(localCount)}
          </p>
          <p className="mt-1 text-[12px] text-white/45">
            {meta.ingest?.done
              ? "Complete COL ∪ GBIF ∪ WoRMS"
              : meta.ingest?.phase
                ? `Ingesting (${meta.ingest.phase})…`
                : "Run npm run archive:ingest"}
          </p>
        </div>
        {(
          [
            ["col", meta.sources.col.animaliaNameUsages, "Animalia name usages in COL"],
            [
              "gbif",
              meta.sources.gbif.animaliaAcceptedSpecies,
              "Accepted Animalia species in GBIF",
            ],
            [
              "worms",
              meta.sources.worms.acceptedMarineSpecies ?? meta.discoveryCount,
              meta.sources.worms.acceptedMarineSpecies
                ? "Accepted marine species (WoRMS)"
                : "Tracked discoveries (sync log)",
            ],
          ] as const
        ).map(([key, count, hint]) => (
          <a
            key={key}
            href={ARCHIVE_SOURCES[key].url}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm border border-white/10 bg-white/[0.03] px-4 py-4 transition-colors hover:border-white/25"
          >
            <p className="text-[11px] font-semibold tracking-[0.12em] text-white/40 uppercase">
              {ARCHIVE_SOURCES[key].label}
            </p>
            <p className="mt-2 text-[1.45rem] font-medium tracking-[-0.03em] text-white">
              {formatCount(count)}
            </p>
            <p className="mt-1 text-[12px] text-white/45">{hint}</p>
          </a>
        ))}
      </section>

      <section className="rounded-sm border border-white/10 bg-white/[0.03] p-4 md:p-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-[15px] font-medium tracking-[-0.02em]">
              Search animals
            </h2>
            <p className="mt-1 text-[12px] text-white/45">
              Local archive first, then live COL / GBIF / WoRMS
            </p>
          </div>
          <button
            type="button"
            onClick={runSync}
            disabled={pending}
            className="rounded-sm border border-white/15 px-3 py-1.5 text-[12px] text-white/80 hover:border-white/35 disabled:opacity-50"
          >
            Run discovery sync
          </button>
        </div>

        <form
          className="mt-4 flex flex-col gap-2 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            runSearch();
          }}
        >
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. Panthera leo, Delphinus delphis"
            className="w-full rounded-sm border border-white/10 bg-black/40 px-3 py-2.5 text-[14px] text-white outline-none placeholder:text-white/30 focus:border-[#9fd0ff]/40"
          />
          <button
            type="submit"
            disabled={pending}
            className="rounded-sm bg-[#9fd0ff] px-4 py-2.5 text-[13px] font-medium text-[#071018] disabled:opacity-50"
          >
            Search
          </button>
        </form>

        {syncMsg ? (
          <p className="mt-3 text-[12px] text-amber-200/80">{syncMsg}</p>
        ) : null}
        {meta.lastSyncAt ? (
          <p className="mt-2 text-[11px] text-white/35">
            Last sync {new Date(meta.lastSyncAt).toLocaleString()} ·{" "}
            {meta.lastSyncMessage}
          </p>
        ) : (
          <p className="mt-2 text-[11px] text-white/35">
            No sync yet — run discovery sync or wait for the daily job.
          </p>
        )}
        {error ? (
          <p className="mt-3 text-[12px] text-rose-300/90">{error}</p>
        ) : null}

        <ul className="mt-4 divide-y divide-white/10 border-t border-white/10">
          {results.map((hit) => (
            <li key={`${hit.source}:${hit.id}`}>
              <Link
                href={`/archive/species/${hit.source}/${encodeURIComponent(hit.id)}`}
                className="flex flex-wrap items-baseline justify-between gap-2 py-3 transition-opacity hover:opacity-80"
              >
                <span>
                  <span className="text-[14px] italic text-white">
                    {hit.scientificName}
                  </span>
                  {hit.authorship ? (
                    <span className="ml-2 text-[12px] text-white/40">
                      {hit.authorship}
                    </span>
                  ) : null}
                </span>
                <span className="text-[11px] tracking-[0.08em] text-[#9fd0ff]/70 uppercase">
                  {ARCHIVE_SOURCES[hit.source].label}
                </span>
              </Link>
            </li>
          ))}
          {!pending && results.length === 0 && query.trim().length >= 2 ? (
            <li className="py-4 text-[13px] text-white/40">No matches</li>
          ) : null}
        </ul>
      </section>

      <section className="rounded-sm border border-white/10 bg-white/[0.03] p-4 md:p-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-[15px] font-medium tracking-[-0.02em]">
              Browse local animals
            </h2>
            <p className="mt-1 text-[12px] text-white/45">
              {formatCount(localCount)} stored · page {Math.floor(browseOffset / 40) + 1}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              disabled={pending || browseOffset <= 0}
              onClick={() => loadBrowse(Math.max(0, browseOffset - 40))}
              className="rounded-sm border border-white/15 px-3 py-1.5 text-[12px] text-white/80 hover:border-white/35 disabled:opacity-40"
            >
              Previous
            </button>
            <button
              type="button"
              disabled={pending || browse.length < 40}
              onClick={() => loadBrowse(browseOffset + 40)}
              className="rounded-sm border border-white/15 px-3 py-1.5 text-[12px] text-white/80 hover:border-white/35 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
        <ul className="mt-4 divide-y divide-white/10 border-t border-white/10">
          {browse.length === 0 ? (
            <li className="py-4 text-[13px] text-white/40">
              Archive is still building — animals appear here as ingest runs.
            </li>
          ) : (
            browse.map((hit) => (
              <li key={`browse-${hit.source}:${hit.id}`}>
                <Link
                  href={`/archive/species/${hit.source}/${encodeURIComponent(hit.id)}`}
                  className="flex flex-wrap items-baseline justify-between gap-2 py-3 transition-opacity hover:opacity-80"
                >
                  <span className="text-[14px] italic text-white">
                    {hit.scientificName}
                  </span>
                  <span className="text-[11px] text-white/35">
                    {[hit.phylum, hit.family].filter(Boolean).join(" · ")}
                  </span>
                </Link>
              </li>
            ))
          )}
        </ul>
      </section>

      <section>
        <h2 className="text-[15px] font-medium tracking-[-0.02em]">
          Animalia phyla (Catalogue of Life)
        </h2>
        <p className="mt-1 text-[12px] text-white/45">
          {phyla.length
            ? `${phyla.length} phyla · ~${formatCount(phylumTotal)} name usages in the current COL release`
            : "Run sync to load the COL Animalia tree index"}
        </p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {phyla.map((p) => (
            <div
              key={p.id}
              className="rounded-sm border border-white/10 px-3 py-3"
            >
              <p className="text-[13px] font-medium text-white">{p.name}</p>
              <p className="mt-1 text-[11px] text-white/40">
                {formatCount(p.count)} names
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-[15px] font-medium tracking-[-0.02em]">
          Recent discoveries
        </h2>
        <p className="mt-1 text-[12px] text-white/45">
          Local archive of newly detected listings from the sync loop
        </p>
        <ul className="mt-4 divide-y divide-white/10 border-t border-white/10">
          {discoveries.length === 0 ? (
            <li className="py-4 text-[13px] text-white/40">
              No discoveries stored yet
            </li>
          ) : (
            discoveries.map((d) => (
              <li key={`${d.source}:${d.id}:${d.discoveredAt}`} className="py-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  {d.source === "worms" || d.source === "col" || d.source === "gbif" ? (
                    <Link
                      href={
                        d.id.startsWith("col-release") || d.id.startsWith("gbif-count")
                          ? d.url
                          : `/archive/species/${d.source}/${encodeURIComponent(d.id)}`
                      }
                      className="text-[14px] italic text-white hover:opacity-80"
                    >
                      {d.scientificName}
                    </Link>
                  ) : (
                    <span className="text-[14px] italic">{d.scientificName}</span>
                  )}
                  <span className="text-[11px] text-white/35">
                    {ARCHIVE_SOURCES[d.source].label} · {d.detection}
                  </span>
                </div>
                {d.note ? (
                  <p className="mt-1 text-[11px] text-white/40">{d.note}</p>
                ) : null}
              </li>
            ))
          )}
        </ul>
      </section>
    </div>
  );
}
