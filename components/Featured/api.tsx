"use client";

import {
  FeatureIconButton,
  FeatureOutlineIconButton,
} from "@/components/Featured/components";
import {ReactChildren} from "@/utils/types/layout";

export interface FeaturedCtaProps {
  hasIcon?: boolean;
  ctaText?: string;
  href?: string;
  isOutline?: boolean;
}

export function getFeaturedCta(btn: FeaturedCtaProps) {
  let component: ReactChildren;

  if (btn.isOutline) {
    component = (
      <FeatureOutlineIconButton
        ctaText={btn.ctaText}
        href={btn.href}
        {...btn}
      />
    );
  } else {
    component = (
      <FeatureIconButton ctaText={btn.ctaText} href={btn.href} {...btn} />
    );
  }

  return component;
}

export function useFeaturedCta(btn: FeaturedCtaProps) {
  return getFeaturedCta(btn);
}
