import { HeroCard } from "@/components/Hero";

export function HeroScroll() {
  return (
    <section className="bg-white">
      <div className="h-[calc(100vh-61px)] px-1 pb-1">
        <HeroCard />
      </div>
    </section>
  );
}
