import type { Metadata } from "next";
import Link from "next/link";
import { CardCarousel } from "@/components/card-carousel";
import { FeatureCard } from "@/components/feature-card";
import { PageHeader, SectionHeading } from "@/components/page-header";
import { ABOUT_HIGHLIGHTS, FIRST_VISIT_STEPS } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "GymBox is a beginner-friendly neighborhood gym with a welcoming community and affordable rates.",
};

export default function AboutPage() {
  return (
    <main className="px-4 pb-20 pt-32 sm:px-6 sm:pt-36 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <PageHeader eyebrow="About us" title="A gym that feels like home">
          GymBox is a neighborhood gym for everyone, whether it&apos;s your first workout or
          your hundredth. We keep things simple: a friendly place to train, fair prices, and
          people who make you want to come back.
        </PageHeader>

        <section aria-labelledby="why-heading" className="mt-16">
          <h2 id="why-heading" className="sr-only">
            Why train at GymBox
          </h2>
          <CardCarousel label="Why train at GymBox" gridClassName="md:grid-cols-2 lg:grid-cols-4">
            {ABOUT_HIGHLIGHTS.map((card) => (
              <FeatureCard key={card.title} card={card} />
            ))}
          </CardCarousel>
        </section>

        <section aria-labelledby="first-visit-heading" className="mt-20">
          <div id="first-visit-heading">
            <SectionHeading title="Your first visit">
              New to the gym? Here&apos;s how easy it is to get started.
            </SectionHeading>
          </div>

          <ol className="mt-8 grid gap-4 md:grid-cols-3 md:gap-6">
            {FIRST_VISIT_STEPS.map((step, i) => (
              <li key={step.title} className="flex gap-4 rounded-xl border border-border bg-surface-card p-6">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-red/40 text-sm font-semibold text-brand-red">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-text-primary">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-20 flex flex-col items-start justify-between gap-6 rounded-xl border border-border bg-surface-card p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h2 className="text-lg font-semibold text-text-primary">Ready to start?</h2>
            <p className="mt-1 text-sm text-text-secondary">
              See our plans or check out what you can do at GymBox.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/promo"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-brand-red px-5 text-sm font-medium text-white transition-colors hover:bg-brand-red-dark"
            >
              View rates
            </Link>
            <Link
              href="/activities"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-border px-5 text-sm font-medium text-text-primary transition-colors hover:bg-surface-hover"
            >
              See activities
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
