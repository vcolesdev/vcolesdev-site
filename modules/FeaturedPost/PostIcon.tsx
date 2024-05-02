import {FeaturedPostIconProps} from "@/utils/types/posts";

export default function PostIcon( {children, iconStyles, iconSettings}: FeaturedPostIconProps) {
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