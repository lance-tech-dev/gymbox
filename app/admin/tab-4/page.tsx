import { Suspense } from "react";
import { connection } from "next/server";
import { requireDashboardAccess } from "@/lib/auth/authorization";
import {
  AdminDevelopmentState,
  AdminDevelopmentSkeleton,
} from "@/components/admin-development-state";

async function Tab4Content() {
  await connection();
  await requireDashboardAccess();

  return (
    <AdminDevelopmentState
      moduleKey="TAB 4"
      title="Tab 4"
      iconName="tools"
    />
  );
}

export default function AdminTab4Page() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Suspense fallback={<AdminDevelopmentSkeleton title="Tab 4" />}>
        <Tab4Content />
      </Suspense>
    </main>
  );
}
