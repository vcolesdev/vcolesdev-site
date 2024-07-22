import { ContainerProps } from "@/utils/types/layout";
import classNames from "classnames";

import styles from "./styles.module";

/**
 * Container
 * @component Container
 * @param children
 * @param extraClasses
 * @param noPadding
 */
export default function Container({ children, extraClasses, noPadding }: ContainerProps) {
  const classes = classNames(extraClasses, {
    [styles.container.styles]: !noPadding,
    [styles.container.noPadding]: noPadding,
  });

  return <div className={classes}>{children}</div>;
}
