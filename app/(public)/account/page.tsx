import { Suspense } from "react";
import { connection } from "next/server";
import type { Metadata } from "next";
import { requireUserAccess } from "@/lib/auth/authorization";
import { signOut } from "./actions";

export const metadata: Metadata = {
  title: "Profile",
};

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

function initialsOf(name: string) {
  return (
    name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("") || "M"
  );
}

async function ProfileContent({ searchParams }: { searchParams: SearchParams }) {
  await connection();
  const { user } = await requireUserAccess();
  const params = await searchParams;
  const isAccessRestricted = params.error === "access-restricted";

  const fullName =
    (user.user_metadata?.full_name as string | undefined) ||
    (user.user_metadata?.name as string | undefined) ||
    "Member";

  // Add more rows here as profile fields become available.
  const details = [
    { label: "Full name", value: fullName },
    { label: "Email", value: user.email ?? "—" },
    { label: "Account type", value: "Member" },
  ];

  return (
    <>
      {isAccessRestricted && (
        <div
          role="alert"
          className="mb-6 rounded-lg border border-amber-500/20 bg-amber-500/10 p-3 text-sm text-amber-700 dark:text-amber-300"
        >
          That page is for gym staff only.
        </div>
      )}

      <section
        aria-labelledby="profile-heading"
        className="rounded-xl border border-border bg-surface-card"
      >
        <div className="flex items-center gap-4 border-b border-border p-6 sm:p-8">
          <div
            aria-hidden="true"
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-lg font-semibold text-brand-red"
          >
            {initialsOf(fullName)}
          </div>
          <div className="min-w-0">
            <h2 id="profile-heading" className="truncate text-lg font-semibold text-text-primary">
              {fullName}
            </h2>
            <p className="truncate text-sm text-text-secondary">{user.email}</p>
          </div>
        </div>

        <dl className="divide-y divide-border">
          {details.map((row) => (
            <div key={row.label} className="grid gap-1 px-6 py-4 sm:grid-cols-3 sm:gap-4 sm:px-8">
              <dt className="text-sm text-text-muted">{row.label}</dt>
              <dd className="break-words text-sm font-medium text-text-primary sm:col-span-2">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <form action={signOut} className="mt-6 flex justify-end">
        <button
          type="submit"
          className="inline-flex h-10 items-center justify-center rounded-lg border border-border px-4 text-sm font-medium text-text-primary transition-colors hover:border-brand-red/50 hover:text-brand-red"
        >
          Sign out
        </button>
      </form>
    </>
  );
}

function ProfileSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border border-border bg-surface-card p-6 sm:p-8">
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 rounded-full bg-surface-secondary" />
        <div className="space-y-2">
          <div className="h-4 w-40 rounded bg-surface-secondary" />
          <div className="h-3 w-56 rounded bg-surface-secondary" />
        </div>
      </div>
      <div className="mt-8 space-y-4">
        <div className="h-4 w-full rounded bg-surface-secondary" />
        <div className="h-4 w-full rounded bg-surface-secondary" />
        <div className="h-4 w-2/3 rounded bg-surface-secondary" />
      </div>
    </div>
  );
}

export default function ProfilePage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <main className="px-4 pb-20 pt-32 sm:px-6 sm:pt-36 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <header>
          <p className="text-sm font-medium text-brand-red">Profile</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            My profile
          </h1>
          <p className="mt-3 text-base text-text-secondary">Your GymBox member details.</p>
        </header>

        <div className="mt-10">
          <Suspense fallback={<ProfileSkeleton />}>
            <ProfileContent searchParams={searchParams} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
