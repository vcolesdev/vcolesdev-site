import React from "react";
import classNames from "classnames";

interface SectionHeaderContainerProps {
  children: React.ReactNode;
  noMarginBottom?: boolean;
}

export default function SectionHeaderContainer({children, noMarginBottom,}: SectionHeaderContainerProps) {
  const classes = classNames({
    ["mb-12 lg:mb-20"]: !noMarginBottom,
  });
  return <div className={classes}>{children}</div>;
}
