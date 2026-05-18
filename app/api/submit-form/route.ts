import { NextRequest, NextResponse } from 'next/server';
import { submitForm } from '@/lib/gravityforms';

export async function POST(req: NextRequest) {
  try {
    const { formId, fieldValues } = await req.json();
    if (!formId || !fieldValues) {
      return NextResponse.json({ error: 'Missing formId or fieldValues' }, { status: 400 });
    }
    const result = await submitForm(Number(formId), fieldValues);
    return NextResponse.json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('submit-form error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
