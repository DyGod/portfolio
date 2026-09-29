import type { Route } from "./+types/home";
import { ExperienceItem } from "~/components/ExperienceItem";
import { Hero } from "~/components/Hero";
import { HighlightsGrid } from "~/components/HighlightsGrid";
import { Section } from "~/components/Section";
import { SiteCarousel } from "~/components/SiteCarousel";
import { SkillList } from "~/components/SkillList";
import {
  certifications,
  credlyUrl,
  education,
  experience,
  fullName,
  introText,
  keySkills,
  links,
  profile,
  projects,
  sites,
  skills,
} from "~/data/resume";

export function meta({}: Route.MetaArgs) {
  const title = `${fullName} — ${profile.title} | ${profile.specialty}`;
  return [
    { title },
    { name: "description", content: introText },
    { property: "og:title", content: title },
    { property: "og:description", content: introText },
    { property: "og:type", content: "website" },
    { property: "og:url", content: profile.siteUrl },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />

      <Section
        id="highlights"
        title="Highlights"
        subtitle="Behind the storefronts"
      >
        <HighlightsGrid projects={projects} />
      </Section>

      <Section id="experience" title="Experience" subtitle="The road so far">
        <ol className="space-y-8">
          {experience.map((item) => (
            <ExperienceItem key={`${item.company}-${item.start}`} item={item} />
          ))}
          {education.map((item) => (
            <li
              key={item.school}
              className="grid gap-1 sm:grid-cols-[1fr_auto] sm:gap-x-6"
            >
              <h3 className="font-display font-bold text-heading">
                {item.school} <span className="text-accent">|</span>{" "}
                <span className="font-sans text-sm font-normal italic text-accent-2-strong">
                  {item.degree}
                </span>
              </h3>
              <p className="text-sm font-semibold text-accent-strong sm:row-start-1 sm:col-start-2">
                {item.start} – {item.end}
              </p>
            </li>
          ))}
          <li>
            <h3 className="font-display font-bold text-heading">
              Certifications <span className="text-accent">|</span>{" "}
              <a
                href={credlyUrl}
                target="_blank"
                rel="noreferrer"
                className="font-sans text-sm font-normal italic text-accent-2-strong hover:underline"
              >
                Verify on Credly ↗&#xFE0E;
              </a>
            </h3>
            <ul className="mt-2 space-y-1">
              {certifications.map((cert) => (
                <li key={cert} className="relative pl-5 text-muted">
                  <span aria-hidden className="absolute left-0 text-accent">
                    •
                  </span>
                  {cert}
                </li>
              ))}
            </ul>
          </li>
        </ol>
      </Section>

      <Section
        id="projects"
        title="Projects"
        subtitle="Storefronts I've built and contributed to."
      >
        <SiteCarousel sites={sites} />
      </Section>

      <Section
        id="key-skills"
        title="Qualifications"
        subtitle="What I bring to the table"
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {keySkills.map((skill) => (
            <li
              key={skill.title}
              className="border border-border border-l-4 border-l-accent p-5"
            >
              <h3 className="font-display font-bold text-heading">
                {skill.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{skill.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="skills" title="Skills" subtitle="What I used">
        <SkillList groups={skills} />
      </Section>

      <Section id="contact" title="Contact">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-extrabold tracking-tight text-heading">
                Let's work together
              </h3>
              <p className="mt-4 max-w-2xl text-lg text-muted">
                Looking for a full-stack developer? From fast, fully custom
                Shopify and headless storefronts to the APIs and integrations
                behind them, I build frontends that scale. The best way to reach
                me is by email.
              </p>
            </div>
            <div>
              <p className="break-all font-display text-xl font-bold sm:text-2xl">
                <a
                  href={`mailto:${profile.email}`}
                  className="text-primary hover:underline"
                >
                  {profile.email}
                </a>
              </p>
              <ul className="mt-6 flex flex-wrap gap-4">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-muted hover:text-primary"
                    >
                      {link.label} ↗&#xFE0E;
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <img
            src="/me.jpeg"
            alt={fullName}
            width={3024}
            height={4032}
            loading="lazy"
            className="mx-auto h-[400px] w-auto"
          />
        </div>
      </Section>
    </>
  );
}
