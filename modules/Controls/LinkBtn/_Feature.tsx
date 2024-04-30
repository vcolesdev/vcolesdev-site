import styles from "./styles.module";
import Link from "next/link";
import {IconCaretRight} from "@tabler/icons-react";
import {LinkBtnFeatureProps} from "@/utils/types/controls";

export default function LinkBtnFeature({
  btnText,
  hasIcon,
  href = "/",
}: LinkBtnFeatureProps) {
  return (
    <Link href={href} type="button" className={styles.btnLink.styles}>
      <span className={styles.btnLink.textContent}>
        {btnText}
      </span>
      {hasIcon && (
        <div className={styles.btnLink.iconWrapper}>
          <IconCaretRight className={styles.btnLink.icon} stroke={2} />
        </div>
      )}
    </Link>
  );
}
