'use client';
import React from 'react';
import '../styles/globals.css';
import Footer from '../components/Footer';
import { DarkModeProvider } from '../contexts/DarkModeContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Ton lien vers le manifest */}
        <link rel="manifest" href="/manifest.json" />
        <title>Site de Réservation de Vol</title>
      </head>
      <body className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <DarkModeProvider>
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </DarkModeProvider>
      </body>
    </html>
  );
}
