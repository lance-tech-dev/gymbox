import { Suspense } from "react";
import { connection } from "next/server";
import { requireDashboardAccess } from "@/lib/auth/authorization";
import {
  AdminDevelopmentState,
  AdminDevelopmentSkeleton,
} from "@/components/admin-development-state";

async function Tab3Content() {
  await connection();
  await requireDashboardAccess();

  return (
    <AdminDevelopmentState
      moduleKey="TAB 3"
      title="Tab 3"
      iconName="manpower"
    />
  );
}

export default function AdminTab3Page() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Suspense fallback={<AdminDevelopmentSkeleton title="Tab 3" />}>
        <Tab3Content />
      </Suspense>
    </main>
  );
}
