"use client";

import {FeaturedCtaProps, useFeaturedCta} from "@/components/Featured/api";
import {featuredCta as styles} from "./styles.module";

export default function FeaturedCta(btn: FeaturedCtaProps) {
  const featuredCta = useFeaturedCta(btn);

  return <div className={styles.wrapper}>{featuredCta}</div>;
}
