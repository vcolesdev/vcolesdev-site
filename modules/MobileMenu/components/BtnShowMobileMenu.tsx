import { IconMenu2 } from "@tabler/icons-react";
import { motion } from "framer-motion";

export default function BtnMobileMenuOpen({ id, onClick }: { id?: string; onClick: any }) {
  return (
    <motion.button id={id} onClick={onClick}>
      <span>
        <IconMenu2 size={24} />
      </span>
      <span className="hidden">Menu</span>
    </motion.button>
  );
}
