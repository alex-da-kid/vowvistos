import { NextRequest, NextResponse } from 'next/server';
import { submitForm } from '@/lib/gravityforms';

export async function POST(req: NextRequest) {
  const { formId, fields } = await req.json();

  if (!formId || !fields) {
    return NextResponse.json({ error: 'Missing formId or fields' }, { status: 400 });
  }

  const result = await submitForm(Number(formId), fields);
  return NextResponse.json(result);
}
