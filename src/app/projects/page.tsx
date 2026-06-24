"use client";

import { useMemo, useState } from "react";
import { ProjectGridCard } from "@/components/ProjectGridCard";
import { ProjectsPageCTA } from "@/components/ProjectsPageCTA";
import { projectsPageCopy, projectsPageItems } from "@/lib/sections";

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 text-[#0a0a0a]/35" aria-hidden>
      <circle
        cx="9"
        cy="9"
        r="5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M13.5 13.5L17 17"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ProjectsPage() {
  const { range, title, description, searchPlaceholder, categoryLabel, categories } =
    projectsPageCopy;
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return projectsPageItems.filter((project) => {
      const matchesQuery =
        query.trim().length === 0 ||
        project.title.toLowerCase().includes(query.toLowerCase()) ||
        project.displayName.toLowerCase().includes(query.toLowerCase());
      const matchesCategory =
        category === "All" || project.category === category;

      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <>
      <section className="bg-[#f5f5f5] px-1 pb-1 pt-1">
        <div className="overflow-hidden rounded-[25px] bg-white px-6 py-16 md:px-9 md:py-24">
          <div className="mx-auto w-full max-w-[1520px]">
            <div className="mb-[90px] grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-4">
              <p className="order-2 text-center text-[15px] font-medium tracking-[-0.04em] text-[#0a0a0a]/60 lg:order-1 lg:self-start lg:pt-1 lg:text-left">
                {range}
              </p>

              <div className="order-1 text-center lg:order-2">
                <h1 className="text-[clamp(4rem,12vw,9rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-[#0a0a0a]">
                  {title}
                </h1>
              </div>

              <p className="order-3 max-w-[220px] justify-self-center text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-[#0a0a0a]/60 lg:justify-self-end lg:text-left">
                {description}
              </p>
            </div>

            <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <label className="relative block flex-1">
                <span className="pointer-events-none absolute top-1/2 left-5 -translate-y-1/2">
                  <SearchIcon />
                </span>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={searchPlaceholder}
                  className="w-full rounded-full bg-[#f5f5f5] py-3.5 pr-5 pl-12 text-[15px] font-medium tracking-[-0.04em] text-[#0a0a0a] outline-none placeholder:text-[#0a0a0a]/35"
                />
              </label>

              <label className="relative sm:w-[180px]">
                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="w-full appearance-none rounded-full bg-[#f5f5f5] py-3.5 pr-10 pl-5 text-[15px] font-medium tracking-[-0.04em] text-[#0a0a0a] outline-none"
                >
                  <option value="All">{categoryLabel}</option>
                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute top-1/2 right-5 -translate-y-1/2 text-[#0a0a0a]/35">
                  ▾
                </span>
              </label>
            </div>

            <div className="grid gap-1 md:grid-cols-2">
              {filtered.map((project, index) => (
                <ProjectGridCard
                  key={project.slug}
                  project={project}
                  index={index}
                />
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="py-16 text-center text-[15px] font-medium tracking-[-0.04em] text-[#0a0a0a]/60">
                No projects match your search.
              </p>
            )}
          </div>
        </div>
      </section>

      <ProjectsPageCTA />
    </>
  );
}
