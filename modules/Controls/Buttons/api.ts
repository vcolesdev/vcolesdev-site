import {button, outlineButton} from "@/modules/Controls/Buttons/styles.module";
import {ReactChildren} from "@/utils/types/layout";
import classNames from "classnames";
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
  styles?: ReturnType<typeof getButtonStyles>;
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
  layout: string;
  element: string;
  transition: string;
  states: {
    hover: string;
    focus: string;
  };
  text: string;
  icon: {
    layout: string;
    element: string;
  };
}

export function getButtonStyles(styles: ButtonStyles) {
  const component = classNames([
    styles.layout,
    styles.element,
    styles.transition,
    styles.states.hover,
    styles.states.focus,
  ]);

  const text = styles.text;
  const iconWrapper = styles.icon.layout;
  const icon = styles.icon.element;

  return {
    component,
    text,
    iconWrapper,
    icon,
  };
}

export function useButtonStyles() {
  return {
    default: getButtonStyles(button),
    outline: getButtonStyles(outlineButton),
  };
}
