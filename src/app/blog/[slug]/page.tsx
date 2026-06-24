import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/ui";
import { blogPosts } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <>
      <article className="border-b border-border pt-32 pb-16 md:pt-40">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-muted">
              {post.category} · {post.date}
            </p>
            <h1 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-tight tracking-tight">
              {post.title}
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              {post.excerpt}
            </p>
          </FadeIn>
        </div>
      </article>

      <div className="relative aspect-[21/9] w-full bg-surface">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <FadeIn>
            <div className="prose prose-neutral max-w-none">
              <p className="text-muted leading-relaxed">
                Great digital experiences start with clear strategy. In this
                article, we break down practical approaches teams can apply
                immediately—without unnecessary complexity.
              </p>
              <p className="mt-6 text-muted leading-relaxed">
                Whether you are refreshing a brand, launching a product, or
                improving conversion performance, the same principle applies:
                focus on clarity, purpose, and outcomes that matter to your
                audience.
              </p>
              <p className="mt-6 text-muted leading-relaxed">
                We prioritize performance without sacrificing visual appeal or
                functionality. That balance is what helps businesses generate
                real, measurable results over time.
              </p>
            </div>
          </FadeIn>

          <FadeIn className="mt-16">
            <Link
              href="/blog"
              className="text-sm font-medium underline underline-offset-4 hover:opacity-70"
            >
              ← Back to blog
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
