import classNames from "classnames";
import { ClassNames } from "@/api";

let styles = {} as ClassNames;

const CONTENT = ["container", "mx-auto", "grid", "max-w-7xl", "sm:grid-cols-2", "sm:gap-2", "md:grid-cols-3"];

styles.content = classNames(CONTENT);

export default styles;
