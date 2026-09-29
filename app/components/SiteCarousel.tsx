import { useEffect, useRef, type FocusEvent } from "react";
import type { Site } from "~/data/resume";

const SPEED = 90; // auto-scroll speed in px/second while not hovered
const STEP = 300; // px moved per arrow-button click

function SiteTile({ site, hidden = false }: { site: Site; hidden?: boolean }) {
  return (
    <li aria-hidden={hidden || undefined} className="pr-4">
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

function ArrowButton({ direction, onClick }: { direction: "prev" | "next"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Scroll projects left" : "Scroll projects right"}
      className="flex size-10 shrink-0 cursor-pointer items-center justify-center border-2 border-border bg-surface text-heading transition-colors hover:border-primary hover:text-primary"
    >
      <svg viewBox="0 0 24 24" aria-hidden className={`size-5 ${direction === "prev" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 6 6 6-6 6" />
      </svg>
    </button>
  );
}

/*
 * Infinite, script-driven marquee: the list is rendered twice and its offset wraps at half
 * the track width, so the loop is seamless. Auto-scrolls while not hovered/focused; the
 * arrow buttons glide it one STEP either way. With reduced motion there is no auto-scroll,
 * but the arrows still work.
 */
export function SiteCarousel({ sites }: { sites: Site[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const pos = useRef(0); // rendered offset (px)
  const target = useRef(0); // offset being eased toward
  const paused = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let last = performance.now();

    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      if (!paused.current && !reduceMotion.matches) target.current += SPEED * dt;
      pos.current += (target.current - pos.current) * Math.min(1, dt * 8);

      const loop = track.scrollWidth / 2;
      if (loop > 0) {
        const x = ((pos.current % loop) + loop) % loop;
        track.style.transform = `translate3d(${-x}px, 0, 0)`;
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  const nudge = (direction: 1 | -1) => {
    target.current += direction * STEP;
  };
  const onBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) paused.current = false;
  };

  return (
    <div
      className="flex items-center gap-2 sm:gap-3"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onFocus={() => (paused.current = true)}
      onBlur={onBlur}
    >
      <ArrowButton direction="prev" onClick={() => nudge(-1)} />
      <div className="-my-3 min-w-0 flex-1 overflow-hidden py-3 mask-x-from-90% mask-x-to-100%">
        <ul ref={trackRef} className="flex w-max will-change-transform">
          {sites.map((site) => (
            <SiteTile key={site.url} site={site} />
          ))}
          {sites.map((site) => (
            <SiteTile key={`${site.url}-copy`} site={site} hidden />
          ))}
        </ul>
      </div>
      <ArrowButton direction="next" onClick={() => nudge(1)} />
    </div>
  );
}
