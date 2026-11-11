import type { Metadata } from "next";
import { WildlifeMap } from "@/components/map/WildlifeMap";

export const metadata: Metadata = {
  title: "Conservation | nau",
  description: "Explore Earth on an interactive conservation globe.",
  openGraph: {
    title: "Conservation | nau",
    description: "Spin the planet — drag to rotate, scroll to zoom.",
    type: "website",
  },
  alternates: {
    canonical: "/conservation",
  },
};

export default function ConservationPage() {
  return <WildlifeMap />;
}
