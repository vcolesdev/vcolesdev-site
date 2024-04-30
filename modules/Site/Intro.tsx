import * as React from "react";
import Image from "next/image";
import classNames from "classnames";
import SocialLinks from "../../components/SocialLinks";
import UnderConstruction from "../../components/UnderConstruction";
import {ReactChildren} from "@/utils/types/layout";

interface SectionIntroProps {
  featuredImageSrc?: string;
  hasFeaturedImage?: boolean;
}

const content = {
  title: "Welcome to My Space",
  text: "Welcome to my personal space on the web. I'm a Full-Stack Engineer with a passion for beautiful UI and creating and building things."
}

const styles = {
  container: classNames([
    "px-6",
    "py-24",
    "sm:py-32",
    "lg:px-8"
  ]),
  slot: classNames([
    "flex",
    "mt-12",
    "justify-center"
  ]),
  title: classNames([
    "mt-2",
    "text-4xl",
    "font-bold",
    "tracking-tight",
    "sm:text-6xl",
  ]),
  text: {
    styles: classNames([
     "mt-6",
     "text-xl",
     "leading-8",
     "text-rosy_brown-200/70",
    ]),
    content: classNames([
      "mx-auto",
      "max-w-2xl",
      "text-center"
    ])
  },
  image: {
    styles: classNames([
      "rounded-md",
      "shadow-2xl",
      "ring-1",
      "ring-gray-900/10"
    ]),
    container: classNames([
      "mt-16",
      "flow-root",
      "sm:mt-24"
    ]),
    content: classNames([
      "-m-2",
      "rounded-xl",
      "bg-gray-900/5",
      "p-2",
      "ring-1",
      "ring-inset",
      "ring-gray-900/10",
      "lg:-m-4",
      "lg:rounded-2xl",
      "lg:p-4"
    ])
  },
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
      <SocialLinks />
    </IntroSlot>
    <IntroSlot>
      <UnderConstruction />
    </IntroSlot>
    {hasFeaturedImage && featuredImageSrc && (<IntroFeaturedImage imgSrc={featuredImageSrc} />)}
  </IntroContainer>
);

export default SectionIntro;
