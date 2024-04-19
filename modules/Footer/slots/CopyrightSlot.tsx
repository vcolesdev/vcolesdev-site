import React from "react";
import styles from "../styles.module";

export default function CopyrightSlot({children}: {children: React.ReactNode}) {
  return (
    <div className={styles.copyright}>
      {children}
    </div>
  );
}