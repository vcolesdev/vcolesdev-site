import useSocialLinks from "~/hooks/useSocialLinks";

export default function SocialLinks() {
  const social = useSocialLinks();

  const renderLinks = () => {
    return social.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className="
          relative
          p-1.5
          rounded-lg
          bg-melon-900
          border-2
          border-melon-900
          text-rosy_brown-300
          shadow-lg
          shadow-melon-300/20
          hover:border-rosy_brown-300
          hover:bg-melon-900
          hover:text-rosy_brown-400
          active:bg-melon-500
          active:text-rosy_brown-200
          active:translate-y-0.5
          transition-all
          duration-75
          "
      >
        <span className="sr-only">{item.name}</span>
        <item.icon aria-hidden="true" />
      </a>
    ));
  };

  return <div className="flex space-x-6">{renderLinks()}</div>;
}
