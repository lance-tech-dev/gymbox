import type { ReactNode } from "react";
import PublicNavbar from "@/components/public-navbar";

export default function PublicLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      {/* Background gym floor texture applied consistently across all public pages */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-gym-texture opacity-30"
      />
      <PublicNavbar />
      <div className="relative z-10 flex-1">{children}</div>
    </div>
  );
}
