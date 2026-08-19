import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import { ConditionalNavbar } from "@/components/conditional-navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Fountline Digital",
  description: "Websites, apps, design, and ongoing digital support.",
  icons: {
    icon: [
      {
        url: "/brand/favicon-16x16.png",
        sizes: "16x16",
        type: "image/jpeg",
      },
      {
        url: "/brand/favicon-32x32.png",
        sizes: "32x32",
        type: "image/jpeg",
      },
    ],
    apple: [
      {
        url: "/brand/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/jpeg",
      },
    ],
  },
  manifest: "/brand/site.webmanifest",
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