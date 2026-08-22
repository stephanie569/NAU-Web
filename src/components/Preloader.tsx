"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NauLogoMark } from "@/components/NauLogoMark";

export function Preloader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [visible, setVisible] = useState(isHome);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isHome) {
      setVisible(false);
      return;
    }

    let raf = 0;
    let finished = false;
    const start = performance.now();
    const minDuration = 1400;

    const finish = () => {
      if (finished) return;
      finished = true;
      setProgress(100);

      window.setTimeout(() => {
        setFadeOut(true);
        window.setTimeout(() => setVisible(false), 500);
      }, 200);
    };

    const tick = (now: number) => {
      if (finished) return;

      const elapsed = now - start;
      const t = Math.min(elapsed / 1800, 1);
      const eased = (1 - Math.pow(1 - t, 2)) * 92;
      setProgress(eased);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    const onReady = () => {
      const remaining = Math.max(0, minDuration - (performance.now() - start));
      window.setTimeout(finish, remaining);
    };

    if (document.readyState === "complete") {
      onReady();
    } else {
      window.addEventListener("load", onReady, { once: true });
    }

    const failsafe = window.setTimeout(finish, 2800);

    return () => {
      finished = true;
      cancelAnimationFrame(raf);
      window.clearTimeout(failsafe);
      window.removeEventListener("load", onReady);
    };
  }, [isHome]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a] transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"}`}
      aria-hidden="true"
    >
      <div className="text-center">
        <NauLogoMark size="lg" className="text-white" />
        <div className="relative mx-auto mt-6 h-px w-[120px] overflow-hidden bg-white/20">
          <div
            className="h-full bg-white transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
