import { profile, stats } from "~/data/resume";

const secondaryButton =
  "rounded-lg border border-border bg-surface px-5 py-2.5 font-medium text-heading transition-colors hover:border-primary hover:text-primary";

export function Hero() {
  return (
    <section className="py-20 sm:py-28">
      <p className="mb-4 font-display font-semibold text-primary">
        {profile.title} <span className="text-accent">|</span> {profile.specialty}
      </p>
      <h1 className="font-display text-5xl font-extrabold tracking-tight text-heading sm:text-7xl">
        {profile.firstName} <span className="text-accent">{profile.lastName}</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">{profile.tagline}</p>
      <p className="mt-2 text-sm text-muted">📍 {profile.location}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-lg bg-primary px-5 py-2.5 font-medium text-primary-fg transition-opacity hover:opacity-90"
        >
          View projects
        </a>
        <a href="#contact" className={secondaryButton}>
          Get in touch
        </a>
        <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className={secondaryButton}>
          Resume
        </a>
      </div>

      <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-4 sm:gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col border-l-2 border-accent pl-3 sm:pl-4">
            <dt className="text-sm text-muted">{stat.label}</dt>
            <dd className="order-first font-display text-3xl font-bold text-heading">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
