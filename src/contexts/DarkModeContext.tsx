// src/contexts/DarkModeContext.tsx
'use client';
import { createContext, useState, useEffect, ReactNode } from 'react';

interface DarkModeContextType {
  dark: boolean;
  toggleDark: () => void;
}

export const DarkModeContext = createContext<DarkModeContextType>({
  dark: false,
  toggleDark: () => {},
});

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    setDark(saved === 'dark');
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  const toggleDark = () => setDark(prev => !prev);

  return (
    <DarkModeContext.Provider value={{ dark, toggleDark }}>
      {children}
    </DarkModeContext.Provider>
  );
}