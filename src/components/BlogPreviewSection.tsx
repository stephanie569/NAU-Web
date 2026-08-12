import Image from "next/image";
import Link from "next/link";
import { NauButton } from "@/components/NauButton";
import { NauLogoMark } from "@/components/NauLogoMark";
import {
  blogFeaturedPost,
  blogPreviewPosts,
  blogSectionCopy,
} from "@/lib/sections";

function CardPlusIcon() {
  return (
    <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0a0a0a]">
      <span className="absolute h-px w-3 bg-white" />
      <span className="absolute h-3 w-px bg-white" />
    </span>
  );
}

function FeaturedPlusIcon() {
  return (
    <span className="relative block h-3 w-3">
      <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-white" />
      <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-white" />
    </span>
  );
}

function BlogCard({
  post,
}: {
  post: (typeof blogPreviewPosts)[number];
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex min-h-[420px] flex-col justify-between rounded-[14px] bg-white p-6 md:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[10px]">
          <Image
            src={post.authorImage}
            alt=""
            fill
            className="object-cover grayscale"
            sizes="56px"
          />
        </div>
        <CardPlusIcon />
      </div>

      <div>
        <p className="text-[13px] font-medium tracking-[-0.04em] text-[#0a0a0a]/60">
          {post.date}
        </p>
        <h3 className="mt-3 text-[18px] leading-snug font-semibold tracking-[-0.04em] text-[#0a0a0a] transition-opacity group-hover:opacity-70">
          {post.title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-[#0a0a0a]/60">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}

function FeaturedBlogCard() {
  const { featuredTitle } = blogSectionCopy;

  return (
    <Link
      href={`/blog/${blogFeaturedPost.slug}`}
      className="group relative block min-h-[420px] overflow-hidden rounded-[14px] md:col-span-2 lg:col-span-2"
    >
      <Image
        src={blogFeaturedPost.image}
        alt={featuredTitle}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-[#0a0a0a]/20" />

      <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <NauLogoMark size="xs" className="text-white" />
          <FeaturedPlusIcon />
        </div>

        <p className="self-end text-right text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.05] font-semibold tracking-[-0.06em] text-white">
          {featuredTitle}
        </p>
      </div>
    </Link>
  );
}

export function BlogPreviewSection() {
  const { title, titleMuted, description, cta, ctaHref } = blogSectionCopy;

  return (
    <section
      id="blog"
      className="scroll-mt-[61px] bg-[#f5f5f5] px-6 pb-28 pt-16 md:px-9 md:pb-36 md:pt-24"
    >
      <div className="mx-auto w-full max-w-[1520px]">
        <div className="mb-12 grid grid-cols-1 gap-8 lg:mb-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)_auto] lg:items-end lg:gap-10">
          <h2 className="max-w-[520px] text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] font-semibold tracking-[-0.06em] text-[#0a0a0a]">
            {title}{" "}
            <span className="text-[#0a0a0a]/60">{titleMuted}</span>
          </h2>

          <p className="max-w-[320px] text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-[#0a0a0a]/60 lg:justify-self-center">
            {description}
          </p>

          <NauButton href={ctaHref} className="lg:justify-self-end">
            {cta}
          </NauButton>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-1 md:grid-cols-2 lg:grid-cols-4">
          {blogPreviewPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
          <FeaturedBlogCard />
        </div>
      </div>
    </section>
  );
}
