import type { Metadata } from "next";
import { PartnerSubmitForm } from "@/components/wildlife/PartnerSubmitForm";

export const metadata: Metadata = {
  title: "Contribute · Conservation partners | nau",
  description:
    "Submit verified conservation events for editorial review before public display.",
};

export default function ContributePage() {
  return (
    <div className="min-h-svh bg-[#070b10] text-white">
      <div className="mx-auto max-w-[720px] px-5 py-10 md:px-8 md:py-14">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-[#9fd0ff]/80 uppercase">
          Partners
        </p>
        <h1 className="mt-2 text-[clamp(1.6rem,3.5vw,2.4rem)] font-medium tracking-[-0.04em]">
          Submit a conservation update
        </h1>
        <p className="mt-3 text-[14px] leading-relaxed text-white/55">
          For confirmed incidents, monitoring results, habitat threats, rescues,
          and recovery milestones. Submissions enter review and stay private until
          approved. Use broad regions only — never nest or den coordinates.
        </p>
        <PartnerSubmitForm />
      </div>
    </div>
  );
}
