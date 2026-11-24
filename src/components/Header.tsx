"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { NauButton } from "@/components/NauButton";
import { primaryNavLinks } from "@/lib/data";

const HEADER_HEIGHT = 61;

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

function MenuMark({ open, dark }: { open: boolean; dark?: boolean }) {
  const disk = dark ? "bg-white" : "bg-[#0a0a0a]";
  const stroke = dark ? "bg-[#0a0a0a]" : "bg-white";

  return (
    <span
      className={`relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${disk}`}
      aria-hidden
    >
      <span
        className={`absolute h-px w-2.5 ${stroke} transition-transform duration-200 ease-out ${
          open ? "rotate-45" : "rotate-0"
        }`}
      />
      <span
        className={`absolute h-2.5 w-px ${stroke} transition-transform duration-200 ease-out ${
          open ? "rotate-45" : "rotate-0"
        }`}
      />
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const showHome = pathname !== "/";

  useEffect(() => {
    setMounted(true);
  }, []);

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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const barDark = menuOpen ? false : isDark;
  const ink = barDark ? "text-white" : "text-[#0a0a0a]";

  const menuLinks = showHome
    ? [{ href: "/", label: "Home" }, ...primaryNavLinks]
    : primaryNavLinks;

  const menu = (
    <AnimatePresence>
      {menuOpen ? (
        <motion.div
          key="site-menu"
          className="fixed inset-0 z-40"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
        >
          <motion.button
            type="button"
            aria-label="Close menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-0 bg-[#0a0a0a]/35"
            onClick={() => setMenuOpen(false)}
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 right-0 bottom-0 flex w-full flex-col bg-[#f5f5f5] shadow-[-24px_0_60px_rgba(0,0,0,0.12)] sm:w-[min(24rem,88vw)] md:w-[min(26rem,38vw)]"
          >
            <div className="flex h-[61px] shrink-0 items-center justify-end border-b border-[#0a0a0a]/10 px-5 md:px-6">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-3 rounded-full border border-[#0a0a0a]/12 py-1.5 pr-1.5 pl-4 text-[13px] font-semibold tracking-[-0.04em] text-[#0a0a0a] transition-colors hover:border-[#0a0a0a]/28"
              >
                <span>Close</span>
                <MenuMark open dark={false} />
              </button>
            </div>

            <nav
              aria-label="Site"
              className="flex min-h-0 flex-1 flex-col px-5 py-4 md:px-6 md:py-5"
            >
              <ul className="flex min-h-0 flex-1 flex-col">
                {menuLinks.map((link, index) => (
                  <li
                    key={link.href}
                    className="flex min-h-0 flex-1 border-b border-[#0a0a0a]/10"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex h-full w-full min-h-[2.75rem] items-center justify-between gap-4 transition-opacity hover:opacity-70"
                    >
                      <span className="text-[clamp(1.2rem,2.4vh+0.55rem,1.65rem)] leading-none font-semibold tracking-[-0.05em] text-[#0a0a0a]">
                        {link.label}
                      </span>
                      <span className="shrink-0 text-[12px] font-medium tracking-[-0.04em] text-[#0a0a0a]/35">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        barDark ? "bg-[#0a0a0a]" : "bg-[#f5f5f5]"
      }`}
    >
      <div className="px-6 md:px-9">
        <div className="mx-auto flex h-[61px] w-full max-w-[1520px] items-center justify-between gap-6">
          <div className="min-w-0">
            {showHome ? (
              <Link
                href="/"
                className={`text-[15px] font-medium tracking-[-0.04em] transition-opacity hover:opacity-70 ${ink}`}
              >
                Home
              </Link>
            ) : null}
          </div>

          <div className="flex shrink-0 items-center gap-3 sm:gap-4">
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className={`inline-flex items-center gap-3 rounded-full border py-1.5 pr-1.5 pl-4 text-[13px] font-semibold tracking-[-0.04em] transition-colors ${
                barDark
                  ? "border-white/20 text-white hover:border-white/40"
                  : "border-[#0a0a0a]/12 text-[#0a0a0a] hover:border-[#0a0a0a]/28"
              }`}
            >
              <span>{menuOpen ? "Close" : "Menu"}</span>
              <MenuMark open={menuOpen} dark={barDark} />
            </button>

            <NauButton
              href="/contact"
              variant={barDark ? "light" : "dark"}
              className="shrink-0"
            >
              Work with me
            </NauButton>
          </div>
        </div>
      </div>

      {mounted ? createPortal(menu, document.body) : null}
    </header>
  );
}
