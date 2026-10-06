import { ThemeSwitcher } from './ThemeSwitcher';

const links = [
  { href: '#projects', label: 'Work' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  return (
    <header className="bg-bg/85 sticky top-0 z-10 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-8"
      >
        <a href="#top" className="font-display text-2xl">
          MB<span className="text-accent">.</span>
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden gap-6 sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="decoration-accent decoration-2 underline-offset-4 hover:underline"
                >
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
