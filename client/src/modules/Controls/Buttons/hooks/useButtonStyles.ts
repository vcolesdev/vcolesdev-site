import { mergeStyles, tw } from "@/api";
import { ButtonStyles } from "@/modules/Controls/Buttons/api";
import {
  element,
  focus,
  hover,
  iconElement,
  iconLayout,
  layout,
  text,
  transition,
} from "@/modules/Controls/Buttons/styles/button.styles";

export default function useButtonStyles(): ButtonStyles {
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
