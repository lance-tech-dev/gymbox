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
      <footer className="relative z-10 flex flex-col items-center gap-1 border-t border-border px-4 py-6 text-center text-xs text-text-muted sm:flex-row sm:justify-center sm:gap-2">
        <span>&copy; 2026 GymBox</span>
        <span aria-hidden="true" className="hidden sm:inline">
          ·
        </span>
        <span>
          Developed by{" "}
          <a
            href="https://lncchcs.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-text-secondary underline-offset-4 transition-colors hover:text-brand-red hover:underline"
          >
            Lance Achacoso
          </a>
        </span>
      </footer>
    </div>
  );
}
