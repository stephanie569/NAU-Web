"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
  index,
}: {
  project: (typeof selectedWorkSection.projects)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="flex h-[180px] items-center justify-center rounded-[14px] bg-white px-5"
    >
      <div className="relative mx-auto size-[104px] sm:size-[112px]">
        <Image
          src={project.src}
          alt={project.name}
          fill
          className="object-contain"
          sizes="112px"
          quality={100}
        />
      </div>
    </motion.div>
  );
}

export function ClientsSection() {
  const { title, period, projects } = selectedWorkSection;

  return (
    <section className="bg-[#f5f5f5] px-6 pb-24 md:px-9">
      <div className="mx-auto w-full max-w-[1520px]">
        <div className="mb-[70px] grid grid-cols-1 items-center gap-6 md:grid-cols-4 md:gap-[30px]">
          <div className="flex items-center gap-3">
            <PlusBadge />
            <p className="text-[15px] font-medium tracking-[-0.04em] text-[#0a0a0a]">
              {title}
            </p>
          </div>
          <div className="md:col-span-3 md:text-center">
            <p className="text-[15px] font-medium tracking-[-0.04em] text-[#0a0a0a]">
              {period}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-6">
          {projects.map((project, i) => (
            <LogoCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
