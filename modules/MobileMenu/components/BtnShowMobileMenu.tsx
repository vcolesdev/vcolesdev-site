import { IconMenu2 } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { MouseEventHandler } from "react";

interface BtnMobileMenuOpen {
  id?: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

/**
 * Button Mobile Menu Open
 * @component BtnMobileMenuOpen
 * @param id
 * @param onClick
 */
export default function BtnMobileMenuOpen({ id, onClick }: BtnMobileMenuOpen) {
  return (
    <motion.button id={id} onClick={onClick}>
      <span>
        <IconMenu2 size={24} />
      </span>
      <span className="hidden">Menu</span>
    </motion.button>
  );
}
