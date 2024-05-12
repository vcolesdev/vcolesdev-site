import {ReactChildren} from "@/utils/types/layout";
import {IconCaretRight} from "@tabler/icons-react";
import {motion} from "framer-motion";
import {iconVariants} from "../animation";

export default function ButtonIcon({
  ...props
}: {
  iconStyles: string;
  wrapperStyles: string;
  customIcon?: ReactChildren;
  groupId?: string;
}) {
  const btn = props;

  if (btn.customIcon) {
    return (
      <motion.div
        className={btn.wrapperStyles}
        layoutId={btn.groupId}
        variants={iconVariants}
      >
        {btn.customIcon}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={btn.wrapperStyles}
      layoutId={btn.groupId}
      variants={iconVariants}
    >
      <IconCaretRight className={btn.iconStyles} stroke={2} />
    </motion.div>
  );
}
