'use client';
import { useEffect, useState } from "react";

export type AuthUser = {
  id: number;
  email: string;
  name?: string;
  lastname?: string;
  isAdmin?: boolean;
};

export function useAuth() {
  const [connected, setConnected] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    fetch("/api/user-status", { credentials: "include" })
      .then(async (res) => {
        if (!res.ok) throw new Error("Not authenticated");
        const data = await res.json();
        setConnected(data.connected);
        setUser(data.user || null);
      })
      .catch(() => {
        setConnected(false);
        setUser(null);
      });
  }, []);

  return { connected, user };
}

