import type { Metadata } from "next";
import { FAQSection } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "FAQ – nau studio",
  description:
    "Answers on who nau studio works with, packages, on-location shoots in Europe, usage rights, and budgets.",
  openGraph: {
    title: "FAQ – nau studio",
    description:
      "Answers on who nau studio works with, packages, on-location shoots in Europe, usage rights, and budgets.",
    type: "website",
  },
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  return <FAQSection />;
}
