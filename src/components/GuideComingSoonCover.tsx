export function GuideComingSoonCover({
  padded = false,
}: {
  padded?: boolean;
}) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0a0a0a]">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(120% 80% at 12% -10%, rgba(91, 75, 155, 0.5) 0%, transparent 52%),
            radial-gradient(90% 70% at 110% 110%, rgba(0, 168, 232, 0.38) 0%, transparent 48%),
            #0a0a0a
          `,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-soft-light"
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
          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/65 sm:text-[10px]">
            Digital guide
          </p>
        </div>

        <div className="text-center">
          <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/65 sm:text-[10px]">
            Not out yet
          </p>
          <p className="mt-2 text-[clamp(1.35rem,3.6vw,2.1rem)] leading-[0.9] font-semibold uppercase tracking-[-0.045em] text-white">
            Coming
            <br />
            soon
          </p>
        </div>

        <p className="text-center text-[10px] font-medium tracking-[-0.03em] text-white/55 sm:text-[11px]">
          Same thinking. Still being finished.
        </p>
      </div>
    </div>
  );
}
