import React from "react";
import styles from "../styles.module";

export default function SocialLinksSlot({children}: {children: React.ReactNode}) {
  return (
    <div className={styles.social}>
      {children}
    </div>
  );
}