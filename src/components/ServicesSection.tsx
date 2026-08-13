"use client";

import { useState } from "react";
import Image from "next/image";
import { servicesItems } from "@/lib/sections";

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

function ToggleButton({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-white/50"
    >
      <span className="relative block h-2.5 w-2.5">
        <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-white" />
        {!open && (
          <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-white" />
        )}
      </span>
    </button>
  );
}

function CategoryPills({ categories }: { categories: string[] }) {
  const visible = categories.slice(0, 4);

  return (
    <div>
      <p className="mb-2 text-[12px] font-medium tracking-[-0.04em] text-white/55">
        Categories
      </p>
      <div className="grid grid-cols-2 gap-1.5">
        {visible.map((category) => (
          <span
            key={category}
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-2.5 py-1 text-center text-[12px] font-medium tracking-[-0.04em] text-white"
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
}

function ServiceRow({
  service,
  open,
  onToggle,
}: {
  service: (typeof servicesItems)[number];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`border-b border-white/10 ${open ? "py-5 md:py-6" : "py-4 md:py-5"}`}>
      {/* Collapsed: same compact row on all breakpoints */}
      {!open ? (
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 md:grid-cols-[72px_minmax(0,1fr)_44px] md:gap-5 lg:grid-cols-[80px_minmax(0,1fr)_44px] lg:gap-7">
          <p className="text-[14px] font-medium tracking-[-0.04em] text-white/55 md:text-[15px]">
            ({service.number})
          </p>
          <button
            type="button"
            onClick={onToggle}
            className="min-w-0 text-left"
          >
            <h3 className="text-[clamp(1.15rem,2vw,1.5rem)] font-semibold tracking-[-0.04em] text-white/55 transition-colors hover:text-white/80">
              {service.title}
            </h3>
          </button>
          <div className="justify-self-end">
            <ToggleButton open={open} onClick={onToggle} />
          </div>
        </div>
      ) : (
        <>
          {/* Mobile open layout: header → full-bleed photo → copy → categories */}
          <div className="md:hidden">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[14px] font-medium tracking-[-0.04em] text-white">
                  ({service.number})
                </p>
                <h3 className="mt-1.5 text-[1.35rem] leading-tight font-semibold tracking-[-0.04em] text-white">
                  {service.title}
                </h3>
              </div>
              <ToggleButton open={open} onClick={onToggle} />
            </div>

            <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden rounded-[16px]">
              <Image
                src={service.thumbnail}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
                priority={false}
              />
            </div>

            <p className="mt-4 text-[14px] leading-[1.45] font-medium tracking-[-0.03em] text-white/55">
              {service.summary}
            </p>

          </div>

          {/* Desktop open layout: number | thumb+copy | categories | toggle */}
          <div className="hidden grid-cols-[72px_minmax(0,1fr)_minmax(0,260px)_44px] items-start gap-5 md:grid lg:grid-cols-[80px_minmax(0,1.2fr)_minmax(0,300px)_44px] lg:gap-7">
            <p className="text-[15px] font-medium tracking-[-0.04em] text-white">
              ({service.number})
            </p>

            <div className="flex items-start gap-6">
              <div className="relative h-[88px] w-[88px] shrink-0 overflow-hidden rounded-[14px]">
                <Image
                  src={service.thumbnail}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="88px"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-[clamp(1.25rem,2.2vw,1.65rem)] leading-tight font-semibold tracking-[-0.04em] text-white">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-[560px] text-[15px] leading-snug font-medium tracking-[-0.03em] text-white/55">
                  {service.summary}
                </p>
              </div>
            </div>

            <CategoryPills categories={service.categories} />

            <div className="justify-self-end">
              <ToggleButton open={open} onClick={onToggle} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export function ServicesSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="services"
      data-header-theme="dark"
      className="relative box-border flex min-h-[calc(100svh-61px)] scroll-mt-[61px] flex-col justify-center overflow-hidden bg-[#0a0a0a] px-6 py-14 md:px-9 md:py-16"
    >
      <NoiseOverlay />

      <div className="relative mx-auto w-full max-w-[1520px]">
        <div className="border-b border-white/10 pb-6 md:pb-8">
          <div className="text-center">
            <h2 className="text-[clamp(2.75rem,7vw,4.75rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-white">
              Services.
            </h2>
          </div>
        </div>

        <div>
          {servicesItems.map((service, index) => (
            <ServiceRow
              key={service.number}
              service={service}
              open={openIndex === index}
              onToggle={() =>
                setOpenIndex((current) => (current === index ? -1 : index))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
