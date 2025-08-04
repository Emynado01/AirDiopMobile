'use client';
import React, { useEffect, useState } from 'react';

type User = { id: number; email: string; name: string; lastname: string; isAdmin: boolean };
export default function AdminUserTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    const res = await fetch('/api/admin/users', { credentials: 'include' });
    const data = await res.json();
    if (res.ok) setUsers(data.users);
    else setError(data.error);
  };

  useEffect(() => { fetchUsers(); }, []);

  const handleDelete = async (id: number) => {
    if (!confirm('Supprimer cet utilisateur ?')) return;
    const res = await fetch(`/api/admin/users/${id}`, {
      method: 'DELETE', credentials: 'include'
    });
    if (res.ok) fetchUsers();
    else alert((await res.json()).error);
  };

  return (
    <div className="bg-white rounded shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Gestion des utilisateurs</h2>
      {error && <p className="text-red-500">{error}</p>}
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Nom</th>
            <th className="px-4 py-2">Admin</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{u.id}</td>
              <td className="border px-4 py-2">{u.email}</td>
              <td className="border px-4 py-2">{u.name} {u.lastname}</td>
              <td className="border px-4 py-2 text-center">{u.isAdmin ? '✓' : ''}</td>
              <td className="border px-4 py-2 text-center">
                <button
                  onClick={() => handleDelete(u.id)}
                  className="px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded"
                >Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}