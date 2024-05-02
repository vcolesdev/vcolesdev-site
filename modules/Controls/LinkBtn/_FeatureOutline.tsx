import Link from "next/link";
import {btnLinkOutline} from "./styles.module";
import {IconCaretRight} from "@tabler/icons-react";

export default function LinkBtnFeatureOutline({
  btnText,
  hasIcon,
  href = "/",
}: {
  btnText: string;
  hasIcon?: boolean;
  href?: string;
}) {
  return (
    <Link href={href} className={btnLinkOutline.styles}>
      <span className={btnLinkOutline.textContent}>
        {btnText}
      </span>
      {hasIcon && (
        <div className={btnLinkOutline.iconWrapper}>
          <IconCaretRight className={btnLinkOutline.icon} stroke={2} />
        </div>
      )}
    </Link>
  );
}
