import { PageHero } from "@/components/ui";
import { JournalListing } from "@/components/JournalListing";
import { getBlogListingPosts } from "@/lib/blog";

export default function EssaysPage() {
  const listingPosts = getBlogListingPosts();
  return (
    <>
      <PageHero
        title="Essays"
        subtitle="Essays on organic go-to-market, positioning and content that matters for brands growing steadily."
        wide
      />

      <section className="bg-[#f5f5f5] pt-8 pb-20 md:pt-12 md:pb-28">
        <div className="mx-auto w-full max-w-[1520px] px-6 md:px-9">
          <JournalListing posts={listingPosts} />
        </div>
      </section>
    </>
  );
}
