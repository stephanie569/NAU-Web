"use client";

import { useId, useRef, useState } from "react";
import Image from "next/image";
import { PlatformIcon } from "@/components/VideoPlatforms";
import { type ClientWorkItem } from "@/lib/clients";
import { getPlayableEmbedSrc, playLabel } from "@/lib/work-embed";

function SlideArrow({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous videos" : "Next videos"}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0a0a0a]/12 bg-white text-[#0a0a0a] transition-colors hover:bg-[#0a0a0a] hover:text-white"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden
        className={direction === "prev" ? "rotate-180" : undefined}
      >
        <path
          d="M6 3.5L10.5 8L6 12.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function PlayGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path d="M6.2 4.2v9.6L14.2 9 6.2 4.2Z" fill="currentColor" />
    </svg>
  );
}

function WorkCard({
  item,
  cardId,
  isPlaying,
  onPlay,
  onStop,
}: {
  item: ClientWorkItem;
  cardId: string;
  isPlaying: boolean;
  onPlay: (id: string) => void;
  onStop: () => void;
}) {
  const gradientId = useId().replace(/:/g, "");
  const embedSrc = getPlayableEmbedSrc(item, { autoplay: true });

  return (
    <article className="h-full w-[min(82vw,320px)] shrink-0 snap-start sm:w-[min(58vw,360px)]">
      <div className="overflow-hidden rounded-[18px] border border-[#0a0a0a]/8 bg-[#f7f7f7]">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#0a0a0a]">
          {isPlaying ? (
            <>
              <iframe
                src={embedSrc}
                title={item.title}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <button
                type="button"
                onClick={onStop}
                aria-label="Close video"
                className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-colors hover:bg-black/75"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path
                    d="M2.5 2.5l7 7M9.5 2.5l-7 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => onPlay(cardId)}
              className="group relative block h-full w-full text-left"
              aria-label={playLabel(item.platform)}
            >
              <Image
                src={item.thumbnail}
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="360px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/75 via-[#0a0a0a]/15 to-transparent" />
              <div className="absolute top-3 left-3">
                <PlatformIcon
                  name={item.platform}
                  gradientId={`${gradientId}-${item.platform}`}
                  size={32}
                />
              </div>
              <span className="absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0a0a0a] shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-transform group-hover:scale-105">
                <PlayGlyph />
              </span>
              <p className="absolute right-3 bottom-3 left-3 text-[15px] leading-snug font-semibold tracking-[-0.04em] text-white">
                {item.title}
              </p>
            </button>
          )}
        </div>
        <div className="flex items-center justify-between gap-3 px-4 py-3.5">
          <p className="text-[13px] font-medium tracking-[-0.03em] text-[#0a0a0a]/55">
            {isPlaying ? "Playing on this page" : playLabel(item.platform)}
          </p>
          {!isPlaying ? (
            <span
              aria-hidden
              className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0a0a0a] text-white"
            >
              <PlayGlyph />
            </span>
          ) : (
            <button
              type="button"
              onClick={onStop}
              className="text-[13px] font-semibold tracking-[-0.03em] text-[#0a0a0a] underline-offset-2 hover:underline"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export function ClientWorkSlider({ work }: { work: ClientWorkItem[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);

  const scrollBy = (direction: "prev" | "next") => {
    const node = scrollerRef.current;
    if (!node) return;
    const amount = Math.min(node.clientWidth * 0.8, 380);
    node.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  if (work.length === 0) {
    return (
      <p className="text-[15px] font-medium tracking-[-0.04em] text-[#0a0a0a]/50">
        Campaign videos will sit here once they are live: Instagram, TikTok,
        YouTube and LinkedIn, playable on this page.
      </p>
    );
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-end gap-2">
        <SlideArrow direction="prev" onClick={() => scrollBy("prev")} />
        <SlideArrow direction="next" onClick={() => scrollBy("next")} />
      </div>
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {work.map((item, index) => {
          const cardId = `${item.platform}-${item.title}-${index}`;
          return (
            <WorkCard
              key={cardId}
              item={item}
              cardId={cardId}
              isPlaying={playingId === cardId}
              onPlay={setPlayingId}
              onStop={() => setPlayingId(null)}
            />
          );
        })}
      </div>
    </div>
  );
}
