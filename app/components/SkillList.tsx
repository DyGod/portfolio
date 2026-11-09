import type { CSSProperties } from "react";
import type { SkillGroup } from "~/data/resume";
import { SkillIcon } from "./SkillIcon";

/*
 * Each skill is a logo inside a neon ring. The ring color comes from the group's `glow`
 * (--color-neon-<glow> in app.css, unique per category) and brightens on hover.
 * The first `open` groups show by default; the rest sit behind a "More skills" disclosure.
 */
export function SkillList({ groups, open = groups.length }: { groups: SkillGroup[]; open?: number }) {
  const shown = groups.slice(0, open);
  const more = groups.slice(open);

  return (
    <>
      <SkillGrid groups={shown} />
      {more.length > 0 && (
        <details className="group/more mt-10">
          <summary className="inline-flex cursor-pointer list-none items-center gap-2 border-2 border-border bg-surface px-5 py-2.5 font-medium text-heading transition-colors hover:border-primary hover:text-primary [&::-webkit-details-marker]:hidden">
            <span className="group-open/more:hidden">More skills ({more.length} groups)</span>
            <span className="hidden group-open/more:inline">Fewer skills</span>
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="size-4 transition-transform group-open/more:rotate-180"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </summary>
          <SkillGrid groups={more} className="mt-10" />
        </details>
      )}
    </>
  );
}

function SkillGrid({ groups, className = "" }: { groups: SkillGroup[]; className?: string }) {
  return (
    <div className={`grid gap-x-12 gap-y-10 md:grid-cols-2 ${className}`}>
      {groups.map((group) => (
        <div key={group.category} style={{ "--glow": `var(--color-neon-${group.glow})` } as CSSProperties}>
          <h3 className="mb-5 font-display font-bold text-heading">{group.category}</h3>
          <ul className="grid grid-cols-3 gap-x-2 gap-y-5 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-5">
            {group.items.map((skill) => (
              <li key={skill.name} className="group flex flex-col items-center gap-2 text-center">
                <span className="flex size-12 items-center justify-center rounded-full border-2 border-(--glow) bg-surface text-heading shadow-[0_0_12px_color-mix(in_oklab,var(--glow)_55%,transparent),inset_0_0_10px_color-mix(in_oklab,var(--glow)_30%,transparent)] transition duration-300 group-hover:scale-110 group-hover:shadow-[0_0_22px_var(--glow),inset_0_0_14px_color-mix(in_oklab,var(--glow)_45%,transparent)]">
                  {skill.icon ? (
                    <SkillIcon icon={skill.icon} className="size-5" />
                  ) : (
                    <span aria-hidden className="font-display text-xs font-extrabold tracking-tight">
                      {skill.mono}
                    </span>
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
