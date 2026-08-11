"use client";

import { Bagel_Fat_One } from "next/font/google";
import type { ElementType } from "react";

/** Matches the official nau wordmark typeface (chunky / Bagel Fat One). */
const nauMark = Bagel_Fat_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const sizes = {
  hero: "text-[clamp(4.75rem,13vw,10.5rem)]",
  display: "text-[clamp(3rem,8vw,5.5rem)]",
  footer: "text-[clamp(2.75rem,6vw,4rem)]",
  lg: "text-[clamp(2.5rem,8vw,5rem)]",
  md: "text-[clamp(1.75rem,3vw,2.25rem)]",
  sm: "text-[1.35rem]",
  xs: "text-[1.05rem]",
} as const;

type NauLogoMarkProps = {
  className?: string;
  size?: keyof typeof sizes;
  as?: ElementType;
};

export function NauLogoMark({
  className = "",
  size = "hero",
  as: Tag = "span",
}: NauLogoMarkProps) {
  return (
    <Tag
      className={`${nauMark.className} ${sizes[size]} block leading-none tracking-[-0.045em] ${className}`}
      aria-hidden
    >
      nau
    </Tag>
  );
}
