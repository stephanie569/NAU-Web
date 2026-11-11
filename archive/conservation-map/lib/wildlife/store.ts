import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";
import type { WildlifeStoreFile } from "@/lib/wildlife/types";
import { createSeedWildlifeStore } from "@/lib/wildlife/seed";

const DATA_DIR = path.join(process.cwd(), "data", "wildlife");
const STORE_PATH = path.join(DATA_DIR, "store.json");

function ensureDir() {
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
}

export function getWildlifeStorePath() {
  return STORE_PATH;
}

export function readWildlifeStore(): WildlifeStoreFile {
  ensureDir();
  if (!existsSync(STORE_PATH)) {
    const seed = createSeedWildlifeStore();
    writeWildlifeStore(seed);
    return seed;
  }
  try {
    return JSON.parse(readFileSync(STORE_PATH, "utf8")) as WildlifeStoreFile;
  } catch {
    const seed = createSeedWildlifeStore();
    writeWildlifeStore(seed);
    return seed;
  }
}

export function writeWildlifeStore(store: WildlifeStoreFile) {
  ensureDir();
  store.updatedAt = new Date().toISOString();
  writeFileSync(STORE_PATH, JSON.stringify(store, null, 2), "utf8");
}

export function withWildlifeStore<T>(
  mutator: (store: WildlifeStoreFile) => T,
): T {
  const store = readWildlifeStore();
  const result = mutator(store);
  writeWildlifeStore(store);
  return result;
}
