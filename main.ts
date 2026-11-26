import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// One-Liner Laughs v3 — garage door bills its owner, then texts the raccoon the PIN.
// Runner-up kept out of the pick: the door ordering a new remote for the raccoon.
const PICK = "On Tuesday at 6:14 a.m., my garage door opened for the mailman, the plumber, and a raccoon, then it charged me $4.17 and texted the raccoon the new PIN.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const target = `${outDir}/entry.txt`;
writeFileSync(target, PICK, "utf8");
chmodSync(target, 0o644);
