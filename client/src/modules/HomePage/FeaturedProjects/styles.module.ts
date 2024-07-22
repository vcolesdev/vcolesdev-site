import classNames from "classnames";
import { ClassNames } from "@/api";

let styles = {} as ClassNames;

const CONTAINER = ["mb-12", "lg:mb-24"];
const PROJECTS_LIST = [
  "container",
  "mx-auto",
  "grid",
  "max-w-7xl",
  "grid-cols-1",
  "gap-4",
  "lg:grid-cols-2",
  "lg:gap-6",
  "xl:grid-cols-3",
  "xl:gap-8",
];

styles = {
  container: classNames(CONTAINER),
  projects: {
    list: classNames(PROJECTS_LIST),
  },
};

export default styles;
