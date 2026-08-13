import { PageHero } from "@/components/ui";
import { JournalListing } from "@/components/JournalListing";
import { blogPosts } from "@/lib/blog";

export default function EssaysPage() {
  return (
    <>
      <PageHero
        title="Essays"
        subtitle="Essays on organic go-to-market, positioning and content that matters for brands growing steadily."
      />

      <section className="bg-[#f5f5f5] pb-20 md:pb-28">
        <div className="mx-auto max-w-[1080px] px-6 md:px-10">
          <JournalListing posts={blogPosts} />
        </div>
      </section>
    </>
  );
}
