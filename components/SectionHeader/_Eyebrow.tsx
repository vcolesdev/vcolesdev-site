"use client";

import {
  SectionDescription,
  SectionEyebrow,
  SectionHeaderContent,
  SectionHeaderWrapper,
  SectionTitle,
} from "@/components/SectionHeader/components";
import { LayoutGroup, motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

import { SectionHeaderEyebrowProps } from "./api";

const keyframes = {
  animate: {},
  rest: {},
};

const options = {};

export default function SectionHeaderEyebrow(props: SectionHeaderEyebrowProps) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
    } else {
    }
  }, [isInView]);

  return (
    <LayoutGroup id="section-header-eyebrow">
      <motion.div ref={scope} layoutId="section-header-eyebrow">
        <SectionHeaderWrapper>
          <SectionHeaderContent>
            <SectionEyebrow textContent={props.eyebrowText} />
            <SectionTitle title={props.title} />
            {props.description && (
              <SectionDescription size={props.textSize || "default"} textContent={props.description} />
            )}
          </SectionHeaderContent>
        </SectionHeaderWrapper>
      </motion.div>
    </LayoutGroup>
  );
}
