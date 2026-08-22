import Image from "next/image";
import Link from "next/link";
import { blogSectionCopy } from "@/lib/sections";

function PromoArrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className="transition-transform duration-300 group-hover:translate-x-0.5"
    >
      <path
        d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function QrStickersPromo() {
  const { stickersPromo } = blogSectionCopy;

  return (
    <Link
      href={stickersPromo.href}
      className="group mb-8 flex flex-col gap-5 rounded-[14px] border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-white/20 hover:bg-white/[0.06] sm:mb-10 sm:flex-row sm:items-center sm:gap-6 sm:p-6 lg:mb-12"
    >
      <div className="flex shrink-0 items-center pl-1">
        {stickersPromo.previewImages.map((src, index) => (
          <div
            key={src}
            className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-[#0a0a0a] bg-[#0a0a0a] shadow-sm"
            style={{
              marginLeft: index === 0 ? 0 : -10,
              zIndex: stickersPromo.previewImages.length - index,
            }}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              sizes="44px"
            />
          </div>
        ))}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/40">
          {stickersPromo.eyebrow}
        </p>
        <p className="mt-1.5 max-w-[520px] text-[14px] leading-relaxed font-medium tracking-[-0.03em] text-white/60 sm:text-[15px]">
          {stickersPromo.body}
        </p>
      </div>

      <span className="inline-flex shrink-0 items-center gap-2 text-[13px] font-semibold tracking-[-0.03em] text-white/45 transition-colors group-hover:text-white/80 sm:pr-1">
        {stickersPromo.cta}
        <PromoArrow />
      </span>
    </Link>
  );
}
