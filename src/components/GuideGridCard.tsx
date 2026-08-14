"use client";

import Link from "next/link";
import { GuideComingSoonCover } from "@/components/GuideComingSoonCover";
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
          <GuideComingSoonCover />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-4 py-4 sm:px-5 sm:py-5">
        <p className="text-[14px] leading-relaxed font-medium tracking-[-0.03em] text-[#0a0a0a]/60">
          {guide.blurb}
        </p>
        <Link
          href={`/products/${guide.id}`}
          className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-[#0a0a0a] px-4 py-2.5 text-[13px] font-semibold tracking-[-0.03em] text-white transition-opacity hover:opacity-90"
        >
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
}
