/*
 * All site content lives here, sourced from the resume (public/resume.pdf).
 * Edit this file to update the site — no component changes needed.
 */

export type Link = { label: string; href: string };

export type Experience = {
  role: string;
  company: string;
  type: string; // e.g. "Full-time"
  context?: string; // optional line under the title, e.g. what the agency does and for whom
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
  kind: "client" | "side"; // client work vs. products I built and own
  name: string;
  subtext: string; // short label above the name, e.g. "Global DTC brand"
  period?: string; // shown for side projects, e.g. "Sep 2025 – Present"
  summary: string; // shown clamped to 2 lines on the collapsed card
  context?: string; // the situation / scale
  role?: string; // my role on the project
  outcome?: string; // measurable result, only when there is a real one
  description?: string[]; // optional longer write-up for the project page
  contributions: string[]; // "What I built" list
  facts: Fact[]; // key facts under the media
  media?: Media; // video/screenshot; a placeholder shows until set
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
  | "nodejs"
  | "nestjs"
  | "express"
  | "fastify"
  | "python"
  | "php"
  | "laravel"
  | "wordpress"
  | "postgresql"
  | "supabase"
  | "mongodb"
  | "mysql"
  | "redis"
  | "rest"
  | "graphql"
  | "webhooks"
  | "jwt"
  | "stripe"
  | "hubspot"
  | "meta"
  | "algolia"
  | "sanity"
  | "builder"
  | "pack"
  | "shogun"
  | "vitest"
  | "jest"
  | "testinglibrary"
  | "storybook"
  | "lighthouse"
  | "accessibility"
  | "googleanalytics"
  | "googletagmanager"
  | "tracking"
  | "consent"
  | "seo"
  | "mcp"
  | "sparkles"
  | "workflow"
  | "claude"
  | "copilot"
  | "cursor"
  | "vercel"
  | "kotlin"
  | "swift"
  | "docker"
  | "githubactions"
  | "netlify"
  | "cloudflare"
  | "cloud"
  | "monitoring"
  | "cicd"
  | "vite"
  | "webpack"
  | "rollup"
  | "eslint"
  | "prettier"
  | "sentry"
  | "architecture"
  | "scoping"
  | "standards"
  | "codereview"
  | "mentoring"
  | "git"
  | "github"
  | "gitlab"
  | "jira"
  | "clickup"
  | "scoro"
  | "notion";
/* `icon` shows a logo/glyph; skills without one show `mono` (short text) inside the ring instead. */
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
  | "yellow"
  | "teal";
export type SkillGroup = { category: string; glow: SkillGlow; items: Skill[] };
export type Stat = { value: string; label: string };
export type KeySkill = { title: string; description: string };

export const profile = {
  firstName: "Mark Dylan",
  lastName: "Cosca",
  title: "Senior Full Stack Developer",
  specialty: "React, Node.js, AI Agents & Headless Commerce",
  availability:
    "Open to remote work · Overlaps with US Pacific, CET and AEST hours",
  email: "coscamarkdylan@hotmail.com",
  siteUrl: "https://markdylan.dev",
  resumeUrl: "/resume.pdf", // the PDF lives at public/resume.pdf
};

export const fullName = `${profile.firstName} ${profile.lastName}`;

/* Proof stats shown large in the hero (all from the Spanx build). */
export const stats: Stat[] = [
  { value: "10M", label: "Monthly visitors served on Spanx" },
  { value: "99%", label: "Uptime through peak sale traffic" },
  { value: "0 → 99", label: "Lighthouse performance on Spanx" },
];

/*
 * Value statement shown in the hero. Segments with a `highlight` are emphasized
 * in that accent color: "primary" (blue), "accent" (orange), "accent-2" (purple).
 */
export type IntroSegment = {
  text: string;
  highlight?: "primary" | "accent" | "accent-2";
};

export const intro: IntroSegment[] = [
  { text: "I build " },
  { text: "fast, reliable web products", highlight: "primary" },
  { text: " end to end, from high-traffic " },
  { text: "Shopify Plus and headless storefronts", highlight: "accent" },
  { text: " to " },
  { text: "full-stack apps", highlight: "primary" },
  { text: " and " },
  { text: "production AI agents", highlight: "accent-2" },
  { text: "." },
];

export const introText = intro.map((segment) => segment.text).join("");

export const about =
  "I'm a senior full stack developer with 9+ years of experience, specializing in TypeScript, React and Next.js products backed by Node.js and Python services, PostgreSQL and vector data, and production AI agents built with tool calling, retrieval and evaluations. I've spent 7+ years deep in Shopify, from Liquid themes and custom apps to Hydrogen since its early releases, and I've led high-traffic work such as Spanx, serving 10M monthly visitors at 99% uptime. I enjoy owning products end to end, from client scoping and codebase architecture to the team standards that keep delivery smooth, and I'm genuinely excited about bringing AI into real products in ways people can trust.";

export const credlyUrl = "https://www.credly.com/users/mark-dylan-cosca/badges";
export const linkedInUrl =
  "https://www.linkedin.com/in/mark-dylan-cosca-703230163";

export const links: Link[] = [
  { label: "LinkedIn", href: linkedInUrl },
  { label: "GitHub", href: "https://github.com/DyGod" },
  { label: "Credly", href: credlyUrl },
];

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "Form Factory",
    type: "Full-time",
    context:
      "Agency delivering Shopify Plus, headless and custom web builds for global brands such as Spanx, Turtle Beach, Solo Brands and Corza.",
    start: "Sep 2022",
    end: "Sep 2026",
    highlights: [
      "Led architecture and delivery of high-traffic storefronts and web applications for global brands, scoping work directly with clients and owning it through to production.",
      "Delivered key Shopify Plus upgrades end to end, including checkout.liquid to Checkout Extensibility, Scripts to Functions, browser pixels to server-side tracking, and Liquid themes to headless Hydrogen builds.",
      "Built full-stack products and AI agents with Node.js, Python, PostgreSQL and vector search, using tool calling, retrieval, structured outputs and evaluations, with human approval before agents act.",
      "Drove CRO development and A/B tests that lifted conversion and average order value, and shortened build and deploy times through CI/CD improvements.",
      "Set coding standards and codebase architecture for the team, reviewed code, mentored developers, and delivered several projects solo from first commit to launch.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "MindArc",
    type: "Full-time",
    start: "Oct 2021",
    end: "May 2022",
    highlights: [
      "Customized existing Shopify themes and built custom Liquid themes, plus fast React and Vue storefronts for global brands.",
      "Built custom Shopify apps and connected stores to Node.js services and third-party REST APIs.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Digital Studio / LiveCrossing",
    type: "Full-time",
    start: "Mar 2019",
    end: "Oct 2021",
    highlights: [
      "Led development of a storefront on a custom e-commerce platform, built with PHP/Laravel and Vue.js.",
      "Took features from architecture through to release, working on both the frontend and backend.",
    ],
  },
  {
    role: "Web/Mobile Developer",
    company: "Skubbs Inc",
    type: "Full-time",
    start: "Jul 2018",
    end: "Mar 2019",
    highlights: [
      "Developed responsive websites and hybrid mobile apps using WordPress, Vue.js, Ionic and Quasar.",
    ],
  },
  {
    role: "Developer",
    company: "Fullmoon Outdoor",
    type: "Full-time",
    start: "Jul 2017",
    end: "Jul 2018",
    highlights: [
      "Developed websites and custom WordPress themes with HTML, CSS, JavaScript and PHP, and handled on-site SEO.",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "spanx",
    kind: "client",
    name: "Spanx",
    subtext: "Global DTC brand",
    summary:
      "Re-engineered complex product listings into a faster, simpler shopping experience, raising Lighthouse performance from 0 to 99.",
    context:
      "High-traffic global apparel brand serving about 10M monthly visitors.",
    role: "Developer at Form Factory (agency).",
    outcome:
      "Lighthouse performance raised from 0 to 99, with 99% uptime maintained through peak sale traffic.",
    contributions: [
      "Re-engineered complex product listings into a faster, simpler shopping experience for a global audience.",
      "Wrote maintainable, performance-first code that keeps the storefront fast under high traffic.",
    ],
    facts: [
      { label: "Traffic", value: "10M monthly visitors" },
      { label: "Uptime", value: "99% through peak sales" },
      { label: "Lighthouse", value: "0 → 99 performance" },
      { label: "Catalog", value: "Complex product listings" },
    ],
    media: {
      type: "video",
      src: "/videos/spanx-highlights.mp4",
      alt: "A runner crosses a storefront that loads in her wake, a cluttered product listing turns clean, traffic surges while the speed gauge stays fast, and page views climb past ten million.",
    },
    tech: ["Shopify", "Hydrogen", "React", "TypeScript"],
    links: [{ label: "Visit site", href: "https://spanx.com/" }],
  },
  {
    slug: "turtle-beach",
    kind: "client",
    name: "Turtle Beach",
    subtext: "Global gaming brand",
    summary:
      "Brought five Shopify stores and their backends into one codebase, with localized content, multi-currency pricing and per-market availability.",
    context: "Five Shopify stores across markets.",
    role: "Developer at Form Factory (agency).",
    contributions: [
      "Brought five stores and their backends into one codebase, with localized content, multi-currency pricing and per-market availability.",
      "Built the product-page buy box and gallery.",
    ],
    facts: [
      { label: "Stores", value: "5 markets, 1 codebase" },
      { label: "Localization", value: "Content, currency and availability per market" },
    ],
    media: {
      type: "video",
      src: "/videos/turtle-beach-highlights.mp4",
      alt: "A processor renders a headset product page while regional Shopify API nodes each send a pulse that switches its price and language between US, UK, German and Japanese storefronts.",
    },
    tech: ["Shopify Hydrogen", "React", "TypeScript", "GraphQL"],
    links: [{ label: "Visit site", href: "https://www.turtlebeach.com/" }],
  },
  {
    slug: "solo-brands",
    kind: "client",
    name: "Solo Brands",
    subtext: "Three brands, one platform",
    summary:
      "Designed the shared architecture and component library that lets three brands ship from a single codebase.",
    role: "Developer at Form Factory (agency).",
    contributions: [
      "Designed the shared architecture that lets three DTC brands ship from a single codebase.",
      "Built a shared component library, reducing duplication and simplifying maintenance across brands.",
      "Integrated CMS content and Shopify metaobjects so each brand manages its own content on one platform.",
    ],
    facts: [
      { label: "Architecture", value: "3 brands, 1 codebase" },
      { label: "UI", value: "Shared component library" },
    ],
    media: {
      type: "video",
      src: "/videos/solo-brands-highlights.mp4",
      alt: "A surfboard, a kayak, shorts and a t-shirt fly into a small shop that turns into one web page, which becomes three differently themed brand storefronts sharing the same components from one codebase.",
    },
    tech: ["Shopify Hydrogen", "React", "TypeScript", "Metaobjects"],
    links: [{ label: "Visit site", href: "https://solobrands.com/" }],
  },
  {
    slug: "corza",
    kind: "client",
    name: "Corza",
    subtext: "B2B surgical & medical supply",
    summary:
      "Turned complex purchasing requirements into a clear B2B ordering experience, backed by CI/CD, tests and documentation.",
    role: "Developer at Form Factory (agency).",
    contributions: [
      "Turned complex purchasing requirements into a clear, usable ordering experience.",
      "Set up the CI/CD pipeline, test coverage and technical documentation for a large B2B codebase.",
      "Introduced AI-assisted development workflows, standardizing how the team builds, tests and ships.",
    ],
    facts: [
      { label: "Platform", value: "Shopify Hydrogen B2B" },
      { label: "Quality", value: "CI/CD, tests and docs" },
    ],
    media: {
      type: "video",
      src: "/videos/corza-highlights.mp4",
      alt: "A paper procedures binder becomes AI-readable docs, a tested architecture and an approved B2B surgical-supply order.",
    },
    tech: ["React", "Shopify Hydrogen (B2B)", "CI/CD", "Testing"],
    links: [{ label: "Visit site", href: "https://corza.com/global/" }],
  },
  {
    slug: "dyedem",
    kind: "side",
    name: "DyeDem",
    subtext: "Artist booking platform",
    period: "Sep 2025 – Present",
    summary:
      "An artist booking platform with portfolio management and cross-posting tools for marketing.",
    role: "Creator & full stack developer.",
    contributions: [
      "Built an artist booking platform with portfolio management and cross-posting tools for marketing.",
      "Developed on the MERN stack with PostgreSQL, a vector database and WebSockets for real-time updates.",
    ],
    facts: [
      { label: "Status", value: "In development, owned end to end" },
      { label: "Real-time", value: "WebSockets" },
    ],
    tech: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "PostgreSQL",
      "Vector database",
      "WebSockets",
    ],
    links: [],
  },
  {
    slug: "daily-dose",
    kind: "side",
    name: "Daily Dose: Shift Planner",
    subtext: "Productivity app",
    period: "May 2026 – Present",
    summary:
      "A productivity app for planning and tracking work shifts, with native Android and iOS clients on a serverless Cloudflare backend.",
    role: "Creator & mobile developer.",
    contributions: [
      "Built a productivity app for planning and tracking work shifts, with native Android (Kotlin) and iOS (SwiftUI) clients.",
      "Runs on a serverless Cloudflare backend (Workers, D1 and the wider platform) for fast, low-cost delivery.",
    ],
    facts: [
      { label: "Clients", value: "Native Android and iOS" },
      { label: "Backend", value: "Serverless on Cloudflare" },
    ],
    tech: ["Kotlin", "SwiftUI", "Cloudflare Workers", "D1"],
    links: [],
  },
];

export const clientProjects = projects.filter((p) => p.kind === "client");
export const sideProjects = projects.filter((p) => p.kind === "side");

/*
 * Sites shown in the "Other brands" carousel. Logos live in public/logos/ as 128×128 PNGs
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

/*
 * Skill groups, most important first. The first `openSkillGroups` show by default;
 * the rest sit behind "More skills".
 */
export const openSkillGroups = 4;

export const skills: SkillGroup[] = [
  {
    category: "Full Stack",
    glow: "blue",
    items: [
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript (ES6+)", icon: "javascript" },
      { name: "React", icon: "react" },
      { name: "Next.js (App Router)", icon: "nextjs" },
      { name: "Remix", icon: "remix" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "Fastify", icon: "fastify" },
      { name: "NestJS", icon: "nestjs" },
      { name: "Python", icon: "python" },
    ],
  },
  {
    category: "AI Engineering",
    glow: "purple",
    items: [
      { name: "OpenAI SDK", mono: "OAI" },
      { name: "Claude SDK", icon: "claude" },
      { name: "Vercel AI SDK", icon: "vercel" },
      { name: "Tool-calling agents", icon: "workflow" },
      { name: "RAG", mono: "RAG" },
      { name: "Vector databases", mono: "VEC" },
      { name: "Structured outputs", mono: "{ }" },
      { name: "Evaluations", mono: "EVAL" },
      { name: "Human approval steps", icon: "consent" },
      { name: "MCP", icon: "mcp" },
    ],
  },
  {
    category: "Data & Architecture",
    glow: "green",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Supabase", icon: "supabase" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
      { name: "Redis", icon: "redis" },
      { name: "Multi-tenant & role-based access", mono: "RBAC" },
      { name: "Microservices", mono: "μS" },
      { name: "Queues & background jobs", mono: "JOBS" },
      { name: "WebSockets", mono: "WS" },
    ],
  },
  {
    category: "Commerce",
    glow: "orange",
    items: [
      { name: "Shopify Plus", icon: "shopify" },
      { name: "Hydrogen & Oxygen", mono: "H₂" },
      { name: "Liquid", mono: "{%}" },
      { name: "Online Store 2.0", mono: "2.0" },
      { name: "Checkout Extensibility", mono: "CX" },
      { name: "Functions", mono: "ƒ" },
      { name: "Custom apps", mono: "APP" },
      { name: "App Bridge & Polaris", mono: "UI" },
      { name: "3PL & multi-warehouse", mono: "3PL" },
      { name: "i18n & multi-currency", mono: "i18n" },
    ],
  },
  {
    category: "Integrations & Growth",
    glow: "cyan",
    items: [
      { name: "REST", icon: "rest" },
      { name: "GraphQL", icon: "graphql" },
      { name: "Webhooks", icon: "webhooks" },
      { name: "OAuth / JWT", icon: "jwt" },
      { name: "Stripe", icon: "stripe" },
      { name: "Klaviyo", mono: "K" },
      { name: "HubSpot", icon: "hubspot" },
      { name: "GoHighLevel", mono: "GHL" },
      { name: "Twilio", mono: "TW" },
      { name: "Meta Conversions API", icon: "meta" },
      { name: "Server-side tracking", icon: "tracking" },
      { name: "GA4", icon: "googleanalytics" },
      { name: "GTM", icon: "googletagmanager" },
      { name: "A/B testing (Intelligems, Convert)", mono: "A/B" },
    ],
  },
  {
    category: "Performance & Quality",
    glow: "pink",
    items: [
      { name: "Core Web Vitals", mono: "CWV" },
      { name: "Lighthouse", icon: "lighthouse" },
      { name: "Accessibility (WCAG, 508)", icon: "accessibility" },
      { name: "Jest", icon: "jest" },
      { name: "Vitest", icon: "vitest" },
      { name: "Playwright", mono: "PW" },
      { name: "React Testing Library", icon: "testinglibrary" },
      { name: "TDD", mono: "TDD" },
    ],
  },
  {
    category: "Mobile",
    glow: "teal",
    items: [
      { name: "Kotlin (Android)", icon: "kotlin" },
      { name: "SwiftUI (iOS)", icon: "swift" },
      { name: "Ionic", icon: "ionic" },
      { name: "Quasar", icon: "quasar" },
    ],
  },
  {
    category: "DevOps & Cloud",
    glow: "indigo",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "CI/CD", icon: "cicd" },
      { name: "AWS / GCP", icon: "cloud" },
      { name: "Vercel", icon: "vercel" },
      { name: "Netlify", icon: "netlify" },
      { name: "Cloudflare Workers & D1", icon: "cloudflare" },
      { name: "Sentry", icon: "sentry" },
      { name: "Logging, monitoring & backups", icon: "monitoring" },
    ],
  },
  {
    category: "Leadership & AI Tools",
    glow: "yellow",
    items: [
      { name: "Codebase architecture", icon: "architecture" },
      { name: "Scoping & estimates", icon: "scoping" },
      { name: "Team standards", icon: "standards" },
      { name: "Code review", icon: "codereview" },
      { name: "Mentoring", icon: "mentoring" },
      { name: "Claude Code", icon: "claude" },
      { name: "Cursor", icon: "cursor" },
      { name: "GitHub Copilot", icon: "copilot" },
    ],
  },
];

/* Shopify Plus migrations shown as a badge row above the skills. */
export const migrations: string[] = [
  "checkout.liquid → Checkout Extensibility",
  "Scripts → Functions",
  "Pixels → server-side tracking",
  "Liquid → headless Hydrogen",
];

/* "What I do" capability cards. */
export const keySkills: KeySkill[] = [
  {
    title: "Full-stack products",
    description:
      "Next.js and React frontends with Node.js/Express and Python services, PostgreSQL schemas, authentication, multi-tenant and role-based access, queues, background jobs and WebSockets.",
  },
  {
    title: "AI agents & automation",
    description:
      "Agents built with the OpenAI, Claude and Vercel AI SDKs, using tool calling, RAG with vector databases, structured outputs and evaluations, with human approval steps before agents act. Also MCP integrations.",
  },
  {
    title: "Shopify Plus & headless commerce",
    description:
      "Liquid and Online Store 2.0 themes, Hydrogen/Oxygen headless builds, custom apps (App Bridge, Polaris), Functions, Checkout Extensibility, multi-store and multi-currency setups, 3PL and multi-warehouse integrations.",
  },
  {
    title: "Performance, CRO & tracking",
    description:
      "Core Web Vitals and Lighthouse work, A/B testing with Intelligems and Convert, server-side tracking (Meta Conversions API, GA4, GTM), and CRM integrations (HubSpot, GoHighLevel, Klaviyo, Twilio).",
  },
];

/* "How I work": ownership and leadership signals. */
export const howIWork: KeySkill[] = [
  {
    title: "Client scoping",
    description:
      "I scope work directly with clients, turn requirements into technical plans and estimates, and own delivery through to production.",
  },
  {
    title: "Codebase architecture",
    description:
      "I set the architecture for multi-store and multi-brand platforms, like five Turtle Beach stores and three Solo Brands storefronts on one codebase each.",
  },
  {
    title: "Team standards & code review",
    description:
      "I set coding standards for the team, review code and keep conventions consistent so delivery stays smooth.",
  },
  {
    title: "Mentoring",
    description:
      "I mentor developers through code review and technical documentation that makes large codebases easier to onboard into.",
  },
  {
    title: "Solo delivery",
    description:
      "I've delivered several projects solo, from first commit to launch.",
  },
  {
    title: "Reliable pipelines",
    description:
      "CI/CD, test coverage and AI-assisted workflows that shorten build and deploy times and keep releases predictable.",
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
