import Image from "next/image";
import { NauButton } from "@/components/NauButton";
import { pageBottomCtaCopy } from "@/lib/sections";

function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-soft-light"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

export function PageBottomCTA() {
  const { ctaLead, ctaHighlight, ctaButton, ctaHref, contact } = pageBottomCtaCopy;

  return (
    <section
      data-header-theme="dark"
      className="relative flex flex-1 flex-col justify-end bg-[#0a0a0a] px-6 pt-10 pb-0 text-white sm:pt-12 md:px-9 md:pt-14"
    >
      <NoiseOverlay />

      <div className="relative z-10 mx-auto w-full max-w-[1520px]">
        <p className="max-w-[min(100%,58rem)] text-[clamp(1.85rem,3.6vw,3.35rem)] leading-[1.18] font-medium tracking-[-0.045em] text-white/55">
          {ctaLead}{" "}
          <span className="font-semibold text-white">{ctaHighlight}</span>
        </p>

        <div className="mt-8 flex flex-col gap-6 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <div className="flex min-w-0 items-center gap-4 sm:gap-5">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full sm:h-16 sm:w-16">
              <Image
                src={contact.image}
                alt={contact.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 56px, 64px"
              />
            </div>
            <div className="min-w-0">
              <p className="text-[16px] font-semibold tracking-[-0.04em] text-white sm:text-[17px]">
                {contact.name}
              </p>
              <p className="mt-0.5 text-[14px] font-medium tracking-[-0.04em] text-white/55 sm:text-[15px]">
                {contact.role}
              </p>
            </div>
          </div>

          <div className="shrink-0 self-start sm:self-center">
            <NauButton href={ctaHref} variant="light">
              {ctaButton}
            </NauButton>
          </div>
        </div>
      </div>
    </section>
  );
}
