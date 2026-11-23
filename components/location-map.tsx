import { GYM_INFO } from "@/lib/gym-info";

/**
 * Embedded Google Map of the gym. In dark mode the map is inverted and
 * hue-rotated so it sits naturally on the dark theme instead of glaring white.
 */
export function LocationMap({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-border bg-surface ${className}`}>
      <iframe
        src={GYM_INFO.location.embedUrl}
        title={`Map showing the location of ${GYM_INFO.name}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full border-0 dark:[filter:invert(0.9)_hue-rotate(180deg)_saturate(0.8)]"
      />
    </div>
  );
}
