import {ReactChildren, SectionHeaderProps} from "@/utils/types/layout";
import classNames from "classnames";

const styles = {
  header: classNames(["mx-auto", "max-w-7xl", "px-6", "lg:px-8"]),
  content: classNames(["mx-auto", "max-w-2xl", "lg:mx-0"]),
  eyebrow: classNames([
    "inline-block",
    "mb-2",
    "text-sm",
    "uppercase",
    "tracking-wide",
    "font-bold",
    "leading-7",
    "text-rosy_brown-300",
  ]),
  description: classNames([
    "mt-6",
    "tracking-tight",
    "leading-8",
    "text-rosy_brown-200/60",
  ]),
  title: classNames([
    "mt-3",
    "text-4xl",
    "font-bold",
    "tracking-tight",
    "sm:text-6xl",
  ]),
};

const SectionHeaderWrapper = ({children}: {children: ReactChildren}) => (
  <header className={styles.header}>{children}</header>
);

const SectionHeaderContent = ({children}: {children: ReactChildren}) => (
  <div className={styles.content}>{children}</div>
);

const SectionEyebrow = ({textContent}: {textContent: string}) => (
  <span className={styles.eyebrow}>{textContent}</span>
);

const SectionTitle = ({title}: {title: string}) => (
  <h2 className={styles.title}>{title}</h2>
);

const SectionDescription = ({
  size,
  textContent,
}: {
  size: "default" | "lg";
  textContent: string;
}) => {
  const defaultClasses = classNames([
    "text-xl",
    "leading-8",
    "tracking-loose",
    "text-rosy_brown-200/60",
  ]);
  const lgClasses = classNames([
    "text-2xl",
    "tracking-tight",
    "leading-relaxed",
    "text-rosy_brown-200/80",
  ]);

  const textSize = size === "lg" ? lgClasses : defaultClasses;

  const classes = classNames([styles.description, textSize]);

  return <p className={classes}>{textContent}</p>;
};

const SectionHeader = (props: SectionHeaderProps) => (
  <SectionHeaderWrapper>
    <SectionHeaderContent>
      {props.hasEyebrow && <SectionEyebrow textContent={props.eyebrowText!} />}
      <SectionTitle title={props.title} />
      {props.description && (
        <SectionDescription
          size={props.textSize || "default"}
          textContent={props.description}
        />
      )}
    </SectionHeaderContent>
  </SectionHeaderWrapper>
);

export default SectionHeader;
