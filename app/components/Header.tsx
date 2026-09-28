import { Link } from "react-router";
import { profile } from "~/data/resume";

const nav = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-surface/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-4">
        <Link to="/" className="font-display text-lg font-bold tracking-tight text-heading">
          {profile.firstName} <span className="text-accent">{profile.lastName}</span>
        </Link>
        <nav>
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
