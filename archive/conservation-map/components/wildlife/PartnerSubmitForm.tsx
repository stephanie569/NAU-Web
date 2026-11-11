"use client";

import { useState } from "react";

const EVENT_TYPES = [
  { value: "mortality_incident", label: "Confirmed mortality incident" },
  { value: "poisoning_incident", label: "Confirmed poisoning incident" },
  { value: "population_monitoring", label: "Published population monitoring" },
  { value: "habitat_threat", label: "Documented habitat threat" },
  { value: "rescue_release", label: "Rescue / release" },
  { value: "recovery_milestone", label: "Recovery milestone" },
  { value: "general_story", label: "General animal story" },
] as const;

export function PartnerSubmitForm() {
  const [partnerSecret, setPartnerSecret] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState({
    speciesId: "",
    regionId: "",
    regionName: "",
    eventType: "habitat_threat",
    headline: "",
    summary: "",
    eventDate: "",
    publicationDate: "",
    sourceUrl: "",
    organisation: "",
    actionUrl: "",
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setStatus("idle");
    setMessage("");
    try {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (partnerSecret.trim()) {
        headers.Authorization = `Bearer ${partnerSecret.trim()}`;
        headers["x-partner-secret"] = partnerSecret.trim();
      }
      const res = await fetch("/api/wildlife/events", {
        method: "POST",
        headers,
        body: JSON.stringify({
          ...form,
          verificationStatus: "pending_review",
        }),
      });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(j.error || "Submission failed");
      setStatus("ok");
      setMessage(
        "Submitted for review. It will not appear publicly until approved."
      );
      setForm((f) => ({
        ...f,
        headline: "",
        summary: "",
        eventDate: "",
        publicationDate: "",
        sourceUrl: "",
        actionUrl: "",
      }));
    } catch (err) {
      setStatus("err");
      setMessage(err instanceof Error ? err.message : "Submission failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-4">
      <label className="flex flex-col gap-1.5 text-[12px] text-white/50">
        Partner token (PARTNER_SUBMIT_SECRET — required when set on the server)
        <input
          type="password"
          value={partnerSecret}
          onChange={(e) => setPartnerSecret(e.target.value)}
          className="rounded-sm border border-white/15 bg-white/5 px-3 py-2 text-[14px] text-white"
          autoComplete="off"
        />
      </label>

      <label className="flex flex-col gap-1.5 text-[12px] text-white/50">
        Species ID (map species mapping)
        <input
          required
          value={form.speciesId}
          onChange={(e) => setForm((f) => ({ ...f, speciesId: e.target.value }))}
          placeholder="e.g. demo-lion"
          className="rounded-sm border border-white/15 bg-white/5 px-3 py-2 text-[14px] text-white"
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-[12px] text-white/50">
          Broad region ID
          <input
            required
            value={form.regionId}
            onChange={(e) =>
              setForm((f) => ({ ...f, regionId: e.target.value }))
            }
            placeholder="e.g. east-africa"
            className="rounded-sm border border-white/15 bg-white/5 px-3 py-2 text-[14px] text-white"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-[12px] text-white/50">
          Region display name
          <input
            required
            value={form.regionName}
            onChange={(e) =>
              setForm((f) => ({ ...f, regionName: e.target.value }))
            }
            placeholder="East Africa"
            className="rounded-sm border border-white/15 bg-white/5 px-3 py-2 text-[14px] text-white"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5 text-[12px] text-white/50">
        Event type
        <select
          value={form.eventType}
          onChange={(e) =>
            setForm((f) => ({ ...f, eventType: e.target.value }))
          }
          className="rounded-sm border border-white/15 bg-white/5 px-3 py-2 text-[14px] text-white"
        >
          {EVENT_TYPES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1.5 text-[12px] text-white/50">
        Headline
        <input
          required
          value={form.headline}
          onChange={(e) => setForm((f) => ({ ...f, headline: e.target.value }))}
          className="rounded-sm border border-white/15 bg-white/5 px-3 py-2 text-[14px] text-white"
        />
      </label>

      <label className="flex flex-col gap-1.5 text-[12px] text-white/50">
        Summary
        <textarea
          required
          rows={4}
          value={form.summary}
          onChange={(e) => setForm((f) => ({ ...f, summary: e.target.value }))}
          className="rounded-sm border border-white/15 bg-white/5 px-3 py-2 text-[14px] text-white"
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-[12px] text-white/50">
          Event date
          <input
            type="date"
            required
            value={form.eventDate}
            onChange={(e) =>
              setForm((f) => ({ ...f, eventDate: e.target.value }))
            }
            className="rounded-sm border border-white/15 bg-white/5 px-3 py-2 text-[14px] text-white"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-[12px] text-white/50">
          Publication date
          <input
            type="date"
            value={form.publicationDate}
            onChange={(e) =>
              setForm((f) => ({ ...f, publicationDate: e.target.value }))
            }
            className="rounded-sm border border-white/15 bg-white/5 px-3 py-2 text-[14px] text-white"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5 text-[12px] text-white/50">
        Organisation
        <input
          required
          value={form.organisation}
          onChange={(e) =>
            setForm((f) => ({ ...f, organisation: e.target.value }))
          }
          className="rounded-sm border border-white/15 bg-white/5 px-3 py-2 text-[14px] text-white"
        />
      </label>

      <label className="flex flex-col gap-1.5 text-[12px] text-white/50">
        Source URL
        <input
          type="url"
          required
          value={form.sourceUrl}
          onChange={(e) => setForm((f) => ({ ...f, sourceUrl: e.target.value }))}
          className="rounded-sm border border-white/15 bg-white/5 px-3 py-2 text-[14px] text-white"
        />
      </label>

      <label className="flex flex-col gap-1.5 text-[12px] text-white/50">
        Action link (optional)
        <input
          type="url"
          value={form.actionUrl}
          onChange={(e) => setForm((f) => ({ ...f, actionUrl: e.target.value }))}
          className="rounded-sm border border-white/15 bg-white/5 px-3 py-2 text-[14px] text-white"
        />
      </label>

      <button
        type="submit"
        disabled={busy}
        className="rounded-sm bg-white px-5 py-2.5 text-[13px] font-medium text-black disabled:opacity-50"
      >
        {busy ? "Submitting…" : "Submit for review"}
      </button>

      {status !== "idle" ? (
        <p
          className={`text-[13px] ${
            status === "ok" ? "text-emerald-300/90" : "text-red-200"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
