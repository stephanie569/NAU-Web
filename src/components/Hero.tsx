"use client";

import { motion } from "framer-motion";
import { YouTubeBackgroundVideo } from "@/components/YouTubeBackgroundVideo";
import {
  heroBackgroundVideoId,
  heroServices,
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

        <div className="relative z-10 flex h-full flex-col justify-between px-6 py-10 md:px-9 md:py-[90px]">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:justify-between"
          >
            <div className="w-full lg:w-[70%] lg:pr-10">
              <div className="flex items-start gap-1 md:gap-2">
                <h1 className="text-[clamp(3.5rem,14vw,11rem)] leading-[0.83] font-semibold tracking-[-0.06em] text-white">
                  nau
                </h1>
              </div>
              <p className="mt-1 pl-[clamp(1.5rem,5vw,3.5rem)] text-[clamp(2rem,5vw,3.2rem)] leading-[1.2] font-semibold tracking-[-0.06em] text-white">
                Studio
              </p>
            </div>

            <ul className="flex w-full flex-col gap-2.5 lg:w-auto lg:items-end lg:gap-3">
              {heroServices.map((service, i) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="text-right text-[clamp(0.95rem,1.6vw,1.125rem)] font-medium tracking-[-0.04em] text-white"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
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
            <div className="max-w-4xl">
              <h2 className="text-[clamp(1.75rem,3.8vw,3.25rem)] leading-[1.2] font-semibold tracking-[-0.04em] text-white">
                Good products need more than content.{" "}
                <span className="text-white/70">
                  They need a reason to{"\u00A0"}matter.
                </span>
              </h2>
              <p className="mt-5 max-w-2xl text-[clamp(0.95rem,1.5vw,1.125rem)] leading-relaxed font-medium tracking-[-0.04em] text-white/70">
                I work alongside founders and product teams to research their
                market, sharpen their positioning, shape their launch strategy
                and create the content that brings it all to life.
              </p>
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
