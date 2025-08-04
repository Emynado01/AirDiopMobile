import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { requireAdmin } from '/Users/emyna/Documents/Ecole/React/ProjetINT/AirDiopMobile-main03/AirDiopMobile-main/src/lib/auth';
const prisma = new PrismaClient();
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    requireAdmin(req as any);
    const id = parseInt(params.id, 10);
    await prisma.user.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 403 });
  }
}