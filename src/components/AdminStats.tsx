'use client';
import React, { useEffect, useState } from 'react';

type Stats = {
  usersCount: number;
  reservedCount: number;
  cancelledCount: number;
  paidCount: number;
};

export default function AdminStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      const res = await fetch('/api/admin/stats', { credentials: 'include' });
      const data = await res.json();
      if (res.ok) setStats(data);
      else setError(data.error);
    };
    fetchStats();
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!stats) return <p>Chargement...</p>;

  return (
    <div className="bg-white rounded shadow p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Statistiques</h2>
      <ul className="space-y-2">
        <li>Utilisateurs : {stats.usersCount}</li>
        <li>Vols réservés : {stats.reservedCount}</li>
        <li>Vols annulés : {stats.cancelledCount}</li>
        <li>Vols payés : {stats.paidCount}</li>
      </ul>
    </div>
  );
}
