"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { NauButton } from "@/components/NauButton";
import { NauLogoMark } from "@/components/NauLogoMark";
import { heroVideo } from "@/lib/hero";
import { contactSectionCopy } from "@/lib/sections";

export function ContactSection() {
  const {
    formTitle,
    formTitleMuted,
    fields,
    placeholders,
    submit,
    sending,
    success,
    error: errorCopy,
    legalLead,
    termsLabel,
    privacyLabel,
    headline,
    subheadline,
    prepLabel,
    prepItems,
    replyNote,
  } = contactSectionCopy;

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      const data = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok) {
        throw new Error(data.error || errorCopy);
      }

      form.reset();
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : errorCopy);
    }
  }

  return (
    <section
      id="contact"
      data-header-theme="dark"
      className="relative min-h-[calc(100vh-61px)] scroll-mt-[61px] overflow-hidden px-6 py-16 md:px-9 md:py-20 lg:py-24"
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
        <div className="absolute inset-0 bg-[#0a0a0a]/45" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1200px] grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        <div className="flex flex-col justify-between gap-10 lg:py-1">
          <div>
            <h1 className="text-[clamp(2.75rem,7vw,4.75rem)] leading-[0.92] font-semibold tracking-[-0.06em] text-white">
              {headline}
            </h1>
            <p className="mt-5 max-w-[34rem] text-[15px] leading-relaxed font-medium tracking-[-0.03em] text-white/75 md:text-[16px]">
              {subheadline}
            </p>
          </div>

          <div className="max-w-[34rem]">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/45">
              {prepLabel}
            </p>
            <ul className="mt-4 border-t border-white/15">
              {prepItems.map((item) => (
                <li
                  key={item}
                  className="border-b border-white/15 py-3.5 text-[15px] font-medium tracking-[-0.03em] text-white/85"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-[34rem] border-t border-white/15 pt-6">
            <p className="text-[14px] leading-relaxed font-medium tracking-[-0.03em] text-white/55">
              {replyNote}
            </p>
          </div>
        </div>

        <div className="flex h-full flex-col rounded-[20px] bg-white p-7 sm:p-8 md:p-9">
          <NauLogoMark size="xs" className="text-[#0a0a0a]" />

          <h2 className="mt-7 text-[clamp(1.6rem,2.8vw,2.1rem)] leading-tight font-semibold tracking-[-0.055em] text-[#0a0a0a]">
            {formTitle}{" "}
            <span className="text-[#0a0a0a]/55">{formTitleMuted}</span>
          </h2>

          <form
            className="relative mt-7 flex flex-1 flex-col gap-5"
            onSubmit={handleSubmit}
          >
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label>
                Website
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block text-[13px] font-medium tracking-[-0.04em] text-[#0a0a0a]/55">
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
              <span className="mb-2 block text-[13px] font-medium tracking-[-0.04em] text-[#0a0a0a]/55">
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

            <label className="flex flex-1 flex-col">
              <span className="mb-2 block text-[13px] font-medium tracking-[-0.04em] text-[#0a0a0a]/55">
                {fields.message}
              </span>
              <textarea
                name="message"
                rows={6}
                placeholder={placeholders.message}
                className="min-h-[9.5rem] w-full flex-1 resize-none rounded-[10px] bg-[#f5f5f5] px-4 py-3.5 text-[15px] font-medium tracking-[-0.04em] text-[#0a0a0a] outline-none placeholder:text-[#0a0a0a]/35"
              />
            </label>

            <div className="mt-auto pt-1">
              <NauButton
                type="submit"
                fullWidth
                disabled={status === "sending"}
                className={status === "sending" ? "opacity-60" : undefined}
              >
                {status === "sending" ? sending : submit}
              </NauButton>

              {status === "sent" ? (
                <p className="mt-3 text-[13px] font-medium tracking-[-0.04em] text-[#0a0a0a]">
                  {success}
                </p>
              ) : null}
              {status === "error" && error ? (
                <p className="mt-3 text-[13px] font-medium tracking-[-0.04em] text-[#b42318]">
                  {error}
                </p>
              ) : null}

              <p className="mt-3 text-[13px] font-medium tracking-[-0.04em] text-[#0a0a0a]/55">
                {legalLead}{" "}
                <Link
                  href="/legal/terms"
                  className="underline underline-offset-2"
                >
                  {termsLabel}
                </Link>{" "}
                and{" "}
                <Link
                  href="/legal/privacy"
                  className="underline underline-offset-2"
                >
                  {privacyLabel}
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
