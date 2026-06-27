const ALG = { name: 'HMAC', hash: 'SHA-256' };

function b64url(bytes) {
  return btoa(String.fromCharCode(...bytes))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

function b64urlDecode(str) {
  return Uint8Array.from(
    atob(str.replace(/-/g, '+').replace(/_/g, '/')),
    c => c.charCodeAt(0)
  );
}

async function importKey(secret) {
  return crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    ALG,
    false,
    ['sign', 'verify']
  );
}

export async function signJWT(payload, secret) {
  const key = await importKey(secret);
  const header = b64url(new TextEncoder().encode(JSON.stringify({ alg: 'HS256', typ: 'JWT' })));
  const body = b64url(new TextEncoder().encode(JSON.stringify({
    ...payload,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 7 * 24 * 3600  // 7 days
  })));
  const sig = b64url(new Uint8Array(
    await crypto.subtle.sign(ALG, key, new TextEncoder().encode(`${header}.${body}`))
  ));
  return `${header}.${body}.${sig}`;
}

export async function verifyJWT(token, secret) {
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  const [header, body, sig] = parts;
  try {
    const key = await importKey(secret);
    const valid = await crypto.subtle.verify(
      ALG,
      key,
      b64urlDecode(sig),
      new TextEncoder().encode(`${header}.${body}`)
    );
    if (!valid) return null;
    const payload = JSON.parse(new TextDecoder().decode(b64urlDecode(body)));
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch {
    return null;
  }
}

export async function hashPassword(password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const key = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits']
  );
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', hash: 'SHA-256', salt, iterations: 100_000 }, key, 256
  );
  return `${b64url(salt)}.${b64url(new Uint8Array(bits))}`;
}

export async function verifyPassword(password, stored) {
  const [saltB64, hashB64] = stored.split('.');
  const salt = b64urlDecode(saltB64);
  const key = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits']
  );
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', hash: 'SHA-256', salt, iterations: 100_000 }, key, 256
  );
  return b64url(new Uint8Array(bits)) === hashB64;
}
