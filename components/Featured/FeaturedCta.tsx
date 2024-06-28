"use client";

import { FeaturedCtaProps, useFeaturedCta } from "@/components/Featured/api";

import styles from "./styles.module";

/**
 * Featured CTA
 * @component FeaturedCta
 * @param btn
 */
export default function FeaturedCta(btn: FeaturedCtaProps) {
  const featuredCta = useFeaturedCta(btn);

  return <div className={styles.featuredCta.wrapper}>{featuredCta}</div>;
}
