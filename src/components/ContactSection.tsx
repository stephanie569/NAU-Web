"use client";

import { NauButton } from "@/components/NauButton";
import { NauLogoMark } from "@/components/NauLogoMark";
import { heroVideo } from "@/lib/hero";
import { contactSectionCopy } from "@/lib/sections";

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <circle
        cx="12"
        cy="12"
        r="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 8v4l2.5 2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StepsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path
        d="M4 18h4V14H4v4zm6-6h4v4h-4v-4zm6-8h4v4h-4V4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BenefitIcon({ type }: { type: "clock" | "steps" }) {
  return (
    <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white">
      {type === "clock" ? <ClockIcon /> : <StepsIcon />}
    </span>
  );
}

export function ContactSection() {
  const {
    formTitle,
    formTitleMuted,
    fields,
    placeholders,
    submit,
    legalLead,
    legalLink,
    headline,
    subheadline,
    benefits,
  } = contactSectionCopy;

  return (
    <section
      data-header-theme="dark"
      className="relative overflow-hidden px-6 py-24 md:px-9 md:py-32"
    >
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 grayscale opacity-70">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-full w-full object-cover object-center"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-[#0a0a0a]/35" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1520px] grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
        <div className="rounded-[20px] bg-white p-8 md:p-10">
          <NauLogoMark size="xs" className="text-[#0a0a0a]" />

          <h2 className="mt-8 text-[clamp(1.75rem,3vw,2.25rem)] leading-tight font-semibold tracking-[-0.06em] text-[#0a0a0a]">
            {formTitle}{" "}
            <span className="text-[#0a0a0a]/60">{formTitleMuted}</span>
          </h2>

          <form
            className="mt-8 space-y-5"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="block">
              <span className="mb-2 block text-[13px] font-medium tracking-[-0.04em] text-[#0a0a0a]/60">
                {fields.name}
              </span>
              <input
                type="text"
                name="name"
                required
                placeholder={placeholders.name}
                className="w-full rounded-[10px] bg-[#f5f5f5] px-4 py-3.5 text-[15px] font-medium tracking-[-0.04em] text-[#0a0a0a] outline-none placeholder:text-[#0a0a0a]/35"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-[13px] font-medium tracking-[-0.04em] text-[#0a0a0a]/60">
                {fields.email}
              </span>
              <input
                type="email"
                name="email"
                required
                placeholder={placeholders.email}
                className="w-full rounded-[10px] bg-[#f5f5f5] px-4 py-3.5 text-[15px] font-medium tracking-[-0.04em] text-[#0a0a0a] outline-none placeholder:text-[#0a0a0a]/35"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-[13px] font-medium tracking-[-0.04em] text-[#0a0a0a]/60">
                {fields.message}
              </span>
              <textarea
                name="message"
                rows={5}
                placeholder={placeholders.message}
                className="w-full resize-none rounded-[10px] bg-[#f5f5f5] px-4 py-3.5 text-[15px] font-medium tracking-[-0.04em] text-[#0a0a0a] outline-none placeholder:text-[#0a0a0a]/35"
              />
            </label>

            <NauButton type="submit" fullWidth className="mt-2">
              {submit}
            </NauButton>

            <p className="text-[13px] font-medium tracking-[-0.04em] text-[#0a0a0a]/60">
              {legalLead}{" "}
              <span className="underline underline-offset-2">{legalLink}</span>
            </p>
          </form>
        </div>

        <div className="flex flex-col justify-between gap-12 lg:min-h-full lg:py-4">
          <div>
            <h2 className="text-[clamp(3rem,8vw,5.5rem)] leading-[0.95] font-semibold tracking-[-0.06em] text-white">
              {headline}
            </h2>
            <p className="mt-6 max-w-[520px] text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-white/80">
              {subheadline}
            </p>

            <div className="mt-10 border-t border-white/15 pt-10">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <div key={benefit.title}>
                    <BenefitIcon type={index === 0 ? "clock" : "steps"} />
                    <p className="text-[15px] font-semibold tracking-[-0.04em] text-white">
                      {benefit.title}
                    </p>
                    <p className="mt-3 text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-white/60">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
