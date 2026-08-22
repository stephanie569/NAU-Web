import Image from "next/image";
import { industriesSectionCopy } from "@/lib/sections";
import { VideoPlatforms } from "@/components/VideoPlatforms";

type IndustryItem = (typeof industriesSectionCopy.items)[number];

function CardPlusIcon() {
  return (
    <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
      <span className="absolute h-px w-3 bg-[#0a0a0a]" />
      <span className="absolute h-3 w-px bg-[#0a0a0a]" />
    </span>
  );
}

function IndustryCard({ item }: { item: IndustryItem }) {
  return (
    <article className="group flex min-h-[380px] flex-col rounded-[14px] border border-white/10 bg-white/[0.05] p-5 md:min-h-[420px] md:p-6">
      <div className="relative mb-5 aspect-[5/4] w-full overflow-hidden rounded-[12px] md:mb-6">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-3 right-3">
          <CardPlusIcon />
        </div>
      </div>

      <div className="mt-auto">
        <p className="text-[13px] font-medium tracking-[-0.04em] text-white/50">
          {item.focuses.join(" · ")}
        </p>
        <h3 className="mt-2.5 text-[18px] leading-snug font-semibold tracking-[-0.04em] text-white">
          {item.name}
        </h3>
        <p className="mt-2.5 text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-white/55">
          {item.blurb}
        </p>
      </div>
    </article>
  );
}

export function IndustriesSection() {
  const { title, lead, items } = industriesSectionCopy;

  return (
    <section
      id="industries"
      data-header-theme="dark"
      className="relative box-border flex min-h-[calc(100svh-61px)] scroll-mt-[61px] flex-col justify-center overflow-x-hidden bg-[#0a0a0a] px-6 py-16 md:px-9 md:py-20 lg:py-24"
    >
      <div className="relative mx-auto w-full max-w-[1520px]">
        <div className="mb-10 text-left md:mb-12">
          <h2 className="text-[clamp(2.75rem,7vw,4.75rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-white">
            {title}
          </h2>
          <p className="mt-4 max-w-[36rem] text-[14px] leading-relaxed font-medium tracking-[-0.03em] text-white/55 md:text-[15px]">
            {lead}
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <IndustryCard key={item.name} item={item} />
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 md:mt-12 md:pt-10">
          <VideoPlatforms tone="dark" />
        </div>
      </div>
    </section>
  );
}
