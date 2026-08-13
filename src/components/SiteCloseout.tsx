"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/Footer";
import { PageBottomCTA } from "@/components/PageBottomCTA";

/** CTA + footer as one dark closeout that fills a viewport. */
export function SiteCloseout() {
  const pathname = usePathname();
  const hideCta =
    pathname === "/" ||
    pathname === "/contact" ||
    pathname === "/studio" ||
    pathname.startsWith("/legal") ||
    /^\/products\/[^/]+$/.test(pathname);

  return (
    <div
      className={
        hideCta
          ? "bg-[#0a0a0a]"
          : "flex min-h-[calc(100svh-61px)] flex-col bg-[#0a0a0a]"
      }
    >
      {!hideCta ? <PageBottomCTA /> : null}
      <Footer />
    </div>
  );
}
