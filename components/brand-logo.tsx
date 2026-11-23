/**
 * Placeholder Gymbox logo: a red "G" mark, divider, and wordmark.
 * Swap the mark for the real Gymbox logo when it's ready.
 */

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`flex aspect-square items-center justify-center rounded-lg bg-brand-red font-black text-white ${className}`}
    >
      G
    </span>
  );
}

const LOGO_SIZES = {
  md: { mark: "h-9 text-lg", divider: "h-8", name: "text-[17px]", tagline: "mt-1 text-[9px]" },
  lg: { mark: "h-12 text-2xl", divider: "h-11", name: "text-[23px]", tagline: "mt-1.5 text-[11px]" },
} as const;

export function BrandLogo({
  className = "",
  size = "md",
  tagline = "Fitness",
  textClassName = "",
}: {
  className?: string;
  size?: keyof typeof LOGO_SIZES;
  /** Extra classes for the divider + wordmark (e.g. to fade them out). */
  textClassName?: string;
  /** Second line under GYMBOX, letter-spaced to the wordmark's width. */
  tagline?: string;
}) {
  const s = LOGO_SIZES[size];

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <BrandMark className={`${s.mark} shrink-0`} />
      <span className={`flex items-center gap-3 ${textClassName}`}>
        <span aria-hidden="true" className={`${s.divider} w-px shrink-0 bg-text-primary/70`} />
        <span className="flex flex-col leading-none">
          <span className={`${s.name} font-black tracking-[0.06em] text-text-primary transition-colors group-hover:text-brand-red`}>
            GYMBOX
          </span>
          <span className="sr-only">{tagline}</span>
          <span aria-hidden="true" className={`${s.tagline} flex justify-between font-bold text-text-secondary`}>
            {tagline.toUpperCase().split("").map((letter, i) => (
              <span key={i}>{letter}</span>
            ))}
          </span>
        </span>
      </span>
    </span>
  );
}
