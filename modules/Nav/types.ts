import { MouseEventHandler, ReactNode } from "react";

export interface NavProvider {
  children: ReactNode;
  id?: string;
  theme?: string;
}

// Navigation and NavContent and NavShowMobileMenu types are incredibly similar,
// we should probably consolidate the type or create a type that can be extended.
export interface Navigation {
  navId?: string;
  onShowMobileMenu: MouseEventHandler<HTMLButtonElement> | undefined;
  showMobileMenuId: string;
}

export interface NavShowMobileMenu {
  id: string;
  onShowMobileMenu: MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface NavLinkItem {
  name: string;
  href: string;
}

export type NavLinks = NavLinkItem[];
