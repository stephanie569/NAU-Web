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

function EmailPlusIcon() {
  return (
    <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/20">
      <span className="absolute h-px w-2.5 bg-white" />
      <span className="absolute h-2.5 w-px bg-white" />
    </span>
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

function FramerBoltIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0" aria-hidden>
      <path
        d="M9.5 2 4 9h4.5L6.5 14 12 7H7.5L9.5 2Z"
        fill="currentColor"
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
    <div>
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
      <p className="text-[clamp(3rem,10vw,7rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-white">
        nau
      </p>
      <p className="mt-1 text-[clamp(2rem,6vw,4.5rem)] leading-[0.95] font-semibold tracking-[-0.06em] text-white">
        Studio
      </p>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0a0a0a] text-white">
      <NoiseOverlay />

      <div className="relative px-6 pt-20 pb-12 md:px-9 md:pt-28 md:pb-14">
        <div className="mx-auto w-full max-w-[1520px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end lg:gap-x-10 xl:gap-x-16">
            <div className="lg:col-span-3">
              <FooterColumn label="Contact">
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="block text-[15px] font-medium tracking-[-0.04em] text-white transition-opacity hover:opacity-70"
                >
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-4 inline-flex items-center gap-3 text-[15px] font-bold tracking-[-0.04em] text-white underline underline-offset-4 transition-opacity hover:opacity-70"
                >
                  <EmailPlusIcon />
                  {siteConfig.email}
                </a>
              </FooterColumn>
            </div>

            <div className="grid grid-cols-2 gap-10 sm:gap-12 lg:col-span-4">
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

            <div className="lg:col-span-5 lg:justify-self-end">
              <NauLogo />
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 px-6 py-4 md:px-9">
        <div className="mx-auto grid w-full max-w-[1520px] grid-cols-1 items-center gap-4 md:grid-cols-3">
          <p className="text-[13px] font-medium tracking-[-0.04em] text-white/60 md:justify-self-start">
            © {siteConfig.year} nau Studio. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 md:gap-6">
            <Link
              href="/legal/privacy"
              className="text-[13px] font-medium tracking-[-0.04em] text-white/60 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms"
              className="text-[13px] font-medium tracking-[-0.04em] text-white/60 transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
            <a
              href="https://www.framer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium tracking-[-0.04em] text-white/60 transition-colors hover:text-white"
            >
              <FramerBoltIcon />
              Built in Framer
            </a>
          </div>

          <div className="hidden md:block" aria-hidden />
        </div>
      </div>
    </footer>
  );
}
