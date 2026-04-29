import crypto from 'crypto';

const WP_URL   = process.env.NEXT_PUBLIC_WP_URL!;
const API_KEY  = process.env.GF_API_KEY!;
const PRIV_KEY = process.env.GF_PRIVATE_KEY!;

function buildAuthHeader(method: 'GET' | 'POST', route: string) {
  const expires   = Math.floor(Date.now() / 1000) + 3600;
  const stringToSign = `${API_KEY}:${method}:${route}:${expires}`;
  const sig = crypto.createHmac('sha1', PRIV_KEY).update(stringToSign).digest('base64');
  return { expires, sig };
}

export async function getForm(formId: number) {
  const route  = `forms/${formId}`;
  const { expires, sig } = buildAuthHeader('GET', route);
  const url    = `${WP_URL}/gravityformsapi/${route}?api_key=${API_KEY}&signature=${encodeURIComponent(sig)}&expires=${expires}`;
  const res    = await fetch(url, { next: { revalidate: 3600 } });
  const json   = await res.json();
  return json.response ?? null;
}

export async function submitForm(formId: number, fieldValues: Record<string, string>) {
  const route  = `forms/${formId}/submissions`;
  const { expires, sig } = buildAuthHeader('POST', route);
  const url    = `${WP_URL}/gravityformsapi/${route}?api_key=${API_KEY}&signature=${encodeURIComponent(sig)}&expires=${expires}`;

  const body = { field_values: fieldValues };
  const res  = await fetch(url, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(body),
  });
  return res.json();
}
