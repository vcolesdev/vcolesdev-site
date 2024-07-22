"use client";

import useFetchSocialLinks from "@/hooks/fetchers/useFetchSocialLinks";

import { FooterSocialIconsList } from "./FooterSocialIconsList";
import { FooterSocialLinksProvider } from "./index";

/**
 * FooterSocialLinks
 */
export default function FooterSocialLinks() {
  const socialLinks = useFetchSocialLinks();
  return (
    <FooterSocialLinksProvider>
      <FooterSocialIconsList links={socialLinks} />
    </FooterSocialLinksProvider>
  );
}
