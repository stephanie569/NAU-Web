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
  const [display, setDisplay] = useState(1);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active || startedRef.current) return;
    startedRef.current = true;

    const duration = 1200;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(1 + (target - 1) * eased);

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
      <p className="flex items-baseline gap-1.5 tracking-[-0.04em] text-[#0a0a0a]">
        <span className="text-[22px] font-semibold tabular-nums md:text-[26px]">
          {prefix}
          {formatCountedValue(display, suffix)}
        </span>
        <span className="text-[12px] font-medium tracking-[-0.03em] text-[#0a0a0a]/45 md:text-[13px]">
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
      { threshold: 0.2, rootMargin: "0px 0px 15% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="work-with-me"
      className="box-border flex min-h-[calc(100svh-61px)] flex-col justify-center bg-[#f5f5f5] px-6 py-10 md:px-9 md:py-12"
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

        <div className="grid w-full grid-cols-1 gap-8 rounded-[24px] bg-white p-5 md:gap-10 md:p-8 lg:grid-cols-[3fr_2fr] lg:items-stretch lg:gap-12 lg:p-10">
          <div className="flex min-w-0 flex-col gap-6">
            <div className="max-w-[36rem]">
              <h3 className="text-[clamp(1.35rem,2.4vw,1.85rem)] leading-snug font-medium tracking-[-0.04em] text-[#0a0a0a]">
                {title}
              </h3>

              <div className="mt-4 space-y-3.5 text-[14px] leading-relaxed font-medium tracking-[-0.04em] text-pretty md:text-[15px]">
                <p className="text-[#0a0a0a]">{lead}</p>
                <p className="text-[#0a0a0a]/60">{field}</p>
                <p className="text-[#0a0a0a]/60">{proof}</p>
                <p className="text-[#0a0a0a]">
                  {closeLead}{" "}
                  <span className="font-semibold">{closeEmphasis}</span>
                </p>
              </div>

              <ul
                ref={metricsRef}
                className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-[#0a0a0a]/8 pt-5"
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
            </div>

            <div className="shrink-0">
              <NauButton href={careers.href}>{careers.cta}</NauButton>
            </div>
          </div>

          <div className="relative mx-auto aspect-[3/4] w-full max-w-[360px] overflow-hidden rounded-[18px] bg-[#f0f0f0] lg:mx-0 lg:aspect-auto lg:h-auto lg:min-h-full lg:max-w-none">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-[center_72%]"
              sizes="(max-width: 1024px) 360px, 40vw"
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
