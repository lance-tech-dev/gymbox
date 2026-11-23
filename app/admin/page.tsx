
import { Suspense } from "react";
import { connection } from "next/server";
import { redirect } from "next/navigation";
import { requireDashboardAccess } from "@/lib/auth/authorization";
import { BrandMark } from "@/components/brand-logo";

async function AdminRedirect(): Promise<React.ReactNode> {
  await connection();

  // Redirects to /login when unauthenticated or not admin/sub_admin.
  await requireDashboardAccess();

  redirect("/admin/tab-1");

  return null;
}

function AdminPortalLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="flex flex-col items-center gap-3 text-center">
        <BrandMark className="h-12 w-12 animate-pulse" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
          Accessing Operations Console...
        </p>
      </div>
    </div>
  );
}

export default function AdminPage() {
  return (
    <Suspense fallback={<AdminPortalLoading />}>
      <AdminRedirect />
    </Suspense>
  );
}
