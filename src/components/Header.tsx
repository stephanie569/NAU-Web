"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NauButton } from "@/components/NauButton";
import { projectCount } from "@/lib/hero";

const navLinks = [
  { href: "/studio", label: "Studio" },
  { href: "/clients", label: "Clients", count: projectCount },
  { href: "/#pricing", label: "Pricing" },
  { href: "/store", label: "Store" },
  { href: "/blog", label: "Blog" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-3.5 w-7 flex-col justify-between">
      <span
        className={`block h-px w-full bg-[#0a0a0a] transition-transform duration-200 ${
          open ? "translate-y-[7px] rotate-45" : ""
        }`}
      />
      <span
        className={`block h-px w-full bg-[#0a0a0a] transition-transform duration-200 ${
          open ? "-translate-y-[7px] -rotate-45" : ""
        }`}
      />
    </span>
  );
}

function HomeLink({
  className = "",
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`shrink-0 text-[15px] font-medium tracking-[-0.04em] text-[#0a0a0a] transition-opacity hover:opacity-70 ${className}`}
    >
      Home
    </Link>
  );
}

function handlePricingClick(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
  pathname: string,
) {
  if (!href.startsWith("/#") || pathname !== "/") return;

  const id = href.split("#")[1];
  if (!id) return;

  event.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  window.history.replaceState(null, "", `/#${id}`);
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const showHome = pathname !== "/";

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex h-[61px] max-w-[1520px] items-center px-6 md:px-9">
        <nav className="hidden w-full items-center justify-between md:flex">
          {showHome ? <HomeLink /> : null}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(event) => handlePricingClick(event, link.href, pathname)}
              className={`shrink-0 text-[15px] font-medium tracking-[-0.04em] transition-opacity ${
                pathname === link.href ||
                pathname.startsWith(`${link.href}/`) ||
                (link.href === "/#pricing" && pathname === "/")
                  ? "text-[#0a0a0a]"
                  : "text-[#0a0a0a] hover:opacity-70"
              }`}
            >
              {link.label}
              {"count" in link && link.count ? (
                <sup className="ml-0.5 text-[10px] font-medium leading-none">
                  {link.count}
                </sup>
              ) : null}
            </Link>
          ))}

          <NauButton href="/contact">Work with me</NauButton>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="ml-auto flex shrink-0 items-center justify-center md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[#0a0a0a]/10 bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {showHome ? (
                <HomeLink
                  className="py-3"
                  onClick={() => setMenuOpen(false)}
                />
              ) : null}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(event) => {
                    handlePricingClick(event, link.href, pathname);
                    setMenuOpen(false);
                  }}
                  className="py-3 text-[15px] font-medium tracking-[-0.04em] text-[#0a0a0a]"
                >
                  {link.label}
                  {"count" in link && link.count ? (
                    <sup className="ml-0.5 text-[10px] font-medium">
                      {link.count}
                    </sup>
                  ) : null}
                </Link>
              ))}
              <NauButton
                href="/contact"
                className="mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Work with me
              </NauButton>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
