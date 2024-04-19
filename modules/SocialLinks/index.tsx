import styles from "./styles.module";
import useFetchSocialLinks from "@/hooks/fetchers/useFetchSocialLinks";

/**
 * SocialLinks module
 */
export default function SocialLinks() {
  const social = useFetchSocialLinks();

  const renderLinks = () => {
    return social.map((item) => (
      <a key={item.name} href={item.href} className={styles.link}>
        <span className="sr-only">{item.name}</span>
        <item.icon aria-hidden="true" />
      </a>
    ));
  };

  return <div className="flex space-x-6">{renderLinks()}</div>;
}
