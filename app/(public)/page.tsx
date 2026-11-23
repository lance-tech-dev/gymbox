import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BrandLogo } from "@/components/brand-logo";

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
        className="relative flex w-full flex-col items-center px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8"
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
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/register">
              <Button variant="primary" size="lg" className="min-w-40 shadow-card">
                Join Now
              </Button>
            </Link>
            <a href="#tab-4">
              <Button variant="outline" size="lg" className="min-w-40">
                View Rates
              </Button>
            </a>
          </div>

          {/* Friendly Perks Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-text-secondary">
            <span className="flex items-center gap-1.5">
              <span className="text-brand-red">✓</span> ₱60 Daily Walk-ins
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-brand-red">✓</span> ₱750 Student Monthly
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-brand-red">✓</span> Free Spotting &amp; Form Checks
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-brand-red">✓</span> No Annual Lock-in
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHY GYMBOX (Tab 2 anchor for scroll-highlight)
          ========================================================================= */}
      <section
        id="tab-2"
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
                  Honest neighborhood pricing. No registration fees and no annual lock-in
                  contract. Pay daily, monthly, or promo.
                </p>
              </div>
              <div className="mt-6 border-t border-border pt-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                From ₱60 / session
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
                  Open Every Day
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  Open 6:00 AM to 10:00 PM on weekdays and until evening on weekends, so it
                  fits any schedule.
                </p>
              </div>
              <div className="mt-6 border-t border-border pt-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                6:00 AM – 10:00 PM
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PROGRAMS & EQUIPMENT (Tab 3 anchor for scroll-highlight)
          ========================================================================= */}
      <section
        id="tab-3"
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
          SECTION 4: MEMBERSHIP RATES (Tab 4 anchor for scroll-highlight)
          ========================================================================= */}
      <section
        id="tab-4"
        aria-labelledby="rates-heading"
        className="w-full border-t border-border bg-surface/50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="default" size="sm" className="mb-4">
              Membership Rates
            </Badge>
            <h2
              id="rates-heading"
              className="text-3xl font-black uppercase tracking-tight text-text-primary sm:text-4xl lg:text-5xl"
            >
              Simple, Honest Rates<span className="text-brand-red">.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
              No hidden enrollment fees. Every plan includes full access to weights, cardio,
              lockers, and showers. Pick the one that fits your budget.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Rate 1: Walk-in */}
            <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface-card p-6 shadow-card transition-all hover:border-border-strong sm:p-7">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted">
                  No Commitment
                </span>
                <h3 className="mt-2 text-xl font-black uppercase text-text-primary">
                  Walk-In Pass
                </h3>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-text-primary">₱60</span>
                  <span className="text-xs text-text-secondary">/ day</span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                  Perfect for drop-ins, first-timers, or visitors.
                </p>

                <ul className="mt-6 space-y-2.5 text-xs text-text-secondary border-t border-border pt-5">
                  <li className="flex items-center gap-2">
                    <span className="text-brand-red">✓</span> Whole day gym access
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-red">✓</span> Free locker use during session
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-red">✓</span> Cold water refilling station
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-red">✓</span> Free spotting from coaches
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <Link href="/register" className="block w-full">
                  <Button variant="secondary" size="md" className="w-full">
                    Walk In Today
                  </Button>
                </Link>
              </div>
            </div>

            {/* Rate 2: Student Monthly */}
            <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface-card p-6 shadow-card transition-all hover:border-border-strong sm:p-7">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-red">
                  Discounted Rate
                </span>
                <h3 className="mt-2 text-xl font-black uppercase text-text-primary">
                  Student Monthly
                </h3>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-text-primary">₱750</span>
                  <span className="text-xs text-text-secondary">/ month</span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                  For high school and college students. Just bring a valid school ID.
                </p>

                <ul className="mt-6 space-y-2.5 text-xs text-text-secondary border-t border-border pt-5">
                  <li className="flex items-center gap-2">
                    <span className="text-brand-red">✓</span> Unlimited visits 7 days a week
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-red">✓</span> Full access to weights &amp; cardio
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-red">✓</span> Free locker &amp; shower use
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-red">✓</span> Free basic workout routine
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <Link href="/register" className="block w-full">
                  <Button variant="outline" size="md" className="w-full">
                    Get Student Pass
                  </Button>
                </Link>
              </div>
            </div>

            {/* Rate 3: Regular Monthly (BEST VALUE) */}
            <div className="relative flex flex-col justify-between rounded-2xl border-2 border-brand-red bg-surface-card p-6 shadow-elevated transition-all sm:p-7">
              {/* Best Value Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-brand-red px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
                  Best Value · Most Popular
                </span>
              </div>

              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-red">
                  Standard Access
                </span>
                <h3 className="mt-2 text-xl font-black uppercase text-text-primary">
                  Monthly Member
                </h3>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-text-primary">₱950</span>
                  <span className="text-xs text-text-secondary">/ month</span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                  Our most popular plan. Train every day with no limits.
                </p>

                <ul className="mt-6 space-y-2.5 text-xs text-text-secondary border-t border-border pt-5">
                  <li className="flex items-center gap-2">
                    <span className="text-brand-red">✓</span> Unlimited visits all operating hours
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-red">✓</span> 1 Free initial fitness assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-red">✓</span> 1 free guest pass per month
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-red">✓</span> Free locker &amp; hot/cold showers
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <Link href="/register" className="block w-full">
                  <Button variant="primary" size="md" className="w-full shadow-sm">
                    Join Monthly
                  </Button>
                </Link>
              </div>
            </div>

            {/* Rate 4: 3-Month Promo */}
            <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface-card p-6 shadow-card transition-all hover:border-border-strong sm:p-7">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted">
                  Save ₱350
                </span>
                <h3 className="mt-2 text-xl font-black uppercase text-text-primary">
                  3-Month Promo
                </h3>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-text-primary">₱2,500</span>
                  <span className="text-xs text-text-secondary">/ 3 mos</span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                  For members committed to long-term results. Only ₱833 per month.
                </p>

                <ul className="mt-6 space-y-2.5 text-xs text-text-secondary border-t border-border pt-5">
                  <li className="flex items-center gap-2">
                    <span className="text-brand-red">✓</span> 90 days continuous unlimited access
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-red">✓</span> 2 Free Personal Training intro sessions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-red">✓</span> Free Gymbox workout shaker or tee
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-red">✓</span> Freeze membership up to 14 days
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <Link href="/register" className="block w-full">
                  <Button variant="outline" size="md" className="w-full">
                    Claim 3-Month Promo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: GYM HOURS & LOCATION (Tab 5 anchor for scroll-highlight)
          ========================================================================= */}
      <section
        id="tab-5"
        aria-labelledby="hours-heading"
        className="w-full border-t border-border px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="default" size="sm" className="mb-4">
              Hours &amp; Location
            </Badge>
            <h2
              id="hours-heading"
              className="text-3xl font-black uppercase tracking-tight text-text-primary sm:text-4xl lg:text-5xl"
            >
              Right in Your Neighborhood<span className="text-brand-red">.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
              Easy to reach, close to public transport, and open every day.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* Hours Table & Contacts */}
            <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface-card p-6 shadow-card sm:p-8">
              <div>
                <h3 className="text-xl font-black uppercase text-text-primary">
                  Operating Hours
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  Open 7 days a week, including most public holidays.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl border border-border">
                  <table className="w-full text-left text-sm">
                    <tbody>
                      <tr className="border-b border-border bg-surface/50">
                        <td className="px-4 py-3 font-semibold text-text-primary">Monday – Friday</td>
                        <td className="px-4 py-3 font-mono text-brand-red font-bold">6:00 AM – 10:00 PM</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-4 py-3 font-semibold text-text-primary">Saturday</td>
                        <td className="px-4 py-3 font-mono text-text-secondary">7:00 AM – 9:00 PM</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-text-primary">Sunday &amp; Holidays</td>
                        <td className="px-4 py-3 font-mono text-text-secondary">8:00 AM – 6:00 PM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 border-t border-border pt-6">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted">
                    Contact &amp; Location Details (Sample Data)
                  </h4>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <dt className="w-20 font-semibold text-text-secondary">Address:</dt>
                      <dd className="text-text-primary font-medium">
                        Sample St. cor. Mabini Ave., Barangay 123, Quezon City
                      </dd>
                    </div>
                    <div className="flex items-start gap-3">
                      <dt className="w-20 font-semibold text-text-secondary">Phone:</dt>
                      <dd className="font-mono text-text-primary font-medium">0917 000 0000</dd>
                    </div>
                    <div className="flex items-start gap-3">
                      <dt className="w-20 font-semibold text-text-secondary">Landmark:</dt>
                      <dd className="text-text-primary">Across from the convenience store, beside the community hall</dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4 text-xs text-text-muted border-t border-border pt-4 font-mono">
                <span>Free parking for motorcycles and bikes</span>
              </div>
            </div>

            {/* Stylized Modern Location Map Placeholder */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-card sm:p-8">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-black uppercase text-text-primary">
                    Neighborhood Map
                  </h3>
                  <span className="font-mono text-xs font-bold uppercase text-brand-red">
                    Quezon City
                  </span>
                </div>
                <p className="mt-1 text-sm text-text-secondary">
                  5-minute walk from major jeepney and tricycle terminals.
                </p>

                {/* Aesthetic Graphic Map Container */}
                <div className="relative mt-6 flex h-64 w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-surface-card">
                  {/* Subtle map road grid */}
                  <svg
                    viewBox="0 0 400 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full opacity-60"
                    aria-hidden="true"
                  >
                    {/* Roads */}
                    <path d="M0 60 H400" stroke="currentColor" strokeWidth="14" className="text-border" />
                    <path d="M0 160 H400" stroke="currentColor" strokeWidth="20" className="text-border" />
                    <path d="M120 0 V240" stroke="currentColor" strokeWidth="16" className="text-border" />
                    <path d="M280 0 V240" stroke="currentColor" strokeWidth="12" className="text-border" />
                    <path d="M0 160 L400 60" stroke="currentColor" strokeWidth="8" className="text-border/60" />

                    {/* Street Names */}
                    <text x="14" y="52" fill="currentColor" className="text-text-muted text-[10px] font-mono font-bold">
                      SAMPLE ST.
                    </text>
                    <text x="14" y="152" fill="currentColor" className="text-text-muted text-[10px] font-mono font-bold">
                      MABINI AVENUE
                    </text>
                    <text x="126" y="20" fill="currentColor" className="text-text-muted text-[10px] font-mono font-bold">
                      KATIPUNAN EXT.
                    </text>
                  </svg>

                  {/* Centered Gymbox Pin */}
                  <div className="absolute z-10 flex flex-col items-center">
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-brand-red font-black text-white shadow-elevated ring-4 ring-brand-red/20">
                      G
                      <span className="absolute -inset-1 animate-ping rounded-full bg-brand-red/30" />
                    </div>
                    <span className="mt-1.5 rounded-md bg-surface-card px-2.5 py-1 text-xs font-bold text-text-primary shadow-sm border border-border">
                      Gymbox QC
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4 text-xs text-text-secondary">
                <span>📍 Sample St. cor. Mabini Ave.</span>
                <span className="font-semibold text-brand-red">Walk-ins always welcome</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: FINAL CALL TO ACTION
          ========================================================================= */}
      <section className="w-full border-t border-border bg-surface/50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border-2 border-border bg-surface-card p-8 text-center shadow-elevated sm:p-14">
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand-red" />

            <Badge variant="brand" dot className="mb-6">
              Start Today
            </Badge>

            <h2 className="text-4xl font-black uppercase tracking-tight text-text-primary sm:text-6xl">
              Your First Rep Starts Here<span className="text-brand-red">.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Don&apos;t wait for the perfect time. Whether you&apos;re just starting out or getting back
              into training, the Gymbox community will support every rep and every milestone.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/register">
                <Button variant="primary" size="lg" className="min-w-48 shadow-card">
                  Join Gymbox Now
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" size="lg" className="min-w-48">
                  Staff or Member Login
                </Button>
              </Link>
            </div>

            <p className="mt-6 text-xs text-text-muted">
              No appointment needed for walk-ins. Just bring your shoes and a change of clothes.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PUBLIC FOOTER
          ========================================================================= */}
      <footer className="w-full border-t border-border bg-surface px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
          <BrandLogo size="md" tagline="Community Gym" />

          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold uppercase tracking-wider text-text-secondary">
            <a href="#hero" className="transition-colors hover:text-text-primary">
              Home
            </a>
            <a href="#tab-2" className="transition-colors hover:text-text-primary">
              Why Us
            </a>
            <a href="#tab-3" className="transition-colors hover:text-text-primary">
              Programs
            </a>
            <a href="#tab-4" className="transition-colors hover:text-text-primary">
              Rates
            </a>
            <a href="#tab-5" className="transition-colors hover:text-text-primary">
              Location
            </a>
          </div>

          <div className="text-center font-mono text-xs text-text-muted sm:text-right">
            <p>© 2026 Gymbox. Your Neighborhood Gym.</p>
            <p className="mt-0.5 text-[10px]">Sample Data for Prototype Demo</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
