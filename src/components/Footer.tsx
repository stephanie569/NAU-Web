import Link from "next/link";
import { siteConfig, socialLinks } from "@/lib/data";
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

function PlusBadge({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`relative mb-2.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
        dark ? "bg-white" : "bg-[#0a0a0a]"
      }`}
    >
      <span
        className={`absolute h-px w-1.5 ${dark ? "bg-[#0a0a0a]" : "bg-white"}`}
      />
      <span
        className={`absolute h-1.5 w-px ${dark ? "bg-[#0a0a0a]" : "bg-white"}`}
      />
    </span>
  );
}

function ExternalArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-3 w-3 shrink-0 text-white/45"
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

const legalNavLinks = [
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/terms", label: "Terms of Service" },
];

const navLinkClass =
  "text-[14px] font-semibold tracking-[-0.04em] text-white transition-opacity hover:opacity-70";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer data-header-theme="dark" className="relative bg-[#0a0a0a] text-white">
      <NoiseOverlay />

      <div className="relative border-t border-white/10 px-6 pt-12 pb-8 md:px-9 md:pt-14 md:pb-10">
        <div className="mx-auto flex w-full max-w-[1520px] flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="grid min-w-0 flex-1 grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-10">
            <div className="min-w-0">
              <PlusBadge />
              <ul className="space-y-3">
                <li>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                    className="text-[14px] font-semibold tracking-[-0.04em] text-white/55 transition-opacity hover:opacity-70"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-2 text-[14px] font-semibold tracking-[-0.04em] text-white underline underline-offset-4 transition-opacity hover:opacity-70"
                  >
                    <span
                      className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white"
                      aria-hidden
                    >
                      <span className="absolute h-px w-1.5 bg-[#0a0a0a]" />
                      <span className="absolute h-1.5 w-px bg-[#0a0a0a]" />
                    </span>
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="min-w-0">
              <PlusBadge />
              <p className="mb-3 text-[11px] font-medium tracking-[0.08em] text-white/40 uppercase">
                Navigation
              </p>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className={navLinkClass}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#clients" className={navLinkClass}>
                    Clients
                  </Link>
                </li>
                <li>
                  <Link href="/#digital-guides" className={navLinkClass}>
                    Products
                  </Link>
                </li>
              </ul>
            </div>

            <div className="min-w-0">
              <PlusBadge />
              <p className="mb-3 text-[11px] font-medium tracking-[0.08em] text-white/40 uppercase">
                Explore
              </p>
              <ul className="space-y-2">
                <li>
                  <Link href="/studio" className={navLinkClass}>
                    Studio
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className={navLinkClass}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/essays" className={navLinkClass}>
                    Essays
                  </Link>
                </li>
              </ul>
            </div>

            <div className="min-w-0">
              <PlusBadge />
              <p className="mb-3 text-[11px] font-medium tracking-[0.08em] text-white/40 uppercase">
                Social
              </p>
              <ul className="space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 ${navLinkClass}`}
                    >
                      {link.label}
                      <ExternalArrowIcon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link href="/" className="group shrink-0 self-end text-right">
            <NauLogoMark
              size="footer"
              className="text-white transition-opacity group-hover:opacity-85"
            />
            <p className="mt-1 text-[clamp(1.2rem,2.4vw,1.65rem)] leading-none font-medium tracking-[0.22em] text-white/85 uppercase">
              Studio
            </p>
          </Link>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-black">
        <div className="mx-auto flex w-full max-w-[1520px] flex-col gap-2 px-6 py-4 sm:flex-row sm:items-center sm:justify-between md:px-9">
          <p className="text-[12px] font-medium tracking-[-0.03em] text-white/45">
            © {year} {siteConfig.name} studio. All rights reserved.
          </p>

          <ul className="flex flex-wrap items-center gap-x-5 gap-y-1">
            {legalNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[12px] font-medium tracking-[-0.03em] text-white/55 transition-opacity hover:opacity-70"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
