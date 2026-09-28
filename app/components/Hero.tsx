import { profile } from "~/data/resume";

export function Hero() {
  return (
    <section className="py-20 sm:py-28">
      <p className="mb-3 font-medium text-primary">{profile.title}</p>
      <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
        Hi, I'm {profile.name}.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">{profile.tagline}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-lg bg-primary px-5 py-2.5 font-medium text-primary-fg transition-opacity hover:opacity-90"
        >
          View projects
        </a>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-border bg-surface px-5 py-2.5 font-medium transition-colors hover:border-primary"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
