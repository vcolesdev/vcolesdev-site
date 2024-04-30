import {IconSettings} from "@/utils/types/settings";

/**
 * useIconSettings hook
 * @param props
 * @description This hook is used to set the settings for an icon.
 */
function useIconSettings(props: IconSettings) {
  return {
    xmlns: props.xmlns,
    width: props.width,
    height: props.height,
    viewBox: props.viewBox,
    fill: props.fill,
    stroke: props.stroke,
    strokeWidth: props.strokeWidth
  }
}

export default useIconSettings;