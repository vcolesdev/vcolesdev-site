import useDrawVariants from "@/hooks/animations/useDrawVariants";
import usePathComponents from "@/hooks/components/usePathComponents";
import {motion} from "framer-motion";
import SVG from "./SocialSVG";

type SocialIcons =
  | "brand-github"
  | "brand-linkedin"
  | "brand-mastodon"
  | "message-share";

export default function SocialIcon({
  iconName,
  paths,
}: {
  iconName: SocialIcons;
  paths: string[];
}) {
  const variants = useDrawVariants();
  const component = {paths: paths, variants: variants};
  const components = usePathComponents(component);
  return (
    <motion.div>
      <SVG iconStyle={`icon-tabler-${iconName}`}>{components}</SVG>
    </motion.div>
  );
}
