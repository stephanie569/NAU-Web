import type { Metadata } from "next";
import { NauButton } from "@/components/NauButton";

export const metadata: Metadata = {
  title: "Management – nau studio",
  description:
    "Ongoing management for your campaign series — publishing, iteration, and the system that keeps the work working after delivery.",
  openGraph: {
    title: "Management – nau studio",
    description:
      "Ongoing management for your campaign series — publishing, iteration, and the system that keeps the work working after delivery.",
    type: "website",
  },
  alternates: {
    canonical: "/management",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ManagementPage() {
  return (
    <section className="bg-[#f5f5f5] px-1 pb-1 pt-1">
      <div className="overflow-hidden rounded-[25px] bg-white px-6 py-16 md:px-9 md:py-24">
        <div className="mx-auto w-full max-w-[1520px]">
          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_minmax(0,42rem)] lg:items-end lg:gap-16">
            <h1 className="text-[clamp(3rem,8vw,6.5rem)] leading-[0.92] font-semibold tracking-[-0.06em] text-[#0a0a0a]">
              Management.
            </h1>
            <p className="max-w-[34rem] text-[15px] leading-relaxed font-medium tracking-[-0.03em] text-[#0a0a0a]/60 md:text-[16px]">
              The series is the package. Management is what keeps it alive —
              publishing rhythm, iteration, and a clear owner after the files
              land.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 border-t border-[#0a0a0a]/10 pt-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-16">
            <div className="max-w-[40rem] space-y-4 text-[15px] leading-relaxed font-medium tracking-[-0.03em] text-[#0a0a0a]/70 md:text-[16px]">
              <p>
                Research sets the brief. Content creates the series. Strategy
                carries it into market. Management sits after delivery: a
                retainer for organic publishing, light edits, and the decisions
                that keep the campaign coherent week to week.
              </p>
              <p>
                Not every brand needs this. When you do — when the series is
                live and you want a steady hand on the system — we scope it on
                the first consultation.
              </p>
            </div>

            <NauButton href="/contact">Work with me</NauButton>
          </div>
        </div>
      </div>
    </section>
  );
}
