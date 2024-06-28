"use client";

import { usePathname } from "next/navigation";

import type { NavLinkItem, NavLinks } from "../types";
import NavLink from "./NavLink";

/**
 * Nav Links
 * @component NavLinks
 * @param nav
 */
export default function NavLinks({ nav }: { nav: NavLinks }) {
  const currentPath = usePathname();
  return nav.map((item: NavLinkItem) => <NavLink key={item.name} item={item} pathname={currentPath} />);
}
