import { PageHero } from "@/components/ui";
import { JournalListing } from "@/components/JournalListing";
import { blogPosts } from "@/lib/blog";

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Journal"
        subtitle="Practical notes on product strategy, websites, and the oddly expensive ways startups confuse themselves."
      />

      <section className="border-b border-border pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <JournalListing posts={blogPosts} />
        </div>
      </section>
    </>
  );
}
