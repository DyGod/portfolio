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

/*
 * Short intro shown in the hero. Segments with a `highlight` are emphasized
 * in that accent color: "primary" (blue), "accent" (orange), "accent-2" (purple).
 */
export type IntroSegment = { text: string; highlight?: "primary" | "accent" | "accent-2" };

export const intro: IntroSegment[] = [
  { text: "Frontend developer", highlight: "primary" },
  { text: " with 9+ years building fast, fully custom " },
  { text: "Shopify & e-commerce", highlight: "accent" },
  { text: " storefronts, using " },
  { text: "AI workflows", highlight: "accent-2" },
  { text: " for code review, testing and smarter storefront features." },
];

export const introText = intro.map((segment) => segment.text).join("");

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

/*
 * Sites shown in the Projects carousel. Logos live in public/logos/ as 128×128 PNGs
 * on a white square so every tile renders at the same size.
 */
export type Site = { name: string; url: string; logo: string };

export const sites: Site[] = [
  { name: "Spanx", url: "https://spanx.com/", logo: "/logos/spanx.png" },
  { name: "Turtle Beach", url: "https://www.turtlebeach.com/", logo: "/logos/turtle-beach.png" },
  { name: "e.l.f. Cosmetics", url: "https://www.elfcosmetics.com/", logo: "/logos/elf.png" },
  { name: "Boll & Branch", url: "https://www.bollandbranch.com/", logo: "/logos/boll-and-branch.png" },
  { name: "Chubbies", url: "https://www.chubbiesshorts.com/", logo: "/logos/chubbies.png" },
  { name: "5 Star Nutrition", url: "https://5starnutrition.com/", logo: "/logos/5-star-nutrition.png" },
  { name: "Grown Alchemist", url: "https://grownalchemist.com/", logo: "/logos/grown-alchemist.png" },
  { name: "Nomad", url: "https://nomadgoods.com/", logo: "/logos/nomad.png" },
  { name: "Strandbags", url: "https://www.strandbags.com.au/", logo: "/logos/strandbags.png" },
  { name: "Shona Joy", url: "https://shonajoy.com/", logo: "/logos/shona-joy.png" },
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
  {
    category: "Key skills",
    items: [
      { name: "Detailed interpersonal and work communication" },
      { name: "AI-assisted development (Claude Code, GitHub Copilot)" },
      { name: "Adaptable problem solving" },
      { name: "Advanced e-commerce knowledge and development" },
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
