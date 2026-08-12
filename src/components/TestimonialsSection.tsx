import Image from "next/image";
import { testimonialsSectionCopy } from "@/lib/sections";

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

function BrandLogo({
  src,
  alt,
  className = "",
  imageClassName = "",
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div className={`relative shrink-0 overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-contain ${imageClassName}`}
        sizes="32px"
      />
    </div>
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
    <div className="flex items-center gap-2.5">
      <BrandLogo
        src={image}
        alt={`${author} logo`}
        className="h-8 w-8 rounded-[8px]"
        imageClassName={image.includes("the-pine") ? "scale-[1.15]" : "p-0.5"}
      />
      <div>
        <p className="text-[14px] font-semibold tracking-[-0.04em] text-[#0a0a0a]">
          {author}
        </p>
        <p className="text-[12px] font-medium tracking-[-0.04em] text-[#0a0a0a]/60">
          {role}
        </p>
      </div>
    </div>
  );

  if (boxed) {
    return (
      <div className="rounded-[12px] border border-[#0a0a0a]/8 bg-[#f5f5f5] px-3 py-2.5">
        {content}
      </div>
    );
  }

  return content;
}

function SummaryCard() {
  const { summary } = testimonialsSectionCopy;

  return (
    <div className="flex min-h-[min(420px,52svh)] flex-col justify-between rounded-[18px] bg-white p-5 md:p-6">
      <div className="flex items-start gap-1">
        <span className="text-[clamp(2.5rem,5vw,3.5rem)] leading-none font-semibold tracking-[-0.06em] text-[#0a0a0a]">
          {summary.rating}
        </span>
        <span className="pt-2 text-[15px] font-semibold tracking-[-0.04em] text-[#0a0a0a]/60">
          {summary.suffix}
        </span>
      </div>

      <div className="flex items-end justify-between gap-4">
        <div className="flex items-center">
          {summary.avatars.map((avatar, i) => (
            <div
              key={avatar}
              className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white bg-[#f5f5f5]"
              style={{ marginLeft: i === 0 ? 0 : -10, zIndex: 10 - i }}
            >
              <Image
                src={avatar}
                alt=""
                fill
                className="object-contain p-1"
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
      boxed={review.layout === "profile-top-box"}
    />
  );

  const quote = (
    <p className="text-[clamp(0.95rem,1.35vw,1.1rem)] leading-[1.4] font-medium tracking-[-0.04em] text-[#0a0a0a]">
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
    <div className="flex min-h-[min(420px,52svh)] flex-col justify-between rounded-[18px] bg-white p-5 md:p-6">
      {review.layout === "profile-top-box" && profile}
      {review.layout === "profile-bottom" && quote}

      {ratingRow}

      {review.layout === "profile-top-box" && quote}
      {review.layout === "profile-bottom" && profile}
    </div>
  );
}

export function TestimonialsSection() {
  const { title, year, reviews } = testimonialsSectionCopy;

  return (
    <section
      id="experiences"
      className="box-border flex min-h-[calc(100svh-61px)] scroll-mt-[61px] flex-col justify-center bg-[#f5f5f5] px-6 py-14 md:px-9 md:py-16"
    >
      <div className="mx-auto w-full max-w-[1520px]">
        <div className="mb-6 text-center lg:mb-7">
          <h2 className="text-[clamp(2.75rem,7vw,4.75rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-[#0a0a0a]">
            {title}
          </h2>
          <p className="mt-2 text-[clamp(1rem,1.8vw,1.5rem)] font-semibold tracking-[-0.06em] text-[#0a0a0a]">
            {year}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          <SummaryCard />
          {reviews.map((review) => (
            <ReviewCard key={review.author} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
