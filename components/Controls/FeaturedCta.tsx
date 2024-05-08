import Button from "@/modules/Controls/Btn/Button";

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
  const FeatureButton = hasIcon ? (
    <Button isLink iconButton groupId="featuredCtaBtn" href={href}>
      {ctaText}
    </Button>
  ) : (
    <Button isLink groupId="featuredCtaBtn" href={href}>
      {ctaText}
    </Button>
  );

  const FeatureOutlineButton = hasIcon ? (
    <Button isLink iconButton outlineStyle groupId="featuredCtaBtn" href={href}>
      {ctaText}
    </Button>
  ) : (
    <Button isLink outlineStyle groupId="featuredCtaBtn" href={href}>
      {ctaText}
    </Button>
  );

  return (
    <div className="mx-auto mt-8 max-w-7xl px-8 lg:mt-12">
      {isOutline ? FeatureOutlineButton : FeatureButton}
    </div>
  );
}
