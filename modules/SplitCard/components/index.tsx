import {ReactChildren} from "@/utils/types/layout";
import {splitCardStyles as styles} from "../styles.module";

export function SplitCardWrapper({children}: {children: ReactChildren}) {
  return <section className={styles.section.styles}>{children}</section>;
}

export function SplitCardHeaderWrapper({children}: {children: ReactChildren}) {
  return (
    <div className="py-0 sm:py-8 md:py-16 lg:py-24 xl:py-32">{children}</div>
  );
}

export function SplitCardContent({children}: {children: ReactChildren}) {
  return <div className={styles.section.content}>{children}</div>;
}

export function SplitCardImage({children}: {children: ReactChildren}) {
  return <div className={styles.image.wrapper}>{children}</div>;
}

export function SplitCardHeaderContent({children}: {children: ReactChildren}) {
  return <div className={styles.section.header.content}>{children}</div>;
}

export function SplitCardText({children}: {children: ReactChildren}) {
  return <div className={styles.section.textContent}>{children}</div>;
}
