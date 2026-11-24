import type { Metadata } from "next";
import { NauButton } from "@/components/NauButton";

export const metadata: Metadata = {
  title: "Films – nau studio",
  description:
    "Documentary vlogs by nau studio — longer stories for brands, places, and people that need more than a campaign cut.",
  openGraph: {
    title: "Films – nau studio",
    description:
      "Documentary vlogs by nau studio — longer stories for brands, places, and people that need more than a campaign cut.",
    type: "website",
  },
  alternates: {
    canonical: "/films",
  },
};

export default function FilmsPage() {
  return (
    <section className="bg-[#f5f5f5] px-1 pb-1 pt-1">
      <div className="overflow-hidden rounded-[25px] bg-white px-6 py-16 md:px-9 md:py-24">
        <div className="mx-auto w-full max-w-[1520px]">
          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_minmax(0,42rem)] lg:items-end lg:gap-16">
            <h1 className="text-[clamp(3rem,8vw,6.5rem)] leading-[0.92] font-semibold tracking-[-0.06em] text-[#0a0a0a]">
              Films.
            </h1>
            <p className="max-w-[34rem] text-[15px] leading-relaxed font-medium tracking-[-0.03em] text-[#0a0a0a]/60 md:text-[16px]">
              Documentary vlogs — longer stories for brands, places, and people
              that need room to breathe. Research-led, filmed with care, built
              to hold attention past a single post.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 border-t border-[#0a0a0a]/10 pt-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-16">
            <div className="max-w-[40rem] space-y-4 text-[15px] leading-relaxed font-medium tracking-[-0.03em] text-[#0a0a0a]/70 md:text-[16px]">
              <p>
                Campaign series move a product into the market. Documentary
                vlogs go further: character, place, process, and the reason
                someone should care for longer than a scroll.
              </p>
              <p>
                If you have a story that needs that length — a founder path, a
                craft, a region, a product that only makes sense in the wild —
                start a conversation and we will shape the film around it.
              </p>
            </div>

            <NauButton href="/contact">Work with me</NauButton>
          </div>
        </div>
      </div>
    </section>
  );
}
