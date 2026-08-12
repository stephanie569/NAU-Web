"use client";

import Image from "next/image";
import { BuyGuideButton } from "@/components/BuyGuideButton";
import type { StoreGuide } from "@/lib/sections";

function DotsMenu({ variant = "muted" }: { variant?: "muted" | "mac" }) {
  if (variant === "mac") {
    return (
      <div className="flex items-center gap-1.5 px-1">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 px-1">
      <span className="h-1 w-1 rounded-full bg-[#0a0a0a]" />
      <span className="h-1 w-1 rounded-full bg-[#0a0a0a]/35" />
      <span className="h-1 w-1 rounded-full bg-[#0a0a0a]/35" />
    </div>
  );
}

function GuidePosterPreview({ guide }: { guide: StoreGuide }) {
  const { poster } = guide;

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0a0a0a]">
      <Image
        src={poster.image}
        alt=""
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(8,8,8,0.82) 0%,
              rgba(8,8,8,0.35) 40%,
              rgba(8,8,8,0.55) 72%,
              rgba(8,8,8,0.92) 100%
            )
          `,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${poster.gradientFrom}cc 0%, transparent 55%)`,
        }}
      />

      <div className="relative z-[1] flex h-full flex-col justify-between p-4 sm:p-5">
        <div className="flex items-center justify-between border-b border-white/20 pb-2">
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/80">
            nau presents
          </p>
          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/65">
            {poster.industry}
          </p>
        </div>

        <div className="text-center">
          <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/70">
            {poster.label} night
          </p>
          <p className="mt-2 text-[clamp(1.1rem,3vw,1.5rem)] leading-[0.9] font-semibold uppercase tracking-[-0.04em] text-white">
            {poster.headline}
          </p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75">
            {poster.subline}
          </p>
        </div>

        <p className="text-center text-[10px] font-medium tracking-[-0.03em] text-white/55">
          {poster.tagline}
        </p>
      </div>
    </div>
  );
}

export function GuideGridCard({
  guide,
  index,
  ctaLabel,
}: {
  guide: StoreGuide;
  index: number;
  ctaLabel: string;
}) {
  const dotsVariant = index % 3 === 0 ? "mac" : "muted";

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[14px] bg-white">
      <div className="flex items-center justify-between px-4 py-3.5 sm:px-5 sm:py-4">
        <div className="flex min-w-0 items-baseline gap-1">
          <span className="truncate text-[14px] font-medium tracking-[-0.04em] text-[#0a0a0a] sm:text-[15px]">
            {guide.title}
          </span>
          <span className="shrink-0 text-[11px] font-medium tabular-nums text-[#090909]/60 sm:text-xs">
            /{guide.price}
          </span>
        </div>
        <DotsMenu variant={dotsVariant} />
      </div>

      <div className="relative mx-1 aspect-[5/4] overflow-hidden rounded-[12px] sm:aspect-[4/3]">
        <div className="absolute inset-0">
          <GuidePosterPreview guide={guide} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-4 py-4 sm:px-5 sm:py-5">
        <p className="text-[14px] leading-relaxed font-medium tracking-[-0.03em] text-[#0a0a0a]/60">
          {guide.blurb}
        </p>
        <BuyGuideButton
          guideId={guide.id}
          label={ctaLabel}
          fullWidth
          className="mt-auto"
        />
      </div>
    </article>
  );
}
