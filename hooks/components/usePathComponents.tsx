import {motion, Variants} from "framer-motion";

interface Props {
  paths: string[];
  variants: Variants;
}

export default function usePathComponents(props: Props) {
  return (
    <>
      {props.paths.map((path, i) => (
        <motion.path
          key={`motion-path-${i}`}
          d={path}
          variants={props.variants}
        />
      ))}
    </>
  );
}
