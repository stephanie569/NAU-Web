"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, type TouchEvent } from "react";
import type { BlogPost } from "@/lib/blog-types";

type Props = {
  next?: BlogPost;
  previous?: BlogPost;
  related: BlogPost[];
};

const SWIPE_THRESHOLD = 72;

export function BlogContinueReading({
  next,
  previous,
  related,
}: Props) {
  const router = useRouter();
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const featured = related[0];
  const more = related.slice(1, 3);

  function onTouchStart(e: TouchEvent) {
    const t = e.changedTouches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  }

  function onTouchEnd(e: TouchEvent) {
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    touchStart.current = null;

    // Ignore mostly-vertical gestures (page scroll)
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy) * 1.4) {
      return;
    }

    if (dx < 0 && next) {
      router.push(`/essays/${next.slug}`);
    } else if (dx > 0 && previous) {
      router.push(`/essays/${previous.slug}`);
    }
  }

  return (
    <div
      className="mt-20 border-t border-border pt-16"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <p className="text-xs uppercase tracking-widest text-muted">
        Continue reading
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-[1.75rem]">
        {featured
          ? "If this was useful, read this next"
          : "More from the journal"}
      </h2>
      <p className="mt-3 max-w-xl text-muted leading-relaxed">
        A complementary essay from the same thread.
      </p>
      <p className="mt-2 text-[13px] text-muted/80 md:hidden">
        Swipe left for next, right for previous.
      </p>

      {featured && (
        <Link
          href={`/essays/${featured.slug}`}
          className="group mt-10 grid gap-8 border border-border bg-surface/40 p-5 transition-colors hover:border-foreground/30 md:grid-cols-2 md:p-6"
        >
          <div className="relative aspect-[16/9] overflow-hidden bg-surface">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 360px"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-widest text-muted">
              Up next · {featured.category}
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground group-hover:underline md:text-2xl">
              {featured.title}
            </h3>
            <p className="mt-3 text-[15px] text-muted leading-relaxed line-clamp-3">
              {featured.excerpt}
            </p>
            <span className="mt-5 text-sm font-medium underline underline-offset-4">
              Read essay →
            </span>
          </div>
        </Link>
      )}

      {more.length > 0 && (
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {more.map((post) => (
            <Link
              key={post.slug}
              href={`/essays/${post.slug}`}
              className="group block border-b border-border pb-8 last:border-b-0 sm:border-b-0 sm:pb-0"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-surface">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 40vw"
                />
              </div>
              <p className="mt-4 text-xs uppercase tracking-widest text-muted">
                {post.category} · {post.date}
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground group-hover:underline">
                {post.title}
              </h3>
            </Link>
          ))}
        </div>
      )}

      <nav
        aria-label="Previous and next essays"
        className="mt-14 grid gap-6 border-t border-border pt-10 sm:grid-cols-2"
      >
        {previous ? (
          <Link
            href={`/essays/${previous.slug}`}
            className="group block text-left transition-opacity hover:opacity-80"
          >
            <p className="text-xs uppercase tracking-widest text-muted">
              ← Previous
            </p>
            <p className="mt-2 text-[15px] font-medium tracking-tight text-foreground group-hover:underline">
              {previous.title}
            </p>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/essays/${next.slug}`}
            className="group block text-left sm:text-right transition-opacity hover:opacity-80"
          >
            <p className="text-xs uppercase tracking-widest text-muted">
              Next →
            </p>
            <p className="mt-2 text-[15px] font-medium tracking-tight text-foreground group-hover:underline">
              {next.title}
            </p>
          </Link>
        ) : null}
      </nav>
    </div>
  );
}
