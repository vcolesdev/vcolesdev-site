import {MouseEvent} from "react";

export interface BtnMobileProps {
  handleClick: (event: MouseEvent) => void,
  textContent: string
}

export interface LinkBtnFeatureProps {
  btnText: string;
  hasIcon?: boolean;
  href?: string;
}