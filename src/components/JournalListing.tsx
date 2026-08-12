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
  "All",
  "Research & Positioning",
  "Go-to-Market",
  "Content",
] as const;

function parsePostDate(date: string) {
  const parsed = Date.parse(date);
  return Number.isNaN(parsed) ? 0 : parsed;
}

export function JournalListing({ posts }: { posts: BlogPost[] }) {
  const categories = TOPIC_FILTERS;

  const [category, setCategory] = useState<string>("All");
  const [sort, setSort] = useState<SortOption>("newest");
  const [query, setQuery] = useState("");

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
      if (sort === "a-z") return a.title.localeCompare(b.title);
      const diff = parsePostDate(a.date) - parsePostDate(b.date);
      return sort === "newest" ? -diff : diff;
    });

    return next;
  }, [posts, category, sort, query]);

  return (
    <div>
      <div className="mb-10 flex flex-col gap-6 border-b border-border pb-8">
        <label className="block w-full max-w-xl">
          <span className="sr-only">Search blog</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search titles and topics…"
            className="w-full border border-border bg-surface px-4 py-3 text-[15px] font-medium tracking-[-0.04em] text-foreground outline-none placeholder:text-muted focus:border-foreground/30"
          />
        </label>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-muted">
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
                    className={`border px-3 py-1.5 text-[13px] font-medium tracking-[-0.03em] transition-colors ${
                      active
                        ? "border-foreground bg-foreground text-white"
                        : "border-border bg-white text-foreground hover:border-foreground/40"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:shrink-0">
            <p className="mb-3 text-xs uppercase tracking-widest text-muted">
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
                    className={`border px-3 py-1.5 text-[13px] font-medium tracking-[-0.03em] transition-colors ${
                      active
                        ? "border-foreground bg-foreground text-white"
                        : "border-border bg-white text-foreground hover:border-foreground/40"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <p className="text-[13px] font-medium tracking-[-0.03em] text-muted">
          Showing {filtered.length} of {posts.length}{" "}
          {filtered.length === 1 ? "essay" : "essays"}
          {category !== "All" ? ` in ${category}` : ""}
        </p>
      </div>

      <div className="grid gap-12">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group grid gap-8 border-b border-border pb-12 md:grid-cols-2"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-surface">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs uppercase tracking-widest text-muted">
                {post.category} · {post.date}
              </p>
              <h2 className="mt-3 text-2xl font-semibold group-hover:underline">
                {post.title}
              </h2>
              <p className="mt-3 text-muted leading-relaxed">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-[15px] font-medium tracking-[-0.04em] text-muted">
          No essays match that filter. Try another topic - or clear the search.
        </p>
      )}
    </div>
  );
}
