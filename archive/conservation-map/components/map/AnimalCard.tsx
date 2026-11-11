"use client";

import { useEffect, useState } from "react";
import { proxiedImageUrl } from "@/lib/map/animalIcons";
import type { AnimalCardPayload } from "@/lib/wildlife/types";

type Props = {
  card: AnimalCardPayload;
  loading?: boolean;
  onClose: () => void;
};

export function AnimalCard({ card, loading, onClose }: Props) {
  const a = card.assessment;
  const [imgFailed, setImgFailed] = useState(false);
  const photoSrc = card.photo?.url ? proxiedImageUrl(card.photo.url) : null;
  const showPhoto = Boolean(photoSrc) && !imgFailed;

  useEffect(() => {
    setImgFailed(false);
  }, [card.speciesId, photoSrc]);

  return (
    <aside className="max-h-[min(88vh,720px)] w-[min(92vw,380px)] overflow-y-auto rounded-[4px] border border-white/15 bg-black/90 text-white shadow-[0_16px_50px_rgba(0,0,0,0.55)] backdrop-blur-md">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0c1520]">
        {showPhoto ? (
          // eslint-disable-next-line @next/next/no-img-element -- proxied remote species media
          <img
            key={photoSrc!}
            src={photoSrc!}
            alt={card.photo!.alt || card.commonName}
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center">
            {card.emoji ? (
              <span className="text-[52px] leading-none" aria-hidden>
                {card.emoji}
              </span>
            ) : null}
            <p className="text-[12px] text-white/45">
              {loading ? "Loading photo…" : "No photo available yet"}
            </p>
            {!loading ? (
              <p className="text-[10px] text-white/30">
                We only show real published photos — never generated images.
              </p>
            ) : null}
          </div>
        )}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-2 right-2 rounded-sm bg-black/55 px-2 py-1 text-[11px] text-white/80 hover:bg-black/75"
        >
          Close
        </button>
        {card.photo && showPhoto ? (
          <p className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent px-3 pt-6 pb-2 text-[10px] text-white/55">
            {card.photo.credit}
            {card.photo.sourceUrl ? (
              <>
                {" · "}
                <a
                  href={card.photo.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#9fd0ff]/90 hover:underline"
                >
                  Source
                </a>
              </>
            ) : null}
          </p>
        ) : null}
      </div>

      <div className="p-4">
        <p className="text-[11px] tracking-[0.12em] text-white/40 uppercase">
          Animal profile
        </p>
        <h2 className="mt-1 flex items-start gap-2 text-[18px] font-medium tracking-[-0.03em]">
          {card.emoji ? (
            <span className="shrink-0 text-[22px] leading-none" aria-hidden>
              {card.emoji}
            </span>
          ) : null}
          <span>{card.commonName}</span>
        </h2>
        {card.scientificName &&
        card.scientificName.toLowerCase() !==
          card.commonName.toLowerCase() ? (
          <p className="text-[13px] italic text-white/55">
            {card.scientificName}
          </p>
        ) : null}
        {card.regionName ? (
          <p className="mt-1 text-[12px] text-white/45">{card.regionName}</p>
        ) : null}
        {(card.taxonomy?.phylum || card.taxonomy?.className || card.animalGroup) ? (
          <p className="mt-1 text-[11px] text-white/35">
            {[card.taxonomy?.phylum, card.taxonomy?.className, card.animalGroup]
              .filter(Boolean)
              .join(" · ")}
          </p>
        ) : null}

        {card.isDemo ? (
          <p className="mt-3 rounded-sm border border-amber-200/30 bg-amber-200/10 px-2 py-1.5 text-[11px] text-amber-100/90">
            Demonstration data — isolated from production claims.
          </p>
        ) : null}

        <section className="mt-4 border-t border-white/10 pt-3">
          <h3 className="text-[10px] font-semibold tracking-[0.14em] text-white/40 uppercase">
            Conservation status
          </h3>
          <p className="mt-1.5 text-[15px] font-medium text-white">
            {a.statusLabel}
          </p>
          {a.scope ? (
            <p className="mt-1 text-[12px] text-white/50">Scope: {a.scope}</p>
          ) : null}
          {a.unavailable ? (
            <p className="mt-2 text-[12px] text-white/45">
              Assessment unavailable. Missing data does not imply the species is
              safe.
            </p>
          ) : null}
          {a.stale && !a.unavailable ? (
            <p className="mt-2 text-[12px] text-amber-200/80">
              Status may be stale — last successful check{" "}
              {a.lastSuccessfulCheck
                ? new Date(a.lastSuccessfulCheck).toLocaleDateString()
                : "unknown"}
              .
            </p>
          ) : null}
          <dl className="mt-3 space-y-1.5 text-[12px]">
            <div className="flex justify-between gap-3">
              <dt className="text-white/40">Assessment date</dt>
              <dd>{a.assessmentDate || "—"}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-white/40">Population trend</dt>
              <dd>{a.populationTrend || "—"}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-white/40">Last check</dt>
              <dd>
                {a.lastSuccessfulCheck
                  ? new Date(a.lastSuccessfulCheck).toLocaleString()
                  : "—"}
              </dd>
            </div>
          </dl>
          {a.sourceUrl ? (
            <a
              href={a.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-[12px] text-[#9fd0ff] underline-offset-2 hover:underline"
            >
              Assessment source ↗
            </a>
          ) : null}
        </section>

        {card.sourceLinks && card.sourceLinks.length > 0 ? (
          <section className="mt-4 border-t border-white/10 pt-3">
            <h3 className="text-[10px] font-semibold tracking-[0.14em] text-white/40 uppercase">
              Catalogue links
            </h3>
            <ul className="mt-2 space-y-1">
              {card.sourceLinks.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[12px] text-[#9fd0ff] underline-offset-2 hover:underline"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="mt-4 border-t border-white/10 pt-3">
          <h3 className="text-[10px] font-semibold tracking-[0.14em] text-white/40 uppercase">
            Latest verified event
          </h3>
          {card.latestEvent ? (
            <div className="mt-2">
              <p className="text-[13px] font-medium text-white">
                {card.latestEvent.headline}
              </p>
              <p className="mt-1 text-[12px] leading-snug text-white/55">
                {card.latestEvent.summary}
              </p>
              <p className="mt-2 text-[11px] text-white/40">
                {card.latestEvent.regionName} · {card.latestEvent.eventDate} ·{" "}
                {card.latestEvent.organisation}
              </p>
              <a
                href={card.latestEvent.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-block text-[12px] text-[#9fd0ff] underline-offset-2 hover:underline"
              >
                Event source ↗
              </a>
            </div>
          ) : (
            <p className="mt-2 text-[12px] text-white/45">
              No approved conservation events yet.
            </p>
          )}
        </section>

        {card.eventHistory.length > 1 ? (
          <section className="mt-4 border-t border-white/10 pt-3">
            <h3 className="text-[10px] font-semibold tracking-[0.14em] text-white/40 uppercase">
              Event history
            </h3>
            <ul className="mt-2 space-y-2">
              {card.eventHistory.slice(0, 5).map((e) => (
                <li key={e.id} className="text-[12px] text-white/60">
                  <span className="text-white/85">{e.headline}</span>
                  <span className="text-white/35"> · {e.publicationDate}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <p className="mt-4 border-t border-white/10 pt-3 text-[10px] leading-snug text-white/35">
          Not live tracking or live population monitoring. Local incidents never
          change the global assessment category shown above.
        </p>
      </div>
    </aside>
  );
}
