"use client";

import { useState } from "react";
import Image from "next/image";
import { NauButton } from "@/components/NauButton";
import { GuideGridCard } from "@/components/GuideGridCard";
import { pricingSectionCopy, storeSectionCopy } from "@/lib/sections";

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

function PriceLine({
  price,
  originalPrice,
  discountLabel,
  savingsLabel,
  tone = "dark",
}: {
  price: string;
  originalPrice?: string;
  discountLabel?: string;
  savingsLabel?: string;
  tone?: "dark" | "light";
}) {
  const onLight = tone === "light";

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span
          className={`text-[clamp(1.85rem,4.5vw,2.55rem)] leading-[1.02] font-semibold tracking-[-0.055em] tabular-nums ${
            onLight ? "text-[#0a0a0a]" : "text-white"
          }`}
        >
          {price}
        </span>
        {discountLabel ? (
          <span
            className={`nau-electric-ring inline-flex shrink-0 items-center rounded-full px-3 py-1.5 text-[12px] font-bold tracking-[-0.02em] uppercase ${
              onLight
                ? "bg-[#0a0a0a] text-white"
                : "bg-white text-[#0a0a0a]"
            }`}
          >
            {discountLabel}
          </span>
        ) : null}
      </div>
      {originalPrice || savingsLabel ? (
        <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[13px] font-medium tracking-[-0.03em]">
          {originalPrice ? (
            <span
              className={`tabular-nums line-through decoration-[1.5px] ${
                onLight ? "text-[#0a0a0a]/35" : "text-white/35"
              }`}
            >
              {originalPrice}
            </span>
          ) : null}
          {savingsLabel ? (
            <span
              className={
                onLight
                  ? "rounded-full bg-[#0a0a0a]/[0.06] px-2 py-0.5 font-semibold text-[#0a0a0a]/75"
                  : "rounded-full bg-cyan-300/15 px-2 py-0.5 font-semibold text-cyan-200"
              }
            >
              {savingsLabel}
            </span>
          ) : null}
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
      <section
        id={sectionId}
        className={`relative box-border flex scroll-mt-[61px] flex-col overflow-x-hidden bg-[#f5f5f5] px-6 pt-14 pb-6 md:px-9 md:pt-16 md:pb-8 lg:pt-20 ${
          detailsOpen
            ? "min-h-0 justify-start"
            : "min-h-[calc(100svh-61px)] justify-center"
        }`}
      >
        <div className="relative mx-auto flex w-full max-w-[1520px] flex-col">
          <div className="mb-3 text-center md:mb-4">
            <h2 className="text-[clamp(2.75rem,7vw,4.75rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-[#0a0a0a]">
              {title}
            </h2>
            <p className="mx-auto mt-1.5 max-w-[34rem] text-[13px] leading-snug font-medium tracking-[-0.03em] text-[#0a0a0a]/55">
              {offer.forWhom}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[24px]">
            <svg aria-hidden width="0" height="0" className="absolute">
              <defs>
                <clipPath
                  id="offer-camera-pocket"
                  clipPathUnits="objectBoundingBox"
                >
                  {/*
                    Missing upper-right corner; start ~2cm past mid-top.
                    Outer corners match site cards (≈24-28px / rounded-[28px]).
                  */}
                  <path d="M0.016,0 H0.58 C0.72,0 0.74,0.10 0.74,0.26 C0.74,0.42 0.78,0.54 0.88,0.58 C0.96,0.60 1,0.62 1,0.72 V0.955 C1,0.982 0.985,1 0.968,1 H0.016 C0.006,1 0,0.982 0,0.955 V0.045 C0,0.018 0.006,0 0.016,0 Z" />
                </clipPath>
              </defs>
            </svg>

            {/*
              Full-length arm behind the black lip so it reads as
              coming out of the card, not floating in the pocket.
            */}
            <div
              className={`pointer-events-none absolute top-[5%] right-[calc(1%+1cm)] z-0 hidden h-[min(28rem,92%)] w-[clamp(11rem,26vw,16rem)] transition-opacity duration-300 md:block ${
                detailsOpen ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="relative h-full w-full">
                <Image
                  src={`${offer.image}?v=10`}
                  alt=""
                  fill
                  quality={100}
                  unoptimized
                  className="object-contain object-[55%_8%] drop-shadow-[0_22px_40px_rgba(0,0,0,0.28)]"
                  sizes="(max-width: 1280px) 26vw, 260px"
                  priority={false}
                />
              </div>
            </div>

            <article
              className={`relative z-[1] w-full rounded-[24px] bg-[#0a0a0a] px-5 py-6 text-white shadow-[0_24px_70px_rgba(10,10,10,0.18)] transition-[padding] duration-300 sm:px-6 sm:py-6 md:rounded-[24px] md:px-8 md:py-7 lg:px-10 lg:py-8 ${
                detailsOpen
                  ? "md:pr-8 lg:pr-10"
                  : "md:pr-[min(42%,380px)] md:[-webkit-clip-path:url(#offer-camera-pocket)] md:[clip-path:url(#offer-camera-pocket)]"
              }`}
            >
              <div className="flex w-full min-w-0 flex-col gap-6 md:gap-7">
                {/* Primary offer: full width on mobile; capped on desktop for camera pocket */}
                <div className="flex w-full min-w-0 flex-col gap-5 md:max-w-[44rem] md:gap-6">
                  <div>
                    <p className="text-[12px] font-semibold tracking-[-0.04em] text-white/50">
                      {offer.name}
                    </p>
                    <div className="mt-1.5">
                      <PriceLine
                        price={offer.price}
                        originalPrice={offer.originalPrice}
                        discountLabel={offer.discountLabel}
                        savingsLabel={offer.savingsLabel}
                      />
                    </div>
                    <p className="mt-1.5 text-[11px] font-medium tracking-[-0.03em] text-white/35">
                      {vatNote}
                    </p>
                  </div>

                  <div className="w-full min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/35">
                      {outcomeLabel}
                    </p>
                    <p className="mt-2.5 w-full text-[15px] leading-[1.5] font-medium tracking-[-0.025em] text-white/90 md:hidden">
                      {offer.outcomeMobile}
                    </p>
                    <p className="mt-2.5 hidden w-full text-[15px] leading-snug font-medium tracking-[-0.04em] text-white/90 md:block">
                      {offer.outcome}
                    </p>
                  </div>

                  <div className="flex w-full flex-col gap-4 py-3 md:flex-row md:items-center md:gap-5 md:py-0">
                    <NauButton href={ctaHref} variant="light">
                      {cta}
                    </NauButton>
                    <p className="text-[13px] font-medium tracking-[-0.04em] text-white/45">
                      {deliveryLabel}{" "}
                      <span className="text-white">{offer.delivery}</span>
                    </p>
                  </div>
                </div>

                {/* Included: full width + single column on mobile for readable line length */}
                <div className="w-full min-w-0 border-t border-white/10 pt-5 md:max-w-[48rem] md:pt-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/35">
                    Included
                  </p>
                  <ul className="mt-3.5 grid grid-cols-1 gap-4 md:mt-3 md:grid-cols-3 md:gap-5">
                    {offer.highlights.map((item, index) => (
                      <li key={item} className="min-w-0">
                        <p className="text-[11px] font-semibold tracking-[-0.04em] text-white/40 tabular-nums">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <p className="mt-1.5 break-words text-[15px] leading-[1.4] font-medium tracking-[-0.03em] text-pretty text-white md:text-[15px] md:leading-snug md:tracking-[-0.04em]">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Full breakdown */}
                <div className="border-t border-white/10 pt-4 md:pt-5">
                  <button
                    type="button"
                    onClick={() => setDetailsOpen((open) => !open)}
                    aria-expanded={detailsOpen}
                    className="flex w-full items-center justify-between gap-4 py-0.5 text-left"
                  >
                    <div>
                      <p className="text-[13px] font-semibold tracking-[-0.04em] text-white">
                        Full breakdown
                      </p>
                      <p className="mt-0.5 text-[12px] font-medium tracking-[-0.03em] text-white/45">
                        {detailsOpen
                          ? "Hide details"
                          : "View everything included"}
                      </p>
                    </div>
                    <Chevron open={detailsOpen} />
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      detailsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="grid gap-6 pt-5 sm:grid-cols-2 sm:gap-8 md:gap-10 md:pt-6">
                        <div className="min-w-0">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/35">
                            {collaborationLabel}
                          </p>
                          <ul className="mt-2.5 space-y-2">
                            {offer.collaboration.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3"
                              >
                                <FeaturePlusIcon />
                                <span className="min-w-0 break-words text-[13px] leading-snug font-medium tracking-[-0.04em] text-white/80">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="min-w-0">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/35">
                            {includesLabel}
                          </p>
                          <ul className="mt-2.5 space-y-2">
                            {offer.includes.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-3"
                              >
                                <FeaturePlusIcon />
                                <span className="min-w-0 break-words text-[13px] leading-snug font-medium tracking-[-0.04em] text-white/80">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {showStoreTeaser ? (
        <section
          id="digital-guides"
          className="relative scroll-mt-[61px] overflow-x-hidden bg-[#f5f5f5] px-6 pt-16 pb-16 md:px-9 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
        >
          <div className="relative mx-auto w-full max-w-[1520px]">
            <div className="mb-6 text-center md:mb-8">
              <h2 className="text-[clamp(2.5rem,6vw,4.25rem)] leading-[0.92] font-semibold tracking-[-0.06em] text-[#0a0a0a]">
                {storeTeaser.name}.
              </h2>
              <p className="mx-auto mt-3 max-w-[32rem] text-[14px] leading-relaxed font-medium tracking-[-0.03em] text-[#0a0a0a]/55 md:text-[15px]">
                {storeTeaser.forWhom}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
              {(
                [
                  "organic-marketing-ideas",
                  "go-to-market-playbook",
                  "product-positioning-workbook",
                ] as const
              )
                .map((id) =>
                  storeSectionCopy.items.find((guide) => guide.id === id),
                )
                .filter(
                  (guide): guide is (typeof storeSectionCopy.items)[number] =>
                    Boolean(guide),
                )
                .map((guide, index) => (
                  <GuideGridCard
                    key={guide.id}
                    guide={guide}
                    index={index}
                    step={`0${index + 1}`}
                    ctaLabel={storeSectionCopy.cta}
                  />
                ))}
            </div>

            <div className="relative mt-4 overflow-hidden rounded-[20px] bg-[#0a0a0a] px-6 py-7 md:mt-5 md:px-8 md:py-8 lg:px-10">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background: `
                    radial-gradient(90% 120% at 0% 0%, rgba(91, 75, 155, 0.35) 0%, transparent 55%),
                    radial-gradient(70% 100% at 100% 100%, rgba(0, 168, 232, 0.28) 0%, transparent 50%)
                  `,
                }}
              />
              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
                <div className="min-w-0 max-w-[36rem]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
                    {storeSectionCopy.packageOfferEyebrow}
                  </p>
                  <p className="mt-2 text-[clamp(1.25rem,2.4vw,1.65rem)] leading-snug font-semibold tracking-[-0.045em] text-white">
                    {storeSectionCopy.packageOfferHeadline}
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed font-medium tracking-[-0.03em] text-white/55 md:text-[15px]">
                    {storeSectionCopy.packageOfferBody}
                  </p>
                </div>

                <div className="flex shrink-0 flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 lg:flex-col lg:items-end xl:flex-row xl:items-center">
                  <div className="sm:text-right">
                    <p className="text-[11px] font-medium tracking-[-0.03em] text-white/40 line-through">
                      {storeSectionCopy.packageOfferNote}
                    </p>
                    <div className="mt-1 flex items-baseline gap-2 sm:justify-end">
                      <p className="text-[2rem] leading-none font-semibold tracking-[-0.05em] text-white">
                        $79
                      </p>
                      <p className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold tracking-[-0.03em] text-white/80">
                        {storeSectionCopy.packageOfferSave}
                      </p>
                    </div>
                  </div>
                  <NauButton
                    href={storeSectionCopy.packageOfferHref}
                    variant="light"
                  >
                    {storeSectionCopy.packageOfferLabel}
                  </NauButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
