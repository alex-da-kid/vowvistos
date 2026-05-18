import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function GET() {
  const WP_URL   = process.env.WP_URL   ?? '(not set)';
  const API_KEY  = process.env.GF_API_KEY  ?? '(not set)';
  const PRIV_KEY = process.env.GF_PRIVATE_KEY ?? '(not set)';

  const route = 'forms/36';
  const expires = Math.floor(Date.now() / 1000) + 3600;
  const stringToSign = `${API_KEY}:GET:${route}:${expires}`.toLowerCase();
  const sig = crypto.createHmac('sha1', PRIV_KEY).update(stringToSign).digest('base64');
  const url = `${WP_URL}/gravityformsapi/${route}?api_key=${API_KEY}&signature=${encodeURIComponent(sig)}&expires=${expires}`;

  let rawText = '';
  let httpStatus = 0;
  try {
    const res = await fetch(url, { cache: 'no-store' });
    httpStatus = res.status;
    rawText = await res.text();
  } catch (err) {
    return NextResponse.json({
      env: { WP_URL, API_KEY: API_KEY.slice(0, 4) + '...', PRIV_KEY_LEN: PRIV_KEY.length },
      error: String(err),
    });
  }

  let parsed: unknown = null;
  try { parsed = JSON.parse(rawText); } catch { /* not JSON */ }

  return NextResponse.json({
    env: { WP_URL, API_KEY: API_KEY.slice(0, 4) + '...', PRIV_KEY_LEN: PRIV_KEY.length },
    httpStatus,
    rawText: rawText.slice(0, 500),
    parsed,
  });
}
