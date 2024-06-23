import { ReactNode } from "react";

export interface MobileMenu {
  isActive: boolean;
  menuId: string;
  onHideMobileMenu: any; // Update to a real type
}

export interface MobileMenuOverlay {
  activeClass: string;
  isActive: boolean;
  onHideMobileMenu: any; // Update to a real type
}

export interface MobileMenuProvider {
  activeClass: string;
  children: ReactNode | ReactNode[];
  isActive: boolean;
  maxWidth?: number;
  providerId?: string;
}

export interface MobileMenuContent {
  children: ReactNode | ReactNode[];
  maxWidth?: number;
}

export interface MobileMenuList {
  children: ReactNode | ReactNode[];
  menuId?: string;
}

export interface MobileMenuListItems {
  items: { name: string; href: string }[]; // Mobile menu items
}

export interface MobileMenuClose {
  elementRef: any; // Update to a real type
  icon: ReactNode;
  onHideMobileMenu?: any; // Update to a real type
  onHoverStart?: any; // Update to a real type
  onHoverEnd?: any; // Update to a real type
}
