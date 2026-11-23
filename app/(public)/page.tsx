import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { HeroActions, ClosingActions } from "@/components/auth-aware-actions";
import { LocationMap } from "@/components/location-map";
import { MembershipRates } from "@/components/membership-rates";
import { GYM_INFO, MEMBERSHIP_PLANS, formatPeso } from "@/lib/gym-info";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Gymbox is your neighborhood gym. Affordable rates, complete equipment, friendly coaches, and a welcoming community.",
};

export default function HomePage() {
  return (
    <main className="relative flex flex-col items-center overflow-hidden">
      {/* =========================================================================
          SECTION 1: HERO & GYM BOX BANNER
          ========================================================================= */}
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="relative flex w-full flex-col items-center px-4 pb-20 pt-40 sm:px-6 sm:pb-24 sm:pt-52 lg:px-8"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* GYM BOX banner: plain text in theme tokens, so it adapts to light & dark mode */}
          <h1
            id="hero-heading"
            className="text-[clamp(4.5rem,19vw,12rem)] font-black uppercase leading-[0.85] tracking-[-0.045em] text-text-primary"
          >
            Gym <span className="text-brand-red">Box</span>
          </h1>

          {/* Sub header */}
          <p className="mt-6 font-mono text-xs font-semibold uppercase tracking-[0.32em] text-text-secondary sm:text-sm">
            Your Neighborhood Fitness Gym
          </p>

          {/* Tagline */}
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Train hard, pay less, and feel at home. Complete equipment, friendly coaches,
            and a community that has your back.
          </p>

          {/* Call to Action Buttons */}
          <HeroActions />

          {/* Friendly Perks Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-text-secondary">
            <span className="flex items-center gap-1.5">
              <span className="text-brand-red">✓</span> Daily from {formatPeso(MEMBERSHIP_PLANS[0].prices.student)}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-brand-red">✓</span> Monthly from {formatPeso(MEMBERSHIP_PLANS[1].prices.student)}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-brand-red">✓</span> All-Access
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-brand-red">✓</span> Free Drinking Water
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHY GYMBOX (section anchor for navbar scroll-highlight)
          ========================================================================= */}
      <section
        id="about"
        aria-labelledby="why-heading"
        className="w-full border-t border-border bg-surface/50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="default" size="sm" className="mb-4">
              Why Choose Us
            </Badge>
            <h2
              id="why-heading"
              className="text-3xl font-black uppercase tracking-tight text-text-primary sm:text-4xl lg:text-5xl"
            >
              A Real Gym for Real People<span className="text-brand-red">.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
              You don&apos;t need an expensive membership to get fit. At Gymbox, everyone trains
              together and helps each other reach their goals.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Highlight 1: Affordable */}
            <div className="relative flex flex-col justify-between rounded-xl border border-border bg-surface-card p-6 shadow-card transition-colors hover:border-brand-red/50">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-red/10 font-bold text-brand-red">
                  ₱
                </div>
                <h3 className="mt-5 text-lg font-black uppercase text-text-primary">
                  Affordable Rates
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  Honest neighborhood pricing with student rates on every plan. Pay daily, monthly,
                  or save with the 3-month promo.
                </p>
              </div>
              <div className="mt-6 border-t border-border pt-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                From {formatPeso(MEMBERSHIP_PLANS[0].prices.student)} / day
              </div>
            </div>

            {/* Highlight 2: Equipment */}
            <div className="relative flex flex-col justify-between rounded-xl border border-border bg-surface-card p-6 shadow-card transition-colors hover:border-brand-red/50">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden="true">
                    <path d="M6 5v14M18 5v14M3 9v6M21 9v6M6 12h12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-black uppercase text-text-primary">
                  Complete Equipment
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  Power racks, Olympic barbells, calibrated iron plates, dumbbells up to 100
                  lbs, cables, and open functional turf.
                </p>
              </div>
              <div className="mt-6 border-t border-border pt-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                Heavy Iron &amp; Turf
              </div>
            </div>

            {/* Highlight 3: Coaches */}
            <div className="relative flex flex-col justify-between rounded-xl border border-border bg-surface-card p-6 shadow-card transition-colors hover:border-brand-red/50">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-black uppercase text-text-primary">
                  Friendly Coaches
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  Approachable coaches who are always ready to spot you, check your form, and
                  guide you at no extra charge.
                </p>
              </div>
              <div className="mt-6 border-t border-border pt-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                Free Form Checks
              </div>
            </div>

            {/* Highlight 4: Open Hours */}
            <div className="relative flex flex-col justify-between rounded-xl border border-border bg-surface-card p-6 shadow-card transition-colors hover:border-brand-red/50">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-black uppercase text-text-primary">
                  Open 6 Days a Week
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  Open Monday to Saturday from 8:00 AM to 9:00 PM. Drop by any time within those
                  hours. Closed on Sundays.
                </p>
              </div>
              <div className="mt-6 border-t border-border pt-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                Mon – Sat · 8:00 AM – 9:00 PM
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PROGRAMS & EQUIPMENT (section anchor for navbar scroll-highlight)
          ========================================================================= */}
      <section
        id="activities"
        aria-labelledby="programs-heading"
        className="w-full border-t border-border px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="default" size="sm" className="mb-4">
              Facilities &amp; Programs
            </Badge>
            <h2
              id="programs-heading"
              className="text-3xl font-black uppercase tracking-tight text-text-primary sm:text-4xl lg:text-5xl"
            >
              Built for Every Fitness Goal<span className="text-brand-red">.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
              Whether you&apos;re new to lifting or already training heavy, we have everything you
              need to keep progressing.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {/* Program 1 */}
            <div className="flex flex-col rounded-2xl border border-border bg-surface-card p-6 shadow-card transition-colors hover:border-border-strong sm:p-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-red">
                  01 · Strength Training
                </span>
                <span className="text-xs text-text-muted">Free Weights</span>
              </div>
              <h3 className="mt-3 text-2xl font-black uppercase text-text-primary">
                Free Weights &amp; Power Racks
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                Multiple commercial power cages, Olympic barbells, calibrated cast iron plates,
                flat and incline benches, and dumbbells from 5 to 100 lbs for bench
                press, squats, and deadlifts.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-text-secondary">
                <li className="rounded-md bg-surface px-3 py-1.5 border border-border">Power Racks</li>
                <li className="rounded-md bg-surface px-3 py-1.5 border border-border">Olympic Barbells</li>
                <li className="rounded-md bg-surface px-3 py-1.5 border border-border">Dumbbells up to 100 lbs</li>
              </ul>
            </div>

            {/* Program 2 */}
            <div className="flex flex-col rounded-2xl border border-border bg-surface-card p-6 shadow-card transition-colors hover:border-border-strong sm:p-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-red">
                  02 · Cardio &amp; Stamina
                </span>
                <span className="text-xs text-text-muted">Endurance</span>
              </div>
              <h3 className="mt-3 text-2xl font-black uppercase text-text-primary">
                Cardio Machines &amp; Conditioning
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                Commercial treadmills with incline, stationary bikes, air bikes, and rowing
                machines to build endurance and burn calories.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-text-secondary">
                <li className="rounded-md bg-surface px-3 py-1.5 border border-border">Treadmills</li>
                <li className="rounded-md bg-surface px-3 py-1.5 border border-border">Assault Air Bikes</li>
                <li className="rounded-md bg-surface px-3 py-1.5 border border-border">Rowers</li>
              </ul>
            </div>

            {/* Program 3 */}
            <div className="flex flex-col rounded-2xl border border-border bg-surface-card p-6 shadow-card transition-colors hover:border-border-strong sm:p-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-red">
                  03 · Functional &amp; Turf
                </span>
                <span className="text-xs text-text-muted">Mobility</span>
              </div>
              <h3 className="mt-3 text-2xl font-black uppercase text-text-primary">
                Functional Fitness &amp; Turf Lane
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                A synthetic turf lane for sled pushes, plus battle ropes, kettlebells, jump boxes,
                and medicine balls. Perfect for athletic drills and HIIT.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-text-secondary">
                <li className="rounded-md bg-surface px-3 py-1.5 border border-border">Turf Lane</li>
                <li className="rounded-md bg-surface px-3 py-1.5 border border-border">Battle Ropes</li>
                <li className="rounded-md bg-surface px-3 py-1.5 border border-border">Kettlebells</li>
              </ul>
            </div>

            {/* Program 4 */}
            <div className="flex flex-col rounded-2xl border border-border bg-surface-card p-6 shadow-card transition-colors hover:border-border-strong sm:p-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-red">
                  04 · Boxing &amp; Bags
                </span>
                <span className="text-xs text-text-muted">High Energy</span>
              </div>
              <h3 className="mt-3 text-2xl font-black uppercase text-text-primary">
                Boxing Bags &amp; Strike Area
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                Heavy bags, a speed bag station, jump ropes, and open mat space for shadow boxing
                and mitt work. Great for stress relief, fat burn, and faster reflexes.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-text-secondary">
                <li className="rounded-md bg-surface px-3 py-1.5 border border-border">Heavy Bags</li>
                <li className="rounded-md bg-surface px-3 py-1.5 border border-border">Speed Bag Station</li>
                <li className="rounded-md bg-surface px-3 py-1.5 border border-border">Mitt Drills Space</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: MEMBERSHIP RATES (section anchor for navbar scroll-highlight)
          ========================================================================= */}
      <section
        id="promo"
        aria-labelledby="rates-heading"
        className="w-full border-t border-border bg-surface/50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="default" size="sm" className="mb-4">
              Membership Rates
            </Badge>
            <h2
              id="rates-heading"
              className="text-3xl font-black uppercase tracking-tight text-text-primary sm:text-4xl lg:text-5xl"
            >
              Simple, Affordable Rates<span className="text-brand-red">.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
              Train daily, monthly, or grab the 3-month promo for the best value. Student rates
              available on every plan.
            </p>
          </div>

          <div className="mt-14">
            <MembershipRates />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: LOCATION (section anchor for navbar scroll-highlight)
          ========================================================================= */}
      <section
        id="location"
        aria-labelledby="location-heading"
        className="w-full border-t border-border px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="default" size="sm" className="mb-4">
              Location
            </Badge>
            <h2
              id="location-heading"
              className="text-3xl font-black uppercase tracking-tight text-text-primary sm:text-4xl lg:text-5xl"
            >
              Come Train With Us<span className="text-brand-red">.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
              Find {GYM_INFO.name} on the map and get directions straight to the gym.
            </p>
          </div>

          <LocationMap className="mt-12 h-72 sm:h-96" />

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={GYM_INFO.location.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-brand-red px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
            >
              Get Directions
            </a>
            <Link
              href="/location"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-border px-5 text-sm font-semibold text-text-primary transition-colors hover:border-border-strong hover:bg-surface-hover"
            >
              Location Details
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: FINAL CALL TO ACTION
          ========================================================================= */}
      <section className="w-full border-t border-border px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface-card px-6 py-12 text-center sm:px-12 sm:py-14">
          <span
            aria-hidden="true"
            className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/10 text-brand-red"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <circle cx="12" cy="12" r="9" />
              <path d="M8.5 14.5a4.5 4.5 0 0 0 7 0M9 9.5h.01M15 9.5h.01" />
            </svg>
          </span>

          <h2 className="mt-6 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
            Everyone starts somewhere
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-secondary">
            Whether it&apos;s your first time in a gym or you&apos;re getting back into it,
            you&apos;ll find friendly faces and a relaxed space to train at your own pace.
            Come as you are. We&apos;ll be happy to see you.
          </p>

          <ClosingActions />

          <p className="mt-6 text-sm text-text-muted">
            Open Monday to Saturday, 8:00 AM – 9:00 PM. Just bring your shoes and a change of
            clothes.
          </p>
        </div>
      </section>
    </main>
  );
}
