import styles from "../styles.module";

export default function FooterCopyright() {
  const year = new Date().getFullYear();

  return (
    <p className={styles.copyrightText}>
      &copy; {year} Vanessa Coles, Inc. All rights reserved.
    </p>
  );
}
