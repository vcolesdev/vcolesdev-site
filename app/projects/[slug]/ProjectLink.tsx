import classNames from "classnames";

const linkStyles = {
  element: classNames([
    "cursor-pointer",
    "font-medium",
    "tracking-tight",
    "text-melon-300",
    "hover:text-melon-400",
    "dark:text-rose-400",
    "dark:hover:text-rose-500",
  ]),
};

interface ProjectLink {
  href: string;
  linkText: string;
}

export default function ProjectLink({href, linkText}: ProjectLink) {
  // Link to be updated...
  return (
    <p>
      <a
        href={href}
        className={linkStyles.element}
        target="_blank"
        rel="noreferrer"
      >
        {linkText}
      </a>
    </p>
  );
}
