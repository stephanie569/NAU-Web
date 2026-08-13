"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { StoreGuide } from "@/lib/sections";

function PosterNoise() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[2] opacity-[0.22] mix-blend-soft-light"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

function GuidePoster({ guide }: { guide: StoreGuide }) {
  const { poster } = guide;

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-[6px] border border-white/15 shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
      <Image
        src={poster.image}
        alt=""
        fill
        className="object-cover"
        sizes="380px"
        priority={false}
      />

      {/* Strong readability wash: keeps photos visible but text readable */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1]"
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(8,8,8,0.78) 0%,
              rgba(8,8,8,0.42) 28%,
              rgba(8,8,8,0.28) 48%,
              rgba(8,8,8,0.55) 68%,
              rgba(8,8,8,0.9) 100%
            )
          `,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(135deg, ${poster.gradientFrom}99 0%, transparent 50%)`,
        }}
      />
      <PosterNoise />

      {/* Print frame */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-3 z-[3] rounded-[2px] border border-white/35"
      />

      <div className="relative z-[4] flex h-full flex-col px-5 py-4 sm:px-6 sm:py-5">
        <div className="flex items-center justify-between border-b border-white/25 pb-2.5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
            nau presents
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
            {poster.industry}
          </p>
        </div>

        <div className="mt-4 rounded-[4px] bg-black/35 px-3 py-3 text-center backdrop-blur-[2px]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/75">
            {poster.label} night
          </p>
          <h4 className="mt-2 text-[clamp(1.6rem,4.2vw,2.25rem)] leading-[0.9] font-semibold uppercase tracking-[-0.04em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]">
            {poster.headline}
          </h4>
          <p
            className="mt-1.5 text-[clamp(1.05rem,2.6vw,1.35rem)] leading-none font-semibold uppercase tracking-[0.08em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]"
            style={{ color: poster.accent }}
          >
            {poster.subline}
          </p>
        </div>

        <div className="mt-auto rounded-[4px] border border-white/15 bg-black/45 px-3 py-3 backdrop-blur-[2px]">
          <p className="text-center text-[11px] font-medium tracking-[-0.02em] text-white/85">
            {poster.tagline}
          </p>
          <div className="mt-2.5 flex items-end justify-between gap-3 border-t border-dashed border-white/25 pt-2.5">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/55">
                admit one
              </p>
              <p className="mt-0.5 text-[12px] font-semibold tracking-[-0.03em] text-white">
                digital guide
              </p>
            </div>
            <div className="text-right">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/55">
                door
              </p>
              <p className="mt-0.5 text-[clamp(1.25rem,3vw,1.6rem)] leading-none font-semibold tracking-[-0.04em] text-white tabular-nums">
                {guide.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const AUTO_ADVANCE_MS = 4500;

export function GuideShowcase({ guides }: { guides: StoreGuide[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const activeGuide = guides[activeIndex];

  useEffect(() => {
    if (guides.length <= 1 || paused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % guides.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [guides.length, paused]);

  if (!activeGuide) return null;

  return (
    <div
      className="w-full lg:max-w-[380px] lg:justify-self-end"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeGuide.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <GuidePoster guide={activeGuide} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
