export default function ProjectLink({
  href,
  linkText,
}: {
  href: string;
  linkText: string;
}) {
  return (
    <p>
      <a
        href={href}
        className="cursor-pointer font-medium tracking-tight text-melon-300 hover:text-melon-400"
        target="_blank"
        rel="noreferrer"
      >
        {linkText}
      </a>
    </p>
  );
}
