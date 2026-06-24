import Image from "next/image";
import Link from "next/link";
import { PageHero, FadeIn } from "@/components/ui";
import { blogPosts } from "@/lib/data";

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Trends and insights from our team."
      />

      <section className="border-b border-border pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-12">
            {blogPosts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.05}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group grid gap-8 border-b border-border pb-12 md:grid-cols-2"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-surface">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs uppercase tracking-widest text-muted">
                      {post.category} · {post.date}
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold group-hover:underline">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-muted leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
