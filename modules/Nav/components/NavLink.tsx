import { motion } from "framer-motion";
import Link from "next/link";

import useNavLink from "../hooks/useNavLink";
import styles from "../styles.module";
import { NavLinkItem } from "../types";

/**
 * NavLink component
 * @param item
 * @param pathname
 */
export default function NavLink({ item, pathname }: { item: NavLinkItem; pathname?: string }) {
  const { activelinkColor, extraLinkClasses } = useNavLink(pathname || "/", item);

  return (
    <motion.div className={styles.nav.item}>
      <Link className={styles.nav.link + " " + extraLinkClasses + " " + activelinkColor} href={item.href}>
        {item.name}
      </Link>
    </motion.div>
  );
}
