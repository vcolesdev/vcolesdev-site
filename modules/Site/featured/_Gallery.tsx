"use client";

import Link from "next/link";
import Image from "next/image";
import SectionContainer from "@/components/Section/_Container";
import SectionHeader from "@/components/Section/_Header";
import SectionHeaderContainer from "@/components/Section/_HeaderContainer";
import FeaturedCta from "@/modules/FeaturedCta/FeaturedCta";
import useFetchFeaturedImages from "@/hooks/fetchers/useFetchFeaturedImages";
import {useState} from "react";
import {IconArrowsMaximize} from "@tabler/icons-react";

function ImageCardOverlay() {
  return (
    <div className="absolute inset-0 flex h-full w-full items-center justify-center rounded-[32px] bg-melon-400/90 bg-opacity-100 transition active:bg-melon-400">
      <span className="text-white">
        <IconArrowsMaximize stroke={1.5} size={36} />
      </span>
    </div>
  );
}

function FeaturedImageCard({imgSrc}: {imgSrc: any}) {
  const [overlay, setOverlay] = useState(false);
  return (
    <Link
      className="group relative flex rounded-[40px] border-8 border-transparent active:border-8 active:border-melon-500"
      href={imgSrc}
      onMouseOver={() => setOverlay(true)}
      onMouseLeave={() => setOverlay(false)}
    >
      {overlay && <ImageCardOverlay />}
      <Image className="h-auto max-w-full rounded-[32px]" src={imgSrc} alt="" />
    </Link>
  );
}

export default function FeaturedGallery() {
  const {featuredImages} = useFetchFeaturedImages();
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <SectionContainer>
      <SectionHeaderContainer>
        <SectionHeader
          hasEyebrow
          eyebrowText="Personal Hobby"
          title="Photos I've Taken"
          description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
        />
        <FeaturedCta hasIcon ctaText="View All Photos" href="/photos" />
      </SectionHeaderContainer>
      <div className="container mx-auto grid max-w-7xl sm:grid-cols-2 sm:gap-2 md:grid-cols-3">
        {featuredImages &&
          featuredImages.map((img, index) => (
            <FeaturedImageCard key={index} imgSrc={img} />
          ))}
      </div>
    </SectionContainer>
  );
}
