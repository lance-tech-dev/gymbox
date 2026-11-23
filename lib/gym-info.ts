/**
 * Single source of truth for the gym's public business details.
 * Fill in the `null` fields once confirmed; pages hide anything left null.
 */

const LATITUDE = 13.9609396;
const LONGITUDE = 121.3214676;

export const GYM_INFO = {
  name: "GYMBOX Fitness Center",
  location: {
    latitude: LATITUDE,
    longitude: LONGITUDE,
    /** Street address shown on the site, e.g. "123 Rizal St., Brgy. Poblacion, Town, Province". */
    address: null as string | null,
    /** Optional landmark to help people find the gym. */
    landmark: null as string | null,
    /** Google Maps listing (tracking parameters removed). */
    mapsUrl:
      "https://www.google.com/maps/place/GYMBOX+Fitness+Center/@13.9609435,121.3195549,17z/data=!3m1!4b1!4m6!3m5!1s0x33bd4112a3b52371:0xb184e2961b66e487!8m2!3d13.9609396!4d121.3214676!16s%2Fg%2F11g9dmmht7",
    /** Opens turn-by-turn directions from the visitor's current location. */
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${LATITUDE},${LONGITUDE}`,
    /** Keyless Google Maps embed centred on the gym's pin. */
    embedUrl: `https://maps.google.com/maps?q=${LATITUDE},${LONGITUDE}&z=17&output=embed`,
  },
  /** Opening hours, e.g. [{ days: "Monday – Saturday", time: "6:00 AM – 10:00 PM" }]. */
  hours: [
    { days: "Monday – Saturday", time: "8:00 AM – 9:00 PM" },
    { days: "Sunday", time: "Closed" },
  ] as { days: string; time: string }[] | null,
  /** Contact number shown on the site. */
  phone: null as string | null,
} as const;

export type MembershipPlan = {
  id: string;
  name: string;
  /** Short label for the billing period, e.g. "per day". */
  period: string;
  /** Prices in Philippine pesos (PHP). */
  prices: { student: number; regular: number };
  /** Number of months covered, used to compute promo savings. */
  months?: number;
  highlight?: boolean;
  /** Extra perks specific to this plan. */
  perks?: string[];
};

/** Membership rates in Philippine pesos (PHP). */
export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  { id: "daily", name: "Daily", period: "per day", prices: { student: 50, regular: 65 } },
  { id: "monthly", name: "Monthly", period: "per month", prices: { student: 400, regular: 500 }, months: 1 },
  {
    id: "3-month-promo",
    name: "3-Month Promo",
    period: "for 3 months",
    prices: { student: 1100, regular: 1250 },
    months: 3,
    highlight: true,
    perks: ["Free 1 week of gym access after completing 3 months"],
  },
];

/** Included with every plan. */
export const PLAN_INCLUSIONS = ["All-access to the gym", "Free drinking water"] as const;

export function formatPeso(amount: number) {
  return `₱${amount.toLocaleString("en-PH")}`;
}

/** Savings of a multi-month promo versus paying the monthly rate for the same period. */
export function promoSavings(plan: MembershipPlan, type: "student" | "regular") {
  const monthly = MEMBERSHIP_PLANS.find((p) => p.id === "monthly");
  if (!monthly || !plan.months || plan.months <= 1) return 0;
  return monthly.prices[type] * plan.months - plan.prices[type];
}
