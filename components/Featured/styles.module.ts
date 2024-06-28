import classNames from "classnames";
import { ClassNames } from "@/app/api";

let styles = {} as ClassNames;

const WRAPPER = ["mx-auto", "mt-8", "max-w-7xl", "px-8", "lg:mt-12"];

styles.featuredCta = {
  wrapper: classNames(WRAPPER),
};

export default styles;
