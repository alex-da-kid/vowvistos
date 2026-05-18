import { NextResponse } from 'next/server';

const WP_URL = (process.env.WP_URL ?? '').trim();
const SECRET = (process.env.VV_SUBMIT_SECRET ?? '').trim();

export async function GET() {
  const testUrl = `${WP_URL}/wp-json/vowvistos/v1/submit`;
  let httpStatus = 0;
  let rawText = '';

  try {
    const res = await fetch(testUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-VV-Secret': SECRET },
      body: JSON.stringify({ form_id: 36, values: { '1': 'Teste', '2': '85999999999', '3': 'teste@vowvistos.com.br', '4': 'Teste de integração' } }),
      signal: AbortSignal.timeout(10000),
    });
    httpStatus = res.status;
    rawText = await res.text();
  } catch (err) {
    return NextResponse.json({ error: String(err), testUrl, secretSet: !!SECRET });
  }

  let parsed: unknown = null;
  try { parsed = JSON.parse(rawText); } catch { /* not JSON */ }

  return NextResponse.json({ testUrl, secretSet: !!SECRET, httpStatus, rawText, parsed });
}
