import Image from "next/image";

/**
 * GymBox logo: the red cube/dumbbell icon, a divider, and the wordmark.
 * The icon lives at /public/logo-icon.png.
 */

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo-icon.png"
      alt=""
      aria-hidden="true"
      width={512}
      height={512}
      priority
      className={`aspect-square ${className}`}
    />
  );
}

const LOGO_SIZES = {
  md: { mark: "h-9 w-9", divider: "h-8", name: "text-[17px]", tagline: "mt-1 text-[9px]" },
  lg: { mark: "h-12 w-12", divider: "h-11", name: "text-[23px]", tagline: "mt-1.5 text-[11px]" },
} as const;

export function BrandLogo({
  className = "",
  size = "md",
  tagline = "Fitness Center",
  textClassName = "",
}: {
  className?: string;
  size?: keyof typeof LOGO_SIZES;
  /** Extra classes for the divider + wordmark (e.g. to fade them out). */
  textClassName?: string;
  /** Second line under GYMBOX, e.g. "Fitness Center". */
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
          <span className={`${s.tagline} whitespace-nowrap font-semibold uppercase tracking-[0.14em] text-text-secondary`}>
            {tagline}
          </span>
        </span>
      </span>
    </span>
  );
}
