import { HeroCard } from "@/components/Hero";

export function HeroScroll() {
  return (
    <section className="bg-white">
      <div className="h-[calc(100dvh-61px-1.75rem)] px-1 pb-1 sm:h-[calc(100vh-61px)]">
        <HeroCard />
      </div>
    </section>
  );
}
