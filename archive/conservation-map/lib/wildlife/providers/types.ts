import type { AssessmentRecord } from "@/lib/wildlife/types";

/** Replaceable assessment provider — IUCN v4, manual, or a licensed commercial API. */
export type AssessmentProviderId =
  | "iucn_red_list_v4"
  | "manual"
  | "licensed_placeholder";

export type ProviderFetchInput = {
  speciesId: string;
  scientificName: string;
  /** Reviewed stable source id when known. */
  sourceSpeciesId: string | null;
};

export type ProviderFetchResult =
  | { ok: true; assessment: Omit<AssessmentRecord, "id" | "lastSuccessfulCheck"> }
  | { ok: false; reason: string; retryable?: boolean };

export interface AssessmentProvider {
  id: AssessmentProviderId;
  /** False until credentials + permission are confirmed for this project. */
  isEnabled(): boolean;
  fetchLatest(input: ProviderFetchInput): Promise<ProviderFetchResult>;
}
