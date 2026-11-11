import { createIucnRedListV4Provider, createLicensedProviderPlaceholder } from "@/lib/wildlife/providers/iucnRedListV4";
import type { AssessmentProvider } from "@/lib/wildlife/providers/types";

export function getActiveAssessmentProvider(): AssessmentProvider {
  const licensed = createLicensedProviderPlaceholder();
  if (licensed.isEnabled()) return licensed;

  const iucn = createIucnRedListV4Provider();
  if (iucn.isEnabled()) return iucn;

  // Manual-only mode: sync will skip remote fetches but keep last valid data.
  return {
    id: "manual",
    isEnabled: () => true,
    async fetchLatest() {
      return {
        ok: false,
        reason:
          "No remote assessment provider enabled. Enter sourced assessments manually in /editorial.",
        retryable: false,
      };
    },
  };
}
