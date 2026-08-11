import { HeroScroll } from "@/components/HeroScroll";
import { ClientsSection } from "@/components/ClientsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { TeamSection } from "@/components/TeamSection";
import { FAQSection } from "@/components/FAQSection";
import { BlogPreviewSection } from "@/components/BlogPreviewSection";

export default function HomePage() {
  return (
    <>
      <HeroScroll />
      <ClientsSection />
      <TeamSection />
      <ProjectsSection />
      <ServicesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <BlogPreviewSection />
    </>
  );
}
