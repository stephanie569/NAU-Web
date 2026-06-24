import { HeroScroll } from "@/components/HeroScroll";
import { ClientsSection } from "@/components/ClientsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ImpactStatsSection } from "@/components/ImpactStatsSection";
import { PricingSection } from "@/components/PricingSection";
import { MoreServicesSection } from "@/components/MoreServicesSection";
import { TeamSection } from "@/components/TeamSection";
import { FAQSection } from "@/components/FAQSection";
import { BlogPreviewSection } from "@/components/BlogPreviewSection";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroScroll />
      <ClientsSection />
      <ProjectsSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <TestimonialsSection />
      <ImpactStatsSection />
      <PricingSection />
      <MoreServicesSection />
      <TeamSection />
      <FAQSection />
      <BlogPreviewSection />
      <ContactSection />
    </>
  );
}
