import Image from "next/image";
import styles from "./styles.module";
import FeaturedCta from "@/components/Controls/FeaturedCta";
import SectionHeader from "@/components/Section/_Header";
import SectionHeaderContainer from "@/components/Section/_HeaderContainer";
import GithubPhoto from "@/assets/images/vcoles-github.jpeg";
import {ReactChildren} from "@/utils/types/layout";

const content = {
  ctaLink: "/about",
  ctaText: "Keep Reading",
  description: `But you can call me Van. 👋🏼 I'm a Full-Stack Engineer based in sunny San Diego, CA.  I have over a decade of industry experience and have worked with various languages and stacks, currently enjoying working with React, Node, Python, and MongoDB.`,
  eyebrowText: "About Me",
  imageAlt: "Vanessa's Github",
  title: "Hi, I'm Vanessa",
}

const SplitCardImage = Image;
const SplitCardImageHeaderContainer = SectionHeaderContainer;
const SplitCardImageHeader = SectionHeader;
const SplitCardCta = FeaturedCta;

const SplitCardImageLeftWrapper = ({children}: {children: ReactChildren}) => (
  <section className={styles.section.styles}>
    {children}
  </section>
);

const SplitCardImageContent = ({children}: {children: ReactChildren}) => (
  <div className={styles.section.content}>
    {children}
  </div>
);

const SplitCardImageWrapper = ({children}: {children: ReactChildren}) => (
  <div className={styles.image.wrapper}>
    {children}
  </div>
);

const SplitCardHeaderContent = ({children}: {children: ReactChildren}) => (
  <div className={styles.section.header.content}>
    {children}
  </div>
);

const SplitCardTextContent = ({children}: {children: ReactChildren}) => (
  <div className={styles.section.textContent}>
    {children}
  </div>
);

const FeaturedAbout = () => (
  <SplitCardImageLeftWrapper>
    <SplitCardImageContent>
      <SplitCardImageWrapper>
        <SplitCardImage
          src={GithubPhoto}
          alt={content.imageAlt}
          className={styles.image.styles}
        />
      </SplitCardImageWrapper>
      <SplitCardTextContent>
        <SplitCardImageHeaderContainer noMarginBottom>
          <div className="py-0 sm:py-8 md:py-16 lg:py-24 xl:py-32">
            <SplitCardHeaderContent>
              <SplitCardImageHeader
                hasEyebrow
                eyebrowText={content.eyebrowText}
                title={content.title}
                textSize={"lg"}
                description={content.description}
              />
              <SplitCardCta
                isOutline
                hasIcon
                ctaText={content.ctaText}
                href={content.ctaLink}
              />
            </SplitCardHeaderContent>
          </div>
        </SplitCardImageHeaderContainer>
      </SplitCardTextContent>
    </SplitCardImageContent>
  </SplitCardImageLeftWrapper>
);

export default FeaturedAbout;