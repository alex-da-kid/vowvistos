import { NextRequest, NextResponse } from 'next/server';

const WP_URL = (process.env.WP_URL ?? '').trim();
const SECRET = (process.env.VV_SUBMIT_SECRET ?? '').trim();

const FIELD_MAP: Record<string, string> = {
  name: '4', phone: '7', email: '11', message: '3',
};

export async function POST(req: NextRequest) {
  try {
    const { formId, fieldValues } = await req.json();
    if (!formId || !fieldValues) {
      return NextResponse.json({ error: 'Missing formId or fieldValues' }, { status: 400 });
    }

    const values: Record<string, string> = {};
    for (const [key, value] of Object.entries(fieldValues as Record<string, string>)) {
      const resolvedKey = FIELD_MAP[key] ?? key;
      values[resolvedKey] = value;
    }

    const res = await fetch(`${WP_URL}/wp-json/vowvistos/v1/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-VV-Secret': SECRET,
      },
      body: JSON.stringify({ form_id: formId, values }),
      signal: AbortSignal.timeout(10000),
    });

    const text = await res.text();
    console.log('WP submit status:', res.status, text);

    if (!res.ok) {
      return NextResponse.json({ error: text }, { status: 500 });
    }

    let parsed: unknown;
    try { parsed = JSON.parse(text); } catch { parsed = { raw: text }; }
    return NextResponse.json(parsed);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('submit-form error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
