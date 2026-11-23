import type { Metadata } from "next";
import Link from "next/link";
import { CardCarousel } from "@/components/card-carousel";
import { FeatureCard } from "@/components/feature-card";
import { PageHeader, SectionHeading } from "@/components/page-header";
import { ACTIVITIES, BEGINNER_TIPS } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Strength training, cardio, conditioning, and bodyweight workouts at GymBox, for beginners and regulars alike.",
};

export default function ActivitiesPage() {
  return (
    <main className="px-4 pb-20 pt-32 sm:px-6 sm:pt-36 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <PageHeader eyebrow="Activities" title="Find a workout that fits you">
          From your very first session to your next personal best, there&apos;s something for
          every goal and every level at GymBox.
        </PageHeader>

        <section aria-labelledby="activities-heading" className="mt-16">
          <h2 id="activities-heading" className="sr-only">
            What you can do at GymBox
          </h2>
          <CardCarousel label="Activities" gridClassName="md:grid-cols-2 lg:grid-cols-4">
            {ACTIVITIES.map((card) => (
              <FeatureCard key={card.title} card={card} />
            ))}
          </CardCarousel>
        </section>

        <section
          aria-labelledby="tips-heading"
          className="mt-20 grid gap-8 rounded-xl border border-border bg-surface-card p-6 sm:p-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12"
        >
          <div id="tips-heading">
            <SectionHeading title="New to the gym?">
              A few simple tips to help you start strong and stay consistent.
            </SectionHeading>
          </div>
          <ul className="space-y-3">
            {BEGINNER_TIPS.map((tip, i) => (
              <li key={tip} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-xs font-semibold text-brand-red">
                  {i + 1}
                </span>
                <span className="pt-0.5">{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/promo"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-brand-red px-5 text-sm font-medium text-white transition-colors hover:bg-brand-red-dark"
          >
            View rates
          </Link>
          <Link
            href="/location"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-border px-5 text-sm font-medium text-text-primary transition-colors hover:bg-surface-hover"
          >
            Find the gym
          </Link>
        </div>
      </div>
    </main>
  );
}
