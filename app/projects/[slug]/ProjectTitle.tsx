import {pageStyles} from "@/app/styles.module";

export default function ProjectTitle({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      <h2 className={pageStyles.page.subheader}>{title}</h2>
      {description && (
        <p className={pageStyles.page.description}>{description}</p>
      )}
    </div>
  );
}
