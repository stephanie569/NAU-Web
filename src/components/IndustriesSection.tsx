"use client";

import { industriesSectionCopy } from "@/lib/sections";
import { VideoPlatforms } from "@/components/VideoPlatforms";

function TravelTechIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden
      className="text-white/75"
    >
      <rect
        x="8"
        y="3.5"
        width="12"
        height="21"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 6.5h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="14" cy="21" r="1" fill="currentColor" />
      <path
        d="M11 12.5c1.2-1.4 2.4-1.4 3.5 0s2.3 1.4 3.5 0"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        className="industry-route-draw origin-center"
        pathLength={1}
      />
      <circle
        cx="11"
        cy="12.5"
        r="1.35"
        fill="currentColor"
        className="industry-route-pin"
      />
    </svg>
  );
}

function ConsumerGoodsIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden
      className="text-white/75"
    >
      <g className="industry-bag-sway origin-[14px_9px]">
        <path
          d="M7.5 10.5h13l-1.2 11.2a2 2 0 0 1-2 1.8H10.7a2 2 0 0 1-2-1.8L7.5 10.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 10.5V9a3.5 3.5 0 0 1 7 0v1.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
      <rect
        x="12.25"
        y="4"
        width="3.5"
        height="3.5"
        rx="0.7"
        stroke="currentColor"
        strokeWidth="1.2"
        className="industry-product-drop"
      />
    </svg>
  );
}

function TravelMediaIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden
      className="text-white/75"
    >
      <path
        d="M6.5 6.5h11.5a3.5 3.5 0 0 1 3.5 3.5v11H10A3.5 3.5 0 0 1 6.5 17.5V6.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10 21.5h11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10.5 10.5h7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="industry-line-a"
      />
      <path
        d="M10.5 14h5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="industry-line-b"
      />
      <path
        d="M10.5 17.5h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="industry-line-c"
      />
    </svg>
  );
}

function IndustryIcon({ name }: { name: string }) {
  if (name === "Travel tech") return <TravelTechIcon />;
  if (name === "Consumer goods") return <ConsumerGoodsIcon />;
  return <TravelMediaIcon />;
}

export function IndustriesSection() {
  const { title, lead, items } = industriesSectionCopy;

  return (
    <section
      id="industries"
      data-header-theme="dark"
      className="relative box-border flex min-h-[calc(100svh+4rem)] scroll-mt-[61px] flex-col justify-center overflow-x-hidden bg-[#0a0a0a] px-6 py-16 md:px-9 md:py-20 lg:py-24"
    >
      <div className="relative mx-auto w-full max-w-[1520px]">
        <div className="mb-10 text-center md:mb-12">
          <h2 className="text-[clamp(2.75rem,7vw,4.75rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-white">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-[36rem] text-[14px] leading-relaxed font-medium tracking-[-0.03em] text-white/55 md:text-[15px]">
            {lead}
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-3 md:gap-4">
          {items.map((item, index) => (
            <li
              key={item.name}
              className="group flex min-h-[280px] flex-col rounded-[18px] border border-white/10 bg-white/[0.03] p-5 md:min-h-[300px] md:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 transition-colors duration-300 group-hover:border-white/35">
                  <IndustryIcon name={item.name} />
                </span>
                <p className="text-[12px] font-semibold tracking-[-0.04em] text-white/35 tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>

              <div className="mt-auto pt-8">
                <h3 className="text-[clamp(1.35rem,2.4vw,1.75rem)] leading-tight font-semibold tracking-[-0.05em] text-white">
                  {item.name}
                </h3>
                <p className="mt-2.5 min-h-[4.5em] text-[14px] leading-relaxed font-medium tracking-[-0.03em] text-white/55 md:text-[15px]">
                  {item.blurb}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {item.focuses.map((focus) => (
                    <li
                      key={focus}
                      className="rounded-full border border-white/12 px-2.5 py-1 text-[11px] font-medium tracking-[-0.03em] text-white/65"
                    >
                      {focus}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 border-t border-white/10 pt-8 md:mt-12 md:pt-10">
          <VideoPlatforms tone="dark" />
        </div>
      </div>
    </section>
  );
}
