import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Montserrat } from "next/font/google";
import { ModeToggle } from "@/components/mode-toggle";
import { mainNavItems } from "./config/nav";
import { MobileNav } from "@/components/mobile-nav";
import { Main } from "next/document";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Fountline Digital",
  description: "Modern web experiences for ambitious brands.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          storageKey="fountline-theme"
          themes={["light", "dark", "silver"]}>
            <div className="min-h-screen bg-background text-foreground flex flex-col">
              {/* HEADER */}
              <SiteHeader />
              {/* MAIN CONTENT */}
              <main className="flex-1">
              {children}
              </main>
              {/* FOOTER */}
              <SiteFooter />
            </div>
          </ThemeProvider>
      </body>
    </html>
  );
}