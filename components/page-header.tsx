import type { ReactNode } from "react";

/** Shared formal page header: small red label, title, and intro text. */
export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="max-w-2xl">
      <p className="text-sm font-medium text-brand-red">{eyebrow}</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">{title}</h1>
      {children && (
        <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">{children}</p>
      )}
    </header>
  );
}

/** Section heading used inside pages. */
export function SectionHeading({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-xl font-semibold tracking-tight text-text-primary sm:text-2xl">{title}</h2>
      {children && <p className="mt-2 text-sm leading-relaxed text-text-secondary sm:text-base">{children}</p>}
    </div>
  );
}
