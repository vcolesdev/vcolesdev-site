"use client";

import SocialLinks from "../../../components/SocialLinks";
import UnderConstruction from "../../../components/UnderConstruction";
import {
  SectionIntroContainer,
  SectionIntroFeaturedImage,
  SectionIntroSlot,
  SectionIntroText,
  SectionIntroTextContent,
  SectionIntroTitle,
} from "./components";

interface SectionIntroProps {
  featuredImageSrc?: string;
  hasFeaturedImage?: boolean;
}

const CONTENT = {
  title: "Welcome to My Space",
  text: "Welcome to my personal space on the web. I'm a Full-Stack Engineer with a passion for beautiful UI and creating and building things.",
};

/**
 * Section Intro
 * @component SectionIntro
 * @param featuredImageSrc
 * @param hasFeaturedImage
 */
export default function SectionIntro({ featuredImageSrc, hasFeaturedImage = false }: SectionIntroProps) {
  const { title, text } = CONTENT;

  const handleFeaturedImage = hasFeaturedImage && featuredImageSrc && (
    <SectionIntroFeaturedImage imgSrc={featuredImageSrc} />
  );

  return (
    <SectionIntroContainer>
      <SectionIntroTextContent>
        <SectionIntroTitle title={title} />
        <SectionIntroText text={text} />
      </SectionIntroTextContent>
      <SectionIntroSlot>
        <UnderConstruction />
      </SectionIntroSlot>
      <SectionIntroSlot>
        <SocialLinks />
      </SectionIntroSlot>
      {handleFeaturedImage}
    </SectionIntroContainer>
  );
}
