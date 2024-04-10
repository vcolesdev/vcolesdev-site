export default function PageTitle({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div data-page-title={title}>
      <h2 className="mb-8 font-kanit text-6xl font-medium text-rosy_brown-200">
        {title}
      </h2>
      {description && (
        <p className="text-xl font-medium text-rosy_brown-300">{description}</p>
      )}
    </div>
  );
}
