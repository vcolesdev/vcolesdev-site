"use client";

import {DefaultButtonProps} from "@/modules/Controls/Buttons/api";
import ButtonContent from "@/modules/Controls/Buttons/components/ButtonContent";
import ButtonIcon from "@/modules/Controls/Buttons/components/ButtonIcon";
import ButtonWrapper from "@/modules/Controls/Buttons/components/ButtonWrapper";
import useButtonStyles from "@/modules/Controls/Buttons/hooks/useButtonStyles";
import {LayoutGroup} from "framer-motion";

export default function Button({...btn}: DefaultButtonProps) {
  const {component, text, icon} = useButtonStyles();
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
