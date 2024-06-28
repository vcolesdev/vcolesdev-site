"use client";

import FeaturedCta from "@/components/Featured/FeaturedCta";
import SectionHeaderEyebrow from "@/components/SectionHeader/_Eyebrow";
import { SectionHeaderContainer } from "@/components/SectionHeader/components";
import Image from "next/image";

import {
  SplitCardContent,
  SplitCardHeaderContent,
  SplitCardHeaderWrapper,
  SplitCardImage,
  SplitCardText,
  SplitCardWrapper,
} from "./components";
import styles from "./styles.module";
import type { SplitCard } from "./types";

/**
 * SplitCard
 * @module SplitCard
 * @param content
 * @param image
 * @param hasCta
 */
export default function SplitCard({ content, image, hasCta }: SplitCard) {
  return (
    <SplitCardWrapper>
      <SplitCardContent>
        <SplitCardImage>
          <Image src={image} alt={content.imageAlt} className={styles.image.styles} />
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
                {hasCta && <FeaturedCta hasIcon isOutline ctaText={content.ctaText} href={content.ctaLink} />}
              </SplitCardHeaderContent>
            </SplitCardHeaderWrapper>
          </SectionHeaderContainer>
        </SplitCardText>
      </SplitCardContent>
    </SplitCardWrapper>
  );
}
