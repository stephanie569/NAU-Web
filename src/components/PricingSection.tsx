"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { siteConfig } from "@/lib/data";
import { pricingSectionCopy } from "@/lib/sections";

function PlusBadge() {
  return (
    <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
      <span className="absolute h-px w-3 bg-[#0a0a0a]" />
      <span className="absolute h-3 w-px bg-[#0a0a0a]" />
    </span>
  );
}

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

function FeaturePlusIcon() {
  return (
    <span className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10">
      <span className="absolute h-px w-2 bg-white" />
      <span className="absolute h-2 w-px bg-white" />
    </span>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden
      className={`inline-block text-white/50 transition-transform duration-200 ${
        open ? "rotate-180" : "rotate-0"
      }`}
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

function AddonToggle({
  enabled,
  onChange,
}: {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      onClick={(e) => {
        e.stopPropagation();
        onChange(!enabled);
      }}
      className={`relative h-8 w-14 shrink-0 rounded-full transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white/25 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
        enabled ? "bg-white" : "bg-white/15"
      }`}
    >
      <span
        className={`absolute top-1 left-1 h-6 w-6 rounded-full transition-transform duration-200 ease-out ${
          enabled
            ? "translate-x-6 bg-[#131313]"
            : "translate-x-0 bg-white"
        }`}
      />
    </button>
  );
}

function CollapsiblePanel({
  title,
  summary,
  open,
  onToggle,
  trailing,
  children,
}: {
  title: string;
  summary: string;
  open: boolean;
  onToggle: () => void;
  trailing?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[16px] border border-white/10 bg-white/[0.03]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-white/[0.03] md:px-6"
      >
        <div className="min-w-0">
          <p className="text-[15px] font-semibold tracking-[-0.04em] text-white">
            {title}
          </p>
          <p className="mt-1 text-[13px] font-medium tracking-[-0.03em] text-white/50">
            {summary}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          {trailing}
          <Chevron open={open} />
        </div>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/10 px-5 py-5 md:px-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function buyMailto(title: string, price: string) {
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    `Guide: ${title}`,
  )}&body=${encodeURIComponent(
    `Hi Stefani,\n\nI'd like the ${title} (${price}).\n\nThanks.`,
  )}`;
}

const qrMailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
  "Found a QR — free guide",
)}&body=${encodeURIComponent(
  "Hi Stefani,\n\nI found a nau QR code.\n\nWhere: \nWhich guide I'd like: \n\nThanks.",
)}`;

export function PricingSection() {
  const {
    label,
    title,
    recommendedBadge,
    deliveryLabel,
    outcomeLabel,
    includesLabel,
    cta,
    addon,
    packages,
    guides,
  } = pricingSectionCopy;

  const defaultPackage =
    packages.find((pkg) => pkg.recommended)?.id ?? packages[0].id;

  const [activeId, setActiveId] = useState(defaultPackage);
  const [addonEnabled, setAddonEnabled] = useState(false);
  const [includesOpen, setIncludesOpen] = useState(false);
  const [addonOpen, setAddonOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(true);

  const activePackage = useMemo(
    () => packages.find((pkg) => pkg.id === activeId) ?? packages[0],
    [activeId, packages],
  );

  const showAddon = activePackage.allowsAddon;

  useEffect(() => {
    setIncludesOpen(false);
    setAddonOpen(false);
    if (!showAddon) setAddonEnabled(false);
  }, [activeId, showAddon]);

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#0a0a0a] px-6 py-[110px] md:px-9 md:py-[130px]"
    >
      <NoiseOverlay />

      <div className="relative mx-auto w-full max-w-[1520px]">
        <div className="mb-[90px] flex items-center gap-3">
          <PlusBadge />
          <p className="text-[15px] font-medium tracking-[-0.04em] text-white">
            {label}
          </p>
        </div>

        <div className="mb-10 text-center">
          <h2 className="text-[clamp(4rem,12vw,9rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-white">
            {title}
          </h2>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="inline-flex max-w-full flex-wrap justify-center gap-1 rounded-full bg-white/[0.06] p-1">
            {packages.map((pkg) => {
              const active = pkg.id === activeId;
              return (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => setActiveId(pkg.id)}
                  className={`relative rounded-full px-5 py-2.5 text-[14px] font-medium tracking-[-0.04em] transition-colors sm:px-6 sm:text-[15px] ${
                    active
                      ? "bg-white text-[#0a0a0a]"
                      : "text-white/55 hover:text-white/80"
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    {pkg.name}
                    {pkg.recommended && (
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] ${
                          active
                            ? "bg-[#0a0a0a]/10 text-[#0a0a0a]"
                            : "bg-white/10 text-white/70"
                        }`}
                      >
                        {recommendedBadge}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="overflow-hidden rounded-[20px] bg-white/[0.04]">
          <div className="grid gap-10 p-8 md:p-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
            <div>
              {activePackage.recommended && (
                <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-white/45">
                  {recommendedBadge}
                </p>
              )}
              <h3 className="text-[clamp(1.85rem,3.8vw,2.85rem)] leading-[1.05] font-semibold tracking-[-0.06em] text-white">
                {activePackage.price}
              </h3>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-white/65">
                {activePackage.forWhom}
              </p>

              <div className="mt-8 max-w-xl border-t border-white/10 pt-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/40">
                  {outcomeLabel}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-white">
                  {activePackage.outcome}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <CollapsiblePanel
                title={includesLabel}
                summary={`${activePackage.includes.length} · ${
                  includesOpen ? "Hide" : "View"
                }`}
                open={includesOpen}
                onToggle={() => setIncludesOpen((v) => !v)}
              >
                <ul className="columns-1 gap-x-8 space-y-3.5 sm:columns-2">
                  {activePackage.includes.map((feature) => (
                    <li
                      key={feature}
                      className="flex break-inside-avoid items-center gap-3"
                    >
                      <FeaturePlusIcon />
                      <span className="text-[14px] font-medium tracking-[-0.04em] text-white/90">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CollapsiblePanel>

              {showAddon ? (
                <CollapsiblePanel
                  title={addon.title}
                  summary={
                    addonEnabled
                      ? `Added · ${addon.price}`
                      : `Optional · ${addon.price}`
                  }
                  open={addonOpen}
                  onToggle={() => setAddonOpen((v) => !v)}
                  trailing={
                    <AddonToggle
                      enabled={addonEnabled}
                      onChange={(enabled) => {
                        setAddonEnabled(enabled);
                        if (enabled) setAddonOpen(true);
                      }}
                    />
                  }
                >
                  <p className="text-[14px] leading-relaxed font-medium tracking-[-0.04em] text-white/60">
                    {addon.description}
                  </p>
                  <ul className="mt-5 columns-1 gap-x-8 space-y-3 sm:columns-2">
                    {addon.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex break-inside-avoid items-center gap-3"
                      >
                        <FeaturePlusIcon />
                        <span className="text-[14px] font-medium tracking-[-0.04em] text-white/85">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CollapsiblePanel>
              ) : (
                <div className="rounded-[16px] border border-white/10 bg-white/[0.03] px-5 py-5 md:px-6">
                  <p className="text-[15px] font-semibold tracking-[-0.04em] text-white">
                    {pricingSectionCopy.embeddedNote.title}
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed font-medium tracking-[-0.04em] text-white/55">
                    {pricingSectionCopy.embeddedNote.description}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-6 border-t border-white/10 px-8 py-7 md:px-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex min-w-[220px] items-center justify-between gap-8 text-[15px] font-medium tracking-[-0.04em] lg:justify-start lg:gap-10">
              <span className="text-white/60">{deliveryLabel}</span>
              <span className="text-white">{activePackage.delivery}</span>
              {showAddon && addonEnabled && (
                <>
                  <span className="hidden h-4 w-px bg-white/15 sm:block" />
                  <span className="hidden text-white/60 sm:inline">
                    Content
                  </span>
                  <span className="hidden text-white sm:inline">
                    {addon.price}
                  </span>
                </>
              )}
            </div>

            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-10 py-4 text-[15px] font-semibold tracking-[-0.04em] text-[#0a0a0a] transition-opacity hover:opacity-85 lg:w-auto lg:min-w-[220px]"
            >
              {cta}
            </Link>
          </div>
        </div>

        <div id="guides" className="mt-10 scroll-mt-28">
          <div className="overflow-hidden rounded-[20px] border border-white/20 bg-white/[0.06]">
            <div className="grid gap-8 p-8 md:p-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/45">
                  {guides.eyebrow}
                </p>
                <h3 className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.05] font-semibold tracking-[-0.06em] text-white">
                  {guides.title}
                </h3>
                <p className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.06em] text-white">
                  {guides.price}
                </p>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-white/65">
                  {guides.forWhom}
                </p>
                <p className="mt-5 max-w-md text-[14px] font-medium tracking-[-0.03em] text-white/45">
                  {guides.note}
                </p>

                <div className="mt-8 flex flex-col gap-3 border border-white/15 bg-white/[0.04] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[14px] font-semibold tracking-[-0.04em] text-white">
                      {guides.qrCta}
                    </p>
                    <p className="mt-1 text-[13px] font-medium tracking-[-0.03em] text-white/50">
                      {guides.qrNote}
                    </p>
                  </div>
                  <Link
                    href={qrMailto}
                    className="shrink-0 rounded-full bg-white px-5 py-2.5 text-center text-[13px] font-semibold tracking-[-0.03em] text-[#0a0a0a] transition-opacity hover:opacity-85"
                  >
                    {guides.qrLinkLabel}
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setGuidesOpen((v) => !v)}
                  aria-expanded={guidesOpen}
                  className="mb-5 flex w-full items-center justify-between gap-4 text-left"
                >
                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/40">
                    {guides.items.length} guides
                  </p>
                  <span className="inline-flex items-center gap-2 text-[13px] font-medium tracking-[-0.03em] text-white/55">
                    {guidesOpen ? "Hide" : "View all"}
                    <Chevron open={guidesOpen} />
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    guidesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="divide-y divide-white/10 border-y border-white/10">
                      {guides.items.map((guide) => (
                        <li
                          key={guide.id}
                          className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
                        >
                          <div className="flex min-w-0 items-start gap-3">
                            <FeaturePlusIcon />
                            <div className="min-w-0">
                              <p className="text-[15px] font-semibold tracking-[-0.04em] text-white">
                                {guide.title}
                              </p>
                              <p className="mt-1 text-[13px] font-medium tracking-[-0.03em] text-white/50">
                                {guide.blurb}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between gap-6 pl-9 sm:pl-0 sm:justify-end">
                            <p className="text-[15px] font-semibold tracking-[-0.04em] text-white tabular-nums">
                              {guide.price}
                            </p>
                            <Link
                              href={buyMailto(guide.title, guide.price)}
                              className="text-[13px] font-semibold tracking-[-0.03em] text-white underline underline-offset-4 transition-opacity hover:opacity-70"
                            >
                              {guides.cta}
                            </Link>
                          </div>
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
    </section>
  );
}
