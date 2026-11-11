import { cpSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "node_modules/cesium/Build/Cesium");
const dest = join(root, "public/cesium");

if (!existsSync(src)) {
  console.warn("Cesium not installed — skip asset copy");
  process.exit(0);
}

mkdirSync(dest, { recursive: true });
for (const folder of ["Workers", "ThirdParty", "Assets", "Widgets"]) {
  cpSync(join(src, folder), join(dest, folder), { recursive: true });
}
console.log("Copied Cesium static assets → public/cesium");
