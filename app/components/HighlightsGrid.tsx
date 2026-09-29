import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from "react";
import { flushSync } from "react-dom";
import { Link } from "react-router";
import type { Media, Project } from "~/data/resume";
import { TechList } from "./TechList";

/*
 * Two-column grid of project cards. Clicking a card expands it to span both columns;
 * its text stays on the side of the column it came from (left card → text left,
 * right card → text right) and the media + key facts take the other side.
 * The row partner of an expanded card flows to the next row. Layout changes animate
 * with the View Transitions API where supported (skipped for reduced motion).
 */
export function HighlightsGrid({ projects }: { projects: Project[] }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const cardRefs = useRef(new Map<string, HTMLElement>());

  function toggle(slug: string) {
    const next = expanded === slug ? null : slug;
    const update = () => flushSync(() => setExpanded(next));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!document.startViewTransition || reduceMotion) update();
    else document.startViewTransition(update);
  }

  // Keep the expanded card in view, and let Escape collapse it.
  useEffect(() => {
    if (!expanded) return;
    const card = cardRefs.current.get(expanded);
    const timer = setTimeout(() => card?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 400);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && toggle(expanded);
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
    };
  });

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((project, i) => {
        const isExpanded = expanded === project.slug;
        // On sm+ the expanded card is ordered before its row partner so it fills its own row.
        const row = Math.floor(i / 2);
        const order = isExpanded ? row * 4 - 1 : i * 2;
        return (
          <article
            key={project.slug}
            ref={(el) => {
              if (el) cardRefs.current.set(project.slug, el);
            }}
            style={{ "--order": order, viewTransitionName: `highlight-${project.slug}` } as CSSProperties}
            className={`relative scroll-mt-12 sm:scroll-mt-4 border-2 border-t-4 border-border border-t-accent bg-surface transition-colors sm:order-(--order) ${
              isExpanded ? "sm:col-span-2" : "hover:border-primary hover:border-t-accent"
            }`}
          >
            {isExpanded ? (
              <ExpandedCard project={project} side={i % 2 === 0 ? "left" : "right"} onClose={() => toggle(project.slug)} />
            ) : (
              <CollapsedCard project={project} onOpen={() => toggle(project.slug)} />
            )}
          </article>
        );
      })}
    </div>
  );
}

function ExpandIcon({ expanded }: { expanded: boolean }) {
  // ">>" fast-forward chevrons (echoes the favicon); flips to "<<" when expanded.
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={`size-6 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 6 6 6-6 6M13 6l6 6-6 6" />
    </svg>
  );
}

function CollapsedCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-expanded={false}
      aria-label={`Expand ${project.name} details`}
      className="group flex h-full w-full cursor-pointer flex-col p-6 text-left"
    >
      <span className="absolute top-5 right-5 text-muted transition-colors group-hover:text-accent">
        <ExpandIcon expanded={false} />
      </span>
      <span className="pr-10 text-xs font-semibold uppercase tracking-wider text-accent-strong">{project.subtext}</span>
      <span className="mt-1 pr-10 font-display text-xl font-bold text-heading group-hover:text-primary">
        {project.name}
      </span>
      <span className="mt-3 line-clamp-2 flex-1 text-muted">{project.summary}</span>
      <TechList items={project.tech} className="mt-5" />
    </button>
  );
}

function ExpandedCard({
  project,
  side,
  onClose,
}: {
  project: Project;
  side: "left" | "right";
  onClose: () => void;
}) {
  // Clicking anywhere on the card collapses it, except on links/buttons or while selecting text.
  function handleCardClick(e: MouseEvent<HTMLDivElement>) {
    if ((e.target as HTMLElement).closest("a, button, video")) return;
    if (window.getSelection()?.toString()) return;
    onClose();
  }

  return (
    <div className="cursor-pointer p-6 pt-14 sm:p-8 sm:pt-14" onClick={handleCardClick}>
      <button
        type="button"
        onClick={onClose}
        aria-expanded
        aria-label={`Collapse ${project.name} details`}
        className="absolute top-5 right-5 cursor-pointer text-accent transition-colors hover:text-primary"
      >
        <ExpandIcon expanded />
      </button>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Text column: stays on the side the card was clicked from */}
        <div className={side === "right" ? "md:order-last" : ""}>
          <p className="pr-10 text-xs font-semibold uppercase tracking-wider text-accent-strong">{project.subtext}</p>
          <h3 className="mt-1 pr-10 font-display text-3xl font-extrabold tracking-tight text-heading">
            {project.name}
          </h3>
          <p className="mt-4 text-muted">{project.summary}</p>

          <h4 className="mt-8 text-xs font-semibold uppercase tracking-wider text-accent-2-strong">My contributions</h4>
          <ul className="mt-3 space-y-2">
            {project.contributions.map((item) => (
              <li key={item} className="relative pl-5">
                <span aria-hidden className="absolute left-0 text-accent-2">▸</span>
                {item}
              </li>
            ))}
          </ul>

          <TechList items={project.tech} className="mt-8" />

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={`/projects/${project.slug}`}
              className="border-2 border-primary bg-primary px-4 py-2 text-sm font-medium text-primary-fg transition-colors hover:bg-transparent hover:text-primary"
            >
              Full case study
            </Link>
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="border-2 border-border px-4 py-2 text-sm font-medium text-heading transition-colors hover:border-primary hover:text-primary"
              >
                {link.label} ↗&#xFE0E;
              </a>
            ))}
          </div>
        </div>

        {/* Media + key facts column */}
        <div>
          <MediaSlot media={project.media} name={project.name} />
          <dl className="mt-6 grid gap-3 sm:grid-cols-2">
            {project.facts.map((fact) => (
              <div key={fact.label} className="border-l-2 border-accent pl-3">
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">{fact.label}</dt>
                <dd className="mt-0.5 font-medium text-heading">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

function MediaSlot({ media, name }: { media?: Media; name: string }) {
  const frame = "aspect-video w-full border-2 border-border bg-bg";

  if (media?.type === "video") {
    return (
      <video
        className={`${frame} object-cover`}
        src={media.src}
        poster={media.poster}
        aria-label={media.alt}
        autoPlay
        muted
        loop
        playsInline
      />
    );
  }
  if (media?.type === "image") {
    return <img className={`${frame} object-cover`} src={media.src} alt={media.alt} loading="lazy" />;
  }
  return (
    <div
      className={`${frame} flex flex-col items-center justify-center gap-2 border-dashed text-muted`}
      role="img"
      aria-label={`${name} preview coming soon`}
    >
      <svg viewBox="0 0 24 24" aria-hidden className="size-10 text-accent-2" fill="currentColor">
        <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.2-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
      </svg>
      <span className="text-sm">Preview coming soon</span>
    </div>
  );
}
