import { ContactForm } from '@/components/ContactForm';
import { CopyEmail } from '@/components/CopyEmail';
import { Nav } from '@/components/Nav';
import { Projects } from '@/components/Projects';
import { Stack } from '@/components/Stack';
import { Starfield } from '@/components/Starfield';
import { profile, projects, socials, stack } from '@/content/site';

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28"
    >
      <h2 id={`${id}-heading`} className="font-display mb-10 text-4xl sm:text-5xl">
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
        <section className="mx-auto flex min-h-[80svh] max-w-5xl flex-col justify-center px-4 py-20 sm:px-6">
          <h1 className="font-display text-6xl leading-none sm:text-8xl">{profile.name}</h1>
          <p className="font-display text-muted mt-4 text-2xl sm:text-3xl">{profile.role}</p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed">{profile.intro}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-accent text-accent-fg font-display rounded-full px-6 py-2 text-lg"
            >
              see my work
            </a>
            <a
              href="#contact"
              className="border-fg font-display rounded-full border px-6 py-2 text-lg"
            >
              get in touch
            </a>
          </div>
        </section>

        <Section id="projects" title="Projects">
          <Projects projects={projects} />
        </Section>

        <Section id="stack" title={stack.heading}>
          <Stack motivation={stack.motivation} tech={stack.tech} />
        </Section>

        <Section id="contact" title="Leave me a message">
          <div className="grid gap-12 md:grid-cols-[1fr_16rem]">
            <ContactForm />
            <div className="space-y-4">
              <p className="text-muted">Or reach me directly:</p>
              <a href={`mailto:${profile.email}`} className="block hover:underline">
                {profile.email}
              </a>
              <CopyEmail email={profile.email} />
              <ul className="space-y-2 pt-4">
                {socials.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noreferrer" className="hover:underline">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </main>
      <footer className="text-muted mx-auto max-w-5xl px-4 py-10 text-sm sm:px-6">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
