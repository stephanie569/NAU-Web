"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { NauButton } from "@/components/NauButton";
import { siteConfig } from "@/lib/data";

export default function ContactPage() {
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
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          message: String(formData.get("message") ?? ""),
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(data?.error ?? "Something went wrong.");
      }

      form.reset();
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section
      data-header-theme="dark"
      className="min-h-[calc(100svh-61px)] bg-[#0a0a0a] px-6 py-16 text-white md:px-9 md:py-20"
    >
      <div className="mx-auto w-full max-w-[720px]">
        <p className="text-[12px] font-semibold tracking-[0.12em] text-white/45 uppercase">
          Contact
        </p>
        <h1 className="mt-3 text-[clamp(2rem,5vw,3.25rem)] leading-[0.95] font-semibold tracking-[-0.05em]">
          Get in touch
        </h1>
        <p className="mt-4 max-w-[36rem] text-[15px] leading-relaxed text-white/55">
          Questions about the wildlife map or nau studio? Write to{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-white underline-offset-2 hover:underline"
          >
            {siteConfig.email}
          </a>
          .
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-4">
          <label className="block">
            <span className="text-[12px] font-medium text-white/45">Name</span>
            <input
              name="name"
              required
              className="mt-1.5 w-full rounded-[12px] border border-white/15 bg-white/[0.04] px-4 py-3 text-[14px] text-white outline-none placeholder:text-white/30 focus:border-white/35"
              placeholder="Your name"
            />
          </label>
          <label className="block">
            <span className="text-[12px] font-medium text-white/45">Email</span>
            <input
              name="email"
              type="email"
              required
              className="mt-1.5 w-full rounded-[12px] border border-white/15 bg-white/[0.04] px-4 py-3 text-[14px] text-white outline-none placeholder:text-white/30 focus:border-white/35"
              placeholder="you@brand.com"
            />
          </label>
          <label className="block">
            <span className="text-[12px] font-medium text-white/45">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-1.5 w-full resize-y rounded-[12px] border border-white/15 bg-white/[0.04] px-4 py-3 text-[14px] text-white outline-none placeholder:text-white/30 focus:border-white/35"
              placeholder="How can I help?"
            />
          </label>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <NauButton type="submit" variant="light" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
            </NauButton>
            {status === "sent" ? (
              <p className="text-[13px] text-emerald-300/90">Message sent.</p>
            ) : null}
            {status === "error" && error ? (
              <p className="text-[13px] text-red-300/90">{error}</p>
            ) : null}
          </div>

          <p className="pt-2 text-[12px] text-white/40">
            By submitting, you agree to the{" "}
            <Link href="/legal/terms" className="underline underline-offset-2">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/legal/privacy" className="underline underline-offset-2">
              Privacy Policy
            </Link>
            .
          </p>
        </form>
      </div>
    </section>
  );
}
