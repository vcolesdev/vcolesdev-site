import {FeaturedProjectIconProps} from "@/types/Projects";

export default function ProjectCardIcon(props: FeaturedProjectIconProps) {
  const {children, iconStyles, iconSettings} = props;
  return (
    <svg
      className={iconStyles}
      xmlns={iconSettings.xmlns}
      width={iconSettings.width}
      height={iconSettings.height}
      viewBox={iconSettings.viewBox}
      fill={iconSettings.fill}
      stroke={iconSettings.stroke}
      strokeWidth={iconSettings.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}