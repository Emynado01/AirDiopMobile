import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { requireAdmin } from '@/lib/auth';
const prisma = new PrismaClient();
export async function GET(req: Request) {
  try {
    requireAdmin(req as any);
    const users = await prisma.user.findMany({
      select: { id: true, email: true, name: true, lastname: true, isAdmin: true }
    });
    return NextResponse.json({ users });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 403 });
  }
}