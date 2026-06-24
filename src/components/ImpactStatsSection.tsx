"use client";

import { useEffect, useRef, useState } from "react";
import { impactStats } from "@/lib/sections";

function CountUpValue({
  value,
  suffix,
  delay = 0,
}: {
  value: number;
  suffix: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        const start = performance.now();
        const duration = 1400;

        const animate = (now: number) => {
          const elapsed = now - start - delay;
          if (elapsed < 0) {
            requestAnimationFrame(animate);
            return;
          }

          const t = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(Math.round(value * eased));

          if (t < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
      },
      { threshold: 0.35, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, delay]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function StatItem({
  stat,
  index,
}: {
  stat: (typeof impactStats)[number];
  index: number;
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[clamp(2.5rem,5vw,4.25rem)] leading-none font-semibold tracking-[-0.06em] text-[#0a0a0a]">
        <CountUpValue
          value={stat.value}
          suffix={stat.suffix}
          delay={index * 100}
        />
      </p>
      <p className="max-w-[180px] text-[15px] leading-snug font-medium tracking-[-0.04em] text-[#0a0a0a]/60">
        {stat.label}
      </p>
    </div>
  );
}

export function ImpactStatsSection() {
  return (
    <section className="bg-[#f5f5f5] px-6 py-24 md:px-9 md:py-32">
      <div className="mx-auto w-full max-w-[1520px]">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          {impactStats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
