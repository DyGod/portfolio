/*
 * All site content lives here. Replace the placeholders with your resume details —
 * no component changes needed.
 */

export type Link = { label: string; href: string };

export type Experience = {
  role: string;
  company: string;
  location?: string;
  start: string;
  end: string; // e.g. "Present"
  highlights: string[];
};

export type Project = {
  slug: string; // used in the URL: /projects/<slug>
  name: string;
  summary: string;
  description: string[];
  tech: string[];
  links: Link[];
};

export type Education = {
  school: string;
  degree: string;
  start: string;
  end: string;
};

export type SkillGroup = { category: string; items: string[] };

export const profile = {
  name: "Mark Dylan",
  title: "Frontend Developer",
  tagline: "I build fast, accessible web apps with React and Remix.",
  location: "City, Country",
  email: "you@example.com",
  resumeUrl: "/resume.pdf", // drop your PDF into public/resume.pdf
};

export const about: string[] = [
  "Short intro paragraph about who you are and what you focus on.",
  "A second paragraph about what you enjoy building, or what you're looking for next.",
];

export const links: Link[] = [
  { label: "GitHub", href: "https://github.com/your-handle" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" },
];

export const experience: Experience[] = [
  {
    role: "Frontend Developer",
    company: "Company Name",
    location: "Remote",
    start: "2024",
    end: "Present",
    highlights: [
      "Impact-focused bullet: what you shipped and the measurable result.",
      "Another highlight describing ownership, scale, or collaboration.",
    ],
  },
  {
    role: "Junior Developer",
    company: "Previous Company",
    start: "2022",
    end: "2024",
    highlights: ["What you built and learned in this role."],
  },
];

export const projects: Project[] = [
  {
    slug: "project-one",
    name: "Project One",
    summary: "One-line pitch for the project.",
    description: [
      "What problem it solves and who it's for.",
      "Interesting technical decisions and what you'd do differently.",
    ],
    tech: ["React", "Remix", "TypeScript"],
    links: [
      { label: "Live", href: "https://example.com" },
      { label: "Code", href: "https://github.com/your-handle/project-one" },
    ],
  },
  {
    slug: "project-two",
    name: "Project Two",
    summary: "One-line pitch for another project.",
    description: ["Longer description of the project."],
    tech: ["React Router", "Tailwind CSS"],
    links: [{ label: "Code", href: "https://github.com/your-handle/project-two" }],
  },
];

export const skills: SkillGroup[] = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "HTML", "CSS"] },
  { category: "Frameworks", items: ["React", "Remix / React Router", "Tailwind CSS"] },
  { category: "Tools", items: ["Git", "Vite", "Figma"] },
];

export const education: Education[] = [
  { school: "University Name", degree: "B.S. Computer Science", start: "2018", end: "2022" },
];
