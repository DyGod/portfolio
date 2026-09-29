import type { CSSProperties } from "react";
import type { SkillGroup } from "~/data/resume";
import { SkillIcon } from "./SkillIcon";

/*
 * Each skill is a logo inside a neon ring. The ring color comes from the group's `glow`
 * (--color-neon-<glow> in app.css, unique per category) and brightens on hover.
 */
export function SkillList({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
      {groups.map((group) => (
        <div key={group.category} style={{ "--glow": `var(--color-neon-${group.glow})` } as CSSProperties}>
          <h3 className="mb-5 font-display font-bold text-heading">{group.category}</h3>
          <ul className="grid grid-cols-4 gap-x-2 gap-y-5 sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-5">
            {group.items.map((skill) => (
              <li key={skill.name} className="group flex flex-col items-center gap-2 text-center">
                <span className="flex size-12 items-center justify-center rounded-full border-2 border-(--glow) bg-surface text-heading shadow-[0_0_12px_color-mix(in_oklab,var(--glow)_55%,transparent),inset_0_0_10px_color-mix(in_oklab,var(--glow)_30%,transparent)] transition duration-300 group-hover:scale-110 group-hover:shadow-[0_0_22px_var(--glow),inset_0_0_14px_color-mix(in_oklab,var(--glow)_45%,transparent)]">
                  {skill.icon ? (
                    <SkillIcon icon={skill.icon} className="size-5" />
                  ) : (
                    <span className="font-display text-xs font-extrabold tracking-tight">{skill.mono}</span>
                  )}
                </span>
                <span className="text-xs leading-snug font-medium">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
