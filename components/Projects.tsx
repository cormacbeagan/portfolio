import { FiArrowUpRight } from 'react-icons/fi';
import type { Project } from '@/content/site';

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <ol className="space-y-6">
      {projects.map((project, i) => (
        <li
          key={project.slug}
          className="border-line bg-surface hover:border-accent/50 grid gap-6 rounded-xl border p-6 transition-colors sm:p-8 md:grid-cols-[14rem_1fr]"
        >
          <div className="space-y-4">
            <p className="text-muted font-mono text-xs">{String(i + 1).padStart(2, '0')}</p>
            <h3 className="text-2xl font-semibold tracking-tight">{project.name}</h3>
            <ul className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="border-line text-muted rounded border px-2 py-0.5 font-mono text-xs"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-sm">
              {project.links.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent inline-flex items-center gap-0.5 hover:underline"
                  >
                    {link.label}
                    <FiArrowUpRight aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            {project.sections.map((section) => (
              <div key={section.heading}>
                <h4 className="text-muted font-mono text-xs tracking-wider uppercase">
                  {section.heading}
                </h4>
                <p className="mt-1.5 leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}
