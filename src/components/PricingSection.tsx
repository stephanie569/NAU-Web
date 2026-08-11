"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { NauButton } from "@/components/NauButton";
import { pricingSectionCopy } from "@/lib/sections";

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

function RecommendedMark({
  label = "Recommended",
  variant = "panel",
}: {
  label?: string;
  variant?: "tab-inactive" | "tab-active" | "panel";
}) {
  if (variant === "panel") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/35 bg-cyan-400/[0.06] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan-100/80 shadow-[0_0_14px_rgb(34_211_238/0.12)]">
        <span
          className="relative flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_0_8px_rgb(34_211_238/0.45)]"
          aria-hidden
        >
          <span className="h-1 w-1 rounded-full bg-[#0a0a0a]" />
        </span>
        {label}
      </span>
    );
  }

  const onLightTab = variant === "tab-active";

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full ${
        onLightTab
          ? "bg-[#0a0a0a] ring-1 ring-cyan-400/40"
          : "bg-white ring-1 ring-cyan-300/50 shadow-[0_0_10px_rgb(34_211_238/0.35)]"
      } h-[17px] w-[17px]`}
      aria-label="Recommended"
      title="Recommended"
    >
      <span
        className={`rounded-full ${
          onLightTab ? "bg-white" : "bg-[#0a0a0a]"
        } h-1 w-1`}
        aria-hidden
      />
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

function ContentFormatPicker({
  label,
  hint,
  options,
  selectedId,
  onSelect,
  primarySelection = false,
}: {
  label: string;
  hint: string;
  options: ContentAddon[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  primarySelection?: boolean;
}) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="rounded-[16px] border border-white/10 bg-white/[0.03] px-5 py-4 md:px-6">
      <p className="text-[15px] font-semibold tracking-[-0.04em] text-white">
        {label}
      </p>
      <p className="mt-1 text-[13px] font-medium tracking-[-0.03em] text-white/50">
        {hint}
      </p>
      <div className="mt-3 flex flex-col gap-2">
        {options.map((option) => {
          const selected = selectedId === option.id;
          const expanded = expandedId === option.id;
          const displayPrice = primarySelection
            ? option.price.replace(/^From \+/, "From ")
            : option.price;

          return (
            <div
              key={option.id}
              className={`rounded-[14px] border transition-colors ${
                selected
                  ? "border-white/30 bg-white/[0.08]"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              <div className="flex items-center gap-2 px-4 py-3">
                <button
                  type="button"
                  onClick={() => onSelect(selected ? null : option.id)}
                  aria-pressed={selected}
                  className="min-w-0 flex-1 text-left"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[14px] font-semibold tracking-[-0.04em] text-white">
                      {option.title}
                    </p>
                    <span className="shrink-0 text-[13px] font-semibold tracking-[-0.04em] text-white tabular-nums">
                      {displayPrice}
                    </span>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setExpandedId(expanded ? null : option.id)}
                  aria-expanded={expanded}
                  aria-label={expanded ? "Hide details" : "Show details"}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/[0.06] hover:text-white/80"
                >
                  <Chevron open={expanded} />
                </button>
              </div>

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
      ? selectedContent.price.replace(/^From \+/, "From ")
      : pkg.price;

  const highlights =
    "highlights" in pkg && Array.isArray(pkg.highlights)
      ? pkg.highlights
      : pkg.includes.slice(0, 3);

  return (
    <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 lg:p-10">
      <div>
        {pkg.recommended ? (
          <div className="mb-4">
            <RecommendedMark label={recommendedBadge} />
          </div>
        ) : null}
        <h3 className="text-[clamp(1.85rem,3.8vw,2.85rem)] leading-[1.05] font-semibold tracking-[-0.06em] text-white">
          {displayPrice}
        </h3>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-white/65">
          {pkg.forWhom}
        </p>

        <ul className="mt-6 space-y-3">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <FeaturePlusIcon />
              <span className="text-[14px] leading-snug font-medium tracking-[-0.04em] text-white/85">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/40">
            {outcomeLabel}
          </p>
          <p className="mt-3 text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-white">
            {pkg.outcome}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {usesContentChoice ? (
          <ContentFormatPicker
            label={contentLabel}
            hint={contentHint}
            options={contentAddons}
            selectedId={selectedContentId}
            onSelect={onSelectContent}
            primarySelection={isContentOnly}
          />
        ) : null}

        <CollapsiblePanel
          title="Full breakdown"
          summary={
            detailsOpen
              ? "Hide collaboration and deliverables"
              : "Collaboration, deliverables and more"
          }
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

  const isGuides = activeId === storeTeaser.id;

  const activePackage = useMemo(
    () => packages.find((pkg) => pkg.id === activeId) ?? packages[0],
    [activeId, packages],
  );

  const isContentOnly =
    !isGuides &&
    "contentOnly" in activePackage &&
    activePackage.contentOnly === true;

  const selectedContent = contentAddons.find(
    (option) => option.id === contentSelection[activePackage.id],
  );

  const usesContentChoice =
    !isGuides &&
    "contentAddonChoice" in activePackage &&
    activePackage.contentAddonChoice === true;

  const menuItems = [
    ...packages.map((pkg) => ({
      id: pkg.id,
      name: pkg.name,
      recommended: pkg.recommended,
    })),
    {
      id: storeTeaser.id,
      name: storeTeaser.name,
      recommended: false,
    },
  ];

  useEffect(() => {
    setDetailsOpen(false);
  }, [activeId]);

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

        <div className="mb-8 flex justify-center md:mb-12">
          <div className="flex max-w-full gap-1 overflow-x-auto rounded-full bg-white/[0.06] p-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {menuItems.map((item) => {
              const active = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={`relative shrink-0 rounded-full px-4 py-2.5 text-[14px] font-medium tracking-[-0.04em] transition-colors sm:px-6 sm:text-[15px] ${
                    active
                      ? "bg-white text-[#0a0a0a]"
                      : "text-white/55 hover:text-white/80"
                  } ${
                    item.recommended
                      ? active
                        ? "pricing-tab-electric-active"
                        : "pricing-tab-electric-inactive"
                      : ""
                  }`}
                >
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                    {item.recommended ? (
                      <RecommendedMark
                        variant={active ? "tab-active" : "tab-inactive"}
                      />
                    ) : null}
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="overflow-visible rounded-[20px] bg-white/[0.04]">
          {isGuides ? (
            <>
              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 lg:p-10">
                <div>
                  <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-white/45">
                    {storeTeaser.eyebrow}
                  </p>
                  <h3 className="text-[clamp(1.85rem,3.8vw,2.85rem)] leading-[1.05] font-semibold tracking-[-0.06em] text-white">
                    {storeTeaser.price}
                  </h3>
                  <p className="mt-5 max-w-xl text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-white/65">
                    {storeTeaser.forWhom}
                  </p>
                  <div className="mt-8 border-t border-white/10 pt-6">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/40">
                      {outcomeLabel}
                    </p>
                    <p className="mt-3 text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-white">
                      {storeTeaser.outcome}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3.5">
                  {storeTeaser.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <FeaturePlusIcon />
                      <span className="text-[14px] leading-snug font-medium tracking-[-0.04em] text-white/90">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-6 overflow-visible border-t border-white/10 px-6 py-6 sm:px-8 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
                <div className="flex items-center gap-3 text-[15px] font-medium tracking-[-0.04em]">
                  <span className="text-white/60">{deliveryLabel}</span>
                  <span className="text-white">{storeTeaser.delivery}</span>
                </div>
                <div className="w-full shrink-0 lg:w-auto lg:justify-self-end">
                  <NauButton href={storeTeaser.href} variant="light">
                    {storeTeaser.cta}
                  </NauButton>
                </div>
              </div>
            </>
          ) : (
            <>
              <PackagePanel
                pkg={activePackage}
                recommendedBadge={recommendedBadge}
                outcomeLabel={outcomeLabel}
                collaborationLabel={collaborationLabel}
                includesLabel={includesLabel}
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

              <div className="flex flex-col gap-6 overflow-visible border-t border-white/10 px-6 py-6 sm:px-8 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
                <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-[15px] font-medium tracking-[-0.04em]">
                  <div className="flex items-center gap-3">
                    <span className="text-white/60">{deliveryLabel}</span>
                    <span className="text-white">{activePackage.delivery}</span>
                  </div>
                  {usesContentChoice && selectedContent && !isContentOnly ? (
                    <div className="flex items-center gap-3">
                      <span className="text-white/60">Content</span>
                      <span className="text-white">{selectedContent.price}</span>
                    </div>
                  ) : null}
                </div>
                <div className="w-full shrink-0 lg:w-auto lg:justify-self-end">
                  <NauButton href="/contact" variant="light">
                    {cta}
                  </NauButton>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
