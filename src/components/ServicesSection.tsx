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

function CategoryPills({
  categories,
  extraCount,
}: {
  categories: string[];
  extraCount?: string;
}) {
  return (
    <div>
      <p className="mb-2 text-[12px] font-medium tracking-[-0.04em] text-white/55">
        Categories
      </p>
      <div className="flex flex-wrap gap-1.5">
        {categories.map((category) => (
          <span
            key={category}
            className="rounded-full border border-white/15 px-2.5 py-1 text-[12px] font-medium tracking-[-0.04em] text-white"
          >
            {category}
          </span>
        ))}
        {extraCount ? (
          <span className="rounded-full border border-white/15 px-2.5 py-1 text-[12px] font-medium tracking-[-0.04em] text-white/55">
            {extraCount}
          </span>
        ) : null}
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
    <div className={`border-b border-white/10 ${open ? "py-4 md:py-5" : "py-3.5 md:py-4"}`}>
      <div
        className={`grid grid-cols-[auto_1fr_auto] gap-3 md:grid-cols-[64px_minmax(0,1fr)_minmax(0,240px)_40px] md:gap-5 lg:grid-cols-[72px_minmax(0,1.2fr)_minmax(0,280px)_40px] lg:gap-6 ${open ? "items-start" : "items-center"}`}
      >
        <p
          className={`text-[13px] font-medium tracking-[-0.04em] md:text-[14px] ${open ? "text-white" : "text-white/55"}`}
        >
          ({service.number})
        </p>

        {open ? (
          <>
            <div className="col-span-2 flex flex-col gap-4 md:col-span-1 md:flex-row md:items-start md:gap-5">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[12px] md:h-[72px] md:w-[72px]">
                <Image
                  src={service.thumbnail}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="72px"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-[clamp(1.1rem,1.8vw,1.4rem)] leading-tight font-semibold tracking-[-0.04em] text-white">
                  {service.title}
                </h3>
                <ol className="mt-2.5 max-w-[520px] space-y-1.5 border-l border-white/15 pl-3">
                  {service.steps.map((step, index) => (
                    <li
                      key={step}
                      className="flex gap-2.5 text-[13px] leading-snug font-medium tracking-[-0.03em] text-white/55 md:text-[14px]"
                    >
                      <span className="shrink-0 tabular-nums text-white/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="col-span-2 md:col-span-1">
              <CategoryPills
                categories={service.categories}
                extraCount={service.extraCount}
              />
            </div>
          </>
        ) : (
          <button
            type="button"
            onClick={onToggle}
            className="col-span-1 flex items-center text-left md:col-span-2"
          >
            <h3 className="text-[clamp(1rem,1.7vw,1.25rem)] font-semibold tracking-[-0.04em] text-white/55 transition-colors hover:text-white/80">
              {service.title}
            </h3>
          </button>
        )}

        <div className="justify-self-end">
          <ToggleButton open={open} onClick={onToggle} />
        </div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="services"
      data-header-theme="dark"
      className="relative box-border flex min-h-[calc(100svh-61px)] scroll-mt-[61px] flex-col justify-center overflow-hidden bg-[#0a0a0a] px-6 py-8 md:px-9 md:py-10"
    >
      <NoiseOverlay />

      <div className="relative mx-auto w-full max-w-[1520px]">
        <div className="border-b border-white/10 pb-5 md:pb-6">
          <div className="text-center">
            <h2 className="text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-white">
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
