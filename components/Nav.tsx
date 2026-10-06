import { profile } from '@/content/site';
import { ThemeSwitcher } from './ThemeSwitcher';

const links = [
  { href: '#projects', label: 'projects' },
  { href: '#stack', label: 'stack' },
  { href: '#contact', label: 'contact' },
];

export function Nav() {
  return (
    <header className="bg-bg/80 sticky top-0 z-10 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6"
      >
        <a href="#top" className="font-display text-xl">
          {profile.name}
        </a>
        <div className="flex items-center gap-4 sm:gap-6">
          <ul className="font-display hidden gap-6 text-lg sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:underline">
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
