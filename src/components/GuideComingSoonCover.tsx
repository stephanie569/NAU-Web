import Image from "next/image";
import type { StoreGuide } from "@/lib/sections";

export function GuideComingSoonCover({
  padded = false,
  guide,
}: {
  padded?: boolean;
  guide?: StoreGuide;
}) {
  const poster = guide?.poster;

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0a0a0a]">
      {poster?.image ? (
        <Image
          src={poster.image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
      ) : null}

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: poster?.image
            ? `
              linear-gradient(
                180deg,
                rgba(8,8,8,0.72) 0%,
                rgba(8,8,8,0.38) 32%,
                rgba(8,8,8,0.28) 52%,
                rgba(8,8,8,0.55) 72%,
                rgba(8,8,8,0.88) 100%
              ),
              linear-gradient(135deg, ${poster.gradientFrom}aa 0%, transparent 55%)
            `
            : `
              radial-gradient(120% 80% at 12% -10%, rgba(91, 75, 155, 0.5) 0%, transparent 52%),
              radial-gradient(90% 70% at 110% 110%, rgba(0, 168, 232, 0.38) 0%, transparent 48%),
              #0a0a0a
            `,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div
        className={`relative z-[1] flex h-full flex-col justify-between ${
          padded ? "p-5 sm:p-7" : "p-4 sm:p-5"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/20 pb-2 sm:pb-3">
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/80 sm:text-[10px]">
            nau presents
          </p>
          <p className="rounded-full border border-white/20 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-white/80 sm:text-[9px]">
            Coming soon
          </p>
        </div>

        <div className="text-center">
          {poster ? (
            <>
              <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/70 sm:text-[10px]">
                {poster.tagline}
              </p>
              <p className="mt-3 text-[clamp(1.6rem,4.2vw,2.45rem)] leading-[0.88] font-semibold uppercase tracking-[-0.05em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
                {poster.headline}
                <br />
                {poster.subline}
              </p>
            </>
          ) : (
            <>
              <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/65 sm:text-[10px]">
                Not out yet
              </p>
              <p className="mt-2 text-[clamp(1.35rem,3.6vw,2.1rem)] leading-[0.9] font-semibold uppercase tracking-[-0.045em] text-white">
                Coming
                <br />
                soon
              </p>
            </>
          )}
        </div>

        <p className="text-center text-[10px] font-medium tracking-[-0.03em] text-white/70 sm:text-[12px]">
          {guide
            ? `${guide.price} · same thinking I use with clients`
            : "Same thinking. Still being finished."}
        </p>
      </div>
    </div>
  );
}
