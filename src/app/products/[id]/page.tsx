import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { GuideOverviewPage } from "@/components/GuideOverviewPage";
import { storeSectionCopy } from "@/lib/sections";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ checkout?: string }>;
};

export function generateStaticParams() {
  return storeSectionCopy.items.map((guide) => ({ id: guide.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const guide = storeSectionCopy.items.find((item) => item.id === id);
  if (!guide) return {};

  return {
    title: `${guide.title} · nau digital guides`,
    description: guide.overview.lead,
  };
}

export default async function ProductGuidePage({ params, searchParams }: Props) {
  const { id } = await params;
  const { checkout } = await searchParams;
  const guide = storeSectionCopy.items.find((item) => item.id === id);

  if (!guide) notFound();

  return <GuideOverviewPage guide={guide} checkoutState={checkout} />;
}
