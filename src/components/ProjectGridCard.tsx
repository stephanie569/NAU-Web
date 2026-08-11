"use client";

import Image from "next/image";
import Link from "next/link";
import { projectsPageItems } from "@/lib/sections";

function DotsMenu({ variant = "muted" }: { variant?: "muted" | "mac" }) {
  if (variant === "mac") {
    return (
      <div className="flex items-center gap-1.5 px-1">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 px-1">
      <span className="h-1 w-1 rounded-full bg-[#0a0a0a]" />
      <span className="h-1 w-1 rounded-full bg-[#0a0a0a]/35" />
      <span className="h-1 w-1 rounded-full bg-[#0a0a0a]/35" />
    </div>
  );
}

export function ProjectGridCard({
  project,
  index,
}: {
  project: (typeof projectsPageItems)[number];
  index: number;
}) {
  const dotsVariant = index % 3 === 0 ? "mac" : "muted";

  return (
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
          <DotsMenu variant={dotsVariant} />
        </div>

        <div className="relative mx-1 mb-1 aspect-[5/4] overflow-hidden rounded-[12px] sm:aspect-[4/3]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/15" />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 sm:gap-3">
            <div className="relative h-8 w-8 sm:h-10 sm:w-10">
              <Image
                src={project.logo}
                alt=""
                fill
                className="object-contain brightness-0 invert"
                sizes="40px"
              />
            </div>
            <span className="text-[14px] font-medium tracking-[-0.04em] text-white sm:text-[15px]">
              {project.displayName}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
