import { Link } from "react-router";
import { profile } from "~/data/resume";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { label: "Highlights", href: "/#highlights" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact Me", href: "/#contact", highlight: true },
];

const linkStyle = "transition-colors hover:text-primary";
const highlightStyle =
  "border-2 border-primary bg-primary px-4 py-1.5 text-primary-fg transition-colors hover:bg-transparent hover:text-primary";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-surface/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-4">
        <Link
          to="/"
          className="font-display text-lg font-bold tracking-tight text-heading"
        >
          {profile.firstName}{" "}
          <span className="text-accent">{profile.lastName}</span>
        </Link>
        <nav>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={item.highlight ? highlightStyle : linkStyle}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
