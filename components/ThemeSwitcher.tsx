'use client';

import { useEffect, useState } from 'react';
import { THEME_STORAGE_KEY, themes, type ThemeName } from '@/content/site';

const labels: Record<ThemeName, string> = {
  light: 'light',
  dark: 'dark',
  blue: 'blue',
  rainbow: 'rainbow',
  wild: 'go wild',
};

function currentTheme(): ThemeName {
  const value = document.documentElement.dataset.theme;
  return themes.includes(value as ThemeName) ? (value as ThemeName) : 'light';
}

function nextTheme(theme: ThemeName): ThemeName {
  return themes[(themes.indexOf(theme) + 1) % themes.length];
}

/** Cycles through every theme, showing the current one. */
export function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeName | null>(null);

  useEffect(() => {
    // Sync with the theme the inline script applied before hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(currentTheme());
  }, []);

  function cycle() {
    const next = nextTheme(currentTheme());
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the theme still applies.
    }
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={
        theme ? `Theme: ${labels[theme]}. Switch to ${labels[nextTheme(theme)]}` : 'Switch theme'
      }
      className="border-line hover:bg-fg hover:text-bg min-w-28 rounded-full border-2 px-3 py-1 text-sm transition-colors"
    >
      theme: <span className="font-display">{theme ? labels[theme] : '…'}</span>
    </button>
  );
}
