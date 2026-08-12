"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { NauButton } from "@/components/NauButton";
import { GuideGridCard } from "@/components/GuideGridCard";
import { pricingSectionCopy, storeSectionCopy } from "@/lib/sections";

function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.22] mix-blend-soft-light"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

function FeaturePlusIcon({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const onLight = tone === "light";
  return (
    <span
      className={`relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
        onLight ? "bg-[#0a0a0a]/08" : "bg-white/10"
      }`}
    >
      <span
        className={`absolute h-px w-2 ${onLight ? "bg-[#0a0a0a]" : "bg-white"}`}
      />
      <span
        className={`absolute h-2 w-px ${onLight ? "bg-[#0a0a0a]" : "bg-white"}`}
      />
    </span>
  );
}

function Chevron({
  open,
  tone = "dark",
}: {
  open: boolean;
  tone?: "dark" | "light";
}) {
  return (
    <span
      aria-hidden
      className={`inline-block transition-transform duration-200 ${
        tone === "light" ? "text-[#0a0a0a]/40" : "text-white/50"
      } ${open ? "rotate-180" : "rotate-0"}`}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M3.5 5.25L7 8.75L10.5 5.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function CollapsiblePanel({
  title,
  summary,
  open,
  onToggle,
  children,
  tone = "dark",
}: {
  title: string;
  summary: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  const onLight = tone === "light";

  return (
    <div
      className={`rounded-[16px] border ${
        onLight
          ? "border-[#0a0a0a]/10 bg-[#f5f5f5]"
          : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className={`flex w-full items-center justify-between gap-4 px-3.5 py-3 text-left transition-colors md:px-4 ${
          onLight ? "hover:bg-[#0a0a0a]/[0.03]" : "hover:bg-white/[0.03]"
        }`}
      >
        <div className="min-w-0">
          <p
            className={`text-[14px] font-semibold tracking-[-0.04em] ${
              onLight ? "text-[#0a0a0a]" : "text-white"
            }`}
          >
            {title}
          </p>
          <p
            className={`mt-0.5 text-[12px] font-medium tracking-[-0.03em] ${
              onLight ? "text-[#0a0a0a]/50" : "text-white/50"
            }`}
          >
            {summary}
          </p>
        </div>
        <Chevron open={open} tone={tone} />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`border-t px-5 py-5 md:px-6 ${
              onLight ? "border-[#0a0a0a]/10" : "border-white/10"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function PriceLine({
  price,
  originalPrice,
  discountLabel,
  tone = "dark",
}: {
  price: string;
  originalPrice?: string;
  discountLabel?: string;
  tone?: "dark" | "light";
}) {
  const onLight = tone === "light";

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
        <span
          className={`text-[clamp(1.5rem,2.6vw,2.1rem)] leading-[1.05] font-semibold tracking-[-0.05em] tabular-nums ${
            onLight ? "text-[#0a0a0a]" : "text-white"
          }`}
        >
          {price}
        </span>
        {discountLabel ? (
          <span
            className={`inline-flex shrink-0 items-center rounded-full border px-2.5 py-1 text-[12px] font-semibold tracking-[-0.02em] ${
              onLight
                ? "border-[#0a0a0a]/12 bg-[#0a0a0a]/[0.04] text-[#0a0a0a]/70"
                : "border-white/12 bg-white/[0.05] text-white/65"
            }`}
          >
            {discountLabel}
          </span>
        ) : null}
      </div>
      {originalPrice ? (
        <p
          className={`text-[13px] font-medium tracking-[-0.03em] tabular-nums ${
            onLight ? "text-[#0a0a0a]/40" : "text-white/35"
          }`}
        >
          Regularly {originalPrice}
        </p>
      ) : null}
    </div>
  );
}

export function PricingSection({
  title: titleOverride,
  showStoreTeaser = true,
  sectionId = "work-with-me",
}: {
  title?: string;
  showStoreTeaser?: boolean;
  sectionId?: string;
} = {}) {
  const {
    title: defaultTitle,
    deliveryLabel,
    outcomeLabel,
    collaborationLabel,
    includesLabel,
    vatNote,
    cta,
    ctaHref,
    offer,
    storeTeaser,
  } = pricingSectionCopy;

  const title = titleOverride ?? defaultTitle;
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <>
      {showStoreTeaser ? (
        <section
          id="digital-guides"
          data-header-theme="dark"
          className="relative scroll-mt-[61px] overflow-x-hidden bg-[#0a0a0a] px-6 pt-16 pb-16 md:px-9 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
        >
          <NoiseOverlay />

          <div className="relative mx-auto w-full max-w-[1520px]">
            <div className="mb-6 text-center md:mb-8">
              <h2 className="text-[clamp(2.5rem,6vw,4.25rem)] leading-[0.92] font-semibold tracking-[-0.06em] text-white">
                {storeTeaser.name}.
              </h2>
              <p className="mx-auto mt-3 max-w-[32rem] text-[14px] leading-relaxed font-medium tracking-[-0.03em] text-white/55 md:text-[15px]">
                {storeTeaser.forWhom}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
              {storeSectionCopy.items.slice(0, 3).map((guide, index) => (
                <GuideGridCard
                  key={guide.id}
                  guide={guide}
                  index={index}
                  ctaLabel={storeSectionCopy.cta}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section
        id={sectionId}
        data-header-theme="dark"
        className="relative box-border flex min-h-[calc(100svh-61px)] scroll-mt-[61px] flex-col justify-center overflow-x-hidden bg-[#0a0a0a] px-6 py-10 md:px-9 md:py-14"
      >
        <NoiseOverlay />

        <div className="relative mx-auto flex w-full max-w-[1520px] flex-col">
          <div className="mb-4 text-center md:mb-5">
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.92] font-semibold tracking-[-0.06em] text-white">
              {title}
            </h2>
            <p className="mx-auto mt-2 max-w-[34rem] text-[13px] leading-relaxed font-medium tracking-[-0.03em] text-white/55 md:text-[14px]">
              {offer.forWhom}
            </p>
          </div>

          <article className="flex min-h-0 flex-col overflow-hidden rounded-[18px] border border-white/12 bg-white/[0.05]">
            <div className="grid min-h-0 items-stretch lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
              <div className="flex flex-col justify-between gap-5 p-4 sm:p-5 lg:p-6">
                <div className="min-w-0">
                  <p className="text-[12px] font-semibold tracking-[-0.04em] text-white/55">
                    {offer.name}
                  </p>
                  <div className="mt-1.5">
                    <PriceLine
                      price={offer.price}
                      originalPrice={offer.originalPrice}
                      discountLabel={offer.discountLabel}
                    />
                  </div>
                  <p className="mt-1 text-[11px] font-medium tracking-[-0.03em] text-white/40">
                    {vatNote}
                  </p>
                  <div className="mt-3 border-t border-white/10 pt-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/40">
                      {outcomeLabel}
                    </p>
                    <p className="mt-1.5 max-w-[34rem] text-[13px] leading-snug font-medium tracking-[-0.04em] text-white md:text-[14px]">
                      {offer.outcome}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2.5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3 text-[13px] font-medium tracking-[-0.04em]">
                    <span className="text-white/55">{deliveryLabel}</span>
                    <span className="text-white">{offer.delivery}</span>
                  </div>
                  <NauButton href={ctaHref} variant="light">
                    {cta}
                  </NauButton>
                </div>
              </div>

              <div className="relative min-h-[160px] border-t border-white/10 sm:min-h-[200px] lg:min-h-full lg:border-t-0 lg:border-l lg:border-white/10">
                <Image
                  src={offer.image}
                  alt={offer.imageAlt}
                  fill
                  quality={90}
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/45 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-[#0a0a0a]/25"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 border-t border-white/10 p-3 sm:grid-cols-3 sm:gap-3 sm:p-4">
              {offer.highlights.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 rounded-[12px] bg-white/[0.08] px-3.5 py-3 ring-1 ring-inset ring-white/10 sm:px-4 sm:py-3.5"
                >
                  <span className="mt-0.5 text-[11px] font-semibold tracking-[-0.04em] text-white/35 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[13px] leading-snug font-medium tracking-[-0.04em] text-white md:text-[14px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 p-3 sm:p-4">
              <CollapsiblePanel
                title="Full breakdown"
                summary={
                  detailsOpen ? "Hide details" : "See everything included"
                }
                open={detailsOpen}
                onToggle={() => setDetailsOpen((open) => !open)}
              >
                <div className="grid gap-8 lg:grid-cols-2">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/40">
                      {collaborationLabel}
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {offer.collaboration.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <FeaturePlusIcon />
                          <span className="text-[13px] leading-snug font-medium tracking-[-0.04em] text-white/85 md:text-[14px]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/40">
                      {includesLabel}
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {offer.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <FeaturePlusIcon />
                          <span className="text-[13px] leading-snug font-medium tracking-[-0.04em] text-white/85 md:text-[14px]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CollapsiblePanel>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
