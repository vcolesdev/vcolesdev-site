"use client";

import {LinkButtonProps, useButtonStyles} from "@/modules/Controls/Buttons/api";
import {
  ButtonContent,
  ButtonIcon,
  ButtonWrapper,
} from "@/modules/Controls/Buttons/components";
import {LayoutGroup} from "framer-motion";
import Link from "next/link";

export default function LinkButton({...props}: LinkButtonProps) {
  const styles = useButtonStyles();
  return (
    <LayoutGroup id={props.groupId}>
      <Link href={props.href}>
        <ButtonWrapper
          groupId={props.groupId}
          styles={styles.default.component}
        >
          <ButtonContent groupId={props.groupId} styles={styles.default.text}>
            {props.children}
          </ButtonContent>
          {props.iconButton && (
            <ButtonIcon
              groupId={props.groupId}
              iconStyles={styles.default.icon}
              wrapperStyles={styles.default.iconWrapper}
            />
          )}
        </ButtonWrapper>
      </Link>
    </LayoutGroup>
  );
}
