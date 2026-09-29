import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string; // optional larger second line under the title
  children: ReactNode;
};

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-border py-16">
      <div className="mb-8">
        <h2 className="flex items-center gap-3 font-display text-lg font-bold uppercase tracking-[0.15em] text-heading">
          <span aria-hidden className="h-6 w-1.5 bg-accent" />
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 font-display text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">{subtitle}</p>
        )}
      </div>
      {children}
    </section>
  );
}
