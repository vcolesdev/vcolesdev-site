import useFetchSocialLinks from "@/hooks/fetchers/useFetchSocialLinks";

import styles from "./styles.module";

/**
 * Social Links
 * @component SocialLinks
 */
export default function SocialLinks() {
  const social = useFetchSocialLinks();

  function Links() {
    return social.map((item) => (
      <a className={styles.link} key={item.name} href={item.href} target="_blank">
        <span className="sr-only">{item.name}</span>
        <item.icon aria-hidden="true" />
      </a>
    ));
  }

  return (
    <div className="flex space-x-6">
      <Links />
    </div>
  );
}
