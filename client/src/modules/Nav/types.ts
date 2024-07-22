import { MouseEventHandler, ReactNode } from "react";

export interface NavContainer {
  children: ReactNode;
  id?: string;
  theme?: string;
}

export interface Navigation {
  navId?: string;
  onShowMobileMenu: MouseEventHandler<HTMLButtonElement> | undefined;
  showMobileMenuId: string;
}

export interface NavLinkItem {
  name: string;
  href: string;
}

export type NavLinks = NavLinkItem[];
