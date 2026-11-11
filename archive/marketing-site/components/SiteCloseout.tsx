"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/Footer";

/** Footer closeout — hidden on the full-bleed map. */
export function SiteCloseout() {
  const pathname = usePathname();
  if (pathname === "/map") return null;

  return (
    <div className="bg-[#0a0a0a]">
      <Footer />
    </div>
  );
}
