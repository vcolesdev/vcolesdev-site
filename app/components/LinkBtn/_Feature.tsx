import styles from "./styles.module";
import {Link} from "@remix-run/react";
import {IconCaretRight} from "@tabler/icons-react";
import {LinkBtnFeatureProps} from "~/types/Controls";

export default function LinkBtnFeature({
  btnText,
  hasIcon,
  href = "/",
}: LinkBtnFeatureProps) {
  return (
    <Link to={href} type="button" className={styles.btnLink.styles}>
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
