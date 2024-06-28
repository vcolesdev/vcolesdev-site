import classNames from "classnames";
import { ClassNames } from "@/app/api";

let styles = {} as ClassNames;

const TITLE = ["mb-8", "font-kanit", "text-6xl", "font-semibold", "text-rosy_brown-200", "dark:text-charcoal-900"];
const DESCRIPTION = ["text-xl", "font-medium", "text-rosy_brown-300", "dark:text-charcoal-700"];

styles.title = classNames(TITLE);
styles.description = classNames(DESCRIPTION);

export default styles;
