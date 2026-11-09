import type { Project } from "~/data/resume";

const label = "text-xs font-semibold uppercase tracking-wider text-accent-2-strong";

/*
 * Case-study body shared by the expanded Highlights card and the project page:
 * Context → My role → What I built → Outcome (each shown only when present).
 */
export function ProjectStory({ project, large = false }: { project: Project; large?: boolean }) {
  const blocks = [
    { title: "Context", text: project.context },
    { title: "My role", text: project.role },
  ].filter((b) => b.text);
  // Card: sits under the h3 project name. Page: sits under the h1.
  const Heading = large ? "h2" : "h4";

  return (
    <div className={large ? "text-lg" : ""}>
      {blocks.length > 0 && (
        <dl className="mt-8 grid gap-4 sm:grid-cols-2">
          {blocks.map((b) => (
            <div key={b.title}>
              <dt className={label}>{b.title}</dt>
              <dd className="mt-1">{b.text}</dd>
            </div>
          ))}
        </dl>
      )}

      <Heading className={`mt-8 ${label}`}>What I built</Heading>
      <ul className="mt-3 space-y-2">
        {project.contributions.map((item) => (
          <li key={item} className="relative pl-5">
            <span aria-hidden className="absolute left-0 text-accent-2">
              ▸
            </span>
            {item}
          </li>
        ))}
      </ul>

      {project.outcome && (
        <div className="mt-8 border-l-4 border-accent bg-bg p-4">
          <Heading className={label}>Outcome</Heading>
          <p className="mt-1 font-medium text-heading">{project.outcome}</p>
        </div>
      )}
    </div>
  );
}
