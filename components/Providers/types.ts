import { ReactNode } from "react";

export type Children = ReactNode[] | ReactNode;

export interface ProviderElement {
  element: string;
  children: Children;
  className?: string;
  id?: string;
  [key: string]: any;
}
