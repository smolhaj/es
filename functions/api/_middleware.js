import { verifyJWT } from '../_lib/jwt.js';

// /api/health is public on purpose: an uptime monitor has to be able to
// reach it, and it only ever reports pass/fail to an unauthenticated
// caller (health.js decides what detail a signed-in caller additionally
// gets, verifying the token itself).
const PUBLIC_PATHS = ['/api/auth/login', '/api/auth/register', '/api/health'];

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Max-Age': '86400'
};

export async function onRequest({ request, env, next, data }) {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS });
  }

  try {
    const url = new URL(request.url);

    if (PUBLIC_PATHS.includes(url.pathname)) {
      const res = await next();
      const newRes = new Response(res.body, res);
      Object.entries(CORS).forEach(([k, v]) => newRes.headers.set(k, v));
      return newRes;
    }

    const auth = request.headers.get('Authorization') ?? '';
    if (!auth.startsWith('Bearer ')) {
      return Response.json({ error: 'Unauthorized' }, { status: 401, headers: CORS });
    }

    const payload = await verifyJWT(auth.slice(7), env.JWT_SECRET);
    if (!payload) {
      return Response.json({ error: 'Unauthorized' }, { status: 401, headers: CORS });
    }

    data.user = payload;

    const res = await next();
    const newRes = new Response(res.body, res);
    Object.entries(CORS).forEach(([k, v]) => newRes.headers.set(k, v));
    return newRes;
  } catch (err) {
    // Without this, an unhandled exception makes Cloudflare serve its HTML
    // error page, which the frontend can't parse ("Unexpected token '<'").
    console.error('Unhandled error in', request.method, new URL(request.url).pathname, '-', err);
    return Response.json({ error: `Server error: ${err.message ?? 'unknown'}` }, { status: 500, headers: CORS });
  }
}
