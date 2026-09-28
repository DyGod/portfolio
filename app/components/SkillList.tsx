import type { SkillGroup } from "~/data/resume";

export function SkillList({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {groups.map((group) => (
        <div key={group.category} className="border-2 border-border bg-surface p-6">
          <h3 className="mb-4 font-display font-bold text-accent">{group.category}</h3>
          <ul className="space-y-2">
            {group.items.map((skill) => (
              <li key={skill.name} className="flex items-baseline justify-between gap-3">
                <span>{skill.name}</span>
                {skill.years && (
                  <span className="shrink-0 text-sm font-semibold text-accent-2">{skill.years} yrs</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
