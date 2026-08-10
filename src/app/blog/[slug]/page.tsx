import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FadeIn } from "@/components/ui";
import { RichText } from "@/components/RichText";
import { BlogContinueReading } from "@/components/BlogContinueReading";
import {
  blogPosts,
  getAdjacentPosts,
  getBlogPost,
  getRelatedPosts,
  type BlogBlock,
} from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} | nau Blog`,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      images: [{ url: post.image }],
      type: "article",
    },
  };
}

function BlogContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="max-w-none">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p
                key={i}
                className="mt-6 text-muted leading-relaxed first:mt-0"
              >
                <RichText text={block.text} />
              </p>
            );
          case "h2":
            return (
              <h2
                key={i}
                className="mt-12 text-2xl font-semibold tracking-tight text-foreground md:text-[1.75rem]"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="mt-8 text-lg font-semibold tracking-tight text-foreground"
              >
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul
                key={i}
                className="mt-6 list-disc space-y-3 pl-5 text-muted leading-relaxed"
              >
                {block.items.map((item) => (
                  <li key={item}>
                    <RichText text={item} />
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol
                key={i}
                className="mt-6 list-decimal space-y-3 pl-5 text-muted leading-relaxed"
              >
                {block.items.map((item) => (
                  <li key={item}>
                    <RichText text={item} />
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="mt-10 border-l-2 border-foreground pl-6 text-lg font-medium leading-relaxed tracking-tight text-foreground"
              >
                <RichText text={block.text} />
              </blockquote>
            );
          case "image":
            return (
              <div
                key={i}
                className="relative mt-10 aspect-[16/9] overflow-hidden bg-surface"
              >
                <Image
                  src={block.src}
                  alt={block.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
            );
          case "callout":
            return (
              <aside
                key={i}
                className="mt-10 border border-border bg-surface px-6 py-6 md:px-8"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-foreground">
                  {block.title}
                </p>
                <p className="mt-3 text-muted leading-relaxed">
                  <RichText text={block.text} />
                </p>
              </aside>
            );
          case "takeaway":
            return (
              <aside
                key={i}
                className="mt-8 border-l-2 border-foreground/40 bg-surface/80 py-4 pl-5 pr-4"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-foreground">
                  Key takeaway
                </p>
                <p className="mt-2 text-[15px] font-medium leading-relaxed text-foreground">
                  <RichText text={block.text} />
                </p>
              </aside>
            );
          case "table":
            return (
              <div key={i} className="mt-8 overflow-x-auto">
                <table className="w-full min-w-[480px] border-collapse text-left text-[14px]">
                  <thead>
                    <tr className="border-b border-border">
                      {block.headers.map((header) => (
                        <th
                          key={header}
                          className="px-3 py-3 font-semibold tracking-tight text-foreground"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className="border-b border-border/70">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={`${rowIndex}-${cellIndex}`}
                            className="px-3 py-3 align-top text-muted leading-relaxed"
                          >
                            <RichText text={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "faq":
            return (
              <div key={i} className="mt-10 space-y-6">
                {block.items.map((item) => (
                  <div key={item.question}>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {item.question}
                    </h3>
                    <p className="mt-2 text-muted leading-relaxed">
                      <RichText text={item.answer} />
                    </p>
                  </div>
                ))}
              </div>
            );
          case "cta":
            return (
              <div
                key={i}
                className="mt-14 border border-border bg-surface px-6 py-8 md:px-8"
              >
                <p className="text-lg font-semibold tracking-tight text-foreground">
                  {block.lead}
                </p>
                <Link
                  href={block.href}
                  className="mt-5 inline-flex items-center justify-between gap-4 rounded-full bg-[#0a0a0a] py-2.5 pr-2 pl-5 text-sm font-semibold text-white transition-opacity hover:opacity-85"
                >
                  <span>{block.button}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                    <span className="h-2 w-2 rounded-full bg-[#0a0a0a]" />
                  </span>
                </Link>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const { previous, next } = getAdjacentPosts(slug);
  const related = getRelatedPosts(slug, 3);

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
            <BlogContent blocks={post.content} />
          </FadeIn>

          <FadeIn>
            <BlogContinueReading
              previous={previous}
              next={next}
              related={related}
            />
          </FadeIn>

          <FadeIn className="mt-12">
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
