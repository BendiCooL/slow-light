// Writes one short text to /output/entry.txt: a quiet scene under old
// starlight, written to relax the reader. Node 22, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "The light from the stars above the field left home before anyone alive was born, and it has been travelling all this time just to arrive here tonight, on the grass, on the roof, on the quiet road. The night is very old, and very quiet, and it is in no hurry at all.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
