import { NauButton } from "@/components/NauButton";
import { PageHero } from "@/components/ui";
import { siteConfig } from "@/lib/data";
import { storeSectionCopy } from "@/lib/sections";

function FeaturePlusIcon() {
  return (
    <span className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0a0a0a]/10">
      <span className="absolute h-px w-2 bg-[#0a0a0a]" />
      <span className="absolute h-2 w-px bg-[#0a0a0a]" />
    </span>
  );
}

function buyMailto(title: string, price: string) {
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    `Guide: ${title}`,
  )}&body=${encodeURIComponent(
    `Hi Stefani,\n\nI'd like the ${title} (${price}).\n\nThanks.`,
  )}`;
}

const qrMailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
  "Found a QR - free guide",
)}&body=${encodeURIComponent(
  "Hi Stefani,\n\nI found a nau QR code.\n\nWhere: \nWhich guide I'd like: \n\nThanks.",
)}`;

export default function StorePage() {
  const {
    title,
    subtitle,
    intro,
    stickers,
    qrCta,
    qrNote,
    qrLinkLabel,
    cta,
    items,
  } = storeSectionCopy;

  return (
    <>
      <PageHero title={title} subtitle={subtitle} />

      <section className="bg-[#f5f5f5] px-6 pb-20 md:px-9 md:pb-28">
        <div className="mx-auto grid w-full max-w-[1100px] gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div>
            <p className="text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-[#0a0a0a]/70">
              {intro}
            </p>
            <p className="mt-4 text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-[#0a0a0a]/55">
              {stickers}
            </p>

            <div className="mt-8 flex flex-col gap-3 rounded-[16px] border border-[#0a0a0a]/10 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[14px] font-semibold tracking-[-0.04em] text-[#0a0a0a]">
                  {qrCta}
                </p>
                <p className="mt-1 text-[13px] font-medium tracking-[-0.03em] text-[#0a0a0a]/55">
                  {qrNote}
                </p>
              </div>
              <NauButton href={qrMailto} className="shrink-0">
                {qrLinkLabel}
              </NauButton>
            </div>
          </div>

          <div className="overflow-hidden rounded-[18px] bg-white">
            <div className="border-b border-[#0a0a0a]/8 px-5 py-4 md:px-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0a0a0a]/40">
                {items.length} guides
              </p>
            </div>
            <ul className="divide-y divide-[#0a0a0a]/8">
              {items.map((guide) => (
                <li
                  key={guide.id}
                  className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8 md:px-6"
                >
                  <div className="flex min-w-0 items-start gap-3">
                    <FeaturePlusIcon />
                    <div className="min-w-0">
                      <p className="text-[15px] font-semibold tracking-[-0.04em] text-[#0a0a0a]">
                        {guide.title}
                      </p>
                      <p className="mt-1 text-[13px] font-medium tracking-[-0.03em] text-[#0a0a0a]/55">
                        {guide.blurb}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-6 pl-9 sm:pl-0 sm:justify-end">
                    <p className="text-[15px] font-semibold tracking-[-0.04em] text-[#0a0a0a] tabular-nums">
                      {guide.price}
                    </p>
                    <NauButton href={buyMailto(guide.title, guide.price)}>
                      {cta}
                    </NauButton>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
