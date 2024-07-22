import { ReactChildren } from "@/utils/types/layout";
import { ReactNode } from "react";

export interface PageTitleProviderProps {
  children: ReactChildren;
  title: string;
}

export interface PageHeadingProps {
  title: string;
}

export interface PageTitleProps {
  title: string;
  description?: string;
}

export interface PageDescriptionProps {
  description: string;
}

export interface PageWrapper {
  headerId?: string;
  children: ReactNode | ReactNode[];
}
