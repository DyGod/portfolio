import type { Route } from "./+types/home";
import { ExperienceItem } from "~/components/ExperienceItem";
import { Hero } from "~/components/Hero";
import { HighlightsGrid } from "~/components/HighlightsGrid";
import { Section } from "~/components/Section";
import { SiteCarousel } from "~/components/SiteCarousel";
import { SkillList } from "~/components/SkillList";
import { TechList } from "~/components/TechList";
import {
  about,
  certifications,
  clientProjects,
  credlyUrl,
  education,
  experience,
  fullName,
  howIWork,
  keySkills,
  links,
  migrations,
  openSkillGroups,
  profile,
  shareImageMeta,
  sideProjects,
  sites,
  skills,
  type KeySkill,
} from "~/data/resume";

const title = `${fullName} | ${profile.title} (React, Node.js, AI, Shopify)`;
const description =
  "Senior full stack developer building fast, reliable web products end to end: Shopify Plus and headless storefronts, full-stack apps and production AI agents.";

export function meta({}: Route.MetaArgs) {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: profile.siteUrl },
    ...shareImageMeta,
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "Person",
        name: fullName,
        jobTitle: profile.title,
        url: profile.siteUrl,
        email: `mailto:${profile.email}`,
        sameAs: links.map((link) => link.href),
      },
    },
  ];
}

function CardGrid({ items, columns = "sm:grid-cols-2 lg:grid-cols-3" }: { items: KeySkill[]; columns?: string }) {
  return (
    <ul className={`grid gap-4 ${columns}`}>
      {items.map((item) => (
        <li key={item.title} className="border border-border border-l-4 border-l-accent bg-surface p-5">
          <h3 className="font-display font-bold text-heading">{item.title}</h3>
          <p className="mt-2 text-sm text-muted">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      <Section id="about" title="About" subtitle="Who I am">
        <p className="max-w-3xl text-lg">{about}</p>
      </Section>

      <Section id="work" title="Selected work" subtitle="Client case studies">
        <HighlightsGrid projects={clientProjects} />

        <h3 className="mt-16 font-display text-2xl font-extrabold tracking-tight text-heading">Side projects</h3>
        <p className="mt-2 mb-6 text-muted">Products I've built and own end to end.</p>
        <HighlightsGrid projects={sideProjects} />

        <h3 className="mt-16 mb-6 font-display text-2xl font-extrabold tracking-tight text-heading">
          Other brands I've built for
        </h3>
        <SiteCarousel sites={sites} />
      </Section>

      <Section id="services" title="What I do" subtitle="How I can help">
        <CardGrid items={keySkills} columns="sm:grid-cols-2" />
      </Section>

      <Section id="skills" title="Skills" subtitle="Tools I use, and how">
        <div className="mb-10">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent-2-strong">
            Recent Shopify Plus migrations
          </h3>
          <TechList items={migrations} />
        </div>
        <SkillList groups={skills} open={openSkillGroups} />
      </Section>

      <Section id="experience" title="Experience" subtitle="The road so far">
        <ol className="space-y-8">
          {experience.map((item) => (
            <ExperienceItem key={`${item.company}-${item.start}`} item={item} />
          ))}
          {education.map((item) => (
            <li key={item.school} className="grid gap-1 sm:grid-cols-[1fr_auto] sm:gap-x-6">
              <h3 className="font-display font-bold text-heading">
                {item.school} <span className="text-accent-strong">|</span>{" "}
                <span className="font-sans text-sm font-normal italic text-accent-2-strong">{item.degree}</span>
              </h3>
              <p className="text-sm font-semibold text-accent-strong sm:row-start-1 sm:col-start-2">
                {item.start} – {item.end}
              </p>
            </li>
          ))}
          <li>
            <h3 className="font-display font-bold text-heading">
              Certifications <span className="text-accent-strong">|</span>{" "}
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

      <Section id="how-i-work" title="How I work" subtitle="Ownership, end to end">
        <CardGrid items={howIWork} />
      </Section>

      <Section id="contact" title="Contact">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-extrabold tracking-tight text-heading">Let's work together</h3>
              <p className="mt-4 max-w-2xl text-lg text-muted">
                Looking for a senior full stack developer? I build fast, reliable web products end to end, from
                high-traffic Shopify Plus and headless storefronts to full-stack apps and production AI agents. I'm open
                to remote work, and the best way to reach me is by email.
              </p>
            </div>
            <div>
              <p className="break-all font-display text-xl font-bold sm:text-2xl">
                <a href={`mailto:${profile.email}`} className="text-primary hover:underline">
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
                <li>
                  <a
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-muted hover:text-primary"
                  >
                    Resume (PDF) ↗&#xFE0E;
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="/me.jpeg"
            alt={`Portrait of ${fullName}`}
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
