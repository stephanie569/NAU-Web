"use client";

import { useMemo, useState } from "react";
import { GuideGridCard } from "@/components/GuideGridCard";
import { PageSearchBar } from "@/components/PageSearchBar";
import { storeSectionCopy } from "@/lib/sections";

export function PackagesPageContent({
  checkoutState,
  checkoutGuideTitle,
}: {
  checkoutState?: string;
  checkoutGuideTitle?: string;
}) {
  const {
    title,
    description,
    searchPlaceholder,
    categoryLabel,
    categories,
    emptyState,
    intro,
    stickers,
    cta,
    checkoutSuccessTitle,
    checkoutSuccessNote,
    checkoutCancelTitle,
    checkoutCancelNote,
    items,
  } = storeSectionCopy;

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return items.filter((guide) => {
      const matchesQuery =
        query.trim().length === 0 ||
        guide.title.toLowerCase().includes(query.toLowerCase()) ||
        guide.blurb.toLowerCase().includes(query.toLowerCase()) ||
        guide.category.toLowerCase().includes(query.toLowerCase());
      const matchesCategory =
        category === "All" || guide.category === category;

      return matchesQuery && matchesCategory;
    });
  }, [query, category, items]);

  return (
    <section className="bg-[#f5f5f5] px-1 pb-1 pt-1">
      <div className="overflow-hidden rounded-[25px] bg-white px-6 py-16 md:px-9 md:py-24">
        <div className="mx-auto w-full max-w-[1520px]">
          <div className="mb-[90px] grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-4">
            <div className="hidden lg:block" />

            <div className="text-center">
              <h1 className="text-[clamp(4rem,12vw,9rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-[#0a0a0a]">
                {title}
              </h1>
            </div>

            <p className="max-w-[220px] justify-self-center text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-[#0a0a0a]/60 lg:justify-self-end lg:text-left">
              {description}
            </p>
          </div>

          {checkoutState === "success" ? (
            <div className="mx-auto mb-8 max-w-[1080px] rounded-[16px] border border-[#0a0a0a]/10 bg-[#f5f5f5] px-5 py-4">
              <p className="text-[14px] font-semibold tracking-[-0.04em] text-[#0a0a0a]">
                {checkoutSuccessTitle}
                {checkoutGuideTitle ? ` · ${checkoutGuideTitle}` : ""}
              </p>
              <p className="mt-1 text-[13px] font-medium tracking-[-0.03em] text-[#0a0a0a]/55">
                {checkoutSuccessNote}
              </p>
            </div>
          ) : null}

          {checkoutState === "cancel" ? (
            <div className="mx-auto mb-8 max-w-[1080px] rounded-[16px] border border-[#0a0a0a]/10 bg-[#f5f5f5] px-5 py-4">
              <p className="text-[14px] font-semibold tracking-[-0.04em] text-[#0a0a0a]">
                {checkoutCancelTitle}
              </p>
              <p className="mt-1 text-[13px] font-medium tracking-[-0.03em] text-[#0a0a0a]/55">
                {checkoutCancelNote}
              </p>
            </div>
          ) : null}

          <div className="mb-8 max-w-[1080px] lg:mx-auto">
            <p className="text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-[#0a0a0a]/70">
              {intro}
            </p>
            <p className="mt-3 text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-[#0a0a0a]/55">
              {stickers}
            </p>
          </div>

          <div className="mx-auto mb-6 max-w-[1080px]">
            <PageSearchBar
              query={query}
              onQueryChange={setQuery}
              category={category}
              onCategoryChange={setCategory}
              searchPlaceholder={searchPlaceholder}
              categoryLabel={categoryLabel}
              categories={categories}
            />
          </div>

          <div className="mx-auto grid max-w-[1080px] gap-3 sm:grid-cols-2 md:gap-4">
            {filtered.map((guide, index) => (
              <GuideGridCard
                key={guide.id}
                guide={guide}
                index={index}
                ctaLabel={cta}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-16 text-center text-[15px] font-medium tracking-[-0.04em] text-[#0a0a0a]/60">
              {emptyState}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
