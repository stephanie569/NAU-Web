"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { BlogPost } from "@/lib/blog-types";

type SortOption = "newest" | "oldest" | "a-z";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "a-z", label: "A-Z" },
];

const TOPIC_FILTERS = [
  "Content",
  "Go-to-Market",
  "Research & Positioning",
  "All",
] as const;

function parsePostDate(date: string) {
  const parsed = Date.parse(date);
  return Number.isNaN(parsed) ? 0 : parsed;
}

function DotsMenu({ variant = "muted" }: { variant?: "muted" | "mac" }) {
  if (variant === "mac") {
    return (
      <div className="flex items-center gap-1.5 px-1">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 px-1">
      <span className="h-1 w-1 rounded-full bg-[#0a0a0a]" />
      <span className="h-1 w-1 rounded-full bg-[#0a0a0a]/35" />
      <span className="h-1 w-1 rounded-full bg-[#0a0a0a]/35" />
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4 text-[#0a0a0a]/35"
      aria-hidden
    >
      <circle
        cx="9"
        cy="9"
        r="5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M13.5 13.5L17 17"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function JournalListing({ posts }: { posts: BlogPost[] }) {
  const categories = TOPIC_FILTERS;

  const [category, setCategory] = useState<string>("Content");
  const [sort, setSort] = useState<SortOption>("newest");
  const [query, setQuery] = useState("");

  const latestSlugByCategory = useMemo(() => {
    const latest = new Map<string, BlogPost>();

    for (const post of posts) {
      const current = latest.get(post.category);
      if (!current || parsePostDate(post.date) > parsePostDate(current.date)) {
        latest.set(post.category, post);
      }
    }

    return new Map(
      [...latest.entries()].map(([categoryName, post]) => [
        categoryName,
        post.slug,
      ]),
    );
  }, [posts]);

  const banneredSlugs = useMemo(
    () => new Set(latestSlugByCategory.values()),
    [latestSlugByCategory],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    const next = posts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesQuery =
        q.length === 0 ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });

    next.sort((a, b) => {
      const aBannered = banneredSlugs.has(a.slug);
      const bBannered = banneredSlugs.has(b.slug);
      if (aBannered !== bBannered) return aBannered ? -1 : 1;

      if (sort === "a-z") return a.title.localeCompare(b.title);
      const diff = parsePostDate(a.date) - parsePostDate(b.date);
      return sort === "newest" ? -diff : diff;
    });

    return next;
  }, [posts, category, sort, query, banneredSlugs]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-5 border-b border-[#0a0a0a]/10 pb-6 md:mb-10 md:gap-6 md:pb-8">
        <label className="relative block w-full md:max-w-xl">
          <span className="sr-only">Search essays</span>
          <span className="pointer-events-none absolute top-1/2 left-3.5 z-[1] -translate-y-1/2 md:left-4">
            <SearchIcon />
          </span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search titles and topics…"
            enterKeyHint="search"
            className="w-full appearance-none rounded-[12px] border border-[#0a0a0a]/12 bg-white py-3 pr-4 pl-11 text-[16px] font-medium tracking-[-0.04em] text-[#0a0a0a] outline-none placeholder:text-[#0a0a0a]/40 focus:border-[#0a0a0a]/30 md:py-3 md:pl-11 md:text-[15px] [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none"
          />
        </label>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0">
            <p className="mb-2.5 text-xs uppercase tracking-widest text-[#0a0a0a]/45 md:mb-3">
              Filter by topic
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => {
                const active = category === item;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`rounded-full border px-3 py-1.5 text-[13px] font-medium tracking-[-0.03em] transition-colors ${
                      active
                        ? "border-[#0a0a0a] bg-[#0a0a0a] text-white"
                        : "border-[#0a0a0a]/12 bg-white text-[#0a0a0a] hover:border-[#0a0a0a]/40"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="min-w-0 lg:shrink-0">
            <p className="mb-2.5 text-xs uppercase tracking-widest text-[#0a0a0a]/45 md:mb-3">
              Sort
            </p>
            <div className="flex flex-wrap gap-2">
              {SORT_OPTIONS.map((option) => {
                const active = sort === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setSort(option.value)}
                    className={`rounded-full border px-3 py-1.5 text-[13px] font-medium tracking-[-0.03em] transition-colors ${
                      active
                        ? "border-[#0a0a0a] bg-[#0a0a0a] text-white"
                        : "border-[#0a0a0a]/12 bg-white text-[#0a0a0a] hover:border-[#0a0a0a]/40"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <p className="text-[13px] font-medium tracking-[-0.03em] text-[#0a0a0a]/45">
          Showing {filtered.length} of {posts.length}{" "}
          {filtered.length === 1 ? "essay" : "essays"}
          {category !== "All" ? ` in ${category}` : ""}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {filtered.map((post) => {
          const isLatest = banneredSlugs.has(post.slug);

          return (
          <Link
            key={post.slug}
            href={`/essays/${post.slug}`}
            className="group block h-full"
          >
            <article className="flex h-full flex-col overflow-hidden rounded-[14px] bg-white">
              <div className="flex items-center justify-between px-4 py-3.5 sm:px-5 sm:py-4">
                <div className="flex min-w-0 items-baseline gap-1">
                  <span className="truncate text-[14px] font-medium tracking-[-0.04em] text-[#0a0a0a] sm:text-[15px]">
                    {post.title}
                  </span>
                  <span className="hidden shrink-0 text-[11px] font-medium tabular-nums text-[#090909]/60 sm:inline sm:text-xs">
                    /{post.category.split(" ")[0]}
                  </span>
                </div>
                <DotsMenu variant="mac" />
              </div>

              <div className="relative mx-1 aspect-[5/4] overflow-hidden rounded-[12px] sm:aspect-[4/3]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#0a0a0a]/10" />
                {isLatest && (
                  <div className="absolute inset-x-0 top-0 z-[1] flex items-center justify-center bg-[#0a0a0a] px-3 py-2">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                      Latest
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col gap-3 px-4 py-4 sm:px-5 sm:py-5">
                <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#0a0a0a]/40">
                  {post.category} · {post.date}
                </p>
                <p className="line-clamp-3 text-[14px] leading-relaxed font-medium tracking-[-0.03em] text-[#0a0a0a]/60">
                  {post.excerpt}
                </p>
                <span className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-[#0a0a0a] px-4 py-2.5 text-[13px] font-semibold tracking-[-0.03em] text-white transition-opacity group-hover:opacity-90">
                  Read essay
                </span>
              </div>
            </article>
          </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-[15px] font-medium tracking-[-0.04em] text-[#0a0a0a]/60">
          No essays match that filter. Try another topic, or clear the search.
        </p>
      )}
    </div>
  );
}
