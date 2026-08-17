import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import { NavBar } from "@/components/navbar";
import { ConditionalNavbar } from "@/components/conditional-navbar";
import { Footer } from "@/components/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fountline Digital",
  description: "Web and managed technology solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.className} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white">
        <ConditionalNavbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}