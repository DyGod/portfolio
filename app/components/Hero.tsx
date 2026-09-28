import { Fragment } from "react";
import { intro, profile, stats, type IntroSegment } from "~/data/resume";

const highlightClass: Record<NonNullable<IntroSegment["highlight"]>, string> = {
  primary: "text-primary",
  accent: "text-accent",
  "accent-2": "text-accent-2",
};

const secondaryButton =
  "border-2 border-border bg-surface px-5 py-2.5 font-medium text-heading transition-colors hover:border-primary hover:text-primary";

export function Hero() {
  return (
    <section className="py-20 sm:py-28">
      <p className="mb-4 font-display text-xl font-bold text-heading sm:text-2xl">
        {profile.firstName} <span className="text-accent">{profile.lastName}</span>
      </p>
      <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-heading sm:text-5xl lg:text-6xl">
        <span className="block">{profile.title}</span>
        <span className="block text-accent">
          {/* keep hyphenated words like "E-Commerce" from breaking across lines */}
          {profile.specialty.split(" ").map((word, i) => (
            <Fragment key={i}>
              {i > 0 && " "}
              <span className="whitespace-nowrap">{word}</span>
            </Fragment>
          ))}
        </span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">
        {intro.map((segment, i) =>
          segment.highlight ? (
            <strong key={i} className={`font-semibold ${highlightClass[segment.highlight]}`}>
              {segment.text}
            </strong>
          ) : (
            <Fragment key={i}>{segment.text}</Fragment>
          ),
        )}
      </p>
      <p className="mt-2 text-sm text-muted">📍 {profile.location}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#highlights"
          className="border-2 border-primary bg-primary px-5 py-2.5 font-medium text-primary-fg transition-opacity hover:opacity-90"
        >
          View highlights
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
