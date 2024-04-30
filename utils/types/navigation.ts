import React from "react";

export interface NavContainerProps {
  children: React.ReactNode,
  id?: string,
}

export interface NavigationProps {
  handleOpen: () => void;
  id?: string;
}

export interface NavLinkItem {
  name: string;
  href: string;
}

export type NavLinks = NavLinkItem[];