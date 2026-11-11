"use client";

import { useCallback, useEffect, useState } from "react";

type EventRow = {
  id: string;
  speciesId: string;
  regionName: string;
  eventType: string;
  headline: string;
  summary: string;
  eventDate: string;
  organisation: string;
  verificationStatus: string;
  sourceUrl: string;
  isHistoricalImport?: boolean;
  isDemo?: boolean;
};

type AssessmentRow = {
  id: string;
  speciesId: string;
  geographicScope: string;
  conservationCategory: string;
  populationTrend: string;
  assessmentDate: string;
  sourceUrl: string;
  lastSuccessfulCheck: string | null;
  isManual?: boolean;
  isDemo?: boolean;
};

type ChangeRow = {
  id: string;
  speciesId: string;
  kind: string;
  summary: string;
  createdAt: string;
  acknowledged: boolean;
};

type SpeciesRow = {
  id: string;
  commonName: string;
  scientificName: string;
  isDemo?: boolean;
};

export function EditorialConsole() {
  const [secret, setSecret] = useState("");
  const [events, setEvents] = useState<EventRow[]>([]);
  const [assessments, setAssessments] = useState<AssessmentRow[]>([]);
  const [changes, setChanges] = useState<ChangeRow[]>([]);
  const [species, setSpecies] = useState<SpeciesRow[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [manualForm, setManualForm] = useState({
    speciesId: "",
    geographicScope: "Global",
    conservationCategory: "VU",
    populationTrend: "decreasing",
    assessmentDate: "",
    publicationDate: "",
    sourceUrl: "",
    sourceAssessmentId: "",
  });

  const headers = useCallback(
    () => ({
      Authorization: `Bearer ${secret}`,
      "Content-Type": "application/json",
    }),
    [secret]
  );

  const load = useCallback(async () => {
    if (!secret.trim()) {
      setError("Enter EDITOR_SECRET to load the queue.");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const [ev, as, ch, sp] = await Promise.all([
        fetch("/api/wildlife/events?status=pending_review", {
          headers: headers(),
        }),
        fetch("/api/wildlife/assessments", { headers: headers() }),
        fetch("/api/wildlife/changes?unacknowledged=1", {
          headers: headers(),
        }),
        fetch("/api/wildlife/species", { headers: headers() }),
      ]);
      if (!ev.ok || !as.ok) {
        throw new Error(
          ev.status === 401 || as.status === 401
            ? "Invalid EDITOR_SECRET"
            : "Failed to load editorial data"
        );
      }
      const evJson = await ev.json();
      const asJson = await as.json();
      const chJson = ch.ok ? await ch.json() : { changes: [] };
      const spJson = sp.ok ? await sp.json() : { species: [] };
      setEvents(evJson.events ?? []);
      setAssessments(asJson.assessments ?? []);
      setChanges(chJson.changes ?? []);
      setSpecies(spJson.species ?? []);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Load failed");
    } finally {
      setBusy(false);
    }
  }, [headers, secret]);

  useEffect(() => {
    const stored = sessionStorage.getItem("nau_editor_secret");
    if (stored) setSecret(stored);
  }, []);

  useEffect(() => {
    if (secret) sessionStorage.setItem("nau_editor_secret", secret);
  }, [secret]);

  async function setEventStatus(id: string, action: "approve" | "reject") {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch(`/api/wildlife/events/${id}`, {
        method: "PATCH",
        headers: headers(),
        body: JSON.stringify({ action }),
      });
      if (!res.ok) throw new Error("Update failed");
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Update failed");
      setBusy(false);
    }
  }

  async function acknowledgeChange(id: string) {
    const res = await fetch(`/api/wildlife/changes/${id}`, {
      method: "PATCH",
      headers: headers(),
      body: JSON.stringify({ reviewStatus: "acknowledged" }),
    });
    if (res.ok) await load();
  }

  async function submitManualAssessment(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const assessmentId =
        manualForm.sourceAssessmentId.trim() ||
        `manual-${manualForm.speciesId}-${manualForm.assessmentDate}`;
      const res = await fetch("/api/wildlife/assessments", {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({
          speciesId: manualForm.speciesId,
          geographicScope: manualForm.geographicScope,
          conservationCategory: manualForm.conservationCategory,
          populationTrend: manualForm.populationTrend || null,
          assessmentDate: manualForm.assessmentDate,
          publicationDate:
            manualForm.publicationDate || manualForm.assessmentDate,
          sourceUrl: manualForm.sourceUrl,
          assessmentId,
          sourceSpeciesId: `manual:${manualForm.speciesId}`,
          explicitlyNotAssessed:
            /not assessed/i.test(manualForm.conservationCategory) ||
            manualForm.conservationCategory.toUpperCase() === "NA",
        }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Could not save assessment");
      }
      setManualForm((f) => ({
        ...f,
        assessmentDate: "",
        publicationDate: "",
        sourceUrl: "",
        sourceAssessmentId: "",
      }));
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
      setBusy(false);
    }
  }

  async function runSync() {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/wildlife/sync", {
        method: "POST",
        headers: headers(),
      });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(j.error || "Sync failed");
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Sync failed");
      setBusy(false);
    }
  }

  return (
    <div className="mt-8 space-y-8">
      <div className="flex flex-wrap items-end gap-3">
        <label className="flex min-w-[240px] flex-1 flex-col gap-1.5 text-[12px] text-white/50">
          EDITOR_SECRET
          <input
            type="password"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            className="rounded-sm border border-white/15 bg-white/5 px-3 py-2 text-[14px] text-white"
            autoComplete="off"
          />
        </label>
        <button
          type="button"
          onClick={load}
          disabled={busy}
          className="rounded-sm bg-white px-4 py-2 text-[13px] font-medium text-black disabled:opacity-50"
        >
          Load queue
        </button>
        <button
          type="button"
          onClick={runSync}
          disabled={busy || !secret}
          className="rounded-sm border border-white/20 px-4 py-2 text-[13px] text-white/85 disabled:opacity-50"
        >
          Run assessment sync
        </button>
      </div>

      {error ? (
        <p className="rounded-sm border border-red-400/30 bg-red-400/10 px-3 py-2 text-[13px] text-red-100">
          {error}
        </p>
      ) : null}

      <section>
        <h2 className="text-[15px] font-medium tracking-[-0.02em]">
          Review queue ({events.length})
        </h2>
        <p className="mt-1 text-[12px] text-white/45">
          Only approved records appear on the map. Historical imports never pulse
          as breaking news.
        </p>
        <ul className="mt-4 space-y-3">
          {events.length === 0 ? (
            <li className="text-[13px] text-white/40">No pending events.</li>
          ) : (
            events.map((ev) => (
              <li
                key={ev.id}
                className="rounded-sm border border-white/10 bg-white/[0.03] p-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[14px] font-medium">{ev.headline}</p>
                    <p className="mt-1 text-[12px] text-white/50">{ev.summary}</p>
                    <p className="mt-2 text-[11px] text-white/35">
                      {ev.eventType} · {ev.regionName} · {ev.organisation} ·{" "}
                      {ev.eventDate}
                      {ev.isDemo ? " · DEMO" : ""}
                      {ev.isHistoricalImport ? " · historical" : ""}
                    </p>
                    <a
                      href={ev.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block text-[12px] text-[#9fd0ff]"
                    >
                      Source ↗
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      disabled={busy}
                      onClick={() => setEventStatus(ev.id, "approve")}
                      className="rounded-sm bg-emerald-500/90 px-3 py-1.5 text-[12px] font-medium text-black"
                    >
                      Approve
                    </button>
                    <button
                      type="button"
                      disabled={busy}
                      onClick={() => setEventStatus(ev.id, "reject")}
                      className="rounded-sm border border-white/20 px-3 py-1.5 text-[12px] text-white/70"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </section>

      <section>
        <h2 className="text-[15px] font-medium tracking-[-0.02em]">
          Assessment change log ({changes.length})
        </h2>
        <p className="mt-1 text-[12px] text-white/45">
          New assessments are reviewable here. Category changes do not auto-alert
          as population declines.
        </p>
        <ul className="mt-4 space-y-2">
          {changes.length === 0 ? (
            <li className="text-[13px] text-white/40">No unacknowledged changes.</li>
          ) : (
            changes.map((c) => (
              <li
                key={c.id}
                className="flex items-start justify-between gap-3 rounded-sm border border-white/10 px-3 py-2"
              >
                <div>
                  <p className="text-[13px] text-white/85">{c.summary}</p>
                  <p className="text-[11px] text-white/35">
                    {c.kind} · {new Date(c.createdAt).toLocaleString()}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => acknowledgeChange(c.id)}
                  className="shrink-0 text-[12px] text-[#9fd0ff]"
                >
                  Acknowledge
                </button>
              </li>
            ))
          )}
        </ul>
      </section>

      <section>
        <h2 className="text-[15px] font-medium tracking-[-0.02em]">
          Current assessments
        </h2>
        <ul className="mt-3 space-y-2">
          {assessments.map((a) => {
            const sp = species.find((s) => s.id === a.speciesId);
            return (
              <li
                key={a.id}
                className="rounded-sm border border-white/10 px-3 py-2 text-[13px]"
              >
                <span className="font-medium">
                  {sp?.commonName ?? a.speciesId}
                </span>{" "}
                · {a.conservationCategory} ({a.geographicScope}) · trend{" "}
                {a.populationTrend || "—"} · assessed {a.assessmentDate || "—"}
                {a.isManual ? " · manual" : ""}
                {a.isDemo ? " · DEMO" : ""}
              </li>
            );
          })}
        </ul>
      </section>

      <section className="rounded-sm border border-white/10 bg-white/[0.02] p-4">
        <h2 className="text-[15px] font-medium tracking-[-0.02em]">
          Manual sourced assessment
        </h2>
        <p className="mt-1 text-[12px] text-white/45">
          Use when IUCN API access is unavailable. Always include a public source
          URL. Do not scrape IUCN to bypass access terms.
        </p>
        <form onSubmit={submitManualAssessment} className="mt-4 grid gap-3 sm:grid-cols-2">
          <label className="flex flex-col gap-1 text-[11px] text-white/45">
            Species
            <select
              required
              value={manualForm.speciesId}
              onChange={(e) =>
                setManualForm((f) => ({ ...f, speciesId: e.target.value }))
              }
              className="rounded-sm border border-white/15 bg-black/40 px-2 py-2 text-[13px] text-white"
            >
              <option value="">Select…</option>
              {species.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.commonName}
                  {s.isDemo ? " (demo)" : ""}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1 text-[11px] text-white/45">
            Geographic scope
            <input
              value={manualForm.geographicScope}
              onChange={(e) =>
                setManualForm((f) => ({
                  ...f,
                  geographicScope: e.target.value,
                }))
              }
              className="rounded-sm border border-white/15 bg-black/40 px-2 py-2 text-[13px] text-white"
            />
          </label>
          <label className="flex flex-col gap-1 text-[11px] text-white/45">
            Category
            <input
              value={manualForm.conservationCategory}
              onChange={(e) =>
                setManualForm((f) => ({
                  ...f,
                  conservationCategory: e.target.value,
                }))
              }
              className="rounded-sm border border-white/15 bg-black/40 px-2 py-2 text-[13px] text-white"
              placeholder="e.g. EN, VU, Not assessed"
            />
          </label>
          <label className="flex flex-col gap-1 text-[11px] text-white/45">
            Population trend
            <input
              value={manualForm.populationTrend}
              onChange={(e) =>
                setManualForm((f) => ({
                  ...f,
                  populationTrend: e.target.value,
                }))
              }
              className="rounded-sm border border-white/15 bg-black/40 px-2 py-2 text-[13px] text-white"
            />
          </label>
          <label className="flex flex-col gap-1 text-[11px] text-white/45">
            Assessment date
            <input
              type="date"
              required
              value={manualForm.assessmentDate}
              onChange={(e) =>
                setManualForm((f) => ({
                  ...f,
                  assessmentDate: e.target.value,
                }))
              }
              className="rounded-sm border border-white/15 bg-black/40 px-2 py-2 text-[13px] text-white"
            />
          </label>
          <label className="flex flex-col gap-1 text-[11px] text-white/45">
            Publication date
            <input
              type="date"
              value={manualForm.publicationDate}
              onChange={(e) =>
                setManualForm((f) => ({
                  ...f,
                  publicationDate: e.target.value,
                }))
              }
              className="rounded-sm border border-white/15 bg-black/40 px-2 py-2 text-[13px] text-white"
            />
          </label>
          <label className="sm:col-span-2 flex flex-col gap-1 text-[11px] text-white/45">
            Source URL
            <input
              type="url"
              required
              value={manualForm.sourceUrl}
              onChange={(e) =>
                setManualForm((f) => ({ ...f, sourceUrl: e.target.value }))
              }
              className="rounded-sm border border-white/15 bg-black/40 px-2 py-2 text-[13px] text-white"
            />
          </label>
          <label className="sm:col-span-2 flex flex-col gap-1 text-[11px] text-white/45">
            Source assessment ID (optional)
            <input
              value={manualForm.sourceAssessmentId}
              onChange={(e) =>
                setManualForm((f) => ({
                  ...f,
                  sourceAssessmentId: e.target.value,
                }))
              }
              className="rounded-sm border border-white/15 bg-black/40 px-2 py-2 text-[13px] text-white"
            />
          </label>
          <button
            type="submit"
            disabled={busy}
            className="sm:col-span-2 rounded-sm bg-white px-4 py-2 text-[13px] font-medium text-black disabled:opacity-50"
          >
            Save manual assessment
          </button>
        </form>
      </section>
    </div>
  );
}
