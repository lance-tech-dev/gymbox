import { Suspense } from "react";
import { connection } from "next/server";
import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { requireUserAccess } from "@/lib/auth/authorization";
import { signOut } from "./actions";

export const metadata: Metadata = {
  title: "Member Account",
};

async function AccountContent({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  await connection();
  const { user } = await requireUserAccess();
  const params = searchParams ? await searchParams : {};
  const isAccessRestricted = params.error === "access-restricted";

  const fullName =
    (user.user_metadata?.full_name as string | undefined) ||
    (user.user_metadata?.name as string | undefined) ||
    "Member";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-card/90 p-6 shadow-elevated backdrop-blur-sm sm:p-8">
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-brand-red" />

      {isAccessRestricted && (
        <div
          role="alert"
          className="mb-6 rounded-lg border border-amber-500/20 bg-amber-500/10 p-3 text-xs text-amber-700 dark:text-amber-300"
        >
          Access restricted. Gym members do not have permission to access staff admin pages.
        </div>
      )}

      <div className="flex flex-col gap-4">
        <div>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-red">
            Member Area
          </span>
          <h1 className="mt-1 text-2xl font-black text-text-primary sm:text-3xl">
            Welcome, {fullName}
          </h1>
          <p className="mt-1 text-sm text-text-secondary">{user.email}</p>
        </div>

        <div className="border-t border-border pt-4">
          <form action={signOut}>
            <Button type="submit" variant="secondary" size="md">
              Sign out
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function AccountPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <main className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-background text-foreground transition-colors duration-300">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 pt-5 sm:px-6 sm:pt-6 lg:px-8">
        <Link href="/" aria-label="Gymbox home" className="group rounded-lg">
          <BrandLogo />
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/"
            className="group hidden h-10 items-center gap-2 rounded-lg px-3 text-xs font-semibold uppercase tracking-wider text-text-secondary transition-colors hover:text-text-primary sm:inline-flex"
          >
            Back to Site
          </Link>
          <div aria-hidden="true" className="hidden h-5 w-px bg-border sm:block" />
          <ThemeToggle />
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-md flex-1 items-center px-4 py-12 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="h-48 w-full animate-pulse rounded-2xl bg-surface-card" />}>
          <AccountContent searchParams={props.searchParams} />
        </Suspense>
      </div>
    </main>
  );
}
