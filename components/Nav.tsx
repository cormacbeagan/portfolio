import { ThemeSwitcher } from './ThemeSwitcher';

const links = [
  { href: '#projects', label: 'projects' },
  { href: '#stack', label: 'stack' },
  { href: '#contact', label: 'contact' },
];

export function Nav() {
  return (
    <header className="border-line bg-bg/80 sticky top-0 z-10 border-b backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 font-mono text-sm sm:px-6"
      >
        <a href="#top" className="hover:text-accent">
          <span className="text-muted">~/</span>macbeagan
        </a>
        <div className="flex items-center gap-5">
          <ul className="hidden gap-5 sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-muted hover:text-fg transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
