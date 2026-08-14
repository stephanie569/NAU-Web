"use client";

import Image from "next/image";
import Link from "next/link";
import { selectedWorkSection } from "@/lib/sections";

function LogoCard({
  project,
}: {
  project: (typeof selectedWorkSection.projects)[number];
}) {
  return (
    <Link
      href={`/clients/${project.id}`}
      className="flex h-[180px] w-[min(55vw,300px)] shrink-0 items-center justify-center rounded-[14px] bg-white px-5 transition-opacity hover:opacity-80 sm:w-[340px] sm:px-6"
    >
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
    </Link>
  );
}

function LogoMarquee() {
  const { projects } = selectedWorkSection;
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

export function ClientsSection() {
  return (
    <section className="bg-[#f5f5f5] px-6 pb-10 pt-8 md:px-9 md:pb-14 md:pt-12">
      <div className="mx-auto w-full max-w-[1520px]">
        <LogoMarquee />
      </div>
    </section>
  );
}
