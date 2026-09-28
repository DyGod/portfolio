import { Link } from "react-router";
import type { Project } from "~/data/resume";
import { TechList } from "./TechList";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex flex-col border-2 border-border border-t-4 border-t-accent bg-surface p-6 transition-colors hover:border-primary hover:border-t-accent"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-accent">{project.platform}</p>
      <h3 className="mt-1 font-display text-xl font-bold text-heading group-hover:text-primary">
        {project.name}
      </h3>
      <p className="mt-3 text-muted">{project.summary}</p>
      <div className="mt-4 flex-1 border-l-2 border-accent-2 pl-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent-2">My contribution</p>
        <p className="mt-1 text-sm">{project.role}</p>
      </div>
      <TechList items={project.tech} className="mt-5" />
    </Link>
  );
}
