"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { NauButton } from "@/components/NauButton";
import { GuideGridCard } from "@/components/GuideGridCard";
import { pricingSectionCopy, storeSectionCopy } from "@/lib/sections";

type Offer = (typeof pricingSectionCopy.offers)[number];

function FeaturePlusIcon({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const onLight = tone === "light";
  return (
    <span
      className={`relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
        onLight ? "bg-[#0a0a0a]/08" : "bg-white/10"
      }`}
    >
      <span
        className={`absolute h-px w-1.5 ${onLight ? "bg-[#0a0a0a]" : "bg-white"}`}
      />
      <span
        className={`absolute h-1.5 w-px ${onLight ? "bg-[#0a0a0a]" : "bg-white"}`}
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

function OfferTierCard({
  offer,
  deliveryLabel,
  collaborationLabel,
  includesLabel,
  goodToKnowLabel,
  vatNote,
  defaultCta,
  ctaHref,
  index,
  reduceMotion,
}: {
  offer: Offer;
  deliveryLabel: string;
  collaborationLabel: string;
  includesLabel: string;
  goodToKnowLabel: string;
  vatNote: string;
  defaultCta: string;
  ctaHref: string;
  index: number;
  reduceMotion: boolean;
}) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const onLight = offer.tone === "light";
  const ctaLabel = defaultCta;
  const muted = onLight ? "text-[#0a0a0a]/45" : "text-white/50";
  const faint = onLight ? "text-[#0a0a0a]/35" : "text-white/35";
  const body = onLight ? "text-[#0a0a0a]/70" : "text-white/75";
  const border = onLight ? "border-[#0a0a0a]/10" : "border-white/10";

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: reduceMotion ? 0 : 0.06 + index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative flex h-full min-h-0 flex-col overflow-hidden rounded-[16px] px-6 pt-7 pb-0 md:px-8 md:pt-8 ${
        onLight
          ? "border border-[#0a0a0a]/12 bg-white text-[#0a0a0a] shadow-[0_1px_2px_rgba(10,10,10,0.04)]"
          : "bg-[#0a0a0a] text-white"
      }`}
    >
      <div className="relative z-[1] flex min-h-0 flex-1 flex-col">
        <p className={`text-[12px] font-semibold tracking-[-0.04em] ${muted}`}>
          {offer.name}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="text-[clamp(2rem,4vw,2.5rem)] leading-none font-semibold tracking-[-0.055em] tabular-nums">
            {offer.price}
          </span>
          {"discountLabel" in offer && offer.discountLabel ? (
            <span
              className={`inline-flex rounded-full px-3 py-1 text-[11px] font-bold tracking-[0.04em] uppercase ${
                onLight
                  ? "bg-[#0a0a0a] text-white"
                  : "bg-white text-[#0a0a0a]"
              }`}
            >
              {offer.discountLabel}
            </span>
          ) : null}
        </div>

        {"originalPrice" in offer && offer.originalPrice ? (
          <p className={`mt-2 text-[13px] font-medium tracking-[-0.03em] ${muted}`}>
            <span className={`tabular-nums line-through decoration-[1.5px] ${faint}`}>
              {offer.originalPrice}
            </span>
            {"savingsLabel" in offer && offer.savingsLabel ? (
              <span
                className={`ml-2 font-semibold ${
                  onLight ? "text-[#0a0a0a]/70" : "text-white/70"
                }`}
              >
                {offer.savingsLabel}
              </span>
            ) : null}
            <span className={`ml-2 ${faint}`}>{vatNote}</span>
          </p>
        ) : "priceNote" in offer && offer.priceNote ? (
          <p className={`mt-2 text-[13px] font-medium tracking-[-0.03em] ${muted}`}>
            {offer.priceNote}
          </p>
        ) : null}

        <p
          className={`mt-5 max-w-[28rem] text-[15px] leading-snug font-medium tracking-[-0.03em] ${body}`}
        >
          {offer.outcome}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <NauButton
            href={ctaHref}
            variant={onLight ? "dark" : "light"}
            electric
          >
            {ctaLabel}
          </NauButton>
          <p className={`text-[13px] font-medium tracking-[-0.04em] ${muted}`}>
            {deliveryLabel}{" "}
            <span className={onLight ? "text-[#0a0a0a]" : "text-white"}>
              {offer.delivery}
            </span>
          </p>
        </div>

        <div className="mt-auto pt-8">
          <ul className={`flex flex-wrap gap-2 border-t py-4 ${border}`}>
            {offer.highlights.map((item) => (
              <li
                key={item}
                className={`rounded-full px-3 py-1.5 text-[12px] font-semibold tracking-[-0.03em] ${
                  onLight
                    ? "bg-[#0a0a0a]/[0.05] text-[#0a0a0a]/75"
                    : "bg-white/10 text-white/80"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>

          <div className={`border-t ${border}`}>
            <button
              type="button"
              onClick={() => setDetailsOpen((open) => !open)}
              aria-expanded={detailsOpen}
              className="flex w-full items-center justify-between gap-3 py-4 text-left transition-opacity hover:opacity-80"
            >
              <p className="text-[13px] font-semibold tracking-[-0.04em]">
                {detailsOpen ? "Hide breakdown" : "Full breakdown"}
              </p>
              <Chevron open={detailsOpen} tone={offer.tone} />
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                detailsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0 overflow-hidden pb-4">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="min-w-0">
                    <p
                      className={`text-[10px] font-semibold uppercase tracking-[0.12em] ${faint}`}
                    >
                      {collaborationLabel}
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {offer.collaboration.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <FeaturePlusIcon tone={offer.tone} />
                          <span
                            className={`min-w-0 break-words text-[12px] leading-snug font-medium tracking-[-0.04em] ${body}`}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="min-w-0">
                    <p
                      className={`text-[10px] font-semibold uppercase tracking-[0.12em] ${faint}`}
                    >
                      {includesLabel}
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {offer.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <FeaturePlusIcon tone={offer.tone} />
                          <span
                            className={`min-w-0 break-words text-[12px] leading-snug font-medium tracking-[-0.04em] ${body}`}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={`mt-4 border-t pt-3 ${border}`}>
                  <p
                    className={`text-[10px] font-semibold uppercase tracking-[0.12em] ${faint}`}
                  >
                    {goodToKnowLabel}
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {offer.goodToKnow.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <FeaturePlusIcon tone={offer.tone} />
                        <span
                          className={`min-w-0 break-words text-[12px] leading-snug font-medium tracking-[-0.04em] ${body}`}
                        >
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
    </motion.article>
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
    subtitle,
    deliveryLabel,
    collaborationLabel,
    includesLabel,
    goodToKnowLabel,
    vatNote,
    cta,
    ctaHref,
    offers,
    storeTeaser,
  } = pricingSectionCopy;

  const title = titleOverride ?? defaultTitle;
  const reduceMotion = useReducedMotion() ?? false;
  const subtitleText = Array.isArray(subtitle) ? subtitle.join(" ") : subtitle;

  return (
    <>
      <section
        id={sectionId}
        className="relative box-border flex min-h-[calc(100svh-61px)] scroll-mt-[61px] flex-col justify-center overflow-x-hidden bg-[#f5f5f5] px-5 py-8 md:px-9 md:py-10"
      >
        <div className="relative mx-auto flex w-full max-w-[1400px] flex-col gap-5 md:gap-6">
          <motion.div
            className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-8"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="max-w-[26rem] text-[14px] leading-snug font-medium tracking-[-0.03em] text-[#0a0a0a]/55 md:text-[15px]">
              {subtitleText}
            </p>
            <h2 className="text-right text-[clamp(2.75rem,7vw,4.75rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-[#0a0a0a]">
              {title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-3">
            {offers.map((offer, index) => (
              <OfferTierCard
                key={offer.id}
                offer={offer}
                deliveryLabel={deliveryLabel}
                collaborationLabel={collaborationLabel}
                includesLabel={includesLabel}
                goodToKnowLabel={goodToKnowLabel}
                vatNote={vatNote}
                defaultCta={cta}
                ctaHref={ctaHref}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>
      </section>

      {showStoreTeaser ? (
        <section
          id="digital-guides"
          className="relative scroll-mt-[61px] overflow-x-hidden bg-[#f5f5f5] px-6 pt-16 pb-16 md:px-9 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
        >
          <div className="relative mx-auto w-full max-w-[1520px]">
            <div className="mb-6 text-left md:mb-8">
              <h2 className="text-[clamp(2.5rem,6vw,4.25rem)] leading-[0.92] font-semibold tracking-[-0.06em] text-[#0a0a0a]">
                {storeTeaser.name}.
              </h2>
              <p className="mt-3 max-w-[32rem] text-[14px] leading-relaxed font-medium tracking-[-0.03em] text-[#0a0a0a]/55 md:text-[15px]">
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
                    electric
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
