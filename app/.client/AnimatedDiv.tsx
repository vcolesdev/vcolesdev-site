import {animated} from "@react-spring/web";

export default function AnimatedDiv(props: any) {
  return (
    <animated.div {...props}>
      {props.children}
    </animated.div>
  );
}