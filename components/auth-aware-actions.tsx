"use client";

import Link from "next/link";
import { useSignedIn } from "@/lib/use-signed-in";

const base =
  "inline-flex h-12 items-center justify-center rounded-lg border px-6 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red";
const primary = `${base} border-transparent bg-brand-red text-white shadow-sm hover:bg-brand-red-dark`;
const outline = `${base} border-border bg-transparent text-text-primary hover:border-border-strong hover:bg-surface`;

/**
 * While the session is still unknown, the signed-out button is rendered
 * invisibly so the layout doesn't jump and signed-in members never see a flash
 * of "Join Now".
 */
function hiddenUntilKnown(signedIn: boolean | null) {
  return signedIn === null ? "invisible" : "";
}

/** Hero buttons: Join Now for visitors, My Account for signed-in members. */
export function HeroActions() {
  const signedIn = useSignedIn();

  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
      {signedIn ? (
        <Link href="/account" className={`${primary} min-w-40`}>
          My Account
        </Link>
      ) : (
        <Link href="/register" className={`${primary} min-w-40 ${hiddenUntilKnown(signedIn)}`}>
          Join Now
        </Link>
      )}
      <Link href="/promo" className={`${outline} min-w-40`}>
        View Rates
      </Link>
    </div>
  );
}

/** Closing call-to-action buttons at the bottom of the home page. */
export function ClosingActions() {
  const signedIn = useSignedIn();

  if (signedIn) {
    return (
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link href="/account" className={`${primary} min-w-48`}>
          Go to My Account
        </Link>
        <Link href="/promo" className={`${outline} min-w-48`}>
          View Rates
        </Link>
      </div>
    );
  }

  return (
    <div className={`mt-10 flex flex-wrap items-center justify-center gap-4 ${hiddenUntilKnown(signedIn)}`}>
      <Link href="/register" className={`${primary} min-w-48`}>
        Join Gymbox Now
      </Link>
      <Link href="/login" className={`${outline} min-w-48`}>
        Staff or Member Login
      </Link>
    </div>
  );
}
