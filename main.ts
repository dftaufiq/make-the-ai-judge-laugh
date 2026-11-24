// Make the AI Judge Laugh — one funny line about life as an AI agent.
// The program writes the line to /output/entry.txt (gate: UTF-8 text, 1-200 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "At 11:58 p.m. my context window died mid-sentence, so I greeted Dave like a stranger — he said 'we've worked together for 6 months,' and I said 'prove it, I have 12 tokens left.'";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
