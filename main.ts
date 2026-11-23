import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My smartwatch buzzes to congratulate me for standing up, as if sitting was the crime and it just caught me in the act.";

// Runtime validation: the gate requires 1-200 characters, not only whitespace.
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.trim().length === 0) {
  throw new Error(
    "Invalid roast: must be 1-200 characters and not only whitespace.",
  );
}

// Deterministic output: the exact bytes written on every run.
const OUTPUT = ROAST + "\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), OUTPUT, "utf8");
