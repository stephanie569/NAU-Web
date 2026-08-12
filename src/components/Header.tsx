"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NauButton } from "@/components/NauButton";

const HEADER_HEIGHT = 61;

const navLinks = [
  { href: "/studio", label: "Studio" },
  { href: "/clients", label: "Clients" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
];

function isOverDarkSection() {
  const x = Math.round(window.innerWidth / 2);
  let node = document.elementFromPoint(
    x,
    HEADER_HEIGHT + 1,
  ) as HTMLElement | null;

  while (node) {
    if (node.dataset.headerTheme === "dark") return true;
    node = node.parentElement;
  }

  return false;
}

function MenuIcon({ open, dark }: { open: boolean; dark?: boolean }) {
  const bar = dark ? "bg-white" : "bg-[#0a0a0a]";

  return (
    <span className="relative flex h-3.5 w-7 flex-col justify-between">
      <span
        className={`block h-px w-full ${bar} transition-transform duration-200 ${
          open ? "translate-y-[7px] rotate-45" : ""
        }`}
      />
      <span
        className={`block h-px w-full ${bar} transition-transform duration-200 ${
          open ? "-translate-y-[7px] -rotate-45" : ""
        }`}
      />
    </span>
  );
}

function HomeLink({
  className = "",
  dark = false,
  onClick,
}: {
  className?: string;
  dark?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`shrink-0 text-[15px] font-medium tracking-[-0.04em] transition-opacity hover:opacity-70 ${
        dark ? "text-white" : "text-[#0a0a0a]"
      } ${className}`}
    >
      Home
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const showHome = pathname !== "/";

  useEffect(() => {
    let raf = 0;

    const update = () => {
      setIsDark(isOverDarkSection());
    };

    const onChange = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onChange, { passive: true });
    window.addEventListener("resize", onChange);
    update();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onChange);
      window.removeEventListener("resize", onChange);
    };
  }, [pathname]);

  const linkClass = isDark
    ? "text-white hover:opacity-70"
    : "text-[#0a0a0a] hover:opacity-70";

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isDark ? "bg-[#0a0a0a]" : "bg-[#f5f5f5]"
      }`}
    >
      <div className="px-6 md:px-9">
        <div className="mx-auto flex h-[61px] w-full max-w-[1520px] items-center">
          <nav className="hidden w-full items-center justify-between md:flex">
            {showHome ? <HomeLink dark={isDark} /> : null}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex shrink-0 items-center text-[15px] font-medium tracking-[-0.04em] transition-opacity ${linkClass}`}
              >
                {link.label}
              </Link>
            ))}

            <NauButton
              href="/contact"
              variant={isDark ? "light" : "dark"}
              className="shrink-0"
            >
              Work with me
            </NauButton>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="ml-auto flex shrink-0 items-center justify-center md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuIcon open={menuOpen} dark={isDark} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`overflow-hidden border-t md:hidden ${
              isDark
                ? "border-white/10 bg-[#0a0a0a]"
                : "border-[#0a0a0a]/10 bg-[#f5f5f5]"
            }`}
          >
            <div className="px-6 md:px-9">
              <div className="mx-auto flex w-full max-w-[1520px] flex-col gap-1 py-4">
                {showHome ? (
                  <HomeLink
                    dark={isDark}
                    className="py-3"
                    onClick={() => setMenuOpen(false)}
                  />
                ) : null}
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`py-3 text-[15px] font-medium tracking-[-0.04em] ${
                      isDark ? "text-white" : "text-[#0a0a0a]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <NauButton
                  href="/contact"
                  variant={isDark ? "light" : "dark"}
                  className="mt-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Work with me
                </NauButton>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
