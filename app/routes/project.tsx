import { Link, data } from "react-router";
import type { Route } from "./+types/project";
import { ProjectStory } from "~/components/ProjectStory";
import { TechList } from "~/components/TechList";
import { fullName, projects } from "~/data/resume";

// Runs at build time (pre-rendering), so project pages ship as static HTML.
export function loader({ params }: Route.LoaderArgs) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    throw data("Project not found", { status: 404 });
  }
  return { project };
}

export function meta({ loaderData }: Route.MetaArgs) {
  if (!loaderData) return [{ title: `Not found — ${fullName}` }];
  const { project } = loaderData;
  return [
    { title: `${project.name} (${project.subtext}) | ${fullName}` },
    { name: "description", content: project.summary },
    { property: "og:title", content: `${project.name} — ${project.subtext}` },
    { property: "og:description", content: project.summary },
    { name: "twitter:card", content: "summary" },
  ];
}

export default function ProjectPage({ loaderData }: Route.ComponentProps) {
  const { project } = loaderData;

  return (
    <article className="py-16">
      <Link to="/#work" className="text-sm font-medium text-muted hover:text-primary">
        ← All work
      </Link>

      <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-accent-strong">
        {project.subtext}
        {project.period && <span className="text-muted"> · {project.period}</span>}
      </p>
      <h1 className="mt-1 font-display text-4xl font-extrabold tracking-tight text-heading sm:text-5xl">
        {project.name}
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-muted">{project.summary}</p>
      <TechList items={project.tech} className="mt-6" />

      <div className="max-w-3xl">
        <ProjectStory project={project} large />
      </div>

      <dl className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
        {project.facts.map((fact) => (
          <div key={fact.label} className="border-l-2 border-accent pl-4">
            <dt className="text-xs font-semibold uppercase tracking-wider text-muted">{fact.label}</dt>
            <dd className="mt-1 font-medium text-heading">{fact.value}</dd>
          </div>
        ))}
      </dl>

      {project.description && (
        <div className="mt-10 max-w-3xl space-y-4 text-lg">
          {project.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}

      {project.links.length > 0 && (
        <ul className="mt-10 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-block border-2 border-border bg-surface px-4 py-2 font-medium transition-colors hover:border-primary"
              >
                {link.label} ↗&#xFE0E;
              </a>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
