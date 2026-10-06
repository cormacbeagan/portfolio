import type { Tech } from '@/content/site';

export function Stack({ motivation, tech }: { motivation: string; tech: Tech[] }) {
  return (
    <div className="space-y-10">
      <p className="max-w-2xl text-lg leading-relaxed">{motivation}</p>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tech.map(({ name, detail, icon: Icon, color }) => (
          <li
            key={name}
            style={{ '--brand': color } as React.CSSProperties}
            className="group border-line bg-surface flex items-start gap-4 rounded-2xl border p-5"
          >
            <Icon
              aria-hidden="true"
              className="size-9 shrink-0 transition-colors group-hover:text-(--brand)"
            />
            <div>
              <h3 className="font-display text-xl">{name}</h3>
              <p className="text-muted mt-1">{detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
