import styles from "@/modules/MobileMenu/styles.module";
import type { MobileMenuListItems } from "@/modules/MobileMenu/types";
import { motion } from "framer-motion";

/**
 * Mobile Menu List Items
 * @component MobileMenuListItems
 * @param items
 */
export default function MobileMenuListItems({ items }: MobileMenuListItems) {
  return items.map((item, i) => (
    <motion.li className={styles.menu.item} key={item.name}>
      <a className={styles.menu.link} href={item.href}>
        {item.name}
      </a>
    </motion.li>
  ));
}
