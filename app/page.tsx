import { ContactForm } from '@/components/ContactForm';
import { CopyEmail } from '@/components/CopyEmail';
import { Nav } from '@/components/Nav';
import { Projects } from '@/components/Projects';
import { Stack } from '@/components/Stack';
import { Starfield } from '@/components/Starfield';
import { profile, projects, socials, stack } from '@/content/site';

function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-28"
    >
      <div className="border-line mb-12 flex items-baseline justify-between gap-6 border-t-2 pt-4">
        <h2 id={`${id}-heading`} className="font-display text-4xl sm:text-6xl">
          {title}
        </h2>
        <span aria-hidden="true" className="text-muted text-sm tracking-widest">
          {number}
        </span>
      </div>
      {children}
    </section>
  );
}

export default function Home() {
  const [first, last] = profile.name.split(' ');

  return (
    <>
      <Starfield />
      <Nav />
      <main id="top">
        <section className="mx-auto flex max-w-6xl flex-col justify-end px-4 pt-20 pb-16 sm:min-h-[min(88svh,56rem)] sm:px-8 sm:pb-24">
          <h1 className="font-display pb-[0.12em] text-[clamp(4.5rem,17vw,13rem)] leading-[0.85] tracking-tight">
            {first}
            <br />
            {last}
            <span className="text-accent">.</span>
          </h1>
          <div className="border-line mt-10 grid gap-6 border-t-2 pt-6 md:grid-cols-[1fr_2fr]">
            <div className="flex flex-col gap-3">
              <p className="font-display text-2xl">
                {profile.role}, {profile.location}.
              </p>
              <p className="text-muted inline-flex items-center gap-2 text-sm tracking-wide">
                <span className="relative flex size-2">
                  <span className="bg-accent absolute inline-flex size-full animate-ping rounded-full opacity-60" />
                  <span className="bg-accent relative inline-flex size-2 rounded-full" />
                </span>
                {profile.status}
              </p>
            </div>
            <p className="text-lg leading-relaxed md:text-xl">{profile.intro}</p>
          </div>
        </section>

        <Section id="projects" number="01" title="Selected work">
          <Projects projects={projects} />
        </Section>

        <Section id="stack" number="02" title={stack.heading}>
          <Stack motivation={stack.motivation} tech={stack.tech} />
        </Section>

        <Section id="contact" number="03" title="Let's talk">
          <div className="grid gap-16 md:grid-cols-[2fr_1fr]">
            <ContactForm />
            <aside className="space-y-5">
              <a
                href={`mailto:${profile.email}`}
                className="font-display hover:text-accent block text-2xl break-all"
              >
                {profile.email}
              </a>
              <CopyEmail email={profile.email} />
              <ul className="border-line space-y-2 border-t pt-5">
                {socials.map((s) => (
                  <li key={s.url}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-accent text-lg transition-colors"
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
      <footer className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="border-line text-muted flex justify-between border-t-2 py-8 text-sm">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <a href="#top" className="hover:text-fg">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}
