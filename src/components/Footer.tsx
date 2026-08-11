import Link from "next/link";
import type { ReactNode } from "react";
import {
  footerNavLinks,
  siteConfig,
  socialLinks,
} from "@/lib/data";
import { NauLogoMark } from "@/components/NauLogoMark";

function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-soft-light"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

function ExternalArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5 shrink-0 text-white/50"
      aria-hidden
    >
      <path
        d="M4 12L12 4M12 4H6M12 4V10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FooterColumn({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="min-w-0">
      <p className="mb-3 text-[12px] font-medium tracking-[0.08em] text-white/45 uppercase">
        {label}
      </p>
      {children}
    </div>
  );
}

const legalNavLinks = [
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/terms", label: "Terms of Service" },
];

const pageLinks = footerNavLinks.slice(0, 4);
const moreLinks = [...footerNavLinks.slice(4), ...legalNavLinks];

const linkClass =
  "text-[15px] font-semibold tracking-[-0.04em] text-white transition-opacity hover:opacity-70";

export function Footer() {
  return (
    <footer data-header-theme="dark" className="relative bg-[#0a0a0a] text-white">
      <NoiseOverlay />

      <div className="relative px-6 py-12 md:px-9 md:py-14">
        <div className="mx-auto flex w-full max-w-[1520px] flex-col gap-10">
          {/* Brand */}
          <div className="min-w-0">
            <Link href="/" className="group inline-block">
              <NauLogoMark
                size="footer"
                className="text-white transition-opacity group-hover:opacity-85"
              />
              <p className="mt-1.5 text-[clamp(1rem,2vw,1.25rem)] leading-none font-medium tracking-[0.22em] text-white/85 uppercase">
                Studio
              </p>
            </Link>
          </div>

          {/* Even 4-column link row */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 md:grid-cols-4 md:gap-8">
            <FooterColumn label="Contact">
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                    className={linkClass}
                  >
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className={`${linkClass} break-all underline underline-offset-4`}
                  >
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </FooterColumn>

            <FooterColumn label="Pages">
              <ul className="space-y-2.5">
                {pageLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn label="More">
              <ul className="space-y-2.5">
                {moreLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn label="Social">
              <ul className="space-y-2.5">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 ${linkClass}`}
                    >
                      {link.label}
                      <ExternalArrowIcon />
                    </a>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>
      </div>
    </footer>
  );
}
