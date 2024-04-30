import styles from "../styles.module";
import useFetchSocialLinks from "@/utils/hooks/fetchers/useFetchSocialLinks";

/**
 * Footer social links module
 */
export default function FooterSocialLinks() {
  const socialLinks = useFetchSocialLinks();
  return (
    <div className={styles.socialLinks.styles}>
      {socialLinks.map((item) => (
        <a key={item.name} href={item.href} className={styles.socialLinks.item}>
          <span className="sr-only">{item.name}</span>
          <item.icon aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
