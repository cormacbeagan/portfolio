import { ContactForm } from '@/components/ContactForm';
import { CopyEmail } from '@/components/CopyEmail';
import { Nav } from '@/components/Nav';
import { Projects } from '@/components/Projects';
import { Stack } from '@/components/Stack';
import { Starfield } from '@/components/Starfield';
import { profile, projects, socials, stack } from '@/content/site';

function Section({
  id,
  command,
  title,
  children,
}: {
  id: string;
  command: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24"
    >
      <p aria-hidden="true" className="text-accent mb-2 font-mono text-sm">
        $ {command}
      </p>
      <h2 id={`${id}-heading`} className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Starfield />
      <Nav />
      <main id="top">
        <section className="relative isolate">
          <div aria-hidden="true" className="grid-bg absolute inset-0 -z-10" />
          <div className="mx-auto flex min-h-[min(78svh,48rem)] max-w-5xl flex-col justify-center px-4 py-20 sm:px-6">
            <p className="border-line bg-surface text-muted mb-8 inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs">
              <span className="bg-accent size-1.5 rounded-full" />
              available for freelance work
            </p>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
              <span aria-hidden="true" className="text-accent mr-3 font-mono sm:mr-5">
                &gt;
              </span>
              {profile.name}
            </h1>
            <p className="cursor text-muted mt-4 font-mono text-base sm:text-lg">
              freelance {profile.role.toLowerCase()} · {profile.location.toLowerCase()}
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed">{profile.intro}</p>
            <div className="mt-10 flex flex-wrap gap-3 font-mono text-sm">
              <a
                href="#projects"
                className="bg-accent text-accent-fg rounded-lg px-5 py-2.5 font-medium transition-opacity hover:opacity-90"
              >
                view projects
              </a>
              <a
                href="#contact"
                className="border-line bg-surface hover:border-accent rounded-lg border px-5 py-2.5 transition-colors"
              >
                get in touch
              </a>
            </div>
          </div>
        </section>

        <Section id="projects" command="ls ./projects" title="Selected work">
          <Projects projects={projects} />
        </Section>

        <Section id="stack" command="cat stack.txt" title={stack.heading}>
          <Stack motivation={stack.motivation} tech={stack.tech} />
        </Section>

        <Section id="contact" command="./contact.sh" title="Leave me a message">
          <div className="grid gap-12 md:grid-cols-[1fr_15rem]">
            <ContactForm />
            <aside className="space-y-4">
              <p className="text-muted text-sm">Or reach me directly:</p>
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-accent block font-mono text-sm"
              >
                {profile.email}
              </a>
              <CopyEmail email={profile.email} />
              <ul className="border-line space-y-2 border-t pt-4 font-mono text-sm">
                {socials.map((s) => (
                  <li key={s.url}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted hover:text-fg transition-colors"
                    >
                      {s.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Section>
      </main>
      <footer className="border-line border-t">
        <div className="text-muted mx-auto flex max-w-5xl justify-between px-4 py-8 font-mono text-xs sm:px-6">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>built with next.js</span>
        </div>
      </footer>
    </>
  );
}
