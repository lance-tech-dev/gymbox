"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Cards in a swipeable, snapping carousel with dots on phones, and a normal
 * grid from the `md` breakpoint up (`gridClassName` sets the columns).
 */
export function CardCarousel({
  children,
  label,
  gridClassName = "md:grid-cols-3",
}: {
  children: ReactNode;
  /** Accessible name for the carousel, e.g. "Membership plans". */
  label: string;
  gridClassName?: string;
}) {
  const items = Children.toArray(children);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Track which card is centred to highlight its dot.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const slides = Array.from(track.children) as HTMLElement[];
        const center = track.scrollLeft + track.clientWidth / 2;
        let closest = 0;
        slides.forEach((slide, i) => {
          const distance = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - center);
          const best = Math.abs(slides[closest].offsetLeft + slides[closest].offsetWidth / 2 - center);
          if (distance < best) closest = i;
        });
        setActive(closest);
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
    };
  }, []);

  function goTo(index: number) {
    const slide = trackRef.current?.children[index] as HTMLElement | undefined;
    slide?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }

  return (
    <div>
      <div
        ref={trackRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        className={`-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:gap-6 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden ${gridClassName}`}
      >
        {items.map((child, i) => (
          <div
            key={i}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${items.length}`}
            className="w-[85%] shrink-0 snap-center md:w-auto"
          >
            {child}
          </div>
        ))}
      </div>

      {/* Dots (phones only) */}
      <div className="mt-5 flex justify-center gap-2 md:hidden">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show card ${i + 1} of ${items.length}`}
            aria-current={active === i}
            className={`h-2 rounded-full transition-all ${
              active === i ? "w-6 bg-brand-red" : "w-2 bg-border-strong"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
