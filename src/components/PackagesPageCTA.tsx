import Image from "next/image";
import { storeSectionCopy } from "@/lib/sections";

export function PackagesPageCTA() {
  const { pageCtaLead, pageCtaHighlight, contact } = storeSectionCopy;

  return (
    <section className="bg-[#f5f5f5] px-6 py-20 md:px-9 md:py-28">
      <div className="mx-auto w-full max-w-[1520px]">
        <div className="max-w-[760px]">
          <p className="text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.25] font-medium tracking-[-0.04em] text-[#0a0a0a]/60">
            {pageCtaLead}{" "}
            <span className="font-semibold text-[#0a0a0a]">{pageCtaHighlight}</span>
          </p>

          <div className="mt-10 flex items-center gap-4">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full grayscale">
              <Image
                src={contact.image}
                alt={contact.name}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <p className="text-[15px] font-semibold tracking-[-0.04em] text-[#0a0a0a]">
                {contact.name}
              </p>
              <p className="text-[13px] font-medium tracking-[-0.04em] text-[#0a0a0a]/60">
                {contact.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
