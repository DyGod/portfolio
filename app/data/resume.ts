/*
 * All site content lives here, sourced from the resume.
 * Edit this file to update the site — no component changes needed.
 */

export type Link = { label: string; href: string };

export type Experience = {
  role: string;
  company: string;
  type: string; // e.g. "Full-time"
  start: string;
  end: string;
  highlights: string[];
};

export type Project = {
  slug: string; // used in the URL: /projects/<slug>
  name: string;
  platform: string;
  summary: string;
  role: string;
  aiWorkflow?: string;
  description?: string[]; // optional longer write-up for the project page
  tech: string[];
  links: Link[];
};

export type Education = {
  school: string;
  degree: string;
  start: string;
  end: string;
};

export type Skill = { name: string; years?: string };
export type SkillGroup = { category: string; items: Skill[] };
export type Stat = { value: string; label: string };

export const profile = {
  firstName: "Mark Dylan",
  lastName: "Cosca",
  title: "Frontend Developer",
  specialty: "Shopify & Headless E-Commerce",
  tagline:
    "I build fully custom, fast e-commerce storefronts with Shopify Liquid, Shopify Hydrogen (Remix), React and Vue.",
  location: "Pasig City, Philippines",
  email: "coscamarkdylan@hotmail.com",
  siteUrl: "https://markdylan.dev",
  resumeUrl: "/resume.pdf", // drop the PDF into public/resume.pdf
};

export const fullName = `${profile.firstName} ${profile.lastName}`;

export const stats: Stat[] = [
  { value: "9+", label: "Years building for the web" },
  { value: "6+", label: "Years on Shopify" },
  { value: "3", label: "Shopify developer certifications" },
];

export const about: string[] = [
  "Frontend Developer with 9+ years of experience building fully custom, fast e-commerce storefronts. Specialized in Shopify Liquid, Shopify Hydrogen (Remix), ReactJS and VueJS, with backend experience in PHP/Laravel and NodeJS, plus code architecture, custom Shopify apps and 3rd-party integrations.",
  "I use Claude Code and GitHub Copilot for AI-assisted code review, debugging, testing and docs, and build AI-powered storefront features.",
];

export const keySkills: string[] = [
  "Detailed interpersonal and work communication",
  "AI-assisted development (Claude Code, GitHub Copilot)",
  "Adaptable problem solving",
  "Advanced e-commerce knowledge and development",
];

export const links: Link[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mark-dylan-cosca-703230163" },
  { label: "Credly", href: "https://www.credly.com/users/mark-dylan-cosca/badges" },
];

export const experience: Experience[] = [
  {
    role: "Frontend Developer",
    company: "Form Factory",
    type: "Full-time",
    start: "Sept 2022",
    end: "Sept 2026",
    highlights: [
      "Develop and maintain fully custom storefronts using Shopify Liquid, ReactJS, Remix, Hydrogen and Custom Shopify Apps.",
      "Build AI-powered storefront features; use Claude Code and GitHub Copilot for code review, debugging, tests and docs.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "MindArc",
    type: "Full-time",
    start: "Oct 2021",
    end: "May 2022",
    highlights: [
      "Developed fully custom, fast e-commerce storefronts using NodeJS (Vue/React), Shopify Liquid and Custom Apps.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Digital Studio / LiveCrossing",
    type: "Full-time",
    start: "Mar 2019",
    end: "Oct 2021",
    highlights: [
      "Led development of a custom storefront on a custom e-commerce platform using PHP/Laravel and VueJS.",
    ],
  },
  {
    role: "Web/Mobile Developer",
    company: "Skubbs Inc",
    type: "Full-time",
    start: "Jul 2018",
    end: "Mar 2019",
    highlights: [
      "Developed websites and hybrid mobile applications using PHP/WordPress, VueJS, Ionic and Quasar.",
    ],
  },
  {
    role: "Developer",
    company: "Fullmoon Outdoor",
    type: "Full-time",
    start: "Jul 2017",
    end: "Jul 2018",
    highlights: [
      "Developed websites and customized themes with PHP/WordPress; provided Search Engine Optimization (SEO).",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "spanx",
    name: "Spanx",
    platform: "Shopify Hydrogen",
    summary:
      "American apparel brand (shapewear, leggings, essentials) built with Shopify Hydrogen (Remix), GraphQL and 3rd-party applications.",
    role: "Code architecture, frontend development, 3rd-party integration for SEO and fulfillment apps.",
    aiWorkflow:
      "AI-assisted review, debugging and testing (Claude Code, GitHub Copilot); AI-powered storefront features.",
    tech: ["Shopify Hydrogen", "Remix", "GraphQL"],
    links: [],
  },
  {
    slug: "grown-alchemist",
    name: "Grown Alchemist",
    platform: "Shopify Hydrogen",
    summary:
      "Luxury cosmetics e-commerce storefront built with Shopify Hydrogen (Remix), GraphQL and 3rd-party applications.",
    role: "Frontend development, 3rd-party integration for SEO and fulfillment apps.",
    tech: ["Shopify Hydrogen", "Remix", "GraphQL"],
    links: [],
  },
  {
    slug: "defyned-brands",
    name: "Defyned Brands",
    platform: "Shopify Hydrogen",
    summary:
      "Fitness/supplement e-commerce storefront built with Shopify Hydrogen (Remix), GraphQL and 3rd-party applications.",
    role: "Frontend development, 3rd-party integration for SEO and fulfillment apps.",
    tech: ["Shopify Hydrogen", "Remix", "GraphQL"],
    links: [],
  },
  {
    slug: "shona-joy",
    name: "Shona Joy",
    platform: "Shopify Website",
    summary: "High-demand fashion e-commerce storefront built with Shopify 2.0, Vue, SCSS and fulfillment apps.",
    role: "Full development of PDP/PLP and 3rd-party integration.",
    tech: ["Shopify 2.0", "Vue", "SCSS"],
    links: [],
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML / CSS / JavaScript", years: "10+" },
      { name: "Shopify / Liquid / Apps", years: "6+" },
      { name: "ReactJS / Remix / Next", years: "6+" },
      { name: "VueJS", years: "5+" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "PHP / Laravel / Custom", years: "6+" },
      { name: "NodeJS / Nest / Express", years: "6+" },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "GraphQL" },
      { name: "SCSS" },
      { name: "WordPress" },
      { name: "Ionic" },
      { name: "Quasar" },
      { name: "SEO" },
    ],
  },
];

export const certifications: string[] = [
  "Shopify Apps Development",
  "Liquid Storefront",
  "Headless at Shopify for Developers",
];

export const education: Education[] = [
  {
    school: "Informatics College Northgate",
    degree: "Bachelor of Science in Information Technology",
    start: "Jun 2014",
    end: "May 2017",
  },
];
