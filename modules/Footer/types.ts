import { ReactNode } from "react";

export interface FooterContent {
  children: ReactNode | ReactNode[];
}

export interface FooterSocialLinksProvider {
  children: ReactNode | ReactNode[];
}

export interface FooterSocialIcon {
  name: string;
  href: string;
  icon: any; // @todo Update this type
}

export interface FooterSocialIconsList {
  links: FooterSocialIcon[];
}

export interface FooterCopyrightContainer {
  children: ReactNode | ReactNode[];
}

export interface FooterSocialLinksContainer {
  children: ReactNode | ReactNode[];
}
