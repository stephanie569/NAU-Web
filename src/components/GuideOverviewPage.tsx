"use client";

import Image from "next/image";
import Link from "next/link";
import { BuyGuideButton } from "@/components/BuyGuideButton";
import type { StoreGuide } from "@/lib/sections";

function GuidePosterPreview({ guide }: { guide: StoreGuide }) {
  const { poster } = guide;

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0a0a0a]">
      <Image
        src={poster.image}
        alt=""
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 560px"
        priority
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(8,8,8,0.82) 0%,
              rgba(8,8,8,0.35) 40%,
              rgba(8,8,8,0.55) 72%,
              rgba(8,8,8,0.92) 100%
            )
          `,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${poster.gradientFrom}cc 0%, transparent 55%)`,
        }}
      />

      <div className="relative z-[1] flex h-full flex-col justify-between p-5 sm:p-7">
        <div className="flex items-center justify-between border-b border-white/20 pb-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
            nau presents
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/65">
            {poster.industry}
          </p>
        </div>

        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70">
            {poster.label} night
          </p>
          <p className="mt-3 text-[clamp(1.5rem,4vw,2.25rem)] leading-[0.9] font-semibold uppercase tracking-[-0.04em] text-white">
            {poster.headline}
          </p>
          <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75">
            {poster.subline}
          </p>
        </div>

        <p className="text-center text-[12px] font-medium tracking-[-0.03em] text-white/55">
          {poster.tagline}
        </p>
      </div>
    </div>
  );
}

export function GuideOverviewPage({
  guide,
  checkoutState,
}: {
  guide: StoreGuide;
  checkoutState?: string;
}) {
  const { overview } = guide;

  return (
    <section className="bg-[#f5f5f5] px-1 pb-1 pt-1">
      <div className="overflow-hidden rounded-[25px] bg-white px-6 py-12 md:px-9 md:py-16">
        <div className="mx-auto w-full max-w-[1100px]">
          <Link
            href="/#digital-guides"
            className="inline-flex text-[13px] font-medium tracking-[-0.03em] text-[#0a0a0a]/50 transition-colors hover:text-[#0a0a0a]"
          >
            ← Digital guides
          </Link>

          {checkoutState === "success" ? (
            <div className="mt-6 rounded-[14px] border border-[#0a0a0a]/10 bg-[#f5f5f5] px-5 py-4">
              <p className="text-[14px] font-semibold tracking-[-0.04em] text-[#0a0a0a]">
                Payment received · {guide.title}
              </p>
              <p className="mt-1 text-[13px] font-medium tracking-[-0.03em] text-[#0a0a0a]/55">
                Thanks - I’ll email your guide shortly.
              </p>
            </div>
          ) : null}

          {checkoutState === "cancel" ? (
            <div className="mt-6 rounded-[14px] border border-[#0a0a0a]/10 bg-[#f5f5f5] px-5 py-4">
              <p className="text-[14px] font-semibold tracking-[-0.04em] text-[#0a0a0a]">
                Checkout cancelled
              </p>
              <p className="mt-1 text-[13px] font-medium tracking-[-0.03em] text-[#0a0a0a]/55">
                No charge was made. Review the guide below and checkout when
                you’re ready.
              </p>
            </div>
          ) : null}

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-14">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] sm:aspect-[5/6] lg:sticky lg:top-24">
              <GuidePosterPreview guide={guide} />
            </div>

            <div>
              <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#0a0a0a]/40">
                {overview.eyebrow} · {guide.category}
              </p>
              <h1 className="mt-3 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] font-semibold tracking-[-0.06em] text-[#0a0a0a]">
                {guide.title}
              </h1>
              <p className="mt-4 text-[clamp(1.15rem,2vw,1.35rem)] leading-snug font-medium tracking-[-0.04em] text-[#0a0a0a]/70">
                {overview.headline}
              </p>
              <p className="mt-4 max-w-[36rem] text-[15px] leading-relaxed font-medium tracking-[-0.03em] text-[#0a0a0a]/55">
                {overview.lead}
              </p>

              <div className="mt-8 border-t border-[#0a0a0a]/10 pt-8">
                <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#0a0a0a]/40">
                  What you’ll get
                </p>
                <ul className="mt-4 space-y-3">
                  {overview.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[15px] leading-snug font-medium tracking-[-0.03em] text-[#0a0a0a]/70"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0a0a0a]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-[#0a0a0a]/10 pt-8">
                <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#0a0a0a]/40">
                  Included
                </p>
                <ul className="mt-4 space-y-2">
                  {overview.includes.map((item) => (
                    <li
                      key={item}
                      className="text-[14px] font-medium tracking-[-0.03em] text-[#0a0a0a]/55"
                    >
                      + {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-[#0a0a0a]/10 pt-8">
                <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#0a0a0a]/40">
                  Best for
                </p>
                <p className="mt-3 max-w-[34rem] text-[15px] leading-relaxed font-medium tracking-[-0.03em] text-[#0a0a0a]/60">
                  {overview.bestFor}
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4 border-t border-[#0a0a0a]/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#0a0a0a]/40">
                    Price
                  </p>
                  <p className="mt-1 text-[2rem] leading-none font-semibold tracking-[-0.05em] text-[#0a0a0a]">
                    {guide.price}
                  </p>
                  <p className="mt-2 text-[13px] font-medium tracking-[-0.03em] text-[#0a0a0a]/45">
                    One-time · instant download
                  </p>
                </div>

                <BuyGuideButton
                  guideId={guide.id}
                  label={overview.checkoutLabel}
                  className="sm:items-end"
                />
              </div>

              <p className="mt-6 text-[12px] font-medium tracking-[-0.03em] text-[#0a0a0a]/40">
                Secure checkout via Stripe. By purchasing you agree to the{" "}
                <Link
                  href="/legal/terms"
                  className="underline underline-offset-2 hover:text-[#0a0a0a]"
                >
                  Terms
                </Link>{" "}
                and{" "}
                <Link
                  href="/legal/privacy"
                  className="underline underline-offset-2 hover:text-[#0a0a0a]"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
