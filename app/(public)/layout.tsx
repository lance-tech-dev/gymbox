import type { ReactNode } from "react";
import PublicNavbar from "@/components/public-navbar";

export default function PublicLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      <PublicNavbar />
      <div className="flex-1">{children}</div>
    </div>
  );
}
