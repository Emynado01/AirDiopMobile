// src/components/InstallPrompt.tsx
'use client';

import { MdOutlineInstallDesktop } from 'react-icons/md';
import { useEffect, useState } from 'react';

export default function InstallPrompt() {
  const [installPrompt, setInstallPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  if (!installPrompt) return null;

  const handleInstall = async () => {
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') setInstallPrompt(null);
  };

  return (
    <button
      onClick={handleInstall}
      className="flex items-center space-x-2 px-3 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors"
      title="Installer l'application"
    >
      <MdOutlineInstallDesktop className="w-5 h-5" />
      <span>Installer</span>
    </button>
  );
}