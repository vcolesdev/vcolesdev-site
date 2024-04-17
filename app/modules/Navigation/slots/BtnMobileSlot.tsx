import React from "react";
import styles from "~/modules/Navigation/styles.module";

export default function BtnMobileSlot({children}: {children: React.ReactNode}) {
  return (
    <div className={styles.btnMobileWrapper}>
      {children}
    </div>
  )
}