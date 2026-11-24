"use client";

import type { ElementType } from "react";
import { nauMark } from "@/lib/fonts";

const sizes = {
  hero: "text-[clamp(6.5rem,16.5vw,14rem)]",
  display: "text-[clamp(3rem,8vw,5.5rem)]",
  footer: "text-[clamp(2.85rem,14vw,9rem)]",
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
