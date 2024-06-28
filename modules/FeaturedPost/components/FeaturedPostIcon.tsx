import { FeaturedPostIconProps } from "../types";

/**
 * PostIcon
 * @param children
 * @param styles
 * @param settings
 */
export default function FeaturedPostIcon({ children, styles, settings }: FeaturedPostIconProps) {
  return (
    <svg
      className={styles}
      xmlns={settings.xmlns}
      width={settings.width}
      height={settings.height}
      viewBox={settings.viewBox}
      fill={settings.fill}
      stroke={settings.stroke}
      strokeWidth={settings.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}
