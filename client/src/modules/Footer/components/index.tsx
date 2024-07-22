import React from "react";

import styles from "../styles.module";
import type {
  FooterContent,
  FooterCopyrightContainer,
  FooterSocialLinksContainer,
  FooterSocialLinksProvider,
} from "../types";

/**
 * Footer content
 * @param children
 */
export function FooterContent({ children }: FooterContent) {
  return <div className={styles.content}>{children}</div>;
}

/**
 * FooterCopyright
 */
export function FooterCopyright() {
  const year = new Date().getFullYear();
  return <p className={styles.copyrightText}>&copy; {year} Vanessa Coles, Inc. All rights reserved.</p>;
}

/**
 * FooterSocialLinksProvider
 * @param children
 */
export function FooterSocialLinksProvider({ children }: FooterSocialLinksProvider) {
  return <div className={styles.socialLinks}>{children}</div>;
}

/**
 * FooterCopyrightContainer
 * @param children
 */
export function FooterCopyrightContainer({ children }: FooterCopyrightContainer) {
  return <div className={styles.copyright}>{children}</div>;
}

/**
 * FooterSocialLinksContainer
 * @param children
 */
export function FooterSocialLinksContainer({ children }: FooterSocialLinksContainer) {
  return <div className={styles.social}>{children}</div>;
}
