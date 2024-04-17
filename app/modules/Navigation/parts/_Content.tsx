import React from "react";
import styles from "~/modules/Navigation/styles.module";

export default function NavContent({children}: {children: React.ReactNode}) {
  return (
    <div className={styles.nav.content}>
      {children}
    </div>
  )
}