interface SectionHeaderProps {
  title: string;
  description?: string;
  eyebrowText?: string;
  hasEyebrow?: boolean;
}

function SectionTitle({title}: {title: string}) {
  return (
    <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
      {title}
    </h2>
  );
}

function SectionDescription({textContent}: {textContent: string}) {
  return (
    <p className="mt-6 text-lg leading-8 text-rosy_brown-200/80">
      {textContent}
    </p>
  );
}

export default function SectionHeader(props: SectionHeaderProps) {
  const {eyebrowText, description, hasEyebrow, title} = props;

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        {hasEyebrow && (
          <p className="text-base font-semibold leading-7 text-rosy_brown-300">
            {eyebrowText}
          </p>
        )}
        <SectionTitle title={title} />
        {description && <SectionDescription textContent={description} />}
      </div>
    </div>
  );
}
