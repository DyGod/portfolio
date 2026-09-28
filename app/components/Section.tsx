import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-border py-16 first:border-t-0">
      <h2 className="mb-8 font-display text-2xl font-bold tracking-tight">
        <span className="text-accent">#</span> {title}
      </h2>
      {children}
    </section>
  );
}
