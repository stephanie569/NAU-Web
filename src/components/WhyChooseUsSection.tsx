"use client";

import Image from "next/image";
import { whyChooseUsCopy } from "@/lib/sections";

function PlusBadge({
  size = "md",
  variant = "dark",
}: {
  size?: "md" | "sm";
  variant?: "dark" | "light";
}) {
  const dim = size === "sm" ? "h-8 w-8" : "h-10 w-10";
  const line = size === "sm" ? "w-2.5" : "w-3";
  const vert = size === "sm" ? "h-2.5" : "h-3";
  const bg = variant === "light" ? "bg-white/90" : "bg-[#0a0a0a]";
  const fg = variant === "light" ? "bg-[#0a0a0a]" : "bg-white";

  return (
    <span
      className={`relative flex ${dim} shrink-0 items-center justify-center rounded-full ${bg}`}
    >
      <span className={`absolute h-px ${line} ${fg}`} />
      <span className={`absolute ${vert} w-px ${fg}`} />
    </span>
  );
}

function StatIndex({ number }: { number: string }) {
  return (
    <p className="absolute top-6 right-6 text-[13px] font-medium tracking-[-0.04em] text-[#0a0a0a]/60 md:top-8 md:right-8">
      {number}
    </p>
  );
}

function StatValue({ value }: { value: string }) {
  return (
    <p className="text-[clamp(2.5rem,6vw,4.5rem)] leading-none font-semibold tracking-[-0.06em] text-[#0a0a0a]">
      {value}
    </p>
  );
}

function StatsGrid() {
  const { projects, satisfaction } = whyChooseUsCopy.stats;

  return (
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
      <div className="relative flex min-h-[360px] flex-col justify-between rounded-[14px] bg-white p-6 md:min-h-[420px] md:p-8">
        <StatIndex number={projects.number} />
        <StatValue value={projects.value} />
        <p className="self-end max-w-[210px] text-right text-[15px] leading-snug font-medium tracking-[-0.04em] text-[#0a0a0a]">
          {projects.label}
        </p>
        <p className="max-w-[340px] text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-[#0a0a0a]/60">
          {projects.description}
        </p>
      </div>

      <div className="flex min-h-[360px] flex-col gap-1 md:min-h-[420px]">
        <div className="relative min-h-[160px] rounded-[14px] bg-white p-6 md:min-h-[180px] md:p-8">
          <StatIndex number={satisfaction.number} />
          <StatValue value={satisfaction.value} />
        </div>

        <div className="flex flex-1 flex-col justify-between rounded-[14px] bg-white p-6 md:p-8">
          <p className="self-end max-w-[210px] text-right text-[15px] leading-snug font-medium tracking-[-0.04em] text-[#0a0a0a]">
            {satisfaction.label}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-6 pt-2">
            {satisfaction.logos.map((logo) => (
              <div
                key={logo.src}
                className="relative shrink-0 opacity-60"
                style={{ width: logo.width, height: logo.height }}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain object-left"
                  sizes={`${logo.width}px`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function WhyChooseUsSection() {
  const { headline, description, image } = whyChooseUsCopy;

  return (
    <section className="bg-[#f5f5f5] px-6 pt-[110px] pb-28 md:px-9">
      <div className="mx-auto w-full max-w-[1520px]">
        <div className="mb-[90px] grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:items-start lg:gap-16">
          <div className="flex items-center gap-3">
            <PlusBadge />
            <p className="text-[15px] font-medium tracking-[-0.04em] text-[#0a0a0a]">
              Why work with me
            </p>
          </div>

          <h2 className="text-[clamp(2.25rem,5.5vw,4.75rem)] leading-[1.05] font-semibold tracking-[-0.06em] text-[#0a0a0a]">
            {headline.primary}{" "}
            <span className="text-[#0a0a0a]/60">{headline.secondary}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(320px,400px)_1fr] lg:items-stretch lg:gap-14 xl:grid-cols-[minmax(360px,440px)_1fr] xl:gap-20">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[18px] lg:aspect-auto lg:h-full lg:min-h-0">
            <Image
              src={image}
              alt="Portrait"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />
            <div className="absolute top-5 right-5">
              <PlusBadge size="sm" variant="light" />
            </div>
          </div>

          <div className="flex h-full flex-col gap-10">
            <p className="max-w-[420px] text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-[#0a0a0a]/60">
              <span className="text-[#0a0a0a]">{description.bold}</span>{" "}
              {description.rest}
            </p>

            <div className="mt-auto">
              <StatsGrid />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
