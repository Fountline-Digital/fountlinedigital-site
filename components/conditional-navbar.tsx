"use client";

import { usePathname } from "next/navigation";
import { NavBar } from "@/components/navbar";

export function ConditionalNavbar() {
  const pathname = usePathname();

  if (pathname === "/privacy" || pathname === "/terms") {
    return null;
  }

  return <NavBar />;
}