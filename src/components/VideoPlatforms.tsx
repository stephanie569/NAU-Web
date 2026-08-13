"use client";

import { useId } from "react";
import { industriesSectionCopy } from "@/lib/sections";

export function PlatformIcon({
  name,
  gradientId,
  size = 28,
}: {
  name: string;
  gradientId: string;
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 28 28",
    "aria-hidden": true as const,
    className: "block shrink-0",
    shapeRendering: "geometricPrecision" as const,
  };

  if (name === "Instagram") {
    return (
      <svg {...common}>
        <defs>
          <radialGradient
            id={gradientId}
            cx="30%"
            cy="107%"
            r="150%"
            fx="30%"
            fy="107%"
          >
            <stop offset="0%" stopColor="#fdf497" />
            <stop offset="5%" stopColor="#fdf497" />
            <stop offset="45%" stopColor="#fd5949" />
            <stop offset="60%" stopColor="#d6249f" />
            <stop offset="90%" stopColor="#285AEB" />
          </radialGradient>
        </defs>
        <rect width="28" height="28" rx="7" fill={`url(#${gradientId})`} />
        <rect
          x="6.5"
          y="6.5"
          width="15"
          height="15"
          rx="4.5"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
        />
        <circle
          cx="14"
          cy="14"
          r="3.75"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
        />
        <circle cx="19.35" cy="8.65" r="1.35" fill="#fff" />
      </svg>
    );
  }

  if (name === "YouTube Shorts") {
    return (
      <svg {...common}>
        <rect width="28" height="28" rx="7" fill="#FF0000" />
        <path d="M11.2 8.8v10.4L20.4 14 11.2 8.8Z" fill="#fff" />
      </svg>
    );
  }

  if (name === "TikTok") {
    return (
      <svg {...common}>
        <rect width="28" height="28" rx="7" fill="#010101" />
        {/* Cyan offset */}
        <path
          d="M17.1 5.2c.4 1.55 1.4 2.65 3.05 3.1v2.35c-1.05 0-2.05-.3-2.9-.85v5.15c0 2.7-2.1 4.8-4.85 4.8S7.55 17.65 7.55 14.95c0-2.7 2.1-4.8 4.85-4.8.35 0 .7.04 1.02.1v2.45a2.4 2.4 0 0 0-1.02-.23c-1.35 0-2.45 1.12-2.45 2.48s1.1 2.48 2.45 2.48 2.45-1.12 2.45-2.48V5.2h2.25Z"
          fill="#25F4EE"
        />
        {/* Magenta offset */}
        <path
          d="M18.35 4.2c.4 1.55 1.4 2.65 3.05 3.1v2.35c-1.05 0-2.05-.3-2.9-.85v5.15c0 2.7-2.1 4.8-4.85 4.8S8.8 16.65 8.8 13.95c0-2.7 2.1-4.8 4.85-4.8.35 0 .7.04 1.02.1v2.45a2.4 2.4 0 0 0-1.02-.23c-1.35 0-2.45 1.12-2.45 2.48s1.1 2.48 2.45 2.48 2.45-1.12 2.45-2.48V4.2h2.25Z"
          fill="#FE2C55"
        />
        {/* White core */}
        <path
          d="M17.7 4.7c.4 1.55 1.4 2.65 3.05 3.1v2.35c-1.05 0-2.05-.3-2.9-.85v5.15c0 2.7-2.1 4.8-4.85 4.8S8.15 17.15 8.15 14.45c0-2.7 2.1-4.8 4.85-4.8.35 0 .7.04 1.02.1v2.45a2.4 2.4 0 0 0-1.02-.23c-1.35 0-2.45 1.12-2.45 2.48s1.1 2.48 2.45 2.48 2.45-1.12 2.45-2.48V4.7h2.25Z"
          fill="#fff"
        />
      </svg>
    );
  }

  // LinkedIn
  return (
    <svg {...common}>
      <rect width="28" height="28" rx="7" fill="#0A66C2" />
      <path
        d="M8.1 11.15h2.55v8.55H8.1v-8.55Zm1.25-4.05a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12.55 11.15h2.45v1.15h.03c.34-.65 1.18-1.35 2.42-1.35 2.6 0 3.08 1.7 3.08 3.92v4.83h-2.55v-4.28c0-1.02-.02-2.33-1.42-2.33-1.42 0-1.64 1.1-1.64 2.25v4.36h-2.55v-8.55Z"
        fill="#fff"
      />
    </svg>
  );
}

export function VideoPlatforms({
  className = "",
  align = "center",
  tone = "dark",
  variant = "pills",
  label,
  invite,
}: {
  className?: string;
  align?: "center" | "start";
  tone?: "dark" | "light";
  /** `pills` = labeled chips; `proof` = invite + larger icons under metrics */
  variant?: "pills" | "proof";
  label?: string;
  invite?: string;
}) {
  const { platformsLabel, platforms } = industriesSectionCopy;
  const gradientId = `ig-grad-${useId().replace(/:/g, "")}`;
  const heading = label ?? platformsLabel;
  const onLight = tone === "light";

  if (variant === "proof") {
    return (
      <div
        className={`${align === "center" ? "text-center" : "text-left"} ${className}`}
      >
        {invite ? (
          <p
            className={`max-w-[34rem] text-[15px] leading-snug font-medium tracking-[-0.03em] md:text-[16px] ${
              onLight ? "text-[#0a0a0a]" : "text-white"
            }`}
          >
            {invite}
          </p>
        ) : (
          <p
            className={`text-[12px] font-medium tracking-[-0.03em] ${
              onLight ? "text-[#0a0a0a]/45" : "text-white/45"
            }`}
          >
            {heading}
          </p>
        )}
        <ul
          className={`mt-4 flex flex-wrap items-center gap-2.5 sm:gap-3 ${
            align === "center" ? "justify-center" : ""
          }`}
          aria-label={heading}
        >
          {platforms.map((platform) => (
            <li key={platform} title={platform} className="leading-none">
              <PlatformIcon
                name={platform}
                gradientId={`${gradientId}-${platform.replace(/\s/g, "")}`}
                size={40}
              />
              <span className="sr-only">{platform}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div
      className={`${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      <p
        className={`text-[11px] font-semibold tracking-[0.12em] uppercase ${
          onLight ? "text-[#0a0a0a]/40" : "text-white/40"
        }`}
      >
        {heading}
      </p>
      <ul
        className={`mt-4 flex flex-wrap gap-2 sm:gap-2.5 ${
          align === "center" ? "items-center justify-center" : "items-center"
        }`}
      >
        {platforms.map((platform) => (
          <li key={platform}>
            <span
              className={`inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 text-[13px] font-medium tracking-[-0.03em] md:text-[14px] ${
                onLight
                  ? "border-[#0a0a0a]/10 bg-[#0a0a0a]/[0.03] text-[#0a0a0a]/80"
                  : "border-white/15 bg-white/[0.04] text-white/85"
              }`}
            >
              <PlatformIcon
                name={platform}
                gradientId={`${gradientId}-${platform.replace(/\s/g, "")}`}
                size={20}
              />
              {platform}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
