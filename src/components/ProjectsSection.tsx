"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { NauButton } from "@/components/NauButton";
import { featuredProjects, projectsSectionCopy } from "@/lib/sections";

function DotsMenu() {
  return (
    <div className="flex items-center gap-1 px-1">
      <span className="h-1 w-1 rounded-full bg-[#0a0a0a]" />
      <span className="h-1 w-1 rounded-full bg-[#0a0a0a]/35" />
      <span className="h-1 w-1 rounded-full bg-[#0a0a0a]/35" />
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof featuredProjects)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
    >
      <Link href={`/clients/${project.slug}`} className="group block h-full">
        <div className="overflow-hidden rounded-[14px] bg-white">
          <div className="flex items-center justify-between px-4 py-3.5 sm:px-5 sm:py-4">
            <div className="flex min-w-0 items-baseline gap-1">
              <span className="truncate text-[14px] font-medium tracking-[-0.04em] text-[#0a0a0a] sm:text-[15px]">
                {project.title}
              </span>
              <span className="shrink-0 text-[11px] font-medium text-[#090909]/60 sm:text-xs">
                /{project.year}
              </span>
            </div>
            <DotsMenu />
          </div>
          <div className="relative mx-1 mb-1 aspect-[16/9] overflow-hidden rounded-[12px] sm:aspect-[16/10]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 720px"
            />
            <div className="absolute inset-0 bg-[#0a0a0a]/15" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ProjectsSection() {
  const { cta, ctaHref, homeLimit } = projectsSectionCopy;
  const projects = featuredProjects.slice(0, homeLimit);

  return (
    <section
      id="clients"
      className="box-border flex min-h-[calc(100svh-61px)] scroll-mt-[61px] flex-col justify-center bg-[#f5f5f5] px-6 py-14 pb-20 md:px-9 md:py-16 md:pb-28"
    >
      <div className="mx-auto w-full max-w-[1520px]">
        <div className="mb-6 grid grid-cols-1 gap-5 lg:mb-7 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-4">
          <div className="hidden lg:block" aria-hidden />

          <div className="text-center">
            <h2 className="text-[clamp(2.75rem,7vw,4.75rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-[#0a0a0a]">
              Clients.
            </h2>
            <p className="mt-2 text-[clamp(1rem,1.8vw,1.5rem)] font-semibold tracking-[-0.06em] text-[#0a0a0a]">
              Founded 2023
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <NauButton href={ctaHref}>{cta}</NauButton>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
