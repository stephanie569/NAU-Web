"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { NauButton } from "@/components/NauButton";
import { teamMembers, teamSectionCopy } from "@/lib/sections";

function PlusBadge() {
  return (
    <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0a0a0a]">
      <span className="absolute h-px w-3 bg-white" />
      <span className="absolute h-3 w-px bg-white" />
    </span>
  );
}

function parseMetricValue(value: string): {
  target: number;
  prefix: string;
  suffix: string;
} {
  const match = value.match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return { target: 0, prefix: "", suffix: value };
  }

  return {
    prefix: match[1],
    target: Number(match[2]),
    suffix: match[3],
  };
}

function formatCountedValue(value: number, suffix: string) {
  if (suffix.startsWith("M")) {
    return `${Math.round(value)}${suffix}`;
  }

  return `${Math.round(value)}${suffix}`;
}

function CountUpMetric({
  value,
  label,
  active,
}: {
  value: string;
  label: string;
  active: boolean;
}) {
  const { target, prefix, suffix } = parseMetricValue(value);
  const [display, setDisplay] = useState(target);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active || startedRef.current) return;
    startedRef.current = true;

    const from = target > 1 ? 1 : 0;
    const duration = 1200;
    const start = performance.now();
    let frame = 0;
    setDisplay(from);

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(from + (target - from) * eased);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setDisplay(target);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return (
    <li className="min-w-0">
      <p className="tracking-[-0.04em] text-[#0a0a0a]">
        <span className="block text-[22px] font-semibold tabular-nums md:text-[26px]">
          {prefix}
          {formatCountedValue(display, suffix)}
        </span>
        <span className="mt-1 block text-[12px] font-medium tracking-[-0.03em] text-[#0a0a0a]/45 md:text-[13px]">
          {label}
        </span>
      </p>
    </li>
  );
}

export function TeamSection() {
  const {
    sectionLabel,
    sectionTitleLead,
    sectionTitle,
    title,
    lead,
    field,
    proof,
    closeLead,
    closeEmphasis,
    metrics,
    careers,
    photo,
  } = teamSectionCopy;
  const member = teamMembers[0];
  const imageSrc = photo?.src ?? member.image;
  const imageAlt = photo?.alt ?? member.name;

  const metricsRef = useRef<HTMLUListElement>(null);
  const [metricsActive, setMetricsActive] = useState(false);

  useEffect(() => {
    const node = metricsRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMetricsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="founder"
      className="box-border scroll-mt-[61px] bg-[#f5f5f5] px-6 py-16 md:px-9 md:py-24"
    >
      <div className="mx-auto w-full max-w-[1520px]">
        <div className="mb-6 grid grid-cols-1 items-center gap-4 lg:mb-7 lg:grid-cols-3 lg:gap-4">
          <div className="order-2 flex items-center justify-center gap-3 lg:order-1 lg:justify-self-start">
            <PlusBadge />
            <p className="text-[15px] font-medium tracking-[-0.04em] text-[#0a0a0a]">
              {sectionLabel}
            </p>
          </div>

          <div className="order-1 text-center lg:order-2">
            <h2 className="text-[clamp(3.5rem,9vw,6.25rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-[#0a0a0a]">
              <span className="mr-[0.22em] inline-block align-baseline text-[clamp(1.05rem,2vw,1.65rem)] font-semibold tracking-[-0.06em]">
                {sectionTitleLead}
              </span>
              {sectionTitle}
            </h2>
          </div>

          <div className="order-3 hidden lg:block" aria-hidden />
        </div>

        <div className="grid w-full grid-cols-1 gap-8 rounded-[24px] bg-white p-5 md:gap-10 md:p-8 lg:grid-cols-2 lg:items-stretch lg:gap-10 lg:p-10">
          <div className="flex min-w-0 flex-col justify-center py-2 lg:py-8">
            <p className="max-w-[34rem] text-[15px] leading-relaxed font-semibold tracking-[-0.04em] text-pretty text-[#0a0a0a] md:text-[16px]">
              {title}
            </p>

            <p className="mt-4 max-w-[34rem] text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-pretty text-[#0a0a0a] md:text-[16px]">
              {lead}
            </p>

            <div className="mt-5 max-w-[34rem] space-y-3 border-l-2 border-[#0a0a0a]/10 pl-4 text-[14px] leading-relaxed font-medium tracking-[-0.04em] text-pretty text-[#0a0a0a]/55 md:text-[15px]">
              <p>{field}</p>
              <p>{proof}</p>
            </div>

            <p className="mt-6 max-w-[34rem] text-[15px] leading-snug font-medium tracking-[-0.04em] text-[#0a0a0a] md:text-[16px]">
              {closeLead}{" "}
              <span className="font-semibold">{closeEmphasis}</span>
            </p>

            <ul
              ref={metricsRef}
              className="mt-8 grid grid-cols-2 gap-x-4 gap-y-5 border-t border-[#0a0a0a]/10 pt-6 sm:grid-cols-4"
            >
              {metrics.map((metric) => (
                <CountUpMetric
                  key={metric.label}
                  value={metric.value}
                  label={metric.label}
                  active={metricsActive}
                />
              ))}
            </ul>

            <div className="mt-8">
              <NauButton href={careers.href}>{careers.cta}</NauButton>
            </div>
          </div>

          <div className="relative mx-auto aspect-[3/4] w-full max-w-[440px] overflow-hidden rounded-[18px] bg-[#f0f0f0] lg:mx-0 lg:aspect-auto lg:h-full lg:min-h-[36rem] lg:max-w-none xl:min-h-[40rem]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 440px, 50vw"
              priority={false}
            />

            <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-5 md:p-6">
              <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                <span className="absolute h-px w-2.5 bg-white" />
                <span className="absolute h-2.5 w-px bg-white" />
              </span>

              <p className="text-[15px] font-semibold tracking-[-0.04em] text-white drop-shadow-sm">
                {photo?.caption ?? member.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
