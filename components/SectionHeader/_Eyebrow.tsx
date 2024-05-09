import {
  SectionDescription,
  SectionEyebrow,
  SectionHeaderContent,
  SectionHeaderWrapper,
  SectionTitle,
} from "@/components/SectionHeader/components";
import {SectionHeaderEyebrowProps} from "./api";

export default function SectionHeaderEyebrow(props: SectionHeaderEyebrowProps) {
  return (
    <SectionHeaderWrapper>
      <SectionHeaderContent>
        <SectionEyebrow textContent={props.eyebrowText} />
        <SectionTitle title={props.title} />
        {props.description && (
          <SectionDescription
            size={props.textSize || "default"}
            textContent={props.description}
          />
        )}
      </SectionHeaderContent>
    </SectionHeaderWrapper>
  );
}
