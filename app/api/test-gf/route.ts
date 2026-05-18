import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function GET() {
  const WP_URL   = (process.env.WP_URL   ?? '').trim();
  const API_KEY  = (process.env.GF_API_KEY  ?? '').trim();
  const PRIV_KEY = (process.env.GF_PRIVATE_KEY ?? '').trim();

  const route = 'forms/36';
  const expires = Math.floor(Date.now() / 1000) + 3600;
  const stringToSign = `${API_KEY}:get:${route}:${expires}`;
  const sig = crypto.createHmac('sha1', PRIV_KEY).update(stringToSign).digest('base64');
  const url = `${WP_URL}/gravityformsapi/${route}?api_key=${API_KEY}&signature=${encodeURIComponent(sig)}&expires=${expires}`;

  let rawText = '';
  let httpStatus = 0;
  try {
    const res = await fetch(url, { cache: 'no-store' });
    httpStatus = res.status;
    rawText = await res.text();
  } catch (err) {
    return NextResponse.json({ error: String(err), url });
  }

  let parsed: unknown = null;
  try { parsed = JSON.parse(rawText); } catch { /* not JSON */ }

  return NextResponse.json({
    apiKeyUsed: API_KEY,
    privKeyLen: PRIV_KEY.length,
    stringToSign,
    httpStatus,
    rawText: rawText.slice(0, 500),
    parsed,
  });
}
