"use client";

import { FeaturedCtaProps } from "@/components/Featured/api";
import LinkButton from "@/modules/Controls/Buttons/LinkButton";
import OutlineLinkButton from "@/modules/Controls/Buttons/OutlineLinkButton";

export function FeatureButton(btn: FeaturedCtaProps) {
  return (
    <LinkButton {...btn} groupId="featuredCtaBtn" href={btn.href!} isLink>
      {btn.ctaText}
    </LinkButton>
  );
}

export function FeatureIconButton(btn: FeaturedCtaProps) {
  return (
    <LinkButton {...btn} groupId="featuredCtaBtn" href={btn.href!} iconButton isLink>
      {btn.ctaText}
    </LinkButton>
  );
}

export function FeatureOutlineIconButton(btn: FeaturedCtaProps) {
  return (
    <OutlineLinkButton {...btn} groupId="featuredCtaBtn" href={btn.href!} iconButton isLink outlineStyle>
      {btn.ctaText}
    </OutlineLinkButton>
  );
}

export function FeatureOutlineButton(btn: FeaturedCtaProps) {
  return (
    <OutlineLinkButton {...btn} groupId="featuredCtaBtn" href={btn.href!} isLink outlineStyle>
      {btn.ctaText}
    </OutlineLinkButton>
  );
}
