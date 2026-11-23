import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Gymbox",
    template: "%s | Gymbox",
  },
  description: "Gymbox gym management system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem("gymbox-theme");

                if (savedTheme === "dark") {
                  document.documentElement.classList.add("dark");
                } else {
                  document.documentElement.classList.remove("dark");
                }
              } catch {}
            `,
          }}
        />
      </head>

      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}