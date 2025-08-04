import React from 'react';
import AdminUserTable from '/Users/emyna/Documents/Ecole/React/ProjetINT/AirDiopMobile-main03/AirDiopMobile-main/src/components/AdminUserTable';

export default function AdminUsersPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Espace Administrateur</h1>
      <AdminUserTable />
    </div>
  );
}