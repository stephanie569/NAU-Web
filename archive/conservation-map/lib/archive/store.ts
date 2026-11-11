import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";
import type { ArchiveStoreFile } from "@/lib/archive/types";
import { ARCHIVE_SOURCES } from "@/lib/archive/sources";

const DATA_DIR = path.join(process.cwd(), "data", "species-archive");
const STORE_PATH = path.join(DATA_DIR, "store.json");

const EMPTY_STORE: ArchiveStoreFile = {
  meta: {
    updatedAt: new Date(0).toISOString(),
    sources: {
      col: {
        datasetKey: "pending",
        animaliaPhyla: 0,
        url: ARCHIVE_SOURCES.col.url,
      },
      gbif: {
        animaliaAcceptedSpecies: 0,
        url: ARCHIVE_SOURCES.gbif.url,
      },
      worms: {
        url: ARCHIVE_SOURCES.worms.url,
      },
    },
    lastSyncAt: null,
    lastSyncOk: null,
    discoveryCount: 0,
  },
  phyla: [],
  discoveries: [],
  seenIds: [],
};

function ensureDir() {
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
}

export function getArchiveStorePath() {
  return STORE_PATH;
}

export function readArchiveStore(): ArchiveStoreFile {
  ensureDir();
  if (!existsSync(STORE_PATH)) {
    writeArchiveStore(EMPTY_STORE);
    return structuredClone(EMPTY_STORE);
  }
  try {
    const raw = readFileSync(STORE_PATH, "utf8");
    return JSON.parse(raw) as ArchiveStoreFile;
  } catch {
    return structuredClone(EMPTY_STORE);
  }
}

export function writeArchiveStore(store: ArchiveStoreFile) {
  ensureDir();
  writeFileSync(STORE_PATH, JSON.stringify(store, null, 2), "utf8");
}
