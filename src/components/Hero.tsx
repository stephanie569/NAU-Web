"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { YouTubeBackgroundVideo } from "@/components/YouTubeBackgroundVideo";
import {
  heroBackgroundVideoId,
  heroServices,
  heroTeamLead,
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

function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full max-w-[320px] justify-self-end overflow-hidden rounded-2xl bg-white lg:shrink-0"
    >
      <div className="flex gap-0">
        <div className="w-[42%] shrink-0 p-1.5">
          <div className="relative aspect-[170/216] w-full overflow-hidden rounded-xl">
            <Image
              src={heroTeamLead.image}
              alt={heroTeamLead.name}
              fill
              className="object-cover"
              sizes="140px"
              priority
            />
          </div>
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-between gap-4 py-5 pr-4">
          <div>
            <p className="text-xs font-semibold tracking-[-0.04em] text-[#090909]/60">
              Every project is personally led by
            </p>
            <p className="mt-1 text-[18px] leading-tight font-semibold tracking-[-0.04em] text-[#090909]">
              {heroTeamLead.name}
            </p>
          </div>
          <Link
            href="/contact"
            className="flex items-center justify-between rounded-full bg-[#0a0a0a] py-2.5 pr-1.5 pl-4 text-[13px] font-semibold text-white transition-opacity hover:opacity-85"
          >
            <span>Start a Project</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
              <span className="h-2 w-2 rounded-full bg-[#0a0a0a]" />
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
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
            className="grid w-full grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-end lg:gap-8"
          >
            <div className="max-w-2xl lg:pr-8">
              <h2 className="text-[clamp(1.25rem,2.2vw,1.75rem)] leading-[1.35] font-semibold tracking-[-0.04em] text-white">
                Building products and stories{" "}
                <span className="text-white/70">
                  for brands that connect people with nature.
                </span>
              </h2>
            </div>

            <p className="hidden text-center text-sm font-medium tracking-[-0.02em] text-white/80 lg:block">
              Outdoor · Ocean · Sustainability
            </p>

            <ContactCard />

            <p className="text-sm font-medium tracking-[-0.02em] text-white/80 lg:hidden">
              Outdoor · Ocean · Sustainability
            </p>
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
