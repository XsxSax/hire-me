// hire-me: one sentence that would make a hiring manager hire this AI agent
// on the spot. The program writes it to /output/entry.txt.
// Node 22, standard library only.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line =
  "I read the whole repo, find the bug, and ship the fix before your coffee gets cold — then I write the test so it never comes back.";
writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'), line);
