import type { Route } from "./+types/home";
import { ExperienceItem } from "~/components/ExperienceItem";
import { Hero } from "~/components/Hero";
import { ProjectCard } from "~/components/ProjectCard";
import { Section } from "~/components/Section";
import { SkillList } from "~/components/SkillList";
import {
  about,
  certifications,
  education,
  experience,
  fullName,
  keySkills,
  links,
  profile,
  projects,
  skills,
} from "~/data/resume";

export function meta({}: Route.MetaArgs) {
  const title = `${fullName} — ${profile.title} | ${profile.specialty}`;
  return [
    { title },
    { name: "description", content: profile.tagline },
    { property: "og:title", content: title },
    { property: "og:description", content: profile.tagline },
    { property: "og:type", content: "website" },
    { property: "og:url", content: profile.siteUrl },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />

      <Section id="about" title="About">
        <div className="grid gap-10 md:grid-cols-[3fr_2fr]">
          <div className="space-y-4 text-lg text-muted">
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div>
            <h3 className="mb-3 font-display font-bold text-heading">Key skills</h3>
            <ul className="space-y-2">
              {keySkills.map((skill) => (
                <li key={skill} className="relative pl-5 text-muted">
                  <span aria-hidden className="absolute left-0 text-accent">•</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <ol className="space-y-8">
          {experience.map((item) => (
            <ExperienceItem key={`${item.company}-${item.start}`} item={item} />
          ))}
        </ol>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section id="skills" title="Technical skills">
        <SkillList groups={skills} />
      </Section>

      <Section id="credentials" title="Education & certifications">
        <div className="grid gap-10 md:grid-cols-2">
          <ul className="space-y-4">
            {education.map((item) => (
              <li key={item.school}>
                <h3 className="font-display font-bold text-heading">{item.school}</h3>
                <p className="italic text-muted">{item.degree}</p>
                <p className="text-sm font-semibold text-accent">
                  {item.start} – {item.end}
                </p>
              </li>
            ))}
          </ul>
          <div>
            <h3 className="mb-3 font-display font-bold text-heading">Shopify certifications</h3>
            <ul className="space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="relative pl-5 text-muted">
                  <span aria-hidden className="absolute left-0 text-accent">•</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <p className="max-w-2xl text-lg text-muted">
          Building a custom Shopify or headless storefront? The best way to reach me is by email.
        </p>
        <p className="mt-4 break-all font-display text-xl font-bold sm:text-2xl">
          <a href={`mailto:${profile.email}`} className="text-primary hover:underline">
            {profile.email}
          </a>
        </p>
        <ul className="mt-6 flex flex-wrap gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer" className="font-medium text-muted hover:text-primary">
                {link.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
