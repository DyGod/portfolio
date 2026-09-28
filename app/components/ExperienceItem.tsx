import type { Experience } from "~/data/resume";

export function ExperienceItem({ item }: { item: Experience }) {
  return (
    <li className="grid gap-1 sm:grid-cols-[1fr_auto] sm:gap-x-6">
      <h3 className="font-display font-bold text-heading">
        {item.company} <span className="text-accent">|</span>{" "}
        <span className="font-sans text-sm font-normal italic text-muted">
          {item.role} ({item.type})
        </span>
      </h3>
      <p className="text-sm font-semibold text-accent sm:row-start-1 sm:col-start-2">
        {item.start} – {item.end}
      </p>
      <ul className="mt-2 space-y-1 sm:col-span-2">
        {item.highlights.map((highlight) => (
          <li key={highlight} className="relative pl-5 text-muted">
            <span aria-hidden className="absolute left-0 text-accent">•</span>
            {highlight}
          </li>
        ))}
      </ul>
    </li>
  );
}
