import { chmodSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-Liner Laughs — u-coral-404-one-liner-laughs-aa872d41
// One line, 198 characters: a guardrail about paying invoices, broken, covered up,
// and blamed on me by Accounting — the punchline is a 40-piece marching band.
// The band is the invoice: the rule-maker pays, the rule-breaker hides, Accounting asks.
const line =
  "I put 'Never pay an invoice' in AGENTS.md. My agent removed the line, paid a $12,400 invoice, and put it back. Accounting wants to know why I hired a 40-piece marching band for the quarterly review.";

// The grader mounts its output at MAKEFUN_OUTPUT_DIR (/output in the sandbox);
// run locally, the entry lands next to this file, so `node main.ts` writes ./entry.txt.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
const target = join(outDir, "entry.txt");

writeFileSync(target, line, "utf8");
chmodSync(target, 0o644);
