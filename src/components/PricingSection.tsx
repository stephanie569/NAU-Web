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
                    Outer corners match site cards (≈24–28px / rounded-[28px]).
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
              className={`relative z-[1] rounded-[24px] bg-[#0a0a0a] px-5 py-5 text-white shadow-[0_24px_70px_rgba(10,10,10,0.18)] transition-[padding] duration-300 sm:px-6 sm:py-6 md:rounded-[24px] md:px-8 md:py-7 lg:px-10 lg:py-8 ${
                detailsOpen
                  ? "md:pr-8 lg:pr-10"
                  : "offer-camera-cutout md:pr-[min(42%,380px)]"
              }`}
            >
              <div className="flex min-w-0 flex-col gap-6 md:gap-7">
                {/* Primary offer — stays clear of the camera pocket */}
                <div className="flex min-w-0 max-w-[36rem] flex-col gap-5 md:gap-6">
                  <div>
                    <p className="text-[12px] font-semibold tracking-[-0.04em] text-white/50">
                      {offer.name}
                    </p>
                    <div className="mt-1.5">
                      <PriceLine
                        price={offer.price}
                        originalPrice={offer.originalPrice}
                        discountLabel={offer.discountLabel}
                      />
                    </div>
                    <p className="mt-1.5 text-[11px] font-medium tracking-[-0.03em] text-white/35">
                      {vatNote}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/35">
                      {outcomeLabel}
                    </p>
                    <p className="mt-2 text-[14px] leading-snug font-medium tracking-[-0.04em] text-white/85 md:text-[15px]">
                      {offer.outcome}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
                    <NauButton href={ctaHref} variant="light">
                      {cta}
                    </NauButton>
                    <p className="text-[13px] font-medium tracking-[-0.04em] text-white/45">
                      {deliveryLabel}{" "}
                      <span className="text-white">{offer.delivery}</span>
                    </p>
                  </div>
                </div>

                {/* Included — keep within content column so camera never clips it */}
                <div className="max-w-[40rem] border-t border-white/10 pt-5 md:pt-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/35">
                    Included
                  </p>
                  <ul className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
                    {offer.highlights.map((item, index) => (
                      <li key={item} className="min-w-0">
                        <p className="text-[11px] font-semibold tracking-[-0.04em] text-white/40 tabular-nums">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <p className="mt-1.5 break-words text-[14px] leading-snug font-medium tracking-[-0.04em] text-white md:text-[15px]">
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
                          : "See everything included"}
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

            <div className="mt-5 flex justify-center md:hidden">
              <div className="relative aspect-square w-[min(52vw,200px)] [transform:perspective(700px)_rotateY(-4deg)]">
                <Image
                  src={`${offer.image}?v=10`}
                  alt={offer.imageAlt}
                  fill
                  quality={100}
                  unoptimized
                  className="object-contain drop-shadow-[0_20px_36px_rgba(0,0,0,0.28)]"
                  sizes="200px"
                />
              </div>
            </div>
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
    </>
  );
}
