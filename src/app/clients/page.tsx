"use client";

import { useMemo, useState } from "react";
import { PageSearchBar } from "@/components/PageSearchBar";
import { ProjectGridCard } from "@/components/ProjectGridCard";
import { ProjectsPageCTA } from "@/components/ProjectsPageCTA";
import { projectsPageCopy, projectsPageItems } from "@/lib/sections";

export default function ProjectsPage() {
  const { title, description, searchPlaceholder, categoryLabel, categories } =
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
            <div className="mb-[90px] grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-4">
              <div className="hidden lg:block" />

              <div className="text-center">
                <h1 className="text-[clamp(4rem,12vw,9rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-[#0a0a0a]">
                  {title}
                </h1>
              </div>

              <p className="max-w-[220px] justify-self-center text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-[#0a0a0a]/60 lg:justify-self-end lg:text-left">
                {description}
              </p>
            </div>

            <div className="mb-10">
              <PageSearchBar
                query={query}
                onQueryChange={setQuery}
                category={category}
                onCategoryChange={setCategory}
                searchPlaceholder={searchPlaceholder}
                categoryLabel={categoryLabel}
                categories={categories}
              />
            </div>

            <div className="mx-auto grid max-w-[1080px] gap-3 sm:grid-cols-2 md:gap-4">
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
