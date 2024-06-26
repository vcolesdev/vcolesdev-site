"use client";

import { SectionHeaderProps } from "./api";
import { SectionDescription, SectionHeaderContent, SectionHeaderWrapper, SectionTitle } from "./components";

/**
 * Section Header
 * @component SectionHeader
 * @param props
 */
export default function SectionHeader(props: SectionHeaderProps) {
  return (
    <SectionHeaderWrapper>
      <SectionHeaderContent>
        <SectionTitle title={props.title} />
        {props.description && <SectionDescription size={props.textSize || "default"} textContent={props.description} />}
      </SectionHeaderContent>
    </SectionHeaderWrapper>
  );
}
