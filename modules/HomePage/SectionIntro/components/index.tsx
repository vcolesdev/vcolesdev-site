import styles from "@/modules/HomePage/SectionIntro/styles.module";
import { ReactChildren } from "@/utils/types/layout";
import Image from "next/image";

/**
 * Section Intro Title
 * @component SectionIntroTitle
 * @param title
 */
export function SectionIntroTitle({ title }: { title: ReactChildren }) {
  return <h1 className={styles.title}>{title}</h1>;
}

/**
 * Section Intro Text
 * @component SectionIntroText
 * @param text
 */
export function SectionIntroText({ text }: { text: string }) {
  return <p className={styles.text.styles}>{text}</p>;
}

/**
 * Section Intro Featured Image
 * @component SectionIntroFeaturedImage
 * @param imgSrc
 */
export function SectionIntroFeaturedImage({ imgSrc }: { imgSrc: string }) {
  return (
    <div className={styles.image.container}>
      <div className={styles.image.content}>
        <Image priority alt="App screenshot" className={styles.image.styles} height={1442} src={imgSrc} width={2432} />
      </div>
    </div>
  );
}

/**
 * Section Intro Slot
 * @component SectionIntroSlot
 * @param children
 */
export function SectionIntroSlot({ children }: { children: ReactChildren }) {
  return <div className={styles.slot}>{children}</div>;
}

/**
 * Section Intro Text Content
 * @component SectionIntroTextContent
 * @param children
 */
export function SectionIntroTextContent({ children }: { children: ReactChildren }) {
  return <div className={styles.text.content}>{children}</div>;
}

/**
 * Section Intro Container
 * @component SectionIntroContainer
 * @param children
 */
export function SectionIntroContainer({ children }: { children: ReactChildren }) {
  return <div className={styles.container}>{children}</div>;
}
