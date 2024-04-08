import useSocialLinks from "~/hooks/useSocialLinks";
import {Link} from "@remix-run/react";

export default function SocialLinks() {
  const social = useSocialLinks();

  const renderLinks = () => {
    return social.map((item) => (
      <Link
        key={item.name}
        to={item.href}
        className="text-rosy_brown-300 hover:text-melon-400"
      >
        <span className="sr-only">{item.name}</span>
        <item.icon className="h-7 w-7" aria-hidden="true" />
      </Link>
    ));
  };

  return <div className="flex space-x-6">{renderLinks()}</div>;
}
