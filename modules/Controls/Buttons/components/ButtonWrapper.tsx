import {ReactChildren} from "@/utils/types/layout";
import {motion} from "framer-motion";
import {btnVariants} from "../animation";

export default function ButtonWrapper(props: {
  children: ReactChildren;
  styles: string;
  groupId?: string;
  onClick?: () => void;
  transition?: {duration: number};
}) {
  const btn = props;
  return (
    <motion.button
      className={btn.styles}
      layoutId={btn.groupId || "button"}
      initial="initial"
      onClick={btn.onClick}
      transition={btn.transition || {duration: 0.15}}
      variants={btnVariants}
      whileHover="animate"
      whileTap="tap"
    >
      {btn.children}
    </motion.button>
  );
}
