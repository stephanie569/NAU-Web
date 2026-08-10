import Image from "next/image";
import Link from "next/link";
import { teamMembers, teamSectionCopy } from "@/lib/sections";

export function TeamSection() {
  const {
    title,
    titleMuted,
    lead,
    tension,
    focus,
    field,
    proof,
    closeLead,
    closeEmphasis,
    careers,
    company,
    photo,
  } = teamSectionCopy;
  const member = teamMembers[0];
  const imageSrc = photo?.src ?? member.image;
  const imageAlt = photo?.alt ?? member.name;

  return (
    <section
      id="work-with-me"
      className="box-border bg-[#f5f5f5] px-6 py-8 md:px-9 md:py-10 lg:h-[calc(100svh-61px)] lg:overflow-hidden lg:py-8"
    >
      <div className="mx-auto h-full w-full max-w-[1520px]">
        <div className="grid h-full w-full grid-cols-1 gap-8 rounded-[24px] bg-white p-6 md:p-8 lg:grid-cols-2 lg:items-center lg:gap-10 lg:p-8 xl:gap-14 xl:p-10">
          <div className="flex min-h-0 flex-col justify-center gap-5 overflow-hidden lg:max-h-[min(100%,680px)]">
            <div className="max-w-xl">
              <h2 className="text-[clamp(1.5rem,2.6vw,2.35rem)] leading-[1.05] font-semibold tracking-[-0.06em] text-[#0a0a0a]">
                {title}{" "}
                <span className="text-[#0a0a0a]/60">{titleMuted}</span>
              </h2>

              <div className="mt-4 space-y-3.5 text-[13px] leading-snug font-medium tracking-[-0.04em] md:text-[14px]">
                <p className="text-[#0a0a0a]">{lead}</p>
                <p className="text-[#0a0a0a]/60">{tension}</p>
                <p className="font-semibold text-[#0a0a0a]">{focus}</p>
                <p className="text-[#0a0a0a]/60">{field}</p>
                <p className="text-[#0a0a0a]/60">{proof}</p>
                <p className="text-[#0a0a0a]">
                  {closeLead}{" "}
                  <span className="font-semibold">{closeEmphasis}</span>
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <Link
                href={careers.href}
                className="inline-flex items-center gap-4 rounded-full bg-[#0a0a0a] py-2 pr-2 pl-5 transition-opacity hover:opacity-85"
              >
                <span className="text-[13px] font-semibold tracking-[-0.04em] text-white">
                  {careers.cta}
                </span>
                <span className="h-7 w-7 shrink-0 rounded-full bg-white" />
              </Link>
            </div>
          </div>

          <div className="relative flex min-h-[380px] w-full items-center justify-center lg:min-h-0 lg:h-full">
            <div className="relative aspect-[3/4] h-full max-h-[min(100%,680px)] w-auto max-w-full overflow-hidden rounded-[14px] bg-[#f0f0f0]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority={false}
              />

              <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-5 md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                    <span className="absolute h-px w-2.5 bg-white" />
                    <span className="absolute h-2.5 w-px bg-white" />
                  </span>
                  <div className="text-right drop-shadow-sm">
                    <p className="text-[13px] font-semibold tracking-[-0.04em] text-white">
                      {photo?.role ?? member.role}
                    </p>
                    <p className="text-[11px] font-medium tracking-[-0.04em] text-white/80">
                      {company}
                    </p>
                  </div>
                </div>

                <p className="text-[15px] font-semibold tracking-[-0.04em] text-white drop-shadow-sm">
                  {photo?.caption ?? member.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
