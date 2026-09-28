import type { Site } from "~/data/resume";

function SiteTile({ site, hidden = false }: { site: Site; hidden?: boolean }) {
  return (
    <li aria-hidden={hidden || undefined} className={`pr-4 ${hidden ? "motion-reduce:hidden" : ""}`}>
      <a
        href={site.url}
        target="_blank"
        rel="noreferrer"
        tabIndex={hidden ? -1 : undefined}
        className="group flex items-center gap-3 border-2 border-transparent py-2 pr-5 pl-2 transition duration-200 hover:-translate-y-1 hover:border-accent-2 hover:bg-surface hover:shadow-lg focus-visible:-translate-y-1 focus-visible:border-accent-2 focus-visible:bg-surface"
      >
        <img
          src={site.logo}
          alt=""
          width={48}
          height={48}
          loading="lazy"
          className="size-12 shrink-0 border border-border"
        />
        <span className="font-display font-semibold whitespace-nowrap text-heading group-hover:text-accent-2">
          {site.name}
        </span>
      </a>
    </li>
  );
}

/*
 * Infinite marquee: the list is rendered twice and shifted by -50%, so the loop is seamless.
 * Pauses on hover/focus; with reduced motion it becomes a static, wrapping list.
 */
export function SiteCarousel({ sites }: { sites: Site[] }) {
  return (
    <div className="group/marquee -my-3 overflow-hidden py-3 mask-x-from-90% mask-x-to-100% motion-reduce:mask-none">
      <ul className="flex w-max animate-marquee group-hover/marquee:[animation-play-state:paused] group-focus-within/marquee:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:gap-y-4">
        {sites.map((site) => (
          <SiteTile key={site.url} site={site} />
        ))}
        {sites.map((site) => (
          <SiteTile key={`${site.url}-copy`} site={site} hidden />
        ))}
      </ul>
    </div>
  );
}
