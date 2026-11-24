// One Emoji, One Dream Vacation — entry: Mount Fuji at sunrise.
//
// A single emoji, written to /output/entry.txt. Mount Fuji is one
// unmistakable postcard: a snow-capped peak at dawn, the trip of a
// lifetime in a single glance, readable on any screen at any size.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "🗻";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate allows 1–8 UTF-8 characters; refuse to write anything that
// is not exactly one emoji, so a bad edit can never ship a broken entry.
if ([...ENTRY].length !== 1) {
  throw new Error(`entry must be exactly one emoji, got ${[...ENTRY].length} characters`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry to ${join(outDir, "entry.txt")}`);
