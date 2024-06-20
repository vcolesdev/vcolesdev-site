import {ReactChildren} from "@/utils/types/layout";
import classNames from "classnames";

const styles: PageStyles = {
  title: classNames([
    "mb-8",
    "font-kanit",
    "text-6xl",
    "font-semibold",
    "text-rosy_brown-200",
    "dark:text-melon-900",
  ]),
  description: classNames([
    "text-xl",
    "font-medium",
    "text-rosy_brown-300",
    "dark:text-melon-700/70",
  ]),
};

interface PageTitleProviderProps {
  children: ReactChildren;
  title: string;
}

interface PageHeadingProps {
  title: string;
}

interface PageTitleProps {
  title: string;
  description?: string;
}

interface PageDescriptionProps {
  description: string;
}

interface PageStyles {
  title: string;
  description: string;
}

function PageTitleProvider({children, title}: PageTitleProviderProps) {
  return <div data-page-title={title}>{children}</div>;
}

function PageDescription({description}: PageDescriptionProps) {
  return <p className={styles.description}>{description}</p>;
}

function PageHeading({title}: PageHeadingProps) {
  return <h2 className={styles.title}>{title}</h2>;
}

function PageTitle({title, description}: PageTitleProps) {
  return (
    <PageTitleProvider title={title}>
      <PageHeading title={title} />
      {description && <PageDescription description={description} />}
    </PageTitleProvider>
  );
}

export default PageTitle;
