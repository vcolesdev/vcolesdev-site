"use client";

import {useState} from "react";

export default function useBoxShadow() {
  const initialBoxShadowColor = "";
  const [boxShadowColor, setBoxShadowColor] = useState(initialBoxShadowColor);

  return {
    boxShadowColor,
    setBoxShadowColor
  }
}