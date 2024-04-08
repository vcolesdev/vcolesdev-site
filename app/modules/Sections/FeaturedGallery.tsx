import SectionContainer from "~/components/SectionContainer";
import SectionHeader from "~/components/SectionHeader";
import SectionHeaderContainer from "~/components/SectionHeaderContainer";
import FeaturedCta from "~/modules/Featured/FeaturedCta";
import useFeaturedImages from "~/hooks/useFeaturedImages";
import { Link } from "@remix-run/react";
import { useState } from "react";
import { IconArrowsMaximize } from "@tabler/icons-react";

function ImageCardOverlay() {
  return (
    <div className="absolute inset-0 flex h-full w-full items-center justify-center rounded-[20px] bg-melon-300/90 bg-opacity-100 transition active:bg-melon-300">
      <span className="text-white">
        <IconArrowsMaximize stroke={1.5} size={36} />
      </span>
    </div>
  );
}

function FeaturedImageCard({ imgSrc }: { imgSrc: string }) {
  const [overlay, setOverlay] = useState(false);
  return (
    <Link
      className="group relative flex rounded-[26px] border-8 border-transparent active:border-8 active:border-melon-500"
      to={imgSrc}
      onMouseOver={() => setOverlay(true)}
      onMouseLeave={() => setOverlay(false)}
    >
      {overlay && <ImageCardOverlay />}
      <img className="h-auto max-w-full rounded-[20px]" src={imgSrc} alt="" />
    </Link>
  );
}

export default function SectionFeaturedGallery() {
  const { featuredImages } = useFeaturedImages();
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
