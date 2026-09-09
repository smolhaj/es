// Catches `styles.someName` references with no matching rule in the
// component's CSS module.
//
//   npm run check:styles
//
// React renders className={undefined} as no class attribute at all, so a
// typo here doesn't throw and doesn't look broken in a diff — the element
// just silently loses its styling. That's the same shape as the `--sp-7`
// bug ES.md's gotchas describe: invisible until you actually measure what
// rendered.
//
// The convention this enforces is the one the codebase already uses: a
// semantic hook with no styling yet still gets an empty rule (see
// `.weakSection {}` in Dashboard.module.css), so "no rule" always means a
// mistake rather than "styled elsewhere, probably".

import { readdirSync, readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const DIRS = ['src/pages', 'src/components'];

const missing = [];
let checked = 0;

for (const dir of DIRS) {
  const abs = path.join(ROOT, dir);
  for (const file of readdirSync(abs)) {
    if (!file.endsWith('.jsx')) continue;
    const cssPath = path.join(abs, file.replace('.jsx', '.module.css'));
    if (!existsSync(cssPath)) continue;
    checked++;

    const jsx = readFileSync(path.join(abs, file), 'utf8');
    const css = readFileSync(cssPath, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
    const defined = new Set([...css.matchAll(/\.([A-Za-z_][\w-]*)/g)].map(m => m[1]));

    for (const name of new Set([...jsx.matchAll(/styles\.([\w]+)/g)].map(m => m[1]))) {
      if (!defined.has(name)) missing.push(`${dir}/${file}: styles.${name} has no rule in ${path.basename(cssPath)}`);
    }
  }
}

for (const m of missing) console.error(`  ERROR ${m}`);

if (missing.length) {
  console.error(`\n✗ ${missing.length} dangling class reference(s) across ${checked} components`);
  process.exit(1);
}
console.log(`✓ every styles.* reference resolves (${checked} components)`);
