import Nav from "@/modules/Nav/components/Nav";
import {ReactNode} from "react";

export default function Navigation({
  children,
}: {
  children: ReactNode[] | ReactNode;
}) {
  return <Nav id="siteNavMain">{children}</Nav>;
}
