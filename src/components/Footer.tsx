import Link from "next/link";
import {
  footerNavLinks,
  siteConfig,
  socialLinks,
} from "@/lib/data";

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
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0">
      <p className="mb-5 text-[13px] font-medium tracking-[-0.04em] text-white/50">
        {label}
      </p>
      {children}
    </div>
  );
}

function NauLogo() {
  return (
    <div className="text-left lg:text-right">
      <p className="text-[clamp(3rem,8vw,5.5rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-white">
        nau
      </p>
      <p className="mt-1 text-[clamp(1.75rem,5vw,3.25rem)] leading-[0.95] font-semibold tracking-[-0.06em] text-white">
        Studio
      </p>
    </div>
  );
}

const legalLinks = [
  { href: "/stickers-campaign", label: "Stickers campaign" },
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/terms", label: "Terms of Service" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0a0a0a] text-white">
      <NoiseOverlay />

      <div className="relative px-6 pt-20 pb-16 md:px-9 md:pt-28 md:pb-20">
        <div className="mx-auto w-full max-w-[1520px]">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:items-start lg:gap-x-8 xl:gap-x-12">
            <div className="lg:col-span-3">
              <FooterColumn label="Contact">
                <ul className="space-y-3">
                  <li>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                      className="text-[15px] font-medium tracking-[-0.04em] text-white transition-opacity hover:opacity-70"
                    >
                      {siteConfig.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-[15px] font-semibold tracking-[-0.04em] text-white underline underline-offset-4 transition-opacity hover:opacity-70"
                    >
                      {siteConfig.email}
                    </a>
                  </li>
                </ul>
              </FooterColumn>
            </div>

            <div className="lg:col-span-3">
              <FooterColumn label="Navigation">
                <ul className="space-y-3">
                  {footerNavLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[15px] font-semibold tracking-[-0.04em] text-white transition-opacity hover:opacity-70"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>

            <div className="lg:col-span-3">
              <FooterColumn label="Social">
                <ul className="space-y-3">
                  {socialLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[15px] font-semibold tracking-[-0.04em] text-white transition-opacity hover:opacity-70"
                      >
                        {link.label}
                        <ExternalArrowIcon />
                      </a>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>

            <div className="sm:col-span-2 lg:col-span-3 lg:justify-self-end">
              <NauLogo />
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 px-6 py-5 md:px-9">
        <div className="mx-auto flex w-full max-w-[1520px] flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-[13px] font-medium tracking-[-0.04em] text-white/60">
            © {siteConfig.year} nau Studio. All rights reserved.
          </p>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13px] font-medium tracking-[-0.04em] text-white/60 transition-colors hover:text-white"
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
