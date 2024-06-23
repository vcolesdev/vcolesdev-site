"use client";

import { LinkButtonProps } from "@/modules/Controls/Buttons/api";
import ButtonContent from "@/modules/Controls/Buttons/components/ButtonContent";
import ButtonIcon from "@/modules/Controls/Buttons/components/ButtonIcon";
import ButtonWrapper from "@/modules/Controls/Buttons/components/ButtonWrapper";
import useOutlineButtonStyles from "@/modules/Controls/Buttons/hooks/useOutlineButton";
import { LayoutGroup } from "framer-motion";
import Link from "next/link";

export default function OutlineLinkButton({ ...btn }: LinkButtonProps) {
  const { component, icon, text } = useOutlineButtonStyles();
  return (
    <LayoutGroup id={btn.groupId}>
      <Link href={btn.href}>
        <ButtonWrapper groupId={btn.groupId} styles={component}>
          <ButtonContent groupId={btn.groupId} styles={text}>
            {btn.children}
          </ButtonContent>
          {btn.iconButton && <ButtonIcon groupId={btn.groupId} iconStyles={icon.element} wrapperStyles={icon.layout} />}
        </ButtonWrapper>
      </Link>
    </LayoutGroup>
  );
}
