import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-border py-16">
      <h2 className="mb-8 flex items-center gap-3 font-display text-lg font-bold uppercase tracking-[0.15em] text-heading">
        <span aria-hidden className="h-6 w-1.5 rounded-sm bg-accent" />
        {title}
      </h2>
      {children}
    </section>
  );
}
