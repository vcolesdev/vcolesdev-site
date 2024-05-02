import Link from "next/link";
import {btnLink} from "./styles.module";
import {IconCaretRight} from "@tabler/icons-react";
import {LinkBtnFeatureProps} from "@/utils/types/controls";

export default function LinkBtnFeature({
  btnText,
  hasIcon,
  href = "/",
}: LinkBtnFeatureProps) {
  return (
    <Link href={href} type="button" className={btnLink.styles}>
      <span className={btnLink.textContent}>
        {btnText}
      </span>
      {hasIcon && (
        <div className={btnLink.iconWrapper}>
          <IconCaretRight className={btnLink.icon} stroke={2} />
        </div>
      )}
    </Link>
  );
}
