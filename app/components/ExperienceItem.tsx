import type { Experience } from "~/data/resume";

export function ExperienceItem({ item }: { item: Experience }) {
  return (
    <li className="grid gap-2 sm:grid-cols-[10rem_1fr] sm:gap-6">
      <p className="text-sm text-muted sm:pt-0.5">
        {item.start} – {item.end}
      </p>
      <div>
        <h3 className="font-semibold">
          {item.role} <span className="text-primary">· {item.company}</span>
        </h3>
        {item.location && <p className="text-sm text-muted">{item.location}</p>}
        <ul className="mt-3 list-disc space-y-1 pl-5 text-muted">
          {item.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}
