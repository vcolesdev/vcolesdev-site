import {ReactChildren} from "@/utils/types/layout";
import React, {useEffect, useState} from "react";

export function Slot({
  element = "div",
  z = 0,
  styles,
  children,
  ...props
}: {
  element?: string;
  styles?: string;
  z?: number;
  children: ReactChildren;
}) {
  const [zIndex, setZindex] = useState<number>(0);

  useEffect(() => {
    let newZindex = () => setZindex(z);
    return () => {
      newZindex();
    };
  }, [z, setZindex]);

  return React.createElement(
    element,
    {className: styles + ` z-${zIndex}`, ...props},
    children
  );
}
