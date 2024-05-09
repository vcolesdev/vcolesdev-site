"use client";

import {
  DefaultButtonProps,
  useButtonStyles,
} from "@/modules/Controls/Buttons/api";
import {
  ButtonContent,
  ButtonIcon,
  ButtonWrapper,
} from "@/modules/Controls/Buttons/components";
import {LayoutGroup} from "framer-motion";

export default function OutlineButton({...props}: DefaultButtonProps) {
  const styles = useButtonStyles();
  return (
    <LayoutGroup id={props.groupId}>
      <ButtonWrapper groupId={props.groupId} styles={styles.outline.component}>
        <ButtonContent groupId={props.groupId} styles={styles.outline.text}>
          {props.children}
        </ButtonContent>
        {props.iconButton && (
          <ButtonIcon
            groupId={props.groupId}
            iconStyles={styles.outline.icon}
            wrapperStyles={styles.outline.iconWrapper}
          />
        )}
      </ButtonWrapper>
    </LayoutGroup>
  );
}
