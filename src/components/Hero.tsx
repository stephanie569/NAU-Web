"use client";

import { motion } from "framer-motion";
import { YouTubeBackgroundVideo } from "@/components/YouTubeBackgroundVideo";
import {
  heroBackgroundVideoId,
} from "@/lib/hero";

function PlusIcon() {
  return (
    <span className="relative block h-3 w-3">
      <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-white" />
      <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-white" />
    </span>
  );
}

function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[1] opacity-[0.22] mix-blend-soft-light"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

export function HeroCard() {
  return (
    <div className="h-full pb-1">
      <div className="relative h-full overflow-hidden rounded-[25px] bg-[#0a0a0a]">
        <div className="absolute inset-0 overflow-hidden bg-[#0a0a0a]">
          <div className="absolute inset-0 grayscale opacity-70 [transform:translateZ(0)]">
            <YouTubeBackgroundVideo
              key={heroBackgroundVideoId}
              videoId={heroBackgroundVideoId}
            />
          </div>
          <NoiseOverlay />
        </div>

        <div className="relative z-10 flex h-full flex-col justify-between gap-8 px-5 py-8 sm:px-6 sm:py-10 md:px-9 md:py-[90px]">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full"
          >
            <div className="w-full lg:max-w-[72%]">
              <h1 className="text-[clamp(3.25rem,13vw,11rem)] leading-[0.85] font-semibold tracking-[-0.06em] text-white">
                nau
              </h1>
              <p className="mt-0 text-[clamp(1.75rem,4.5vw,3.2rem)] leading-[1.1] font-semibold tracking-[-0.06em] text-white">
                studio
              </p>
              <p className="mt-3 text-[clamp(0.95rem,1.6vw,1.25rem)] font-medium tracking-[-0.04em] text-white/70">
                by Stefani Dimitrova
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden w-full items-center justify-between px-4 md:flex lg:px-16"
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <PlusIcon key={i} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full"
          >
            <div className="max-w-3xl lg:max-w-4xl">
              <h2 className="text-[clamp(1.5rem,3.5vw,3.25rem)] leading-[1.2] font-semibold tracking-[-0.04em] text-white">
                Positioning. Organic go-to-market.{" "}
                <span className="text-white/70">
                  Content that{"\u00A0"}matters.
                </span>
              </h2>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="bg-white">
      <div className="h-[calc(100vh-61px)] px-1">
        <HeroCard />
      </div>
    </section>
  );
}
