import {MouseEvent} from "react";

export interface BtnMobileProps {
  handleClick: (event: MouseEvent) => void;
  textContent: string;
}
