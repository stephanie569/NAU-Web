"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectCount } from "@/lib/hero";

const navLinks = [
  { href: "/studio", label: "Studio" },
  { href: "/projects", label: "Work", count: projectCount },
  { href: "/blog", label: "Journal" },
  { href: "/stickers-campaign", label: "Stickers campaign" },
  { href: "/contact", label: "Contact" },
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

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex h-[61px] max-w-[1520px] items-center justify-between px-6 md:px-9">
        <Link
          href="/"
          className="shrink-0 text-[15px] font-bold tracking-[-0.04em] text-[#0a0a0a]"
        >
          nau
        </Link>

        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`hidden shrink-0 text-[15px] font-medium tracking-[-0.04em] transition-opacity md:block ${
              pathname === link.href
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

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="ml-auto flex shrink-0 items-center justify-center md:ml-0"
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
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="py-3 text-[15px] font-medium tracking-[-0.04em] text-[#0a0a0a]"
              >
                Home
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
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
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
