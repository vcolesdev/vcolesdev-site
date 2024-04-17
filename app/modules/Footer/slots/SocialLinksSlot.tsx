import React from "react";
import styles from "~/modules/Footer/styles.module";

export default function SocialLinksSlot({children}: {children: React.ReactNode}) {
  return (
    <div className={styles.social}>
      {children}
    </div>
  );
}