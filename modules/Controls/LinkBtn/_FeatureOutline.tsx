import Link from "next/link";
import styles from "./styles.module";
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
    <Link href={href} className={styles.btnLinkOutline.styles}>
      <span className={styles.btnLinkOutline.textContent}>
        {btnText}
      </span>
      {hasIcon && (
        <div className={styles.btnLinkOutline.iconWrapper}>
          <IconCaretRight className={styles.btnLinkOutline.icon} stroke={2} />
        </div>
      )}
    </Link>
  );
}
