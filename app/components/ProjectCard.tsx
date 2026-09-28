import { Link } from "react-router";
import type { Project } from "~/data/resume";
import { TechList } from "./TechList";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-primary"
    >
      <h3 className="font-semibold group-hover:text-primary">{project.name}</h3>
      <p className="mt-2 flex-1 text-muted">{project.summary}</p>
      <TechList items={project.tech} className="mt-4" />
    </Link>
  );
}
