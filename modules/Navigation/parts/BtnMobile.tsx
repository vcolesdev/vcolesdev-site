import styles from "../styles.module";
import IconMobile from "../parts/IconMobile";
import {BtnMobileProps} from "@/types/Controls";

export default function BtnMobile(props: BtnMobileProps) {
  return (
    <button type="button" className={styles.btnMobile} onClick={props.handleClick}>
      <span className="sr-only">
        {props.textContent}
      </span>
      <IconMobile />
    </button>
  );
}