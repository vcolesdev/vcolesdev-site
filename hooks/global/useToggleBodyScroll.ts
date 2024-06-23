import {useEffect, useRef} from "react";
import {disableScroll, enableScroll} from "@/app/api";

/**
 * useToggleBodyScroll()
 * @param condition
 */
export default function useToggleBodyScroll(condition: boolean) {
  const docRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    docRef.current = document.body;
    const toggleBodyScroll = () => (condition ? disableScroll(document.body) : enableScroll(document.body));
    toggleBodyScroll();
  }, [condition]);
}