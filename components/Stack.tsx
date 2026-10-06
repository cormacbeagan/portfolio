import type { Tech } from '@/content/site';

export function Stack({ motivation, tech }: { motivation: string; tech: Tech[] }) {
  return (
    <div className="grid gap-12 md:grid-cols-[1fr_1.6fr]">
      <p className="font-display text-2xl leading-snug sm:text-3xl">&ldquo;{motivation}&rdquo;</p>
      <ul className="grid gap-x-10 sm:grid-cols-2">
        {tech.map(({ name, detail, icon: Icon, color }) => (
          <li
            key={name}
            style={{ '--brand': color } as React.CSSProperties}
            className="group border-line/20 flex gap-4 border-b py-4"
          >
            <Icon
              aria-hidden="true"
              className="mt-1 size-6 shrink-0 transition-colors group-hover:text-(--brand)"
            />
            <div>
              <h3 className="font-display text-xl">{name}</h3>
              <p className="text-muted text-sm">{detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
