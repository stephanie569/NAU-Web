import Image from "next/image";
import { moreServicesSectionCopy } from "@/lib/sections";

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

export function MoreServicesSection() {
  const { label, headlineLead, headlineRest, contact } = moreServicesSectionCopy;

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] px-6 pb-[110px] pt-0 md:px-9 md:pb-[130px]">
      <NoiseOverlay />

      <div className="relative mx-auto w-full max-w-[1520px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,200px)_1fr] lg:items-start lg:gap-16 xl:grid-cols-[minmax(0,240px)_1fr]">
          <p className="text-[15px] font-medium tracking-[-0.04em] text-white/60 lg:pt-1">
            {label}
          </p>

          <div className="w-full lg:max-w-[760px] lg:justify-self-end">
            <p className="text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.25] font-medium tracking-[-0.04em] text-white/60">
              <span className="text-white">{headlineLead}</span>
              {headlineRest}
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full grayscale">
                <Image
                  src={contact.image}
                  alt={contact.name}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <p className="text-[15px] font-semibold tracking-[-0.04em] text-white">
                  {contact.name}
                </p>
                <p className="text-[13px] font-medium tracking-[-0.04em] text-white/60">
                  {contact.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
