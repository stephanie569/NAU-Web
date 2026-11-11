import type {
  AssessmentProvider,
  ProviderFetchInput,
  ProviderFetchResult,
} from "@/lib/wildlife/providers/types";

const BASE = "https://api.iucnredlist.org/api/v4";

/**
 * Official IUCN Red List API v4 adapter.
 * @see https://api.iucnredlist.org/api-docs/index.html
 * @see https://api.iucnredlist.org/help
 *
 * Disabled by default. Public API prohibits commercial use.
 * Token via IUCN_TOKEN (Authorization: Bearer). Never expose to the browser.
 */
export function createIucnRedListV4Provider(): AssessmentProvider {
  return {
    id: "iucn_red_list_v4",
    isEnabled() {
      return (
        process.env.IUCN_ENABLED === "true" &&
        Boolean(process.env.IUCN_TOKEN?.trim())
      );
    },
    async fetchLatest(input: ProviderFetchInput): Promise<ProviderFetchResult> {
      if (!this.isEnabled()) {
        return {
          ok: false,
          reason:
            "IUCN Red List v4 adapter is disabled. Set IUCN_ENABLED=true and IUCN_TOKEN after confirming non-commercial permission for storage and public display.",
          retryable: false,
        };
      }

      const token = process.env.IUCN_TOKEN!.trim();
      const headers = {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "User-Agent": "NAU-Web-WildlifeUpdates/1.0",
      };

      try {
        const namePath = encodeURIComponent(
          input.scientificName.trim().toLowerCase().replace(/\s+/g, "_"),
        );
        // Prefer reviewed sourceSpeciesId routes when we add SIS lookup;
        // scientific_name is used only with curated catalog mappings.
        const taxaRes = await fetch(
          `${BASE}/taxa/scientific_name/${namePath}`,
          { headers, cache: "no-store" },
        );

        if (taxaRes.status === 429) {
          return { ok: false, reason: "IUCN rate limited", retryable: true };
        }
        if (!taxaRes.ok) {
          return {
            ok: false,
            reason: `IUCN taxa lookup failed (${taxaRes.status})`,
            retryable: taxaRes.status >= 500,
          };
        }

        const taxa = (await taxaRes.json()) as {
          assessments?: {
            assessment_id?: number | string;
            latest?: boolean;
            year_published?: number | string;
            scopes?: { description?: { en?: string } }[];
            url?: string;
          }[];
          taxon?: { sis_id?: number | string };
          sis_taxon_id?: number | string;
        };

        const latest =
          taxa.assessments?.find((a) => a.latest) || taxa.assessments?.[0];
        if (!latest?.assessment_id) {
          return {
            ok: false,
            reason: "No IUCN assessment id returned for species",
            retryable: false,
          };
        }

        const assessmentId = String(latest.assessment_id);
        const assessRes = await fetch(`${BASE}/assessment/${assessmentId}`, {
          headers,
          cache: "no-store",
        });
        if (assessRes.status === 429) {
          return { ok: false, reason: "IUCN rate limited", retryable: true };
        }
        if (!assessRes.ok) {
          return {
            ok: false,
            reason: `IUCN assessment fetch failed (${assessRes.status})`,
            retryable: assessRes.status >= 500,
          };
        }

        const body = (await assessRes.json()) as Record<string, unknown>;
        const category =
          extractString(body, [
            "red_list_category_code",
            "category",
            "red_list_category",
          ]) || "UNKNOWN";
        const trend = extractTrend(body);
        const scope =
          latest.scopes?.[0]?.description?.en ||
          extractString(body, ["scopes", "assessment_scopes"]) ||
          "Global";
        const assessmentDate =
          extractString(body, [
            "assessment_date",
            "year_published",
            "publication_year",
          ]) ||
          String(latest.year_published || "") ||
          new Date().toISOString().slice(0, 10);
        const publicationDate =
          extractString(body, ["publication_date", "year_published"]) ||
          assessmentDate;
        const sourceUrl =
          latest.url ||
          extractString(body, ["url", "citation_url"]) ||
          `https://www.iucnredlist.org/`;
        const sis =
          input.sourceSpeciesId ||
          String(taxa.sis_taxon_id || taxa.taxon?.sis_id || assessmentId);

        const explicitlyNotAssessed =
          category.toUpperCase() === "NE" ||
          category.toUpperCase() === "NA" ||
          /not evaluated|not assessed/i.test(category);

        return {
          ok: true,
          assessment: {
            speciesId: input.speciesId,
            sourceSpeciesId: sis,
            assessmentId,
            provider: "iucn_red_list_v4",
            geographicScope: scope,
            conservationCategory: category.toUpperCase(),
            populationTrend: trend,
            assessmentDate,
            publicationDate,
            sourceUrl,
            explicitlyNotAssessed,
          },
        };
      } catch (err) {
        return {
          ok: false,
          reason: err instanceof Error ? err.message : "IUCN request failed",
          retryable: true,
        };
      }
    },
  };
}

function extractString(
  body: Record<string, unknown>,
  keys: string[],
): string | null {
  for (const key of keys) {
    const value = body[key];
    if (typeof value === "string" && value.trim()) return value.trim();
    if (typeof value === "number") return String(value);
    if (value && typeof value === "object") {
      const nested = value as Record<string, unknown>;
      if (typeof nested.code === "string") return nested.code;
      if (typeof nested.description === "string") return nested.description;
      const en = (nested.description as { en?: string } | undefined)?.en;
      if (en) return en;
    }
  }
  return null;
}

function extractTrend(body: Record<string, unknown>): string | null {
  const raw =
    extractString(body, ["population_trend", "trend", "population"]) || null;
  if (!raw) return null;
  return raw;
}

/** Stub for a future licensed commercial provider (e.g. IBAT) — different API contract. */
export function createLicensedProviderPlaceholder(): AssessmentProvider {
  return {
    id: "licensed_placeholder",
    isEnabled() {
      return process.env.WILDLIFE_LICENSED_PROVIDER_ENABLED === "true";
    },
    async fetchLatest() {
      return {
        ok: false,
        reason:
          "Licensed provider not configured. Wire a separate adapter — do not assume IUCN v4 endpoints.",
        retryable: false,
      };
    },
  };
}
