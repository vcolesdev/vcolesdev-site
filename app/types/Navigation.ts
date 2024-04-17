import React from "react";

export interface NavContainerProps {
  children: React.ReactNode,
  id: string,
}

export interface NavigationProps {
  handleOpen: () => void;
}

export interface NavLinkItem {
  name: string;
  href: string;
}

export type NavLinks = NavLinkItem[];