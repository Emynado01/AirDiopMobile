import React from 'react';
import { Header } from '@/components/Header';
import AdminStats from '@/components/AdminStats';

export default function AdminStatsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Header />
      <h1 className="text-2xl font-bold mb-6">Espace Statistiques</h1>
      <AdminStats />
    </div>
  );
}
