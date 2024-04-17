import styles from "./styles.module";
import useFetchSocialLinks from "~/hooks/fetchers/useFetchSocialLinks";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@radix-ui/react-tooltip";

/**
 * SocialLinks module
 */
export default function SocialLinks() {
  const social = useFetchSocialLinks();

  const renderLinks = () => {
    return social.map((item) => (
      <TooltipProvider key={item.name} delayDuration={0}>
        <Tooltip key={item.name}>
          <TooltipTrigger asChild>
            <a href={item.href} className={styles.link}>
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" />
            </a>
          </TooltipTrigger>
          <TooltipContent asChild>
            <div className={styles.tooltip.styles}>
              <p className={styles.tooltip.textContent}>
                {item.name}
              </p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ));
  };

  return <div className="flex space-x-6">{renderLinks()}</div>;
}
