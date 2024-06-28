import styles from "../styles.module";
import { PageDescriptionProps, PageHeadingProps, PageTitleProps, PageTitleProviderProps } from "../types";

/**
 * Page Title Provider
 * @component PageTitleProvider
 * @param children
 * @param title
 */
function PageTitleProvider({ children, title }: PageTitleProviderProps) {
  return <div data-page-title={title}>{children}</div>;
}

/**
 * Page Description
 * @component PageDescription
 * @param description
 */
function PageDescription({ description }: PageDescriptionProps) {
  return <p className={styles.description}>{description}</p>;
}

/**
 * Page Heading
 * @component PageHeading
 * @param title
 */
function PageHeading({ title }: PageHeadingProps) {
  return <h2 className={styles.title}>{title}</h2>;
}

/**
 * Page Title
 * @component PageTitle
 * @param title
 * @param description
 */
export default function PageTitle({ title, description }: PageTitleProps) {
  return (
    <PageTitleProvider title={title}>
      <PageHeading title={title} />
      {description && <PageDescription description={description} />}
    </PageTitleProvider>
  );
}
