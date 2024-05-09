import React from "react";

export interface SectionHeaderContainerProps {
  children: React.ReactNode;
  noMarginBottom?: boolean;
}

export interface SectionHeaderProps {
  title: string;
  description?: string;
  textSize?: "default" | "lg";
}

export interface SectionHeaderEyebrowProps {
  eyebrowText: string;
  title: string;
  description?: string;
  textSize?: "default" | "lg";
}