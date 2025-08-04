import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET!;
export function requireAdmin(req: NextRequest) {
  const token = req.cookies.get('auth')?.value;
  if (!token) throw new Error('Non authentifié');
  const payload = jwt.verify(token, JWT_SECRET) as { isAdmin: boolean };
  if (!payload.isAdmin) throw new Error('Accès refusé');
  return payload;
}