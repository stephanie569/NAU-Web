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
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-white/50"
    >
      <span className="relative block h-3 w-3">
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
      <p className="mb-4 text-[13px] font-medium tracking-[-0.04em] text-white/60">
        Categories
      </p>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <span
            key={category}
            className="rounded-full border border-white/15 px-3.5 py-1.5 text-[13px] font-medium tracking-[-0.04em] text-white"
          >
            {category}
          </span>
        ))}
        {extraCount ? (
          <span className="rounded-full border border-white/15 px-3.5 py-1.5 text-[13px] font-medium tracking-[-0.04em] text-white/60">
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
    <div className={`border-b border-white/10 ${open ? "py-10" : "py-8"}`}>
      <div
        className={`grid grid-cols-[auto_1fr_auto] gap-4 md:grid-cols-[72px_minmax(0,1fr)_minmax(0,280px)_48px] md:gap-8 lg:grid-cols-[88px_minmax(0,1.2fr)_minmax(0,320px)_48px] lg:gap-10 ${open ? "items-start" : "items-center"}`}
      >
        <p
          className={`text-[15px] font-medium tracking-[-0.04em] ${open ? "text-white" : "text-white/60"}`}
        >
          ({service.number})
        </p>

        {open ? (
          <>
            <div className="col-span-2 flex flex-col gap-6 md:col-span-1 md:flex-row md:items-start md:gap-8">
              <div className="relative h-[88px] w-[88px] shrink-0 overflow-hidden rounded-[14px] md:h-[100px] md:w-[100px]">
                <Image
                  src={service.thumbnail}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="100px"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-[clamp(1.25rem,2.2vw,1.75rem)] leading-tight font-semibold tracking-[-0.04em] text-white">
                  {service.title}
                </h3>
                <ol className="mt-4 max-w-[560px] space-y-2.5 border-l border-white/15 pl-4">
                  {service.steps.map((step, index) => (
                    <li
                      key={step}
                      className="flex gap-3 text-[14px] leading-relaxed font-medium tracking-[-0.03em] text-white/60 md:text-[15px]"
                    >
                      <span className="shrink-0 tabular-nums text-white/35">
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
            <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-semibold tracking-[-0.04em] text-white/60 transition-colors hover:text-white/80">
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
      className="relative scroll-mt-[61px] overflow-hidden bg-[#0a0a0a] px-6 pb-20 pt-16 md:px-9 md:pb-28 md:pt-24"
    >
      <NoiseOverlay />

      <div className="relative mx-auto w-full max-w-[1520px]">
        <div className="border-b border-white/10 py-10 md:py-12">
          <div className="text-center">
            <h2 className="text-[clamp(2.75rem,7vw,4.75rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-white">
              Services.
            </h2>
          </div>
        </div>

        <div className="border-t border-white/10">
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
