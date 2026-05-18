import crypto from 'crypto';

const WP_URL   = process.env.WP_URL ?? '';
const API_KEY  = process.env.GF_API_KEY ?? '';
const PRIV_KEY = process.env.GF_PRIVATE_KEY ?? '';

// Field ID map for Form 36 (Contato Geral) — matches GF field order
const FIELD_MAP: Record<string, string> = {
  name:    '1',
  phone:   '2',
  email:   '3',
  message: '4',
};

function buildAuth(method: 'GET' | 'POST', route: string) {
  const expires = Math.floor(Date.now() / 1000) + 3600;
  const stringToSign = `${API_KEY}:${method}:${route}:${expires}`.toLowerCase();
  const sig = crypto.createHmac('sha1', PRIV_KEY)
    .update(stringToSign)
    .digest('base64');
  return { expires, sig };
}

export async function getForm(formId: number) {
  try {
    const route = `forms/${formId}`;
    const { expires, sig } = buildAuth('GET', route);
    const url = `${WP_URL}/gravityformsapi/${route}?api_key=${API_KEY}&signature=${encodeURIComponent(sig)}&expires=${expires}`;
    const res = await fetch(url, { cache: 'no-store' });
    const json = await res.json();
    if (json.status !== 200) {
      console.error('GF getForm error:', JSON.stringify(json));
      return null;
    }
    return json.response ?? null;
  } catch (err) {
    console.error('GF getForm exception:', err);
    return null;
  }
}

export async function submitForm(formId: number, fieldValues: Record<string, string>) {
  const route = `forms/${formId}/entries`;
  const { expires, sig } = buildAuth('POST', route);
  const url = `${WP_URL}/gravityformsapi/${route}?api_key=${API_KEY}&signature=${encodeURIComponent(sig)}&expires=${expires}`;

  const entry: Record<string, string> = {};
  for (const [key, value] of Object.entries(fieldValues)) {
    // If key is already a numeric field ID, use it directly
    if (/^\d+(\.\d+)?$/.test(key)) {
      entry[key] = value;
    } else {
      const id = FIELD_MAP[key];
      if (id) entry[id] = value;
    }
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entry),
    signal: AbortSignal.timeout(8000),
  });

  const text = await res.text();
  console.log('GF submitForm HTTP status:', res.status);
  console.log('GF submitForm raw response:', text);

  let json: Record<string, unknown>;
  try {
    json = JSON.parse(text);
  } catch {
    throw new Error(`GF returned non-JSON (HTTP ${res.status}): ${text.slice(0, 300)}`);
  }

  if (json.status !== 200) {
    throw new Error(`GF error ${json.status}: ${JSON.stringify(json.response)}`);
  }

  return json;
}
