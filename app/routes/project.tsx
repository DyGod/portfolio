import { Link, data } from "react-router";
import type { Route } from "./+types/project";
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
    { title: `${project.name} (${project.platform}) — ${fullName}` },
    { name: "description", content: project.summary },
    { property: "og:title", content: `${project.name} — ${project.platform}` },
    { property: "og:description", content: project.summary },
  ];
}

export default function ProjectPage({ loaderData }: Route.ComponentProps) {
  const { project } = loaderData;
  const details = [
    { label: "Role", text: project.role },
    ...(project.aiWorkflow ? [{ label: "AI workflow", text: project.aiWorkflow }] : []),
  ];

  return (
    <article className="py-16">
      <Link to="/#projects" className="text-sm font-medium text-muted hover:text-primary">
        ← All projects
      </Link>

      <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-accent">{project.platform}</p>
      <h1 className="mt-1 font-display text-4xl font-extrabold tracking-tight text-heading sm:text-5xl">
        {project.name}
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-muted">{project.summary}</p>
      <TechList items={project.tech} className="mt-6" />

      <dl className="mt-10 max-w-3xl space-y-6">
        {details.map((detail) => (
          <div key={detail.label} className="border-l-2 border-accent pl-4">
            <dt className="font-display font-bold text-heading">{detail.label}</dt>
            <dd className="mt-1 text-muted">{detail.text}</dd>
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
                className="inline-block rounded-lg border border-border bg-surface px-4 py-2 font-medium transition-colors hover:border-primary"
              >
                {link.label} ↗
              </a>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
