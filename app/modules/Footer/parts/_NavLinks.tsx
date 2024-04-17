import styles from "../styles.module";
import useNavLinks from "~/hooks/fetchers/useFetchNavLinks";


/**
 * Footer navigation links module
 */
export default function FooterNavLinks() {
  const navigation = useNavLinks();

  return (
    <nav className={styles.nav.styles} aria-label="Footer">
      {navigation.map((item) => (
        <div key={item.name} className="pb-6">
          <a href={item.href} className={styles.nav.item}>
            {item.name}
          </a>
        </div>
      ))}
    </nav>
  );
}
