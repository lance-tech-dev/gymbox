import type { ReactNode } from "react";
import type { FeatureCard as FeatureCardData, IconName } from "@/lib/site-content";

const ICONS: Record<IconName, ReactNode> = {
  seedling: <path d="M12 20v-8m0 0c0-4 3-7 7-7 0 4-3 7-7 7Zm0 0C12 8.5 9.5 6 6 6c0 3.5 2.5 6 6 6Z" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20v-.5A5.5 5.5 0 0 1 8 14h2a5.5 5.5 0 0 1 5.5 5.5v.5M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20v-.5a5.5 5.5 0 0 0-3.5-5.1" />
    </>
  ),
  wallet: (
    <>
      <path d="M3 7a2 2 0 0 1 2-2h13v4" />
      <path d="M3 7v11a2 2 0 0 0 2 2h15V9H5a2 2 0 0 1-2-2Z" />
      <circle cx="16" cy="14.5" r="1" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="15" r="4" />
      <path d="m11 12 9-9m-3 3 2 2m-5 1 2 2" />
    </>
  ),
  droplet: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />,
  dumbbell: <path d="M6 5v14M18 5v14M3 9v6M21 9v6M6 12h12" />,
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />,
  flame: <path d="M12 21a6 6 0 0 0 6-6c0-4-3-6-4-9-1 2-2 3-3 3 0-2-1-4-2-5-1 4-3 6-3 11a6 6 0 0 0 6 6Z" />,
  spark: <path d="M12 3v4m0 10v4M3 12h4m10 0h4M5.6 5.6l2.8 2.8m7.2 7.2 2.8 2.8m0-12.8-2.8 2.8M8.4 15.6l-2.8 2.8" />,
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
};

export function FeatureIcon({ name }: { name: IconName }) {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        {ICONS[name]}
      </svg>
    </span>
  );
}

/** Clean card with an icon, title, description, and optional tag. */
export function FeatureCard({ card }: { card: FeatureCardData }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-surface-card p-6">
      <div className="flex items-start justify-between gap-3">
        <FeatureIcon name={card.icon} />
        {card.tag && (
          <span className="rounded-full bg-surface px-2.5 py-0.5 text-xs font-medium text-text-secondary">
            {card.tag}
          </span>
        )}
      </div>
      <h3 className="mt-5 text-base font-semibold text-text-primary">{card.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">{card.description}</p>
    </article>
  );
}
