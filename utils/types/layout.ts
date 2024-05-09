import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
  extraClasses?: string;
  noPadding?: boolean;
}

export interface SectionContent {
  ctaLink: string;
  ctaText: string;
  description: string;
  eyebrowText: string;
  imageAlt: string;
  title: string;
}

export type ReactChildren = React.ReactNode | React.ReactNode[] | string;
