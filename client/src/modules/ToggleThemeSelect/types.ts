import { MouseEventHandler } from "react";

export interface ToggleThemeSelect {
  onToggleDarkTheme: MouseEventHandler<HTMLButtonElement>;
  onToggleLightTheme: MouseEventHandler<HTMLButtonElement>;
  onToggleSystemTheme?: MouseEventHandler<HTMLButtonElement>;
}

export interface BtnToggleTheme {
  ariaLabel: string;
  icon: any; // @todo Update this type
  onClick: MouseEventHandler<HTMLButtonElement>;
}
