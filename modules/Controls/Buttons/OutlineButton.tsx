"use client";

import {DefaultButtonProps} from "@/modules/Controls/Buttons/api";
import ButtonContent from "@/modules/Controls/Buttons/components/ButtonContent";
import ButtonIcon from "@/modules/Controls/Buttons/components/ButtonIcon";
import ButtonWrapper from "@/modules/Controls/Buttons/components/ButtonWrapper";
import useOutlineButtonStyles from "@/modules/Controls/Buttons/hooks/useOutlineButton";
import {LayoutGroup} from "framer-motion";

export default function OutlineButton({...btn}: DefaultButtonProps) {
  const {component, icon, text} = useOutlineButtonStyles();
  return (
    <LayoutGroup id={btn.groupId}>
      <ButtonWrapper groupId={btn.groupId} styles={component}>
        <ButtonContent groupId={btn.groupId} styles={text}>
          {btn.children}
        </ButtonContent>
        {btn.iconButton && (
          <ButtonIcon
            groupId={btn.groupId}
            iconStyles={icon.element}
            wrapperStyles={icon.layout}
          />
        )}
      </ButtonWrapper>
    </LayoutGroup>
  );
}
