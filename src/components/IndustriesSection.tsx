import Image from "next/image";
import { industriesSectionCopy } from "@/lib/sections";
import { VideoPlatforms } from "@/components/VideoPlatforms";

type IndustryItem = (typeof industriesSectionCopy.items)[number];

function CardPlusIcon() {
  return (
    <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white">
      <span className="absolute h-px w-2.5 bg-[#0a0a0a]" />
      <span className="absolute h-2.5 w-px bg-[#0a0a0a]" />
    </span>
  );
}

function IndustryCard({ item }: { item: IndustryItem }) {
  return (
    <article className="group flex h-full min-h-0 flex-col rounded-[14px] border border-white/10 bg-white/[0.05] p-4 md:p-5">
      <div className="relative mb-3 aspect-[16/10] w-full shrink-0 overflow-hidden rounded-[12px] lg:mb-4 lg:aspect-auto lg:min-h-0 lg:flex-1 lg:basis-0">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-2.5 right-2.5">
          <CardPlusIcon />
        </div>
      </div>

      <div className="mt-auto min-w-0 shrink-0">
        <p className="text-[12px] font-medium tracking-[-0.04em] text-white/50 md:text-[13px]">
          {item.focuses.join(" · ")}
        </p>
        <h3 className="mt-1.5 text-[16px] leading-snug font-semibold tracking-[-0.04em] text-white md:text-[17px]">
          {item.name}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-[13px] leading-snug font-medium tracking-[-0.04em] text-white/55 md:text-[14px]">
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
      className="relative box-border flex scroll-mt-[61px] flex-col overflow-x-hidden bg-[#0a0a0a] px-6 py-12 md:px-9 md:py-14 lg:h-[calc(100svh-61px)] lg:max-h-[calc(100svh-61px)] lg:overflow-hidden lg:py-10 xl:py-12"
    >
      <div className="relative mx-auto flex w-full max-w-[1520px] flex-col lg:h-full lg:min-h-0">
        <div className="mb-6 shrink-0 text-left md:mb-7 lg:mb-5">
          <h2 className="text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-white">
            {title}
          </h2>
          <p className="mt-2.5 max-w-[36rem] text-[13px] leading-snug font-medium tracking-[-0.03em] text-white/55 md:mt-3 md:text-[14px]">
            {lead}
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-1 sm:grid-cols-2 lg:min-h-0 lg:flex-1 lg:grid-cols-3">
          {items.map((item) => (
            <IndustryCard key={item.name} item={item} />
          ))}
        </div>

        <div className="mt-6 shrink-0 border-t border-white/10 pt-5 md:mt-8 md:pt-6 lg:mt-5 lg:pt-4">
          <VideoPlatforms tone="dark" />
        </div>
      </div>
    </section>
  );
}
