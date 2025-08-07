import React from 'react';
import Link from 'next/link';
import AdminUserTable from '@/components/AdminUserTable';
import { Header } from '../../components/Header';
export default function AdminUsersPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Header />
      <h1 className="text-2xl font-bold mb-6">Espace Administrateur</h1>
      <div className="mb-4">
        <Link href="/admin/stats" className="text-blue-500 hover:underline">
          Voir les statistiques
        </Link>
      </div>
      <AdminUserTable />
    </div>
  );
}