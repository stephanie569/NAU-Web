"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
      <Link href={`/projects/${project.slug}`} className="group block">
        <div className="overflow-hidden rounded-[18px] bg-white">
          <div className="flex items-center justify-between px-6 py-5">
            <div className="flex items-baseline gap-1">
              <span className="text-[15px] font-medium tracking-[-0.04em] text-[#0a0a0a]">
                {project.title}
              </span>
              <span className="text-xs font-medium text-[#090909]/60">
                /{project.year}
              </span>
            </div>
            <DotsMenu />
          </div>
          <div className="relative aspect-[750/540] overflow-hidden rounded-[16px]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#0a0a0a]/15" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section className="bg-[#f5f5f5] px-6 pt-[110px] pb-28 md:px-9">
      <div className="mx-auto w-full max-w-[1520px]">
        <div className="mb-[90px] grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-4">
          <p className="order-2 text-center text-[15px] font-medium tracking-[-0.04em] text-[#0a0a0a]/60 lg:order-1 lg:self-start lg:pt-1 lg:text-left">
            ({projectsSectionCopy.count})
          </p>

          <div className="order-1 text-center lg:order-2">
            <h2 className="text-[clamp(4rem,12vw,9rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-[#0a0a0a]">
              Projects.
            </h2>
            <p className="mt-3 text-[clamp(1.25rem,2.5vw,2.25rem)] font-semibold tracking-[-0.06em] text-[#0a0a0a]">
              ©2025
            </p>
          </div>

          <p className="order-3 max-w-[220px] justify-self-center text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-[#0a0a0a]/60 lg:justify-self-end lg:text-left">
            {projectsSectionCopy.description}
          </p>
        </div>

        <div className="grid gap-1 md:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
