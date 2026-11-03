import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const output = resolve(root, "src/app/companies/resume-dates.json");
// Exported source copies have no Git metadata; retain the committed snapshot.
if (!existsSync(resolve(root, ".git"))) process.exit(0);
const routes = ["", "startup-tech", "large-tech", "toss-place-platform", "toss-bank", "toss-invest", "dau-data", "2026-03-30", "latest", "simple"];
function resolveSource(path) {
  return [path, `${path}.tsx`, `${path}.ts`, `${path}/index.ts`].find(p => existsSync(p) && /\.(tsx|ts)$/.test(p));
}
function sources(file, seen = new Set()) {
  if (!file || seen.has(file)) return seen;
  seen.add(file);
  const text = readFileSync(file, "utf8");
  for (const match of text.matchAll(/(?:from\s*|import\s*\()["']([^"']+)["']/g)) {
    const target = match[1];
    const path = target.startsWith("@/") ? resolve(root, "src", target.slice(2)) : target.startsWith(".") ? resolve(dirname(file), target) : undefined;
    if (path && !path.includes("/components/") && !path.includes("/utils/")) sources(resolveSource(path), seen);
  }
  return seen;
}
const dates = Object.fromEntries(routes.map(route => {
  const files = [...sources(resolve(root, "src/app", route, "page.tsx"))];
  const timestamp = execFileSync("git", ["log", "-1", "--format=%cI", "--", ...files], { encoding: "utf8" }).trim();
  if (!timestamp) throw new Error(`Missing Git history for ${route || "/"}`);
  const date = new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date(timestamp));
  return [route ? `/${route}/` : "/", date];
}));
writeFileSync(output, JSON.stringify(dates, null, 2) + "\n");
