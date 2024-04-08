import LinkBtnFeatureOutline from "~/components/LinkBtnFeatureOutline";

export default function FeaturedCta({
  hasIcon,
  ctaText = "Read More",
  href = "/",
}: {
  hasIcon?: boolean;
  ctaText?: string;
  href?: string;
}) {
  return (
    <div className="mx-auto mt-8 max-w-7xl px-8 lg:mt-12">
      <LinkBtnFeatureOutline hasIcon={hasIcon} btnText={ctaText} href={href} />
    </div>
  );
}
