export default function SectionTitle({title}: {title: string}) {
  return (
    <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
      {title}
    </h2>
  );
}