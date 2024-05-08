import React from "react";
import styles from "../styles.module";

export default function FooterContent({children}: {children: React.ReactNode}) {
  return <div className={styles.content}>{children}</div>;
}
