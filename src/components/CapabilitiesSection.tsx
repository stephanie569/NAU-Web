import { capabilitiesSectionCopy } from "@/lib/sections";

function CapabilityPlus() {
  return (
    <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0a0a0a]/[0.06]">
      <span className="absolute h-px w-2 bg-[#0a0a0a]/45" />
      <span className="absolute h-2 w-px bg-[#0a0a0a]/45" />
    </span>
  );
}

export function CapabilitiesSection() {
  const { title, lead, items } = capabilitiesSectionCopy;

  return (
    <section
      id="capabilities"
      className="relative box-border flex min-h-[calc(100svh-61px)] scroll-mt-[61px] flex-col justify-center overflow-x-hidden bg-[#f5f5f5] px-6 py-12 md:px-9 md:py-14 lg:py-16"
      aria-labelledby="capabilities-title"
    >
      <div className="relative mx-auto w-full max-w-[1200px]">
        <div className="mb-7 text-right md:mb-9">
          <h2
            id="capabilities-title"
            className="text-[clamp(2.75rem,7vw,4.75rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-[#0a0a0a]"
          >
            {title}
          </h2>
          <p className="ml-auto mt-2.5 max-w-[30rem] text-[13px] leading-relaxed font-medium tracking-[-0.03em] text-[#0a0a0a]/55 md:text-[14px]">
            {lead}
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-3">
          {items.map((item) => (
            <li
              key={item.number}
              className="flex h-full min-h-[200px] flex-col rounded-[16px] bg-white p-4 md:min-h-[210px] md:p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-[11px] font-semibold tabular-nums tracking-[-0.03em] text-[#0a0a0a]/35">
                  {item.number}
                </p>
                <CapabilityPlus />
              </div>

              <div className="mt-auto pt-8">
                <h3 className="min-h-[2.6em] text-[clamp(1.05rem,1.7vw,1.25rem)] leading-snug font-semibold tracking-[-0.045em] text-[#0a0a0a]">
                  {item.title}
                </h3>
                <p className="mt-2 min-h-[4.2em] text-[13px] leading-relaxed font-medium tracking-[-0.03em] text-[#0a0a0a]/55 md:text-[14px]">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
