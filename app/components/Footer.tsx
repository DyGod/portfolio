import { fullName, links } from "~/data/resume";

export function Footer() {
  return (
    <footer className="border-t-2 border-accent bg-surface">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {fullName}
        </p>
        <ul className="flex gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer" className="hover:text-primary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
