"use client";

import Link from "next/link";
import { NauButton } from "@/components/NauButton";
import { GuideComingSoonCover } from "@/components/GuideComingSoonCover";
import { storeSectionCopy, type StoreGuide } from "@/lib/sections";

export function GuideOverviewPage({
  guide,
  checkoutState,
}: {
  guide: StoreGuide;
  checkoutState?: string;
}) {
  const { overview } = guide;
  const { notifyCta, comingSoonLabel } = storeSectionCopy;
  const related = storeSectionCopy.items.filter((item) => item.id !== guide.id);

  return (
    <section className="bg-[#f5f5f5] px-1 pb-1 pt-1">
      <div className="overflow-hidden rounded-[25px] bg-white px-6 py-12 md:px-9 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1240px]">
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
                Thanks. I’ll email your guide shortly.
              </p>
            </div>
          ) : null}

          {checkoutState === "cancel" ? (
            <div className="mt-6 rounded-[14px] border border-[#0a0a0a]/10 bg-[#f5f5f5] px-5 py-4">
              <p className="text-[14px] font-semibold tracking-[-0.04em] text-[#0a0a0a]">
                Checkout cancelled
              </p>
              <p className="mt-1 text-[13px] font-medium tracking-[-0.03em] text-[#0a0a0a]/55">
                No charge was made. This guide is still being finished.
              </p>
            </div>
          ) : null}

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-14">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[22px] lg:mx-0 lg:max-w-none">
              <GuideComingSoonCover padded guide={guide} />
            </div>

            <div>
              <p className="text-[12px] font-medium tracking-[-0.03em] text-[#0a0a0a]/45">
                {comingSoonLabel} · {guide.category}
              </p>
              <h1 className="mt-3 text-[clamp(2.1rem,4.8vw,3.6rem)] leading-[1.05] font-semibold tracking-[-0.06em] text-pretty text-[#0a0a0a]">
                {guide.title}
              </h1>
              <p className="mt-4 max-w-[34rem] bg-gradient-to-r from-[#5b4b9b] via-[#0a1f5a] to-[#00a8e8] bg-clip-text text-[clamp(1.2rem,2.2vw,1.55rem)] leading-[1.25] font-semibold tracking-[-0.045em] text-pretty text-transparent">
                {overview.headline}
              </p>
              <p className="mt-5 max-w-[36rem] text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-pretty text-[#0a0a0a]/70 md:text-[16px]">
                {overview.lead}
              </p>

              <div className="mt-8 flex flex-wrap items-end gap-6">
                <div>
                  <p className="text-[2rem] leading-none font-semibold tracking-[-0.05em] text-[#0a0a0a]">
                    {guide.price}
                  </p>
                  <p className="mt-2 text-[13px] font-medium tracking-[-0.03em] text-[#0a0a0a]/45">
                    One-time · drops as a download
                  </p>
                </div>
                <NauButton href="/contact">{notifyCta}</NauButton>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-[#0a0a0a]/10 pt-12 md:mt-20 md:pt-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0a0a0a]/35">
              You’ll walk out with
            </p>
            <h2 className="mt-2 max-w-[36rem] text-[clamp(1.45rem,2.6vw,2rem)] leading-snug font-semibold tracking-[-0.05em] text-[#0a0a0a]">
              The same framing I use on client campaigns.
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {overview.highlights.map((item, index) => (
                <li
                  key={item}
                  className="rounded-[20px] bg-[#f5f5f5] px-5 py-5 md:px-6 md:py-6"
                >
                  <p className="text-[11px] font-semibold tabular-nums tracking-[-0.03em] text-[#0a0a0a]/35">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-[15px] leading-snug font-medium tracking-[-0.04em] text-[#0a0a0a]/80 md:text-[16px]">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14 border-t border-[#0a0a0a]/10 pt-12 md:mt-16 md:pt-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0a0a0a]/35">
              A look inside
            </p>
            <h2 className="mt-2 max-w-[36rem] text-[clamp(1.45rem,2.6vw,2rem)] leading-snug font-semibold tracking-[-0.05em] text-[#0a0a0a]">
              Four moves. Then you can run it.
            </h2>
            <ol className="mt-8 divide-y divide-[#0a0a0a]/8 border-y border-[#0a0a0a]/8">
              {overview.preview.map((item) => (
                <li
                  key={item.number}
                  className="grid grid-cols-[auto_1fr] gap-5 py-5 sm:grid-cols-[4.5rem_minmax(0,14rem)_1fr] sm:items-baseline sm:gap-8 md:py-6"
                >
                  <p className="text-[13px] font-semibold tabular-nums tracking-[-0.04em] text-[#0a0a0a]/35">
                    {item.number}
                  </p>
                  <p className="text-[17px] font-semibold tracking-[-0.045em] text-[#0a0a0a] sm:text-[18px]">
                    {item.title}
                  </p>
                  <p className="col-span-2 text-[14px] leading-relaxed font-medium tracking-[-0.03em] text-[#0a0a0a]/55 sm:col-span-1 sm:text-[15px]">
                    {item.note}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-14 rounded-[22px] bg-[#0a0a0a] px-6 py-8 md:mt-16 md:px-10 md:py-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/40">
              Best for
            </p>
            <p className="mt-3 max-w-[40rem] text-[clamp(1.15rem,2.2vw,1.45rem)] leading-snug font-semibold tracking-[-0.045em] text-white">
              {overview.bestFor}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <NauButton href="/contact" variant="light">
                {notifyCta}
              </NauButton>
              <p className="text-[13px] font-medium tracking-[-0.03em] text-white/45">
                Or work with me on the full cycle.
              </p>
            </div>
          </div>

          {related.length > 0 ? (
            <div className="mt-14 border-t border-[#0a0a0a]/10 pt-12 md:mt-16 md:pt-14">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0a0a0a]/35">
                    The set
                  </p>
                  <h2 className="mt-2 text-[clamp(1.45rem,2.6vw,2rem)] leading-snug font-semibold tracking-[-0.05em] text-[#0a0a0a]">
                    Two more guides in the cycle.
                  </h2>
                </div>
                <Link
                  href="/#digital-guides"
                  className="text-[13px] font-medium tracking-[-0.03em] text-[#0a0a0a]/45 transition-colors hover:text-[#0a0a0a]"
                >
                  All guides
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {related.map((item) => (
                  <Link
                    key={item.id}
                    href={`/products/${item.id}`}
                    className="group overflow-hidden rounded-[20px] bg-[#f5f5f5] transition-colors hover:bg-[#efefef]"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <GuideComingSoonCover guide={item} />
                    </div>
                    <div className="flex items-center justify-between gap-3 px-5 py-4">
                      <div className="min-w-0">
                        <p className="truncate text-[16px] font-semibold tracking-[-0.04em] text-[#0a0a0a]">
                          {item.title}
                        </p>
                        <p className="mt-0.5 truncate text-[13px] font-medium tracking-[-0.03em] text-[#0a0a0a]/50">
                          {item.blurb}
                        </p>
                      </div>
                      <span className="shrink-0 text-[13px] font-semibold tabular-nums tracking-[-0.04em] text-[#0a0a0a]/40">
                        {item.price}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
