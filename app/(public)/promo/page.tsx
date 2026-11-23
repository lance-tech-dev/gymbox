import type { Metadata } from "next";
import { MembershipRates } from "@/components/membership-rates";

export const metadata: Metadata = {
  title: "Promo",
  description:
    "GymBox membership rates in PHP: daily, monthly, and 3-month promo for students and regular members.",
};

export default function PromoPage() {
  return (
    <main className="px-4 pb-20 pt-32 sm:px-6 sm:pt-36 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <p className="text-sm font-medium text-brand-red">
            Membership rates
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Simple, affordable plans
          </h1>
          <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
            Train daily, monthly, or grab the 3-month promo for the best value. Student rates
            available on every plan.
          </p>
        </header>

        <div className="mt-12">
          <MembershipRates />
        </div>
      </div>
    </main>
  );
}
