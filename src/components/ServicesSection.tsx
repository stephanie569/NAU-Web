"use client";

import Image from "next/image";
import { servicesItems, servicesSectionCopy } from "@/lib/sections";

type Service = (typeof servicesItems)[number];

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

function SupportService({ service }: { service: Service }) {
  return (
    <article className="rounded-[18px] border border-white/10 bg-white/[0.03] px-5 py-5 md:px-6 md:py-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="text-[13px] font-medium tracking-[-0.04em] text-white/40">
          ({service.number}) · {service.role}
        </p>
        <p className="text-[12px] font-medium tracking-[-0.04em] text-white/30">
          {service.categories.slice(0, 3).join(" · ")}
        </p>
      </div>

      <h3 className="mt-2 text-[clamp(1.2rem,2.4vw,1.55rem)] leading-tight font-semibold tracking-[-0.045em] text-white/75">
        {service.title}
      </h3>

      <p className="mt-3 max-w-[40rem] text-[14px] leading-relaxed font-medium tracking-[-0.03em] text-white/45 md:text-[15px]">
        {service.summary}
      </p>
    </article>
  );
}

function FeaturedService({ service }: { service: Service }) {
  return (
    <article className="overflow-hidden rounded-[22px] border border-white/15 bg-white/[0.06]">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="relative aspect-[16/11] bg-white/5 sm:aspect-[16/10] lg:aspect-auto lg:min-h-[320px]">
          <Image
            src={service.thumbnail}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority={false}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/55 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0a0a0a]/25"
          />
        </div>

        <div className="flex flex-col justify-between gap-8 px-5 py-6 sm:px-7 sm:py-8 md:px-8 md:py-9">
          <div>
            <p className="text-[13px] font-medium tracking-[-0.04em] text-white/45">
              ({service.number}) · {service.role}
            </p>
            <h3 className="mt-2 text-[clamp(1.75rem,4.5vw,2.6rem)] leading-[1.02] font-semibold tracking-[-0.055em] text-white">
              {service.title}
            </h3>
            <p className="mt-4 max-w-[34rem] text-[15px] leading-relaxed font-medium tracking-[-0.03em] text-white/60 md:text-[16px]">
              {service.summary}
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            <p className="text-[13px] font-medium tracking-[-0.04em] text-white/50">
              {service.categories.join(" · ")}
            </p>
            <p className="max-w-[18rem] text-[13px] leading-snug font-medium tracking-[-0.03em] text-white/35 sm:text-right">
              Research feeds the brief. Strategy carries the series. This is the
              package in the middle.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ServicesSection() {
  const featured =
    servicesItems.find((item) => item.featured) ?? servicesItems[1];
  const support = servicesItems.filter((item) => !item.featured);

  return (
    <section
      id="services"
      data-header-theme="dark"
      className="relative box-border flex min-h-[calc(100svh-61px)] scroll-mt-[61px] flex-col justify-center overflow-hidden bg-[#0a0a0a] px-6 py-12 md:px-9 md:py-14"
    >
      <NoiseOverlay />

      <div className="relative mx-auto w-full max-w-[1520px]">
        <div className="mb-8 grid grid-cols-1 gap-4 border-b border-white/10 pb-7 md:mb-10 md:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] md:items-end md:gap-12 md:pb-9">
          <h2 className="text-[clamp(3rem,7.5vw,5rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-white">
            {servicesSectionCopy.title}
          </h2>
          <p className="max-w-[26rem] text-[15px] leading-relaxed font-medium tracking-[-0.03em] text-white/50 md:justify-self-end md:text-right">
            {servicesSectionCopy.lead}
          </p>
        </div>

        <div className="flex flex-col gap-3 md:gap-4">
          <SupportService service={support[0]} />

          <div className="relative py-1 md:py-2">
            <div
              aria-hidden
              className="pointer-events-none absolute top-0 bottom-0 left-6 hidden w-px bg-gradient-to-b from-white/10 via-white/25 to-white/10 sm:left-8 md:block"
            />
            <FeaturedService service={featured} />
          </div>

          <SupportService service={support[1]} />
        </div>
      </div>
    </section>
  );
}
