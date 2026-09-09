// Post-deploy schema check: hits /api/health and exits non-zero if the
// deployed database is missing anything this build expects.
//
//   npm run health                       # production
//   npm run health -- http://localhost:8788
//   npm run health -- <url> <jwt>        # include the missing-column detail
//
// Exists because "tested locally" has twice shipped a migration that was
// never applied to production D1 (ES.md, 07-04-2026). Run it after a
// deploy — the answer is deterministic and takes a second.

const DEFAULT_URL = 'https://es-cpo.pages.dev';

const [urlArg, token] = process.argv.slice(2);
const base = (urlArg ?? DEFAULT_URL).replace(/\/$/, '');

const res = await fetch(`${base}/api/health`, {
  headers: token ? { Authorization: `Bearer ${token}` } : {}
}).catch(err => {
  console.error(`✗ ${base}/api/health is unreachable: ${err.message}`);
  process.exit(2);
});

let body;
try {
  body = await res.json();
} catch {
  // A Cloudflare platform error serves HTML, not JSON — see ES.md's
  // "Unexpected token '<'" gotcha.
  console.error(`✗ ${base}/api/health returned ${res.status} and a non-JSON body.`);
  process.exit(2);
}

if (body.status === 'ok') {
  console.log(`✓ ${base} healthy — schema matches all ${body.migrations} migrations.`);
  process.exit(0);
}

console.error(`✗ ${base} degraded:`, JSON.stringify(body.checks));
for (const m of body.missing ?? []) {
  console.error(m.columns === null
    ? `  · table "${m.table}" is missing entirely`
    : `  · table "${m.table}" is missing column(s): ${m.columns.join(', ')}`);
}
if (!body.missing) {
  console.error('  (pass a JWT as the second argument to see which tables/columns are missing)');
}
if (body.hint) console.error(`  → ${body.hint}`);
process.exit(1);
