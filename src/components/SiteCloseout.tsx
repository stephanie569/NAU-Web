import { Footer } from "@/components/Footer";
import { PageBottomCTA } from "@/components/PageBottomCTA";

/** CTA + footer as one dark closeout that fills a viewport. */
export function SiteCloseout() {
  return (
    <div className="flex min-h-[calc(100svh-61px)] flex-col bg-[#0a0a0a]">
      <PageBottomCTA />
      <Footer />
    </div>
  );
}
