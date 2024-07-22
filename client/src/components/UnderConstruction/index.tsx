import styles from "./styles.module";

/**
 * Under Construction
 * @component UnderConstruction
 */
export default function UnderConstruction() {
  return (
    <div className={styles.banner.styles}>
      <div className={styles.banner.contentWrapper}>
        <div className={styles.banner.content}>
          <div className={styles.textContent.styles}>
            <p className={styles.textContent.span}>
              <span className="px-3 font-kanit text-sm font-medium uppercase tracking-wide">Work in Progress</span>
            </p>
            <p>This site is under construction. Thank you for stopping by!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
