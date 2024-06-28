"use client";

import { FeaturedCtaProps } from "@/components/Featured/api";
import LinkButton from "@/modules/Controls/Buttons/LinkButton";
import OutlineLinkButton from "@/modules/Controls/Buttons/OutlineLinkButton";

/**
 * Featured Button
 * @component FeaturedButton
 * @param btn
 */
export function FeatureButton(btn: FeaturedCtaProps) {
  return (
    <LinkButton {...btn} groupId="featuredCtaBtn" href={btn.href!} isLink>
      {btn.ctaText}
    </LinkButton>
  );
}

/**
 * Featured Icon Button
 * @component FeaturedIconButton
 * @param btn
 */
export function FeatureIconButton(btn: FeaturedCtaProps) {
  return (
    <LinkButton {...btn} groupId="featuredCtaBtn" href={btn.href!} iconButton isLink>
      {btn.ctaText}
    </LinkButton>
  );
}

/**
 * Featured Outline Button
 * @component FeaturedOutlineButton
 * @param btn
 */
export function FeatureOutlineIconButton(btn: FeaturedCtaProps) {
  return (
    <OutlineLinkButton {...btn} groupId="featuredCtaBtn" href={btn.href!} iconButton isLink outlineStyle>
      {btn.ctaText}
    </OutlineLinkButton>
  );
}

/**
 * Featured Outline Button
 * @component FeaturedOutlineButton
 * @param btn
 */
export function FeatureOutlineButton(btn: FeaturedCtaProps) {
  return (
    <OutlineLinkButton {...btn} groupId="featuredCtaBtn" href={btn.href!} isLink outlineStyle>
      {btn.ctaText}
    </OutlineLinkButton>
  );
}
