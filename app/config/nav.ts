// config/nav.ts
export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  highlight?: boolean; // e.g. for a CTA item
};

export const mainNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact", highlight: true },
  // Future:
  // { label: "Customer Portal", href: "/portal", highlight: true },
];