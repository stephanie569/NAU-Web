"use client";

import Image from "next/image";
import Link from "next/link";
import { contactPageCopy } from "@/lib/sections";

export function ContactPageContent() {
  const {
    title,
    subheadlineLead,
    subheadlineRest,
    teamLead,
    placeholders,
    submit,
    legalLead,
    termsLabel,
    privacyLabel,
  } = contactPageCopy;

  return (
    <section className="bg-[#f5f5f5] px-1 pb-1 pt-1">
      <div className="min-h-[calc(100vh-61px)] overflow-hidden rounded-[25px] bg-white px-6 py-16 md:px-9 md:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1520px] grid-cols-1 items-start gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(320px,520px)] lg:gap-x-20 xl:gap-x-32">
          <div className="lg:max-w-[640px]">
            <h1 className="text-[clamp(3.5rem,10vw,7rem)] leading-[0.95] font-semibold tracking-[-0.06em] text-[#0a0a0a]">
              {title}
            </h1>

            <p className="mt-8 max-w-[520px] text-[15px] leading-relaxed font-medium tracking-[-0.04em] text-[#0a0a0a]/60">
              <span className="font-semibold text-[#0a0a0a]">
                {subheadlineLead}
              </span>
              {subheadlineRest}
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={teamLead.image}
                  alt={teamLead.name}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="text-[15px] font-semibold tracking-[-0.04em] text-[#0a0a0a]">
                  {teamLead.name}
                </p>
                <p className="text-[13px] font-medium tracking-[-0.04em] text-[#0a0a0a]/60">
                  {teamLead.role}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:justify-self-end">
            <form
              className="space-y-0"
              onSubmit={(event) => event.preventDefault()}
            >
              <label className="block border-b border-[#0a0a0a]/10">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={placeholders.name}
                  className="w-full bg-transparent py-5 text-[15px] font-medium tracking-[-0.04em] text-[#0a0a0a] outline-none placeholder:text-[#0a0a0a]/35"
                />
              </label>

              <label className="block border-b border-[#0a0a0a]/10">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={placeholders.email}
                  className="w-full bg-transparent py-5 text-[15px] font-medium tracking-[-0.04em] text-[#0a0a0a] outline-none placeholder:text-[#0a0a0a]/35"
                />
              </label>

              <label className="block border-b border-[#0a0a0a]/10">
                <textarea
                  name="message"
                  rows={5}
                  placeholder={placeholders.message}
                  className="w-full resize-none bg-transparent py-5 text-[15px] font-medium tracking-[-0.04em] text-[#0a0a0a] outline-none placeholder:text-[#0a0a0a]/35"
                />
              </label>

              <button
                type="submit"
                className="mt-8 inline-flex items-center gap-5 rounded-full bg-[#0a0a0a] py-2.5 pr-2.5 pl-6 transition-opacity hover:opacity-85"
              >
                <span className="text-[13px] font-semibold tracking-[-0.04em] text-white">
                  {submit}
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                  <span className="h-2 w-2 rounded-full bg-[#0a0a0a]" />
                </span>
              </button>

              <p className="mt-4 max-w-[360px] text-[13px] leading-relaxed font-medium tracking-[-0.04em] text-[#0a0a0a]/60">
                {legalLead}{" "}
                <Link
                  href="/legal/terms"
                  className="font-semibold text-[#0a0a0a] underline underline-offset-2"
                >
                  {termsLabel}
                </Link>{" "}
                and{" "}
                <Link
                  href="/legal/privacy"
                  className="font-semibold text-[#0a0a0a] underline underline-offset-2"
                >
                  {privacyLabel}
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
