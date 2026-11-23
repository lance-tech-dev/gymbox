import { Suspense } from "react";
import { connection } from "next/server";
import { requireDashboardAccess } from "@/lib/auth/authorization";
import {
  AdminDevelopmentState,
  AdminDevelopmentSkeleton,
} from "@/components/admin-development-state";

async function Tab2Content() {
  await connection();
  await requireDashboardAccess();

  return (
    <AdminDevelopmentState
      moduleKey="TAB 2"
      title="Tab 2"
      iconName="projects"
    />
  );
}

export default function AdminTab2Page() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Suspense fallback={<AdminDevelopmentSkeleton title="Tab 2" />}>
        <Tab2Content />
      </Suspense>
    </main>
  );
}
