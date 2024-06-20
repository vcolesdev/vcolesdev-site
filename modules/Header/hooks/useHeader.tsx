"use client";

import {ThemeContext} from "@/context/ThemeContext";
import HeaderBoxShadow from "@/modules/Header/components/HeaderBoxShadow";
import {useAnimate, useScroll, useTransform} from "framer-motion";
import {ReactNode, useContext, useEffect, useState} from "react";

export default function useHeader() {
  const initialBoxShadow = null;

  const [scope] = useAnimate();
  const [contentScope] = useAnimate();

  const {theme} = useContext(ThemeContext);
  const {scrollY} = useScroll();
  const [padding, setPadding] = useState(["", ""]);
  const [boxShadow, setBoxShadow] = useState<ReactNode>(initialBoxShadow);

  const paddingTransform = useTransform(scrollY, [0, 100], padding);

  useEffect(() => {
    // Set the value for our header padding transform.
    setPadding(["2rem", "1rem"]);

    // Set our box shadow depending on the theme context.
    theme === "dark" &&
      setBoxShadow(<HeaderBoxShadow id="darkBoxShadow" color="#000000" />);
    theme === "light" &&
      setBoxShadow(<HeaderBoxShadow id="lightBoxShadow" color="#f43f5e" />);
  }, [setBoxShadow, setPadding, theme]);

  return {
    boxShadow: boxShadow,
    contentScope: contentScope,
    padding: paddingTransform,
    scope: scope,
  };
}
