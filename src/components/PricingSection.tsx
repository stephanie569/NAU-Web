"use client";

import Link from "next/link";
import { useState } from "react";
import { pricingSectionCopy } from "@/lib/sections";

function PlusBadge() {
  return (
    <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
      <span className="absolute h-px w-3 bg-[#0a0a0a]" />
      <span className="absolute h-3 w-px bg-[#0a0a0a]" />
    </span>
  );
}

function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.22] mix-blend-soft-light"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

function FeaturePlusIcon() {
  return (
    <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10">
      <span className="absolute h-px w-2.5 bg-white" />
      <span className="absolute h-2.5 w-px bg-white" />
    </span>
  );
}

function BillingToggle({
  mode,
  onChange,
}: {
  mode: "project" | "monthly";
  onChange: (mode: "project" | "monthly") => void;
}) {
  const { billing } = pricingSectionCopy;

  return (
    <div className="inline-flex rounded-full bg-white/[0.06] p-1">
      <button
        type="button"
        onClick={() => onChange("project")}
        className={`rounded-full px-6 py-2.5 text-[15px] font-medium tracking-[-0.04em] transition-colors ${
          mode === "project"
            ? "bg-white text-[#0a0a0a]"
            : "text-white/55 hover:text-white/80"
        }`}
      >
        {billing.project}
      </button>
      <button
        type="button"
        onClick={() => onChange("monthly")}
        className={`rounded-full px-6 py-2.5 text-[15px] font-medium tracking-[-0.04em] transition-colors ${
          mode === "monthly"
            ? "bg-white text-[#0a0a0a]"
            : "text-white/55 hover:text-white/80"
        }`}
      >
        {billing.monthly}
      </button>
    </div>
  );
}

function AddonToggle({
  enabled,
  onChange,
}: {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      onClick={() => onChange(!enabled)}
      className={`relative h-8 w-14 shrink-0 rounded-full transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white/25 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
        enabled ? "bg-white" : "bg-white/15"
      }`}
    >
      <span
        className={`absolute top-1 left-1 h-6 w-6 rounded-full transition-transform duration-200 ease-out ${
          enabled
            ? "translate-x-6 bg-[#131313]"
            : "translate-x-0 bg-white"
        }`}
      />
    </button>
  );
}

export function PricingSection() {
  const { label, title, addon, plans, features, deliveryLabel, cta } =
    pricingSectionCopy;
  const [billingMode, setBillingMode] = useState<"project" | "monthly">(
    "project",
  );
  const [addonEnabled, setAddonEnabled] = useState(true);

  const plan = plans[billingMode];

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] px-6 py-[110px] md:px-9 md:py-[130px]">
      <NoiseOverlay />

      <div className="relative mx-auto w-full max-w-[1520px]">
        <div className="mb-[90px] flex items-center gap-3">
          <PlusBadge />
          <p className="text-[15px] font-medium tracking-[-0.04em] text-white">
            {label}
          </p>
        </div>

        <div className="mb-10 text-center">
          <h2 className="text-[clamp(4rem,12vw,9rem)] leading-[0.9] font-semibold tracking-[-0.06em] text-white">
            {title}
          </h2>
        </div>

        <div className="mb-12 flex justify-center">
          <BillingToggle mode={billingMode} onChange={setBillingMode} />
        </div>

        <div className="overflow-hidden rounded-[20px] bg-white/[0.04] lg:grid lg:grid-cols-[minmax(0,34%)_1fr]">
          <div className="flex min-h-[480px] flex-col justify-between border-b border-white/10 p-8 md:p-10 lg:border-r lg:border-b-0">
            <div>
              <h3 className="max-w-[300px] text-[clamp(1.35rem,2.4vw,1.875rem)] leading-[1.15] font-semibold tracking-[-0.04em] text-white">
                {addon.title}
              </h3>
              <p className="mt-4 max-w-[280px] text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-white/60">
                {addon.description}
              </p>
            </div>

            <div className="flex items-center justify-between gap-6 pt-10">
              <p className="text-[clamp(1.75rem,3vw,2.25rem)] font-semibold tracking-[-0.06em] text-white">
                {addon.price}
              </p>
              <AddonToggle enabled={addonEnabled} onChange={setAddonEnabled} />
            </div>
          </div>

          <div className="flex min-h-[480px] flex-col p-8 md:p-10">
            <div className="flex flex-1 flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex shrink-0 items-start gap-1.5">
                <span className="text-[clamp(3rem,5.5vw,3.5rem)] leading-none font-semibold tracking-[-0.06em] text-white">
                  {plan.price}
                </span>
                <span className="pt-2 text-[15px] font-medium tracking-[-0.04em] text-white/60">
                  {plan.unit}
                </span>
              </div>

              <ul className="ml-auto w-max max-w-full space-y-5 lg:pt-1">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex w-full items-center gap-3.5"
                  >
                    <FeaturePlusIcon />
                    <span className="text-[15px] font-medium tracking-[-0.04em] text-white">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex min-w-[220px] items-center justify-between gap-8 text-[15px] font-medium tracking-[-0.04em]">
                <span className="text-white/60">{deliveryLabel}</span>
                <span className="text-white">{plan.delivery}</span>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-10 py-4 text-[15px] font-semibold tracking-[-0.04em] text-[#0a0a0a] transition-opacity hover:opacity-85 lg:w-auto lg:min-w-[220px]"
              >
                {cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
