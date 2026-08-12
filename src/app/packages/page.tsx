import { PackagesPageContent } from "@/components/PackagesPageContent";
import { PackagesPageCTA } from "@/components/PackagesPageCTA";
import { storeSectionCopy } from "@/lib/sections";

export default async function PackagesPage({
  searchParams,
}: {
  searchParams: Promise<{ checkout?: string; guide?: string }>;
}) {
  const params = await searchParams;
  const checkoutGuide = storeSectionCopy.items.find(
    (item) => item.id === params.guide,
  );

  return (
    <>
      <PackagesPageContent
        checkoutState={params.checkout}
        checkoutGuideTitle={checkoutGuide?.title}
      />
      <PackagesPageCTA />
    </>
  );
}
