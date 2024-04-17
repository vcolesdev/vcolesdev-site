import React from "react";
import styles from "~/modules/Navigation/styles.module";

export default function LogoSlot({children}: {children: React.ReactNode}) {
  return (
    <div className={styles.logoWrapper}>
      {children}
    </div>
  )
}