import { useEffect, useRef, useState } from "react";

/*
 * Silent, looping showcase film under the hero copy (public/videos/hero-showcase.*).
 * Plays muted after hydration, stays paused for reduced-motion users, and has a
 * pause/play toggle since it runs longer than 5 seconds.
 */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true; // React doesn't reliably render the muted attribute during SSR
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.play().catch(() => {}); // autoplay can still be blocked (e.g. data saver); the poster stays
  }, []);

  function toggle() {
    const video = ref.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  }

  return (
    <figure className="relative mt-14 border-2 border-t-4 border-border border-t-accent bg-bg">
      <video
        ref={ref}
        className="block aspect-video w-full"
        poster="/videos/hero-showcase-poster.jpg"
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Showcase: a storefront design becomes a fast Shopify product page, scales across brands and stores, then Mark Dylan Cosca's name and strengths."
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src="/videos/hero-showcase.webm" type="video/webm" />
        <source src="/videos/hero-showcase.mp4" type="video/mp4" />
      </video>

      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause showcase video" : "Play showcase video"}
        className="absolute right-3 bottom-3 flex size-10 cursor-pointer items-center justify-center border-2 border-border bg-surface text-heading transition-colors hover:border-primary hover:text-primary"
      >
        <svg viewBox="0 0 24 24" aria-hidden className="size-4" fill="currentColor">
          {playing ? (
            <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" />
          ) : (
            <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.2-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
          )}
        </svg>
      </button>
    </figure>
  );
}
