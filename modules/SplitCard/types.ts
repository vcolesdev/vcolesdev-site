import { SectionContent } from "@/utils/types/layout";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface SplitCard {
  content: SectionContent;
  image: string | StaticImport;
  hasCta?: boolean;
}

export interface SplitCardStyles {
  section: {
    styles: string;
    content: string;
    textContent: string;
    header: {
      content: string;
    };
  };
  image: {
    styles: string;
    wrapper: string;
  };
}
