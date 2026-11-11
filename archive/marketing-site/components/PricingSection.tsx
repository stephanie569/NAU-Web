"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { NauButton } from "@/components/NauButton";
import { pricingSectionCopy } from "@/lib/sections";

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
  detailsOpen,
  onToggleDetails,
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
  detailsOpen: boolean;
  onToggleDetails: () => void;
}) {
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
      className={`group relative flex min-h-0 flex-col overflow-hidden rounded-[16px] px-6 pt-7 pb-0 md:px-8 md:pt-8 ${
        onLight
          ? "border border-[#0a0a0a]/12 bg-white text-[#0a0a0a] shadow-[0_1px_2px_rgba(10,10,10,0.04)]"
          : "bg-[#0a0a0a] text-white"
      }`}
    >
      <div className="relative z-[1] flex min-h-0 flex-col">
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

        <div className="pt-8">
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
              onClick={onToggleDetails}
              aria-expanded={detailsOpen}
              className={`flex w-full items-center justify-between gap-3 py-4 text-left transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                onLight
                  ? "focus-visible:ring-[#0a0a0a]/25 focus-visible:ring-offset-white"
                  : "focus-visible:ring-white/40 focus-visible:ring-offset-[#0a0a0a]"
              }`}
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
              <div
                className={`min-h-0 overflow-hidden ${detailsOpen ? "pb-5" : ""}`}
                aria-hidden={!detailsOpen}
              >
                <div className="space-y-5">
                  <div className="min-w-0">
                    <p
                      className={`text-[10px] font-semibold uppercase tracking-[0.12em] ${faint}`}
                    >
                      {collaborationLabel}
                    </p>
                    <ul className="mt-2.5 grid gap-x-4 gap-y-2 sm:grid-cols-2">
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
                    <ul className="mt-2.5 grid gap-x-4 gap-y-2 sm:grid-cols-2">
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

                  <div className={`border-t pt-4 ${border}`}>
                    <p
                      className={`text-[10px] font-semibold uppercase tracking-[0.12em] ${faint}`}
                    >
                      {goodToKnowLabel}
                    </p>
                    <ul className="mt-2.5 grid gap-x-4 gap-y-2 sm:grid-cols-2">
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
      </div>
    </motion.article>
  );
}

export function PricingSection({
  title: titleOverride,
  sectionId = "work-with-me",
}: {
  title?: string;
  sectionId?: string;
} = {}) {
  const {
    title: defaultTitle,
    deliveryLabel,
    collaborationLabel,
    includesLabel,
    goodToKnowLabel,
    vatNote,
    cta,
    ctaHref,
    offers,
  } = pricingSectionCopy;

  const title = titleOverride ?? defaultTitle;
  const reduceMotion = useReducedMotion() ?? false;
  const [openOfferId, setOpenOfferId] = useState<string | null>(null);

  return (
    <section
      id={sectionId}
      className="relative box-border flex min-h-[calc(100svh-61px)] scroll-mt-[61px] flex-col justify-center overflow-x-hidden bg-[#f5f5f5] px-5 py-8 md:px-9 md:py-10"
    >
      <div className="relative mx-auto flex w-full max-w-[1400px] flex-col gap-5 md:gap-6">
        <motion.div
          className="flex justify-end"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-right text-[clamp(2.75rem,7vw,4.75rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-[#0a0a0a]">
            {title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-2.5 md:grid-cols-2 md:gap-3">
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
              detailsOpen={openOfferId === offer.id}
              onToggleDetails={() =>
                setOpenOfferId((current) =>
                  current === offer.id ? null : offer.id,
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
