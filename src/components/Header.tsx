"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            key="site-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[61px] bottom-0 z-40 bg-[#f5f5f5]"
          >
            <nav
              aria-label="Site"
              className="mx-auto flex h-full w-full max-w-[1520px] flex-col justify-between px-6 py-10 md:px-9 md:py-14"
            >
              <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] md:gap-16">
                <ul className="flex flex-col">
                  {showHome ? (
                    <li className="border-b border-[#0a0a0a]/10">
                      <Link
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-baseline justify-between gap-6 py-4 transition-opacity hover:opacity-70 md:py-5"
                      >
                        <span className="text-[clamp(2rem,5vw,3.5rem)] leading-none font-semibold tracking-[-0.06em] text-[#0a0a0a]">
                          Home
                        </span>
                        <span className="text-[13px] font-medium tracking-[-0.04em] text-[#0a0a0a]/35">
                          01
                        </span>
                      </Link>
                    </li>
                  ) : null}
                  {primaryNavLinks.map((link, index) => (
                    <li key={link.href} className="border-b border-[#0a0a0a]/10">
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-baseline justify-between gap-6 py-4 transition-opacity hover:opacity-70 md:py-5"
                      >
                        <span className="text-[clamp(2rem,5vw,3.5rem)] leading-none font-semibold tracking-[-0.06em] text-[#0a0a0a]">
                          {link.label}
                        </span>
                        <span className="text-[13px] font-medium tracking-[-0.04em] text-[#0a0a0a]/35">
                          {String(index + (showHome ? 2 : 1)).padStart(2, "0")}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col justify-between gap-8 md:pb-2">
                  <p className="max-w-[18rem] text-[15px] leading-relaxed font-medium tracking-[-0.03em] text-[#0a0a0a]/55">
                    Studio, clients, services, films, and essays — one place to
                    move through the work.
                  </p>
                  <NauButton
                    href="/contact"
                    variant="dark"
                    onClick={() => setMenuOpen(false)}
                  >
                    Work with me
                  </NauButton>
                </div>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
