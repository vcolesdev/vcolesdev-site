import classNames from "classnames";
import {ReactChildren} from "@/utils/types/layout";

interface PageTitleProps {
  title: string;
  description?: string;
}

const styles = {
  title: classNames([
    "mb-8",
    "font-kanit",
    "text-6xl",
    "font-medium",
    "text-rosy_brown-200"
  ]),
  description: classNames([
    "text-xl",
    "font-medium",
    "text-rosy_brown-300"
  ])
}

const PageTitleProvider = ({children, title}: {children: ReactChildren, title: string}) => (
  <div data-page-title={title}>
    {children}
  </div>
);

const PageDescription = ({description}: {description: string}) => (
  <p className={styles.description}>
    {description}
  </p>
);

const PageHeading = ({title}: {title: string}) => (
  <h2 className={styles.title}>
    {title}
  </h2>
);

const PageTitle = ({title, description}: PageTitleProps) => (
  <PageTitleProvider title={title}>
    <PageHeading title={title} />
    {description && <PageDescription description={description} />}
  </PageTitleProvider>
);

export default PageTitle;