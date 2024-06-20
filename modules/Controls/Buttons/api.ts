import {ReactChildren} from "@/utils/types/layout";
import {Variants} from "framer-motion";
import {MouseEvent, ReactNode} from "react";

export type ClassNames = string;

export interface ButtonOptions {
  outlineStyle?: boolean;
}

export interface DefaultButtonProps {
  children: ReactChildren | string;
  customIcon?: ReactChildren;
  btnVariants?: Variants;
  groupId?: string;
  href?: string;
  iconButton?: boolean;
  isLink?: boolean;
  onClick?: (event?: MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  outlineStyle?: boolean;
  styles?: ButtonStyles;
  [key: string]: any;
}

export interface LinkButtonProps {
  children: ReactChildren;
  customIcon?: ReactNode;
  groupId?: string;
  href: string;
  iconButton?: boolean;
  [key: string]: any;
}

export interface ButtonStyles {
  //layout: string;
  //element: string;
  //transition: string;
  //states: {
  //  hover: string;
  //  focus: string;
  //};
  component: ClassNames;
  text: ClassNames;
  icon: {
    layout: ClassNames;
    element: ClassNames;
  };
}
