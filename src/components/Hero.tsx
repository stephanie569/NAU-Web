"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { NauButton } from "@/components/NauButton";
import { NauLogoMark } from "@/components/NauLogoMark";
import { YouTubeBackgroundVideo } from "@/components/YouTubeBackgroundVideo";
import { heroBackgroundVideoId } from "@/lib/hero";

const heroServices = [
  "Research & Positioning",
  "Content Creation",
  "Marketing Strategy",
];

function PlusIcon() {
  return (
    <span className="relative block h-3 w-3" aria-hidden>
      <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-white/70" />
      <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-white/70" />
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

function ReadabilityGradient() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[2]"
      style={{
        background: `
          linear-gradient(
            115deg,
            rgba(10, 10, 10, 0.55) 0%,
            rgba(10, 10, 10, 0.2) 45%,
            rgba(10, 10, 10, 0.35) 100%
          ),
          linear-gradient(
            to top,
            rgba(10, 10, 10, 0.5) 0%,
            rgba(10, 10, 10, 0) 38%
          )
        `,
      }}
    />
  );
}

function HeroProfileCard() {
  return (
    <div className="flex max-w-[400px] rounded-[20px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.28)]">
      <div className="relative w-[132px] shrink-0 self-stretch overflow-hidden rounded-l-[20px] sm:w-[148px]">
        <Image
          src="/images/stefani-dimitrova-portrait.jpg"
          alt="Stefani Dimitrova"
          fill
          className="object-cover object-top"
          sizes="148px"
          priority
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-3.5 px-5 py-5 sm:px-6 sm:py-6">
        <div>
          <p className="text-[13px] font-medium tracking-[-0.04em] text-[#0a0a0a]/55">
            Founder at nau studio
          </p>
          <p className="mt-1.5 text-[19px] leading-tight font-semibold tracking-[-0.04em] text-[#0a0a0a] sm:text-[20px]">
            Stefani Dimitrova
          </p>
        </div>
        <NauButton href="/contact">Work with me</NauButton>
      </div>
    </div>
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
          <ReadabilityGradient />
        </div>

        <div className="relative z-10 flex h-full flex-col justify-between px-5 py-6 sm:px-6 sm:py-10 md:px-9 md:py-14 lg:py-[72px]">
          {/* Top: brand + services */}
          <div className="flex items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h1 className="m-0 leading-none">
                <span className="sr-only">nau studio</span>
                <NauLogoMark className="text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]" />
              </h1>
              <p className="mt-3 pl-0.5 text-[clamp(1.55rem,3.1vw,2.4rem)] font-medium tracking-[-0.04em] text-white/75">
                Studio
              </p>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden shrink-0 flex-col items-end gap-2.5 sm:flex md:gap-3"
            >
              {heroServices.map((label, i) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.28 + i * 0.08 }}
                  className="text-right text-[clamp(1rem,1.6vw,1.2rem)] font-medium leading-none tracking-[-0.04em] text-white/85"
                >
                  {label}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Middle: plus marks */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.65 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden w-full items-center justify-between px-2 md:flex lg:px-10"
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <PlusIcon key={i} />
            ))}
          </motion.div>

          {/* Bottom: tagline + profile card */}
          <div className="grid grid-cols-1 items-end gap-5 sm:gap-8 lg:grid-cols-[1fr_auto] lg:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="max-w-md lg:max-w-xl"
            >
              <p className="text-[clamp(1.75rem,3.8vw,3.15rem)] leading-[1.12] font-semibold tracking-[-0.04em] text-white">
                Making good products
                <br />
                hard to{"\u00A0"}ignore
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.55,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="justify-self-start lg:justify-self-end"
            >
              <HeroProfileCard />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="bg-white">
      <div className="h-[calc(100dvh-61px-1.75rem)] px-1 sm:h-[calc(100vh-61px)]">
        <HeroCard />
      </div>
    </section>
  );
}
