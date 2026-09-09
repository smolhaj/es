import { EXPECTED_SCHEMA, MIGRATION_COUNT } from '../_lib/schemaManifest.generated.js';
import { verifyJWT } from '../_lib/jwt.js';

// Deploy-health check, deliberately reachable without auth so an uptime
// monitor (or a person with a browser) can hit it.
//
// The check that matters here is schema drift. Twice — schema-v7 and
// schema-v8, see ES.md 07-04-2026 — a migration was written, applied
// locally, verified locally and shipped, but never run against production
// D1. Cloudflare's D1 migrations are applied manually from this project
// (this environment has no Cloudflare credentials), so "tested locally"
// has already failed twice to catch a missing remote migration. Nothing in
// the app noticed: the failure surfaced later as a "no such column" inside
// whichever feature happened to touch the new column first.
//
// Comparing the live schema against the build's own expectations
// (functions/_lib/schemaManifest.generated.js, generated from
// migrations/*.sql) turns that into one deterministic answer.
//
// Unauthenticated callers get pass/fail only. The specific missing tables
// and columns are returned to a signed-in caller, so the endpoint can't be
// used to enumerate the schema of a database it has no account on.
export async function onRequestGet({ env, request }) {
  const checks = { database: 'ok', schema: 'ok' };
  const missing = [];

  if (!env.DB) {
    checks.database = 'unbound';
    return respond(request, env, checks, missing, 503);
  }

  try {
    for (const [table, expectedColumns] of Object.entries(EXPECTED_SCHEMA)) {
      const { results } = await env.DB.prepare(`PRAGMA table_info(${table})`).all();
      if (!results?.length) {
        missing.push({ table, columns: null }); // whole table absent
        continue;
      }
      const live = new Set(results.map(r => r.name));
      const absent = expectedColumns.filter(c => !live.has(c));
      if (absent.length) missing.push({ table, columns: absent });
    }
  } catch (err) {
    console.error('Health check could not read the D1 schema:', err);
    checks.database = 'error';
    return respond(request, env, checks, missing, 503);
  }

  if (missing.length) checks.schema = 'behind';
  return respond(request, env, checks, missing, missing.length ? 503 : 200);
}

async function respond(request, env, checks, missing, status) {
  const body = {
    status: status === 200 ? 'ok' : 'degraded',
    checks,
    migrations: MIGRATION_COUNT,
  };

  if (missing.length && await isSignedIn(request, env)) {
    body.missing = missing;
    body.hint = 'Run `npx wrangler d1 migrations apply DB --remote`, or apply the pending migrations in the Cloudflare D1 console.';
  }

  return Response.json(body, { status });
}

async function isSignedIn(request, env) {
  const auth = request.headers.get('Authorization') ?? '';
  if (!auth.startsWith('Bearer ') || !env.JWT_SECRET) return false;
  try {
    return !!(await verifyJWT(auth.slice(7), env.JWT_SECRET));
  } catch {
    return false;
  }
}
