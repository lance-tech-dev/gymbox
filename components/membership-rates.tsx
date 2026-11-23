"use client";

import { CardCarousel } from "@/components/card-carousel";
import { useSignedIn } from "@/lib/use-signed-in";
import Link from "next/link";
import {
  MEMBERSHIP_PLANS,
  PLAN_INCLUSIONS,
  formatPeso,
  promoSavings,
  type MembershipPlan,
} from "@/lib/gym-info";

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" aria-hidden="true">
      <path d="m3.5 8.5 3 3 6-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RateCard({ plan, signedIn }: { plan: MembershipPlan; signedIn: boolean | null }) {
  const savings = promoSavings(plan, "regular");
  const features = [...PLAN_INCLUSIONS, ...(plan.perks ?? [])];

  return (
    <article
      aria-labelledby={`plan-${plan.id}`}
      className={`flex h-full flex-col rounded-xl border bg-surface-card p-6 sm:p-7 ${
        plan.highlight ? "border-brand-red/60 ring-1 ring-brand-red/20" : "border-border"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 id={`plan-${plan.id}`} className="text-base font-semibold text-text-primary">
          {plan.name}
        </h3>
        {plan.highlight && (
          <span className="rounded-full bg-brand-red/10 px-2.5 py-0.5 text-xs font-medium text-brand-red">
            Best value
          </span>
        )}
      </div>

      <p className="mt-5 flex items-baseline gap-1.5">
        <span className="text-4xl font-bold tracking-tight text-text-primary">
          {formatPeso(plan.prices.regular)}
        </span>
        <span className="text-sm text-text-muted">{plan.period}</span>
      </p>

      <p className="mt-3 flex items-center justify-between rounded-lg bg-surface px-3 py-2 text-sm">
        <span className="text-text-secondary">Student rate</span>
        <span className="font-semibold text-text-primary">{formatPeso(plan.prices.student)}</span>
      </p>

      <p className="mt-3 min-h-5 text-xs text-text-muted">
        {savings > 0 ? `Save ${formatPeso(savings)} compared to paying monthly` : ""}
      </p>

      <ul className="mt-5 space-y-3 border-t border-border pt-5 text-sm text-text-secondary">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <CheckIcon />
            {feature}
          </li>
        ))}
      </ul>

      {/* Signed-in members are already registered, so no sign-up button.
          While the session is still unknown it stays invisible to avoid a flash. */}
      {signedIn !== true && (
        <div
          className={`mt-auto pt-7 ${signedIn === null ? "invisible" : ""}`}
          aria-hidden={signedIn === null}
        >
          <Link
            tabIndex={signedIn === null ? -1 : undefined}
            href="/register"
            className={`inline-flex h-11 w-full items-center justify-center rounded-lg text-sm font-medium transition-colors ${
              plan.highlight
                ? "bg-brand-red text-white hover:bg-brand-red-dark"
                : "border border-border text-text-primary hover:bg-surface-hover"
            }`}
          >
            Join now
          </Link>
        </div>
      )}
    </article>
  );
}

/**
 * Membership rate cards: a swipeable carousel on phones, a 3-column grid from md up.
 */
export function MembershipRates() {
  const signedIn = useSignedIn();

  return (
    <CardCarousel label="Membership plans" gridClassName="md:grid-cols-3">
      {MEMBERSHIP_PLANS.map((plan) => (
        <RateCard key={plan.id} plan={plan} signedIn={signedIn} />
      ))}
    </CardCarousel>
  );
}
