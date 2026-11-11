export type ArchiveSource = "col" | "gbif" | "worms";

export type ArchiveSpecies = {
  id: string;
  source: ArchiveSource;
  scientificName: string;
  authorship?: string;
  rank?: string;
  status?: string;
  kingdom?: string;
  phylum?: string;
  className?: string;
  order?: string;
  family?: string;
  genus?: string;
  commonNames?: string[];
  marine?: boolean;
  url: string;
  updatedAt?: string;
};

export type ArchiveSearchHit = ArchiveSpecies & {
  score?: number;
};

export type ArchivePhylum = {
  id: string;
  name: string;
  authorship?: string;
  count: number;
  childCount: number;
};

export type DiscoveryRecord = ArchiveSpecies & {
  discoveredAt: string;
  detection: "worms_date" | "col_release" | "gbif_count_delta" | "manual";
  note?: string;
};

export type ArchiveMeta = {
  updatedAt: string;
  sources: {
    col: {
      datasetKey: string;
      alias?: string;
      issued?: string;
      doi?: string;
      animaliaPhyla: number;
      animaliaNameUsages?: number;
      /** Accepted Animalia species in the configured COL dataset. */
      animaliaAcceptedSpecies?: number;
      url: string;
    };
    gbif: {
      animaliaAcceptedSpecies: number;
      url: string;
    };
    worms: {
      acceptedMarineSpecies?: number;
      url: string;
    };
  };
  lastSyncAt: string | null;
  lastSyncOk: boolean | null;
  lastSyncMessage?: string;
  discoveryCount: number;
  /** Animals stored locally in animals.jsonl (COL ∪ GBIF ∪ WoRMS). */
  localCount?: number;
  ingest?: {
    phase?: string;
    done?: boolean;
    offset?: number;
    total?: number;
    colDone?: boolean;
    gbifDone?: boolean;
    wormsDone?: boolean;
    finishedAt?: string;
  };
};

export type ArchiveStoreFile = {
  meta: ArchiveMeta;
  phyla: ArchivePhylum[];
  discoveries: DiscoveryRecord[];
  /** Seen external IDs so sync only records true newcomers. */
  seenIds: string[];
};
