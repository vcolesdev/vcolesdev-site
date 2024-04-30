import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
  extraClasses?: string;
  noPadding?: boolean;
}

export interface SectionHeaderProps {
  title: string;
  description?: string;
  eyebrowText?: string;
  hasEyebrow?: boolean;
}

export type ReactChildren = React.ReactNode | React.ReactNode[] | string;