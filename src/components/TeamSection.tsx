import Image from "next/image";
import Link from "next/link";
import { teamMembers, teamSectionCopy } from "@/lib/sections";

function ContentPlusIcon() {
  return (
    <span className="mb-6 flex h-8 w-8 items-center justify-center rounded-full border border-[#0a0a0a]/10">
      <span className="relative block h-2.5 w-2.5">
        <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-[#0a0a0a]/35" />
        <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-[#0a0a0a]/35" />
      </span>
    </span>
  );
}

function CardPlusIcon() {
  return (
    <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
      <span className="absolute h-px w-2.5 bg-white" />
      <span className="absolute h-2.5 w-px bg-white" />
    </span>
  );
}

export function TeamSection() {
  const { brand, title, titleMuted, careers, collaboration, company } =
    teamSectionCopy;
  const member = teamMembers[0];

  return (
    <section className="bg-[#f5f5f5] px-6 py-24 md:px-9 md:py-32">
      <div className="mx-auto w-full max-w-[1520px]">
        <div className="overflow-hidden rounded-[24px] bg-white p-8 md:p-10 lg:p-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-16">
            <div className="flex flex-col justify-between gap-16 lg:min-h-[640px]">
              <div>
                <p className="text-[clamp(1.75rem,3vw,2.25rem)] font-semibold tracking-[-0.06em] text-[#0a0a0a]">
                  {brand}
                </p>
                <h2 className="mt-6 max-w-[420px] text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-semibold tracking-[-0.06em] text-[#0a0a0a]">
                  {title}{" "}
                  <span className="text-[#0a0a0a]/60">{titleMuted}</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-8">
                <div>
                  <ContentPlusIcon />
                  <p className="text-[15px] font-semibold tracking-[-0.04em] text-[#0a0a0a]">
                    {careers.title}
                  </p>
                  <p className="mt-3 max-w-[220px] text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-[#0a0a0a]/60">
                    {careers.description}
                  </p>
                  <Link
                    href={careers.href}
                    className="mt-8 inline-flex items-center gap-5 rounded-full bg-[#0a0a0a] py-2.5 pr-2.5 pl-6 transition-opacity hover:opacity-85"
                  >
                    <span className="text-[13px] font-semibold tracking-[-0.04em] text-white">
                      {careers.cta}
                    </span>
                    <span className="h-8 w-8 shrink-0 rounded-full bg-white" />
                  </Link>
                </div>

                <div>
                  <ContentPlusIcon />
                  <p className="text-right text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-[#0a0a0a]/60">
                    {collaboration.lead}{" "}
                    <span className="font-semibold text-[#0a0a0a]">
                      {collaboration.emphasis}
                    </span>{" "}
                    {collaboration.rest}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[3/4] overflow-hidden rounded-[14px] lg:aspect-auto lg:min-h-[640px]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover grayscale"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[#0a0a0a]/25" />

              <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <CardPlusIcon />
                  <div className="text-right">
                    <p className="text-[13px] font-semibold tracking-[-0.04em] text-white">
                      {member.role}
                    </p>
                    <p className="text-[11px] font-medium tracking-[-0.04em] text-white/60">
                      {company}
                    </p>
                  </div>
                </div>

                <p className="text-[15px] font-semibold tracking-[-0.04em] text-white">
                  {member.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
