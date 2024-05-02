import * as React from "react";
import Image from "next/image";
import styles from "./styles.module";
import SocialLinks from "../../../components/SocialLinks";
import UnderConstruction from "../../../components/UnderConstruction";
import {ReactChildren} from "@/utils/types/layout";

interface SectionIntroProps {
  featuredImageSrc?: string;
  hasFeaturedImage?: boolean;
}

const content = {
  title: "Welcome to My Space",
  text: "Welcome to my personal space on the web. I'm a Full-Stack Engineer with a passion for beautiful UI and creating and building things."
}

const IntroImage = Image;

const IntroTitle = ({title}: {title: ReactChildren}) => (
  <h2 className={styles.title}>
    {title}
  </h2>
);

const IntroText = ({text}: {text: string}) => (
  <p className={styles.text.styles}>
    {text}
  </p>
);

function IntroFeaturedImage({imgSrc}: {imgSrc: string}) {
  return (
    <div className={styles.image.container}>
      <div className={styles.image.content}>
        <IntroImage
          priority
          src={imgSrc}
          alt="App screenshot"
          width={2432}
          height={1442}
          className={styles.image.styles}
        />
      </div>
    </div>
  );
}

const IntroSlotTop = ({children}: {children: ReactChildren}) => (
  <div className={styles.slotTop}>
    {children}
  </div>
);

const IntroSlotBottom = ({children}: {children: ReactChildren}) => (
  <div className={styles.slotBottom}>{children}</div>
);

const IntroSlot = ({children}: {children: ReactChildren}) => (
  <div className={styles.slot}>{children}</div>
);

const IntroTextContent = ({children}: {children: ReactChildren}) => (
  <div className={styles.text.content}>
    {children}
  </div>
);

const IntroContainer = ({children}: {children: ReactChildren}) => (
  <div className={styles.container}>
    {children}
  </div>
);

const SectionIntro = ({featuredImageSrc, hasFeaturedImage = false}: SectionIntroProps) => (
  <IntroContainer>
    <IntroTextContent>
      <IntroTitle title={content.title} />
      <IntroText text={content.text} />
    </IntroTextContent>
    <IntroSlot>
      <UnderConstruction />
    </IntroSlot>
    <IntroSlot>
      <SocialLinks />
    </IntroSlot>
    {hasFeaturedImage && featuredImageSrc && (<IntroFeaturedImage imgSrc={featuredImageSrc} />)}
  </IntroContainer>
);

export default SectionIntro;