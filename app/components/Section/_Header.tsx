import SectionTitle from './_Title';
import SectionDescription from './_Description';
import {SectionHeaderProps} from "~/types/Layout";

export default function SectionHeader(props: SectionHeaderProps) {
  const {eyebrowText, description, hasEyebrow, title} = props;

  return (
    <header className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        {hasEyebrow && (
          <span className="inline-block mb-0 text-sm uppercase tracking-wide font-bold leading-7 text-rosy_brown-300">
            {eyebrowText}
          </span>
        )}
        <SectionTitle title={title} />
        {description && <SectionDescription textContent={description} />}
      </div>
    </header>
  );
}
