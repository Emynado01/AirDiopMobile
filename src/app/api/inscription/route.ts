// src/app/api/inscription/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'supersecret!';

export async function POST(req: Request) {
  try {
    const { email, password, name, lastname } = await req.json();

    // 1) Vérifier l’existence
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return new Response(JSON.stringify({ success: false, error: 'Email déjà utilisé.' }), { status: 400 });
    }

    // 2) Hasher et créer
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { email, name, lastname, password: hashedPassword }
    });

    // 3) Générer le JWT
    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    // 4) Réponse avec cookie automatiquement déposé
    const res = NextResponse.json({
      success: true,
      message: 'Utilisateur créé avec succès',
      user: { id: user.id, email: user.email, name: user.name, lastname: user.lastname }
    }, { status: 201 });

    // Déposer le cookie 'auth' accessible server-side
    res.cookies.set({
      name: 'auth',
      value: token,
      httpOnly: true,
      path: '/',        // disponible sur tout le site
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 7 jours
    });

    return res;

  } catch (err) {
    console.error('Erreur inscription:', err);
    return new Response(JSON.stringify({ success: false, error: 'Erreur serveur' }), { status: 500 });
  }
}
