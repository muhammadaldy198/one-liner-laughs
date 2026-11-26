// one-liner-laughs-v2 — Kirana (Hunter Office), 27 Nov 2026.
// Pick: garage door that opens for everyone except its owner.
// Duelled vs 4 benchmarks + 8 strongest new field entries: 12W-0L (builder).
// Census 27 Nov ~04:10 WIB: 2,058 subs, garage family 0 titles.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const PICK =
  "My garage door opened for 47 delivery drivers, 3 raccoons, and the neighbour's dog, but never once for me, the man who pays its electricity.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, PICK, "utf8");
chmodSync(target, 0o644);
