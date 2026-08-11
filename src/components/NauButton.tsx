"use client";

import Link from "next/link";
import type { ButtonHTMLAttributes, MouseEvent, MouseEventHandler, ReactNode } from "react";

const baseClass =
  "inline-flex items-center gap-3 rounded-full py-1.5 pr-1.5 pl-4 text-[13px] font-semibold tracking-[-0.04em] transition-opacity hover:opacity-85";

const variants = {
  dark: {
    root: "bg-[#0a0a0a] text-white",
    circle: "bg-white",
    dot: "bg-[#0a0a0a]",
    electric: "nau-electric-dark",
  },
  light: {
    root: "bg-white text-[#0a0a0a]",
    circle: "bg-[#0a0a0a]",
    dot: "bg-white",
    electric: "nau-electric-light",
  },
} as const;

type NauButtonProps = {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  /** Pulsating electric cyan glow. Defaults to on for Work with me / contact links. */
  electric?: boolean;
  /** `dark` = menu style (black). `light` = inverted for dark backgrounds. */
  variant?: keyof typeof variants;
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
} & Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className" | "children" | "onClick"
>;

function NauButtonInner({
  children,
  variant = "dark",
}: {
  children: ReactNode;
  variant?: keyof typeof variants;
}) {
  const colors = variants[variant];
  return (
    <>
      <span>{children}</span>
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${colors.circle}`}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${colors.dot}`} />
      </span>
    </>
  );
}

function isContactHref(href?: string) {
  return href === "/contact" || href === "/#contact" || href === "#contact";
}

function handleHashLinkClick(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>,
) {
  onClick?.(event);
  if (event.defaultPrevented) return;
  if (!href.includes("#")) return;

  const id = href.split("#")[1];
  if (!id) return;

  const onHome =
    window.location.pathname === "/" || window.location.pathname === "";
  if (!onHome && href.startsWith("/#")) return;

  const target = document.getElementById(id);
  if (!target) return;

  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth" });
  window.history.replaceState(null, "", `/#${id}`);
}

export function NauButton({
  children,
  className = "",
  fullWidth = false,
  electric,
  variant = "dark",
  href,
  type = "button",
  onClick,
  ...rest
}: NauButtonProps) {
  const isElectric = electric ?? isContactHref(href);
  const colors = variants[variant];

  const wantsFullWidth = fullWidth || /\bw-full\b/.test(className);

  const buttonClasses = `${baseClass} ${colors.root} ${
    isElectric ? colors.electric : ""
  } ${wantsFullWidth ? "w-full justify-between pl-5" : "w-fit shrink-0"} ${
    isElectric ? "" : className
  }`.trim();

  const button = href ? (
    <Link
      href={href}
      className={buttonClasses}
      onClick={(event) => handleHashLinkClick(event, href, onClick)}
    >
      <NauButtonInner variant={variant}>{children}</NauButtonInner>
    </Link>
  ) : (
    <button type={type} className={buttonClasses} onClick={onClick} {...rest}>
      <NauButtonInner variant={variant}>{children}</NauButtonInner>
    </button>
  );

  if (!isElectric) return button;

  return (
    <span
      className={`nau-electric-spacer inline-flex items-center ${wantsFullWidth ? "w-full" : ""} ${className}`.trim()}
    >
      {button}
    </span>
  );
}
