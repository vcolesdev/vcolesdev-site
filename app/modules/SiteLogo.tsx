import useHandleClasses from "~/hooks/useHandleClasses";

interface SiteLogoProps {
  classes?: string;
}

export default function SiteLogo(props: SiteLogoProps) {
  const elementClasses = useHandleClasses("vc-logo", props.classes);
  return (
    <div className={elementClasses}>
      <span>Vanessa Coles</span>
    </div>
  );
}
