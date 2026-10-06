import type { Tech } from '@/content/site';

export function Stack({ motivation, tech }: { motivation: string; tech: Tech[] }) {
  return (
    <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
      <p className="text-muted leading-relaxed">{motivation}</p>
      <ul className="divide-line border-line bg-surface divide-y rounded-xl border">
        {tech.map(({ name, detail, icon: Icon, color }) => (
          <li
            key={name}
            style={{ '--brand': color } as React.CSSProperties}
            className="group flex items-center gap-4 px-5 py-3.5"
          >
            <Icon
              aria-hidden="true"
              className="text-muted size-5 shrink-0 transition-colors group-hover:text-(--brand)"
            />
            <span className="w-28 shrink-0 font-mono text-sm">{name}</span>
            <span className="text-muted text-sm">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
