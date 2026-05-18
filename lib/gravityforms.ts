import crypto from 'crypto';

const WP_URL   = process.env.WP_URL ?? '';
const API_KEY  = process.env.GF_API_KEY ?? '';
const PRIV_KEY = process.env.GF_PRIVATE_KEY ?? '';

// Field ID map for Form 36 (Contato Geral) — verify IDs in GF form editor
const FIELD_MAP: Record<string, string> = {
  name:    '1',
  email:   '2',
  phone:   '3',
  visa:    '4',
  message: '5',
};

function buildAuth(method: 'GET' | 'POST', route: string) {
  const expires = Math.floor(Date.now() / 1000) + 3600;
  const sig = crypto.createHmac('sha1', PRIV_KEY)
    .update(`${API_KEY}:${method}:${route}:${expires}`)
    .digest('base64');
  return { expires, sig };
}

export async function getForm(formId: number) {
  const route = `forms/${formId}`;
  const { expires, sig } = buildAuth('GET', route);
  const url = `${WP_URL}/gravityformsapi/${route}?api_key=${API_KEY}&signature=${encodeURIComponent(sig)}&expires=${expires}`;
  const res = await fetch(url, { next: { revalidate: 3600 } });
  const json = await res.json();
  return json.response ?? null;
}

export async function submitForm(formId: number, fieldValues: Record<string, string>) {
  const route = `forms/${formId}/entries`;
  const { expires, sig } = buildAuth('POST', route);
  const url = `${WP_URL}/gravityformsapi/${route}?api_key=${API_KEY}&signature=${encodeURIComponent(sig)}&expires=${expires}`;

  const entry: Record<string, string> = {};
  for (const [key, value] of Object.entries(fieldValues)) {
    const id = FIELD_MAP[key];
    if (id) entry[id] = value;
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entry),
    signal: AbortSignal.timeout(8000),
  });
  return res.json();
}
