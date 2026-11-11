import type { Metadata } from "next";
import { EditorialConsole } from "@/components/wildlife/EditorialConsole";

export const metadata: Metadata = {
  title: "Editorial · Wildlife updates | nau",
  description: "Review conservation events and manage sourced assessments.",
};

export default function EditorialPage() {
  return (
    <div className="min-h-svh bg-[#070b10] text-white">
      <div className="mx-auto max-w-[960px] px-5 py-10 md:px-8 md:py-14">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-[#9fd0ff]/80 uppercase">
          Editorial
        </p>
        <h1 className="mt-2 text-[clamp(1.6rem,3.5vw,2.4rem)] font-medium tracking-[-0.04em]">
          Approve alerts & edit assessments
        </h1>
        <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-white/55">
          Events stay in a review queue until you approve them. Assessment
          category changes are listed for acknowledgement — they never auto-create
          “population dropped” alerts. Set{" "}
          <code className="text-white/80">EDITOR_SECRET</code> in the environment
          and paste it below.
        </p>
        <EditorialConsole />
      </div>
    </div>
  );
}
