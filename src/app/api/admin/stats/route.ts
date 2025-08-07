import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { requireAdmin } from '@/lib/auth';

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    requireAdmin(req as any);
    const usersCount = await prisma.user.count();
    const reservedCount = await prisma.reservation.count({ where: { status: 'active' } });
    const cancelledCount = await prisma.reservation.count({ where: { status: 'cancelled' } });
    const paidCount = await prisma.reservation.count({ where: { paid: true } });
    return NextResponse.json({ usersCount, reservedCount, cancelledCount, paidCount });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 403 });
  }
}
