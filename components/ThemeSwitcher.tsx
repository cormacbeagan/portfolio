'use client';

import { useEffect, useState } from 'react';
import { FaMoon, FaStar, FaSun } from 'react-icons/fa';
import { THEME_STORAGE_KEY, themes, type ThemeName } from '@/content/site';

const icons = { light: FaSun, dark: FaMoon, wild: FaStar } satisfies Record<ThemeName, unknown>;

function currentTheme(): ThemeName {
  const value = document.documentElement.dataset.theme;
  return themes.includes(value as ThemeName) ? (value as ThemeName) : 'light';
}

function nextTheme(theme: ThemeName): ThemeName {
  return themes[(themes.indexOf(theme) + 1) % themes.length];
}

/** Cycles light → dark → wild. */
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

  const Icon = theme ? icons[theme] : FaSun;
  const label = theme ? `Switch to ${nextTheme(theme)} theme` : 'Switch theme';

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={label}
      title={label}
      className="border-line hover:border-accent hover:text-accent grid size-9 place-items-center rounded-md border transition-colors"
    >
      <Icon aria-hidden="true" className="size-4" />
    </button>
  );
}
