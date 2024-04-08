import React from "react";
import classNames from "classnames";

export default function SectionHeaderContainer({
  children,
  noMarginBottom,
}: {
  children: React.ReactNode;
  noMarginBottom?: boolean;
}) {
  const elementClasses = classNames({
    ["mb-12 lg:mb-24"]: !noMarginBottom,
  });

  return <div className={elementClasses}>{children}</div>;
}
