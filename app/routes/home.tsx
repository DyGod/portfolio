import type { Route } from "./+types/home";
import { ExperienceItem } from "~/components/ExperienceItem";
import { Hero } from "~/components/Hero";
import { ProjectCard } from "~/components/ProjectCard";
import { Section } from "~/components/Section";
import { SkillList } from "~/components/SkillList";
import { about, education, experience, links, profile, projects, skills } from "~/data/resume";

export function meta({}: Route.MetaArgs) {
  const title = `${profile.name} — ${profile.title}`;
  return [
    { title },
    { name: "description", content: profile.tagline },
    { property: "og:title", content: title },
    { property: "og:description", content: profile.tagline },
    { property: "og:type", content: "website" },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />

      <Section id="about" title="About">
        <div className="max-w-3xl space-y-4 text-lg text-muted">
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <ol className="space-y-10">
          {experience.map((item) => (
            <ExperienceItem key={`${item.company}-${item.start}`} item={item} />
          ))}
        </ol>

        <h3 className="mt-14 mb-4 font-semibold">Education</h3>
        <ul className="space-y-2">
          {education.map((item) => (
            <li key={item.school} className="text-muted">
              <span className="font-medium text-fg">{item.degree}</span> · {item.school} (
              {item.start} – {item.end})
            </li>
          ))}
        </ul>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <SkillList groups={skills} />
      </Section>

      <Section id="contact" title="Contact">
        <p className="max-w-2xl text-lg text-muted">
          Open to new opportunities. The best way to reach me is by email.
        </p>
        <p className="mt-4 text-xl font-semibold">
          <a href={`mailto:${profile.email}`} className="text-primary hover:underline">
            {profile.email}
          </a>
        </p>
        <ul className="mt-6 flex flex-wrap gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer" className="text-muted hover:text-primary">
                {link.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
