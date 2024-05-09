"use client";

import FeaturedCta from "@/components/Featured/FeaturedCta";
import SectionHeaderEyebrow from "@/components/SectionHeader/_Eyebrow";
import {SectionHeaderContainer} from "@/components/SectionHeader/components";
import {SectionContent} from "@/utils/types/layout";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import {
  SplitCardContent,
  SplitCardHeaderContent,
  SplitCardHeaderWrapper,
  SplitCardImage,
  SplitCardText,
  SplitCardWrapper,
} from "./components";
import {splitCardStyles as styles} from "./styles.module";

export default function SplitCard({
  content,
  image,
}: {
  content: SectionContent;
  image: string | StaticImport;
}) {
  return (
    <SplitCardWrapper>
      <SplitCardContent>
        <SplitCardImage>
          <Image
            src={image}
            alt={content.imageAlt}
            className={styles.image.styles}
          />
        </SplitCardImage>
        <SplitCardText>
          <SectionHeaderContainer noMarginBottom>
            <SplitCardHeaderWrapper>
              <SplitCardHeaderContent>
                <SectionHeaderEyebrow
                  description={content.description}
                  eyebrowText={content.eyebrowText}
                  textSize="lg"
                  title={content.title}
                />
                <FeaturedCta
                  hasIcon
                  isOutline
                  ctaText={content.ctaText}
                  href={content.ctaLink}
                />
              </SplitCardHeaderContent>
            </SplitCardHeaderWrapper>
          </SectionHeaderContainer>
        </SplitCardText>
      </SplitCardContent>
    </SplitCardWrapper>
  );
}
