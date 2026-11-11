import Link from "next/link";
import { siteConfig, socialLinks, primaryNavLinks } from "@/lib/data";

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

const navLinkClass =
  "text-[14px] font-medium tracking-[-0.04em] text-white/70 transition-colors hover:text-white";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      data-header-theme="dark"
      className="relative overflow-x-hidden bg-[#0a0a0a] text-white"
    >
      <NoiseOverlay />
      <div className="relative mx-auto w-full max-w-[1520px] px-6 py-12 md:px-9 md:py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-[11px] font-medium tracking-[0.08em] text-white/40 uppercase">
              Navigate
            </p>
            <ul className="space-y-2">
              {primaryNavLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={navLinkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/legal/terms" className={navLinkClass}>
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className={navLinkClass}>
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div>
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

          <Link
            href="/"
            className="group shrink-0 self-start sm:self-end sm:text-right"
          >
            <p className="text-[clamp(1.35rem,3.5vw,1.85rem)] leading-[1.05] font-semibold tracking-[-0.04em] text-white transition-opacity group-hover:opacity-85">
              Stefani Dimitrova
            </p>
            <p className="mt-1.5 text-[13px] font-medium tracking-[-0.03em] text-white/55">
              Photographer · Storyteller
            </p>
          </Link>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-black">
        <div className="mx-auto flex w-full max-w-[1520px] flex-col gap-2 px-6 py-4 sm:flex-row sm:items-center sm:justify-between md:px-9">
          <p className="text-[12px] font-medium tracking-[-0.03em] text-white/45">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-[12px] font-medium tracking-[-0.03em] text-white/45 transition-colors hover:text-white/75"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
