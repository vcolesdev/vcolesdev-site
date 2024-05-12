import useFetchSocialLinks from "@/utils/hooks/fetchers/useFetchSocialLinks";
import styles from "./styles.module";

export default function SocialLinks() {
  const social = useFetchSocialLinks();

  const renderLinks = () => {
    return social.map((item) => (
      <a
        className={styles.link}
        key={item.name}
        href={item.href}
        target="_blank"
      >
        <span className="sr-only">{item.name}</span>
        <item.icon aria-hidden="true" />
      </a>
    ));
  };

  return <div className="flex space-x-6">{renderLinks()}</div>;
}
