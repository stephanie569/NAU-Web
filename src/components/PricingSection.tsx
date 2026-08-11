"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { NauButton } from "@/components/NauButton";
import { GuideShowcase } from "@/components/GuideShowcase";
import { pricingSectionCopy, storeSectionCopy } from "@/lib/sections";

type Package = (typeof pricingSectionCopy.packages)[number];
type ContentAddon = (typeof pricingSectionCopy.contentAddons)[number];

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

function RecommendedMark({ label = "Recommended" }: { label?: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white/45">
      {label}
    </span>
  );
}

function CollapsiblePanel({
  title,
  summary,
  open,
  onToggle,
  children,
}: {
  title: string;
  summary: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[16px] border border-white/10 bg-white/[0.03]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left transition-colors hover:bg-white/[0.03] md:px-5"
      >
        <div className="min-w-0">
          <p className="text-[15px] font-semibold tracking-[-0.04em] text-white">
            {title}
          </p>
          <p className="mt-1 text-[13px] font-medium tracking-[-0.03em] text-white/50">
            {summary}
          </p>
        </div>
        <Chevron open={open} />
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

function PriceLine({
  price,
  originalPrice,
  discountLabel,
  size = "large",
}: {
  price: string;
  originalPrice?: string;
  discountLabel?: string;
  size?: "large" | "small";
}) {
  const isLarge = size === "large";

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
        <span
          className={`tracking-[-0.04em] text-white tabular-nums ${
            isLarge
              ? "text-[clamp(1.65rem,3.2vw,2.35rem)] leading-[1.05] font-semibold"
              : "text-[13px] font-semibold"
          }`}
        >
          {price}
        </span>
        {discountLabel ? (
          <span
            className={`inline-flex shrink-0 items-center rounded-full border border-white/12 bg-white/[0.05] font-semibold tracking-[-0.02em] text-white/65 ${
              isLarge
                ? "px-2.5 py-1 text-[12px]"
                : "px-2 py-0.5 text-[10px]"
            }`}
          >
            {discountLabel}
          </span>
        ) : null}
      </div>
      {originalPrice ? (
        <p
          className={`font-medium tracking-[-0.03em] text-white/35 tabular-nums ${
            isLarge ? "text-[13px]" : "text-[11px]"
          }`}
        >
          Regularly {originalPrice}
        </p>
      ) : null}
    </div>
  );
}

function ContentFormatPicker({
  label,
  hint,
  options,
  selectedId,
  onSelect,
  primarySelection = false,
  includedInPrice = false,
  required = false,
}: {
  label: string;
  hint: string;
  options: ContentAddon[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  primarySelection?: boolean;
  includedInPrice?: boolean;
  required?: boolean;
}) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const needsChoice = required && !selectedId;

  const formatPrice = (option: ContentAddon) => {
    if (includedInPrice) return "Included";
    if (primarySelection) {
      return (
        option.standalonePrice ??
        option.price.replace(/^From \+/, "From ")
      );
    }
    return option.price;
  };

  return (
    <div
      className={`rounded-[16px] border bg-white/[0.03] px-4 py-3.5 md:px-5 ${
        needsChoice ? "border-white/35" : "border-white/10"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-[15px] font-semibold tracking-[-0.04em] text-white">
          {label}
        </p>
        {required ? (
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/[0.06] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/70">
            Required
          </span>
        ) : (
          <span className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.04] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/45">
            Optional
          </span>
        )}
      </div>
      {(hint || !required) ? (
        <p
          className={`mt-1 text-[12px] font-medium tracking-[-0.03em] ${
            needsChoice ? "text-white/70" : "text-white/40"
          }`}
        >
          {required
            ? hint
            : hint ||
              "Optional · skip to keep strategy only. Tap a selected option again to clear."}
        </p>
      ) : null}
      <div className="mt-2.5 flex flex-col gap-1.5">
        {!required ? (
          <button
            type="button"
            onClick={() => {
              setExpandedId(null);
              onSelect(null);
            }}
            aria-pressed={selectedId === null}
            className={`flex w-full items-center gap-3 rounded-[14px] border px-3.5 py-2.5 text-left transition-colors hover:bg-white/[0.03] ${
              selectedId === null
                ? "border-white/40 bg-white/[0.1]"
                : "border-white/10 bg-white/[0.02]"
            }`}
          >
            <span
              aria-hidden
              className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                selectedId === null
                  ? "border-white bg-white"
                  : "border-white/35 bg-transparent"
              }`}
            >
              {selectedId === null ? (
                <span className="h-1.5 w-1.5 rounded-full bg-[#0a0a0a]" />
              ) : null}
            </span>
            <p className="text-[14px] font-semibold tracking-[-0.04em] text-white">
              Strategy only · no content
            </p>
          </button>
        ) : null}
        {options.map((option) => {
          const selected = selectedId === option.id;
          const expanded = expandedId === option.id;
          const displayPrice = formatPrice(option);
          const displayDiscountLabel =
            !includedInPrice &&
            !primarySelection &&
            "discountLabel" in option &&
            typeof option.discountLabel === "string"
              ? option.discountLabel
              : undefined;

          return (
            <div
              key={option.id}
              className={`rounded-[14px] border transition-colors ${
                selected
                  ? "border-white/40 bg-white/[0.1]"
                  : needsChoice
                    ? "border-white/20 bg-white/[0.03]"
                    : "border-white/10 bg-white/[0.02]"
              }`}
            >
              <button
                type="button"
                onClick={() => {
                  if (selected) {
                    if (!required) {
                      setExpandedId(null);
                      onSelect(null);
                      return;
                    }
                    setExpandedId(expanded ? null : option.id);
                    return;
                  }
                  setExpandedId(option.id);
                  onSelect(option.id);
                }}
                aria-expanded={expanded}
                aria-pressed={selected}
                className="flex w-full items-center gap-3 px-3.5 py-2.5 text-left transition-colors hover:bg-white/[0.03]"
              >
                <span
                  aria-hidden
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                    selected
                      ? "border-white bg-white"
                      : "border-white/35 bg-transparent"
                  }`}
                >
                  {selected ? (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0a0a0a]" />
                  ) : null}
                </span>
                <div className="flex min-w-0 flex-1 items-center justify-between gap-3">
                  <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
                    <p className="text-[14px] font-semibold tracking-[-0.04em] text-white">
                      {option.title}
                    </p>
                    {"regionNote" in option && option.regionNote ? (
                      <span className="inline-flex shrink-0 items-center rounded-full border border-white/12 bg-white/[0.05] px-2 py-0.5 text-[10px] font-semibold tracking-[-0.02em] text-white/55">
                        {option.regionNote}
                      </span>
                    ) : null}
                  </div>
                  <div className="shrink-0 text-right">
                    <PriceLine
                      price={displayPrice}
                      discountLabel={displayDiscountLabel}
                      size="small"
                    />
                  </div>
                </div>
                <Chevron open={expanded} />
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-white/10 px-4 pb-4 pt-3">
                    <p className="text-[13px] leading-relaxed font-medium tracking-[-0.03em] text-white/55">
                      {option.summary}
                    </p>
                    <ul className="mt-4 space-y-3">
                      {option.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <FeaturePlusIcon />
                          <span className="text-[14px] leading-snug font-medium tracking-[-0.04em] text-white/85">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PackagePanel({
  pkg,
  recommendedBadge,
  outcomeLabel,
  collaborationLabel,
  includesLabel,
  vatNote,
  contentAddons,
  contentAddonsLabel,
  contentAddonsSummary,
  selectedContentId,
  onSelectContent,
  detailsOpen,
  onToggleDetails,
}: {
  pkg: Package;
  recommendedBadge: string;
  outcomeLabel: string;
  collaborationLabel: string;
  includesLabel: string;
  vatNote: string;
  contentAddons: ContentAddon[];
  contentAddonsLabel: string;
  contentAddonsSummary: string;
  selectedContentId: string | null;
  onSelectContent: (id: string | null) => void;
  detailsOpen: boolean;
  onToggleDetails: () => void;
}) {
  const usesContentChoice =
    "contentAddonChoice" in pkg && pkg.contentAddonChoice === true;
  const isContentOnly = "contentOnly" in pkg && pkg.contentOnly === true;
  const isContentIncluded =
    "contentIncluded" in pkg && pkg.contentIncluded === true;
  const contentLabel =
    "contentAddonLabel" in pkg && pkg.contentAddonLabel
      ? pkg.contentAddonLabel
      : contentAddonsLabel;
  const contentHint =
    "contentAddonSummary" in pkg && pkg.contentAddonSummary
      ? pkg.contentAddonSummary
      : contentAddonsSummary;

  const selectedContent = contentAddons.find(
    (option) => option.id === selectedContentId,
  );

  const displayPrice =
    isContentOnly && selectedContent
      ? selectedContent.standalonePrice ??
        selectedContent.price.replace(/^From \+/, "From ")
      : pkg.price;

  const displayOriginalPrice =
    isContentOnly && selectedContent
      ? undefined
      : "originalPrice" in pkg
        ? pkg.originalPrice
        : undefined;

  const highlights = (
    "highlights" in pkg && Array.isArray(pkg.highlights)
      ? pkg.highlights
      : pkg.includes.slice(0, 3)
  ).slice(0, 3);

  return (
    <div className="grid items-start gap-6 p-5 sm:p-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 lg:p-7 xl:p-8">
      <div className="min-w-0">
        {pkg.recommended ? (
          <div className="mb-2.5">
            <RecommendedMark label={recommendedBadge} />
          </div>
        ) : null}
        <PriceLine
          price={displayPrice}
          originalPrice={displayOriginalPrice}
        />
        <p className="mt-1 text-[12px] font-medium tracking-[-0.03em] text-white/40">
          {vatNote}
        </p>
        <p className="mt-4 max-w-md text-[14px] leading-snug font-medium tracking-[-0.04em] text-white/70 md:text-[15px]">
          {pkg.forWhom}
        </p>

        <ul className="mt-5 space-y-3">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <FeaturePlusIcon />
              <span className="text-[14px] leading-snug font-medium tracking-[-0.04em] text-white/85">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/40">
            {outcomeLabel}
          </p>
          <p className="mt-2.5 text-[14px] leading-snug font-medium tracking-[-0.04em] text-white md:text-[15px]">
            {pkg.outcome}
          </p>
        </div>
      </div>

      <div className="flex min-w-0 flex-col gap-2.5">
        {usesContentChoice ? (
          <ContentFormatPicker
            label={contentLabel}
            hint={contentHint}
            options={contentAddons}
            selectedId={selectedContentId}
            onSelect={onSelectContent}
            primarySelection={isContentOnly}
            includedInPrice={isContentIncluded}
            required={isContentIncluded || isContentOnly}
          />
        ) : null}

        <CollapsiblePanel
          title="Full breakdown"
          summary={detailsOpen ? "Hide details" : "See everything included"}
          open={detailsOpen}
          onToggle={onToggleDetails}
        >
          <div className="space-y-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/40">
                {collaborationLabel}
              </p>
              <ul className="mt-3 space-y-3">
                {pkg.collaboration.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <FeaturePlusIcon />
                    <span className="text-[14px] leading-snug font-medium tracking-[-0.04em] text-white/85">
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
              <ul className="mt-3 space-y-3">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <FeaturePlusIcon />
                    <span className="text-[14px] leading-snug font-medium tracking-[-0.04em] text-white/85">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {selectedContent ? (
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/40">
                  {selectedContent.title}
                </p>
                <ul className="mt-3 space-y-3">
                  {selectedContent.features.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <FeaturePlusIcon />
                      <span className="text-[14px] leading-snug font-medium tracking-[-0.04em] text-white/85">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </CollapsiblePanel>
      </div>
    </div>
  );
}

export function PricingSection() {
  const {
    label,
    title,
    recommendedBadge,
    deliveryLabel,
    outcomeLabel,
    collaborationLabel,
    includesLabel,
    vatNote,
    cta,
    contentAddonsLabel,
    contentAddonsSummary,
    contentAddons,
    packages,
    storeTeaser,
  } = pricingSectionCopy;

  const defaultPackage =
    packages.find((pkg) => pkg.recommended)?.id ?? packages[0].id;

  const [activeId, setActiveId] = useState(defaultPackage);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [contentSelection, setContentSelection] = useState<
    Record<string, string | null>
  >({});

  const activePackage = useMemo(
    () => packages.find((pkg) => pkg.id === activeId) ?? packages[0],
    [activeId, packages],
  );

  const isContentOnly =
    "contentOnly" in activePackage && activePackage.contentOnly === true;

  const isContentIncluded =
    "contentIncluded" in activePackage &&
    activePackage.contentIncluded === true;

  const selectedContent = contentAddons.find(
    (option) => option.id === contentSelection[activePackage.id],
  );

  const usesContentChoice =
    "contentAddonChoice" in activePackage &&
    activePackage.contentAddonChoice === true;

  const contentChoiceRequired =
    usesContentChoice && (isContentIncluded || isContentOnly);
  const canContact = !contentChoiceRequired || Boolean(selectedContent);

  const menuItems = packages.map((pkg) => ({
    id: pkg.id,
    name: pkg.name,
    recommended: pkg.recommended,
    discountLabel: "discountLabel" in pkg ? pkg.discountLabel : undefined,
  }));

  useEffect(() => {
    setDetailsOpen(false);
  }, [activeId]);

  return (
    <>
      <section
        id="packages"
        data-header-theme="dark"
        className="relative scroll-mt-[61px] overflow-x-hidden bg-[#0a0a0a] px-6 pt-16 pb-10 md:px-9 md:pt-20 md:pb-12 lg:pt-24 lg:pb-14"
      >
        <NoiseOverlay />

        <div className="relative mx-auto w-full max-w-[1520px]">
          <div className="mb-8 flex items-center gap-3 md:mb-10">
            <PlusBadge />
            <p className="text-[15px] font-medium tracking-[-0.04em] text-white">
              {label}
            </p>
          </div>

          <div className="mb-8 text-center md:mb-10">
            <h2 className="text-[clamp(3.25rem,8vw,5.75rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-white">
              {title}
            </h2>
          </div>

          <div className="mb-5 flex justify-center lg:mb-6">
            <div className="flex max-w-full gap-1 overflow-x-auto rounded-full bg-white/[0.06] p-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {menuItems.map((item) => {
                const active = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={`relative shrink-0 rounded-full px-3.5 py-2 text-[13px] font-medium tracking-[-0.04em] transition-colors sm:px-5 sm:py-2.5 sm:text-[14px] ${
                      active
                        ? "pricing-tab-active"
                        : item.recommended
                          ? "text-white/70 ring-1 ring-inset ring-white/10 hover:text-white/90"
                          : "text-white/55 hover:text-white/80"
                    }`}
                  >
                    <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                      {item.name}
                      {"discountLabel" in item && item.discountLabel ? (
                        <span
                          className={`inline-flex shrink-0 items-center rounded-full border px-1.5 py-0.5 text-[10px] font-semibold tracking-[-0.02em] sm:px-2 ${
                            active
                              ? "pricing-discount-on-active"
                              : "border-white/12 bg-white/[0.05] text-white/65"
                          }`}
                        >
                          {item.discountLabel}
                        </span>
                      ) : null}
                      {item.recommended && !active ? (
                        <span className="text-[10px] font-normal tracking-normal text-white/30">
                          · full path
                        </span>
                      ) : null}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="overflow-visible rounded-[20px] bg-white/[0.04]">
            <PackagePanel
              pkg={activePackage}
              recommendedBadge={recommendedBadge}
              outcomeLabel={outcomeLabel}
              collaborationLabel={collaborationLabel}
              includesLabel={includesLabel}
              vatNote={vatNote}
              contentAddons={contentAddons}
              contentAddonsLabel={contentAddonsLabel}
              contentAddonsSummary={contentAddonsSummary}
              selectedContentId={contentSelection[activePackage.id] ?? null}
              onSelectContent={(id) =>
                setContentSelection((prev) => ({
                  ...prev,
                  [activePackage.id]: id,
                }))
              }
              detailsOpen={detailsOpen}
              onToggleDetails={() => setDetailsOpen((open) => !open)}
            />

            <div className="flex flex-col gap-4 overflow-visible border-t border-white/10 px-5 py-4 sm:px-6 md:px-7 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-8">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[14px] font-medium tracking-[-0.04em] md:text-[15px]">
                <div className="flex items-center gap-3">
                  <span className="text-white/60">{deliveryLabel}</span>
                  <span className="text-white">{activePackage.delivery}</span>
                </div>
                {usesContentChoice &&
                selectedContent &&
                !isContentOnly &&
                !isContentIncluded ? (
                  <div className="flex items-center gap-3">
                    <span className="text-white/60">Content</span>
                    <PriceLine
                      price={selectedContent.price}
                      discountLabel={
                        "discountLabel" in selectedContent &&
                        typeof selectedContent.discountLabel === "string"
                          ? selectedContent.discountLabel
                          : undefined
                      }
                      size="small"
                    />
                  </div>
                ) : null}
              </div>
              <div className="flex w-full shrink-0 flex-col items-stretch gap-2 lg:w-auto lg:items-end lg:justify-self-end">
                {contentChoiceRequired && !canContact ? (
                  <p className="text-[12px] font-medium tracking-[-0.03em] text-white/55 lg:text-right">
                    Choose UGC or team day before purchasing
                  </p>
                ) : null}
                {canContact ? (
                    <NauButton href="/contact" variant="light">
                    {cta}
                  </NauButton>
                ) : (
                  <NauButton
                    variant="light"
                    disabled
                    aria-disabled
                    className="cursor-not-allowed opacity-40"
                  >
                    {cta}
                  </NauButton>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="digital-guides"
        data-header-theme="dark"
        className="relative scroll-mt-[61px] overflow-x-hidden bg-[#0a0a0a] px-6 pt-6 pb-16 md:px-9 md:pt-8 md:pb-20 lg:pt-10 lg:pb-24"
      >
        <NoiseOverlay />

        <div className="relative mx-auto w-full max-w-[1520px]">
          <div className="mb-6 flex items-center gap-3 md:mb-8">
            <PlusBadge />
            <p className="text-[15px] font-medium tracking-[-0.04em] text-white">
              {storeTeaser.eyebrow}
            </p>
          </div>

          <div className="mb-6 text-center md:mb-8">
            <h2 className="text-[clamp(2.5rem,6vw,4.25rem)] leading-[0.92] font-semibold tracking-[-0.06em] text-white">
              {storeTeaser.name}.
            </h2>
          </div>

          <div className="overflow-visible rounded-[20px] bg-white/[0.04]">
            <div className="grid items-start gap-6 p-5 sm:p-6 lg:grid-cols-2 lg:gap-8 lg:p-7 xl:p-8">
              <div className="flex flex-col">
                <h3 className="text-[clamp(1.65rem,3.2vw,2.35rem)] leading-[1.05] font-semibold tracking-[-0.06em] text-white">
                  {storeTeaser.price}
                </h3>
                <p className="mt-4 max-w-xl text-[14px] leading-relaxed font-medium tracking-[-0.04em] text-white/65 md:text-[15px]">
                  {storeTeaser.forWhom}
                </p>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/40">
                    {outcomeLabel}
                  </p>
                  <p className="mt-2.5 text-[14px] leading-relaxed font-medium tracking-[-0.04em] text-white md:text-[15px]">
                    {storeTeaser.outcome}
                  </p>
                </div>
              </div>
              <GuideShowcase guides={storeSectionCopy.items} />
            </div>

            <div className="flex flex-col gap-4 overflow-visible border-t border-white/10 px-5 py-4 sm:px-6 md:px-7 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-8">
              <div className="flex items-center gap-3 text-[14px] font-medium tracking-[-0.04em] md:text-[15px]">
                <span className="text-white/60">{deliveryLabel}</span>
                <span className="text-white">{storeTeaser.delivery}</span>
              </div>
              <div className="w-full shrink-0 lg:w-auto lg:justify-self-end">
                <NauButton href="/packages" variant="light" electric={false}>
                  {storeTeaser.cta}
                </NauButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
