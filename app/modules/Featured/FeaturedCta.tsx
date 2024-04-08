import LinkBtnFeature from "~/components/LinkBtnFeature";
import LinkBtnFeatureOutline from "~/components/LinkBtnFeatureOutline";

export default function FeaturedCta({
  hasIcon,
  ctaText = "Read More",
  href = "/",
  isOutline,
}: {
  hasIcon?: boolean;
  ctaText?: string;
  href?: string;
  isOutline?: boolean;
}) {
  return (
    <div className="mx-auto mt-8 max-w-7xl px-8 lg:mt-12">
      {isOutline ? (
        <LinkBtnFeatureOutline hasIcon={hasIcon} btnText={ctaText} href={href} />
      ) : (
        <LinkBtnFeature hasIcon={hasIcon} btnText={ctaText} href={href} />
      )}
    </div>
  );
}
