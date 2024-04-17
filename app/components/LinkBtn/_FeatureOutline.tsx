import styles from "./styles.module";
import {Link} from "@remix-run/react";
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
    <Link to={href} className={styles.btnLinkOutline.styles}>
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
