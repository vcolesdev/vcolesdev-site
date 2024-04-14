import FeaturedCta from "~/modules/Featured/FeaturedCta";
import SectionHeader from "~/components/Section/SectionHeader";
import SectionContainer from "~/components/Section/SectionContainer";
import SectionHeaderContainer from "~/components/Section/SectionHeaderContainer";
import GithubPhoto from "~/assets/images/vcoles-github.jpeg";

export default function SectionFeaturedAbout() {
  return (
    <SectionContainer
      noPadding
      extraClasses="bg-melon-900 mb-12 rounded-2xl shadow-2xl shadow-melon-400/20 lg:rounded-[32px] lg:mb-24 overflow-hidden"
    >
      <div className="grid md:grid-cols-1 md:gap-x-12 lg:grid-cols-2 lg:gap-y-12">
        <div className="overflow-hidden">
          <img
            src={GithubPhoto}
            alt="Vcoles Github"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center py-12 sm:py-24 lg:py-0">
          <SectionHeaderContainer noMarginBottom>
            <SectionHeader
              hasEyebrow
              eyebrowText="Spotlight"
              title="About Me"
              description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
            />
            <FeaturedCta
              isOutline
              hasIcon
              ctaText="Keep Reading"
              href="/about"
            />
          </SectionHeaderContainer>
        </div>
      </div>
    </SectionContainer>
  );
}
