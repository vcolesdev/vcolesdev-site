export default function PageTitle({
  title,
  description
}: {
  title: string,
  description?: string,
}) {
  return (
    <div data-page-title={title}>
      <h2 className="mb-8 tracking-tight font-bold text-6xl text-rosy_brown-200">{title}</h2>
      {description && (
        <p className="font-medium text-xl text-rosy_brown-300">{description}</p>
      )}
    </div>
  )
}