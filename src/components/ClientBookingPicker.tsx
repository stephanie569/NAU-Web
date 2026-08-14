import Image from "next/image";
import type { ClientPlanner } from "@/lib/clients";

export function NatureCoverOverlay() {
  return (
    <>
      <div className="absolute inset-0 bg-[#0a1628]/20" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,24,48,0.12)_45%,rgba(0,0,0,0.58)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/55"
        aria-hidden
      />
    </>
  );
}

function CardStars({ compact }: { compact: boolean }) {
  return (
    <div className={`flex gap-0.5 ${compact ? "mt-0.5" : "mt-1"}`} aria-hidden>
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={`text-[#f0c040] ${compact ? "text-[6px]" : "text-[7px] sm:text-[8px]"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function PackageCard({
  pkg,
  variant,
  compact,
}: {
  pkg: ClientPlanner["packages"][number];
  variant: "side" | "center";
  compact: boolean;
}) {
  const isCenter = variant === "center";

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-[20px] border border-white/55 bg-[#0a1628] shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-all ${
        isCenter
          ? compact
            ? "h-[10.5rem] w-[6.75rem]"
            : "h-[15.5rem] w-[10rem] sm:h-[17rem] sm:w-[11.25rem]"
          : compact
            ? "h-[9rem] w-[5.75rem]"
            : "h-[13rem] w-[8.25rem] sm:h-[14.5rem] sm:w-[9rem]"
      }`}
    >
      <Image
        src={pkg.image}
        alt=""
        fill
        className="object-cover"
        sizes={compact ? "108px" : "180px"}
      />
      <div className="absolute inset-0 bg-[#061018]/72" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/88"
        aria-hidden
      />

      <div className={`absolute inset-x-0 top-0 ${compact ? "p-2" : "p-3 sm:p-3.5"}`}>
        <p
          className={`font-bold leading-tight tracking-[-0.03em] text-white ${
            compact ? "text-[10px]" : "text-[13px] sm:text-[14px]"
          }`}
        >
          {pkg.destination}
        </p>
        <p
          className={`mt-0.5 font-medium text-white/90 ${
            compact ? "text-[8px]" : "text-[10px] sm:text-[11px]"
          }`}
        >
          {pkg.region}
        </p>
        <div
          className={`space-y-0.5 font-medium text-white ${
            compact ? "mt-1.5 text-[7px] leading-snug" : "mt-2 text-[8px] leading-snug sm:text-[9px]"
          }`}
        >
          <p>{pkg.accommodation}</p>
          <p>{pkg.activity}</p>
          <p>{pkg.eventManager}</p>
        </div>
      </div>

      <div
        className={`absolute inset-x-0 bottom-0 flex items-end justify-between ${
          compact ? "p-2" : "p-3 sm:p-3.5"
        }`}
      >
        <div>
          <p
            className={`font-semibold text-white ${
              compact ? "text-[9px]" : "text-[11px] sm:text-[12px]"
            }`}
          >
            {pkg.rating}
          </p>
          <CardStars compact={compact} />
          <p
            className={`font-normal text-white/85 ${
              compact ? "mt-0.5 text-[7px]" : "mt-1 text-[9px] sm:text-[10px]"
            }`}
          >
            See more »
          </p>
        </div>

        <span
          className={`flex shrink-0 items-center justify-center rounded-full bg-white text-[#111] shadow-[0_4px_14px_rgba(0,0,0,0.25)] ${
            compact ? "h-6 w-6 text-[15px] leading-none" : "h-8 w-8 text-[18px] leading-none sm:h-9 sm:w-9"
          }`}
        >
          {isCenter && pkg.selected ? "✓" : "+"}
        </span>
      </div>
    </div>
  );
}

export function ClientBookingPicker({
  planner,
  logo,
  compact = false,
}: {
  planner: ClientPlanner;
  logo?: string;
  compact?: boolean;
}) {
  const selectedIndex = Math.max(
    0,
    planner.packages.findIndex((pkg) => pkg.selected),
  );
  const sideIndices = [
    (selectedIndex - 1 + planner.packages.length) % planner.packages.length,
    selectedIndex,
    (selectedIndex + 1) % planner.packages.length,
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] flex flex-col">
      {logo ? (
        <div
          className={`absolute z-[2] ${
            compact ? "top-2 right-2" : "top-3.5 right-3.5 sm:top-4 sm:right-4"
          }`}
        >
          <div
            className={`flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm ${
              compact ? "px-1.5 py-0.5" : "px-2 py-1"
            }`}
          >
            <div
              className={`relative opacity-75 ${
                compact ? "h-3 w-12" : "h-3.5 w-14"
              }`}
            >
              <Image
                src={logo}
                alt=""
                fill
                className="object-contain object-center invert"
                sizes="56px"
              />
            </div>
          </div>
        </div>
      ) : null}

      <div
        className={`relative z-[1] flex min-h-0 flex-1 flex-col ${
          compact ? "px-2.5 pt-2.5 pb-2" : "px-4 pt-4 pb-3 sm:px-5 sm:pt-5 sm:pb-4"
        }`}
      >
        <div className={compact ? "pr-14" : "pr-16"}>
          <p
            className={`font-semibold tracking-[-0.045em] text-white ${
              compact ? "text-[11px]" : "text-[15px] sm:text-[17px]"
            }`}
          >
            {planner.title}
          </p>
          <p
            className={`mt-0.5 font-medium text-white/65 ${
              compact ? "text-[8px]" : "text-[10px] sm:text-[11px]"
            }`}
          >
            {planner.summary}
          </p>
        </div>

        <div
          className={`mt-2 flex shrink-0 items-center rounded-full border border-white/35 bg-white/10 p-0.5 backdrop-blur-md ${
            compact ? "gap-0.5" : "mt-2.5 gap-1"
          }`}
        >
          {planner.categories.map((category) => (
            <span
              key={category.label}
              className={`rounded-full font-medium tracking-[-0.03em] ${
                compact ? "px-2 py-0.5 text-[8px]" : "px-2.5 py-1 text-[9px] sm:text-[10px]"
              } ${
                category.active ? "bg-white/25 text-white" : "text-white/45"
              }`}
            >
              {category.label}
            </span>
          ))}
        </div>

        <div
          className={`flex min-h-0 flex-1 items-center justify-center ${
            compact ? "gap-1.5 py-1" : "gap-2 py-2 sm:gap-3 sm:py-3"
          }`}
        >
          {sideIndices.map((packageIndex, displayIndex) => (
            <PackageCard
              key={planner.packages[packageIndex].destination}
              pkg={planner.packages[packageIndex]}
              variant={displayIndex === 1 ? "center" : "side"}
              compact={compact}
            />
          ))}
        </div>

        <div
          className={`shrink-0 rounded-full border border-white/70 bg-white/92 font-semibold tracking-[-0.03em] text-[#111] shadow-[0_8px_24px_rgba(0,0,0,0.18)] ${
            compact
              ? "mx-auto flex w-full max-w-[11rem] items-center justify-center gap-1.5 py-1.5 text-[9px]"
              : "mx-auto flex w-full max-w-[14rem] items-center justify-center gap-2 py-2 text-[11px] sm:max-w-[15rem] sm:text-[12px]"
          }`}
        >
          <span>{planner.confirmLabel}</span>
          <span aria-hidden>→</span>
        </div>
      </div>
    </div>
  );
}
