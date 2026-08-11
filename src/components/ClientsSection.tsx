"use client";

import Image from "next/image";
import { selectedWorkSection } from "@/lib/sections";

function PlusBadge() {
  return (
    <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0a0a0a]">
      <span className="absolute h-px w-3 bg-white" />
      <span className="absolute h-3 w-px bg-white" />
    </span>
  );
}

function LogoCard({
  project,
}: {
  project: (typeof selectedWorkSection.projects)[number];
}) {
  return (
    <div className="flex h-[180px] w-[min(55vw,300px)] shrink-0 items-center justify-center rounded-[14px] bg-white px-5 sm:w-[340px] sm:px-6">
      <div className="relative h-[130px] w-full max-w-[240px] sm:h-[140px] sm:max-w-[260px]">
        <Image
          src={project.src}
          alt={project.name}
          fill
          className="object-contain"
          sizes="260px"
          quality={100}
        />
      </div>
    </div>
  );
}

function LogoMarquee() {
  const { projects } = selectedWorkSection;
  // Duplicate for seamless loop
  const track = [...projects, ...projects];

  return (
    <div className="group relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#f5f5f5] to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#f5f5f5] to-transparent sm:w-16" />

      <div className="flex w-max gap-3 animate-logo-marquee group-hover:[animation-play-state:paused] md:gap-4">
        {track.map((project, i) => (
          <LogoCard key={`${project.id}-${i}`} project={project} />
        ))}
      </div>
    </div>
  );
}

export function ClientsSection({ label }: { label?: string } = {}) {
  const { title } = selectedWorkSection;
  const sectionLabel = label ?? title;

  return (
    <section className="bg-[#f5f5f5] px-6 pb-6 pt-4 md:px-9 md:pb-8 md:pt-6">
      <div className="mx-auto w-full max-w-[1520px]">
        <div className="mb-6 flex items-center gap-3 md:mb-8">
          <PlusBadge />
          <p className="text-[15px] font-medium tracking-[-0.04em] text-[#0a0a0a]">
            {sectionLabel}
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1520px]">
        <LogoMarquee />
      </div>
    </section>
  );
}
