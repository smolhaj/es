import { verifyJWT } from '../_lib/jwt.js';

const PUBLIC_PATHS = ['/api/auth/login', '/api/auth/register'];

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Max-Age': '86400'
};

export async function onRequest({ request, env, next, data }) {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS });
  }

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
}
