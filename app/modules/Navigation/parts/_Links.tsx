import styles from "~/modules/Navigation/styles.module";
import {useState, startTransition} from "react";
import {LayoutGroup, motion} from "framer-motion";
import {NavLinks as NavLinksType} from "~/types/Navigation";

export default function NavLinks({nav}: {nav: NavLinksType}) {
  const [selectedItem, setSelectedItem] = useState(nav[0]);

  return (
    <LayoutGroup id="navlinks">
      {nav.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={styles.nav.link}
          onClick={() => startTransition(() => setSelectedItem(item))}
        >
          {item.name}
          {item === selectedItem ? (
            <motion.div
              className={`${styles.nav.activeLink} ${selectedItem && "selected"}`}
              layoutId="activeLink"
            />
          ) : null}
        </a>
      ))}
    </LayoutGroup>
  );
}