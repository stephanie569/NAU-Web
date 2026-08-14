"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { featuredProjects, projectsSectionCopy } from "@/lib/sections";

function DotsMenu() {
  return (
    <div className="flex items-center gap-1 px-1">
      <span className="h-1 w-1 rounded-full bg-white" />
      <span className="h-1 w-1 rounded-full bg-white/35" />
      <span className="h-1 w-1 rounded-full bg-white/35" />
    </div>
  );
}

function SlideArrow({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous projects" : "Next projects"}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition-colors hover:bg-white hover:text-[#0a0a0a]"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden
        className={direction === "prev" ? "rotate-180" : undefined}
      >
        <path
          d="M6 3.5L10.5 8L6 12.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof featuredProjects)[number];
}) {
  return (
    <Link
      href={`/clients/${project.slug}`}
      className="group block h-full w-[min(82vw,420px)] shrink-0 snap-start sm:w-[min(70vw,480px)] lg:w-[min(46%,560px)]"
    >
      <div className="overflow-hidden rounded-[14px] border border-white/10 bg-white/[0.05]">
        <div className="flex items-center justify-between px-4 py-3.5 sm:px-5 sm:py-4">
          <div className="flex min-w-0 items-baseline gap-1">
            <span className="truncate text-[14px] font-medium tracking-[-0.04em] text-white sm:text-[15px]">
              {project.title}
            </span>
            <span className="shrink-0 text-[11px] font-medium text-white/50 sm:text-xs">
              /{project.year}
            </span>
          </div>
          <DotsMenu />
        </div>
        <div className="relative mx-1 mb-1 aspect-[16/10] overflow-hidden rounded-[12px] bg-[#0a0a0a]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-center"
            quality={90}
            sizes="(max-width: 640px) 82vw, (max-width: 1024px) 70vw, 560px"
          />
          {project.slug === "fly-the-earth" ? (
            <div className="pointer-events-none absolute top-[8%] left-[6%] z-[2] h-11 w-[6.25rem] opacity-[0.28] mix-blend-screen">
              <Image
                src="/logos/fly-the-earth.png"
                alt=""
                fill
                className="object-contain object-left"
                sizes="100px"
              />
            </div>
          ) : null}
        </div>
      </div>
    </Link>
  );
}

export function ProjectsSection() {
  const { homeLimit } = projectsSectionCopy;
  const projects = featuredProjects.slice(0, Math.max(homeLimit, 6));
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "prev" | "next") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.querySelector<HTMLElement>("a");
    const amount = card ? card.offsetWidth + 16 : scroller.clientWidth * 0.7;
    scroller.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="clients"
      data-header-theme="dark"
      className="box-border flex min-h-[calc(100svh-61px)] scroll-mt-[61px] flex-col justify-center bg-[#0a0a0a] px-6 py-14 pb-20 md:px-9 md:py-16 md:pb-28"
    >
      <div className="mx-auto w-full max-w-[1520px]">
        <div className="relative mb-6 lg:mb-7">
          <div className="text-center">
            <h2 className="text-[clamp(2.75rem,7vw,4.75rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-white">
              Clients.
            </h2>
          </div>

          <div className="absolute top-1/2 right-0 hidden -translate-y-1/2 items-center gap-2 lg:flex">
            <SlideArrow direction="prev" onClick={() => scrollByCard("prev")} />
            <SlideArrow direction="next" onClick={() => scrollByCard("next")} />
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:gap-4 [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-5 flex justify-center gap-2 lg:hidden">
          <SlideArrow direction="prev" onClick={() => scrollByCard("prev")} />
          <SlideArrow direction="next" onClick={() => scrollByCard("next")} />
        </div>
      </div>
    </section>
  );
}
