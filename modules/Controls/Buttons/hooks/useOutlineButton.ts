import { mergeStyles, tw } from "@/app/api";
import type { ButtonStyles } from "@/modules/Controls/Buttons/api";
import {
  element,
  focus,
  hover,
  iconElement,
  iconLayout,
  layout,
  text,
  transition,
} from "@/modules/Controls/Buttons/styles/outlineButton.styles";

export default function useOutlineButtonStyles(): ButtonStyles {
  const componentStyles = mergeStyles(layout, element, transition, hover, focus);
  return {
    component: tw(componentStyles),
    text: tw(text),
    icon: {
      layout: tw(iconLayout),
      element: tw(iconElement),
    },
  };
}
