export default function ProjectTags({tags}: {tags: string[]}) {
  return (
    <ul className="flex gap-3">
      {tags.map((tag) => (
        <span
          key={tag}
          className="
            block
            rounded-xl
            border-2
            border-melon-300/20
            px-2.5
            py-1.5
            text-base
            font-semibold
            tracking-tight
            text-melon-300
            hover:border-melon-400"
        >
          {tag}
        </span>
      ))}
    </ul>
  );
}
