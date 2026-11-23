import { Suspense } from "react";
import { connection } from "next/server";
import { requireDashboardAccess } from "@/lib/auth/authorization";
import {
  AdminDevelopmentState,
  AdminDevelopmentSkeleton,
} from "@/components/admin-development-state";

async function Tab1Content() {
  await connection();
  await requireDashboardAccess();

  return (
    <AdminDevelopmentState
      moduleKey="TAB 1"
      title="Tab 1"
      iconName="dashboard"
    />
  );
}

export default function AdminTab1Page() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Suspense fallback={<AdminDevelopmentSkeleton title="Tab 1" />}>
        <Tab1Content />
      </Suspense>
    </main>
  );
}
