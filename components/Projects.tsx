import { FiArrowUpRight, FiPlus } from 'react-icons/fi';
import type { Project } from '@/content/site';

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <ol>
      {projects.map((project, i) => (
        <li key={project.slug} className="border-line/20 border-b first:border-t">
          <details className="group" open={i === 0}>
            <summary className="hover:text-accent flex cursor-pointer items-end py-6 transition-colors">
              <span className="text-muted mr-4 w-8 shrink-0 pb-2 text-sm sm:mr-8">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-3xl sm:text-5xl">{project.name}</h3>
              <span aria-hidden="true" className="leader hidden sm:block" />
              <span className="text-muted hidden pb-2 sm:block">{project.tags[0]}</span>
              <FiPlus
                aria-hidden="true"
                className="ml-auto size-6 shrink-0 self-center transition-transform group-open:rotate-45 sm:ml-6"
              />
            </summary>
            <div className="grid gap-8 pb-10 sm:pl-16 md:grid-cols-[1fr_2fr]">
              <div className="space-y-5">
                <ul className="text-muted flex flex-wrap gap-x-3 gap-y-1 text-sm">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <ul className="flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="border-line hover:bg-fg hover:text-bg inline-flex items-center gap-1 rounded-full border-2 px-4 py-1 text-sm transition-colors"
                      >
                        {link.label}
                        <FiArrowUpRight aria-hidden="true" />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                {project.sections.map((section) => (
                  <div key={section.heading}>
                    <h4 className="font-display text-xl">{section.heading}</h4>
                    <p className="mt-2 leading-relaxed">{section.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </details>
        </li>
      ))}
    </ol>
  );
}
