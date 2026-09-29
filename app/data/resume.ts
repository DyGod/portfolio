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

export type Fact = { label: string; value: string };

export type Media =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster?: string; alt: string };

export type Project = {
  slug: string; // used in the URL: /projects/<slug>
  name: string;
  subtext: string; // short label above the name, e.g. "Surgical technologies"
  summary: string; // shown clamped to 2 lines on the collapsed Highlights card
  description?: string[]; // optional longer write-up for the project page
  contributions: string[]; // detailed "My contributions" list in the expanded card
  facts: Fact[]; // key facts under the media: scale, integrations, unique features…
  media?: Media; // video/screenshot for the expanded card; a placeholder shows until set
  tech: string[];
  links: Link[];
};

export type Education = {
  school: string;
  degree: string;
  start: string;
  end: string;
};

/* Icon keys map to logos/glyphs in app/components/SkillIcon.tsx */
export type SkillIconKey =
  // Frontend
  | "html5"
  | "css"
  | "javascript"
  | "typescript"
  | "react"
  | "remix"
  | "nextjs"
  | "vue"
  | "shopify"
  | "tailwind"
  | "sass"
  | "ionic"
  | "quasar"
  // Backend
  | "nodejs"
  | "nestjs"
  | "express"
  | "php"
  | "laravel"
  | "wordpress"
  | "postgresql"
  | "supabase"
  // APIs & CMS
  | "rest"
  | "graphql"
  | "stripe"
  | "algolia"
  | "sanity"
  | "builder"
  | "pack"
  | "shogun"
  // Data & Testing
  | "vitest"
  | "jest"
  | "testinglibrary"
  | "storybook"
  | "googleanalytics"
  | "googletagmanager"
  | "tracking"
  | "consent"
  | "seo"
  // AI
  | "mcp"
  | "sparkles"
  | "workflow"
  | "claude"
  | "copilot"
  // Build & Tooling
  | "cicd"
  | "vite"
  | "webpack"
  | "rollup"
  | "eslint"
  | "prettier"
  | "sentry"
  // Project Management
  | "git"
  | "github"
  | "gitlab"
  | "jira"
  | "clickup"
  | "scoro"
  | "notion";
/* `icon` shows a logo/glyph; brands without one show `mono` (short text) inside the ring instead. */
export type Skill = { name: string; icon?: SkillIconKey; mono?: string };
/* Each category gets its own neon ring color (--color-neon-<glow> in app.css). */
export type SkillGlow =
  | "blue"
  | "green"
  | "cyan"
  | "pink"
  | "orange"
  | "purple"
  | "indigo"
  | "yellow";
export type SkillGroup = { category: string; glow: SkillGlow; items: Skill[] };
export type Stat = { value: string; label: string };
export type KeySkill = { title: string; description: string };

export const profile = {
  firstName: "Mark Dylan",
  lastName: "Cosca",
  title: "Full-Stack Developer",
  specialty: "Digital Commerce Expert",
  availability: "Open to work · Globally",
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
export type IntroSegment = {
  text: string;
  highlight?: "primary" | "accent" | "accent-2";
};

export const intro: IntroSegment[] = [
  { text: "Full-stack developer", highlight: "primary" },
  { text: " specializing in frontend, with " },
  { text: "9+ years", highlight: "primary" },
  { text: " building fast, fully custom " },
  { text: "e-commerce", highlight: "accent" },
  { text: " storefronts and the " },
  { text: "APIs", highlight: "accent" },
  { text: " that power them, leveraging " },
  { text: "AI-driven development", highlight: "accent-2" },
  { text: " from system design and well-documented codebases to automated testing and site features." },
];

export const introText = intro.map((segment) => segment.text).join("");

export const credlyUrl = "https://www.credly.com/users/mark-dylan-cosca/badges";

export const links: Link[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mark-dylan-cosca-703230163",
  },
  {
    label: "GitHub",
    href: "https://github.com/DyGod",
  },
  {
    label: "Credly",
    href: credlyUrl,
  },
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
    slug: "corza",
    name: "Corza",
    subtext: "Surgical technologies",
    summary:
      "Quality surgical products for every specialty, essential in surgery's most critical moments.",
    contributions: [
      "Established the project's CI/CD pipeline and AI-assisted development workflows, standardizing how the team builds, tests and ships.",
      "Built robust test coverage and technical documentation to keep a large B2B codebase reliable and easy to onboard into.",
      "Developed the B2B storefront UX/UI, turning complex business requirements into clear, usable purchasing experiences.",
    ],
    facts: [
      { label: "Scale", value: "Large B2B system" },
      {
        label: "AI",
        value: "AI-assisted development, testing and project runs",
      },
    ],
    media: {
      type: "video",
      src: "/videos/corza-highlights.mp4",
      alt: "A paper procedures binder becomes AI-readable docs, a tested architecture and an approved B2B surgical-supply order.",
    },
    tech: [
      "Shopify Hydrogen",
      "B2B Commerce",
      "AI-Driven Architecture",
      "CI/CD Automation",
      "Test-Driven Quality",
    ],
    links: [{ label: "Visit site", href: "https://corza.com/global/" }],
  },
  {
    slug: "spanx",
    name: "Spanx",
    subtext: "Women's shapewear",
    summary:
      "Women's shapewear, AirEssentials loungewear, shaping jeans, leggings, bras and bodysuits: premium styles that smooth and shape.",
    contributions: [
      "Re-engineered complex product listings into an intuitive, easy-to-shop UX/UI for a global audience.",
      "Wrote maintainable, performance-first code that keeps the storefront fast under high traffic.",
      "Drove AI-assisted workflows across architecture, development and testing to ship faster with confidence.",
    ],
    facts: [
      { label: "Reach", value: "Globally known brand" },
      { label: "Traffic", value: "High-traffic storefront" },
      { label: "Performance", value: "Fast site speed" },
      { label: "Catalog", value: "Complex product listings" },
      { label: "AI", value: "AI-assisted development" },
    ],
    media: {
      type: "video",
      src: "/videos/spanx-highlights.mp4",
      alt: "A runner crosses a storefront that loads in her wake, a cluttered product listing turns clean, traffic surges while the speed gauge stays fast, and page views climb past ten million.",
    },
    tech: [
      "Shopify Hydrogen",
      "High-Traffic Scale",
      "Performance-First",
      "AI-Assisted QA",
      "Global Brand",
    ],
    links: [{ label: "Visit site", href: "https://spanx.com/" }],
  },
  {
    slug: "turtle-beach",
    name: "Turtle Beach",
    subtext: "Premium gaming",
    summary:
      "Industry-leading, award-winning gaming headsets, built to help every player play their best, at every level, in every game.",
    contributions: [
      "Unified 4 Shopify backends behind a single codebase, delivering one seamless storefront experience across stores.",
      "Integrated multiple sales channels to power cross-border commerce for a global brand.",
      "Built landing pages and PDPs with complex, content-rich sections.",
    ],
    facts: [
      { label: "Presence", value: "Global" },
      {
        label: "Architecture",
        value: "1 codebase, multi-origin headless architecture",
      },
    ],
    media: {
      type: "video",
      src: "/videos/turtle-beach-highlights.mp4",
      alt: "A processor renders a headset product page while four regional Shopify API nodes each send a pulse that switches its price and language between US, UK, German and Japanese storefronts.",
    },
    tech: [
      "Shopify Hydrogen",
      "Multi-Store Architecture",
      "Cross-Border Commerce",
      "Multi-Channel Sales",
    ],
    links: [{ label: "Visit site", href: "https://www.turtlebeach.com/" }],
  },
  {
    slug: "solo-brands",
    name: "Solo Brands",
    subtext: "DTC lifestyle brands",
    summary:
      "A portfolio of respected, distinctive and adventurous lifestyle brands built around creating great moments and greater memories.",
    contributions: [
      "Architected a single codebase that powers 3 DTC brand storefronts.",
      "Built a shared component UI library, reducing duplication and simplifying maintenance across brands.",
      "Integrated a CMS and Shopify metaobjects so each brand can manage its own content independently on one platform.",
    ],
    facts: [
      { label: "Architecture", value: "3 brands, 1 codebase" },
      { label: "UI", value: "Shared component UI library" },
    ],
    media: {
      type: "video",
      src: "/videos/solo-brands-highlights.mp4",
      alt: "A surfboard, a kayak, shorts and a t-shirt fly into a small shop that turns into one web page, which becomes three differently themed brand storefronts sharing the same components from one codebase.",
    },
    tech: [
      "Shopify Hydrogen",
      "Multi-Brand Architecture",
      "Shared Component Library",
      "Metaobject-Driven CMS",
    ],
    links: [{ label: "Visit site", href: "https://solobrands.com/" }],
  },
];

/*
 * Sites shown in the Projects carousel. Logos live in public/logos/ as 128×128 PNGs
 * on a white square so every tile renders at the same size.
 */
export type Site = { name: string; url: string; logo: string };

export const sites: Site[] = [
  { name: "Spanx", url: "https://spanx.com/", logo: "/logos/spanx.png" },
  {
    name: "Turtle Beach",
    url: "https://www.turtlebeach.com/",
    logo: "/logos/turtle-beach.png",
  },
  {
    name: "e.l.f. Cosmetics",
    url: "https://www.elfcosmetics.com/",
    logo: "/logos/elf.png",
  },
  {
    name: "Boll & Branch",
    url: "https://www.bollandbranch.com/",
    logo: "/logos/boll-and-branch.png",
  },
  {
    name: "Chubbies",
    url: "https://www.chubbiesshorts.com/",
    logo: "/logos/chubbies.png",
  },
  {
    name: "ISLE",
    url: "https://islesurfandsup.com/",
    logo: "/logos/isle.png",
  },
  {
    name: "Oru Kayak",
    url: "https://www.orukayak.com/",
    logo: "/logos/oru-kayak.png",
  },
  {
    name: "5 Star Nutrition",
    url: "https://5starnutrition.com/",
    logo: "/logos/5-star-nutrition.png",
  },
  {
    name: "Grown Alchemist",
    url: "https://grownalchemist.com/",
    logo: "/logos/grown-alchemist.png",
  },
  { name: "Nomad", url: "https://nomadgoods.com/", logo: "/logos/nomad.png" },
  {
    name: "Strandbags",
    url: "https://www.strandbags.com.au/",
    logo: "/logos/strandbags.png",
  },
  {
    name: "Shona Joy",
    url: "https://shonajoy.com/",
    logo: "/logos/shona-joy.png",
  },
  {
    name: "Quiksilver",
    url: "https://www.quiksilver.com/",
    logo: "/logos/quiksilver.png",
  },
  {
    name: "Billabong",
    url: "https://www.billabong.com/",
    logo: "/logos/billabong.png",
  },
  {
    name: "MOTHER",
    url: "https://www.motherdenim.com/",
    logo: "/logos/mother.png",
  },
  {
    name: "Gunner",
    url: "https://gunner.com/",
    logo: "/logos/gunner.png",
  },
  {
    name: "Harbour",
    url: "https://shopharbour.com/",
    logo: "/logos/harbour.png",
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    glow: "blue",
    items: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS", icon: "css" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Remix", icon: "remix" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Vue.js", icon: "vue" },
      { name: "Shopify & Liquid", icon: "shopify" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "CSS Modules", mono: "CM" },
      { name: "SCSS", icon: "sass" },
      { name: "Ionic", icon: "ionic" },
      { name: "Quasar", icon: "quasar" },
    ],
  },
  {
    category: "Backend",
    glow: "green",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "NestJS", icon: "nestjs" },
      { name: "Express", icon: "express" },
      { name: "PHP", icon: "php" },
      { name: "Laravel", icon: "laravel" },
      { name: "WordPress", icon: "wordpress" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Supabase", icon: "supabase" },
    ],
  },
  {
    category: "APIs & CMS",
    glow: "cyan",
    items: [
      { name: "REST APIs", icon: "rest" },
      { name: "GraphQL", icon: "graphql" },
      { name: "Stripe", icon: "stripe" },
      { name: "Algolia", icon: "algolia" },
      { name: "Klaviyo", mono: "K" },
      { name: "Yotpo", mono: "Y" },
      { name: "Builder.io", icon: "builder" },
      { name: "Sanity", icon: "sanity" },
      { name: "Pack CMS", icon: "pack" },
      { name: "Shogun", icon: "shogun" },
    ],
  },
  {
    category: "Analytics",
    glow: "orange",
    items: [
      { name: "GA4", icon: "googleanalytics" },
      { name: "GTM", icon: "googletagmanager" },
      { name: "Server-side tracking", icon: "tracking" },
      { name: "A/B testing", mono: "A/B" },
      { name: "GDPR/CCPA", icon: "consent" },
      { name: "SEO", icon: "seo" },
    ],
  },
  {
    category: "Code Testing",
    glow: "pink",
    items: [
      { name: "Vitest", icon: "vitest" },
      { name: "Jest", icon: "jest" },
      { name: "Playwright", mono: "PW" },
      { name: "Testing Library", icon: "testinglibrary" },
      { name: "Storybook", icon: "storybook" },
    ],
  },
  {
    category: "AI",
    glow: "purple",
    items: [
      { name: "MCP", icon: "mcp" },
      { name: "AI Skills", icon: "sparkles" },
      { name: "AI Workflows", icon: "workflow" },
      { name: "Claude Code", icon: "claude" },
      { name: "GitHub Copilot", icon: "copilot" },
    ],
  },
  {
    category: "Build & Tooling",
    glow: "indigo",
    items: [
      { name: "CI/CD", icon: "cicd" },
      { name: "Vite", icon: "vite" },
      { name: "Webpack", icon: "webpack" },
      { name: "Rollup", icon: "rollup" },
      { name: "ESLint", icon: "eslint" },
      { name: "Prettier", icon: "prettier" },
      { name: "Sentry", icon: "sentry" },
    ],
  },
  {
    category: "Project Management",
    glow: "yellow",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "GitLab", icon: "gitlab" },
      { name: "Jira", icon: "jira" },
      { name: "ClickUp", icon: "clickup" },
      { name: "Scoro", icon: "scoro" },
      { name: "Notion", icon: "notion" },
    ],
  },
];

/* "What I bring to the table" — shown after Projects. */
export const keySkills: KeySkill[] = [
  {
    title: "Custom Shopify storefronts",
    description:
      "Fully custom builds with Liquid, Hydrogen and Remix, plus custom Shopify apps, made for the brand rather than adapted from a template.",
  },
  {
    title: "Performance-first frontend",
    description:
      "Maintainable React and TypeScript code that keeps high-traffic storefronts fast.",
  },
  {
    title: "Complex catalogs & B2B",
    description:
      "Turning complex product listings and business requirements into clear, easy-to-shop UX.",
  },
  {
    title: "AI-assisted development",
    description:
      "Claude Code and GitHub Copilot for code review, debugging, tests and docs, plus AI-powered storefront features.",
  },
  {
    title: "Testing & CI/CD",
    description:
      "Pipelines, test coverage and documentation that keep large codebases reliable and easy to onboard into.",
  },
  {
    title: "Full-stack range",
    description:
      "APIs and integrations behind the storefront, with a background in NodeJS, PHP/Laravel, Vue and WordPress.",
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
