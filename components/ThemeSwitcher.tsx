'use client';

import { useEffect, useRef, useState } from 'react';
import { THEME_STORAGE_KEY, themes, type ThemeName } from '@/content/site';

const labels: Record<ThemeName, string> = {
  light: 'Light',
  dark: 'Dark',
  blue: 'Blue',
  rainbow: 'Rainbow',
  wild: 'Go wild',
};

function currentTheme(): ThemeName {
  const value = document.documentElement.dataset.theme;
  return themes.includes(value as ThemeName) ? (value as ThemeName) : 'light';
}

export function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeName | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Sync with the theme the inline script applied before hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(currentTheme());
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (
        e instanceof KeyboardEvent ? e.key === 'Escape' : !ref.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', close);
    return () => {
      document.removeEventListener('mousedown', close);
      document.removeEventListener('keydown', close);
    };
  }, [open]);

  function choose(next: ThemeName) {
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the theme still applies.
    }
    setTheme(next);
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="theme-menu"
        onClick={() => setOpen((o) => !o)}
        className="font-display text-lg hover:underline"
      >
        theme
      </button>
      {open && (
        <ul
          id="theme-menu"
          className="border-line bg-surface absolute right-0 z-20 mt-2 w-36 rounded-lg border p-1 shadow-lg backdrop-blur"
        >
          {themes.map((name) => (
            <li key={name}>
              <button
                type="button"
                aria-pressed={theme === name}
                onClick={() => choose(name)}
                className="hover:bg-line/60 w-full rounded px-3 py-1.5 text-left aria-pressed:font-semibold"
              >
                {labels[name]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
