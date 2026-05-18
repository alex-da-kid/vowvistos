import { NextResponse } from 'next/server';
import { getForm } from '@/lib/gravityforms';

export async function GET() {
  const result = await getForm(36);
  return NextResponse.json({ result });
}
