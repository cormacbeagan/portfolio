'use client';

import { useId, useRef, useState, type KeyboardEvent } from 'react';
import type { Project } from '@/content/site';

export function Projects({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();
  const project = projects[selected];

  // Arrow-key navigation per the WAI-ARIA tabs pattern.
  function onKeyDown(e: KeyboardEvent) {
    const step =
      e.key === 'ArrowRight' || e.key === 'ArrowDown'
        ? 1
        : e.key === 'ArrowLeft' || e.key === 'ArrowUp'
          ? -1
          : 0;
    if (!step) return;
    e.preventDefault();
    const next = (selected + step + projects.length) % projects.length;
    setSelected(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="grid gap-8 md:grid-cols-[12rem_1fr]">
      <div
        role="tablist"
        aria-label="Projects"
        aria-orientation="vertical"
        onKeyDown={onKeyDown}
        className="flex gap-2 overflow-x-auto md:flex-col"
      >
        {projects.map((p, i) => (
          <button
            key={p.slug}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            role="tab"
            id={`${id}-tab-${i}`}
            aria-selected={i === selected}
            aria-controls={`${id}-panel`}
            tabIndex={i === selected ? 0 : -1}
            onClick={() => setSelected(i)}
            className="font-display aria-selected:bg-accent aria-selected:text-accent-fg hover:bg-line/50 shrink-0 rounded-lg px-4 py-2 text-left text-lg"
          >
            {p.name}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={`${id}-tab-${selected}`}
        className="border-line bg-surface rounded-2xl border p-6 sm:p-8"
      >
        <h3 className="font-display text-3xl">{project.name}</h3>
        <div className="mt-6 space-y-6">
          {project.sections.map((section) => (
            <div key={section.heading}>
              <h4 className="text-muted text-sm tracking-widest uppercase">{section.heading}</h4>
              <p className="mt-2 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
        <ul className="mt-8 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="border-fg hover:bg-fg hover:text-bg inline-block rounded-full border px-4 py-1.5 transition-colors"
              >
                {link.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
