"use client";

import Image from "next/image";
import Link from "next/link";
import { testimonialsSectionCopy } from "@/lib/sections";

const img = (id: string, size = 80) =>
  `https://framerusercontent.com/images/${id}.jpg?width=${size}&height=${size}`;

function PlusBadge() {
  return (
    <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0a0a0a]">
      <span className="absolute h-px w-3 bg-white" />
      <span className="absolute h-3 w-px bg-white" />
    </span>
  );
}

function StarRating() {
  return (
    <div className="flex items-center gap-0.5 text-[#f97316]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 16 16"
          className="h-3.5 w-3.5 fill-current"
          aria-hidden
        >
          <path d="M8 1.5l1.76 3.57 3.94.57-2.85 2.78.67 3.92L8 10.67l-3.52 1.85.67-3.92-2.85-2.78 3.94-.57L8 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function CardPlusIcon() {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#0a0a0a]/10 text-[#0a0a0a]/35">
      <span className="relative block h-2.5 w-2.5">
        <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
        <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-current" />
      </span>
    </span>
  );
}

function ProfileBlock({
  author,
  role,
  image,
  boxed = false,
}: {
  author: string;
  role: string;
  image: string;
  boxed?: boolean;
}) {
  const content = (
    <div className="flex items-center gap-3">
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-[10px]">
        <Image
          src={img(image, 96)}
          alt={author}
          fill
          className="object-cover"
          sizes="48px"
        />
      </div>
      <div>
        <p className="text-[15px] font-semibold tracking-[-0.04em] text-[#0a0a0a]">
          {author}
        </p>
        <p className="text-[13px] font-medium tracking-[-0.04em] text-[#0a0a0a]/60">
          {role}
        </p>
      </div>
    </div>
  );

  if (boxed) {
    return (
      <div className="rounded-[14px] border border-[#0a0a0a]/8 bg-[#f5f5f5] p-4">
        {content}
      </div>
    );
  }

  return content;
}

function SummaryCard() {
  const { summary } = testimonialsSectionCopy;

  return (
    <div className="flex min-h-[520px] flex-col justify-between rounded-[18px] bg-white p-6 md:p-8">
      <div className="flex items-start justify-between gap-6">
        <div className="flex items-start gap-1">
          <span className="text-[clamp(2.5rem,5vw,3.5rem)] leading-none font-semibold tracking-[-0.06em] text-[#0a0a0a]">
            {summary.rating}
          </span>
          <span className="pt-2 text-[15px] font-semibold tracking-[-0.04em] text-[#0a0a0a]/60">
            {summary.suffix}
          </span>
        </div>
        <p className="max-w-[150px] text-right text-[13px] leading-relaxed font-medium tracking-[-0.04em] text-[#0a0a0a]/60">
          {summary.intro}{" "}
          <span className="text-[#0a0a0a]">{summary.highlight}</span>{" "}
          {summary.text}
        </p>
      </div>

      <div>
        <p className="mb-8 text-[clamp(1.75rem,3vw,2.25rem)] font-semibold tracking-[-0.06em] text-[#0a0a0a]">
          fabrica<span className="text-[#0a0a0a]/60">®</span>
        </p>

        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center">
            {summary.avatars.map((avatar, i) => (
              <div
                key={avatar}
                className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white"
                style={{ marginLeft: i === 0 ? 0 : -10, zIndex: 10 - i }}
              >
                <Image
                  src={img(avatar, 72)}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="36px"
                />
              </div>
            ))}
            <div
              className="relative z-0 flex h-9 w-9 items-center justify-center rounded-full bg-[#0a0a0a] text-[11px] font-semibold tracking-[-0.04em] text-white"
              style={{ marginLeft: -10 }}
            >
              {summary.projectCount}
            </div>
          </div>

          <div className="text-right">
            <StarRating />
            <p className="mt-2 text-[13px] font-medium tracking-[-0.04em] text-[#0a0a0a]/60">
              {summary.trustedBy}
            </p>
          </div>
        </div>

        <Link
          href="/contact"
          className="flex w-full items-center justify-center rounded-full bg-[#0a0a0a] px-6 py-4 text-[15px] font-semibold tracking-[-0.04em] text-white transition-opacity hover:opacity-85"
        >
          {summary.cta}
        </Link>
      </div>
    </div>
  );
}

function ReviewCard({
  review,
}: {
  review: (typeof testimonialsSectionCopy.reviews)[number];
}) {
  const profile = (
    <ProfileBlock
      author={review.author}
      role={review.role}
      image={review.image}
      boxed={review.layout !== "profile-top"}
    />
  );

  const quote = (
    <p className="text-[clamp(1.35rem,2.2vw,1.75rem)] leading-[1.2] font-semibold tracking-[-0.04em] text-[#0a0a0a]">
      {review.quote}
    </p>
  );

  const ratingRow = (
    <div className="flex items-center justify-between">
      <StarRating />
      <CardPlusIcon />
    </div>
  );

  return (
    <div className="flex min-h-[520px] flex-col justify-between rounded-[18px] bg-white p-6 md:p-8">
      {review.layout === "profile-top" && profile}
      {review.layout === "profile-top-box" && profile}
      {review.layout === "profile-bottom" && quote}

      {ratingRow}

      {review.layout === "profile-top" && quote}
      {review.layout === "profile-top-box" && quote}
      {review.layout === "profile-bottom" && profile}
    </div>
  );
}

export function TestimonialsSection() {
  const { label, title, year, reviews } = testimonialsSectionCopy;

  return (
    <section className="bg-[#f5f5f5] px-6 pt-[110px] pb-28 md:px-9">
      <div className="mx-auto w-full max-w-[1520px]">
        <div className="mb-[90px] flex items-center gap-3">
          <PlusBadge />
          <p className="text-[15px] font-medium tracking-[-0.04em] text-[#0a0a0a]">
            {label}
          </p>
        </div>

        <div className="mb-[90px]">
          <h2 className="text-[clamp(4rem,12vw,9rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-[#0a0a0a]">
            {title}
          </h2>
          <p className="mt-3 text-[clamp(1.25rem,2.5vw,2.25rem)] font-semibold tracking-[-0.06em] text-[#0a0a0a]">
            {year}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 xl:grid-cols-4">
          <SummaryCard />
          {reviews.map((review) => (
            <ReviewCard key={review.author} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
