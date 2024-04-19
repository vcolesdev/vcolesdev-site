export default function ProjectTitle({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      <h2 className="mb-6 font-kanit text-4xl font-semibold tracking-tight">
        {title}
      </h2>
      {description && <p className="text-lg">{description}</p>}
    </div>
  );
}
