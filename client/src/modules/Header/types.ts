import { MouseEventHandler, ReactNode } from "react";

export interface HeaderContainer {
  children: ReactNode | ReactNode[];
  id: string;
}

export interface Header {
  currentTheme?: string;
  id: string;
  onShowMobileMenu?: MouseEventHandler<HTMLButtonElement> | undefined;
  onToggleDarkTheme: MouseEventHandler<HTMLButtonElement>;
  onToggleLightTheme: MouseEventHandler<HTMLButtonElement>;
  onToggleSystemTheme?: MouseEventHandler<HTMLButtonElement> | undefined;
  showMobileMenuId?: string;
}

export interface HeaderBoxShadow {
  id?: string;
}
