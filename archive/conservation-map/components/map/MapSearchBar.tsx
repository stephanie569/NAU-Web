"use client";

import { useEffect, useId, useRef, useState, useTransition } from "react";
import type { MapSearchHit } from "@/lib/archive/mapSpecies";

type Props = {
  onSelect: (hit: MapSearchHit) => void;
};

export function MapSearchBar({ onSelect }: Props) {
  const listId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState<MapSearchHit[]>([]);
  const [active, setActive] = useState(0);
  const [pending, startTransition] = useTransition();
  const seq = useRef(0);
  const debounce = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (debounce.current) clearTimeout(debounce.current);
    const q = query.trim();
    if (q.length < 2) {
      setResults([]);
      setOpen(false);
      return;
    }
    debounce.current = setTimeout(() => {
      const n = ++seq.current;
      startTransition(async () => {
        try {
          const res = await fetch(
            `/api/archive/map-search?q=${encodeURIComponent(q)}&limit=10`,
          );
          const data = await res.json();
          if (n !== seq.current) return;
          const hits = (data.results || []) as MapSearchHit[];
          setResults(hits);
          setActive(0);
          setOpen(hits.length > 0);
        } catch {
          if (n === seq.current) {
            setResults([]);
            setOpen(false);
          }
        }
      });
    }, 160);
    return () => {
      if (debounce.current) clearTimeout(debounce.current);
    };
  }, [query]);

  const choose = (hit: MapSearchHit) => {
    onSelect(hit);
    setQuery(hit.label);
    setOpen(false);
    inputRef.current?.blur();
  };

  return (
    <div className="relative w-[min(92vw,360px)]">
      <label className="sr-only" htmlFor={listId + "-input"}>
        Search animals or regions
      </label>
      <div className="flex items-center gap-2 rounded-[4px] border border-white/15 bg-black/80 px-3 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
        <span className="text-[13px] text-white/40" aria-hidden>
          ⌕
        </span>
        <input
          id={listId + "-input"}
          ref={inputRef}
          type="search"
          autoComplete="off"
          spellCheck={false}
          placeholder="Search animal or region…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            if (results.length) setOpen(true);
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              return;
            }
            if (!open || !results.length) {
              if (e.key === "Enter" && results[0]) {
                e.preventDefault();
                choose(results[0]);
              }
              return;
            }
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setActive((i) => Math.min(results.length - 1, i + 1));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setActive((i) => Math.max(0, i - 1));
            } else if (e.key === "Enter") {
              e.preventDefault();
              const hit = results[active] || results[0];
              if (hit) choose(hit);
            }
          }}
          className="min-w-0 flex-1 bg-transparent text-[13px] tracking-[-0.02em] text-white outline-none placeholder:text-white/35"
          role="combobox"
          aria-expanded={open}
          aria-controls={listId}
          aria-autocomplete="list"
        />
        {pending ? (
          <span className="text-[10px] text-white/35">…</span>
        ) : query ? (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setResults([]);
              setOpen(false);
              inputRef.current?.focus();
            }}
            className="text-[11px] text-white/45 hover:text-white/80"
          >
            Clear
          </button>
        ) : null}
      </div>

      {open && results.length ? (
        <ul
          id={listId}
          role="listbox"
          className="absolute top-[calc(100%+6px)] right-0 left-0 z-40 max-h-[min(50vh,320px)] overflow-y-auto rounded-[4px] border border-white/12 bg-black/92 py-1 shadow-[0_16px_50px_rgba(0,0,0,0.55)] backdrop-blur-md"
        >
          {results.map((hit, i) => (
            <li key={hit.id} role="option" aria-selected={i === active}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => choose(hit)}
                className={`flex w-full items-start gap-2 px-3 py-2 text-left transition-colors ${
                  i === active ? "bg-white/10" : "hover:bg-white/5"
                }`}
              >
                <span className="mt-0.5 w-5 shrink-0 text-center text-[15px]" aria-hidden>
                  {hit.kind === "animal" ? hit.emoji || "🐾" : "◎"}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[13px] text-white">
                    {hit.label}
                  </span>
                  <span className="block truncate text-[11px] text-white/45">
                    {hit.kind === "region" ? "Region" : "Animal"}
                    {hit.subtitle ? ` · ${hit.subtitle}` : ""}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
