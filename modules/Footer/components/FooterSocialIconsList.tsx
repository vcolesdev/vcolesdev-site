import styles from "@/modules/Footer/styles.module";

import type { FooterSocialIcon, FooterSocialIconsList } from "../types";

/**
 * FooterSocialIconsList
 * @param links
 */
export function FooterSocialIconsList({ links }: FooterSocialIconsList) {
  return links.map((item: FooterSocialIcon) => (
    <a key={item.name} href={item.href} className={styles.socialLinks.item}>
      <span className="sr-only">{item.name}</span>
      <item.icon aria-hidden="true" />
    </a>
  ));
}
