// Generates functions/_lib/schemaManifest.generated.js — the list of tables
// and columns the deployed code expects — by reading migrations/*.sql.
//
// Why this exists: twice now (schema-v7, schema-v8 — see ES.md, 07-04-2026)
// a migration was applied locally, verified locally, and shipped without
// ever being run against production D1, which failed at runtime as a
// "no such column" deep inside a feature rather than as anything a deploy
// would notice. /api/health compares this manifest against the live
// database so the drift is visible before a learner finds it.
//
// Generated rather than hand-maintained so it can't drift from the
// migrations themselves; `npm run build` regenerates it, so a stale
// manifest can't survive a build.

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const MIGRATIONS = path.join(ROOT, 'migrations');
const OUT = path.join(ROOT, 'functions', '_lib', 'schemaManifest.generated.js');

// Table-body lines that declare a constraint rather than a column.
const CONSTRAINT = /^(PRIMARY|FOREIGN|UNIQUE|CHECK|CONSTRAINT)\b/i;

function stripComments(sql) {
  return sql.replace(/--[^\n]*/g, '');
}

// Splits a CREATE TABLE body on top-level commas only — a commas inside
// PRIMARY KEY (a, b) or a DEFAULT expression must not split a column off.
function splitTopLevel(body) {
  const parts = [];
  let depth = 0;
  let current = '';
  for (const ch of body) {
    if (ch === '(') depth++;
    else if (ch === ')') depth--;
    if (ch === ',' && depth === 0) { parts.push(current); current = ''; continue; }
    current += ch;
  }
  if (current.trim()) parts.push(current);
  return parts;
}

function parse(sql) {
  const tables = new Map();
  const text = stripComments(sql);

  const createRe = /CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?["`]?(\w+)["`]?\s*\(([\s\S]*?)\n\s*\);/gi;
  for (const [, table, body] of text.matchAll(createRe)) {
    const columns = splitTopLevel(body)
      .map(part => part.trim())
      .filter(part => part && !CONSTRAINT.test(part))
      .map(part => part.replace(/^["`]/, '').match(/^\w+/)?.[0])
      .filter(Boolean);
    tables.set(table, columns);
  }

  const alterRe = /ALTER\s+TABLE\s+["`]?(\w+)["`]?\s+ADD\s+COLUMN\s+["`]?(\w+)["`]?/gi;
  const added = [];
  for (const [, table, column] of text.matchAll(alterRe)) added.push([table, column]);

  return { tables, added };
}

const schema = new Map();
const files = readdirSync(MIGRATIONS).filter(f => f.endsWith('.sql')).sort();

for (const file of files) {
  const { tables, added } = parse(readFileSync(path.join(MIGRATIONS, file), 'utf8'));
  for (const [table, columns] of tables) {
    if (!schema.has(table)) schema.set(table, []);
    const known = schema.get(table);
    for (const c of columns) if (!known.includes(c)) known.push(c);
  }
  for (const [table, column] of added) {
    if (!schema.has(table)) {
      throw new Error(`${file}: ALTER TABLE ${table} before any CREATE TABLE ${table}`);
    }
    const known = schema.get(table);
    if (!known.includes(column)) known.push(column);
  }
}

if (schema.size === 0) throw new Error('No tables parsed out of migrations/ — check the parser.');

const body = [...schema.entries()]
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([table, columns]) => `  ${table}: ${JSON.stringify(columns)},`)
  .join('\n');

writeFileSync(OUT, `// GENERATED FILE — do not edit by hand.
// Run \`npm run schema:manifest\` (or \`npm run build\`) to regenerate.
// Source: migrations/*.sql, via scripts/build-schema-manifest.mjs.
//
// What the deployed code expects the D1 schema to look like. /api/health
// compares this against the live database and reports anything missing —
// the check that would have caught the schema-v7 and schema-v8 outages
// (ES.md punch-list item 10) at deploy time instead of at a learner's
// next click.

export const EXPECTED_SCHEMA = {
${body}
};

export const MIGRATION_COUNT = ${files.length};
`);

console.log(`schema manifest: ${schema.size} tables from ${files.length} migrations -> ${path.relative(ROOT, OUT)}`);
