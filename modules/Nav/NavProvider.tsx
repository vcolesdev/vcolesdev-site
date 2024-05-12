import MotionDiv from "@/components/Motion/MotionDiv";
import styles from "@/modules/Nav/styles.module";
import {ReactChildren} from "@/utils/types/layout";
import {useAnimate, useScroll, useTransform} from "framer-motion";

const input = {
  default: [0, 100],
  bg: [0, 50, 100],
};

const output = {
  bg: [
    "rgba(253, 240, 237, 0)",
    "rgba(253, 240, 237, 0)",
    "rgba(253, 240, 237, 0.8)",
  ],
  boxShadow: [
    "0 0 0 0 rgba(144,40,20,0)",
    "0px 8px 40px 0px rgba(144,40,20,0.2)",
  ],
  padding: ["2rem", "1rem"],
};

export default function NavProvider({children}: {children: ReactChildren}) {
  const [scope, animate] = useAnimate();
  const {scrollY} = useScroll();

  const background = useTransform(scrollY, input.bg, output.bg);
  const padding = useTransform(scrollY, input.default, output.padding);
  const boxShadow = useTransform(scrollY, input.default, output.boxShadow);

  const style = {
    background: background,
    paddingTop: padding,
    paddingBottom: padding,
    boxShadow: boxShadow,
  };

  return (
    <MotionDiv
      id="navProvider"
      className={styles.nav.container}
      ref={scope}
      style={style}
    >
      {children}
    </MotionDiv>
  );
}
