import useSocialLinks from "~/hooks/useSocialLinks";

export default function FooterSocialLinks() {
  const socialLinks = useSocialLinks();

  return (
    <div className="mt-10 flex justify-center space-x-10">
      {socialLinks.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-rosy_brown-300 hover:text-melon-400"
        >
          <span className="sr-only">{item.name}</span>
          <item.icon className="h-6 w-6" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
