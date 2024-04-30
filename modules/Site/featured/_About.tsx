import Image from "next/image";
import classNames from "classnames";
import FeaturedCta from "@/components/Controls/FeaturedCta";
import SectionHeader from "@/components/Section/_Header";
import SectionContainer from "@/components/Section/_Container";
import SectionHeaderContainer from "@/components/Section/_HeaderContainer";
import GithubPhoto from "@/assets/images/vcoles-github.jpeg";
import {ReactChildren} from "@/utils/types/layout";

const content = {
  ctaLink: "/about",
  ctaText: "Keep Reading",
  description: "But you can call me Van. 👋🏼 I'm a frontend engineer based in sunny San Diego, CA.  I have over a decade of industry experience and have worked with various stacks, with a current emphasis on full stack experiences.",
  eyebrowText: "About Me",
  imageAlt: "Vanessa's Github",
  title: "Hi, I'm Vanessa",
}

const styles = {
  section: {
    styles: classNames([
      "bg-melon-900",
      "mb-12",
      "max-w-7xl",
      "rounded-2xl",
      "shadow-2xl",
      "shadow-melon-400/20",
      "md:rounded-[32px]",
      "lg:rounded-[48px]",
      "lg:mb-24",
      "overflow-hidden"
    ]),
    content: classNames([
      "grid",
      "md:grid-cols-1",
      "md:gap-x-12",
      "lg:grid-cols-2",
      "lg:gap-y-12"
    ]),
    textContent: classNames([
      "flex",
      "items-center",
      "py-12",
      "sm:py-24",
      "lg:py-0"
    ]),
    header: {
      content: classNames([
        "py-24"
      ])
    }
  },
  image: {
    styles: classNames([
      "h-full",
      "w-full",
      "object-cover"
    ]),
    wrapper: classNames([
      "overflow-hidden"
    ])
  }
}

const SplitCardImage = Image;

const SplitCardImageLeftWrapper = SectionContainer;
const SplitCardImageHeaderContainer = SectionHeaderContainer;
const SplitCardImageHeader = SectionHeader;
const SplitCardCta = FeaturedCta;

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
  <SplitCardImageLeftWrapper noPadding extraClasses={styles.section.styles}>
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
          <SplitCardHeaderContent>
            <SplitCardImageHeader
              hasEyebrow
              eyebrowText={content.eyebrowText}
              title={content.title}
              description={content.description}
            />
            <SplitCardCta
              isOutline
              hasIcon
              ctaText={content.ctaText}
              href={content.ctaLink}
            />
          </SplitCardHeaderContent>
        </SplitCardImageHeaderContainer>
      </SplitCardTextContent>
    </SplitCardImageContent>
  </SplitCardImageLeftWrapper>
);

export default FeaturedAbout;