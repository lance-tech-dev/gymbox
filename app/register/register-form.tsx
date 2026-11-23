"use client";

import { useActionState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { register, type RegisterState } from "./actions";

const initialState: RegisterState = {
  error: null,
  success: null,
  fullName: "",
  email: "",
};

const inputClassName =
  "block h-11 w-full rounded-lg border border-border bg-surface px-4 text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors focus:border-brand-red focus:ring-2 focus:ring-brand-red/20 disabled:opacity-60";

const labelClassName =
  "mb-1.5 block text-xs font-semibold tracking-wider text-text-secondary uppercase";

export function RegisterForm() {
  const [state, formAction, pending] = useActionState(register, initialState);

  if (state.success) {
    return (
      <div className="mt-8 flex flex-col gap-6 text-center">
        <div
          role="status"
          className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-600 dark:text-emerald-400"
        >
          <div className="font-semibold">{state.success}</div>
          <p className="mt-1 text-xs opacity-90">
            Please follow the link sent to your email address to complete registration.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/login"
            className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-surface-card px-4 text-sm font-semibold text-text-primary border border-border hover:bg-surface transition-colors"
          >
            Back to login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="relative mt-8 flex flex-col gap-4">
      <div>
        <label htmlFor="fullName" className={labelClassName}>
          Full Name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          autoComplete="name"
          required
          defaultValue={state.fullName}
          disabled={pending}
          placeholder="Jane Doe"
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClassName}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          defaultValue={state.email}
          disabled={pending}
          placeholder="jane@example.com"
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="password" className={labelClassName}>
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
          disabled={pending}
          placeholder="At least 8 characters with letters & numbers"
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="confirmPassword" className={labelClassName}>
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          required
          disabled={pending}
          className={inputClassName}
        />
      </div>

      {state.error && (
        <div
          role="alert"
          className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-xs text-red-600 dark:text-red-400"
        >
          {state.error}
        </div>
      )}

      <div className="pt-1">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={pending}
          className="w-full"
        >
          Create account
        </Button>
      </div>

      <p className="mt-2 text-center text-xs text-text-secondary">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-brand-red transition-colors hover:underline"
        >
          Back to login
        </Link>
      </p>
    </form>
  );
}
