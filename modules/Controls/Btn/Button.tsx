"use client";

import {btnVariants, iconVariants} from "@/modules/Controls/animation";
import {btnLink, btnLinkOutline} from "@/modules/Controls/Btn/styles.module";
import {ReactChildren} from "@/utils/types/layout";
import {IconCaretRight} from "@tabler/icons-react";
import classNames from "classnames";
import {LayoutGroup, motion, Variants} from "framer-motion";
import Link from "next/link";
import {MouseEvent} from "react";

interface ButtonOptions {
  outlineStyle?: boolean;
}

const getButtonStyles = (options: ButtonOptions) => {
  const component = classNames({
    [btnLink.styles]: !options.outlineStyle,
    [btnLinkOutline.styles]: options.outlineStyle,
  });

  const text = classNames({
    [btnLink.textContent]: !options.outlineStyle,
    [btnLinkOutline.textContent]: options.outlineStyle,
  });

  const iconWrapper = classNames({
    [btnLink.iconWrapper]: !options.outlineStyle,
    [btnLinkOutline.iconWrapper]: options.outlineStyle,
  });

  const icon = classNames({
    [btnLink.icon]: !options.outlineStyle,
    [btnLinkOutline.icon]: options.outlineStyle,
  });

  return {
    component,
    text,
    iconWrapper,
    icon,
  };
};

const Button = ({
  children,
  customIcon,
  groupId,
  href = "/",
  iconButton,
  isLink,
  onClick,
  outlineStyle,
}: {
  children: ReactChildren | string;
  customIcon?: ReactChildren;
  btnVariants?: Variants;
  groupId?: string;
  href?: string;
  iconButton?: boolean;
  isLink?: boolean;
  onClick?: (event?: MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  outlineStyle?: boolean;
}) => {
  const styles = getButtonStyles({
    outlineStyle,
  });

  return (
    <LayoutGroup id={groupId}>
      {isLink && href ? (
        <Link href={href}>
          {/* "Button" */}
          <motion.div
            className={styles.component}
            layoutId={groupId}
            initial="initial"
            variants={btnVariants}
            whileHover="animate"
          >
            {/* Content */}
            <motion.span layoutId={groupId} className={styles.text}>
              {children}
            </motion.span>
            {/* Icon */}
            {iconButton && (
              <motion.div
                className={styles.iconWrapper}
                layoutId={groupId}
                variants={iconVariants}
              >
                {customIcon ? (
                  customIcon
                ) : (
                  <IconCaretRight className={styles.icon} stroke={2} />
                )}
              </motion.div>
            )}
          </motion.div>
        </Link>
      ) : (
        <motion.button
          className={styles.component}
          layoutId={groupId}
          initial="initial"
          onClick={() => onClick && onClick}
          transition={{duration: 0.15}}
          variants={btnVariants}
          whileHover="animate"
        >
          {/* Content */}
          <motion.span className={styles.text} layoutId={groupId}>
            {children}
          </motion.span>
          {/* Icon */}
          {iconButton && (
            <motion.div
              className={styles.iconWrapper}
              layoutId={groupId}
              variants={iconVariants}
            >
              {customIcon ? (
                customIcon
              ) : (
                <IconCaretRight className={styles.icon} stroke={2} />
              )}
            </motion.div>
          )}
        </motion.button>
      )}
    </LayoutGroup>
  );
};

export default Button;
