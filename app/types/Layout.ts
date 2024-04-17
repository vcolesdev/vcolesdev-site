import React from "react";

export interface AppProps {
  children: React.ReactNode;
  title?: string;
}

export interface ContainerProps {
  children: React.ReactNode;
  extraClasses?: string;
  noPadding?: boolean;
}
