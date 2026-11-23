import { Suspense, type ReactNode } from "react";
import { connection } from "next/server";
import { AdminShell } from "@/components/admin-shell";
import { requireDashboardAccess } from "@/lib/auth/authorization";

/**
 * Verifies staff access before rendering the sidebar, so signed-out visitors
 * and members never see the admin shell. Each admin page still runs its own
 * requireDashboardAccess() check as defense in depth.
 */
async function AdminGate({ children }: { children: ReactNode }) {
  await connection();
  await requireDashboardAccess();

  return <AdminShell>{children}</AdminShell>;
}

function AdminLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
        Checking access...
      </p>
    </div>
  );
}

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Suspense fallback={<AdminLoading />}>
        <AdminGate>{children}</AdminGate>
      </Suspense>
    </div>
  );
}
