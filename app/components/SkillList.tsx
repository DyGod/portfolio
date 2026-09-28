import type { SkillGroup } from "~/data/resume";
import { TechList } from "./TechList";

export function SkillList({ groups }: { groups: SkillGroup[] }) {
  return (
    <dl className="grid gap-6 sm:grid-cols-3">
      {groups.map((group) => (
        <div key={group.category}>
          <dt className="mb-3 font-semibold">{group.category}</dt>
          <dd>
            <TechList items={group.items} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
